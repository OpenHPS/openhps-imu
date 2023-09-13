(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@openhps/core"));
	else if(typeof define === 'function' && define.amd)
		define("OpenHPS", ["core"], factory);
	else if(typeof exports === 'object')
		exports["OpenHPS"] = factory(require("@openhps/core"));
	else
		root["OpenHPS"] = root["OpenHPS"] || {}, root["OpenHPS"]["sensors"] = factory(root["OpenHPS"]["core"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__openhps_core__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/cjs/index.js":
/*!***************************!*\
  !*** ./dist/cjs/index.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SensorSourceNode = void 0;
const SensorSourceNode_1 = __webpack_require__(/*! ./web/SensorSourceNode */ "./dist/cjs/web/SensorSourceNode.js");
Object.defineProperty(exports, "SensorSourceNode", ({ enumerable: true, get: function () { return SensorSourceNode_1.SensorSourceNode; } }));
const SensorSourceNode_2 = __webpack_require__(/*! ./legacy/SensorSourceNode */ "./dist/cjs/legacy/SensorSourceNode.js");
module.exports = 'Accelerometer' in window ? { SensorSourceNode: SensorSourceNode_1.SensorSourceNode } : { SensorSourceNode: SensorSourceNode_2.SensorSourceNode };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/legacy/SensorSourceNode.js":
/*!*********************************************!*\
  !*** ./dist/cjs/legacy/SensorSourceNode.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SensorSourceNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/**
 * IMU source using the HTML5 browser API for device motion and device orientation.
 *
 * @category Source node
 */
class SensorSourceNode extends core_1.SourceNode {
    constructor(options) {
        var _a;
        super(options);
        this.options.source = (_a = this.options.source) !== null && _a !== void 0 ? _a : new core_1.DataObject(this.uid);
        if (this.options.autoStart) {
            this.once('build', this.start.bind(this));
        }
        this.once('destroy', this.stop.bind(this));
    }
    requestPermission() {
        return Promise.resolve();
    }
    start() {
        return new Promise((resolve) => {
            const sensorUID = this.source ? this.source.uid : this.uid;
            window.addEventListener('devicemotion', (event) => {
                // Create a new data frame for the orientation change
                const dataFrame = new core_1.DataFrame();
                const frequency = 1000 / event.interval;
                dataFrame.addSensor(new core_1.Accelerometer(sensorUID + '_accl', new core_1.Acceleration(event.accelerationIncludingGravity.x, event.accelerationIncludingGravity.y, event.accelerationIncludingGravity.z), frequency));
                dataFrame.addSensor(new core_1.Gyroscope(sensorUID + '_gyro', new core_1.AngularVelocity(event.rotationRate.beta, event.rotationRate.gamma, event.rotationRate.alpha), frequency));
                dataFrame.addSensor(new core_1.Accelerometer(sensorUID + '_linearaccl', new core_1.Acceleration(event.acceleration.x, event.acceleration.y, event.acceleration.z), frequency));
                const source = this.source;
                source.getPosition().angularVelocity = dataFrame.getSensor(core_1.Gyroscope).value;
                dataFrame.addSensor(new core_1.AbsoluteOrientationSensor(sensorUID + '_orientation', source.getPosition().orientation));
                dataFrame.source = source;
                this.push(dataFrame);
            }, true);
            window.addEventListener('deviceorientation', (event) => {
                const source = this.source;
                source.getPosition().orientation = core_1.Orientation.fromEuler([event.beta, event.gamma, event.alpha]);
            });
            this.logger('debug', 'Browser orientation and motion events registered!');
            resolve();
        });
    }
    stop() {
        return Promise.resolve();
    }
    onPull() {
        return new Promise((resolve) => {
            resolve(undefined);
        });
    }
}
exports.SensorSourceNode = SensorSourceNode;
//# sourceMappingURL=SensorSourceNode.js.map

/***/ }),

/***/ "./dist/cjs/web/SensorSourceNode.js":
/*!******************************************!*\
  !*** ./dist/cjs/web/SensorSourceNode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/// <reference types="web" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SensorSourceNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/**
 * Sensor source node using Web Sensor API.
 */
