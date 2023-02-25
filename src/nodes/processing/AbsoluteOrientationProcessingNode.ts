import {
    DataFrame,
    DataObject,
    FilterProcessingNode,
    Orientation,
    AbsoluteOrientationSensor,
    Accelerometer,
    Magnetometer,
} from '@openhps/core';

/**
 * Geomagnetic orientation processing node
 *
 * @see {@link https://github.com/visakhanc/eCompass/blob/master/source/main.c}
 * @category Processing node
 */
export class AbsoluteOrientationProcessingNode extends FilterProcessingNode<DataFrame> {
    public initFilter(object: DataObject, frame: DataFrame): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (frame.getSensor(Magnetometer) === undefined || frame.getSensor(Accelerometer) === undefined) {
                reject(new Error(`Absolute rotation processing requires accelerometer and magnetometer readings!`));
            }

            resolve({
                alpha: 0,
                beta: 0,
                gamma: 0,
            });
        });
    }

    public filter(object: DataObject, frame: DataFrame): Promise<DataObject> {
        return new Promise<DataObject>((resolve) => {
            const accl = frame.getSensor(Accelerometer).value;
            const mag = frame.getSensor(Magnetometer).value;

            /* Calculate pitch and roll, in the range (-pi,pi) */
            const pitch = Math.atan2(-accl.x, Math.sqrt(accl.z * accl.z + accl.y * accl.y));
            const roll = Math.atan2(accl.y, Math.sqrt(accl.z * accl.z + accl.x * accl.x));

            /* Calculate Azimuth:
             * Magnetic horizontal components, after compensating for Roll(r) and Pitch(p) are:
             * Xh = X*cos(p) + Y*sin(r)*sin(p) + Z*cos(r)*sin(p)
             * Yh = Y*cos(r) - Z*sin(r)
             * Azimuth = arcTan(Y_h/X_h)
             */
            const Xh =
                mag.x * Math.cos(pitch) +
                mag.y * Math.sin(roll) * Math.sin(pitch) +
                mag.z * Math.cos(roll) * Math.sin(pitch);
            const Yh = mag.y * Math.cos(roll) - mag.z * Math.sin(roll);
            let azimuth = Math.atan2(Yh, Xh);
            if (azimuth < 0) {
                /* Convert Azimuth in the range (0, 2pi) */
                azimuth = 2 * Math.PI + azimuth;
            }

            const sensor = frame.getSensor(AbsoluteOrientationSensor, this.uid);
            sensor.value = Orientation.fromEuler([pitch, roll, azimuth]);
            sensor.frequency = frame.getSensor(Accelerometer).frequency;
            resolve(object);
        });
    }
}
