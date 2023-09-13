(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@openhps/core"));
	else if(typeof define === 'function' && define.amd)
		define("OpenHPS", ["core"], factory);
	else if(typeof exports === 'object')
		exports["OpenHPS"] = factory(require("@openhps/core"));
	else
		root["OpenHPS"] = root["OpenHPS"] || {}, root["OpenHPS"]["imu"] = factory(root["OpenHPS"]["core"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__openhps_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/cjs/data/IMUDataFrame.js":
/*!***************************************!*\
  !*** ./dist/cjs/data/IMUDataFrame.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMUDataFrame = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
let IMUDataFrame = class IMUDataFrame extends core_1.DataFrame {
};
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", Number)
], IMUDataFrame.prototype, "frequency", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Magnetism)
], IMUDataFrame.prototype, "magnetism", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Acceleration)
], IMUDataFrame.prototype, "acceleration", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Acceleration)
], IMUDataFrame.prototype, "linearAcceleration", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Acceleration)
], IMUDataFrame.prototype, "gravity", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Orientation)
], IMUDataFrame.prototype, "relativeOrientation", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Orientation)
], IMUDataFrame.prototype, "absoluteOrientation", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.LinearVelocity)
], IMUDataFrame.prototype, "linearVelocity", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.AngularVelocity)
], IMUDataFrame.prototype, "angularVelocity", void 0);
IMUDataFrame = __decorate([
    (0, core_1.SerializableObject)()
], IMUDataFrame);
exports.IMUDataFrame = IMUDataFrame;
//# sourceMappingURL=IMUDataFrame.js.map

/***/ }),

/***/ "./dist/cjs/data/IMUSensorObject.js":
/*!******************************************!*\
  !*** ./dist/cjs/data/IMUSensorObject.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMUSensorObject = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
let IMUSensorObject = class IMUSensorObject extends core_1.DataObject {
};
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", Number)
], IMUSensorObject.prototype, "frequency", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Magnetism)
], IMUSensorObject.prototype, "magnetism", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Acceleration)
], IMUSensorObject.prototype, "acceleration", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Acceleration)
], IMUSensorObject.prototype, "linearAcceleration", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", core_1.Acceleration)
], IMUSensorObject.prototype, "gravity", void 0);
IMUSensorObject = __decorate([
    (0, core_1.SerializableObject)()
], IMUSensorObject);
exports.IMUSensorObject = IMUSensorObject;
//# sourceMappingURL=IMUSensorObject.js.map

/***/ }),

/***/ "./dist/cjs/data/index.js":
/*!********************************!*\
  !*** ./dist/cjs/data/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./IMUDataFrame */ "./dist/cjs/data/IMUDataFrame.js"), exports);
__exportStar(__webpack_require__(/*! ./IMUSensorObject */ "./dist/cjs/data/IMUSensorObject.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/index.js":
/*!***************************!*\
  !*** ./dist/cjs/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./nodes */ "./dist/cjs/nodes/index.js"), exports);
__exportStar(__webpack_require__(/*! ./data */ "./dist/cjs/data/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/nodes/index.js":
/*!*********************************!*\
  !*** ./dist/cjs/nodes/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./processing */ "./dist/cjs/nodes/processing/index.js"), exports);
