import * as __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__ from "./openhps-core.es.js";
/******/ var __webpack_modules__ = ({

/***/ "./dist/esm/data/IMUDataFrame.js":
/*!***************************************!*\
  !*** ./dist/esm/data/IMUDataFrame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMUDataFrame": () => (/* binding */ IMUDataFrame)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let IMUDataFrame = class IMUDataFrame extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataFrame {
};
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", Number)
], IMUDataFrame.prototype, "frequency", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetism)
], IMUDataFrame.prototype, "magnetism", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration)
], IMUDataFrame.prototype, "acceleration", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration)
], IMUDataFrame.prototype, "linearAcceleration", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration)
], IMUDataFrame.prototype, "gravity", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation)
], IMUDataFrame.prototype, "relativeOrientation", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation)
], IMUDataFrame.prototype, "absoluteOrientation", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocity)
], IMUDataFrame.prototype, "linearVelocity", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AngularVelocity)
], IMUDataFrame.prototype, "angularVelocity", void 0);
IMUDataFrame = __decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], IMUDataFrame);

//# sourceMappingURL=IMUDataFrame.js.map

/***/ }),

/***/ "./dist/esm/data/IMUSensorObject.js":
/*!******************************************!*\
  !*** ./dist/esm/data/IMUSensorObject.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMUSensorObject": () => (/* binding */ IMUSensorObject)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let IMUSensorObject = class IMUSensorObject extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataObject {
};
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", Number)
], IMUSensorObject.prototype, "frequency", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Magnetism)
], IMUSensorObject.prototype, "magnetism", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration)
], IMUSensorObject.prototype, "acceleration", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration)
], IMUSensorObject.prototype, "linearAcceleration", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration)
], IMUSensorObject.prototype, "gravity", void 0);
IMUSensorObject = __decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], IMUSensorObject);

//# sourceMappingURL=IMUSensorObject.js.map

/***/ }),

/***/ "./dist/esm/data/index.js":
/*!********************************!*\
  !*** ./dist/esm/data/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMUDataFrame": () => (/* reexport safe */ _IMUDataFrame__WEBPACK_IMPORTED_MODULE_0__.IMUDataFrame),
/* harmony export */   "IMUSensorObject": () => (/* reexport safe */ _IMUSensorObject__WEBPACK_IMPORTED_MODULE_1__.IMUSensorObject)
/* harmony export */ });
/* harmony import */ var _IMUDataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IMUDataFrame */ "./dist/esm/data/IMUDataFrame.js");
/* harmony import */ var _IMUSensorObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IMUSensorObject */ "./dist/esm/data/IMUSensorObject.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/esm/nodes/index.js":
/*!*********************************!*\
  !*** ./dist/esm/nodes/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbsoluteOrientationProcessingNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationProcessingNode),
/* harmony export */   "AccelerationProcessingNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.AccelerationProcessingNode),
/* harmony export */   "GravityProcessingMethod": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.GravityProcessingMethod),
/* harmony export */   "GravityProcessingNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.GravityProcessingNode),
/* harmony export */   "MagnetometerCalibrationNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.MagnetometerCalibrationNode),
/* harmony export */   "PedometerData": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.PedometerData),
/* harmony export */   "PedometerProcessingNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.PedometerProcessingNode),
/* harmony export */   "RelativeOrientationProcessingNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.RelativeOrientationProcessingNode),
/* harmony export */   "VelocityCalculationNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.VelocityCalculationNode),
/* harmony export */   "VelocityProcessingNode": () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_0__.VelocityProcessingNode),
/* harmony export */   "IMUBrowserSource": () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_1__.IMUBrowserSource)
/* harmony export */ });
/* harmony import */ var _processing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processing */ "./dist/esm/nodes/processing/index.js");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source */ "./dist/esm/nodes/source/index.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/AbsoluteOrientationProcessingNode.js":
/*!************************************************************************!*\
  !*** ./dist/esm/nodes/processing/AbsoluteOrientationProcessingNode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbsoluteOrientationProcessingNode": () => (/* binding */ AbsoluteOrientationProcessingNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

class AbsoluteOrientationProcessingNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.FilterProcessingNode {
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
            frame.absoluteOrientation = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromEuler([pitch, roll, azimuth]);
            resolve(object);
        });
    }
}
//# sourceMappingURL=AbsoluteOrientationProcessingNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/AccelerationProcessingNode.js":
/*!*****************************************************************!*\
  !*** ./dist/esm/nodes/processing/AccelerationProcessingNode.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccelerationProcessingNode": () => (/* binding */ AccelerationProcessingNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

class AccelerationProcessingNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.FilterProcessingNode {
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
            frame.linearVelocity = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocity.fromArray(accl.clone().multiplyScalar(dt).toArray());
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
//# sourceMappingURL=AccelerationProcessingNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/GravityProcessingNode.js":
/*!************************************************************!*\
  !*** ./dist/esm/nodes/processing/GravityProcessingNode.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GravityProcessingNode": () => (/* binding */ GravityProcessingNode),
/* harmony export */   "GravityProcessingMethod": () => (/* binding */ GravityProcessingMethod)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

class GravityProcessingNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.FilterProcessingNode {
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
        frame.gravity = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration();
        frame.linearAcceleration = frame.acceleration.clone().sub(frame.gravity);
    }
    _fromRelativeOrientation(frame) {
        frame.linearAcceleration = frame.acceleration.clone().multiply(frame.relativeOrientation.toEuler().toVector3());
        frame.gravity = frame.acceleration.clone().sub(frame.linearAcceleration);
    }
    _fromAbsoluteOrientation(frame) {
        frame.gravity = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(0, 0, 1, _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AccelerationUnit.GRAVITATIONAL_FORCE).applyQuaternion(frame.absoluteOrientation);
        frame.linearAcceleration = frame.acceleration.clone().sub(frame.gravity);
    }
}
var GravityProcessingMethod;
(function (GravityProcessingMethod) {
    GravityProcessingMethod[GravityProcessingMethod["LOW_PASS"] = 0] = "LOW_PASS";
    GravityProcessingMethod[GravityProcessingMethod["ABSOLUTE_ORIENTATION"] = 1] = "ABSOLUTE_ORIENTATION";
    GravityProcessingMethod[GravityProcessingMethod["RELATIVE_ORIENTATION"] = 2] = "RELATIVE_ORIENTATION";
    GravityProcessingMethod[GravityProcessingMethod["LINEAR_ACCELERATION"] = 3] = "LINEAR_ACCELERATION";
})(GravityProcessingMethod || (GravityProcessingMethod = {}));
//# sourceMappingURL=GravityProcessingNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/PedometerProcessingNode.js":
/*!**************************************************************!*\
  !*** ./dist/esm/nodes/processing/PedometerProcessingNode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedometerProcessingNode": () => (/* binding */ PedometerProcessingNode),
/* harmony export */   "PedometerData": () => (/* binding */ PedometerData)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class PedometerProcessingNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.ProcessingNode {
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
                position.linearVelocity = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocity(distance / this.options.windowSize, 0, 0, _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocityUnit.METER_PER_SECOND);
                const orientation = frame.absoluteOrientation || position.orientation;
                if (orientation) {
                    const relativePosition = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.fromArray([distance / this.options.windowSize, 0, 0]);
                    const eulerOrientation = orientation.toEuler();
                    eulerOrientation.x = 0;
                    eulerOrientation.y = 0;
                    position.fromVector(position.toVector3(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.LengthUnit.METER).add(relativePosition.applyEuler(eulerOrientation)));
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
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableArrayMember)(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration),
    __metadata("design:type", Array)
], PedometerData.prototype, "accelerometerData", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableArrayMember)(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration),
    __metadata("design:type", Array)
], PedometerData.prototype, "attitudeData", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", Number)
], PedometerData.prototype, "frequency", void 0);
__decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    __metadata("design:type", Object)
], PedometerData.prototype, "lastStepIndex", void 0);
PedometerData = __decorate([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], PedometerData);

