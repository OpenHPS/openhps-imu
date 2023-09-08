import { ObjectProcessingNode, ObjectProcessingNodeOptions, DataObject, DataFrame, Magnetometer } from '@openhps/core';

/**
 * @deprecated Use the MangetometerCalibrationService instead
 * @category Processing node
 */
export class MagnetometerCalibrationNode extends ObjectProcessingNode<DataFrame> {
    protected options: MagnetomerCalibrationOptions;

    constructor(options: MagnetomerCalibrationOptions) {
        super(options);
    }

    public processObject(object: DataObject, frame: DataFrame): Promise<DataObject> {
        return new Promise((resolve, reject) => {
            const magnetometer = frame.getSensor(Magnetometer);
            if (!magnetometer) {
                return resolve(object);
            }
            this.getNodeData(object)
                .then(async (calibrationData) => {
                    if (calibrationData === undefined) {
                        // Default calibration data
                        calibrationData = {
                            xMax: 0,
                            xMin: 0,
                            yMax: 0,
                            yMin: 0,
                            zMax: 0,
                            zMin: 0,
                            count: 0,
                            scaleX: NaN,
                            scaleY: NaN,
                            scaleZ: NaN,
                        };
                    }

                    if (
                        isNaN(calibrationData.scaleX) &&
                        calibrationData.count < this.options.count &&
                        this.options.count !== -1
                    ) {
                        // Add measurement
                        calibrationData.xMax = Math.max(magnetometer.value.x, calibrationData.xMax);
                        calibrationData.xMin = Math.min(magnetometer.value.x, calibrationData.xMin);

                        calibrationData.yMax = Math.max(magnetometer.value.y, calibrationData.yMax);
                        calibrationData.yMin = Math.min(magnetometer.value.y, calibrationData.yMin);

                        calibrationData.zMax = Math.max(magnetometer.value.z, calibrationData.zMax);
                        calibrationData.zMin = Math.min(magnetometer.value.z, calibrationData.zMin);

                        calibrationData.count += 1;
                        // Save calibration data
                        await this.setNodeData(object, calibrationData);
                    } else if (isNaN(calibrationData.scaleX) && calibrationData.count >= this.options.count) {
                        // Calculate hard and soft iron
                        const avgDeltaX = (calibrationData.xMax + calibrationData.xMin) / 2;
                        const avgDeltaY = (calibrationData.yMax + calibrationData.yMin) / 2;
                        const avgDeltaZ = (calibrationData.zMax + calibrationData.zMin) / 2;
                        const avgDelta = (avgDeltaX + avgDeltaY + avgDeltaZ) / 3;

                        calibrationData.scaleX = avgDelta / avgDeltaX;
                        calibrationData.scaleY = avgDelta / avgDeltaY;
                        calibrationData.scaleZ = avgDelta / avgDeltaZ;
                        // Save calibration data
                        await this.setNodeData(object, calibrationData);
                    } else {
                        magnetometer.value.x = magnetometer.value.x * calibrationData.scaleX;
                        magnetometer.value.y = magnetometer.value.y * calibrationData.scaleY;
                        magnetometer.value.z = magnetometer.value.z * calibrationData.scaleZ;
                    }
                    resolve(object);
                })
                .catch(reject);
        });
    }
}

export interface MagnetomerCalibrationOptions extends ObjectProcessingNodeOptions {
    count: number;
}