__exportStar(__webpack_require__(/*! ./source */ "./dist/cjs/nodes/source/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/AbsoluteOrientationProcessingNode.js":
/*!************************************************************************!*\
  !*** ./dist/cjs/nodes/processing/AbsoluteOrientationProcessingNode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbsoluteOrientationProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class AbsoluteOrientationProcessingNode extends core_1.FilterProcessingNode {
    initFilter(object, frame) {
        return new Promise((resolve, reject) => {
            if (frame.angularVelocity || frame.acceleration === undefined) {
                reject(new Error(`Relative rotation processing requires accelerometer and gyroscope readings!`));
            }
            resolve({
                alpha: 0,
                beta: 0,
                gamma: 0,
            });
        });
    }
    filter(object, frame) {
        return new Promise((resolve) => {
            const accl = frame.acceleration;
            const mag = frame.magnetism;
            const pitch = Math.atan2(-accl.x, Math.sqrt(accl.z * accl.z + accl.y * accl.y));
            const roll = Math.atan2(accl.y, Math.sqrt(accl.z * accl.z + accl.x * accl.x));
            const Xh = mag.x * Math.cos(pitch) +
                mag.y * Math.sin(roll) * Math.sin(pitch) +
                mag.z * Math.cos(roll) * Math.sin(pitch);
            const Yh = mag.y * Math.cos(roll) - mag.z * Math.sin(roll);
            let azimuth = Math.atan2(Yh, Xh);
            if (azimuth < 0) {
                azimuth = 2 * Math.PI + azimuth;
            }
            frame.absoluteOrientation = core_1.Orientation.fromEuler([pitch, roll, azimuth]);
            resolve(object);
        });
    }
}
exports.AbsoluteOrientationProcessingNode = AbsoluteOrientationProcessingNode;
//# sourceMappingURL=AbsoluteOrientationProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/AccelerationProcessingNode.js":
/*!*****************************************************************!*\
  !*** ./dist/cjs/nodes/processing/AccelerationProcessingNode.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccelerationProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class AccelerationProcessingNode extends core_1.FilterProcessingNode {
    initFilter(object, frame) {
        return new Promise((resolve, reject) => {
            if (!frame.acceleration && !frame.linearAcceleration) {
                return reject(new Error(`Acceleration processing requires accelerometer readings!`));
            }
            resolve({
                alpha: 0,
                beta: 0,
                gamma: 0,
            });
        });
    }
    filter(object, frame) {
        return new Promise((resolve) => {
            const accl = frame.linearAcceleration || frame.acceleration;
            const dt = 1000 / frame.frequency;
            frame.linearVelocity = core_1.LinearVelocity.fromArray(accl.clone().multiplyScalar(dt).toArray());
            const position = object.getPosition();
            if (!position) {
                return resolve(object);
            }
            if (!position.linearVelocity) {
                position.linearVelocity = frame.linearVelocity.clone();
            }
            else {
                position.linearVelocity.add(frame.linearVelocity);
            }
            resolve(object);
        });
    }
}
exports.AccelerationProcessingNode = AccelerationProcessingNode;
//# sourceMappingURL=AccelerationProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/GravityProcessingNode.js":
/*!************************************************************!*\
  !*** ./dist/cjs/nodes/processing/GravityProcessingNode.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GravityProcessingMethod = exports.GravityProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class GravityProcessingNode extends core_1.FilterProcessingNode {
    constructor(options) {
        super(options);
        this.options.method = this.options.method || GravityProcessingMethod.LOW_PASS;
    }
    initFilter(object, frame, options) {
        return new Promise((resolve, reject) => {
            if (!frame.acceleration) {
                return reject(new Error(`Gravity processing requires accelerometer readings!`));
            }
            resolve(options);
        });
    }
    filter(object, frame) {
        return new Promise((resolve) => {
            let method;
            if (frame.linearAcceleration) {
                method = GravityProcessingMethod.LINEAR_ACCELERATION;
            }
            else if (frame.relativeOrientation) {
                method = GravityProcessingMethod.RELATIVE_ORIENTATION;
            }
            else if (frame.absoluteOrientation) {
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
    _fromLinearAcceleration(frame) {
        frame.gravity = frame.acceleration.clone().sub(frame.linearAcceleration);
    }
    _usingLPFilter(frame) {
        frame.gravity = new core_1.Acceleration();
        frame.linearAcceleration = frame.acceleration.clone().sub(frame.gravity);
    }
    _fromRelativeOrientation(frame) {
        frame.linearAcceleration = frame.acceleration.clone().multiply(frame.relativeOrientation.toEuler().toVector3());
        frame.gravity = frame.acceleration.clone().sub(frame.linearAcceleration);
    }
    _fromAbsoluteOrientation(frame) {
        frame.gravity = new core_1.Acceleration(0, 0, 1, core_1.AccelerationUnit.GRAVITATIONAL_FORCE).applyQuaternion(frame.absoluteOrientation);
        frame.linearAcceleration = frame.acceleration.clone().sub(frame.gravity);
    }
}
exports.GravityProcessingNode = GravityProcessingNode;
var GravityProcessingMethod;
(function (GravityProcessingMethod) {
    GravityProcessingMethod[GravityProcessingMethod["LOW_PASS"] = 0] = "LOW_PASS";
    GravityProcessingMethod[GravityProcessingMethod["ABSOLUTE_ORIENTATION"] = 1] = "ABSOLUTE_ORIENTATION";
    GravityProcessingMethod[GravityProcessingMethod["RELATIVE_ORIENTATION"] = 2] = "RELATIVE_ORIENTATION";
    GravityProcessingMethod[GravityProcessingMethod["LINEAR_ACCELERATION"] = 3] = "LINEAR_ACCELERATION";
})(GravityProcessingMethod = exports.GravityProcessingMethod || (exports.GravityProcessingMethod = {}));
//# sourceMappingURL=GravityProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/PedometerProcessingNode.js":
/*!**************************************************************!*\
  !*** ./dist/cjs/nodes/processing/PedometerProcessingNode.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PedometerData = exports.PedometerProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class PedometerProcessingNode extends core_1.ProcessingNode {
    constructor(options) {
        super(options);
        this.options.windowSize = this.options.windowSize || 1;
        this.options.minPeak = this.options.minPeak || 2;
        this.options.maxPeak = this.options.maxPeak || 8;
        this.options.minStepTime = this.options.minStepTime || 0.3;
        this.options.peakThreshold = this.options.peakThreshold || 0.5;
        this.options.maxStepTime = this.options.maxStepTime || 0.8;
        this.options.meanFilterSize = this.options.meanFilterSize || 1;
        this.options.minConsecutiveSteps = this.options.minConsecutiveSteps || 3;
        this.options.stepSize = this.options.stepSize || 0.7;
    }
    process(frame) {
        return new Promise((resolve, reject) => {
            let pedometerData;
            this.getNodeData(frame.source)
                .then((data) => {
                if (!data) {
                    data = new PedometerData();
                }
                data.add(frame);
                const windowSize = Math.floor(this.options.windowSize * data.frequency);
                if (data.accelerometerData.length > 4 * windowSize) {
                    data.shift();
                }
                pedometerData = data;
                return this.processPedometer(pedometerData);
            })
                .then((steps) => {
                const previousStep = steps.indexOf(pedometerData.lastStepIndex);
                if (previousStep !== -1) {
                    steps = steps.slice(previousStep + 1);
                }
                if (steps.length > 0) {
                    pedometerData.lastStepIndex = steps[steps.length - 1];
                }
                const stepCount = steps.length;
                const distance = this.options.stepSize * stepCount;
                const position = frame.source.getPosition();
                position.timestamp = frame.createdTimestamp;
                position.linearVelocity = new core_1.LinearVelocity(distance / this.options.windowSize, 0, 0, core_1.LinearVelocityUnit.METER_PER_SECOND);
                const orientation = frame.absoluteOrientation || position.orientation;
                if (orientation) {
                    const relativePosition = core_1.Vector3.fromArray([distance / this.options.windowSize, 0, 0]);
                    const eulerOrientation = orientation.toEuler();
                    eulerOrientation.x = 0;
                    eulerOrientation.y = 0;
                    position.fromVector(position.toVector3(core_1.LengthUnit.METER).add(relativePosition.applyEuler(eulerOrientation)));
                }
                return this.setNodeData(frame.source, pedometerData);
            })
                .then(() => {
                resolve(frame);
            })
                .catch(reject);
        });
    }
    processPedometer(data) {
        return new Promise((resolve) => {
            const windowSize = Math.floor(this.options.windowSize * data.frequency);
            const taoMin = this.options.minStepTime * data.frequency;
            const taoMax = this.options.maxStepTime * data.frequency;
            const verticalComponent = this._extractVerticalComponents(data.accelerometerData, data.attitudeData);
            if (verticalComponent.length < windowSize) {
                return resolve([]);
            }
            let smoothedVerticalComponent = verticalComponent;
            if (this.options.meanFilterSize > 1) {
                smoothedVerticalComponent = this._meanFilter(verticalComponent, this.options.meanFilterSize);
            }
            const window = verticalComponent.slice(0, windowSize);
            let windowMax = Math.max(this.options.minPeak, Math.min(this.options.maxPeak, Math.max(...window)));
            let windowSum = window.reduce((a, b) => a + b);
            const windowAvg = windowSum / windowSize;
            const offset = Math.ceil(windowSize / 2);
            let steps = [];
            let lastPeak = data.lastStepIndex;
            for (let i = offset; i < verticalComponent.length - offset - 1; i++) {
                if (verticalComponent[i] >
                    Math.max(this.options.minPeak, this.options.peakThreshold * windowMax + windowAvg) &&
                    smoothedVerticalComponent[i] >= smoothedVerticalComponent[i - 1] &&
                    smoothedVerticalComponent[i] > smoothedVerticalComponent[i + 1] &&
                    lastPeak < i - taoMin) {
                    if (verticalComponent[i] < this.options.maxPeak)
                        steps.push(i);
                    lastPeak = i;
                }
                window.push(verticalComponent[i + offset]);
                const removed = window.shift();
                windowSum += verticalComponent[i + offset] - removed;
                if (removed >= windowMax || verticalComponent[i + offset] > windowMax) {
                    windowMax = Math.max(this.options.minPeak, Math.min(this.options.maxPeak, Math.max(...window)));
                }
            }
            if (this.options.minConsecutiveSteps > 1) {
                let consecutivePeaks = 1;
                let i = steps.length;
                while (i--) {
                    if (i === 0 || steps[i] - steps[i - 1] < taoMax) {
                        consecutivePeaks++;
                    }
                    else {
                        if (consecutivePeaks < this.options.minConsecutiveSteps) {
                            steps.splice(i, consecutivePeaks);
                        }
                        consecutivePeaks = 1;
                    }
                }
                if (steps.length < this.options.minConsecutiveSteps) {
                    steps = [];
                }
            }
            resolve(steps);
        });
    }
    _extractVerticalComponents(accelerometerData, attitudeData) {
        return accelerometerData.map((acceleration, i) => {
            const attitude = attitudeData[i].clone();
            attitude.z = 0;
            return acceleration.clone().applyEuler(attitude).getComponent(2);
        });
    }
    _meanFilter(arr, size) {
        const window = [];
        return arr.map((val) => {
            if (window.length >= size)
                window.shift();
            window.push(val);
            return window.reduce((a, b) => a + b) / arr.length;
        });
    }
}
exports.PedometerProcessingNode = PedometerProcessingNode;
let PedometerData = class PedometerData {
    constructor() {
        this.accelerometerData = [];
        this.attitudeData = [];
        this.lastStepIndex = -Infinity;
    }
    add(frame) {
        this.accelerometerData.push(frame.linearAcceleration);
        this.attitudeData.push(frame.absoluteOrientation.toEuler('ZYX'));
        this.frequency = frame.frequency;
        return this;
    }
    shift() {
        this.lastStepIndex--;
        this.accelerometerData.shift();
        this.attitudeData.shift();
        return this;
    }
};
__decorate([
    (0, core_1.SerializableArrayMember)(core_1.Acceleration),
    __metadata("design:type", Array)
], PedometerData.prototype, "accelerometerData", void 0);
__decorate([
    (0, core_1.SerializableArrayMember)(core_1.Acceleration),
    __metadata("design:type", Array)
], PedometerData.prototype, "attitudeData", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", Number)
], PedometerData.prototype, "frequency", void 0);
__decorate([
    (0, core_1.SerializableMember)(),
    __metadata("design:type", Object)
], PedometerData.prototype, "lastStepIndex", void 0);
PedometerData = __decorate([
    (0, core_1.SerializableObject)()
], PedometerData);
exports.PedometerData = PedometerData;
//# sourceMappingURL=PedometerProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/RelativeOrientationProcessingNode.js":
/*!************************************************************************!*\
  !*** ./dist/cjs/nodes/processing/RelativeOrientationProcessingNode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RelativeOrientationProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class RelativeOrientationProcessingNode extends core_1.FilterProcessingNode {
    initFilter(_, frame) {
        return new Promise((resolve, reject) => {
            if (!frame.angularVelocity || !frame.acceleration) {
                return reject(new Error(`Relative rotation processing requires accelerometer and gyroscope readings!`));
            }
            resolve({
                alpha: 0,
                beta: 0,
                gamma: 0,
            });
        });
    }
    filter(object, frame, filter) {
        return new Promise((resolve) => {
            const accl = frame.acceleration;
            const gyro = object.getPosition().angularVelocity || frame.angularVelocity;
            const bias = 0.98;
            const dt = 1000 / frame.frequency;
            const norm = Math.sqrt(Math.pow(accl.x, 2) + Math.pow(accl.y, 2) + Math.pow(accl.z, 2));
            const scale = Math.PI / 2;
            const alpha = filter.alpha + gyro.z * dt;
            const beta = bias * (filter.beta + gyro.x * dt) + (1.0 - bias) * ((accl.x * scale) / norm);
            const gamma = bias * (filter.gamma + gyro.y * dt) + (1.0 - bias) * ((accl.y * -scale) / norm);
            frame.relativeOrientation = core_1.Orientation.fromEuler([beta, gamma, alpha]);
            resolve(object);
        });
    }
}
exports.RelativeOrientationProcessingNode = RelativeOrientationProcessingNode;
//# sourceMappingURL=RelativeOrientationProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/VelocityCalculationNode.js":
/*!**************************************************************!*\
  !*** ./dist/cjs/nodes/processing/VelocityCalculationNode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VelocityCalculationNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class VelocityCalculationNode extends core_1.ObjectProcessingNode {
    processObject(object) {
        return new Promise((resolve, reject) => {
            if (object.getPosition()) {
                this.predictVelocity(object).then(resolve).catch(reject);
            }
            else {
                resolve(object);
            }
        });
    }
    predictVelocity(object) {
        return new Promise((resolve) => {
            const service = this.model.findDataService(object);
            const position = object.getPosition();
            service
                .findByUID(object.uid)
                .then((existingObject) => {
                const existingPosition = existingObject.getPosition();
                const difference = position
                    .toVector3(core_1.LengthUnit.METER)
                    .sub(existingPosition.toVector3(core_1.LengthUnit.METER));
                const timeDifference = core_1.TimeService.getUnit().convert(position.timestamp - existingPosition.timestamp, core_1.TimeUnit.SECOND);
                difference.divideScalar(timeDifference);
                position.linearVelocity = new core_1.LinearVelocity(difference.x, difference.y, difference.z, core_1.LinearVelocityUnit.METER_PER_SECOND);
                resolve(object);
            })
                .catch(() => {
                resolve(object);
            });
        });
    }
}
exports.VelocityCalculationNode = VelocityCalculationNode;
//# sourceMappingURL=VelocityCalculationNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/VelocityProcessingNode.js":
/*!*************************************************************!*\
  !*** ./dist/cjs/nodes/processing/VelocityProcessingNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VelocityProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class VelocityProcessingNode extends core_1.ObjectProcessingNode {
    processObject(object, frame) {
        return new Promise((resolve, reject) => {
            if (object.getPosition()) {
                const lastPosition = object.getPosition();
                if (lastPosition.linearVelocity || lastPosition.angularVelocity) {
                    this.applyVelocity(object, frame).then(resolve).catch(reject);
                }
                else {
                    resolve(object);
                }
            }
            else {
                resolve(object);
            }
        });
    }
    applyVelocity(object, frame) {
        return new Promise((resolve) => {
            const lastPosition = object.getPosition();
            const deltaTime = core_1.TimeService.getUnit().convert(frame.createdTimestamp - lastPosition.timestamp, core_1.TimeUnit.SECOND);
            if (deltaTime < 0) {
                return resolve(object);
            }
            const linear = lastPosition.linearVelocity || new core_1.LinearVelocity();
            const angular = lastPosition.angularVelocity || new core_1.AngularVelocity();
            const linearMovement = linear.clone().multiplyScalar(deltaTime);
            const angularMovement = angular.clone().multiplyScalar(deltaTime);
            const relativePosition = core_1.Vector3.fromArray([0, 0, 0]);
            if (angular.equals(core_1.Vector3.fromArray([0, 0, 0]))) {
                relativePosition.applyMatrix4(new core_1.Matrix4().makeTranslation(linearMovement.x, linearMovement.y, linearMovement.z));
            }
            else if (!linear.equals(core_1.Vector3.fromArray([0, 0, 0]))) {
                const rX = linear.clone().divideScalar(angular.x === 0 ? 1 : angular.x);
                const rY = linear.clone().divideScalar(angular.y === 0 ? 1 : angular.y);
                const rZ = linear.clone().divideScalar(angular.z === 0 ? 1 : angular.z);
                const rMin = rX.min(rY).min(rZ);
                relativePosition.applyMatrix4(new core_1.Matrix4().makeTranslation(-rMin.x, -rMin.y, -rMin.z));
                relativePosition.applyMatrix4(new core_1.AxisAngle(angularMovement.x, angularMovement.y, angularMovement.z).toRotationMatrix());
                relativePosition.applyMatrix4(new core_1.Matrix4().makeTranslation(rMin.x, rMin.y, rMin.z));
                relativePosition.applyMatrix4(core_1.Matrix4.rotationFromAxisAngle(new core_1.Vector3(angular.x !== 0 ? 1 : 0, angular.y !== 0 ? 1 : 0, angular.z !== 0 ? 1 : 0), Math.PI / 2));
            }
            const newPosition = lastPosition.clone();
            if (!newPosition.orientation) {
                newPosition.orientation = new core_1.Orientation();
            }
            newPosition.timestamp = frame.createdTimestamp;
            newPosition.fromVector(newPosition.toVector3(core_1.LengthUnit.METER).add(relativePosition.applyQuaternion(newPosition.orientation)), core_1.LengthUnit.METER);
            const newOrientation = newPosition.orientation.toEuler().toVector3().add(angular.multiplyScalar(deltaTime));
            newPosition.orientation = core_1.Orientation.fromEuler(newOrientation);
            object.setPosition(newPosition);
            resolve(object);
        });
    }
}
exports.VelocityProcessingNode = VelocityProcessingNode;
//# sourceMappingURL=VelocityProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/calibration/MagnetometerCalibrationNode.js":
/*!******************************************************************************!*\
  !*** ./dist/cjs/nodes/processing/calibration/MagnetometerCalibrationNode.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MagnetometerCalibrationNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class MagnetometerCalibrationNode extends core_1.ObjectProcessingNode {
    constructor(options) {
        super(options);
    }
    processObject(object, frame) {
        return new Promise((resolve, reject) => {
            this.getNodeData(object)
                .then((calibrationData) => __awaiter(this, void 0, void 0, function* () {
                if (calibrationData === undefined) {
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
                if (isNaN(calibrationData.scaleX) &&
                    calibrationData.count < this.options.count &&
                    this.options.count !== -1) {
                    calibrationData.xMax = Math.max(frame.magnetism.x, calibrationData.xMax);
                    calibrationData.xMin = Math.min(frame.magnetism.x, calibrationData.xMin);
                    calibrationData.yMax = Math.max(frame.magnetism.y, calibrationData.yMax);
                    calibrationData.yMin = Math.min(frame.magnetism.y, calibrationData.yMin);
                    calibrationData.zMax = Math.max(frame.magnetism.z, calibrationData.zMax);
                    calibrationData.zMin = Math.min(frame.magnetism.z, calibrationData.zMin);
                    calibrationData.count += 1;
                    yield this.setNodeData(object, calibrationData);
                }
                else if (isNaN(calibrationData.scaleX) && calibrationData.count >= this.options.count) {
                    const avgDeltaX = (calibrationData.xMax + calibrationData.xMin) / 2;
                    const avgDeltaY = (calibrationData.yMax + calibrationData.yMin) / 2;
                    const avgDeltaZ = (calibrationData.zMax + calibrationData.zMin) / 2;
                    const avgDelta = (avgDeltaX + avgDeltaY + avgDeltaZ) / 3;
                    calibrationData.scaleX = avgDelta / avgDeltaX;
                    calibrationData.scaleY = avgDelta / avgDeltaY;
                    calibrationData.scaleZ = avgDelta / avgDeltaZ;
                    yield this.setNodeData(object, calibrationData);
                }
                else {
                    frame.magnetism.x = frame.magnetism.x * calibrationData.scaleX;
                    frame.magnetism.y = frame.magnetism.y * calibrationData.scaleY;
                    frame.magnetism.z = frame.magnetism.z * calibrationData.scaleZ;
                }
                resolve(object);
            }))
                .catch(reject);
        });
    }
}
exports.MagnetometerCalibrationNode = MagnetometerCalibrationNode;
//# sourceMappingURL=MagnetometerCalibrationNode.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/calibration/index.js":
/*!********************************************************!*\
  !*** ./dist/cjs/nodes/processing/calibration/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./MagnetometerCalibrationNode */ "./dist/cjs/nodes/processing/calibration/MagnetometerCalibrationNode.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/nodes/processing/index.js":
/*!********************************************!*\
  !*** ./dist/cjs/nodes/processing/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./calibration */ "./dist/cjs/nodes/processing/calibration/index.js"), exports);