//# sourceMappingURL=PedometerProcessingNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/RelativeOrientationProcessingNode.js":
/*!************************************************************************!*\
  !*** ./dist/esm/nodes/processing/RelativeOrientationProcessingNode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeOrientationProcessingNode": () => (/* binding */ RelativeOrientationProcessingNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

class RelativeOrientationProcessingNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.FilterProcessingNode {
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
            frame.relativeOrientation = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromEuler([beta, gamma, alpha]);
            resolve(object);
        });
    }
}
//# sourceMappingURL=RelativeOrientationProcessingNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/VelocityCalculationNode.js":
/*!**************************************************************!*\
  !*** ./dist/esm/nodes/processing/VelocityCalculationNode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VelocityCalculationNode": () => (/* binding */ VelocityCalculationNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

class VelocityCalculationNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
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
                    .toVector3(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.LengthUnit.METER)
                    .sub(existingPosition.toVector3(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.LengthUnit.METER));
                const timeDifference = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.TimeService.getUnit().convert(position.timestamp - existingPosition.timestamp, _openhps_core__WEBPACK_IMPORTED_MODULE_0__.TimeUnit.SECOND);
                difference.divideScalar(timeDifference);
                position.linearVelocity = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocity(difference.x, difference.y, difference.z, _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocityUnit.METER_PER_SECOND);
                resolve(object);
            })
                .catch(() => {
                resolve(object);
            });
        });
    }
}
//# sourceMappingURL=VelocityCalculationNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/VelocityProcessingNode.js":
/*!*************************************************************!*\
  !*** ./dist/esm/nodes/processing/VelocityProcessingNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VelocityProcessingNode": () => (/* binding */ VelocityProcessingNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");

class VelocityProcessingNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
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
            const deltaTime = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.TimeService.getUnit().convert(frame.createdTimestamp - lastPosition.timestamp, _openhps_core__WEBPACK_IMPORTED_MODULE_0__.TimeUnit.SECOND);
            if (deltaTime < 0) {
                return resolve(object);
            }
            const linear = lastPosition.linearVelocity || new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LinearVelocity();
            const angular = lastPosition.angularVelocity || new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AngularVelocity();
            const linearMovement = linear.clone().multiplyScalar(deltaTime);
            const angularMovement = angular.clone().multiplyScalar(deltaTime);
            const relativePosition = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.fromArray([0, 0, 0]);
            if (angular.equals(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.fromArray([0, 0, 0]))) {
                relativePosition.applyMatrix4(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(linearMovement.x, linearMovement.y, linearMovement.z));
            }
            else if (!linear.equals(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.fromArray([0, 0, 0]))) {
                const rX = linear.clone().divideScalar(angular.x === 0 ? 1 : angular.x);
                const rY = linear.clone().divideScalar(angular.y === 0 ? 1 : angular.y);
                const rZ = linear.clone().divideScalar(angular.z === 0 ? 1 : angular.z);
                const rMin = rX.min(rY).min(rZ);
                relativePosition.applyMatrix4(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(-rMin.x, -rMin.y, -rMin.z));
                relativePosition.applyMatrix4(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AxisAngle(angularMovement.x, angularMovement.y, angularMovement.z).toRotationMatrix());
                relativePosition.applyMatrix4(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(rMin.x, rMin.y, rMin.z));
                relativePosition.applyMatrix4(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.Matrix4.rotationFromAxisAngle(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(angular.x !== 0 ? 1 : 0, angular.y !== 0 ? 1 : 0, angular.z !== 0 ? 1 : 0), Math.PI / 2));
            }
            const newPosition = lastPosition.clone();
            if (!newPosition.orientation) {
                newPosition.orientation = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation();
            }
            newPosition.timestamp = frame.createdTimestamp;
            newPosition.fromVector(newPosition.toVector3(_openhps_core__WEBPACK_IMPORTED_MODULE_0__.LengthUnit.METER).add(relativePosition.applyQuaternion(newPosition.orientation)), _openhps_core__WEBPACK_IMPORTED_MODULE_0__.LengthUnit.METER);
            const newOrientation = newPosition.orientation.toEuler().toVector3().add(angular.multiplyScalar(deltaTime));
            newPosition.orientation = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromEuler(newOrientation);
            object.setPosition(newPosition);
            resolve(object);
        });
    }
}
//# sourceMappingURL=VelocityProcessingNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/calibration/MagnetometerCalibrationNode.js":
/*!******************************************************************************!*\
  !*** ./dist/esm/nodes/processing/calibration/MagnetometerCalibrationNode.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnetometerCalibrationNode": () => (/* binding */ MagnetometerCalibrationNode)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class MagnetometerCalibrationNode extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
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
//# sourceMappingURL=MagnetometerCalibrationNode.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/calibration/index.js":
/*!********************************************************!*\
  !*** ./dist/esm/nodes/processing/calibration/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnetometerCalibrationNode": () => (/* reexport safe */ _MagnetometerCalibrationNode__WEBPACK_IMPORTED_MODULE_0__.MagnetometerCalibrationNode)
