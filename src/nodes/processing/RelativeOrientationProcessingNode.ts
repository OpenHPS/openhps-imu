import {
    FilterProcessingNode,
    DataObject,
    Orientation,
    DataFrame,
    Accelerometer,
    Gyroscope,
    RelativeOrientationSensor,
} from '@openhps/core';

/**
 * Relative orientation processing node
 *
 * @see {@link https://www.w3.org/TR/motion-sensors/#relative-orientation-sensor}
 * @category Processing node
 */
export class RelativeOrientationProcessingNode extends FilterProcessingNode<DataFrame> {
    public initFilter(_: DataObject, frame: DataFrame): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (!frame.getSensor(Gyroscope) || !frame.getSensor(Accelerometer)) {
                return reject(new Error(`Relative rotation processing requires accelerometer and gyroscope readings!`));
            }

            resolve({
                alpha: 0,
                beta: 0,
                gamma: 0,
            });
        });
    }

    public filter(object: DataObject, frame: DataFrame, filter: any): Promise<DataObject> {
        return new Promise<DataObject>((resolve) => {
            const accl = frame.getSensor(Accelerometer);
            const gyro = (object.getPosition() ? object.getPosition().angularVelocity : undefined) || frame.getSensor(Gyroscope).value;
            const bias = 0.98;

            const dt = 1000 / accl.frequency;

            // Treat the acceleration vector as an orientation vector by normalizing it.
            // Keep in mind that the if the device is flipped, the vector will just be
            // pointing in the other direction, so we have no way to know from the
            // accelerometer data which way the device is oriented.
            const norm = Math.sqrt(accl.value.x ** 2 + accl.value.y ** 2 + accl.value.z ** 2);

            // As we only can cover half (PI rad) of the full spectrum (2*PI rad) we multiply
            // the unit vector with values from [-1, 1] with PI/2, covering [-PI/2, PI/2].
            const scale = Math.PI / 2;

            const alpha: number = filter.alpha + gyro.z * dt;
            const beta: number = bias * (filter.beta + gyro.x * dt) + (1.0 - bias) * ((accl.value.x * scale) / norm);
            const gamma: number = bias * (filter.gamma + gyro.y * dt) + (1.0 - bias) * ((accl.value.y * -scale) / norm);

            const orientation = frame.getSensor(RelativeOrientationSensor, this.uid);
            orientation.value = Orientation.fromEuler([beta, gamma, alpha]);
            orientation.frequency = accl.frequency;
            resolve(object);
        });
    }
}
