import * as __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__ from "./openhps-core.es.js";
/******/ var __webpack_modules__ = ({

/***/ "./dist/esm/index.js":
/*!***************************!*\
  !*** ./dist/esm/index.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensorSourceNode": () => (/* reexport safe */ _web_SensorSourceNode__WEBPACK_IMPORTED_MODULE_0__.SensorSourceNode)
/* harmony export */ });
/* harmony import */ var _web_SensorSourceNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web/SensorSourceNode */ "./dist/esm/web/SensorSourceNode.js");
/* harmony import */ var _legacy_SensorSourceNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy/SensorSourceNode */ "./dist/esm/legacy/SensorSourceNode.js");
/* module decorator */ module = __webpack_require__.hmd(module);



module.exports = 'Accelerometer' in window ? { SensorSourceNode: _web_SensorSourceNode__WEBPACK_IMPORTED_MODULE_0__.SensorSourceNode } : { SensorSourceNode: _legacy_SensorSourceNode__WEBPACK_IMPORTED_MODULE_1__.SensorSourceNode };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/esm/legacy/SensorSourceNode.js":
/*!*********************************************!*\
  !*** ./dist/esm/legacy/SensorSourceNode.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensorSourceNode": () => (/* binding */ SensorSourceNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

/**
 * IMU source using the HTML5 browser API for device motion and device orientation.
 *
 * @category Source node
 */
class SensorSourceNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
    constructor(options) {
        var _a;
        super(options);
        this.options.source = (_a = this.options.source) !== null && _a !== void 0 ? _a : new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataObject(this.uid);
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
                const dataFrame = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataFrame();
                const frequency = 1000 / event.interval;
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Accelerometer(sensorUID + '_accl', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(event.accelerationIncludingGravity.x, event.accelerationIncludingGravity.y, event.accelerationIncludingGravity.z), frequency));
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Gyroscope(sensorUID + '_gyro', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AngularVelocity(event.rotationRate.beta, event.rotationRate.gamma, event.rotationRate.alpha), frequency));
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Accelerometer(sensorUID + '_linearaccl', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(event.acceleration.x, event.acceleration.y, event.acceleration.z), frequency));
                const source = this.source;
                source.getPosition().angularVelocity = dataFrame.getSensor(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Gyroscope).value;
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationSensor(sensorUID + '_orientation', source.getPosition().orientation));
                dataFrame.source = source;
                this.push(dataFrame);
            }, true);
            window.addEventListener('deviceorientation', (event) => {
                const source = this.source;
                source.getPosition().orientation = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromEuler([event.beta, event.gamma, event.alpha]);
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
//# sourceMappingURL=SensorSourceNode.js.map

/***/ }),

/***/ "./dist/esm/web/SensorSourceNode.js":
/*!******************************************!*\
  !*** ./dist/esm/web/SensorSourceNode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensorSourceNode": () => (/* binding */ SensorSourceNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/// <reference types="web" />

/**
 * Sensor source node using Web Sensor API.
 */
class SensorSourceNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
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
            const dataFrame = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataFrame();
            dataFrame.source = this.source;
            const acceleration = this._values.get(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Accelerometer);
            const linearAcceleration = this._values.get(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearAccelerationSensor);
            const gyroscope = this._values.get(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Gyroscope);
            const orientation = this._values.get(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationSensor);
            const relativeOrientation = this._values.get(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.RelativeOrientationSensor);
            const magnetometer = this._values.get(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetometer);
            const sourceUID = this.source ? this.source.uid : this.uid;
            const frequency = 1000 / this.options.interval;
            if (acceleration) {
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Accelerometer(sourceUID + '_accel', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(acceleration.x, acceleration.y, acceleration.z), frequency));
            }
            if (linearAcceleration) {
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearAccelerationSensor(sourceUID + '_linearaccel', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(linearAcceleration.x, linearAcceleration.y, linearAcceleration.z), frequency));
            }
            if (gyroscope) {
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Gyroscope(sourceUID + '_gyro', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AngularVelocity(gyroscope.x, gyroscope.y, gyroscope.z, _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AngularVelocityUnit.RADIAN_PER_SECOND), frequency));
            }
            if (orientation) {
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationSensor(sourceUID + '_absoluteorientation', _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromQuaternion(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Quaternion(...orientation.quaternion)), frequency));
            }
            if (relativeOrientation) {
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.RelativeOrientationSensor(sourceUID + '_relativeorientation', _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromQuaternion(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Quaternion(...relativeOrientation.quaternion)), frequency));
            }
            if (magnetometer) {
                dataFrame.addSensor(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetometer(sourceUID + '_mag', new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetism(magnetometer.x, magnetometer.y, magnetometer.z), frequency));
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
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.RelativeOrientationSensor:
                return RelativeOrientationSensor;
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationSensor:
                return AbsoluteOrientationSensor;
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearAccelerationSensor:
                return LinearAccelerationSensor;
            // case SensorType.AMBIENT_LIGHT:
            //     return AmbientLightSensor;
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Gyroscope:
                return Gyroscope;
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetometer:
                return Magnetometer;
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Accelerometer:
                return Accelerometer;
            default:
                return undefined;
        }
    }
    static getPermissions(sensor) {
        switch (sensor) {
            // case SensorType.AMBIENT_LIGHT:
            //     return ["ambient-light-sensor"];
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.RelativeOrientationSensor:
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationSensor:
                return ['gyroscope', 'accelerometer', 'magnetometer'];
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Gyroscope:
                return ['gyroscope'];
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetometer:
                return ['magnetometer'];
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearAccelerationSensor:
            case _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Accelerometer:
                return ['accelerometer'];
            default:
                return undefined;
        }
    }
}
//# sourceMappingURL=SensorSourceNode.js.map

/***/ }),

/***/ "@openhps/core":
/*!***************************************!*\
  !*** external "./openhps-core.es.js" ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["AbsoluteOrientationSensor"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.AbsoluteOrientationSensor, ["Acceleration"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Acceleration, ["Accelerometer"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Accelerometer, ["AngularVelocity"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.AngularVelocity, ["AngularVelocityUnit"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.AngularVelocityUnit, ["DataFrame"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.DataFrame, ["DataObject"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.DataObject, ["Gyroscope"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Gyroscope, ["LinearAccelerationSensor"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.LinearAccelerationSensor, ["Magnetism"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Magnetism, ["Magnetometer"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Magnetometer, ["Orientation"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Orientation, ["Quaternion"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Quaternion, ["RelativeOrientationSensor"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.RelativeOrientationSensor, ["SourceNode"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.SourceNode });

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		loaded: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ (() => {
/******/ 	__webpack_require__.hmd = (module) => {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: () => {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./dist/esm/index.js");
/******/ var __webpack_exports__SensorSourceNode = __webpack_exports__.SensorSourceNode;
/******/ export { __webpack_exports__SensorSourceNode as SensorSourceNode };
/******/ 

//# sourceMappingURL=openhps-web-sensors.es.js.map