/* harmony export */ });
/* harmony import */ var _MagnetometerCalibrationNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MagnetometerCalibrationNode */ "./dist/esm/nodes/processing/calibration/MagnetometerCalibrationNode.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/esm/nodes/processing/index.js":
/*!********************************************!*\
  !*** ./dist/esm/nodes/processing/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnetometerCalibrationNode": () => (/* reexport safe */ _calibration__WEBPACK_IMPORTED_MODULE_0__.MagnetometerCalibrationNode),
/* harmony export */   "AccelerationProcessingNode": () => (/* reexport safe */ _AccelerationProcessingNode__WEBPACK_IMPORTED_MODULE_1__.AccelerationProcessingNode),
/* harmony export */   "RelativeOrientationProcessingNode": () => (/* reexport safe */ _RelativeOrientationProcessingNode__WEBPACK_IMPORTED_MODULE_2__.RelativeOrientationProcessingNode),
/* harmony export */   "GravityProcessingMethod": () => (/* reexport safe */ _GravityProcessingNode__WEBPACK_IMPORTED_MODULE_3__.GravityProcessingMethod),
/* harmony export */   "GravityProcessingNode": () => (/* reexport safe */ _GravityProcessingNode__WEBPACK_IMPORTED_MODULE_3__.GravityProcessingNode),
/* harmony export */   "AbsoluteOrientationProcessingNode": () => (/* reexport safe */ _AbsoluteOrientationProcessingNode__WEBPACK_IMPORTED_MODULE_4__.AbsoluteOrientationProcessingNode),
/* harmony export */   "PedometerData": () => (/* reexport safe */ _PedometerProcessingNode__WEBPACK_IMPORTED_MODULE_5__.PedometerData),
/* harmony export */   "PedometerProcessingNode": () => (/* reexport safe */ _PedometerProcessingNode__WEBPACK_IMPORTED_MODULE_5__.PedometerProcessingNode),
/* harmony export */   "VelocityCalculationNode": () => (/* reexport safe */ _VelocityCalculationNode__WEBPACK_IMPORTED_MODULE_6__.VelocityCalculationNode),
/* harmony export */   "VelocityProcessingNode": () => (/* reexport safe */ _VelocityProcessingNode__WEBPACK_IMPORTED_MODULE_7__.VelocityProcessingNode)
/* harmony export */ });
/* harmony import */ var _calibration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calibration */ "./dist/esm/nodes/processing/calibration/index.js");
/* harmony import */ var _AccelerationProcessingNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccelerationProcessingNode */ "./dist/esm/nodes/processing/AccelerationProcessingNode.js");
/* harmony import */ var _RelativeOrientationProcessingNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelativeOrientationProcessingNode */ "./dist/esm/nodes/processing/RelativeOrientationProcessingNode.js");
/* harmony import */ var _GravityProcessingNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GravityProcessingNode */ "./dist/esm/nodes/processing/GravityProcessingNode.js");
/* harmony import */ var _AbsoluteOrientationProcessingNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbsoluteOrientationProcessingNode */ "./dist/esm/nodes/processing/AbsoluteOrientationProcessingNode.js");
/* harmony import */ var _PedometerProcessingNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PedometerProcessingNode */ "./dist/esm/nodes/processing/PedometerProcessingNode.js");
/* harmony import */ var _VelocityCalculationNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VelocityCalculationNode */ "./dist/esm/nodes/processing/VelocityCalculationNode.js");
/* harmony import */ var _VelocityProcessingNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VelocityProcessingNode */ "./dist/esm/nodes/processing/VelocityProcessingNode.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/esm/nodes/source/IMUBrowserSource.js":
/*!***************************************************!*\
  !*** ./dist/esm/nodes/source/IMUBrowserSource.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMUBrowserSource": () => (/* binding */ IMUBrowserSource)