__exportStar(__webpack_require__(/*! ./AccelerationProcessingNode */ "./dist/cjs/nodes/processing/AccelerationProcessingNode.js"), exports);
__exportStar(__webpack_require__(/*! ./RelativeOrientationProcessingNode */ "./dist/cjs/nodes/processing/RelativeOrientationProcessingNode.js"), exports);
__exportStar(__webpack_require__(/*! ./GravityProcessingNode */ "./dist/cjs/nodes/processing/GravityProcessingNode.js"), exports);
__exportStar(__webpack_require__(/*! ./AbsoluteOrientationProcessingNode */ "./dist/cjs/nodes/processing/AbsoluteOrientationProcessingNode.js"), exports);
__exportStar(__webpack_require__(/*! ./PedometerProcessingNode */ "./dist/cjs/nodes/processing/PedometerProcessingNode.js"), exports);
__exportStar(__webpack_require__(/*! ./VelocityCalculationNode */ "./dist/cjs/nodes/processing/VelocityCalculationNode.js"), exports);
__exportStar(__webpack_require__(/*! ./VelocityProcessingNode */ "./dist/cjs/nodes/processing/VelocityProcessingNode.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/nodes/source/IMUBrowserSource.js":
/*!***************************************************!*\
  !*** ./dist/cjs/nodes/source/IMUBrowserSource.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IMUBrowserSource = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
const data_1 = __webpack_require__(/*! ../../data */ "./dist/cjs/data/index.js");
class IMUBrowserSource extends core_1.SourceNode {
    constructor(options) {
        super(options);
        this.once('build', this._onReady.bind(this));
    }
    _onReady() {
        window.addEventListener('devicemotion', (event) => {
            const dataFrame = new data_1.IMUDataFrame();
            dataFrame.acceleration = new core_1.Acceleration(event.accelerationIncludingGravity.x, event.accelerationIncludingGravity.y, event.accelerationIncludingGravity.z);
            dataFrame.angularVelocity = new core_1.AngularVelocity(event.rotationRate.beta, event.rotationRate.gamma, event.rotationRate.alpha);
            dataFrame.linearAcceleration = new core_1.Acceleration(event.acceleration.x, event.acceleration.y, event.acceleration.z);
            const source = this.source;
            source.frequency = 1000 / event.interval;
            source.getPosition().angularVelocity = dataFrame.angularVelocity;
            dataFrame.absoluteOrientation = source.getPosition().orientation;
            dataFrame.source = source;
            dataFrame.frequency = source.frequency;
            this.push(dataFrame);
        }, true);
        window.addEventListener('deviceorientation', (event) => {
            const source = this.source;
            source.getPosition().orientation = core_1.Orientation.fromEuler([event.beta, event.gamma, event.alpha]);
        });
        this.logger('debug', {
            message: 'Browser orientation and motion events registered!',
        });
    }
    onPull() {
        return new Promise((resolve) => {
            resolve(undefined);
        });
    }
}
exports.IMUBrowserSource = IMUBrowserSource;
//# sourceMappingURL=IMUBrowserSource.js.map

/***/ }),

/***/ "./dist/cjs/nodes/source/index.js":
/*!****************************************!*\
  !*** ./dist/cjs/nodes/source/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./IMUBrowserSource */ "./dist/cjs/nodes/source/IMUBrowserSource.js"), exports);
//# sourceMappingURL=index.js.map

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
//# sourceMappingURL=openhps-imu.js.map