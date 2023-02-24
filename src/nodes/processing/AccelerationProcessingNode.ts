import {
    Accelerometer,
    DataFrame,
    DataObject,
    FilterProcessingNode,
    LinearAccelerationSensor,
    LinearVelocity,
    LinearVelocitySensor,
} from '@openhps/core';

/**
 * Acceleration processing to linear velocity
 *
 * @category Processing node
 */
export class AccelerationProcessingNode extends FilterProcessingNode<DataFrame> {
    public initFilter(object: DataObject, frame: DataFrame): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (!frame.getSensor(Accelerometer) && !frame.getSensor(LinearAccelerationSensor)) {
                return reject(new Error(`Acceleration processing requires accelerometer readings!`));
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
            const accl = frame.getSensor(LinearAccelerationSensor) || frame.getSensor(Accelerometer);
            const dt = 1000 / accl.frequency;
            const linearVelocity = frame.getSensor(LinearVelocitySensor, this.uid)
            linearVelocity.value = LinearVelocity.fromArray(accl.value.clone().multiplyScalar(dt).toArray());
            const position = object.getPosition();
            if (!position) {
                return resolve(object);
            }
            if (!position.linearVelocity) {
                position.linearVelocity = linearVelocity.value.clone();
            } else {
                position.linearVelocity.add(linearVelocity.value);
            }
            resolve(object);
        });
    }
}
