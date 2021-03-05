import {
    DataObject,
    FilterProcessingNode,
    IMUDataFrame,
    FilterProcessingOptions,
    Acceleration,
    AccelerationUnit,
} from '@openhps/core';

/**
 * @category Processing node
 */
export class GravityProcessingNode extends FilterProcessingNode<IMUDataFrame> {
    protected options: GravityProcessingOptions;

    constructor(options?: GravityProcessingOptions) {
        super(options);
        this.options.method = this.options.method || GravityProcessingMethod.LOW_PASS;
    }

    public initFilter(object: DataObject, frame: IMUDataFrame, options?: FilterProcessingOptions): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (!frame.acceleration) {
                return reject(new Error(`Gravity processing requires accelerometer readings!`));
            }
            resolve(options);
        });
    }

    public filter(object: DataObject, frame: IMUDataFrame): Promise<DataObject> {
        return new Promise<DataObject>((resolve) => {
            let method: GravityProcessingMethod;

            if (frame.linearAcceleration) {
                method = GravityProcessingMethod.LINEAR_ACCELERATION;
            } else if (frame.relativeOrientation) {
                method = GravityProcessingMethod.RELATIVE_ORIENTATION;
            } else if (frame.absoluteOrientation) {
                method = GravityProcessingMethod.ABSOLUTE_ORIENTATION;
            }

            switch (method) {
                case GravityProcessingMethod.LINEAR_ACCELERATION:
                    this._fromLinearAcceleration(frame);
                    break;
                case GravityProcessingMethod.LOW_PASS:
                    this._usingLPFilter(frame);
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

    private _fromLinearAcceleration(frame: IMUDataFrame): void {
        // Simply subtract the acceleration (with gravity) from the linear acceleration
        frame.gravity = frame.acceleration.clone().sub(frame.linearAcceleration);
    }

    private _usingLPFilter(frame: IMUDataFrame): void {
        // Use low pass filter to filter out gravity
        frame.gravity = new Acceleration();
        frame.linearAcceleration = frame.acceleration.clone().sub(frame.gravity);
    }

    private _fromRelativeOrientation(frame: IMUDataFrame): void {
        // Use gyroscope data to filter out gravity
        frame.linearAcceleration = frame.acceleration.clone().multiply(frame.relativeOrientation.toEuler().toVector3());
        frame.gravity = frame.acceleration.clone().sub(frame.linearAcceleration);
    }

    private _fromAbsoluteOrientation(frame: IMUDataFrame): void {
        // Use orientation data to filter out gravity
        frame.gravity = new Acceleration(0, 0, 1, AccelerationUnit.GRAVITATIONAL_FORCE).applyQuaternion(
            frame.absoluteOrientation,
        );
        frame.linearAcceleration = frame.acceleration.clone().sub(frame.gravity);
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
