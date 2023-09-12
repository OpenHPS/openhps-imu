import { 
    Acceleration, 
    Accelerometer, 
    AngularVelocity, 
    CalibrationService, 
    DataFrame, 
    Gyroscope, 
    LinearAccelerationSensor,
    SensorCalibrationData, 
} from "@openhps/core";
import { Vector3Tuple } from "@openhps/core/dist/types/three/Three";

/**
 * IMU calibration service using user interaction
 * 
 * ## Usage
 * ```typscript
 * ModelBuilder.create()
 *  .addService(new IMUCalibrationService())
 *  .from(new IMUSourceNode({ ... }))   // Depends on the platform
 *  .via(new CalibrationNode({
 *      service: IMUCalibrationService
 *  }))
 * ```
 */
export class IMUCalibrationService extends CalibrationService {
    /**
     * Calibrate the IMU sensor using user interaction. Users should be instructed to keep
     * the phone still in the `IMUCalibrationStep` orientation.
     *
     * @param {number} time Time to fetch data per step
     * @param {Function} userAction User action callback
     * @returns 
     */
    calibrate(time: number, userAction: (step: IMUCalibrationStep) => Promise<void>): Promise<void> {
        return new Promise((resolve, reject) => {
            // Calibration data
            let accelerometer: Accelerometer | LinearAccelerationSensor;
            let gyroscope: Gyroscope;
            let accelerationData: Map<IMUCalibrationStep, Acceleration[]> = new Map();
            let gyroscopeData: AngularVelocity[] = [];

            userAction(IMUCalibrationStep.UPWARD).then(() => {
                return this.calibrationRun(time);
            }).then((output) => {
                // Save gyroscope data
                gyroscope = output.gyroscope;
                gyroscopeData.push(...output.gyroscopeData);
                // Save accelerometer data
                accelerometer = output.accelerometer;
                accelerationData.set(IMUCalibrationStep.UPWARD, output.accelerometerData);
                return userAction(IMUCalibrationStep.DOWNWARD);
            }).then(() => {
                return this.calibrationRun(time);
            }).then((output) => {
                // Save gyroscope data
                gyroscopeData.push(...output.gyroscopeData);
                // Save accelerometer data
                accelerationData.set(IMUCalibrationStep.DOWNWARD, output.accelerometerData);
                return userAction(IMUCalibrationStep.PERPINDICULAR);
            }).then(() => {
                return this.calibrationRun(time);
            }).then((output) => {
                // Save gyroscope data
                gyroscopeData.push(...output.gyroscopeData);
                // Save accelerometer data
                accelerationData.set(IMUCalibrationStep.PERPINDICULAR, output.accelerometerData);
                // Compute results
                return Promise.all([
                    gyroscope ? this.calibrateGyroscope(gyroscope, gyroscopeData) : Promise.resolve(),
                    accelerometer ? this.calibrateAccelerometer(accelerometer, accelerationData) : Promise.resolve()
                ]);
            }).then(() => {
                // Persist data
                return Promise.all([
                    gyroscope ? this.model.findDataService(Gyroscope).insertObject(gyroscope) : Promise.resolve(),
                    accelerometer ? this.model.findDataService(Accelerometer).insertObject(accelerometer) : Promise.resolve(),
                ]);
            }).then(() => {
                resolve();
            }).catch(reject);
        });
    }

    protected calibrationRun(time: number): Promise<CalibrationOutput> {
        return new Promise((resolve) => {
            // Calibration data
            const calibrationData: CalibrationOutput = {
                accelerometerData: [],
                gyroscopeData: []
            };

            this.start(() => {}, (frame: DataFrame) => {
                return new Promise((resolve) => {
                    calibrationData.accelerometer = frame.getSensor(LinearAccelerationSensor) ?? frame.getSensor(Accelerometer);
                    if (calibrationData.accelerometer) {
                        calibrationData.accelerometerData.push(calibrationData.accelerometer.value);
                    }

                    calibrationData.gyroscope = frame.getSensor(Gyroscope);
                    if (calibrationData.gyroscope) {
                        calibrationData.gyroscopeData.push(calibrationData.gyroscope.value);
                    }
                    resolve();
                });
            });

            setTimeout(() => {
                // Do not stop but suspend
                this.start(() => {}, () => {});
                resolve(calibrationData);
            }, time);
        });
    }

