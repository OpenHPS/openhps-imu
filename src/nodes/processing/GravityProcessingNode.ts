import {
    DataObject,
    FilterProcessingNode,
    FilterProcessingOptions,
    Acceleration,
    AccelerationUnit,
    DataFrame,
    Accelerometer,
    LinearAccelerationSensor,
    RelativeOrientationSensor,
    AbsoluteOrientationSensor,
    GravitySensor,
} from '@openhps/core';

/**
 * @category Processing node
 */
export class GravityProcessingNode extends FilterProcessingNode<DataFrame> {
    protected options: GravityProcessingOptions;

    constructor(options?: GravityProcessingOptions) {
        super(options);
        this.options.method = this.options.method || GravityProcessingMethod.LOW_PASS;
    }

    public initFilter(object: DataObject, frame: DataFrame, options?: FilterProcessingOptions): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (!frame.getSensor(Accelerometer)) {
                return reject(new Error(`Gravity processing requires raw accelerometer readings!`));
            }
            resolve(options);
        });
    }

    public filter(object: DataObject, frame: DataFrame): Promise<DataObject> {
        return new Promise<DataObject>((resolve) => {
            let method: GravityProcessingMethod;

            if (frame.getSensor(LinearAccelerationSensor)) {
                method = GravityProcessingMethod.LINEAR_ACCELERATION;
            } else if (frame.getSensor(RelativeOrientationSensor)) {
                method = GravityProcessingMethod.RELATIVE_ORIENTATION;
            } else if (frame.getSensor(AbsoluteOrientationSensor)) {
                method = GravityProcessingMethod.ABSOLUTE_ORIENTATION;
            }

            switch (method) {
                case GravityProcessingMethod.LINEAR_ACCELERATION:
                    this._fromLinearAcceleration(frame);
                    break;
                case GravityProcessingMethod.LOW_PASS:
                    this._usingLPFilter(frame); // Unused
                    break;
                case GravityProcessingMethod.ABSOLUTE_ORIENTATION:
                    this._fromAbsoluteOrientation(frame);
                    break;
                default:
                case GravityProcessingMethod.RELATIVE_ORIENTATION:
                    this._fromRelativeOrientation(frame);
                    break;
            }
            resolve(object);
        });
    }

    private _fromLinearAcceleration(frame: DataFrame): void {
        // Simply subtract the acceleration (with gravity) from the linear acceleration
        const linearAcceleration = frame.getSensor(LinearAccelerationSensor);

        const gravity = frame.getSensor(GravitySensor, this.uid + '_gravity');
        gravity.value = frame.getSensor(Accelerometer).value.clone().sub(linearAcceleration.value);
        gravity.frequency = linearAcceleration.frequency;
    }

    // TODO: Unused
    private _usingLPFilter(frame: DataFrame): void {
        // Use low pass filter to filter out gravity
        const gravity = frame.getSensor(GravitySensor, this.uid + '_gravity');
        gravity.value = new Acceleration();
        const linearAcceleration = frame.getSensor(LinearAccelerationSensor, this.uid + '_linearaccl');
        linearAcceleration.value = frame.getSensor(Accelerometer).value.clone().sub(gravity.value);
        linearAcceleration.frequency = frame.getSensor(Accelerometer).frequency;
    }

    private _fromRelativeOrientation(frame: DataFrame): void {
        // Use gyroscope data to filter out gravity
        const relativeOrientation = frame.getSensor(RelativeOrientationSensor);

        const gravity = frame.getSensor(GravitySensor, this.uid + '_gravity');
        const linearAcceleration = frame.getSensor(LinearAccelerationSensor, this.uid + '_linearaccl');
        linearAcceleration.value = frame
            .getSensor(Accelerometer)
            .value.clone()
            .multiply(relativeOrientation.value.toEuler().toVector());
        linearAcceleration.frequency = relativeOrientation.frequency;
        gravity.value = frame.getSensor(Accelerometer).value.clone().sub(linearAcceleration.value);
        gravity.frequency = relativeOrientation.frequency;
    }

    private _fromAbsoluteOrientation(frame: DataFrame): void {
        // Use orientation data to filter out gravity
        const absoluteOrientation = frame.getSensor(AbsoluteOrientationSensor);
        const acceleration = frame.getSensor(Accelerometer);

        const gravity = frame.getSensor(GravitySensor, this.uid + '_gravity');
        gravity.value = new Acceleration(0, 0, 1, AccelerationUnit.GRAVITATIONAL_FORCE).applyQuaternion(
            absoluteOrientation.value,
        );
        const linearAcceleration = frame.getSensor(LinearAccelerationSensor, this.uid + '_linearaccl');
        linearAcceleration.value = acceleration.value.clone().sub(gravity.value);
        gravity.frequency = acceleration.frequency;
        linearAcceleration.frequency = acceleration.frequency;
    }
}

export enum GravityProcessingMethod {
    LOW_PASS,
    ABSOLUTE_ORIENTATION,
    RELATIVE_ORIENTATION,
    LINEAR_ACCELERATION,
}

export interface GravityProcessingOptions extends FilterProcessingOptions {
    method?: GravityProcessingMethod;
}
