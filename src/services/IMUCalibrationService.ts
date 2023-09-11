import { Acceleration, Accelerometer, AngularVelocity, CallbackSinkNode, DataFrame, Gyroscope, LinearAccelerationSensor, Model, ModelBuilder, SensorObject, SensorValue, Service, SourceNode } from "@openhps/core";

/**
 * IMU calibration service using user interaction
 * 
 * ## Usage
 * ```typscript
 * 
 * ```
 */
export class IMUCalibrationService extends Service {
    protected options: IMUCalibrationOptions;
    
    constructor(options: IMUCalibrationOptions) {
        super();
        this.options = options;
    }

    /**
     * Calibrate the IMU sensor using user interaction
     *
     * @param {Function} userAction User action callback
     * @returns 
     */
    calibrate(userAction: (step: IMUCalibrationStep) => Promise<void>): Promise<void> {
        return new Promise((resolve, reject) => {
            // Calibration data
            let running = true;
            let model: Model;
            let accelerometer: Accelerometer | LinearAccelerationSensor;
            let gyroscope: Gyroscope;
            let accelerationData: Acceleration[] = [];
            let gyroscopeData: AngularVelocity[] = [];

            function complete() {
                if (!running) {
                    return;
                }
                running = false;

                // Compute results per sensor
                data.forEach((values, sensor) => {

                });

                // Finalize
                if (model) {
                    model.emitAsync('destroy')
                        .then(() => resolve()).catch(reject);
                } else {
                    resolve();
                }
            }

            userAction(IMUCalibrationStep.UPWARD).then(() => {
                ModelBuilder.create()
                    .from(this.options.source)
                    .to(new CallbackSinkNode((frame: DataFrame) => {
                        accelerometer = frame.getSensor(LinearAccelerationSensor) ?? frame.getSensor(Accelerometer);
                        gyroscope = frame.getSensor(Gyroscope);
                        accelerationData.push(accelerometer.value);
                        gyroscopeData.push(gyroscope.value);
                    }))
                    .build().then((m: Model) => {
                        model = m;
                    }).catch(reject);
            });
        });
    }
}

export interface IMUCalibrationOptions {
    source: SourceNode;
    minData: number;
}

export enum IMUCalibrationStep {
    /**
     * Position the IMU sensor upwards
     */
    UPWARD,
    /**
     * Position the IMU sensor downwards
     */
    DOWNWARD,
    /**
     * Position the IMU sensor perpendicular
     */
    PERPINDICULAR
}