    protected calibrateGyroscope(gyroscope: Gyroscope, data: AngularVelocity[]): Promise<void> {
        return new Promise((resolve) => {
            gyroscope.calibrationData = new SensorCalibrationData();
            gyroscope.calibrationData.offset = data
                    .reduce((a: AngularVelocity, b: AngularVelocity) => 
                        a.add(b), new AngularVelocity(0, 0, 0))
                    .divideScalar(data.length);
            resolve();
        });
    }

    calibrateAccelerometer(accelerometer: Accelerometer | LinearAccelerationSensor, data: Map<IMUCalibrationStep, Acceleration[]>): Promise<void> {
        return new Promise((resolve) => {
            const data_upward = data.get(IMUCalibrationStep.UPWARD).map(d => d.toArray());
            const data_downward = data.get(IMUCalibrationStep.DOWNWARD).map(d => d.toArray());
            const data_perpindicular = data.get(IMUCalibrationStep.PERPINDICULAR).map(d => d.toArray());
            const xdata = [...data_upward, ...data_downward, ...data_perpindicular];
            const ydata = [
                ...data_upward.map(_ => [1, 1, 1] as Vector3Tuple),             // 1g
                ...data_downward.map(_ => [-1, -1, -1] as Vector3Tuple),        // -1g
                ...data_perpindicular.map(_ => [0, 0, 0] as Vector3Tuple),      // 0g
            ];
            const result = this.nlls(xdata, ydata);
            console.log(result);
            resolve();
        });
    }

    private nlls(sourceData: Vector3Tuple[], targetData: Vector3Tuple[], initialParams: number[] = [1, 1, 1], maxIterations: number = 1000, learningRate: number = 0.001): number[] {
        // Define the model function that maps source data to the target data.
        function model(params: number[], source: Vector3Tuple): Vector3Tuple {
            const [a, b, c] = params;
            return [source[0] * a, source[1] * b, source[2] * c];
        }
      
        // Initialize the parameters.
        let params = [...initialParams];
      
        for (let iteration = 0; iteration < maxIterations; iteration++) {
          // Calculate the gradients for each parameter.
          let gradA = 0;
          let gradB = 0;
          let gradC = 0;
      
          for (let i = 0; i < sourceData.length; i++) {
            const sourcePoint = sourceData[i];
            const targetPoint = targetData[i];
      
            const predicted = model(params, sourcePoint);
      
            // Compute the residuals (difference between predicted and target).
            const residualX = predicted[0] - targetPoint[0];
            const residualY = predicted[1] - targetPoint[1];
            const residualZ = predicted[2] - targetPoint[2];
      
            // Update gradients using the residuals and source data.
            gradA += 2 * residualX * sourcePoint[0];
            gradB += 2 * residualY * sourcePoint[1];
            gradC += 2 * residualZ * sourcePoint[2];
          }
      
          // Update the parameters using the gradients and learning rate.
          params[0] -= learningRate * gradA;
          params[1] -= learningRate * gradB;
          params[2] -= learningRate * gradC;
        }
        return params;
    }
}

export enum IMUCalibrationStep {
    /**
     * Position the IMU sensor upwards
     * Example: Screen up
     */
    UPWARD,
    /**
     * Position the IMU sensor downwards
     * Example: Screen down
     */
    DOWNWARD,
    /**
     * Position the IMU sensor perpendicular
     * Example: Screen on its side (against a wall)
     */
    PERPINDICULAR
}

interface CalibrationOutput {
    accelerometer?: LinearAccelerationSensor | Accelerometer;
    gyroscope?: Gyroscope;
    accelerometerData: Acceleration[];
    gyroscopeData: AngularVelocity[];
}
