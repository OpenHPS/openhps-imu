import { 
    ModelBuilder, 
    CallbackSinkNode,
    Magnetometer,
    Accelerometer,
    Gyroscope,
    LinearAccelerationSensor,
    DataObject,
    CalibrationNode,
} from '../common/openhps-core.es.js';
import { SensorSourceNode } from '../common/openhps-web-sensors.es.js';
import { 
    IMUCalibrationService,
} from '../common/openhps-imu.es.js';

let calibrationService = new IMUCalibrationService();
let model = undefined;

function initialize() {
    ModelBuilder.create()
        .addService(calibrationService)
        .from(new SensorSourceNode({
            uid: "source",
            autoStart: false,
            sensors: [
                Magnetometer,
                Accelerometer,
                Gyroscope,
                LinearAccelerationSensor
            ],
            source: new DataObject("web"),
            interval: 100
        }))
        .via(new CalibrationNode({
            service: IMUCalibrationService
        }))
        .to(new CallbackSinkNode(frame => {

        }))
        .build().then(m => {
            console.log("Model created ...");
            model = m;
        }).catch(console.error);
}

function calibrate() {
    service.calibrate((step) => {

    });
}

initialize();