class SensorSourceNode extends core_1.SourceNode {
    constructor(options) {
        super(options);
        this._subscriptions = new Map();
        this._values = new Map();
        this._lastPush = 0;
        this._running = false;
        this.options.interval = this.options.interval || 100;
        if (this.options.autoStart) {
            this.once('build', this.start.bind(this));
        }
        this.once('destroy', this.stop.bind(this));
    }
    static checkPermissions(sensors) {
        return this.requestPermissions(sensors);
    }
    static requestPermissions(sensors) {
        return new Promise((resolve, reject) => {
            Promise.all(sensors
                .map((sensor) => this.getPermissions(sensor).map((permission) => navigator.permissions.query({ name: permission })))
                .reduce((a, b) => [...a, ...b]))
                .then((results) => {
                if (results.every((result) => result.state === 'granted')) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            })
                .catch(reject);
        });
    }
    start() {
        return new Promise((resolve) => {
            this._running = true;
            if (this._subscriptions.size > 0) {
                return resolve();
            }
            this.options.sensors.forEach((sensor) => {
                const SensorType = this.findSensor(sensor);
                const sensorInstance = new SensorType({
                    frequency: Math.round(1000 / this.options.interval),
                });
                sensorInstance.addEventListener('reading', (event) => {
                    if (!this._running)
                        return;
                    this._values.set(sensor, event.target);
                    if (this._isUpdated()) {
                        this._lastPush = event.timeStamp;
                        this.createFrame().catch((ex) => {
                            this.logger('error', 'Unable to create sensor data frame!', ex);
                        });
                    }
                });
                sensorInstance.start();
                this._subscriptions.set(sensor, sensorInstance);
            });
            resolve();
        });
    }
    _isUpdated() {
        return (Array.from(this._values.values()).filter((sensor) => sensor.timestamp > this._lastPush).length ===
            Array.from(this._subscriptions.values()).filter((sensor) => sensor.activated).length);
    }
    stop() {
        return new Promise((resolve) => {
            if (this.options.softStop) {
                this._running = false;
            }
            else {
                this._subscriptions.forEach((value) => value.stop());
                this._subscriptions = new Map();
                this._values = new Map();
            }
            resolve();
        });
    }
    createFrame() {
        return new Promise((resolve) => {
            const dataFrame = new core_1.DataFrame();
            dataFrame.source = this.source;
            const acceleration = this._values.get(core_1.Accelerometer);
            const linearAcceleration = this._values.get(core_1.LinearAccelerationSensor);
            const gyroscope = this._values.get(core_1.Gyroscope);
            const orientation = this._values.get(core_1.AbsoluteOrientationSensor);
            const relativeOrientation = this._values.get(core_1.RelativeOrientationSensor);
            const magnetometer = this._values.get(core_1.Magnetometer);
            const sourceUID = this.source ? this.source.uid : this.uid;
            const frequency = 1000 / this.options.interval;
            if (acceleration) {
                dataFrame.addSensor(new core_1.Accelerometer(sourceUID + '_accel', new core_1.Acceleration(acceleration.x, acceleration.y, acceleration.z), frequency));
            }
            if (linearAcceleration) {
                dataFrame.addSensor(new core_1.LinearAccelerationSensor(sourceUID + '_linearaccel', new core_1.Acceleration(linearAcceleration.x, linearAcceleration.y, linearAcceleration.z), frequency));
            }
            if (gyroscope) {
                dataFrame.addSensor(new core_1.Gyroscope(sourceUID + '_gyro', new core_1.AngularVelocity(gyroscope.x, gyroscope.y, gyroscope.z, core_1.AngularVelocityUnit.RADIAN_PER_SECOND), frequency));
            }
            if (orientation) {
                dataFrame.addSensor(new core_1.AbsoluteOrientationSensor(sourceUID + '_absoluteorientation', core_1.Orientation.fromQuaternion(new core_1.Quaternion(...orientation.quaternion)), frequency));
            }
            if (relativeOrientation) {
                dataFrame.addSensor(new core_1.RelativeOrientationSensor(sourceUID + '_relativeorientation', core_1.Orientation.fromQuaternion(new core_1.Quaternion(...relativeOrientation.quaternion)), frequency));
            }
            if (magnetometer) {
                dataFrame.addSensor(new core_1.Magnetometer(sourceUID + '_mag', new core_1.Magnetism(magnetometer.x, magnetometer.y, magnetometer.z), frequency));
            }
            this.push(dataFrame);
            resolve();
        });
    }
    onPull() {
        return new Promise((resolve) => {
            resolve(undefined);
        });
    }
    findSensor(sensor) {
        switch (sensor) {
            case core_1.RelativeOrientationSensor:
                return RelativeOrientationSensor;
            case core_1.AbsoluteOrientationSensor:
                return AbsoluteOrientationSensor;
            case core_1.LinearAccelerationSensor:
                return LinearAccelerationSensor;
            // case SensorType.AMBIENT_LIGHT:
            //     return AmbientLightSensor;
            case core_1.Gyroscope:
                return Gyroscope;
            case core_1.Magnetometer:
                return Magnetometer;
            case core_1.Accelerometer:
                return Accelerometer;
            default:
                return undefined;
        }
    }
    static getPermissions(sensor) {
        switch (sensor) {
            // case SensorType.AMBIENT_LIGHT:
            //     return ["ambient-light-sensor"];
            case core_1.RelativeOrientationSensor:
            case core_1.AbsoluteOrientationSensor:
                return ['gyroscope', 'accelerometer', 'magnetometer'];
            case core_1.Gyroscope:
                return ['gyroscope'];
            case core_1.Magnetometer:
                return ['magnetometer'];
            case core_1.LinearAccelerationSensor:
            case core_1.Accelerometer:
                return ['accelerometer'];
            default:
                return undefined;
        }
    }
}
exports.SensorSourceNode = SensorSourceNode;
//# sourceMappingURL=SensorSourceNode.js.map

/***/ }),

/***/ "@openhps/core":
/*!****************************************************************************************************************!*\
  !*** external {"commonjs":"@openhps/core","commonjs2":"@openhps/core","amd":"core","root":["OpenHPS","core"]} ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__openhps_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/cjs/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=openhps-web-sensors.js.map