/* harmony export */ });
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./dist/esm/data/index.js");


class IMUBrowserSource extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
    constructor(options) {
        super(options);
        this.once('build', this._onReady.bind(this));
    }
    _onReady() {
        window.addEventListener('devicemotion', (event) => {
            const dataFrame = new _data__WEBPACK_IMPORTED_MODULE_1__.IMUDataFrame();
            dataFrame.acceleration = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(event.accelerationIncludingGravity.x, event.accelerationIncludingGravity.y, event.accelerationIncludingGravity.z);
            dataFrame.angularVelocity = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.AngularVelocity(event.rotationRate.beta, event.rotationRate.gamma, event.rotationRate.alpha);
            dataFrame.linearAcceleration = new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Acceleration(event.acceleration.x, event.acceleration.y, event.acceleration.z);
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
            source.getPosition().orientation = _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Orientation.fromEuler([event.beta, event.gamma, event.alpha]);
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
//# sourceMappingURL=IMUBrowserSource.js.map

/***/ }),

/***/ "./dist/esm/nodes/source/index.js":
/*!****************************************!*\
  !*** ./dist/esm/nodes/source/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMUBrowserSource": () => (/* reexport safe */ _IMUBrowserSource__WEBPACK_IMPORTED_MODULE_0__.IMUBrowserSource)
/* harmony export */ });
/* harmony import */ var _IMUBrowserSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IMUBrowserSource */ "./dist/esm/nodes/source/IMUBrowserSource.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@openhps/core":
/*!***************************************!*\
  !*** external "./openhps-core.es.js" ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["Acceleration"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Acceleration, ["AccelerationUnit"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.AccelerationUnit, ["AngularVelocity"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.AngularVelocity, ["AxisAngle"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.AxisAngle, ["DataFrame"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.DataFrame, ["DataObject"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.DataObject, ["FilterProcessingNode"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.FilterProcessingNode, ["LengthUnit"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.LengthUnit, ["LinearVelocity"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.LinearVelocity, ["LinearVelocityUnit"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.LinearVelocityUnit, ["Magnetism"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Magnetism, ["Matrix4"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Matrix4, ["ObjectProcessingNode"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.ObjectProcessingNode, ["Orientation"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Orientation, ["ProcessingNode"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.ProcessingNode, ["SerializableArrayMember"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.SerializableArrayMember, ["SerializableMember"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.SerializableMember, ["SerializableObject"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.SerializableObject, ["SourceNode"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.SourceNode, ["TimeService"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.TimeService, ["TimeUnit"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.TimeUnit, ["Vector3"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.Vector3 });

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
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./dist/esm/index.js ***!
  \***************************/
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbsoluteOrientationProcessingNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.AbsoluteOrientationProcessingNode),
/* harmony export */   "AccelerationProcessingNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.AccelerationProcessingNode),
/* harmony export */   "GravityProcessingMethod": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.GravityProcessingMethod),
/* harmony export */   "GravityProcessingNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.GravityProcessingNode),
/* harmony export */   "IMUBrowserSource": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.IMUBrowserSource),
/* harmony export */   "MagnetometerCalibrationNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.MagnetometerCalibrationNode),
/* harmony export */   "PedometerData": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.PedometerData),
/* harmony export */   "PedometerProcessingNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.PedometerProcessingNode),
/* harmony export */   "RelativeOrientationProcessingNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.RelativeOrientationProcessingNode),
/* harmony export */   "VelocityCalculationNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.VelocityCalculationNode),
/* harmony export */   "VelocityProcessingNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.VelocityProcessingNode),
/* harmony export */   "IMUDataFrame": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_1__.IMUDataFrame),
/* harmony export */   "IMUSensorObject": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_1__.IMUSensorObject)
/* harmony export */ });
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./dist/esm/nodes/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./dist/esm/data/index.js");


//# sourceMappingURL=index.js.map
})();

var __webpack_exports__AbsoluteOrientationProcessingNode = __webpack_exports__.AbsoluteOrientationProcessingNode;
var __webpack_exports__AccelerationProcessingNode = __webpack_exports__.AccelerationProcessingNode;
var __webpack_exports__GravityProcessingMethod = __webpack_exports__.GravityProcessingMethod;
var __webpack_exports__GravityProcessingNode = __webpack_exports__.GravityProcessingNode;
var __webpack_exports__IMUBrowserSource = __webpack_exports__.IMUBrowserSource;
var __webpack_exports__IMUDataFrame = __webpack_exports__.IMUDataFrame;
var __webpack_exports__IMUSensorObject = __webpack_exports__.IMUSensorObject;
var __webpack_exports__MagnetometerCalibrationNode = __webpack_exports__.MagnetometerCalibrationNode;
var __webpack_exports__PedometerData = __webpack_exports__.PedometerData;
var __webpack_exports__PedometerProcessingNode = __webpack_exports__.PedometerProcessingNode;
var __webpack_exports__RelativeOrientationProcessingNode = __webpack_exports__.RelativeOrientationProcessingNode;
var __webpack_exports__VelocityCalculationNode = __webpack_exports__.VelocityCalculationNode;
var __webpack_exports__VelocityProcessingNode = __webpack_exports__.VelocityProcessingNode;
export { __webpack_exports__AbsoluteOrientationProcessingNode as AbsoluteOrientationProcessingNode, __webpack_exports__AccelerationProcessingNode as AccelerationProcessingNode, __webpack_exports__GravityProcessingMethod as GravityProcessingMethod, __webpack_exports__GravityProcessingNode as GravityProcessingNode, __webpack_exports__IMUBrowserSource as IMUBrowserSource, __webpack_exports__IMUDataFrame as IMUDataFrame, __webpack_exports__IMUSensorObject as IMUSensorObject, __webpack_exports__MagnetometerCalibrationNode as MagnetometerCalibrationNode, __webpack_exports__PedometerData as PedometerData, __webpack_exports__PedometerProcessingNode as PedometerProcessingNode, __webpack_exports__RelativeOrientationProcessingNode as RelativeOrientationProcessingNode, __webpack_exports__VelocityCalculationNode as VelocityCalculationNode, __webpack_exports__VelocityProcessingNode as VelocityProcessingNode };

//# sourceMappingURL=openhps-imu.es.js.map