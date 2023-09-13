(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("OpenHPS", [], factory);
	else if(typeof exports === 'object')
		exports["OpenHPS"] = factory();
	else
		root["OpenHPS"] = root["OpenHPS"] || {}, root["OpenHPS"]["core"] = factory();
})((typeof self !== 'undefined' ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/esm5/ModelBuilder.js":
/*!***********************************!*\
  !*** ./dist/esm5/ModelBuilder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelBuilder: () => (/* binding */ ModelBuilder)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./dist/esm5/data/object/space/ReferenceSpace.js");
/* harmony import */ var _graph_internal_implementations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph/_internal/implementations */ "./dist/esm5/graph/_internal/implementations/ModelGraph.js");
/* harmony import */ var _graph_internal_implementations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graph/_internal/implementations */ "./dist/esm5/graph/_internal/implementations/GraphValidator.js");
/* harmony import */ var _graph_builders_GraphBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph/builders/GraphBuilder */ "./dist/esm5/graph/builders/GraphBuilder.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./dist/esm5/service/DataObjectService.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./dist/esm5/service/MemoryDataService.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./dist/esm5/service/NodeDataService.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service */ "./dist/esm5/service/TimeService.js");





/**
 * Model builder to construct and build a {@link Model} consisting of graph shapes and services.
 *
 * ## Usage
 * Models can be created using the {@link ModelBuilder}. Once you have added all services and constructed the graph, you can build the model using the ```build()``` function. A promise will be returned with the created model.
 *
 * ```typescript
 * import { ModelBuilder } from '@openhps/core';
 *
 * ModelBuilder.create()
 *     .build().then(model => {
 *         // ...
 *     });
 * ```
 * The graph shape of a model is immutable and can not be altered after building.
 *
 * ### Shape Builder
 * Shapes can be created by starting with the ```from()``` function. This function takes an optional
 * parameter of one or multiple [source nodes](#sourcenode).
 *
 * In order to end a shape, the ```to()``` function needs to be called with one or more optional [sink nodes](#sinknode).
 * ```typescript
 * import { ModelBuilder } from '@openhps/core';
 *
 * ModelBuilder.create()
 *     .from()
 *     .to()
 *     .build().then(model => {
 *         // ...
 *     });
 * ```
 *
 * Alternatively for readability with multiple shapes, the shapes can individually be created using the ```addShape()``` function as shown below.
 * ```typescript
 * import { ModelBuilder, GraphBuilder } from '@openhps/core';
 *
 * ModelBuilder.create()
 *     .addShape(
 *       GraphBuilder.create()
 *         .from()
 *         .to())
 *     .build().then(model => {
 *         // ...
 *     });
 * ```
 *
 * #### Building Source Processors
 * It is possible to have multiple processing nodes between the source and sink. These processing nodes can manipulate the data frame
 * when it traverses from node to node.
 * ```typescript
 * import { ModelBuilder } from '@openhps/core';
 *
 * ModelBuilder.create()
 *     .from(...)
 *     .via(new ComputingNode())
 *     .via(new AnotherComputingNode())
 *     .to(...)
 *     .build().then(model => {
 *         // ...
 *     });
 * ```
 *
 * #### Helper Functions
 * Helper functions can replace the ```via()``` function. Commonly used nodes such as frame filters, merging of data frames from
 * multiple sources, ... can be replaced with simple functions as ```filter()``` or ```merge()``` respectively.
 * ```typescript
 * import { ModelBuilder } from '@openhps/core';
 * import { CSVSourceNode, CSVSinkNode } from '@openhps/csv';
 *
 * ModelBuilder.create()
 *     .from(
 *         new CSVSourceNode('scanner1.csv', ...),
 *         new CSVSourceNode('scanner2.csv', ...),
 *         new CSVSourceNode('scanner3.csv', ...)
 *     )
 *     .filter((frame: DataFrame) => true)
 *     .merge((frame: DataFrame) => frame.source.uid)
 *     .via(new ComputingNode())
 *     .via(new AnotherComputingNode())
 *     .to(new CSVSinkNode('output.csv', ...))
 *     .build().then(model => {
 *         // ...
 *     });
 * ```
 *
 * ### Debug Logging
 * When building the model, you can provide a logger callback that has two arguments. An error level complying
 * with normal log levels and a log object that represents an object.
 * ```typescript
 * import { ModelBuilder } from '@openhps/core';
 *
 * ModelBuilder.create()
 *     // Set the logger that will be used by all nodes and services
 *     .withLogger((level: string, log: any) => {
 *         console.log(log);
 *     })
 *     // ...
 *     .build().then(model => {
 *      // ...
 *     });
 * ```
 *
 * ### Adding Services
 * Adding services can be done using the ```addService()``` function in the model builder.
 * ```typescript
 * import { ModelBuilder } from '@openhps/core';
 *
 * ModelBuilder.create()
 *     .addService(...)
 *     // ...
 *     .build().then(model => {
 *
 *     });
 * ```
 */
class ModelBuilder extends _graph_builders_GraphBuilder__WEBPACK_IMPORTED_MODULE_1__.GraphBuilder {
  constructor() {
    super(new _graph_internal_implementations__WEBPACK_IMPORTED_MODULE_2__.ModelGraph());
    this.graph.name = 'model';
    // Store data objects
    this.graph.addService(new _service__WEBPACK_IMPORTED_MODULE_3__.DataObjectService(new _service__WEBPACK_IMPORTED_MODULE_4__.MemoryDataService(_data__WEBPACK_IMPORTED_MODULE_5__.DataObject)));
    // Store spaces in their own memory data object service
    this.graph.addService(new _service__WEBPACK_IMPORTED_MODULE_3__.DataObjectService(new _service__WEBPACK_IMPORTED_MODULE_4__.MemoryDataService(_data__WEBPACK_IMPORTED_MODULE_6__.ReferenceSpace)));
    // Store node data
    this.graph.addService(new _service__WEBPACK_IMPORTED_MODULE_7__.NodeDataService(new _service__WEBPACK_IMPORTED_MODULE_4__.MemoryDataService(_service__WEBPACK_IMPORTED_MODULE_7__.NodeData)));
    // Default time service using system time
    this.graph.addService(new _service__WEBPACK_IMPORTED_MODULE_8__.TimeService());
  }
  static create() {
    return new ModelBuilder();
  }
  /**
   * Model logger
   * @param {Function} logger Logging function
   * @returns {ModelBuilder} Model builder instance
   */
  withLogger(logger) {
    this.graph.logger = logger;
    return this;
  }
  withReferenceSpace(space) {
    this.graph.referenceSpace = space;
    return this;
  }
  /**
   * Add a service to the model
   * @param {Service} service Service to add
   * @param {ProxyHandler} [proxy] Proxy handler
   * @returns {ModelBuilder} Model builder instance
   */
  addService(service, proxy) {
    this.graph.addService(service, proxy);
    return this;
  }
  /**
   * Add multiple services to the model
   * @param {Service[]} services Services to add
   * @returns {ModelBuilder} Model builder instance
   */
  addServices(...services) {
    services.forEach(service => this.addService(service));
    return this;
  }
  /**
   * Add graph shape to graph
   * @param {GraphBuilder | GraphShape | Model} shape Graph builder or abstract graph
   * @returns {GraphBuilder} Current graph builder instance
   */
  addShape(shape) {
    if (shape instanceof _graph_internal_implementations__WEBPACK_IMPORTED_MODULE_2__.ModelGraph) {
      // Add services
      shape.findAllServices().forEach(service => {
        this.addService(service);
      });
    } else if (shape instanceof ModelBuilder) {
      shape.graph.findAllServices().forEach(service => {
        this.addService(service);
      });
    }
    return super.addShape(shape);
  }
  build() {
    return new Promise((resolve, reject) => {
      _graph_internal_implementations__WEBPACK_IMPORTED_MODULE_9__.GraphValidator.validate(this.graph);
      this.graph.once('ready', () => {
        resolve(this.graph);
      });
      this.graph.emitAsync('build', this).catch(ex => {
        // Destroy model
        this.graph.emit('destroy');
        reject(ex);
      });
    });
  }
}

/***/ }),

/***/ "./dist/esm5/ModelSerializer.js":
/*!**************************************!*\
  !*** ./dist/esm5/ModelSerializer.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelSerializer: () => (/* binding */ ModelSerializer)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./dist/esm5/Node.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./dist/esm5/service/Service.js");



/**
 * Model serializer allows you to serialize a positioning model to JSON.
 */
class ModelSerializer {
  static get options() {
    return {
      serialize: _data__WEBPACK_IMPORTED_MODULE_0__.DataSerializer.serialize,
      deserialize: _data__WEBPACK_IMPORTED_MODULE_0__.DataSerializer.deserialize
    };
  }
  static serialize(model) {
    return this.serializeNode(model);
  }
  static serializeNode(node) {
    this.initialize();
    return this.options.serialize(node);
  }
  static deserialize(model) {
    const deserializedModel = this.deserializeNode(model);
    deserializedModel.nodes.forEach(node => {
      node.graph = deserializedModel;
    });
    return deserializedModel;
  }
  static deserializeNode(node) {
    this.initialize();
    return this.options.deserialize(node);
  }
  static loadClasses(module = __webpack_require__.c[__webpack_require__.s]) {
    if (module === undefined) {
      // Use cache instead
      Object.values(__webpack_require__.c).map(m => this.loadClasses(m));
      return;
    }
    this._modules.add(module.id);
    if (module.exports) {
      Object.keys(module.exports).forEach(key => {
        const childModule = module.exports[key];
        if (childModule && childModule.prototype instanceof _Node__WEBPACK_IMPORTED_MODULE_1__.Node) {
          this.NODES.set(key, {
            constructor: childModule
          });
        } else if (childModule && childModule.prototype instanceof _service__WEBPACK_IMPORTED_MODULE_2__.Service) {
          this.SERVICES.set(key, {
            constructor: childModule
          });
        }
      });
    }
    if (module.children) {
      module.children.forEach(module => {
        if (!this._modules.has(module.id)) {
          this.loadClasses(module);
        }
      });
    }
  }
  static initialize() {
    if (this.SERVICES.size === 0 || this.NODES.size === 0) {
      this.loadClasses();
      this._modules.clear();
      this.SERVICES.forEach(service => _data__WEBPACK_IMPORTED_MODULE_0__.DataSerializer.registerType(service.constructor));
      this.NODES.forEach(node => _data__WEBPACK_IMPORTED_MODULE_0__.DataSerializer.registerType(node.constructor));
    }
  }
}
ModelSerializer.NODES = new Map();
ModelSerializer.SERVICES = new Map();
ModelSerializer._modules = new Set();

/***/ }),

/***/ "./dist/esm5/Node.js":
/*!***************************!*\
  !*** ./dist/esm5/Node.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _graph_internal_GraphNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph/_internal/GraphNode */ "./dist/esm5/graph/_internal/GraphNode.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./dist/esm5/data/decorators/SerializableObject.js");



/**
 * The graph node has an input and output {@link DataFrame}
 *
 * ## Usage
 *
 * ### Creating a Node
 * Default nodes require you to specify the input and output data frame type. In general, nodes have the ability
 * to process an input data frame and output a different (processed) data frame.
 * ```typescript
 * import { DataFrame, Node } from '@openhps/core';
 *
 * export class CustomNode<In extends DataFrame, Out extends DataFrame> extends Node<In, Out> {
 * // ...
 * }
 * ```
 * Abstract implementations such as a {@link SourceNode} and {@link SinkNode} only take one input or output
 * data frame type as they do not process or change the frame.
 * @category Node
 */
let Node = class Node extends _graph_internal_GraphNode__WEBPACK_IMPORTED_MODULE_0__.GraphNode {
  constructor(options) {
    super();
    this.setOptions(options || {});
    // Set the uid of the node if manually set
    this.uid = this.options.uid || this.uid;
  }
  /**
   * Set the node options
   * @param {NodeOptions} options Node options to set
   * @returns {Node} Node instance
   */
  setOptions(options) {
    this.options = Object.assign(Object.assign({}, options), this.options || []);
    // Set the display name of the node to the type name
    this.name = this.options.name || this.constructor.name;
    return this;
  }
  /**
   * Get the node options
   * @returns {NodeOptions} Node options
   */
  getOptions() {
    return this.options;
  }
  /**
   * Graph this model is part of
   * @returns {Model} Positioning model
   */
  get model() {
    return this.graph;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)], Node.prototype, "options", void 0);
Node = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Object])], Node);

/***/ }),

/***/ "./dist/esm5/_internal/AsyncEventEmitter.js":
/*!**************************************************!*\
  !*** ./dist/esm5/_internal/AsyncEventEmitter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncEventEmitter: () => (/* binding */ AsyncEventEmitter)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Asynchronous event emitter that adds
 * the function ```emitAsync()```.
 */
class AsyncEventEmitter extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  emitAsync(type, ...args) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      const handlers = this.listeners(type);
      if (handlers.length === 0) {
        return resolve(false);
      }
      const promises = [];
      handlers.forEach(handler => {
        promises.push(handler(...args));
      });
      Promise.all(promises).then(() => {
        resolve(true);
      }).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/data/DataFrame.js":
/*!*************************************!*\
  !*** ./dist/esm5/data/DataFrame.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataFrame: () => (/* binding */ DataFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _object_DataObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/DataObject */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/SerializableMapMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _DataSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSerializer */ "./dist/esm5/data/DataSerializer.js");
var DataFrame_1;






/**
 * A data frame is information that is passed through each node in a positioning model.
 *
 * ![DataFrame content](media://images/dataframe.svg)
 *
 * ## Usage
 *
 * ### Creation
 * A data frame can be created with an optional source {@link DataObject} that represents
 * the object responsible for generating the frame.
 * ```typescript
 * const dataFrame = new DataFrame(new DataObject("phone"));
 * ```
 *
 * ### Creating a custom DataFrame
 * Custom data frames can be created by extending the default {@link DataFrame} class. Important when handling
 * data frames (and objects) is to add serializable decorators.
 * ```typescript
 * import { DataFrame, SerializableObject, SerializableArrayMember } from '@openhps/core';
 *
 * @SerializableObject()
 * export class CustomDataFrame extends DataFrame {
 *     @SerialisableArrayMember(Number)
 *     public customFrameAttribute: number[];
 * }
 * ```
 *
 * ### Adding {@link DataObject}s
 * Adding data object will clone the data objects to the data frame. Any changes made to the object after cloning will not
 * be applied to the data frame.
 */
let DataFrame = DataFrame_1 = class DataFrame {
  constructor(data) {
    var _a;
    /**
     * Data frame unique identifier
     */
    this.uid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this._objects = new Map();
    this.createdTimestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_1__.TimeService.now();
    if (data instanceof DataFrame_1) {
      // Copy data frame
      this.createdTimestamp = data.createdTimestamp;
      this.phenomenonTimestamp = data.phenomenonTimestamp;
      this.uid = data.uid;
      this._objects = data._objects;
      this.source = data.source;
    } else if (data instanceof _object_DataObject__WEBPACK_IMPORTED_MODULE_2__.DataObject) {
      this.source = data;
    }
    this.phenomenonTimestamp = (_a = this.phenomenonTimestamp) !== null && _a !== void 0 ? _a : this.createdTimestamp;
  }
  /**
   * Source object clone that captured the data frame
   * @returns {DataObject} Source data object
   */
  get source() {
    return this.getObjectByUID(this._source);
  }
  /**
   * Set the source object clone that captured the data frame
   * @param {DataObject} object Source data object
   */
  set source(object) {
    if (object === undefined) return;
    this.addObject(object.clone());
    this._source = object.uid;
  }
  /**
   * Get known sensor objects used in this data frame
   * @param {typeof SensorObject} type Sensor type
   * @param {string} [defaultUID] Default UID. When sensor is not added, it will be created
   * @returns {SensorObject} Found data objects
   */
  getSensor(type, defaultUID) {
    let sensor = this.getObjects(type)[0];
    if (!sensor && defaultUID !== undefined) {
      sensor = new type(defaultUID);
      this.addObject(sensor);
    }
    return sensor;
  }
  /**
   * Get known objects used in this data frame
   * @param {typeof DataObject} dataType Data object type
   * @returns {DataObject[]} Array of found data objects
   */
  getObjects(dataType) {
    if (dataType === undefined) {
      const filteredObjects = [];
      this._objects.forEach(object => {
        filteredObjects.push(object);
      });
      return filteredObjects;
    } else {
      const filteredObjects = [];
      this._objects.forEach(object => {
        if (object.constructor.name === dataType.name) filteredObjects.push(object);
      });
      return filteredObjects;
    }
  }
  /**
   * Get a specific object by its identifier
   * @param {string} uid Object UID
   * @returns {DataObject} Data object if found
   */
  getObjectByUID(uid) {
    return this._objects.get(uid);
  }
  /**
   * Check if the data frame has an object
   * @param {DataObject} object Data object to find
   * @returns {boolean} Object exist
   */
  hasObject(object) {
    return this._objects.has(object.uid);
  }
  /**
   * Add a new object relevant to this data frame
   * @param {DataObject} object Relevant object
   * @returns {DataFrame} instance
   */
  addObject(object) {
    if (object === undefined) return this;
    this._objects.set(object.uid, object);
    return this;
  }
  /**
   * Add a new sensor relevant to this data frame
   * @param {SensorObject} object Relevant sensor
   * @returns {DataFrame} instance
   */
  addSensor(object) {
    return this.addObject(object);
  }
  /**
   * Add a new reference space relevant to this data frame.
   * @alias addObject Alias for addObject
   * @param {ReferenceSpace} referenceSpace Relevant reference space
   */
  addReferenceSpace(referenceSpace) {
    this.addObject(referenceSpace);
  }
  /**
   * Remove an object from the data frame
   * @param {DataObject} object Object to remove
   */
  removeObject(object) {
    this._objects.delete(object.uid);
  }
  /**
   * Clear all objects
   * @param {Function} object object filter
   * @param objectFilter
   */
  clearObjects(objectFilter) {
    const filter = objectFilter !== null && objectFilter !== void 0 ? objectFilter : object => true;
    this._objects.forEach((obj, key) => {
      if (filter(obj)) {
        this._objects.delete(key);
      }
    });
  }
  /**
   * Clone the data frame
   * @returns {DataFrame} Cloned data frame
   */
  clone() {
    return _DataSerializer__WEBPACK_IMPORTED_MODULE_3__.DataSerializer.clone(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  primaryKey: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], DataFrame.prototype, "uid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], DataFrame.prototype, "createdTimestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], DataFrame.prototype, "phenomenonTimestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  name: 'source'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], DataFrame.prototype, "_source", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMapMember)(String, _object_DataObject__WEBPACK_IMPORTED_MODULE_2__.DataObject, {
  name: 'objects'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Map)], DataFrame.prototype, "_objects", void 0);
DataFrame = DataFrame_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object])], DataFrame);

/***/ }),

/***/ "./dist/esm5/data/DataSerializer.js":
/*!******************************************!*\
  !*** ./dist/esm5/data/DataSerializer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSerializer: () => (/* binding */ DataSerializer)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSerializerUtils */ "./dist/esm5/data/DataSerializerUtils.js");
/* harmony import */ var _Deserializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Deserializer */ "./dist/esm5/data/Deserializer.js");
/* harmony import */ var _Serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer */ "./dist/esm5/data/Serializer.js");





typedjson__WEBPACK_IMPORTED_MODULE_1__.JsonObjectMetadata.getFromConstructor = function (ctor) {
  if (!ctor) {
    return;
  }
  const prototype = ctor.prototype;
  if (prototype == null) {
    return;
  }
  let metadata;
  if (Object.prototype.hasOwnProperty.call(prototype, _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.META_FIELD)) {
    // The class prototype contains own jsonObject metadata
    metadata = prototype[_DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.META_FIELD];
  } else {
    const parent = Object.getPrototypeOf(ctor.prototype);
    if (!parent) {
      return;
    }
    metadata = typedjson__WEBPACK_IMPORTED_MODULE_1__.JsonObjectMetadata.getFromConstructor(parent.constructor);
  }
  // Ignore implicitly added jsonObject (through jsonMember)
  if ((metadata === null || metadata === void 0 ? void 0 : metadata.isExplicitlyMarked) === true) {
    return metadata;
  }
  // In the end maybe it is something which we can handle directly
  if (typedjson__WEBPACK_IMPORTED_MODULE_1__.JsonObjectMetadata['doesHandleWithoutAnnotation'](ctor)) {
    const primitiveMeta = new typedjson__WEBPACK_IMPORTED_MODULE_1__.JsonObjectMetadata(ctor);
    primitiveMeta.isExplicitlyMarked = true;
    // we do not store the metadata here to not modify builtin prototype
    return primitiveMeta;
  }
};
/**
 * Allows the serialization and deserialization of objects using the {@link SerializableObject} decorator.
 *
 * ## Usage
 *
 * ### Registration
 * Objects are registered upon loading with the {@link SerializableObject} decorator.
 * Manual registration is possible using:
 * ```typescript
 * DataSerializer.registerType(MyObjectClass);
 * ```
 */
class DataSerializer {
  /**
   * Manually register a new type
   * @param {typeof any} type Type to register
   * @param {MappedTypeConverters} [converters] Optional converters
   */
  static registerType(type, converters) {
    DataSerializer.knownTypes.set(type.name, type);
    if (converters) {
      DataSerializer.serializer.setSerializationStrategy(type, value => {
        return converters.serializer(value, {
          fallback: (so, td) => DataSerializer.serializer.convertSingleValue(so, td)
        });
      });
      DataSerializer.deserializer.setDeserializationStrategy(type, value => {
        return converters.deserializer(value, {
          fallback: (so, td) => DataSerializer.deserializer.convertSingleValue(so, td, DataSerializer.knownTypes)
        });
      });
      if (type.name !== 'Object') {
        const objectMetadata = new typedjson__WEBPACK_IMPORTED_MODULE_1__.JsonObjectMetadata(type);
        objectMetadata.isExplicitlyMarked = true;
        type.prototype[_DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.META_FIELD] = objectMetadata;
      }
    }
    DataSerializer.eventEmitter.emit('registerType', type, converters);
  }
  /**
   * Get the TypedJSON metadata
   * @deprecated use {@link DataSerializerUtils.getMetadata}
   * @see {@link https://gist.github.com/krizka/c83fb1966dd57997a1fc02625719387d}
   * @param {any} proto Prototype of target
   * @returns {ObjectMetadata} Root object metadata
   */
  static getMetadata(proto) {
    return _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.getMetadata(proto);
  }
  /**
   * Get the root TypedJSON metadata
   * @deprecated use {@link DataSerializerUtils.getRootMetadata}
   * @see {@link https://gist.github.com/krizka/c83fb1966dd57997a1fc02625719387d}
   * @param {any} proto Prototype of target
   * @returns {ObjectMetadata} Root object metadata
   */
  static getRootMetadata(proto) {
    return _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.getRootMetadata(proto);
  }
  /**
   * Find the root TypedJSON metadata
   * @deprecated use {@link DataSerializerUtils.getRootMetadata}
   * @param {any} proto Prototype of target
   * @returns {ObjectMetadata} Root object metadata
   */
  static findRootMetaInfo(proto) {
    return _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.getRootMetadata(proto);
  }
  /**
   * Unregister a type
   * @param {typeof any} type Type to unregister
   */
  static unregisterType(type) {
    DataSerializer.knownTypes.delete(type.name);
    DataSerializer.eventEmitter.emit('unregisterType', type);
  }
  static findTypeByName(name) {
    return DataSerializer.knownTypes.get(name);
  }
  /**
   * Clone a serializable object
   * @param {any} object Serializable object
   * @param {Constructor<any>} [dataType] Data type to clone to
   * @returns {any} Cloned object
   */
  static clone(object, dataType) {
    return DataSerializer.deserialize(DataSerializer.serialize(object), dataType);
  }
  /**
   * Serialize data
   * @param {any} data Data to serialize
   * @param {DataSerializerConfig} [config] Data serializer configuration
   * @returns {any} Serialized data
   */
  static serialize(data, config = {}) {
    var _a;
    if (data === null || data === undefined) {
      return undefined;
    }
    const globalDataType = Object.getPrototypeOf(data).constructor;
    // First check if it is a registered type
    // this is important as some serializable classes
    // may extend an array
    if (!DataSerializer.findTypeByName(globalDataType.name) && Array.isArray(data)) {
      return data.map(DataSerializer.serialize.bind(DataSerializer));
    }
    const serializer = (_a = config.serializer) !== null && _a !== void 0 ? _a : DataSerializer.serializer;
    return serializer.convertSingleValue(data, _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.ensureTypeDescriptor(globalDataType), undefined, undefined, config);
  }
  static deserialize(serializedData, dataType, config = {}) {
    var _a;
    if (typeof serializedData !== 'object' && typeof serializedData !== 'function' || !serializedData) {
      return serializedData;
    }
    if (Array.isArray(serializedData)) {
      return serializedData.map(serializedObject => DataSerializer.deserialize(serializedObject));
    }
    const deserializer = (_a = config.deserializer) !== null && _a !== void 0 ? _a : DataSerializer.deserializer;
    const finalType = dataType !== null && dataType !== void 0 ? dataType : deserializer.getTypeResolver()(serializedData, DataSerializer.knownTypes);
    return deserializer.convertSingleValue(serializedData, _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_2__.DataSerializerUtils.ensureTypeDescriptor(finalType), DataSerializer.knownTypes, undefined, undefined, config);
  }
}
DataSerializer.knownTypes = new Map();
DataSerializer.serializer = new _Serializer__WEBPACK_IMPORTED_MODULE_3__.Serializer();
DataSerializer.deserializer = new _Deserializer__WEBPACK_IMPORTED_MODULE_4__.Deserializer();
/* Event emitter used to listen for registrations and unregister of data types */
DataSerializer.eventEmitter = new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
(() => {
  DataSerializer.registerType(Object, {
    serializer: object => Object.assign(Object.assign({}, Object.keys(object).map(key => {
      return {
        [key]: typeof object[key] === 'function' ? {
          function: object[key].toString(),
          __type: 'Function'
        } : DataSerializer.serialize(object[key])
      };
    }).reduce((a, b) => Object.assign(Object.assign({}, a), b), {})), {
      __type: 'Object'
    }),
    deserializer: objectJson => Object.keys(objectJson).map(key => {
      if (key === '__type') {
        return {};
      }
      return {
        [key]: typeof objectJson[key] === 'object' && objectJson[key].__type === 'Function' ? eval(objectJson[key].function) : DataSerializer.deserialize(objectJson[key])
      };
    }).reduce((a, b) => Object.assign(Object.assign({}, a), b), {})
  });
})();

/***/ }),

/***/ "./dist/esm5/data/DataSerializerUtils.js":
/*!***********************************************!*\
  !*** ./dist/esm5/data/DataSerializerUtils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConcreteTypeDescriptor: () => (/* binding */ ConcreteTypeDescriptor),
/* harmony export */   DataSerializerUtils: () => (/* binding */ DataSerializerUtils),
/* harmony export */   TypeDescriptor: () => (/* binding */ TypeDescriptor)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/metadata.js");

/**
 * Data serializer utilities for managing the ORM mapping
 */
class DataSerializerUtils {
  static get META_FIELD() {
    return '__typedJsonJsonObjectMetadataInformation__';
  }
  /**
   * Get the own TypedJSON metadata of the prototype
   * @see {@link https://gist.github.com/krizka/c83fb1966dd57997a1fc02625719387d}
   * @param {any} proto Prototype of target
   * @returns {ObjectMetadata} Root object metadata
   */
  static getOwnMetadata(proto) {
    return typedjson__WEBPACK_IMPORTED_MODULE_0__.JsonObjectMetadata.getFromConstructor(proto instanceof Function ? proto : proto.constructor);
  }
  /**
   * Get the TypedJSON metadata
   * @see {@link https://gist.github.com/krizka/c83fb1966dd57997a1fc02625719387d}
   * @param {any} proto Prototype of target
   * @returns {ObjectMetadata} Root object metadata
   */
  static getMetadata(proto) {
    var _a;
    return (_a = DataSerializerUtils.getOwnMetadata(proto)) !== null && _a !== void 0 ? _a : DataSerializerUtils.getRootMetadata(proto);
  }
  static createMetadata(proto) {
    if (Object.prototype.hasOwnProperty.call(proto, this.META_FIELD)) {
      return proto[this.META_FIELD];
    }
    // Target has no JsonObjectMetadata associated with it yet, create it now.
    const objectMetadata = new typedjson__WEBPACK_IMPORTED_MODULE_0__.JsonObjectMetadata(proto.constructor);
    // Inherit json members and known types from parent @jsonObject (if any).
    const parentMetadata = proto[this.META_FIELD];
    if (parentMetadata !== undefined) {
      parentMetadata.dataMembers.forEach((memberMetadata, propKey) => {
        objectMetadata.dataMembers.set(propKey, memberMetadata);
      });
      parentMetadata.knownTypes.forEach(knownType => {
        // Only add if sub type
        if (knownType === proto.constructor || !(knownType.prototype instanceof proto.constructor)) {
          return;
        }
        objectMetadata.knownTypes.add(knownType);
      });
      // Add sub class to parent
      parentMetadata.knownTypes.add(objectMetadata.classType);
      objectMetadata.typeResolver = parentMetadata.typeResolver;
      objectMetadata.typeHintEmitter = parentMetadata.typeHintEmitter;
    }
    Object.defineProperty(proto, this.META_FIELD, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: objectMetadata
    });
    return objectMetadata;
  }
  /**
   * Get the root TypedJSON metadata
   * @see {@link https://gist.github.com/krizka/c83fb1966dd57997a1fc02625719387d}
   * @param {any} proto Prototype of target
   * @returns {ObjectMetadata} Root object metadata
   */
  static getRootMetadata(proto) {
    const protoProto = proto instanceof Function ? proto.prototype : Object.getPrototypeOf(proto);
    if (!protoProto || !protoProto[DataSerializerUtils.META_FIELD]) {
      return proto[DataSerializerUtils.META_FIELD];
    }
    return DataSerializerUtils.getRootMetadata(protoProto);
  }
  static ensureTypeDescriptor(type) {
    return type instanceof TypeDescriptor ? type : new ConcreteTypeDescriptor(type);
  }
  /**
   * Get member options of a property in a data type
   * @param {Constructor} dataType Data type
   * @param {string} propertyKey Property key
   * @returns {SerializableMemberOptions} member options
   */
  static getMemberOptions(dataType, propertyKey) {
    const metadata = DataSerializerUtils.getMetadata(dataType);
    if (!metadata) {
      return undefined;
    }
    const dataMember = metadata.dataMembers.get(propertyKey);
    if (!dataMember) {
      return undefined;
    }
    return dataMember.options;
  }
  /**
   * Get member options of an identifier property in a data type
   * @param {Constructor} dataType Data type
   * @returns {SerializableMemberOptions} identifier member options
   */
  static getIdentifierMemberOptions(dataType) {
    const metadata = DataSerializerUtils.getMetadata(dataType);
    if (!metadata) {
      return undefined;
    }
    return Array.from(metadata.dataMembers.values()).filter(member => {
      return member && member.primaryKey;
    })[0];
  }
}
class TypeDescriptor {
  constructor(ctor) {
    this.ctor = ctor;
  }
  getTypes() {
    return [this.ctor];
  }
  hasFriendlyName() {
    return this.ctor.name !== 'Object';
  }
}
class ConcreteTypeDescriptor extends TypeDescriptor {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(ctor) {
    super(ctor);
  }
}

/***/ }),

/***/ "./dist/esm5/data/Deserializer.js":
/*!****************************************!*\
  !*** ./dist/esm5/data/Deserializer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deserializer: () => (/* binding */ Deserializer)
/* harmony export */ });
/* harmony import */ var typedjson_lib_esm5_deserializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typedjson/lib/esm5/deserializer */ "./node_modules/typedjson/lib/esm5/deserializer.js");
/* harmony import */ var typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typedjson/lib/esm5/type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typedjson/lib/esm5/options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typedjson/lib/esm5/helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/BufferUtils */ "./dist/esm5/utils/BufferUtils.js");






class Deserializer extends typedjson_lib_esm5_deserializer__WEBPACK_IMPORTED_MODULE_0__.Deserializer {
  typeResolver(sourceObject, knownTypes) {
    var _a;
    return sourceObject['__type'] !== undefined ? knownTypes.get(sourceObject.__type) : (_a = sourceObject.constructor) !== null && _a !== void 0 ? _a : Object;
  }
  constructor() {
    super();
    this.errorHandler = e => {
      e.message = e.message.replace('@jsonObject', '@SerializableObject()');
      e.message = e.message.replace('@jsonMember', '@SerializableMember()');
      e.message = e.message.replace('@jsonSetMember', '@SerializableSetMember()');
      e.message = e.message.replace('@jsonMapMember', '@SerializableMapMember()');
      e.message = e.message.replace('@jsonArrayMember', '@SerializableArrayMember()');
      throw e;
    };
    this.setDeserializationStrategy(Map, this.convertAsMap.bind(this));
    this.setDeserializationStrategy(Array, this.convertAsArray.bind(this));
    this.setDeserializationStrategy(Set, this.convertAsSet.bind(this));
    this.setDeserializationStrategy(Uint8Array, _utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__.BufferUtils.fromHexString);
  }
  convertSingleValue(sourceObject, typeDescriptor, knownTypes, memberName, memberOptions, serializerOptions) {
    return this._convertSingleValue.bind(this)(sourceObject, typeDescriptor, knownTypes, memberName, memberOptions, serializerOptions);
  }
  _convertSingleValue(sourceObject, typeDescriptor, knownTypes, memberName, memberOptions, serializerOptions) {
    if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
      return null;
    } else if (!(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(sourceObject)) {
      return;
    }
    const deserializer = this.deserializationStrategy.get(typeDescriptor.ctor);
    if (deserializer !== undefined) {
      return deserializer(sourceObject, typeDescriptor, knownTypes, memberName, this, memberOptions, serializerOptions);
    }
    if (typeof sourceObject === 'object') {
      return this.convertAsObject(sourceObject, typeDescriptor, knownTypes, memberName, this, memberOptions, serializerOptions);
    }
    let error = `Could not deserialize '${memberName}'; don't know how to deserialize type`;
    if (typeDescriptor.hasFriendlyName()) {
      error += ` '${typeDescriptor.ctor.name}'`;
    }
    this.errorHandler(new TypeError(`${error}.`));
  }
  convertAsObject(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions, serializerOptions) {
    if (typeof sourceObject !== 'object' || sourceObject === null) {
      deserializer.getErrorHandler()(new TypeError(`Cannot deserialize ${memberName}: 'sourceObject' must be a defined object.`));
      return undefined;
    }
    let expectedSelfType = typeDescriptor.ctor;
    let sourceObjectMetadata = typedjson__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata.getFromConstructor(expectedSelfType);
    let typeResolver = deserializer.getTypeResolver();
    if (sourceObjectMetadata !== undefined) {
      if (sourceObjectMetadata.typeResolver != null) {
        typeResolver = sourceObjectMetadata.typeResolver;
      }
    }
    // Check if a type-hint is available from the source object.
    const typeFromTypeHint = typeResolver(sourceObject, knownTypes);
    if (typeFromTypeHint != null) {
      // Check if type hint is a valid subtype of the expected source type.
      if ((0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isSubtypeOf)(typeFromTypeHint, expectedSelfType)) {
        // Hell yes.
        expectedSelfType = typeFromTypeHint;
        sourceObjectMetadata = typedjson__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata.getFromConstructor(typeFromTypeHint);
      }
    }
    if ((sourceObjectMetadata === null || sourceObjectMetadata === void 0 ? void 0 : sourceObjectMetadata.isExplicitlyMarked) === true) {
      const sourceMetadata = sourceObjectMetadata;
      // Strong-typed deserialization available, get to it.
      // First deserialize properties into a temporary object.
      const sourceObjectWithDeserializedProperties = {};
      const classOptions = (0,typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_4__.mergeOptions)(deserializer.options, sourceMetadata.options);
      // Deserialize by expected properties.
      sourceMetadata.dataMembers.forEach((objMemberMetadata, propKey) => {
        const objMemberValue = sourceObject[propKey];
        const objMemberDebugName = `${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceMetadata.classType)}.${propKey}`;
        const objMemberOptions = (0,typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_4__.mergeOptions)(classOptions, objMemberMetadata.options);
        let revivedValue;
        if (objMemberMetadata.deserializer != null) {
          revivedValue = objMemberMetadata.deserializer(objMemberValue, {
            fallback: (so, td) => deserializer.convertSingleValue(so, (0,typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.ensureTypeDescriptor)(td), knownTypes)
          });
        } else if (objMemberMetadata.type == null) {
          throw new TypeError(`Cannot deserialize ${objMemberDebugName} there is` + ` no constructor nor deserialization function to use.`);
        } else {
          revivedValue = deserializer.convertSingleValue(objMemberValue, objMemberMetadata.type(), knownTypes, objMemberDebugName, objMemberOptions, serializerOptions);
        }
        // @todo revivedValue will never be null in RHS of ||
        if ((0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(revivedValue) || deserializer.retrievePreserveNull(objMemberOptions) && revivedValue === null) {
          sourceObjectWithDeserializedProperties[objMemberMetadata.key] = revivedValue;
        } else if (objMemberMetadata.isRequired === true) {
          deserializer.getErrorHandler()(new TypeError(`Missing required member '${objMemberDebugName}'.`));
        }
      });
      // Next, instantiate target object.
      let targetObject;
      if (typeof sourceObjectMetadata.initializerCallback === 'function') {
        try {
          targetObject = sourceObjectMetadata.initializerCallback(sourceObjectWithDeserializedProperties, sourceObject);
          // Check the validity of user-defined initializer callback.
          if (targetObject == null) {
            throw new TypeError(`Cannot deserialize ${memberName}:` + ` 'initializer' function returned undefined/null` + `, but '${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceObjectMetadata.classType)}' was expected.`);
          } else if (!(targetObject instanceof sourceObjectMetadata.classType)) {
            throw new TypeError(`Cannot deserialize ${memberName}:` + `'initializer' returned '${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(targetObject.constructor)}'` + `, but '${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceObjectMetadata.classType)}' was expected` + `, and '${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(targetObject.constructor)}' is not a subtype of` + ` '${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceObjectMetadata.classType)}'`);
          }
        } catch (e) {
          deserializer.getErrorHandler()(e);
          return undefined;
        }
      } else {
        targetObject = deserializer.instantiateType(expectedSelfType);
      }
      // Finally, assign deserialized properties to target object.
      Object.assign(targetObject, sourceObjectWithDeserializedProperties);
      // Call onDeserialized method (if any).
      const methodName = sourceObjectMetadata.onDeserializedMethodName;
      if (methodName != null) {
        if (typeof targetObject[methodName] === 'function') {
          // check for member first
          targetObject[methodName]();
        } else if (typeof targetObject.constructor[methodName] === 'function') {
          // check for static
          targetObject.constructor[methodName]();
        } else {
          deserializer.getErrorHandler()(new TypeError(`onDeserialized callback` + `'${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceObjectMetadata.classType)}.${methodName}' is not a method.`));
        }
      }
      return targetObject;
    } else {
      // Untyped deserialization into Object instance.
      const targetObject = {};
      Object.keys(sourceObject).forEach(sourceKey => {
        targetObject[sourceKey] = deserializer.convertSingleValue(sourceObject[sourceKey], new typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.ConcreteTypeDescriptor(sourceObject[sourceKey].constructor), knownTypes, sourceKey, memberOptions, serializerOptions);
      });
      return targetObject;
    }
  }
  convertAsArray(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions, serializableOptions) {
    if (!(typeDescriptor instanceof typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.ArrayTypeDescriptor)) {
      throw new TypeError(`Could not deserialize ${memberName} as Array: incorrect TypeDescriptor detected,` + ' please use proper annotation or function for this type');
    }
    if (!Array.isArray(sourceObject)) {
      deserializer.getErrorHandler()(new TypeError(this.makeTypeErrorMessage(Array, sourceObject.constructor, memberName)));
      return [];
    }
    if (typeDescriptor.elementType == null) {
      deserializer.getErrorHandler()(new TypeError(`Could not deserialize ${memberName} as Array: missing constructor reference of` + ` Array elements.`));
      return [];
    }
    return sourceObject.map((element, i) => {
      // If an array element fails to deserialize, substitute with undefined. This is so that the
      // original ordering is not interrupted by faulty
      // entries, as an Array is ordered.
      try {
        return deserializer.convertSingleValue(element, typeDescriptor.elementType, knownTypes, `${memberName}[${i}]`, memberOptions, serializableOptions);
      } catch (e) {
        deserializer.getErrorHandler()(e);
        // Keep filling the array here with undefined to keep original ordering.
        // Note: this is just aesthetics, not returning anything produces the same result.
        return undefined;
      }
    });
  }
  convertAsSet(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions, serializableOptions) {
    if (!(typeDescriptor instanceof typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.SetTypeDescriptor)) {
      throw new TypeError(`Could not deserialize ${memberName} as Set: incorrect TypeDescriptor detected,` + ` please use proper annotation or function for this type`);
    }
    if (!Array.isArray(sourceObject)) {
      deserializer.getErrorHandler()(new TypeError(this.makeTypeErrorMessage(Array, sourceObject.constructor, memberName)));
      return new Set();
    }
    if (typeDescriptor.elementType == null) {
      deserializer.getErrorHandler()(new TypeError(`Could not deserialize ${memberName} as Set: missing constructor reference of` + ` Set elements.`));
      return new Set();
    }
    const resultSet = new Set();
    sourceObject.forEach((element, i) => {
      try {
        resultSet.add(deserializer.convertSingleValue(element, typeDescriptor.elementType, knownTypes, `${memberName}[${i}]`, memberOptions, serializableOptions));
      } catch (e) {
        // Faulty entries are skipped, because a Set is not ordered, and skipping an entry
        // does not affect others.
        deserializer.getErrorHandler()(e);
      }
    });
    return resultSet;
  }
  convertAsMap(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions, serializableOptions) {
    if (!(typeDescriptor instanceof typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.MapTypeDescriptor)) {
      throw new TypeError(`Could not deserialize ${memberName} as Map: incorrect TypeDescriptor detected,` + 'please use proper annotation or function for this type');
    }
    const expectedShape = typeDescriptor.getCompleteOptions().shape;
    if (!this.isExpectedMapShape(sourceObject, expectedShape)) {
      const expectedType = expectedShape === 0 ? Array : Object;
      deserializer.getErrorHandler()(new TypeError(this.makeTypeErrorMessage(expectedType, sourceObject.constructor, memberName)));
      return new Map();
    }
    if (typeDescriptor.keyType == null) {
      deserializer.getErrorHandler()(new TypeError(`Could not deserialize ${memberName} as Map: missing key constructor.`));
      return new Map();
    }
    if (typeDescriptor.valueType == null) {
      deserializer.getErrorHandler()(new TypeError(`Could not deserialize ${memberName} as Map: missing value constructor.`));
      return new Map();
    }
    const keyMemberName = `${memberName}[].key`;
    const valueMemberName = `${memberName}[].value`;
    const resultMap = new Map();
    if (expectedShape.name === 'OBJECT') {
      Object.keys(sourceObject).forEach(key => {
        try {
          const resultKey = deserializer.convertSingleValue(key, typeDescriptor.keyType, knownTypes, keyMemberName, memberOptions, serializableOptions);
          if ((0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(resultKey)) {
            resultMap.set(resultKey, deserializer.convertSingleValue(sourceObject[key], typeDescriptor.valueType, knownTypes, valueMemberName, memberOptions, serializableOptions));
          }
        } catch (e) {
          // Faulty entries are skipped, because a Map is not ordered,
          // and skipping an entry does not affect others.
          deserializer.getErrorHandler()(e);
        }
      });
    } else {
      sourceObject.forEach(element => {
        try {
          const key = deserializer.convertSingleValue(element.key, typeDescriptor.keyType, knownTypes, keyMemberName, memberOptions, serializableOptions);
          // Undefined/null keys not supported, skip if so.
          if ((0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(key)) {
            resultMap.set(key, deserializer.convertSingleValue(element.value, typeDescriptor.valueType, knownTypes, valueMemberName, memberOptions, serializableOptions));
          }
        } catch (e) {
          // Faulty entries are skipped, because a Map is not ordered,
          // and skipping an entry does not affect others.
          deserializer.getErrorHandler()(e);
        }
      });
    }
    return resultMap;
  }
  isExpectedMapShape(source, expectedShape) {
    return expectedShape === 0 && Array.isArray(source) || expectedShape === 1 && typeof source === 'object';
  }
  makeTypeErrorMessage(expectedType, actualType, memberName) {
    const expectedTypeName = typeof expectedType === 'function' ? (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(expectedType) : expectedType;
    const actualTypeName = typeof actualType === 'function' ? (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(actualType) : actualType;
    return `Could not deserialize ${memberName}: expected '${expectedTypeName}',` + ` got '${actualTypeName}'.`;
  }
}

/***/ }),

/***/ "./dist/esm5/data/Serializer.js":
/*!**************************************!*\
  !*** ./dist/esm5/data/Serializer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Serializer: () => (/* binding */ Serializer)
/* harmony export */ });
/* harmony import */ var typedjson_lib_esm5_serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typedjson/lib/esm5/serializer */ "./node_modules/typedjson/lib/esm5/serializer.js");
/* harmony import */ var typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typedjson/lib/esm5/type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typedjson/lib/esm5/helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typedjson/lib/esm5/options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/BufferUtils */ "./dist/esm5/utils/BufferUtils.js");






class Serializer extends typedjson_lib_esm5_serializer__WEBPACK_IMPORTED_MODULE_0__.Serializer {
  constructor() {
    super();
    this.errorHandler = e => {
      e.message = e.message.replace('@jsonObject', '@SerializableObject()');
      e.message = e.message.replace('@jsonMember', '@SerializableMember()');
      e.message = e.message.replace('@jsonSetMember', '@SerializableSetMember()');
      e.message = e.message.replace('@jsonMapMember', '@SerializableMapMember()');
      e.message = e.message.replace('@jsonArrayMember', '@SerializableArrayMember()');
      throw e;
    };
    this.setSerializationStrategy(Map, this.convertAsMap.bind(this));
    this.setSerializationStrategy(Array, this.convertAsArray.bind(this));
    this.setSerializationStrategy(Set, this.convertAsSet.bind(this));
    this.setSerializationStrategy(Uint8Array, _utils_BufferUtils__WEBPACK_IMPORTED_MODULE_1__.BufferUtils.toHexString);
  }
  convertSingleValue(sourceObject, typeDescriptor, memberName, memberOptions, serializerOptions) {
    const targetObject = this._convertSingleValue.bind(this)(sourceObject, typeDescriptor, memberName, memberOptions, serializerOptions);
    if (memberName === undefined && typeof targetObject === 'object') {
      targetObject.__type = typeDescriptor.ctor.name;
    }
    return targetObject;
  }
  _convertSingleValue(sourceObject, typeDescriptor, memberName, memberOptions, serializerOptions) {
    if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
      return null;
    }
    if (!(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(sourceObject)) {
      return;
    }
    if (!(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(sourceObject, typeDescriptor.ctor)) {
      const expectedName = (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(typeDescriptor.ctor);
      const actualName = (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceObject.constructor);
      this.errorHandler(new TypeError(`Could not serialize '${memberName}': expected '${expectedName}',` + ` got '${actualName}'.`));
      return;
    }
    const serializer = this.serializationStrategy.get(typeDescriptor.ctor);
    if (serializer !== undefined) {
      return serializer(sourceObject, typeDescriptor, memberName, this, memberOptions, serializerOptions);
    }
    // if not present in the strategy do property by property serialization
    if (typeof sourceObject === 'object') {
      return this.convertAsObject(sourceObject, typeDescriptor, memberName, this, memberOptions, serializerOptions);
    }
    let error = `Could not serialize '${memberName}'; don't know how to serialize type`;
    if (typeDescriptor.hasFriendlyName()) {
      error += ` '${typeDescriptor.ctor.name}'`;
    }
    this.errorHandler(new TypeError(`${error}.`));
  }
  convertAsObject(sourceObject, typeDescriptor, memberName, serializer, memberOptions, serializerOptions) {
    let sourceTypeMetadata;
    let targetObject;
    let typeHintEmitter = serializer.getTypeHintEmitter();
    if (sourceObject.constructor !== typeDescriptor.ctor && sourceObject instanceof typeDescriptor.ctor) {
      // The source object is not of the expected type, but it is a valid subtype.
      // This is OK, and we'll proceed to gather object metadata from the subtype instead.
      sourceTypeMetadata = typedjson__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata.getFromConstructor(sourceObject.constructor);
    } else {
      sourceTypeMetadata = typedjson__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata.getFromConstructor(typeDescriptor.ctor);
    }
    if (sourceTypeMetadata === undefined) {
      // Untyped serialization, "as-is", we'll just pass the object on.
      // We'll clone the source object, because type hints are added to the object itself, and we
      // don't want to modify
      // to the original object.
      targetObject = Object.assign({}, sourceObject);
    } else {
      const beforeSerializationMethodName = sourceTypeMetadata.beforeSerializationMethodName;
      if (beforeSerializationMethodName != null) {
        if (typeof sourceObject[beforeSerializationMethodName] === 'function') {
          // check for member first
          sourceObject[beforeSerializationMethodName]();
        } else if (typeof sourceObject.constructor[beforeSerializationMethodName] === 'function') {
          // check for static
          sourceObject.constructor[beforeSerializationMethodName]();
        } else {
          serializer.getErrorHandler()(new TypeError(`beforeSerialization callback '` + `${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceTypeMetadata.classType)}.${beforeSerializationMethodName}` + `' is not a method.`));
        }
      }
      const sourceMeta = sourceTypeMetadata;
      // Strong-typed serialization available.
      // We'll serialize by members that have been marked with @jsonMember (including
      // array/set/map members), and perform recursive conversion on each of them. The converted
      // objects are put on the 'targetObject', which is what will be put into 'JSON.stringify'
      // finally.
      targetObject = {};
      const classOptions = (0,typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_4__.mergeOptions)(serializer.options, sourceMeta.options);
      if (sourceMeta.typeHintEmitter != null) {
        typeHintEmitter = sourceMeta.typeHintEmitter;
      }
      sourceMeta.dataMembers.forEach(objMemberMetadata => {
        const objMemberOptions = (0,typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_4__.mergeOptions)(classOptions, objMemberMetadata.options);
        let serialized;
        if (objMemberMetadata.serializer != null) {
          serialized = objMemberMetadata.serializer(sourceObject[objMemberMetadata.key], {
            fallback: (so, td) => serializer.convertSingleValue(so, (0,typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.ensureTypeDescriptor)(td))
          });
        } else if (objMemberMetadata.type == null) {
          throw new TypeError(`Could not serialize ${objMemberMetadata.name}, there is` + ` no constructor nor serialization function to use.`);
        } else {
          serialized = serializer.convertSingleValue(sourceObject[objMemberMetadata.key], objMemberMetadata.type(), `${(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(sourceMeta.classType)}.${objMemberMetadata.key}`, objMemberOptions, serializerOptions);
        }
        if (serializer.retrievePreserveNull(objMemberOptions) && serialized === null || (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(serialized)) {
          targetObject[objMemberMetadata.name] = serialized;
        }
      });
    }
    // Add type-hint.
    typeHintEmitter(targetObject, sourceObject, typeDescriptor.ctor, sourceTypeMetadata);
    return targetObject;
  }
  /**
   * Performs the conversion of an array of typed objects (or primitive values) to an array of simple
   * javascript objects
   * (or primitive values) for serialization.
   * @param sourceObject
   * @param typeDescriptor
   * @param memberName
   * @param serializer
   * @param memberOptions
   * @param serializerOptions
   */
  convertAsArray(sourceObject, typeDescriptor, memberName, serializer, memberOptions, serializerOptions) {
    if (!(typeDescriptor instanceof typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.ArrayTypeDescriptor)) {
      throw new TypeError(`Could not serialize ${memberName} as Array: incorrect TypeDescriptor detected, please` + ' use proper annotation or function for this type');
    }
    if (typeDescriptor.elementType == null) {
      throw new TypeError(`Could not serialize ${memberName} as Array: missing element type definition.`);
    }
    // Check the type of each element, individually.
    // If at least one array element type is incorrect, we return undefined, which results in no
    // value emitted during serialization. This is so that invalid element types don't unexpectedly
    // alter the ordering of other, valid elements, and that no unexpected undefined values are in
    // the emitted array.
    sourceObject.forEach((element, i) => {
      if (!(serializer.retrievePreserveNull(memberOptions) && element === null) && !(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(element, typeDescriptor.elementType.ctor)) {
        const expectedTypeName = (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(typeDescriptor.elementType.ctor);
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        const actualTypeName = element && (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.nameof)(element.constructor);
        throw new TypeError(`Could not serialize ${memberName}[${i}]:` + ` expected '${expectedTypeName}', got '${actualTypeName}'.`);
      }
    });
    return sourceObject.map((element, i) => {
      return serializer.convertSingleValue(element, typeDescriptor.elementType, `${memberName}[${i}]`, memberOptions, serializerOptions);
    });
  }
  /**
   * Performs the conversion of a set of typed objects (or primitive values) into an array
   * of simple javascript objects.
   * @param sourceObject
   * @param typeDescriptor
   * @param memberName
   * @param serializer
   * @param memberOptions
   * @param serializerOptions
   * @returns
   */
  convertAsSet(sourceObject, typeDescriptor, memberName, serializer, memberOptions, serializerOptions) {
    if (!(typeDescriptor instanceof typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.SetTypeDescriptor)) {
      throw new TypeError(`Could not serialize ${memberName} as Set: incorrect TypeDescriptor detected, please` + ' use proper annotation or function for this type');
    }
    if (typeDescriptor.elementType == null) {
      throw new TypeError(`Could not serialize ${memberName} as Set: missing element type definition.`);
    }
    memberName += '[]';
    const resultArray = [];
    // Convert each element of the set, and put it into an output array.
    // The output array is the one serialized, as JSON.stringify does not support Set serialization.
    // (TODO: clarification needed)
    sourceObject.forEach(element => {
      const resultElement = serializer.convertSingleValue(element, typeDescriptor.elementType, memberName, memberOptions, serializerOptions);
      // Add to output if the source element was undefined, OR the converted element is defined.
      // This will add intentionally undefined values to output, but not values that became
      // undefined DURING serializing (usually because of a type-error).
      if (!(0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(element) || (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(resultElement)) {
        resultArray.push(resultElement);
      }
    });
    return resultArray;
  }
  /**
   * Performs the conversion of a map of typed objects (or primitive values) into an array
   * of simple javascript objects with `key` and `value` properties.
   * @param sourceObject
   * @param typeDescriptor
   * @param memberName
   * @param serializer
   * @param memberOptions
   * @param serializerOptions
   */
  convertAsMap(sourceObject, typeDescriptor, memberName, serializer, memberOptions, serializerOptions) {
    if (!(typeDescriptor instanceof typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_5__.MapTypeDescriptor)) {
      throw new TypeError(`Could not serialize ${memberName} as Map: incorrect TypeDescriptor detected, please` + ' use proper annotation or function for this type');
    }
    if (typeDescriptor.valueType == null) {
      // @todo Check type
      throw new TypeError(`Could not serialize ${memberName} as Map: missing value type definition.`);
    }
    if (typeDescriptor.keyType == null) {
      // @todo Check type
      throw new TypeError(`Could not serialize ${memberName} as Map: missing key type definition.`);
    }
    const keyMemberName = `${memberName}[].key`;
    const valueMemberName = `${memberName}[].value`;
    const resultShape = typeDescriptor.getCompleteOptions().shape;
    const result = resultShape === 1 ? {} : [];
    const preserveNull = serializer.retrievePreserveNull(memberOptions);
    // Convert each *entry* in the map to a simple javascript object with key and value properties.
    sourceObject.forEach((value, key) => {
      const resultKeyValuePairObj = {
        key: serializer.convertSingleValue(key, typeDescriptor.keyType, keyMemberName, memberOptions, serializerOptions),
        value: serializer.convertSingleValue(value, typeDescriptor.valueType, valueMemberName, memberOptions, serializerOptions)
      };
      // We are not going to emit entries with undefined keys OR undefined values.
      const keyDefined = (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(resultKeyValuePairObj.key);
      const valueDefined = resultKeyValuePairObj.value === null && preserveNull || (0,typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_2__.isValueDefined)(resultKeyValuePairObj.value);
      if (keyDefined && valueDefined) {
        if (resultShape === 1) {
          result[resultKeyValuePairObj.key] = resultKeyValuePairObj.value;
        } else {
          result.push(resultKeyValuePairObj);
        }
      }
    });
    return result;
  }
}

/***/ }),

/***/ "./dist/esm5/data/UUID.js":
/*!********************************!*\
  !*** ./dist/esm5/data/UUID.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UUID: () => (/* binding */ UUID)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
var UUID_1;



const UUID_PADDING = '-0000-1000-8000-00805f9b34fb';
let UUID = UUID_1 = class UUID {
  constructor(buffer) {
    this._raw = buffer;
  }
  static generate() {
    const uuidString = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    return UUID_1.fromString(uuidString);
  }
  static fromBuffer(buffer) {
    return new this(buffer);
  }
  static fromString(uuid) {
    const hexArray = uuid.replace(UUID_PADDING, '').replace(/-/g, '').split(/(..)/).filter(a => {
      return a !== '';
    }).map(hex => {
      return Number(`0x${hex}`);
    });
    if (hexArray.includes(NaN)) {
      return undefined;
    }
    let array = Uint8Array.from(hexArray);
    if (uuid.startsWith('0000')) {
      array = array.slice(2);
    }
    return new this(array);
  }
  toBuffer() {
    return this._raw;
  }
  toString() {
    const bytes = [];
    for (const [, value] of this._raw.entries()) {
      bytes.push(value);
    }
    if (this._raw.byteLength === 2) {
      // 16 bit
      return '0000' + bytes.map(byte => {
        return byte.toString(16).padStart(2, '0');
      }).join('') + UUID_PADDING;
    } else if (this._raw.byteLength === 4) {
      // 32 bit
      return bytes.map(byte => {
        return byte.toString(16).padStart(2, '0');
      }).join('') + UUID_PADDING;
    } else {
      // 128 bit
      const hex = bytes.map(byte => {
        return byte.toString(16).padStart(2, '0');
      });
      return hex.splice(0, 4).join('') + '-' + hex.splice(0, 2).join('') + '-' + hex.splice(0, 2).join('') + '-' + hex.splice(0, 2).join('') + '-' + hex.join('');
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  name: 'value'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Uint8Array)], UUID.prototype, "_raw", void 0);
UUID = UUID_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Uint8Array])], UUID);

/***/ }),

/***/ "./dist/esm5/data/decorators/SerializableArrayMember.js":
/*!**************************************************************!*\
  !*** ./dist/esm5/data/decorators/SerializableArrayMember.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializableArrayMember: () => (/* binding */ SerializableArrayMember)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/json-array-member.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./dist/esm5/data/decorators/utils.js");


/**
 * @param {Serializable<any>} elementConstructor Element constructor
 * @param {SerializableArrayMemberOptions} [options] Member options
 * @returns {PropertyDecorator} Property decorator
 */
function SerializableArrayMember(elementConstructor, options) {
  return (target, propertyKey) => {
    const finalOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.mergeMemberOptions)(target, propertyKey, options);
    (0,typedjson__WEBPACK_IMPORTED_MODULE_1__.jsonArrayMember)(elementConstructor, finalOptions)(target, propertyKey);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateSerializableMember)(target, propertyKey, finalOptions);
  };
}

/***/ }),

/***/ "./dist/esm5/data/decorators/SerializableMapMember.js":
/*!************************************************************!*\
  !*** ./dist/esm5/data/decorators/SerializableMapMember.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializableMapMember: () => (/* binding */ SerializableMapMember)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/json-map-member.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./dist/esm5/data/decorators/utils.js");


/**
 * @param {Serializable<any>} keyConstructor Map key constructor
 * @param {Serializable<any>} valueConstructor Map value constructor
 * @param {SerializableMapMemberOptions} [options] Member options
 * @returns {PropertyDecorator} Property decorator
 */
function SerializableMapMember(keyConstructor, valueConstructor, options) {
  return (target, propertyKey) => {
    if (valueConstructor === Object && options === undefined) {
      options = {};
      options.deserializer = json => {
        const map = new Map();
        Object.keys(json).forEach(key => {
          map.set(key, JSON.parse(json[key]));
        });
        return map;
      };
      options.serializer = map => {
        const json = {};
        map.forEach((value, key) => {
          json[key] = JSON.stringify(value);
        });
        return json;
      };
    }
    const finalOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.mergeMemberOptions)(target, propertyKey, options);
    (0,typedjson__WEBPACK_IMPORTED_MODULE_1__.jsonMapMember)(keyConstructor, valueConstructor, finalOptions)(target, propertyKey);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateSerializableMember)(target, propertyKey, finalOptions);
  };
}

/***/ }),

/***/ "./dist/esm5/data/decorators/SerializableMember.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/data/decorators/SerializableMember.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializableMember: () => (/* binding */ SerializableMember)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/json-member.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./dist/esm5/data/decorators/utils.js");



/**
 * @param {SerializableMemberOptions} [options] Member options
 * @returns {PropertyDecorator} Property decorator
 */
function SerializableMember(options) {
  return (target, propertyKey) => {
    const finalOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.mergeMemberOptions)(target, propertyKey, options);
    (0,typedjson__WEBPACK_IMPORTED_MODULE_2__.jsonMember)(finalOptions)(target, propertyKey);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.updateSerializableMember)(target, propertyKey, finalOptions);
  };
}

/***/ }),

/***/ "./dist/esm5/data/decorators/SerializableMemberFunction.js":
/*!*****************************************************************!*\
  !*** ./dist/esm5/data/decorators/SerializableMemberFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializableMemberFunction: () => (/* binding */ SerializableMemberFunction)
/* harmony export */ });
/* harmony import */ var _SerializableMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SerializableMember */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./dist/esm5/data/decorators/utils.js");


/**
 * @param {SerializableMemberOptions} [options] Member options
 * @returns {PropertyDecorator} Property decorator
 */
function SerializableMemberFunction(options = {}) {
  return (target, propertyKey) => {
    options.serializer = fn => fn.toString();
    options.deserializer = fnStr => eval(fnStr);
    const finalOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.mergeMemberOptions)(target, propertyKey, options);
    (0,_SerializableMember__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(finalOptions)(target, propertyKey);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateSerializableMember)(target, propertyKey, finalOptions);
  };
}

/***/ }),

/***/ "./dist/esm5/data/decorators/SerializableObject.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/data/decorators/SerializableObject.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializableObject: () => (/* binding */ SerializableObject)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/json-object.js");
/* harmony import */ var _DataSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataSerializerUtils */ "./dist/esm5/data/DataSerializerUtils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./dist/esm5/data/decorators/utils.js");




/**
 * Serializable object
 * @param {SerializableObjectOptions} [options] Object serialization options
 * @returns {ClassDecorator} Class decorator
 */
function SerializableObject(options) {
  return target => {
    _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_0__.DataSerializerUtils.createMetadata(target.prototype);
    (0,typedjson__WEBPACK_IMPORTED_MODULE_1__.jsonObject)(options)(target);
    _DataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer['eventEmitter'].emit('updateSerializableObject', target, options);
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.updateSerializableObject)(target, options);
  };
}

/***/ }),

/***/ "./dist/esm5/data/decorators/SerializableSetMember.js":
/*!************************************************************!*\
  !*** ./dist/esm5/data/decorators/SerializableSetMember.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializableSetMember: () => (/* binding */ SerializableSetMember)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/json-set-member.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./dist/esm5/data/decorators/utils.js");


/**
 * @param {Constructor} elementConstructor Element constructor
 * @param {SerializableSetMemberOptions} options Member options
 * @returns {PropertyDecorator} Property decorator
 */
function SerializableSetMember(elementConstructor, options) {
  return (target, propertyKey) => {
    const finalOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.mergeMemberOptions)(target, propertyKey, options);
    (0,typedjson__WEBPACK_IMPORTED_MODULE_1__.jsonSetMember)(elementConstructor, finalOptions)(target, propertyKey);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateSerializableMember)(target, propertyKey, finalOptions);
  };
}

/***/ }),

/***/ "./dist/esm5/data/decorators/index.js":
/*!********************************************!*\
  !*** ./dist/esm5/data/decorators/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberType: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_6__.NumberType),
/* harmony export */   SerializableArrayMember: () => (/* reexport safe */ _SerializableArrayMember__WEBPACK_IMPORTED_MODULE_2__.SerializableArrayMember),
/* harmony export */   SerializableMapMember: () => (/* reexport safe */ _SerializableMapMember__WEBPACK_IMPORTED_MODULE_3__.SerializableMapMember),
/* harmony export */   SerializableMember: () => (/* reexport safe */ _SerializableMember__WEBPACK_IMPORTED_MODULE_1__.SerializableMember),
/* harmony export */   SerializableMemberFunction: () => (/* reexport safe */ _SerializableMemberFunction__WEBPACK_IMPORTED_MODULE_5__.SerializableMemberFunction),
/* harmony export */   SerializableObject: () => (/* reexport safe */ _SerializableObject__WEBPACK_IMPORTED_MODULE_0__.SerializableObject),
/* harmony export */   SerializableSetMember: () => (/* reexport safe */ _SerializableSetMember__WEBPACK_IMPORTED_MODULE_4__.SerializableSetMember)
/* harmony export */ });
/* harmony import */ var _SerializableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SerializableObject */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _SerializableMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SerializableMember */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _SerializableArrayMember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SerializableArrayMember */ "./dist/esm5/data/decorators/SerializableArrayMember.js");
/* harmony import */ var _SerializableMapMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SerializableMapMember */ "./dist/esm5/data/decorators/SerializableMapMember.js");
/* harmony import */ var _SerializableSetMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SerializableSetMember */ "./dist/esm5/data/decorators/SerializableSetMember.js");
/* harmony import */ var _SerializableMemberFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SerializableMemberFunction */ "./dist/esm5/data/decorators/SerializableMemberFunction.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./dist/esm5/data/decorators/options.js");








/***/ }),

/***/ "./dist/esm5/data/decorators/options.js":
/*!**********************************************!*\
  !*** ./dist/esm5/data/decorators/options.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberType: () => (/* binding */ NumberType)
/* harmony export */ });
var NumberType;
(function (NumberType) {
  NumberType[NumberType["INTEGER"] = 0] = "INTEGER";
  NumberType[NumberType["FLOAT"] = 1] = "FLOAT";
  NumberType[NumberType["DOUBLE"] = 2] = "DOUBLE";
  NumberType[NumberType["DECIMAL"] = 3] = "DECIMAL";
  NumberType[NumberType["LONG"] = 4] = "LONG";
  NumberType[NumberType["SHORT"] = 5] = "SHORT";
})(NumberType || (NumberType = {}));

/***/ }),

/***/ "./dist/esm5/data/decorators/utils.js":
/*!********************************************!*\
  !*** ./dist/esm5/data/decorators/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializationUtils: () => (/* binding */ SerializationUtils),
/* harmony export */   mergeMemberOptions: () => (/* binding */ mergeMemberOptions),
/* harmony export */   updateSerializableMember: () => (/* binding */ updateSerializableMember),
/* harmony export */   updateSerializableObject: () => (/* binding */ updateSerializableObject)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");
/* harmony import */ var _DataSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataSerializerUtils */ "./dist/esm5/data/DataSerializerUtils.js");



// eslint-disable-next-line
const cloneDeep = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/**
 * Inject member options into object
 * @param {any} target Prototype
 * @param {PropertyKey} propertyKey Property key
 * @param {any} options Options to inject
 */
function updateSerializableMember(target, propertyKey, options) {
  var _a, _b;
  const reflectPropCtor = Reflect.getMetadata('design:type', target, propertyKey);
  // Inject additional options if available
  if (options) {
    const ownMeta = typedjson__WEBPACK_IMPORTED_MODULE_0__.JsonObjectMetadata.ensurePresentInPrototype(target);
    const rootMeta = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getRootMetadata(target.constructor);
    const ownMemberMetadata = ownMeta.dataMembers.get(propertyKey) || ownMeta.dataMembers.get(options.name);
    const rootMemberMetadata = rootMeta.dataMembers.get(propertyKey) || rootMeta.dataMembers.get(options.name);
    if (!ownMemberMetadata) {
      throw new Error(`Unable to get member metadata for ${target} on property ${propertyKey}!`);
    }
    ownMemberMetadata.options = mergeDeep((_a = ownMemberMetadata.options) !== null && _a !== void 0 ? _a : {}, options);
    if (rootMemberMetadata) {
      ownMemberMetadata.options = mergeDeep((_b = rootMemberMetadata.options) !== null && _b !== void 0 ? _b : {}, ownMemberMetadata.options);
    }
    // Merge known sub types as well
    rootMeta.knownTypes.forEach(otherType => {
      var _a, _b;
      if (otherType === target || target instanceof otherType) {
        return;
      }
      const otherMeta = (_a = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getMetadata(otherType)) !== null && _a !== void 0 ? _a : typedjson__WEBPACK_IMPORTED_MODULE_0__.JsonObjectMetadata.ensurePresentInPrototype(otherType);
      const otherMemberMetadata = otherMeta.dataMembers.get(propertyKey) || otherMeta.dataMembers.get(options.name);
      if (otherMemberMetadata) {
        otherMemberMetadata.options = mergeDeep((_b = ownMemberMetadata.options) !== null && _b !== void 0 ? _b : {}, otherMemberMetadata.options);
      }
    });
    // TODO: Possibly need to sync super types as well
  }
  // Detect generic types that have no deserialization or constructor specified
  const meta = typedjson__WEBPACK_IMPORTED_MODULE_0__.JsonObjectMetadata.ensurePresentInPrototype(target);
  const existingOptions = meta.dataMembers.get(options ? options.name || propertyKey : propertyKey);
  if (reflectPropCtor === Object && (!options || !options.deserializer && !Object.keys(options).includes('constructor'))) {
    existingOptions.serializer = object => _DataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.serialize(object);
    existingOptions.deserializer = objectJson => _DataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.deserialize(objectJson);
    existingOptions.type = () => typedjson__WEBPACK_IMPORTED_MODULE_3__.AnyT;
  } else if (existingOptions && typeof options !== 'object' && existingOptions.type() instanceof _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.ConcreteTypeDescriptor) {
    existingOptions.type = () => new _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.ConcreteTypeDescriptor(reflectPropCtor);
  }
}
/**
 * Inject object members
 * @param {Serializable} target Target to update
 * @param {SerializableObjectOptions} options Options to inject
 */
function updateSerializableObject(target, options) {
  var _a, _b, _c;
  const ownMeta = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getMetadata(target);
  const rootMeta = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getRootMetadata(target.prototype);
  rootMeta.knownTypes.add(target);
  if (rootMeta.initializerCallback && !ownMeta.initializerCallback) {
    ownMeta.initializerCallback = rootMeta.initializerCallback;
  }
  // Merge options
  if (options) {
    ownMeta.options = mergeDeep(ownMeta === rootMeta ? (_a = ownMeta.options) !== null && _a !== void 0 ? _a : {} : (_c = (_b = ownMeta.options) !== null && _b !== void 0 ? _b : rootMeta.options) !== null && _c !== void 0 ? _c : {}, options);
    // Merge known sub types as well
    rootMeta.knownTypes.forEach(otherType => {
      var _a;
      if (otherType === target || !(otherType.prototype instanceof target)) {
        return;
      }
      const otherMeta = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getMetadata(otherType);
      otherMeta.options = mergeDeep((_a = ownMeta.options) !== null && _a !== void 0 ? _a : {}, otherMeta.options);
      if (!otherMeta.initializerCallback && ownMeta.initializerCallback) {
        otherMeta.initializerCallback = ownMeta.initializerCallback;
      }
    });
  }
  // Sync settings from super types
  rootMeta.knownTypes.forEach(otherType => {
    if (otherType === target || !(target.prototype instanceof otherType)) {
      return;
    }
    const otherMeta = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getMetadata(otherType);
    if (otherMeta && otherMeta.initializerCallback && !ownMeta.initializerCallback) {
      ownMeta.initializerCallback = otherMeta.initializerCallback;
    }
  });
  // (Re)register type
  _DataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.registerType(target);
}
/**
 * Check if something is an object
 * @param {any} item Item to check for object
 * @returns {boolean} Is an object
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge member options
 * @param {unknown} target Target object
 * @param {string} propertyKey Property key in target
 * @param {any} options Member options
 * @returns {any} Merged objects
 */
function mergeMemberOptions(target, propertyKey, options) {
  var _a;
  if (typeof options === 'function') {
    return options;
  }
  const memberOptions = (_a = _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_1__.DataSerializerUtils.getMemberOptions(target.constructor, propertyKey)) !== null && _a !== void 0 ? _a : {};
  return mergeDeep(options, memberOptions);
}
/**
 * Deep merge objects
 * @param {any} target Target object
 * @param {any} source Source object
 * @returns {any} Merged object
 */
function mergeDeep(target, source) {
  const output = cloneDeep(target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (Array.isArray(source[key])) {
        output[key] = source[key];
        const targetProperty = target[key] !== undefined ? Array.isArray(target[key]) ? target[key] : [target[key]] : [];
        output[key].push(...targetProperty.filter(val => !source[key].includes(val)));
      } else if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, {
          [key]: source[key]
        });else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
const SerializationUtils = {
  cloneDeep,
  mergeDeep
};

/***/ }),

/***/ "./dist/esm5/data/index.js":
/*!*********************************!*\
  !*** ./dist/esm5/data/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Absolute2DPosition: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.Absolute2DPosition),
/* harmony export */   Absolute3DPosition: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.Absolute3DPosition),
/* harmony export */   AbsoluteOrientationSensor: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.AbsoluteOrientationSensor),
/* harmony export */   AbsolutePosition: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.AbsolutePosition),
/* harmony export */   Acceleration: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Acceleration),
/* harmony export */   Accelerometer: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.Accelerometer),
/* harmony export */   Accuracy: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Accuracy),
/* harmony export */   Accuracy1D: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Accuracy1D),
/* harmony export */   Accuracy2D: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Accuracy2D),
/* harmony export */   Accuracy3D: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Accuracy3D),
/* harmony export */   AngularVelocity: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.AngularVelocity),
/* harmony export */   ConcreteTypeDescriptor: () => (/* reexport safe */ _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_8__.ConcreteTypeDescriptor),
/* harmony export */   DataFrame: () => (/* reexport safe */ _DataFrame__WEBPACK_IMPORTED_MODULE_0__.DataFrame),
/* harmony export */   DataObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.DataObject),
/* harmony export */   DataSerializer: () => (/* reexport safe */ _DataSerializer__WEBPACK_IMPORTED_MODULE_5__.DataSerializer),
/* harmony export */   DataSerializerUtils: () => (/* reexport safe */ _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_8__.DataSerializerUtils),
/* harmony export */   Deserializer: () => (/* reexport safe */ _Deserializer__WEBPACK_IMPORTED_MODULE_7__.Deserializer),
/* harmony export */   GeographicalPosition: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.GeographicalPosition),
/* harmony export */   GravitySensor: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.GravitySensor),
/* harmony export */   Gyroscope: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.Gyroscope),
/* harmony export */   Humidity: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Humidity),
/* harmony export */   LinearAccelerationSensor: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.LinearAccelerationSensor),
/* harmony export */   LinearVelocity: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.LinearVelocity),
/* harmony export */   LinearVelocitySensor: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.LinearVelocitySensor),
/* harmony export */   Magnetism: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Magnetism),
/* harmony export */   Magnetometer: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.Magnetometer),
/* harmony export */   NumberType: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType),
/* harmony export */   Orientation: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.Orientation),
/* harmony export */   Pose: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.Pose),
/* harmony export */   Pressure: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Pressure),
/* harmony export */   ReferenceSpace: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.ReferenceSpace),
/* harmony export */   RelativeAngle: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.RelativeAngle),
/* harmony export */   RelativeAngularVelocity: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.RelativeAngularVelocity),
/* harmony export */   RelativeDistance: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.RelativeDistance),
/* harmony export */   RelativeLinearVelocity: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.RelativeLinearVelocity),
/* harmony export */   RelativeOrientationSensor: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.RelativeOrientationSensor),
/* harmony export */   RelativePosition: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.RelativePosition),
/* harmony export */   SensorCalibrationData: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.SensorCalibrationData),
/* harmony export */   SensorObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_1__.SensorObject),
/* harmony export */   SensorValue: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.SensorValue),
/* harmony export */   SerializableArrayMember: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableArrayMember),
/* harmony export */   SerializableMapMember: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMapMember),
/* harmony export */   SerializableMember: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember),
/* harmony export */   SerializableMemberFunction: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMemberFunction),
/* harmony export */   SerializableObject: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject),
/* harmony export */   SerializableSetMember: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableSetMember),
/* harmony export */   SerializationUtils: () => (/* reexport safe */ _decorators_utils__WEBPACK_IMPORTED_MODULE_10__.SerializationUtils),
/* harmony export */   Serializer: () => (/* reexport safe */ _Serializer__WEBPACK_IMPORTED_MODULE_6__.Serializer),
/* harmony export */   Temperature: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Temperature),
/* harmony export */   Trajectory: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_2__.Trajectory),
/* harmony export */   TypeDescriptor: () => (/* reexport safe */ _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_8__.TypeDescriptor),
/* harmony export */   TypedJSON: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_9__.TypedJSON),
/* harmony export */   UUID: () => (/* reexport safe */ _UUID__WEBPACK_IMPORTED_MODULE_11__.UUID),
/* harmony export */   Velocity: () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.Velocity),
/* harmony export */   mergeMemberOptions: () => (/* reexport safe */ _decorators_utils__WEBPACK_IMPORTED_MODULE_10__.mergeMemberOptions),
/* harmony export */   updateSerializableMember: () => (/* reexport safe */ _decorators_utils__WEBPACK_IMPORTED_MODULE_10__.updateSerializableMember),
/* harmony export */   updateSerializableObject: () => (/* reexport safe */ _decorators_utils__WEBPACK_IMPORTED_MODULE_10__.updateSerializableObject)
/* harmony export */ });
/* harmony import */ var _DataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataFrame */ "./dist/esm5/data/DataFrame.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./dist/esm5/data/object/index.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position */ "./dist/esm5/data/position/index.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators */ "./dist/esm5/data/decorators/index.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./values */ "./dist/esm5/data/values/index.js");
/* harmony import */ var _DataSerializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _Serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Serializer */ "./dist/esm5/data/Serializer.js");
/* harmony import */ var _Deserializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Deserializer */ "./dist/esm5/data/Deserializer.js");
/* harmony import */ var _DataSerializerUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataSerializerUtils */ "./dist/esm5/data/DataSerializerUtils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./dist/esm5/data/types.js");
/* harmony import */ var _decorators_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./decorators/utils */ "./dist/esm5/data/decorators/utils.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UUID */ "./dist/esm5/data/UUID.js");













/***/ }),

/***/ "./dist/esm5/data/object/DataObject.js":
/*!*********************************************!*\
  !*** ./dist/esm5/data/object/DataObject.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataObject: () => (/* binding */ DataObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _position_AbsolutePosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../position/AbsolutePosition */ "./dist/esm5/data/position/AbsolutePosition.js");
/* harmony import */ var _position_RelativePosition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../position/RelativePosition */ "./dist/esm5/data/position/RelativePosition.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableArrayMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DataSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
var DataObject_1;








/**
 * A data object is an instance that can be anything ranging from a person or asset to
 * a more abstract object such as a Wi-Fi access point or {@link ReferenceSpace}.
 *
 * ## Usage
 *
 * ### Creation
 * Objects can be created with an optional uid and display name.
 * ```typescript
 * const myObject = new DataObject("mvdewync", "Maxim");
 * ```
 *
 * ### Service binding
 * Data objects can be bounded to a service. Persistence is handled in {@link DataObjectService}s
 * that store and load data objects.
 * ```typescript
 * myObject.bind(myModel).save();
 * ```
 * @category data
 */
let DataObject = DataObject_1 = class DataObject {
  /**
   * Create a new data object
   * @param {string} uid Optional unique identifier
   * @param {string} displayName Optional display name
   */
  constructor(uid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(), displayName) {
    this._relativePositions = new Map();
    this.uid = uid;
    this.createdTimestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now();
    this.displayName = displayName;
  }
  /**
   * Get the current absolute position of the object
   * relative to the global reference space
   * @returns {AbsolutePosition} Absolute position of data object
   */
  get position() {
    return this.getPosition();
  }
  /**
   * Set the current absolute position of the object
   * relative to the global reference space
   */
  set position(position) {
    this.setPosition(position);
  }
  /**
   * Get the current absolute position of the object
   * @param {TransformationSpace} [referenceSpace] Reference space to transform it to
   * @returns {AbsolutePosition} Position of the data object
   */
  getPosition(referenceSpace) {
    if (referenceSpace !== undefined && this._position !== undefined) {
      return referenceSpace.transform(this._position, {
        inverse: true
      });
    } else {
      return this._position;
    }
  }
  /**
   * Set the current absolute position of the object
   * @param {AbsolutePosition} position Position to set
   * @param {TransformationSpace} [referenceSpace] Reference space
   * @returns {DataObject} Data object instance
   */
  setPosition(position, referenceSpace) {
    this._position = referenceSpace ? referenceSpace.transform(position, {
      inverse: false
    }) : position;
    return this;
  }
  /**
   * Set the unique identifier of this object
   * @param {string} uid Unique Identifier
   * @returns {DataObject} Data object instance
   */
  setUID(uid) {
    this.uid = uid;
    return this;
  }
  /**
   * Get relative positions
   * @returns {RelativePosition[]} Array of relative positions
   */
  get relativePositions() {
    const relativePostions = [];
    if (this._relativePositions !== undefined) {
      this._relativePositions.forEach(values => {
        values.forEach(value => {
          relativePostions.push(value);
        });
      });
    }
    return relativePostions;
  }
  set relativePositions(relativePostions) {
    this._relativePositions = new Map();
    relativePostions.forEach(relativePostion => {
      this.addRelativePosition(relativePostion);
    });
  }
  /**
   * Set a parent object to the data object
   * @param {DataObject | string | undefined} object Data object or UID to add as parent
   * @returns {DataObject} instance
   */
  setParent(object) {
    this.parentUID = object instanceof DataObject_1 ? object.uid : object;
    return this;
  }
  removeRelativePositions(referenceObjectUID) {
    this._relativePositions.delete(referenceObjectUID);
  }
  /**
   * Add a relative position to this data object
   * @param {RelativePosition} relativePosition Relative position to add
   * @returns {DataObject} Data object instance
   */
  addRelativePosition(relativePosition) {
    if (!relativePosition || relativePosition.referenceObjectUID === undefined) {
      return this;
    }
    if (!this._relativePositions.has(relativePosition.referenceObjectUID)) {
      this._relativePositions.set(relativePosition.referenceObjectUID, new Map());
    }
    this._relativePositions.get(relativePosition.referenceObjectUID).set(relativePosition.constructor.name, relativePosition);
    return this;
  }
  /**
   * Get relative positions for a different target
   * @param {string} [referenceObjectUID] Reference object identifier
   * @returns {RelativePosition[]} Array of relative positions for the reference object
   */
  getRelativePositions(referenceObjectUID) {
    if (referenceObjectUID === undefined) {
      return this.relativePositions;
    } else if (this._relativePositions.has(referenceObjectUID)) {
      return Array.from(this._relativePositions.get(referenceObjectUID).values());
    } else {
      return [];
    }
  }
  /**
   * Get relative position of a specified object
   * @param {string} referenceObjectUID Reference object identifier
   * @param {string} type Constructor type of the relative position
   * @returns {RelativePosition} Relative position to reference object
   */
  getRelativePosition(referenceObjectUID, type) {
    if (this._relativePositions.has(referenceObjectUID)) {
      const positions = this._relativePositions.get(referenceObjectUID);
      if (type) {
        return positions.get(type);
      } else {
        return Array.from(positions.values())[0];
      }
    } else {
      return undefined;
    }
  }
  hasRelativePosition(referenceObjectUID) {
    return this._relativePositions.has(referenceObjectUID);
  }
  /**
   * Bind the data object to a service
   * @param {DataService<string, DataObject>} service Service to bind it to
   * @returns {DataObjectBinding<DataObject>} Data object binding with a service
   */
  bind(service) {
    return new DataObjectBinding(this, service);
  }
  /**
   * Clone the data object
   * @param {Constructor<DataObject>} [dataType] Data type to clone to
   * @returns {DataObject} Cloned data object
   */
  clone(dataType) {
    return _DataSerializer__WEBPACK_IMPORTED_MODULE_3__.DataSerializer.clone(this, dataType);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], DataObject.prototype, "displayName", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], DataObject.prototype, "createdTimestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  primaryKey: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], DataObject.prototype, "uid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], DataObject.prototype, "parentUID", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _position_AbsolutePosition__WEBPACK_IMPORTED_MODULE_7__.AbsolutePosition), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_position_AbsolutePosition__WEBPACK_IMPORTED_MODULE_7__.AbsolutePosition])], DataObject.prototype, "position", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableArrayMember)(_position_RelativePosition__WEBPACK_IMPORTED_MODULE_9__.RelativePosition), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Array])], DataObject.prototype, "relativePositions", null);
DataObject = DataObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_10__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [String, String])], DataObject);
class DataObjectBinding extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  constructor(target, service) {
    super();
    this.target = target;
    this.service = service;
    this.service.on('insert', this._onInsert.bind(this));
  }
  _onInsert(uid, object) {
    if (this.target.uid === uid) {
      this.emit('update', this.target, object);
      this.target = object;
    }
  }
  on(name, listener) {
    return super.on(name, listener);
  }
  /**
   * Save the data object
   * @returns {Promise<DataObject>} Promise of stored data object
   */
  save() {
    return this.service.insert(this.target.uid, this.target);
  }
  /**
   * Destroy the data object
   * @returns {Promise<void>} Destroy promise
   */
  delete() {
    return this.service.delete(this.target.uid);
  }
  /**
   * Dispose of the binding
   */
  dispose() {
    this.service.removeListener('update', this._onInsert.bind(this));
  }
}

/***/ }),

/***/ "./dist/esm5/data/object/SensorObject.js":
/*!***********************************************!*\
  !*** ./dist/esm5/data/object/SensorObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SensorCalibrationData: () => (/* binding */ SensorCalibrationData),
/* harmony export */   SensorObject: () => (/* binding */ SensorObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../position */ "./dist/esm5/data/position/Orientation.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values */ "./dist/esm5/data/values/SensorValue.js");
/* harmony import */ var _DataObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataObject */ "./dist/esm5/data/object/DataObject.js");





/**
 * Sensor calibration data
 */
let SensorCalibrationData = class SensorCalibrationData {};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)], SensorCalibrationData.prototype, "offset", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)], SensorCalibrationData.prototype, "multipler", void 0);
SensorCalibrationData = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()
// eslint-disable-next-line
], SensorCalibrationData);
/**
 * A sensor object is a {@link DataObject} that is a sensor with a value.
 */
let SensorObject = class SensorObject extends _DataObject__WEBPACK_IMPORTED_MODULE_3__.DataObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, displayName);
    this.value = value !== null && value !== void 0 ? value : {};
    this.frequency = frequency;
  }
  /**
   * Get the sensor timestamp
   * @returns {number} timestamp
   */
  get timestamp() {
    return this.value instanceof _values__WEBPACK_IMPORTED_MODULE_4__.SensorValue || this.value instanceof _position__WEBPACK_IMPORTED_MODULE_5__.Orientation ? this.value.timestamp : this.createdTimestamp;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)], SensorObject.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Number)], SensorObject.prototype, "frequency", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", SensorCalibrationData)], SensorObject.prototype, "calibrationData", void 0);
SensorObject = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()
// eslint-disable-next-line
, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [String, Object, Number, String])], SensorObject);

/***/ }),

/***/ "./dist/esm5/data/object/index.js":
/*!****************************************!*\
  !*** ./dist/esm5/data/object/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbsoluteOrientationSensor: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.AbsoluteOrientationSensor),
/* harmony export */   Accelerometer: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.Accelerometer),
/* harmony export */   DataObject: () => (/* reexport safe */ _DataObject__WEBPACK_IMPORTED_MODULE_0__.DataObject),
/* harmony export */   GravitySensor: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.GravitySensor),
/* harmony export */   Gyroscope: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.Gyroscope),
/* harmony export */   LinearAccelerationSensor: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.LinearAccelerationSensor),
/* harmony export */   LinearVelocitySensor: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.LinearVelocitySensor),
/* harmony export */   Magnetometer: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.Magnetometer),
/* harmony export */   ReferenceSpace: () => (/* reexport safe */ _space__WEBPACK_IMPORTED_MODULE_1__.ReferenceSpace),
/* harmony export */   RelativeOrientationSensor: () => (/* reexport safe */ _sensors__WEBPACK_IMPORTED_MODULE_3__.RelativeOrientationSensor),
/* harmony export */   SensorCalibrationData: () => (/* reexport safe */ _SensorObject__WEBPACK_IMPORTED_MODULE_2__.SensorCalibrationData),
/* harmony export */   SensorObject: () => (/* reexport safe */ _SensorObject__WEBPACK_IMPORTED_MODULE_2__.SensorObject)
/* harmony export */ });
/* harmony import */ var _DataObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataObject */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space */ "./dist/esm5/data/object/space/index.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SensorObject */ "./dist/esm5/data/object/SensorObject.js");
/* harmony import */ var _sensors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensors */ "./dist/esm5/data/object/sensors/index.js");





/***/ }),

/***/ "./dist/esm5/data/object/sensors/AbsoluteOrientationSensor.js":
/*!********************************************************************!*\
  !*** ./dist/esm5/data/object/sensors/AbsoluteOrientationSensor.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbsoluteOrientationSensor: () => (/* binding */ AbsoluteOrientationSensor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../position */ "./dist/esm5/data/position/Orientation.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * Absolute orientation sensor describes the device's physical orientation in relation to the Earth's reference coordinate system.
 * @category data
 */
let AbsoluteOrientationSensor = class AbsoluteOrientationSensor extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _position__WEBPACK_IMPORTED_MODULE_1__.Orientation(), frequency, displayName);
  }
};
AbsoluteOrientationSensor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _position__WEBPACK_IMPORTED_MODULE_1__.Orientation, Number, String])], AbsoluteOrientationSensor);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/Accelerometer.js":
/*!********************************************************!*\
  !*** ./dist/esm5/data/object/sensors/Accelerometer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accelerometer: () => (/* binding */ Accelerometer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values */ "./dist/esm5/data/values/Acceleration.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * Accelerometer sensor provides on each reading the acceleration applied to the device along all three axes including gravity.
 * @category data
 */
let Accelerometer = class Accelerometer extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _values__WEBPACK_IMPORTED_MODULE_1__.Acceleration(), frequency, displayName);
  }
};
Accelerometer = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _values__WEBPACK_IMPORTED_MODULE_1__.Acceleration, Number, String])], Accelerometer);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/GravitySensor.js":
/*!********************************************************!*\
  !*** ./dist/esm5/data/object/sensors/GravitySensor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GravitySensor: () => (/* binding */ GravitySensor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values */ "./dist/esm5/data/values/Acceleration.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * The gravity sensor provides on each reading the gravity applied to the device along all three axes.
 * @category data
 */
let GravitySensor = class GravitySensor extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _values__WEBPACK_IMPORTED_MODULE_1__.Acceleration(), frequency, displayName);
  }
};
GravitySensor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _values__WEBPACK_IMPORTED_MODULE_1__.Acceleration, Number, String])], GravitySensor);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/Gyroscope.js":
/*!****************************************************!*\
  !*** ./dist/esm5/data/object/sensors/Gyroscope.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gyroscope: () => (/* binding */ Gyroscope)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values */ "./dist/esm5/data/values/AngularVelocity.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * The gyroscope provides on each reading the angular velocity of the device along all three axes.
 * @category data
 */
let Gyroscope = class Gyroscope extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _values__WEBPACK_IMPORTED_MODULE_1__.AngularVelocity(), frequency, displayName);
  }
};
Gyroscope = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _values__WEBPACK_IMPORTED_MODULE_1__.AngularVelocity, Number, String])], Gyroscope);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/LinearAccelerationSensor.js":
/*!*******************************************************************!*\
  !*** ./dist/esm5/data/object/sensors/LinearAccelerationSensor.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearAccelerationSensor: () => (/* binding */ LinearAccelerationSensor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values */ "./dist/esm5/data/values/Acceleration.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * The linear acceleration sensor provides on each reading the acceleration applied to the device along all three axes, but without the contribution of gravity.
 * @category data
 */
let LinearAccelerationSensor = class LinearAccelerationSensor extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _values__WEBPACK_IMPORTED_MODULE_1__.Acceleration(), frequency, displayName);
  }
};
LinearAccelerationSensor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _values__WEBPACK_IMPORTED_MODULE_1__.Acceleration, Number, String])], LinearAccelerationSensor);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/LinearVelocitySensor.js":
/*!***************************************************************!*\
  !*** ./dist/esm5/data/object/sensors/LinearVelocitySensor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearVelocitySensor: () => (/* binding */ LinearVelocitySensor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values */ "./dist/esm5/data/values/LinearVelocity.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * The linear velocity sensors provides on each reading the linear velocity of the device along all three axes.
 * @category data
 */
let LinearVelocitySensor = class LinearVelocitySensor extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _values__WEBPACK_IMPORTED_MODULE_1__.LinearVelocity(), frequency, displayName);
  }
};
LinearVelocitySensor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _values__WEBPACK_IMPORTED_MODULE_1__.LinearVelocity, Number, String])], LinearVelocitySensor);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/Magnetometer.js":
/*!*******************************************************!*\
  !*** ./dist/esm5/data/object/sensors/Magnetometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Magnetometer: () => (/* binding */ Magnetometer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values */ "./dist/esm5/data/values/Magnetism.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * The magnetometer sensor provides information about the magnetic field as detected by the device's primary magnetometer sensor.
 * @category data
 */
let Magnetometer = class Magnetometer extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _values__WEBPACK_IMPORTED_MODULE_1__.Magnetism(), frequency, displayName);
  }
};
Magnetometer = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _values__WEBPACK_IMPORTED_MODULE_1__.Magnetism, Number, String])], Magnetometer);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/RelativeOrientationSensor.js":
/*!********************************************************************!*\
  !*** ./dist/esm5/data/object/sensors/RelativeOrientationSensor.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeOrientationSensor: () => (/* binding */ RelativeOrientationSensor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../position */ "./dist/esm5/data/position/Orientation.js");
/* harmony import */ var _SensorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SensorObject */ "./dist/esm5/data/object/SensorObject.js");




/**
 * The relative orientation sensor describes the device's physical orientation without regard to the Earth's reference coordinate system.
 * @category data
 */
let RelativeOrientationSensor = class RelativeOrientationSensor extends _SensorObject__WEBPACK_IMPORTED_MODULE_0__.SensorObject {
  constructor(uid, value, frequency, displayName) {
    super(uid, value !== null && value !== void 0 ? value : new _position__WEBPACK_IMPORTED_MODULE_1__.Orientation(), frequency, displayName);
  }
};
RelativeOrientationSensor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, _position__WEBPACK_IMPORTED_MODULE_1__.Orientation, Number, String])], RelativeOrientationSensor);

/***/ }),

/***/ "./dist/esm5/data/object/sensors/index.js":
/*!************************************************!*\
  !*** ./dist/esm5/data/object/sensors/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbsoluteOrientationSensor: () => (/* reexport safe */ _AbsoluteOrientationSensor__WEBPACK_IMPORTED_MODULE_4__.AbsoluteOrientationSensor),
/* harmony export */   Accelerometer: () => (/* reexport safe */ _Accelerometer__WEBPACK_IMPORTED_MODULE_0__.Accelerometer),
/* harmony export */   GravitySensor: () => (/* reexport safe */ _GravitySensor__WEBPACK_IMPORTED_MODULE_1__.GravitySensor),
/* harmony export */   Gyroscope: () => (/* reexport safe */ _Gyroscope__WEBPACK_IMPORTED_MODULE_2__.Gyroscope),
/* harmony export */   LinearAccelerationSensor: () => (/* reexport safe */ _LinearAccelerationSensor__WEBPACK_IMPORTED_MODULE_3__.LinearAccelerationSensor),
/* harmony export */   LinearVelocitySensor: () => (/* reexport safe */ _LinearVelocitySensor__WEBPACK_IMPORTED_MODULE_7__.LinearVelocitySensor),
/* harmony export */   Magnetometer: () => (/* reexport safe */ _Magnetometer__WEBPACK_IMPORTED_MODULE_6__.Magnetometer),
/* harmony export */   RelativeOrientationSensor: () => (/* reexport safe */ _RelativeOrientationSensor__WEBPACK_IMPORTED_MODULE_5__.RelativeOrientationSensor)
/* harmony export */ });
/* harmony import */ var _Accelerometer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accelerometer */ "./dist/esm5/data/object/sensors/Accelerometer.js");
/* harmony import */ var _GravitySensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GravitySensor */ "./dist/esm5/data/object/sensors/GravitySensor.js");
/* harmony import */ var _Gyroscope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gyroscope */ "./dist/esm5/data/object/sensors/Gyroscope.js");
/* harmony import */ var _LinearAccelerationSensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearAccelerationSensor */ "./dist/esm5/data/object/sensors/LinearAccelerationSensor.js");
/* harmony import */ var _AbsoluteOrientationSensor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbsoluteOrientationSensor */ "./dist/esm5/data/object/sensors/AbsoluteOrientationSensor.js");
/* harmony import */ var _RelativeOrientationSensor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RelativeOrientationSensor */ "./dist/esm5/data/object/sensors/RelativeOrientationSensor.js");
/* harmony import */ var _Magnetometer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Magnetometer */ "./dist/esm5/data/object/sensors/Magnetometer.js");
/* harmony import */ var _LinearVelocitySensor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinearVelocitySensor */ "./dist/esm5/data/object/sensors/LinearVelocitySensor.js");









/***/ }),

/***/ "./dist/esm5/data/object/space/ReferenceSpace.js":
/*!*******************************************************!*\
  !*** ./dist/esm5/data/object/space/ReferenceSpace.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferenceSpace: () => (/* binding */ ReferenceSpace)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _DataObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataObject */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/math */ "./dist/esm5/utils/math/Matrix4.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/math */ "./dist/esm5/utils/math/Quaternion.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/math */ "./dist/esm5/utils/math/Euler.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/math */ "./dist/esm5/utils/math/AxisAngle.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/math */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./dist/esm5/utils/unit/LengthUnit.js");





/**
 * A reference space transforms absolute positions to another (global) reference space.
 * The following data can be transformed:
 * - Position coordinates
 * - Linear velocity
 * - Angular velocity
 * - Orientation
 * - Position accuracy
 */
let ReferenceSpace = class ReferenceSpace extends _DataObject__WEBPACK_IMPORTED_MODULE_0__.DataObject {
  constructor(parent) {
    super();
    this.parent = parent;
    this._scaleMatrix = new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4();
    this._transformationMatrix = new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4().identity();
    this._translationMatrix = new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4().identity();
    this._rotation = new _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion();
  }
  /**
   * Set the parent space
   * @param {TransformationSpace} space Parent space
   */
  set parent(space) {
    if (!space) {
      return;
    } else {
      this.parentUID = space.uid;
      this._parent = space;
    }
  }
  /**
   * Get the parent space if loaded
   * @returns {TransformationSpace | undefined} Transformation space or undefined
   */
  get parent() {
    return this._parent;
  }
  /**
   * Update parent reference spaces
   * @param {DataService} service Service to use for updating
   * @returns {Promise<void>} Update promise
   */
  update(service) {
    return new Promise((resolve, reject) => {
      if (this.parentUID) {
        // Update parent
        service.findByUID(this.parentUID).then(parent => {
          this._parent = parent;
          if (!parent) {
            throw new Error(`Unable to find reference space with uid: ${this.parentUID}!`);
          }
          return this._parent.update(service);
        }).then(resolve).catch(reject);
      } else {
        resolve();
      }
    });
  }
  orthographic(left, right, bottom, top, near, far) {
    this._transformationMatrix.multiply(new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4().makeOrthographic(left, right, bottom, top, near, far));
    return this;
  }
  /**
   * Transform perspective
   * @param {number} left Farthest left on the x-axis
   * @param {number} right Farthest right on the x-axis
   * @param {number} bottom Farthest down on the y-axis
   * @param {number} top Farthest up on the y-axis
   * @param {number} near Distance to the near clipping plane along the -Z axis
   * @param {number} far Distance to the far clipping plane along the -Z axis
   * @returns {ReferenceSpace} Reference space instance
   */
  perspective(left, right, bottom, top, near, far) {
    this._transformationMatrix.multiply(new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4().makePerspective(left, right, bottom, top, near, far));
    return this;
  }
  reset() {
    this._transformationMatrix.identity();
    this._scaleMatrix = new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4();
    this._rotation = new _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion();
    return this;
  }
  referenceUnit(unit) {
    this._unit = unit;
    return this;
  }
  translation(dX, dY, dZ = 0) {
    this._translationMatrix.multiply(new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4().makeTranslation(dX, dY, dZ));
    this._transformationMatrix.multiply(this._translationMatrix);
    return this;
  }
  scale(kX, kY, kZ = 1.0) {
    this._scaleMatrix = new _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4().makeScale(kX, kY, kZ);
    this._transformationMatrix.multiply(this._scaleMatrix);
    return this;
  }
  rotation(r) {
    if (r instanceof _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion) {
      this._rotation = r.clone();
      this._transformationMatrix.multiply(this._rotation.toRotationMatrix());
    } else if (r instanceof _utils_math__WEBPACK_IMPORTED_MODULE_3__.Euler) {
      this._rotation = _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion.fromEuler(r);
      this._transformationMatrix.multiply(this._rotation.toRotationMatrix());
    } else if (r instanceof _utils_math__WEBPACK_IMPORTED_MODULE_4__.AxisAngle) {
      this._rotation = _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion.fromAxisAngle(r);
      this._transformationMatrix.multiply(this._rotation.toRotationMatrix());
    } else {
      this._rotation = _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion.fromEuler(r);
      this._transformationMatrix.multiply(this._rotation.toRotationMatrix());
    }
    return this;
  }
  /**
   * Transform a position
   * @param {AbsolutePosition} position Position to transform
   * @param {SpaceTransformationOptions} [options] Transformation options
   * @returns {AbsolutePosition} Transformed position
   */
  transform(position, options) {
    const config = options || {};
    // Clone the position
    const newPosition = this._parent ? this._parent.transform(position, options) : position.clone();
    // Transform the position to the length unit
    if (this._unit) {
      newPosition.fromVector(newPosition.toVector3(this._unit));
      newPosition.setAccuracy(newPosition.accuracy.to(this._unit));
    }
    const transformationMatrix = config.inverse ? this.transformationMatrix.clone().invert() : this.transformationMatrix;
    const rotation = config.inverse ? this.rotationQuaternion.clone().invert() : this.rotationQuaternion;
    const scale = config.inverse ? this._scaleMatrix.clone().invert() : this.scaleMatrix;
    // Transform the point using the transformation matrix
    newPosition.fromVector(newPosition.toVector3().applyMatrix4(transformationMatrix));
    // Transform the orientation (rotation)
    if (newPosition.orientation) {
      // Rotate the quaterion
      newPosition.orientation.multiply(rotation);
    }
    if (newPosition.linearVelocity) {
      // Transform the linear velocity (rotation and scale)
      newPosition.linearVelocity.applyMatrix4(scale).applyMatrix4(_utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4.rotationFromQuaternion(rotation));
    }
    newPosition.setAccuracy(new _utils_math__WEBPACK_IMPORTED_MODULE_5__.Vector3(newPosition.accuracy.valueOf(), 0, 0).applyMatrix4(scale).x, newPosition.accuracy.unit);
    newPosition.referenceSpaceUID = this.uid;
    return newPosition;
  }
  get transformationMatrix() {
    return this._transformationMatrix;
  }
  set transformationMatrix(matrix) {
    this._transformationMatrix = matrix;
  }
  /**
   * Get the transformation matrix for scaling
   * @returns {Matrix4} Transformation matrix
   */
  get scaleMatrix() {
    return this._scaleMatrix;
  }
  set scaleMatrix(matrix) {
    this._scaleMatrix = matrix;
  }
  get rotationQuaternion() {
    return this._rotation;
  }
  set rotationQuaternion(quaternion) {
    this._rotation = quaternion;
  }
  get translationMatrix() {
    return this._translationMatrix;
  }
  set translationMatrix(matrix) {
    this._translationMatrix = matrix;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  name: 'translationMatrix'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4)], ReferenceSpace.prototype, "_translationMatrix", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  name: 'transformationMatrix'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4)], ReferenceSpace.prototype, "_transformationMatrix", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  name: 'scaleMatrix'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _utils_math__WEBPACK_IMPORTED_MODULE_1__.Matrix4)], ReferenceSpace.prototype, "_scaleMatrix", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  name: 'rotation'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _utils_math__WEBPACK_IMPORTED_MODULE_2__.Quaternion)], ReferenceSpace.prototype, "_rotation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  name: 'unit'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_8__.LengthUnit)], ReferenceSpace.prototype, "_unit", void 0);
ReferenceSpace = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_9__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object])], ReferenceSpace);

/***/ }),

/***/ "./dist/esm5/data/object/space/index.js":
/*!**********************************************!*\
  !*** ./dist/esm5/data/object/space/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferenceSpace: () => (/* reexport safe */ _ReferenceSpace__WEBPACK_IMPORTED_MODULE_0__.ReferenceSpace)
/* harmony export */ });
/* harmony import */ var _ReferenceSpace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReferenceSpace */ "./dist/esm5/data/object/space/ReferenceSpace.js");



/***/ }),

/***/ "./dist/esm5/data/position/Absolute2DPosition.js":
/*!*******************************************************!*\
  !*** ./dist/esm5/data/position/Absolute2DPosition.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Absolute2DPosition: () => (/* binding */ Absolute2DPosition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _AbsolutePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbsolutePosition */ "./dist/esm5/data/position/AbsolutePosition.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/math */ "./dist/esm5/utils/math/Vector3.js");





/**
 * Absolute cartesian 2D position. This class uses a {@link Vector2}. This location can be used both as
 * an absolute location or relative location.
 * @category Position
 */
let Absolute2DPosition = class Absolute2DPosition extends _AbsolutePosition__WEBPACK_IMPORTED_MODULE_0__.AbsolutePosition {
  constructor(x, y, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER) {
    super();
    this.vector = new _utils_math__WEBPACK_IMPORTED_MODULE_2__.Vector3();
    this.vector.x = unit.convert(x ? x : 0, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER);
    this.vector.y = unit.convert(y ? y : 0, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER);
  }
  get x() {
    if (!this.vector) {
      return undefined;
    }
    return this.vector.x;
  }
  set x(value) {
    if (!this.vector) {
      return;
    }
    this.vector.x = value;
  }
  get y() {
    if (!this.vector) {
      return undefined;
    }
    return this.vector.y;
  }
  set y(value) {
    if (!this.vector) {
      return;
    }
    this.vector.y = value;
  }
  /**
   * Get the angle in radians from this position to a destination
   * @param {Absolute2DPosition} destination Destination position
   * @returns {number} Bearing in radians from this position to destination
   */
  angleTo(destination) {
    return this.vector.angleTo(destination.vector);
  }
  fromVector(vector, unit) {
    if (unit) {
      this.x = unit.convert(vector.x, this.unit);
      this.y = unit.convert(vector.y, this.unit);
    } else {
      this.x = vector.x;
      this.y = vector.y;
    }
    return this;
  }
  toVector3(unit) {
    if (unit) {
      return new _utils_math__WEBPACK_IMPORTED_MODULE_2__.Vector3(this.unit.convert(this.x, unit), this.unit.convert(this.y, unit));
    } else {
      return new _utils_math__WEBPACK_IMPORTED_MODULE_2__.Vector3(this.x, this.y);
    }
  }
  /**
   * Clone the position
   * @returns {Absolute2DPosition} Cloned position
   */
  clone() {
    const position = super.clone();
    position.x = this.x;
    position.y = this.y;
    return position;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_5__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number])], Absolute2DPosition.prototype, "x", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_5__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number])], Absolute2DPosition.prototype, "y", null);
Absolute2DPosition = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number, Number, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit])], Absolute2DPosition);

/***/ }),

/***/ "./dist/esm5/data/position/Absolute3DPosition.js":
/*!*******************************************************!*\
  !*** ./dist/esm5/data/position/Absolute3DPosition.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Absolute3DPosition: () => (/* binding */ Absolute3DPosition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _Absolute2DPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Absolute2DPosition */ "./dist/esm5/data/position/Absolute2DPosition.js");




/**
 * Absolute cartesian 3D position. This class uses a {@link Vector3}. This location can be used both as
 * an absolute location or relative location.
 * @category Position
 */
let Absolute3DPosition = class Absolute3DPosition extends _Absolute2DPosition__WEBPACK_IMPORTED_MODULE_0__.Absolute2DPosition {
  constructor(x, y, z, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER) {
    super(x, y, unit);
    this.vector.z = unit.convert(z ? z : 0, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER);
  }
  get z() {
    if (!this.vector) {
      return undefined;
    }
    return this.vector.z;
  }
  set z(value) {
    if (!this.vector) {
      return;
    }
    this.vector.z = value;
  }
  fromVector(vector, unit) {
    var _a, _b;
    if (unit) {
      this.x = unit.convert(vector.x, this.unit);
      this.y = unit.convert(vector.y, this.unit);
      this.z = unit.convert((_a = vector.z) !== null && _a !== void 0 ? _a : 0, this.unit);
    } else {
      this.x = vector.x;
      this.y = vector.y;
      this.z = (_b = vector.z) !== null && _b !== void 0 ? _b : 0;
    }
    return this;
  }
  toVector3(unit) {
    if (unit) {
      return new _utils__WEBPACK_IMPORTED_MODULE_2__.Vector3(this.unit.convert(this.x, unit), this.unit.convert(this.y, unit), this.unit.convert(this.z, unit));
    } else {
      return new _utils__WEBPACK_IMPORTED_MODULE_2__.Vector3(this.x, this.y, this.z);
    }
  }
  /**
   * Clone the position
   * @returns {Absolute3DPosition} Cloned position
   */
  clone() {
    const position = super.clone();
    position.x = this.x;
    position.y = this.y;
    position.z = this.z;
    return position;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_5__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number])], Absolute3DPosition.prototype, "z", null);
Absolute3DPosition = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number, Number, Number, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit])], Absolute3DPosition);

/***/ }),

/***/ "./dist/esm5/data/position/AbsolutePosition.js":
/*!*****************************************************!*\
  !*** ./dist/esm5/data/position/AbsolutePosition.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbsolutePosition: () => (/* binding */ AbsolutePosition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/unit */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _values_Velocity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/Velocity */ "./dist/esm5/data/values/Velocity.js");
/* harmony import */ var _Orientation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Orientation */ "./dist/esm5/data/position/Orientation.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _values_Accuracy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../values/Accuracy */ "./dist/esm5/data/values/Accuracy.js");
/* harmony import */ var _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/Accuracy1D */ "./dist/esm5/data/values/Accuracy1D.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/DistanceFunction.js");









/**
 * An absolute position of a {@link DataObject}.
 * @category Position
 */
let AbsolutePosition = class AbsolutePosition {
  constructor() {
    /**
     * Position recording timestamp
     */
    this.timestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_0__.TimeService.now();
    /**
     * Velocity at recorded position
     */
    this.velocity = new _values_Velocity__WEBPACK_IMPORTED_MODULE_1__.Velocity();
    /**
     * Position unit
     */
    this.unit = _utils_unit__WEBPACK_IMPORTED_MODULE_2__.LengthUnit.METER;
  }
  /**
   * Get the position probability
   * @returns {number} Probability between 0 and 1
   */
  get probability() {
    if (!this._probability) {
      return 1 / this.accuracy.valueOf();
    }
    return this._probability;
  }
  set probability(value) {
    if (value > 1 || value < 0) {
      throw new Error(`${this.constructor.name} should be between 0 and 1.`);
    }
    this._probability = value;
  }
  /**
   * Position accuracy
   * @returns {Accuracy} Position accuracy
   */
  get accuracy() {
    if (!this._accuracy) {
      this._accuracy = new _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_3__.Accuracy1D(1, this.unit);
    }
    return this._accuracy;
  }
  set accuracy(value) {
    if (!value) {
      throw new Error(`Accuracy can not be undefined!`);
    }
    this._accuracy = value;
  }
  /**
   * Get the linear velocity
   * @returns {LinearVelocity} Linear velocity
   */
  get linearVelocity() {
    if (!this.velocity) {
      return undefined;
    }
    return this.velocity.linear;
  }
  /**
   * Set the linear velocity
   */
  set linearVelocity(value) {
    if (!this.velocity) {
      this.velocity = new _values_Velocity__WEBPACK_IMPORTED_MODULE_1__.Velocity();
    }
    this.velocity.linear = value;
  }
  /**
   * Get the angular velocity
   * @returns {AngularVelocity} Angular velocity
   */
  get angularVelocity() {
    if (!this.velocity) {
      return undefined;
    }
    return this.velocity.angular;
  }
  /**
   * Set the angular velocity
   */
  set angularVelocity(value) {
    if (!this.velocity) {
      this.velocity = new _values_Velocity__WEBPACK_IMPORTED_MODULE_1__.Velocity();
    }
    this.velocity.angular = value;
  }
  /**
   * Set the accuracy of the absolute position
   * @param {number | Accuracy} accuracy Accuracy object or number
   * @param {Unit} [unit] Optional unit
   * @returns {AbsolutePosition} instance
   */
  setAccuracy(accuracy, unit) {
    if (typeof accuracy === 'number') {
      this.accuracy = new _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_3__.Accuracy1D(accuracy, unit || this.unit);
    } else {
      this.accuracy = accuracy;
    }
    return this;
  }
  /**
   * Get the distance from this location to a destination
   * @param {AbsolutePosition} destination Destination location
   * @param {DistanceFn} [distanceFunction] Distance function to use (default EUCLIDEAN distance)
   * @returns {number} Distance between this point and destination
   */
  distanceTo(destination, distanceFunction = _utils__WEBPACK_IMPORTED_MODULE_4__.EUCLIDEAN) {
    return distanceFunction(this.toVector3().toArray(), destination.toVector3().toArray());
  }
  equals(position) {
    return this.toVector3(this.unit).equals(position.toVector3(this.unit));
  }
  /**
   * Clone the position
   * @returns {AbsolutePosition} Cloned position
   */
  clone() {
    const position = new this.constructor();
    position.unit = this.unit;
    position._accuracy = this._accuracy ? this._accuracy.clone() : undefined;
    position.orientation = this.orientation ? this.orientation.clone() : undefined;
    position.velocity = this.velocity ? this.velocity.clone() : undefined;
    position.timestamp = this.timestamp;
    position.referenceSpaceUID = this.referenceSpaceUID;
    return position;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_7__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], AbsolutePosition.prototype, "timestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _values_Velocity__WEBPACK_IMPORTED_MODULE_1__.Velocity)], AbsolutePosition.prototype, "velocity", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _Orientation__WEBPACK_IMPORTED_MODULE_8__.Orientation)], AbsolutePosition.prototype, "orientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _utils_unit__WEBPACK_IMPORTED_MODULE_2__.LengthUnit)], AbsolutePosition.prototype, "unit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  index: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], AbsolutePosition.prototype, "referenceSpaceUID", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  name: 'accuracy'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _values_Accuracy__WEBPACK_IMPORTED_MODULE_9__.Accuracy)], AbsolutePosition.prototype, "_accuracy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  name: 'probability',
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_7__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], AbsolutePosition.prototype, "_probability", void 0);
AbsolutePosition = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_10__.SerializableObject)()], AbsolutePosition);

/***/ }),

/***/ "./dist/esm5/data/position/GeographicalPosition.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/data/position/GeographicalPosition.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeographicalPosition: () => (/* binding */ GeographicalPosition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/unit/AngleUnit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/unit/LengthUnit */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Absolute3DPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Absolute3DPosition */ "./dist/esm5/data/position/Absolute3DPosition.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/DistanceFunction.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/GCS.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/math/Vector3.js");
var GeographicalPosition_1;






/**
 * Geographical WGS 84 position stored as an 3D vector in ISO 6709.
 * @category Position
 */
let GeographicalPosition = GeographicalPosition_1 = class GeographicalPosition extends _Absolute3DPosition__WEBPACK_IMPORTED_MODULE_0__.Absolute3DPosition {
  constructor(lat, lng, amsl) {
    super();
    this.latitude = lat;
    this.longitude = lng;
    this.z = amsl;
  }
  /**
   * Geographical Latitude
   * @returns {number} Latitude
   */
  get latitude() {
    return this.y;
  }
  set latitude(lat) {
    this.y = lat;
  }
  /**
   * Geographical Longitude
   * @returns {number} Longitude
   */
  get longitude() {
    return this.x;
  }
  set longitude(lng) {
    this.x = lng;
  }
  /**
   * Altitude above mean sea level
   * @returns {number} Altitude
   */
  get altitude() {
    return this.z;
  }
  set altitude(amsl) {
    this.z = amsl;
  }
  /**
   * Get the distance from this location to a destination
   * @param {GeographicalPosition} destination Destination location
   * @returns {number} Distance between this point and destination
   */
  distanceTo(destination) {
    return super.distanceTo(destination, _utils__WEBPACK_IMPORTED_MODULE_1__.HAVERSINE);
  }
  /**
   * Get the bearing in degrees from this location to a destination
   * @param {GeographicalPosition} destination Destination location
   * @returns {number} Bearing in degrees from this position to destination
   */
  bearing(destination) {
    return _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN.convert(this.angleTo(destination), _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE);
  }
  /**
   * Get the bearing in radians from this location to a destination
   * @param {GeographicalPosition} destination Destination location
   * @returns {number} Bearing in radians from this position to destination
   */
  angleTo(destination) {
    const lonRadA = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE.convert(this.longitude, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const latRadA = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE.convert(this.latitude, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const lonRadB = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE.convert(destination.longitude, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const latRadB = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE.convert(destination.latitude, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const y = Math.sin(lonRadB - lonRadA) * Math.cos(latRadB);
    const x = Math.cos(latRadA) * Math.sin(latRadB) - Math.sin(latRadA) * Math.cos(latRadB) * Math.cos(lonRadB - lonRadA);
    return Math.atan2(y, x);
  }
  destination(bearing, distance, bearingUnit = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE, distanceUnit = _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER) {
    distance = distanceUnit.convert(distance, _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER);
    const brng = bearingUnit.convert(bearing, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const lonRadA = bearingUnit.convert(this.longitude, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const latRadA = bearingUnit.convert(this.latitude, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    const latX = Math.asin(Math.sin(latRadA) * Math.cos(distance / _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.EARTH_RADIUS_MEAN) + Math.cos(latRadA) * Math.sin(distance / _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.EARTH_RADIUS_MEAN) * Math.cos(brng));
    const lonX = lonRadA + Math.atan2(Math.sin(brng) * Math.sin(distance / _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.EARTH_RADIUS_MEAN) * Math.cos(latRadA), Math.cos(distance / _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.EARTH_RADIUS_MEAN) - Math.sin(latRadA) * Math.sin(latX));
    const location = new GeographicalPosition_1();
    location.latitude = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN.convert(latX, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE);
    location.longitude = _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN.convert(lonX, _utils_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE);
    location.altitude = this.altitude;
    location.unit = this.unit;
    return location;
  }
  fromVector(vector, unit = _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.WGS84) {
    let converted;
    if (unit instanceof _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit) {
      converted = _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.ECEF.convert(new _utils__WEBPACK_IMPORTED_MODULE_5__.Vector3(unit.convert(vector.x, _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER), unit.convert(vector.y, _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER), unit.convert(vector.z, _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER)), _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.WGS84);
    } else if (unit instanceof _utils__WEBPACK_IMPORTED_MODULE_4__.GCS) {
      converted = unit.convert(vector, _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.WGS84);
    }
    this.x = converted.x;
    this.y = converted.y;
    this.z = converted.z;
    return this;
  }
  toVector3(unit = _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.WGS84) {
    if (unit instanceof _utils__WEBPACK_IMPORTED_MODULE_4__.GCS) {
      return _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.WGS84.convert(new _utils__WEBPACK_IMPORTED_MODULE_5__.Vector3(this.x, this.y, this.z), unit);
    } else if (unit instanceof _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit) {
      return _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.WGS84.convert(new _utils__WEBPACK_IMPORTED_MODULE_5__.Vector3(_utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER.convert(this.x, unit), _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER.convert(this.y, unit), _utils_unit_LengthUnit__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.METER.convert(this.z, unit)), _utils__WEBPACK_IMPORTED_MODULE_4__.GCS.ECEF);
    }
  }
  /**
   * Clone the position
   * @returns {GeographicalPosition} Cloned geographical position
   */
  clone() {
    const position = super.clone();
    position.latitude = this.latitude;
    position.longitude = this.longitude;
    position.z = this.altitude;
    return position;
  }
};
GeographicalPosition = GeographicalPosition_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Number, Number, Number])], GeographicalPosition);

/***/ }),

/***/ "./dist/esm5/data/position/Orientation.js":
/*!************************************************!*\
  !*** ./dist/esm5/data/position/Orientation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Orientation: () => (/* binding */ Orientation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/math */ "./dist/esm5/utils/math/Quaternion.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _values_Accuracy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../values/Accuracy */ "./dist/esm5/data/values/Accuracy.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/Accuracy1D */ "./dist/esm5/data/values/Accuracy1D.js");
var Orientation_1;







/**
 * Orientation quaternion with accuracy
 * @category Position
 */
let Orientation = Orientation_1 = class Orientation extends _utils_math__WEBPACK_IMPORTED_MODULE_0__.Quaternion {
  constructor(x, y, z, w, accuracy) {
    super(x, y, z, w);
    this.accuracy = accuracy || new _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_1__.Accuracy1D(0, _utils__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
    this.timestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_3__.TimeService.now();
  }
  static fromQuaternion(quat) {
    return new Orientation_1(quat.x, quat.y, quat.z, quat.w);
  }
  clone() {
    const vector = super.clone();
    vector.accuracy = this.accuracy ? this.accuracy.clone() : undefined;
    vector.timestamp = this.timestamp;
    return vector;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  isRequired: false,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], Orientation.prototype, "timestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  isRequired: false
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _values_Accuracy__WEBPACK_IMPORTED_MODULE_7__.Accuracy)], Orientation.prototype, "accuracy", void 0);
Orientation = Orientation_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Number, Number, Number, Number, _values_Accuracy__WEBPACK_IMPORTED_MODULE_7__.Accuracy])], Orientation);

/***/ }),

/***/ "./dist/esm5/data/position/Pose.js":
/*!*****************************************!*\
  !*** ./dist/esm5/data/position/Pose.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pose: () => (/* binding */ Pose)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _utils_math___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/math/ */ "./dist/esm5/utils/math/Matrix4.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values_Accuracy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../values/Accuracy */ "./dist/esm5/data/values/Accuracy.js");
/* harmony import */ var _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/Accuracy1D */ "./dist/esm5/data/values/Accuracy1D.js");
/* harmony import */ var _Absolute3DPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Absolute3DPosition */ "./dist/esm5/data/position/Absolute3DPosition.js");
/* harmony import */ var _Orientation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Orientation */ "./dist/esm5/data/position/Orientation.js");









/**
 * Position and orientation.
 *
 * In computer vision and robotics, a typical task is to identify specific objects in an image and to determine each object's position and orientation relative to some coordinate system. This information can then be used, for example, to allow a robot to manipulate an object or to avoid moving into the object. The combination of position and orientation is referred to as the pose of an object, even though this concept is sometimes used only to describe the orientation. Exterior orientation and translation are also used as synonyms of pose.
 * @see {@link https://en.wikipedia.org/wiki/Pose_(computer_vision)}
 */
let Pose = class Pose extends _utils_math___WEBPACK_IMPORTED_MODULE_0__.Matrix4 {
  constructor() {
    super(...arguments);
    /**
     * Position recording timestamp
     */
    this.timestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_1__.TimeService.now();
    /**
     * Position unit
     */
    this.unit = _utils__WEBPACK_IMPORTED_MODULE_2__.LengthUnit.METER;
    this._probability = 1.0;
  }
  /**
   * Get the position probability
   * @returns {number} Probability between 0 and 1
   */
  get probability() {
    return this._probability;
  }
  set probability(value) {
    if (value > 1 || value < 0) {
      throw new Error(`${this.constructor.name} should be between 0 and 1.`);
    }
    this._probability = value;
  }
  /**
   * Position accuracy
   * @returns {Accuracy} Position accuracy
   */
  get accuracy() {
    if (!this._accuracy) {
      this._accuracy = new _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_3__.Accuracy1D(1, this.unit);
    }
    return this._accuracy;
  }
  set accuracy(value) {
    this._accuracy = value;
  }
  /**
   * Get a pose from a 4d matrix
   * @param {Matrix4} matrix 4x4 Matrix
   * @returns {Pose} Pose instance
   */
  static fromMatrix4(matrix) {
    const pose = new this();
    pose.fromArray(matrix.toArray());
    return pose;
  }
  /**
   * Create a pose from a position
   * @param {Absolute3DPosition} position 3D position
   * @returns {Pose} Output pose
   */
  static fromPosition(position) {
    const pose = new this();
    pose.timestamp = position.timestamp;
    pose.unit = position.unit;
    pose.probability = position.probability;
    pose.accuracy = pose.accuracy.clone();
    const vector = position.toVector3();
    if (position.orientation) {
      pose.makeRotationFromQuaternion(position.orientation);
    }
    pose.setPosition(vector.x, vector.y, vector.z);
    return pose;
  }
  /**
   * Extract the orientation from the pose
   * @returns {Orientation} Orientation
   */
  get orientation() {
    const rotationMatrix = this.extractRotation(this);
    const orientation = _Orientation__WEBPACK_IMPORTED_MODULE_4__.Orientation.fromRotationMatrix(rotationMatrix);
    orientation.timestamp = this.timestamp;
    return orientation;
  }
  /**
   * Extract the 3d position from the pose
   * @returns {Absolute3DPosition} 3D position
   */
  get position() {
    const positionMatrix = this.copyPosition(this);
    const position = new _Absolute3DPosition__WEBPACK_IMPORTED_MODULE_5__.Absolute3DPosition(positionMatrix.elements[12], positionMatrix.elements[13], positionMatrix.elements[14]);
    position.timestamp = this.timestamp;
    position.unit = this.unit;
    position.probability = this.probability;
    position.accuracy = this.accuracy.clone();
    position.orientation = this.orientation;
    return position;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_8__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Number)], Pose.prototype, "timestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_2__.LengthUnit)], Pose.prototype, "unit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  name: 'accuracy'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _values_Accuracy__WEBPACK_IMPORTED_MODULE_9__.Accuracy)], Pose.prototype, "_accuracy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_8__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Number), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Number])], Pose.prototype, "probability", null);
Pose = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_10__.SerializableObject)()], Pose);

/***/ }),

/***/ "./dist/esm5/data/position/RelativeAngle.js":
/*!**************************************************!*\
  !*** ./dist/esm5/data/position/RelativeAngle.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeAngle: () => (/* binding */ RelativeAngle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Orientation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orientation */ "./dist/esm5/data/position/Orientation.js");
/* harmony import */ var _RelativePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePosition */ "./dist/esm5/data/position/RelativePosition.js");





/**
 * Relative location to another reference object measured in the angle.
 * @category Position
 */
let RelativeAngle = class RelativeAngle extends _RelativePosition__WEBPACK_IMPORTED_MODULE_0__.RelativePosition {
  constructor(referenceObject, angle, angleUnit, orientation) {
    super(referenceObject, angle, angleUnit || _utils__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN);
    /**
     * Orientation at recorded position
     */
    this.orientation = new _Orientation__WEBPACK_IMPORTED_MODULE_2__.Orientation();
    this.unit = angleUnit;
    if (orientation) {
      this.orientation = orientation;
    }
  }
  /**
   * Angle unit
   * @deprecated Use [[unit]] instead
   * @returns {AngleUnit} unit
   */
  get angleUnit() {
    return this.unit;
  }
  set angleUnit(unit) {
    this.unit = unit;
  }
  /**
   * Angle to reference object
   * @returns {number} Angle
   */
  get angle() {
    return this.referenceValue;
  }
  set angle(value) {
    this.referenceValue = value;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", _Orientation__WEBPACK_IMPORTED_MODULE_2__.Orientation)], RelativeAngle.prototype, "orientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_1__.AngleUnit)], RelativeAngle.prototype, "unit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_5__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)], RelativeAngle.prototype, "referenceValue", void 0);
RelativeAngle = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object, Number, _utils__WEBPACK_IMPORTED_MODULE_1__.AngleUnit, _Orientation__WEBPACK_IMPORTED_MODULE_2__.Orientation])], RelativeAngle);

/***/ }),

/***/ "./dist/esm5/data/position/RelativeAngularVelocity.js":
/*!************************************************************!*\
  !*** ./dist/esm5/data/position/RelativeAngularVelocity.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeAngularVelocity: () => (/* binding */ RelativeAngularVelocity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _RelativePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePosition */ "./dist/esm5/data/position/RelativePosition.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values */ "./dist/esm5/data/values/AngularVelocity.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/AngularVelocityUnit.js");





/**
 * Relative angular velocity to another reference object
 * @category Position
 */
let RelativeAngularVelocity = class RelativeAngularVelocity extends _RelativePosition__WEBPACK_IMPORTED_MODULE_0__.RelativePosition {
  constructor(referenceObject, velocity) {
    super(referenceObject, velocity, _utils__WEBPACK_IMPORTED_MODULE_1__.AngularVelocityUnit.RADIAN_PER_MINUTE);
  }
  get velocity() {
    return this.referenceValue;
  }
  set velocity(value) {
    this.referenceValue = value;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _values__WEBPACK_IMPORTED_MODULE_4__.AngularVelocity)], RelativeAngularVelocity.prototype, "referenceValue", void 0);
RelativeAngularVelocity = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, _values__WEBPACK_IMPORTED_MODULE_4__.AngularVelocity])], RelativeAngularVelocity);

/***/ }),

/***/ "./dist/esm5/data/position/RelativeDistance.js":
/*!*****************************************************!*\
  !*** ./dist/esm5/data/position/RelativeDistance.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeDistance: () => (/* binding */ RelativeDistance)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _RelativePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePosition */ "./dist/esm5/data/position/RelativePosition.js");




/**
 * Relative location to another reference object in distance.
 * @category Position
 */
let RelativeDistance = class RelativeDistance extends _RelativePosition__WEBPACK_IMPORTED_MODULE_0__.RelativePosition {
  constructor(referenceObject, distance, distanceUnit) {
    super(referenceObject, distance, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER);
    this.unit = distanceUnit;
  }
  /**
   * Distance unit
   * @deprecated Use [[unit]] instead
   * @returns {AngleUnit} unit
   */
  get distanceUnit() {
    return this.unit;
  }
  set distanceUnit(unit) {
    this.unit = unit;
  }
  /**
   * Distance to reference object
   * @returns {number} Distance
   */
  get distance() {
    return this.referenceValue;
  }
  set distance(value) {
    this.referenceValue = value;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit)], RelativeDistance.prototype, "unit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_4__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], RelativeDistance.prototype, "referenceValue", void 0);
RelativeDistance = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, Number, _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit])], RelativeDistance);

/***/ }),

/***/ "./dist/esm5/data/position/RelativeLinearVelocity.js":
/*!***********************************************************!*\
  !*** ./dist/esm5/data/position/RelativeLinearVelocity.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeLinearVelocity: () => (/* binding */ RelativeLinearVelocity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _RelativePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePosition */ "./dist/esm5/data/position/RelativePosition.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values */ "./dist/esm5/data/values/LinearVelocity.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LinearVelocityUnit.js");





/**
 * Relative linear velocity to another reference object
 * @category Position
 */
let RelativeLinearVelocity = class RelativeLinearVelocity extends _RelativePosition__WEBPACK_IMPORTED_MODULE_0__.RelativePosition {
  constructor(referenceObject, velocity) {
    super(referenceObject, velocity, _utils__WEBPACK_IMPORTED_MODULE_1__.LinearVelocityUnit.METER_PER_SECOND);
  }
  get velocity() {
    return this.referenceValue;
  }
  set velocity(value) {
    this.referenceValue = value;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _values__WEBPACK_IMPORTED_MODULE_4__.LinearVelocity)], RelativeLinearVelocity.prototype, "referenceValue", void 0);
RelativeLinearVelocity = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, _values__WEBPACK_IMPORTED_MODULE_4__.LinearVelocity])], RelativeLinearVelocity);

/***/ }),

/***/ "./dist/esm5/data/position/RelativePosition.js":
/*!*****************************************************!*\
  !*** ./dist/esm5/data/position/RelativePosition.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativePosition: () => (/* binding */ RelativePosition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _DataSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _values_Accuracy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../values/Accuracy */ "./dist/esm5/data/values/Accuracy.js");
/* harmony import */ var _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/Accuracy1D */ "./dist/esm5/data/values/Accuracy1D.js");







/**
 * Relative position to another reference object or space.
 * @category Position
 */
let RelativePosition = class RelativePosition {
  /**
   * Get the position probability
   * @returns {number} Probability between 0 and 1
   */
  get probability() {
    if (!this._probability) {
      return 1 / this.accuracy.valueOf();
    }
    return this._probability;
  }
  set probability(value) {
    if (value > 1 || value < 0) {
      throw new Error(`${this.constructor.name} should be between 0 and 1.`);
    }
    this._probability = value;
  }
  /**
   * Position accuracy
   * @returns {Accuracy} Position accuracy
   */
  get accuracy() {
    if (!this._accuracy) {
      this._accuracy = new _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_0__.Accuracy1D(1, this._defaultUnit);
    }
    return this._accuracy;
  }
  set accuracy(value) {
    if (!value) {
      throw new Error(`Accuracy can not be undefined!`);
    }
    this.accuracy = value;
  }
  constructor(referenceObject, value, unit) {
    /**
     * Position recording timestamp
     */
    this.timestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_1__.TimeService.now();
    if (referenceObject !== undefined) {
      if (referenceObject instanceof String || typeof referenceObject === 'string') {
        this.referenceObjectUID = referenceObject;
      } else {
        this.referenceObjectType = referenceObject.constructor.name;
        this.referenceObjectUID = referenceObject.uid;
      }
    }
    this._defaultUnit = unit || _utils__WEBPACK_IMPORTED_MODULE_2__.Unit.UNKNOWN;
    this.referenceValue = value;
  }
  /**
   * Set the accuracy of the absolute position
   * @param {number | Accuracy} accuracy Accuracy object or number
   * @param {Unit} [unit] Optional unit
   * @returns {RelativePosition} instance
   */
  setAccuracy(accuracy, unit) {
    if (typeof accuracy === 'number') {
      this.accuracy = new _values_Accuracy1D__WEBPACK_IMPORTED_MODULE_0__.Accuracy1D(accuracy, unit || this._defaultUnit);
    } else {
      this.accuracy = accuracy;
    }
    return this;
  }
  equals(position) {
    return this.timestamp === position.timestamp;
  }
  /**
   * Clone the position
   * @returns {RelativePosition} Cloned relative position
   */
  clone() {
    return _DataSerializer__WEBPACK_IMPORTED_MODULE_3__.DataSerializer.clone(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], RelativePosition.prototype, "timestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], RelativePosition.prototype, "referenceObjectUID", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], RelativePosition.prototype, "referenceObjectType", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], RelativePosition.prototype, "referenceValue", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  name: 'accuracy'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _values_Accuracy__WEBPACK_IMPORTED_MODULE_7__.Accuracy)], RelativePosition.prototype, "_accuracy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  name: 'probability',
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], RelativePosition.prototype, "_probability", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(() => _utils__WEBPACK_IMPORTED_MODULE_2__.Unit), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], RelativePosition.prototype, "unit", void 0);
RelativePosition = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, Object, Object])], RelativePosition);

/***/ }),

/***/ "./dist/esm5/data/position/Trajectory.js":
/*!***********************************************!*\
  !*** ./dist/esm5/data/position/Trajectory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trajectory: () => (/* binding */ Trajectory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableArrayMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _AbsolutePosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbsolutePosition */ "./dist/esm5/data/position/AbsolutePosition.js");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");





let Trajectory = class Trajectory {
  get trajectoryStart() {
    if (!this.positions || this.positions.length === 0) return -1;
    return this.positions[0].timestamp;
  }
  get trajectoryEnd() {
    if (!this.positions || this.positions.length === 0) return -1;
    return this.positions[this.positions.length - 1].timestamp;
  }
  constructor(objectUID) {
    this.uid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.positions = [];
    this.objectUID = objectUID;
    this.createdTimestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_1__.TimeService.now();
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)({
  primaryKey: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], Trajectory.prototype, "uid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)({
  index: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], Trajectory.prototype, "objectUID", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableArrayMember)(_AbsolutePosition__WEBPACK_IMPORTED_MODULE_5__.AbsolutePosition), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Array)], Trajectory.prototype, "positions", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)({
  index: true,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], Trajectory.prototype, "createdTimestamp", void 0);
Trajectory = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String])], Trajectory);

/***/ }),

/***/ "./dist/esm5/data/position/index.js":
/*!******************************************!*\
  !*** ./dist/esm5/data/position/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Absolute2DPosition: () => (/* reexport safe */ _Absolute2DPosition__WEBPACK_IMPORTED_MODULE_3__.Absolute2DPosition),
/* harmony export */   Absolute3DPosition: () => (/* reexport safe */ _Absolute3DPosition__WEBPACK_IMPORTED_MODULE_4__.Absolute3DPosition),
/* harmony export */   AbsolutePosition: () => (/* reexport safe */ _AbsolutePosition__WEBPACK_IMPORTED_MODULE_1__.AbsolutePosition),
/* harmony export */   GeographicalPosition: () => (/* reexport safe */ _GeographicalPosition__WEBPACK_IMPORTED_MODULE_2__.GeographicalPosition),
/* harmony export */   Orientation: () => (/* reexport safe */ _Orientation__WEBPACK_IMPORTED_MODULE_9__.Orientation),
/* harmony export */   Pose: () => (/* reexport safe */ _Pose__WEBPACK_IMPORTED_MODULE_11__.Pose),
/* harmony export */   RelativeAngle: () => (/* reexport safe */ _RelativeAngle__WEBPACK_IMPORTED_MODULE_5__.RelativeAngle),
/* harmony export */   RelativeAngularVelocity: () => (/* reexport safe */ _RelativeAngularVelocity__WEBPACK_IMPORTED_MODULE_7__.RelativeAngularVelocity),
/* harmony export */   RelativeDistance: () => (/* reexport safe */ _RelativeDistance__WEBPACK_IMPORTED_MODULE_6__.RelativeDistance),
/* harmony export */   RelativeLinearVelocity: () => (/* reexport safe */ _RelativeLinearVelocity__WEBPACK_IMPORTED_MODULE_8__.RelativeLinearVelocity),
/* harmony export */   RelativePosition: () => (/* reexport safe */ _RelativePosition__WEBPACK_IMPORTED_MODULE_0__.RelativePosition),
/* harmony export */   Trajectory: () => (/* reexport safe */ _Trajectory__WEBPACK_IMPORTED_MODULE_10__.Trajectory)
/* harmony export */ });
/* harmony import */ var _RelativePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePosition */ "./dist/esm5/data/position/RelativePosition.js");
/* harmony import */ var _AbsolutePosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbsolutePosition */ "./dist/esm5/data/position/AbsolutePosition.js");
/* harmony import */ var _GeographicalPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeographicalPosition */ "./dist/esm5/data/position/GeographicalPosition.js");
/* harmony import */ var _Absolute2DPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Absolute2DPosition */ "./dist/esm5/data/position/Absolute2DPosition.js");
/* harmony import */ var _Absolute3DPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Absolute3DPosition */ "./dist/esm5/data/position/Absolute3DPosition.js");
/* harmony import */ var _RelativeAngle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RelativeAngle */ "./dist/esm5/data/position/RelativeAngle.js");
/* harmony import */ var _RelativeDistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RelativeDistance */ "./dist/esm5/data/position/RelativeDistance.js");
/* harmony import */ var _RelativeAngularVelocity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RelativeAngularVelocity */ "./dist/esm5/data/position/RelativeAngularVelocity.js");
/* harmony import */ var _RelativeLinearVelocity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RelativeLinearVelocity */ "./dist/esm5/data/position/RelativeLinearVelocity.js");
/* harmony import */ var _Orientation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Orientation */ "./dist/esm5/data/position/Orientation.js");
/* harmony import */ var _Trajectory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Trajectory */ "./dist/esm5/data/position/Trajectory.js");
/* harmony import */ var _Pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pose */ "./dist/esm5/data/position/Pose.js");














/***/ }),

/***/ "./dist/esm5/data/types.js":
/*!*********************************!*\
  !*** ./dist/esm5/data/types.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedJSON: () => (/* binding */ TypedJSON)
/* harmony export */ });
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typedjson */ "./node_modules/typedjson/lib/esm5/index.js");
/* harmony import */ var typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typedjson/lib/esm5/type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");
/* harmony import */ var typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedjson/lib/esm5/helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typedjson/lib/esm5/options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");




const TypedJSON = Object.assign(Object.assign({}, typedjson__WEBPACK_IMPORTED_MODULE_0__), {
  utils: {
    isInstanceOf: typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_1__.isInstanceOf,
    isValueDefined: typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_1__.isValueDefined,
    nameof: typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_1__.nameof,
    isSubtypeOf: typedjson_lib_esm5_helpers__WEBPACK_IMPORTED_MODULE_1__.isSubtypeOf
  },
  options: {
    mergeOptions: typedjson_lib_esm5_options_base__WEBPACK_IMPORTED_MODULE_2__.mergeOptions
  },
  typeDescriptor: {
    ensureTypeDescriptor: typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_3__.ensureTypeDescriptor,
    ArrayTypeDescriptor: typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_3__.ArrayTypeDescriptor,
    MapTypeDescriptor: typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_3__.MapTypeDescriptor,
    SetTypeDescriptor: typedjson_lib_esm5_type_descriptor__WEBPACK_IMPORTED_MODULE_3__.SetTypeDescriptor
  }
});

/***/ }),

/***/ "./dist/esm5/data/values/Acceleration.js":
/*!***********************************************!*\
  !*** ./dist/esm5/data/values/Acceleration.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Acceleration: () => (/* binding */ Acceleration)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/AccelerationUnit.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");




/**
 * Acceleration sensor value
 * @category Sensor Value
 */
let Acceleration = class Acceleration extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(x = 0, y = 0, z = 0, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.AccelerationUnit.METER_PER_SECOND_SQUARE) {
    super(x, y, z, unit, _utils__WEBPACK_IMPORTED_MODULE_1__.AccelerationUnit.METER_PER_SECOND_SQUARE);
  }
};
Acceleration = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, Object, Object, Object])], Acceleration);

/***/ }),

/***/ "./dist/esm5/data/values/Accuracy.js":
/*!*******************************************!*\
  !*** ./dist/esm5/data/values/Accuracy.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accuracy: () => (/* binding */ Accuracy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _utils_math_Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/math/Vector3 */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");




let Accuracy = class Accuracy {
  constructor(value, unit) {
    this.value = value;
    this._unit = unit;
  }
  /**
   * Convert the value to another unit
   * @param {Unit} unit Target unit
   * @returns {Accuracy} Converted value
   */
  to(unit) {
    if (!unit) {
      throw new Error(`${this.constructor.name} does not have a unit to convert from!`);
    }
    const value = this.value;
    if (!(value instanceof _utils_math_Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3) && typeof value !== 'number') {
      throw new Error(`${this.constructor.name} can not be converted!`);
    }
    const result = this.unit.convert(value, unit);
    return new this.constructor(result, unit);
  }
  /**
   * Unit this value is in
   * @returns {Unit} Unit this value is in
   */
  get unit() {
    return this._unit;
  }
  clone() {
    const result = new this.constructor();
    result.value = this.value;
    result._unit = this._unit;
    return result;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)], Accuracy.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  name: 'unit'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _utils_unit__WEBPACK_IMPORTED_MODULE_3__.Unit)], Accuracy.prototype, "_unit", void 0);
Accuracy = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Object, Object])], Accuracy);

/***/ }),

/***/ "./dist/esm5/data/values/Accuracy1D.js":
/*!*********************************************!*\
  !*** ./dist/esm5/data/values/Accuracy1D.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accuracy1D: () => (/* binding */ Accuracy1D)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Accuracy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accuracy */ "./dist/esm5/data/values/Accuracy.js");



let Accuracy1D = class Accuracy1D extends _Accuracy__WEBPACK_IMPORTED_MODULE_0__.Accuracy {
  constructor(value, unit) {
    super(value, unit);
  }
  valueOf() {
    return this.value.valueOf();
  }
  toString() {
    return this.valueOf().toString();
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Accuracy1D.prototype, "value", void 0);
Accuracy1D = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Number, Object])], Accuracy1D);

/***/ }),

/***/ "./dist/esm5/data/values/Accuracy2D.js":
/*!*********************************************!*\
  !*** ./dist/esm5/data/values/Accuracy2D.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accuracy2D: () => (/* binding */ Accuracy2D)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_math___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/math/ */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Accuracy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accuracy */ "./dist/esm5/data/values/Accuracy.js");




let Accuracy2D = class Accuracy2D extends _Accuracy__WEBPACK_IMPORTED_MODULE_0__.Accuracy {
  constructor(x, y, unit) {
    super(new _utils_math___WEBPACK_IMPORTED_MODULE_1__.Vector3(), unit);
    this.value.x = x;
    this.value.y = y;
  }
  /**
   * Convert the value to another unit
   * @param {Unit} unit Target unit
   * @returns {Accuracy2D} Converted value
   */
  to(unit) {
    const accuracy = super.to(unit);
    accuracy.x = this.unit.convert(this.x, unit);
    accuracy.y = this.unit.convert(this.y, unit);
    return accuracy;
  }
  valueOf() {
    return (this.x + this.y) / 2;
  }
  toString() {
    return this.valueOf().toString();
  }
  get x() {
    return this.value.x;
  }
  set x(val) {
    this.value.x = val;
  }
  get y() {
    return this.value.y;
  }
  set y(val) {
    this.value.y = val;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _utils_math___WEBPACK_IMPORTED_MODULE_1__.Vector3)], Accuracy2D.prototype, "value", void 0);
Accuracy2D = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Number, Number, Object])], Accuracy2D);

/***/ }),

/***/ "./dist/esm5/data/values/Accuracy3D.js":
/*!*********************************************!*\
  !*** ./dist/esm5/data/values/Accuracy3D.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accuracy3D: () => (/* binding */ Accuracy3D)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Accuracy2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accuracy2D */ "./dist/esm5/data/values/Accuracy2D.js");



let Accuracy3D = class Accuracy3D extends _Accuracy2D__WEBPACK_IMPORTED_MODULE_0__.Accuracy2D {
  constructor(x, y, z, unit) {
    super(x, y, unit);
    this.value.z = z;
  }
  /**
   * Convert the value to another unit
   * @param {Unit} unit Target unit
   * @returns {Accuracy3D} Converted value
   */
  to(unit) {
    const accuracy = super.to(unit);
    accuracy.z = this.unit.convert(this.z, unit);
    return accuracy;
  }
  valueOf() {
    return (this.x + this.y + this.z) / 3;
  }
  get z() {
    return this.value.z;
  }
  set z(val) {
    this.value.z = val;
  }
};
Accuracy3D = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Number, Number, Number, Object])], Accuracy3D);

/***/ }),

/***/ "./dist/esm5/data/values/AngularVelocity.js":
/*!**************************************************!*\
  !*** ./dist/esm5/data/values/AngularVelocity.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularVelocity: () => (/* binding */ AngularVelocity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_unit_AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/unit/AngularVelocityUnit */ "./dist/esm5/utils/unit/AngularVelocityUnit.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");




/**
 * @category Sensor Value
 */
let AngularVelocity = class AngularVelocity extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(x, y, z, unit = _utils_unit_AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_1__.AngularVelocityUnit.RADIAN_PER_SECOND) {
    super(x, y, z, unit, _utils_unit_AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_1__.AngularVelocityUnit.RADIAN_PER_SECOND);
  }
  static fromArray(array, unit = _utils_unit_AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_1__.AngularVelocityUnit.RADIAN_PER_SECOND) {
    return new this(array[0], array[1], array[2], unit);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _utils_unit_AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_1__.AngularVelocityUnit)], AngularVelocity.prototype, "unit", void 0);
AngularVelocity = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Number, Number, Number, Object])], AngularVelocity);

/***/ }),

/***/ "./dist/esm5/data/values/Humidity.js":
/*!*******************************************!*\
  !*** ./dist/esm5/data/values/Humidity.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Humidity: () => (/* binding */ Humidity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");



let Humidity = class Humidity extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(value = 0) {
    super(value, undefined, undefined);
  }
  get value() {
    return this.x;
  }
  set value(x) {
    this.x = x;
  }
};
Humidity = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Object])], Humidity);

/***/ }),

/***/ "./dist/esm5/data/values/LinearVelocity.js":
/*!*************************************************!*\
  !*** ./dist/esm5/data/values/LinearVelocity.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearVelocity: () => (/* binding */ LinearVelocity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LinearVelocityUnit.js");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");




/**
 * @category Sensor Value
 */
let LinearVelocity = class LinearVelocity extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(x, y, z, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.LinearVelocityUnit.METER_PER_SECOND) {
    super(x, y, z, unit, _utils__WEBPACK_IMPORTED_MODULE_1__.LinearVelocityUnit.METER_PER_SECOND);
  }
  static fromArray(array, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.LinearVelocityUnit.METER_PER_SECOND) {
    return new this(array[0], array[1], array[2], unit);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_1__.LinearVelocityUnit)], LinearVelocity.prototype, "unit", void 0);
LinearVelocity = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Number, Number, Number, Object])], LinearVelocity);

/***/ }),

/***/ "./dist/esm5/data/values/Magnetism.js":
/*!********************************************!*\
  !*** ./dist/esm5/data/values/Magnetism.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Magnetism: () => (/* binding */ Magnetism)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/MagnetismUnit.js");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");




/**
 * @category Sensor Value
 */
let Magnetism = class Magnetism extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(x, y, z, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.MagnetismUnit.MICROTESLA) {
    super(x, y, z, unit, _utils__WEBPACK_IMPORTED_MODULE_1__.MagnetismUnit.MICROTESLA);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_1__.MagnetismUnit)], Magnetism.prototype, "unit", void 0);
Magnetism = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Number, Number, Number, Object])], Magnetism);

/***/ }),

/***/ "./dist/esm5/data/values/Pressure.js":
/*!*******************************************!*\
  !*** ./dist/esm5/data/values/Pressure.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pressure: () => (/* binding */ Pressure)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/unit */ "./dist/esm5/utils/unit/PressureUnit.js");




let Pressure = class Pressure extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(value = 0, unit = _utils_unit__WEBPACK_IMPORTED_MODULE_1__.PressureUnit.PASCAL) {
    super(value, undefined, undefined, unit, _utils_unit__WEBPACK_IMPORTED_MODULE_1__.PressureUnit.PASCAL);
  }
  get value() {
    return this.x;
  }
  set value(x) {
    this.x = x;
  }
};
Pressure = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, Object])], Pressure);

/***/ }),

/***/ "./dist/esm5/data/values/SensorValue.js":
/*!**********************************************!*\
  !*** ./dist/esm5/data/values/SensorValue.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SensorValue: () => (/* binding */ SensorValue)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/math */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Accuracy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Accuracy */ "./dist/esm5/data/values/Accuracy.js");
/* harmony import */ var _Accuracy1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Accuracy1D */ "./dist/esm5/data/values/Accuracy1D.js");







/**
 * 3D vector sensor value with accuracy and timestamp.
 */
let SensorValue = class SensorValue extends _utils_math__WEBPACK_IMPORTED_MODULE_0__.Vector3 {
  constructor(x, y, z, unit, defaultUnit, accuracy) {
    var _a;
    if (unit && defaultUnit) {
      super(unit.convert(x ? x : 0, defaultUnit), unit.convert(y ? y : 0, defaultUnit), unit.convert(z ? z : 0, defaultUnit));
      this._defaultUnit = defaultUnit;
    } else {
      super(x, y, z);
    }
    this.unit = (_a = defaultUnit !== null && defaultUnit !== void 0 ? defaultUnit : unit) !== null && _a !== void 0 ? _a : _utils__WEBPACK_IMPORTED_MODULE_1__.Unit.UNKNOWN;
    this.timestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now();
    this.accuracy = accuracy || new _Accuracy1D__WEBPACK_IMPORTED_MODULE_3__.Accuracy1D(1, this._defaultUnit || _utils__WEBPACK_IMPORTED_MODULE_1__.Unit.UNKNOWN);
  }
  /**
   * Set the accuracy of the absolute position
   * @param {number | Accuracy} accuracy Accuracy object or number
   * @returns {SensorValue} instance
   */
  setAccuracy(accuracy) {
    if (typeof accuracy === 'number') {
      this.accuracy = new _Accuracy1D__WEBPACK_IMPORTED_MODULE_3__.Accuracy1D(accuracy, this._defaultUnit);
    } else {
      this.accuracy = accuracy;
    }
    return this;
  }
  /**
   * Convert sensor value to tuple
   * @param {Unit} [unit] Conversion unit
   * @returns {Vector3Tuple} Tuple of three numbers
   */
  toTuple(unit) {
    if (unit) {
      return this.unit.convert(this, unit).toArray();
    } else {
      return this.toArray();
    }
  }
  clone() {
    const vector = super.clone();
    vector.accuracy = this.accuracy;
    vector.timestamp = this.timestamp;
    return vector;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  isRequired: false,
  numberType: _decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.LONG
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], SensorValue.prototype, "timestamp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  isRequired: false
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _Accuracy__WEBPACK_IMPORTED_MODULE_7__.Accuracy)], SensorValue.prototype, "accuracy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)(() => _utils__WEBPACK_IMPORTED_MODULE_1__.Unit), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], SensorValue.prototype, "unit", void 0);
SensorValue = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Number, Number, Number, _utils__WEBPACK_IMPORTED_MODULE_1__.Unit, Object, _Accuracy__WEBPACK_IMPORTED_MODULE_7__.Accuracy])], SensorValue);

/***/ }),

/***/ "./dist/esm5/data/values/Temperature.js":
/*!**********************************************!*\
  !*** ./dist/esm5/data/values/Temperature.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Temperature: () => (/* binding */ Temperature)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/unit */ "./dist/esm5/utils/unit/TemperatureUnit.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");




/**
 * @category Sensor Value
 */
let Temperature = class Temperature extends _SensorValue__WEBPACK_IMPORTED_MODULE_0__.SensorValue {
  constructor(value = 0, unit = _utils_unit__WEBPACK_IMPORTED_MODULE_1__.TemperatureUnit.CELCIUS) {
    super(value, undefined, undefined, unit, _utils_unit__WEBPACK_IMPORTED_MODULE_1__.TemperatureUnit.CELCIUS);
  }
  get value() {
    return this.x;
  }
  set value(x) {
    this.x = x;
  }
};
Temperature = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, Object])], Temperature);

/***/ }),

/***/ "./dist/esm5/data/values/Velocity.js":
/*!*******************************************!*\
  !*** ./dist/esm5/data/values/Velocity.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Velocity: () => (/* binding */ Velocity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _AngularVelocity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AngularVelocity */ "./dist/esm5/data/values/AngularVelocity.js");
/* harmony import */ var _LinearVelocity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearVelocity */ "./dist/esm5/data/values/LinearVelocity.js");




/**
 * Velocity of the object at the recorded position
 * @category Sensor Value
 */
let Velocity = class Velocity {
  constructor(linear, angular) {
    this.linear = linear;
    this.angular = angular;
  }
  /**
   * Clone the velocity
   * @returns {Velocity} Cloned velocity object
   */
  clone() {
    return new this.constructor(this.linear ? this.linear.clone() : undefined, this.angular ? this.angular.clone() : undefined);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", _LinearVelocity__WEBPACK_IMPORTED_MODULE_2__.LinearVelocity)], Velocity.prototype, "linear", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", _AngularVelocity__WEBPACK_IMPORTED_MODULE_3__.AngularVelocity)], Velocity.prototype, "angular", void 0);
Velocity = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [_LinearVelocity__WEBPACK_IMPORTED_MODULE_2__.LinearVelocity, _AngularVelocity__WEBPACK_IMPORTED_MODULE_3__.AngularVelocity])], Velocity);

/***/ }),

/***/ "./dist/esm5/data/values/index.js":
/*!****************************************!*\
  !*** ./dist/esm5/data/values/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Acceleration: () => (/* reexport safe */ _Acceleration__WEBPACK_IMPORTED_MODULE_3__.Acceleration),
/* harmony export */   Accuracy: () => (/* reexport safe */ _Accuracy__WEBPACK_IMPORTED_MODULE_9__.Accuracy),
/* harmony export */   Accuracy1D: () => (/* reexport safe */ _Accuracy1D__WEBPACK_IMPORTED_MODULE_10__.Accuracy1D),
/* harmony export */   Accuracy2D: () => (/* reexport safe */ _Accuracy2D__WEBPACK_IMPORTED_MODULE_11__.Accuracy2D),
/* harmony export */   Accuracy3D: () => (/* reexport safe */ _Accuracy3D__WEBPACK_IMPORTED_MODULE_12__.Accuracy3D),
/* harmony export */   AngularVelocity: () => (/* reexport safe */ _AngularVelocity__WEBPACK_IMPORTED_MODULE_1__.AngularVelocity),
/* harmony export */   Humidity: () => (/* reexport safe */ _Humidity__WEBPACK_IMPORTED_MODULE_7__.Humidity),
/* harmony export */   LinearVelocity: () => (/* reexport safe */ _LinearVelocity__WEBPACK_IMPORTED_MODULE_2__.LinearVelocity),
/* harmony export */   Magnetism: () => (/* reexport safe */ _Magnetism__WEBPACK_IMPORTED_MODULE_4__.Magnetism),
/* harmony export */   Pressure: () => (/* reexport safe */ _Pressure__WEBPACK_IMPORTED_MODULE_8__.Pressure),
/* harmony export */   SensorValue: () => (/* reexport safe */ _SensorValue__WEBPACK_IMPORTED_MODULE_5__.SensorValue),
/* harmony export */   Temperature: () => (/* reexport safe */ _Temperature__WEBPACK_IMPORTED_MODULE_6__.Temperature),
/* harmony export */   Velocity: () => (/* reexport safe */ _Velocity__WEBPACK_IMPORTED_MODULE_0__.Velocity)
/* harmony export */ });
/* harmony import */ var _Velocity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Velocity */ "./dist/esm5/data/values/Velocity.js");
/* harmony import */ var _AngularVelocity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AngularVelocity */ "./dist/esm5/data/values/AngularVelocity.js");
/* harmony import */ var _LinearVelocity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearVelocity */ "./dist/esm5/data/values/LinearVelocity.js");
/* harmony import */ var _Acceleration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Acceleration */ "./dist/esm5/data/values/Acceleration.js");
/* harmony import */ var _Magnetism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Magnetism */ "./dist/esm5/data/values/Magnetism.js");
/* harmony import */ var _SensorValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SensorValue */ "./dist/esm5/data/values/SensorValue.js");
/* harmony import */ var _Temperature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Temperature */ "./dist/esm5/data/values/Temperature.js");
/* harmony import */ var _Humidity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Humidity */ "./dist/esm5/data/values/Humidity.js");
/* harmony import */ var _Pressure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pressure */ "./dist/esm5/data/values/Pressure.js");
/* harmony import */ var _Accuracy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Accuracy */ "./dist/esm5/data/values/Accuracy.js");
/* harmony import */ var _Accuracy1D__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Accuracy1D */ "./dist/esm5/data/values/Accuracy1D.js");
/* harmony import */ var _Accuracy2D__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Accuracy2D */ "./dist/esm5/data/values/Accuracy2D.js");
/* harmony import */ var _Accuracy3D__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Accuracy3D */ "./dist/esm5/data/values/Accuracy3D.js");














/***/ }),

/***/ "./dist/esm5/graph/Edge.js":
/*!*********************************!*\
  !*** ./dist/esm5/graph/Edge.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./dist/esm5/graph/events/PushError.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Edge provides the connection between two nodes
 * Nodes have access to inlet and outlet interfaces that only
 * allow functionality needed for the type of port.
 *
 * As a part of the graph that can not be modified, this object
 * has the ability to perform error handling.
 * @category Graph
 */
class Edge extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  constructor(inputNode, outputNode) {
    super();
    this.inputNode = inputNode;
    this.outputNode = outputNode;
    // Register default push and pull handling
    this.on('push', this._onPush.bind(this));
    this.on('pull', this._onPull.bind(this));
  }
  _onPush(data, options) {
    return this.outputNode.push(data, options);
  }
  _onPull(options) {
    return this.inputNode.pull(options);
  }
  /**
   * Push data to the output node
   * @param {DataFrame | DataFrame[]} data Data frame to push
   * @param {PushOptions} [options] Push options
   * @returns {Promise<void>} Push promise
   */
  push(data, options = {}) {
    return new Promise(resolve => {
      const newOptions = Object.assign(Object.assign({}, options), {
        lastNode: this.inputNode.uid
      });
      const pushListeners = this.listeners('push');
      Promise.all(pushListeners.map(listener => listener(data, newOptions))).then(() => {
        resolve();
      }).catch(ex => {
        // Error handling is done in the edge
        if (Array.isArray(data)) {
          data.forEach(frame => {
            this.inputNode.emit('error', new _events__WEBPACK_IMPORTED_MODULE_1__.PushError(frame.uid, this.outputNode.uid, ex));
          });
        } else {
          this.inputNode.emit('error', new _events__WEBPACK_IMPORTED_MODULE_1__.PushError(data.uid, this.outputNode.uid, ex));
        }
      });
    });
  }
  /**
   * Pull data from the input node
   * @param {PullOptions} [options] Pull options
   * @returns {Promise<void>} Pull promise
   */
  pull(options) {
    return new Promise((resolve, reject) => {
      const pullListeners = this.listeners('pull');
      Promise.all(pullListeners.map(listener => listener(options))).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  emit(name, event) {
    return this.inputNode.emit(name, event);
  }
  on(name, listener) {
    this.removeAllListeners(name);
    return super.on(name, listener);
  }
}

/***/ }),

/***/ "./dist/esm5/graph/_internal/GraphNode.js":
/*!************************************************!*\
  !*** ./dist/esm5/graph/_internal/GraphNode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphNode: () => (/* binding */ GraphNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal_AsyncEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_internal/AsyncEventEmitter */ "./dist/esm5/_internal/AsyncEventEmitter.js");




let GraphNode = class GraphNode extends _internal_AsyncEventEmitter__WEBPACK_IMPORTED_MODULE_0__.AsyncEventEmitter {
  constructor() {
    super();
    /**
     * Unique identifier of node.
     */
    this.uid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this._ready = false;
    this._available = true;
    this.prependOnceListener('ready', () => {
      this._ready = true;
    });
    this.on('error', this._onError.bind(this));
    this.on('completed', this._onCompleted.bind(this));
  }
  /**
   * Graph logger
   * @param {string} level Logging level
   * @param {string} message Message
   * @param {any} data Data to include in log
   */
  logger(level, message, data) {
    if (typeof message === 'object') {
      this.graph.logger(level, JSON.stringify(message));
    } else {
      this.graph.logger(level, message, data);
    }
  }
  isReady() {
    return this._ready;
  }
  /**
   * Check if the node is available for accepting push requests
   * @returns {boolean} Is the node available to push
   */
  isAvailable() {
    return this._available;
  }
  /**
   * Get the outgoing edges
   * @returns {Array<Outlet<DataFrame>>} Outgoing edges
   */
  get outlets() {
    return this.graph.edges.filter(edge => edge.inputNode.uid === this.uid);
  }
  /**
   * Get the incoming edges
   * @returns {Array<Inlet<DataFrame>>} Incoming edges
   */
  get inlets() {
    return this.graph.edges.filter(edge => edge.outputNode.uid === this.uid);
  }
  emit(name, ...args) {
    return super.emit(name, ...args);
  }
  on(name, listener) {
    return super.on(name, listener);
  }
  once(name, listener) {
    return super.once(name, listener);
  }
  /**
   * Send a pull request to the node
   * @param {PullOptions} [options] Pull options
   * @returns {Promise<void>} Pull promise
   */
  pull(options) {
    return new Promise((resolve, reject) => {
      const callbackPromises = [];
      this.listeners('pull').forEach(callback => {
        callbackPromises.push(callback(options));
      });
      if (callbackPromises.length === 0) {
        this.inlets.forEach(inlet => {
          callbackPromises.push(inlet.pull(options));
        });
      }
      Promise.all(callbackPromises).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  /**
   * Push data to the node
   * @param {DataFrame | DataFrame[]} data Data frame to push
   * @param {PushOptions} [options] Push options
   * @returns {Promise<void>} Push promise
   */
  push(data, options = {}) {
    return new Promise((resolve, reject) => {
      if (data === null || data === undefined) {
        return reject(new Error('Node received null data frame!'));
      }
      const listeners = this.listeners('push');
      if (listeners.length === 0) {
        // Forward push, resolve before outlets resolve
        this.outlets.forEach(outlet => outlet.push(data, options));
        resolve();
      } else {
        this._available = false;
        Promise.all(listeners.map(callback => callback(data, options))).then(() => {
          this._available = true;
          this.emit('available');
          resolve();
        }).catch(reject);
      }
    });
  }
  /**
   * Promise once the node is available
   * @returns {Promise} Promise when the node is available
   */
  onceAvailable() {
    return new Promise(resolve => {
      if (this.isAvailable()) {
        resolve();
      } else {
        this.once('available', () => {
          resolve();
        });
      }
    });
  }
  /**
   * Promise once the frame is completed
   * @param {string} frameUID Frame UID
   * @returns {Promise} Promise when the frame is completed
   */
  onceCompleted(frameUID) {
    return new Promise((resolve, reject) => {
      const completedListener = function (event) {
        if (event.frameUID === frameUID) {
          this.removeListener('completed', completedListener);
          this.removeListener('error', completedListener);
          if (event.error) {
            reject(event);
          } else {
            resolve(event);
          }
        }
      };
      this.on('completed', completedListener.bind(this));
      this.on('error', completedListener.bind(this));
    });
  }
  _onError(error) {
    this.inlets.forEach(inlet => inlet.emit('error', error));
  }
  _onCompleted(event) {
    this.inlets.forEach(inlet => inlet.emit('completed', event));
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], GraphNode.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], GraphNode.prototype, "uid", void 0);
GraphNode = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], GraphNode);

/***/ }),

/***/ "./dist/esm5/graph/_internal/implementations/GraphShape.js":
/*!*****************************************************************!*\
  !*** ./dist/esm5/graph/_internal/implementations/GraphShape.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphShape: () => (/* binding */ GraphShape)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _GraphNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GraphNode */ "./dist/esm5/graph/_internal/GraphNode.js");
/* harmony import */ var _nodes_shapes_BroadcastNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../nodes/shapes/BroadcastNode */ "./dist/esm5/nodes/shapes/BroadcastNode.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Edge */ "./dist/esm5/graph/Edge.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Node */ "./dist/esm5/Node.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/decorators */ "./dist/esm5/data/decorators/SerializableMapMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data */ "./dist/esm5/data/DataSerializer.js");







/**
 * @category Graph
 */
let GraphShape = class GraphShape extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor() {
    super();
    this._nodes = new Map();
    this._edges = new Map();
    this.internalSource = new _nodes_shapes_BroadcastNode__WEBPACK_IMPORTED_MODULE_1__.BroadcastNode();
    this.internalSink = new _nodes_shapes_BroadcastNode__WEBPACK_IMPORTED_MODULE_1__.BroadcastNode();
    /**
     * Graph logger
     * @returns {(level: string, message: string, data?: any) => void} logger function
     */
    this.logger = () => undefined;
    // Internal input and output nodes
    this.addNode(this.internalSource);
    this.addNode(this.internalSink);
    // Graph building and destroying
    this.once('build', this._onBuild.bind(this));
    this.once('destroy', this._onDestroy.bind(this));
    // Error handling
    this.removeAllListeners('error');
    this.internalSource.on('error', this.onError.bind(this));
    this.internalSink.on('error', this.onError.bind(this));
    // Completed event
    this.removeAllListeners('completed');
    this.internalSource.on('completed', this.onCompleted.bind(this));
    this.internalSink.on('completed', this.onCompleted.bind(this));
  }
  _onDestroy() {
    this.nodes.forEach(node => {
      node.emit('destroy');
    });
  }
  _onBuild(_) {
    return new Promise((resolve, reject) => {
      Promise.all(this.nodes.map(node => node.emitAsync('build', _))).then(() => {
        this.emit('ready');
        resolve();
      }).catch(ex => {
        reject(ex);
      });
    });
  }
  get edges() {
    return this._edges ? Array.from(this._edges.values()) : [];
  }
  set edges(edges) {
    edges.forEach(this.addEdge);
  }
  get nodes() {
    return this._nodes ? Array.from(this._nodes.values()) : [];
  }
  set nodes(nodes) {
    nodes.forEach(this.addNode);
  }
  findNodeByUID(uid) {
    return this._nodes.get(uid);
  }
  findNodeByName(name) {
    let result;
    this._nodes.forEach(node => {
      if (node.name === name) {
        result = node;
        return;
      }
    });
    return result;
  }
  addNode(node) {
    node.graph = this.graph === undefined ? this : this.model;
    this._nodes.set(node.uid, node);
  }
  addEdge(edge) {
    this._edges.set(edge.inputNode.uid + edge.outputNode.uid, edge);
  }
  deleteEdge(edge) {
    this._edges.delete(edge.inputNode.uid + edge.outputNode.uid);
  }
  deleteNode(node) {
    this._nodes.delete(node.uid);
  }
  /**
   * Find an edge by the identifiers of its inlet and outlet
   * @param {string} inlet Node uid of inlet
   * @param {string} outlet Node uid of outlet
   * @returns {Edge<any>} Edge
   */
  findEdge(inlet, outlet) {
    return this._edges.get(inlet + outlet);
  }
  /**
   * Send a pull request to the graph
   * @param {PullOptions} [options] Pull options
   * @returns {Promise<void>} Pull promise
   */
  pull(options) {
    return this.internalSink.pull(options);
  }
  /**
   * Push data to the graph
   * @param {DataFrame | DataFrame[]} frame Data frame to push
   * @param {PushOptions} [options] Push options
   * @returns {Promise<void>} Push promise
   */
  push(frame, options) {
    return this.internalSource.push(frame, options);
  }
  onError(event) {
    // Do not emit if no listeners attached
    // Event emitter will throw an uncaught exception
    if (this.listenerCount('error') > 0) this.emit('error', event);
  }
  onCompleted(event) {
    this.emit('completed', event);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMapMember)(String, _GraphNode__WEBPACK_IMPORTED_MODULE_4__.GraphNode, {
  name: 'nodes'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Map)], GraphShape.prototype, "_nodes", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMapMember)(String, _Edge__WEBPACK_IMPORTED_MODULE_5__.Edge, {
  serializer: edges => {
    return Array.from(edges.values()).map(edge => ({
      input: edge.inputNode.uid,
      output: edge.outputNode.uid
    }));
  },
  name: 'edges'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Map)], GraphShape.prototype, "_edges", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  serializer: node => node.uid,
  deserializer: () => {
    return undefined;
  }
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _GraphNode__WEBPACK_IMPORTED_MODULE_4__.GraphNode)], GraphShape.prototype, "internalSource", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  serializer: node => node.uid,
  deserializer: () => {
    return undefined;
  }
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _GraphNode__WEBPACK_IMPORTED_MODULE_4__.GraphNode)], GraphShape.prototype, "internalSink", void 0);
GraphShape = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableObject)({
  initializer: (sourceObject, raw) => {
    const expectedType = _data__WEBPACK_IMPORTED_MODULE_8__.DataSerializer.findTypeByName(raw.__type);
    const targetObject = new expectedType();
    Object.assign(targetObject, sourceObject);
    raw.edges.forEach(edge => {
      targetObject._edges.set(edge.input + edge.output, new _Edge__WEBPACK_IMPORTED_MODULE_5__.Edge(sourceObject._nodes.get(edge.input), sourceObject._nodes.get(edge.output)));
    });
    return targetObject;
  }
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], GraphShape);

/***/ }),

/***/ "./dist/esm5/graph/_internal/implementations/GraphValidator.js":
/*!*********************************************************************!*\
  !*** ./dist/esm5/graph/_internal/implementations/GraphValidator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphValidator: () => (/* binding */ GraphValidator)
/* harmony export */ });
class GraphValidator {
  static validate(graph) {
    this.validateNodes(graph);
    this.validateEdges(graph);
  }
  static _validateInternalNode(graph, node) {
    if (node.outlets.length === 0 && node.inlets.length === 0) {
      graph.deleteNode(node);
    } else if (!graph.findNodeByUID(node.uid)) {
      throw new Error(`Internal node ${node.uid} (${node.name}) is not connected to the graph!`);
    }
  }
  static validateNodes(graph) {
    GraphValidator._validateInternalNode(graph, graph.internalSource);
    GraphValidator._validateInternalNode(graph, graph.internalSink);
    graph.nodes.forEach(node => {
      if (node.graph === undefined) {
        throw new Error(`Node ${node.uid} (${node.name}) does not have a graph set!`);
      }
      if (node.inlets.length === 0 && node.outlets.length === 0) {
        throw new Error(`Node ${node.uid} (${node.name}) is not connected to the graph!`);
      }
    });
  }
  static validateEdges(graph) {
    graph.edges.forEach(edge => {
      if (!graph.findNodeByUID(edge.inputNode.uid)) {
        throw new Error(`Node ${edge.inputNode.uid} (${edge.inputNode.name}) is used in an edge but not added to the graph!`);
      } else if (!graph.findNodeByUID(edge.outputNode.uid)) {
        throw new Error(`Node ${edge.outputNode.uid} (${edge.outputNode.name}) is used in an edge but not added to the graph!`);
      }
    });
  }
}

/***/ }),

/***/ "./dist/esm5/graph/_internal/implementations/ModelGraph.js":
/*!*****************************************************************!*\
  !*** ./dist/esm5/graph/_internal/implementations/ModelGraph.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelGraph: () => (/* binding */ ModelGraph)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/object */ "./dist/esm5/data/object/space/ReferenceSpace.js");
/* harmony import */ var _service_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/Service */ "./dist/esm5/service/Service.js");
/* harmony import */ var _service_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/DataService */ "./dist/esm5/service/DataService.js");
/* harmony import */ var _GraphShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphShape */ "./dist/esm5/graph/_internal/implementations/GraphShape.js");
/* harmony import */ var _service_internal_ServiceProxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/_internal/ServiceProxy */ "./dist/esm5/service/_internal/ServiceProxy.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/decorators */ "./dist/esm5/data/decorators/SerializableMapMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _service_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/_internal */ "./dist/esm5/service/_internal/DataServiceProxy.js");








/**
 * [[Model]] implementation
 */
let ModelGraph = class ModelGraph extends _GraphShape__WEBPACK_IMPORTED_MODULE_0__.GraphShape {
  /**
   * Create a new OpenHPS model
   * @param {string} name Model name
   */
  constructor(name = 'model') {
    super();
    this._services = new Map();
    this._dataServices = new Map();
    this.name = name;
    this.referenceSpace = new _data_object__WEBPACK_IMPORTED_MODULE_1__.ReferenceSpace(undefined);
    this.removeAllListeners('build');
    this.removeAllListeners('destroy');
    this.once('build', this._onModelBuild.bind(this));
    this.once('destroy', this._onModelDestroy.bind(this));
  }
  _onModelBuild(_) {
    return new Promise((resolve, reject) => {
      this.emit('prebuild', _);
      // First resolve the building of services
      this._buildServices().then(() => {
        for (const service of this.findAllServices()) {
          if (!service.isReady()) {
            service.emit('ready');
          }
        }
        // Build nodes
        return this._buildNodes(_);
      }).then(() => {
        for (const node of this.nodes) {
          if (!node.isReady()) {
            node.emit('ready');
          }
        }
        this.emit('ready');
        this.emit('postbuild', this);
        resolve();
      }).catch(reject);
    });
  }
  _buildServices() {
    return new Promise((resolve, reject) => {
      const buildPromises = [];
      this._services.forEach(service => {
        if (!service.isReady()) {
          buildPromises.push(service.emitAsync('build'));
        }
      });
      this._dataServices.forEach(service => {
        if (!service.isReady()) {
          buildPromises.push(service.emitAsync('build'));
        }
      });
      Promise.all(buildPromises).then(() => resolve()).catch(reject);
    });
  }
  _buildNodes(_) {
    return new Promise((resolve, reject) => {
      const buildPromises = [];
      this.nodes.forEach(node => {
        if (!node.isReady()) {
          buildPromises.push(node.emitAsync('build', _));
        }
      });
      Promise.all(buildPromises).then(() => resolve()).catch(reject);
    });
  }
  _onModelDestroy(_) {
    return new Promise((resolve, reject) => {
      const destroyPromises = [];
      this._services.forEach(service => {
        destroyPromises.push(service.emitAsync('destroy', _));
      });
      this._dataServices.forEach(service => {
        destroyPromises.push(service.emitAsync('destroy', _));
      });
      this.nodes.forEach(node => {
        destroyPromises.push(node.emitAsync('destroy', _));
      });
      Promise.all(destroyPromises).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  findService(q) {
    let result = undefined;
    if (!q) {
      return undefined;
    } else if (typeof q === 'string') {
      result = this._services.get(q);
    } else {
      result = Array.from(this._services.values()).filter(s => s instanceof q)[0];
    }
    if (!result) {
      result = this.findDataService(q);
    }
    return result;
  }
  findDataService(q) {
    let result;
    if (q === undefined) {
      result = undefined;
    } else if (typeof q === 'string') {
      // Find by name
      result = this._findDataServiceByUID(q);
    } else if (q.prototype instanceof _service_DataService__WEBPACK_IMPORTED_MODULE_2__.DataService) {
      // Find by data service class
      result = this.findAllServices(q)[0];
    } else if (q instanceof Function) {
      // Find by constructor
      result = this.findAllDataServices(q)[0];
    } else {
      // Find by instance
      result = this.findDataService(q.constructor);
    }
    return result;
  }
  _findDataServiceByUID(uid) {
    return Array.from(this._dataServices.values()).filter(s => s.uid === uid)[0];
  }
  /**
   * Find all services and data services
   * @param {typeof Service} [q] Service class
   * @returns {Service[]} Array of all services
   */
  findAllServices(q) {
    if (q !== undefined) {
      return this.findAllServices().filter(s => s instanceof q) || [];
    } else {
      return Array.from(this._services.values()).concat(Array.from(this._dataServices.values())) || [];
    }
  }
  /**
   * Find all data services by data type
   * @param {typeof Service} [q] data type class
   * @returns {Service[]} Array of all services
   */
  findAllDataServices(q) {
    if (q !== undefined) {
      return this.findAllDataServices().map(s => [s, ...this._instanceofPriority(q, s['target'].dataType)]).filter(s => s[1]).sort((a, b) => a[2] === b[2] ? b[0].priority - a[0].priority : a[2] - b[2]).map(s => s[0]) || [];
    } else {
      return Array.from(this._dataServices.values()) || [];
    }
  }
  _instanceofPriority(obj, constr) {
    if (obj === constr) {
      return [true, 0];
    }
    let level = 1;
    while (obj = Object.getPrototypeOf(obj)) {
      if (obj === constr) {
        return [true, level];
      }
      level++;
    }
    return [false, undefined];
  }
  /**
   * Add service to model
   * @param {Service} service Service to add
   * @param {ProxyHandler} [proxy] Proxy handler
   */
  addService(service, proxy) {
    service.model = this.graph === undefined ? this : this.model;
    if (service instanceof _service_DataService__WEBPACK_IMPORTED_MODULE_2__.DataService) {
      // Data service
      this._dataServices.set(service.uid, new Proxy(service, proxy || new _service_internal__WEBPACK_IMPORTED_MODULE_3__.DataServiceProxy()));
    } else {
      // Normal service
      this._services.set(service.uid, new Proxy(service, proxy || new _service_internal_ServiceProxy__WEBPACK_IMPORTED_MODULE_4__.ServiceProxy()));
    }
  }
  push(frame, options) {
    return new Promise((resolve, reject) => {
      const servicePromises = [];
      // Merge the changes in the frame service
      const frameService = this.findDataService(frame.constructor.name);
      if (frameService) {
        if (Array.isArray(frame)) {
          frame.forEach(f => {
            // Update the frame
            servicePromises.push(frameService.insert(f.uid, frame));
          });
        } else {
          // Update the frame
          servicePromises.push(frameService.insert(frame.uid, frame));
        }
      }
      Promise.all(servicePromises).then(() => this.internalSource.push(frame, options)).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  destroy() {
    return this.emitAsync('destroy');
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMapMember)(String, _service_Service__WEBPACK_IMPORTED_MODULE_7__.Service, {
  name: 'services'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Map)], ModelGraph.prototype, "_services", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMapMember)(String, _service_DataService__WEBPACK_IMPORTED_MODULE_2__.DataService, {
  name: 'dataServices'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Map)], ModelGraph.prototype, "_dataServices", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _data_object__WEBPACK_IMPORTED_MODULE_1__.ReferenceSpace)], ModelGraph.prototype, "referenceSpace", void 0);
ModelGraph = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_9__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [Object])], ModelGraph);

/***/ }),

/***/ "./dist/esm5/graph/builders/GraphBuilder.js":
/*!**************************************************!*\
  !*** ./dist/esm5/graph/builders/GraphBuilder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphBuilder: () => (/* binding */ GraphBuilder),
/* harmony export */   GraphShapeBuilder: () => (/* binding */ GraphShapeBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/TimeUnit.js");
/* harmony import */ var _internal_implementations_GraphShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_internal/implementations/GraphShape */ "./dist/esm5/graph/_internal/implementations/GraphShape.js");
/* harmony import */ var _nodes_internal_PlaceholderNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nodes/_internal/PlaceholderNode */ "./dist/esm5/nodes/_internal/PlaceholderNode.js");
/* harmony import */ var _nodes_SourceNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/SourceNode */ "./dist/esm5/nodes/SourceNode.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Edge */ "./dist/esm5/graph/Edge.js");
/* harmony import */ var _internal_implementations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_internal/implementations */ "./dist/esm5/graph/_internal/implementations/GraphValidator.js");






/**
 * Graph builder
 * @category Graph
 */
class GraphBuilder {
  constructor(graph = new _internal_implementations_GraphShape__WEBPACK_IMPORTED_MODULE_0__.GraphShape()) {
    this.graph = graph;
    this.graph.name = 'graph';
  }
  static create() {
    return new GraphBuilder();
  }
  on(name, listener) {
    this.graph.once(name, listener);
    return this;
  }
  from(...nodes) {
    const selectedNodes = [];
    nodes.forEach(node => {
      if (node === undefined) {
        throw new Error('Undefined node was provided as a source!');
      } else if (typeof node === 'string') {
        let nodeObject = this.graph.findNodeByUID(node) || this.graph.findNodeByName(node);
        if (nodeObject === undefined) {
          // Add a placeholder
          nodeObject = new _nodes_internal_PlaceholderNode__WEBPACK_IMPORTED_MODULE_1__.PlaceholderNode(node);
        }
        this.graph.addNode(nodeObject);
        selectedNodes.push(nodeObject);
      } else {
        this.graph.addNode(node);
        if (node instanceof _nodes_SourceNode__WEBPACK_IMPORTED_MODULE_2__.SourceNode) {
          this.graph.addEdge(new _Edge__WEBPACK_IMPORTED_MODULE_3__.Edge(this.graph.internalSource, node));
        }
        selectedNodes.push(node);
      }
    });
    return new GraphShapeBuilder(this, this.graph, selectedNodes.length === 0 ? [this.graph.internalSource] : selectedNodes);
  }
  addNode(node) {
    this.graph.addNode(node);
    return this;
  }
  addEdge(edge) {
    this.graph.addEdge(edge);
    return this;
  }
  deleteEdge(edge) {
    this.graph.deleteEdge(edge);
    return this;
  }
  deleteNode(node) {
    this.graph.deleteNode(node);
    return this;
  }
  /**
   * Add graph shape to graph
   * @param {GraphBuilder | GraphShape} shape Graph builder or abstract graph
   * @returns {GraphBuilder} Current graph builder instance
   */
  addShape(shape) {
    let graph;
    if (shape instanceof GraphBuilder) {
      graph = shape.graph;
    } else {
      graph = shape;
    }
    // Add the graph node and edges
    graph.nodes.forEach(node => {
      // Check if the node is a placeholder
      if (node instanceof _nodes_internal_PlaceholderNode__WEBPACK_IMPORTED_MODULE_1__.PlaceholderNode) {
        // Try to find a node with the same uid/name as the placeholder node
        const existingNode = this.graph.findNodeByUID(node.name) || this.graph.findNodeByName(node.name);
        if (existingNode) {
          // Edit the edges connected to this placeholder
          const outputEdges = graph.edges.filter(edge => edge.inputNode === node);
          const inputEdges = graph.edges.filter(edge => edge.outputNode === node);
          outputEdges.map(edge => edge.inputNode = existingNode);
          inputEdges.map(edge => edge.outputNode = existingNode);
          this.addNode(existingNode);
        } else {
          // Add the node as a placeholder
          this.addNode(node);
        }
      } else {
        this.addNode(node);
      }
    });
    graph.edges.forEach(edge => {
      this.addEdge(edge);
    });
    // Connect internal and external output to shape
    this.graph.addEdge(new _Edge__WEBPACK_IMPORTED_MODULE_3__.Edge(this.graph.internalSource, graph.internalSource));
    this.graph.addEdge(new _Edge__WEBPACK_IMPORTED_MODULE_3__.Edge(graph.internalSink, this.graph.internalSink));
    return this;
  }
  build() {
    return new Promise((resolve, reject) => {
      _internal_implementations__WEBPACK_IMPORTED_MODULE_4__.GraphValidator.validate(this.graph);
      this.graph.once('ready', () => {
        resolve(this.graph);
      });
      this.graph.emitAsync('build', this).catch(ex => {
        // Destroy model
        this.graph.emit('destroy');
        reject(ex);
      });
    });
  }
}
class GraphShapeBuilder {
  constructor(graphBuilder, graph, nodes) {
    this.graphBuilder = graphBuilder;
    this.previousNodes = nodes;
    this.graph = graph;
  }
  viaGraph(graph) {
    // Add graph as node
    graph.nodes.forEach(node => {
      node.graph = this.graph;
      this.graph.addNode(node);
    });
    graph.edges.forEach(edge => {
      this.graph.addEdge(edge);
    });
    this._insertNode(graph.internalSource);
    return graph.internalSink;
  }
  via(...nodes) {
    const selectedNodes = [];
    nodes.forEach(node => {
      if (node === undefined) {
        throw new Error('Undefined node was provided!');
      } else if (node instanceof GraphBuilder) {
        selectedNodes.push(this.viaGraph(node.graph));
      } else if (node instanceof _internal_implementations_GraphShape__WEBPACK_IMPORTED_MODULE_0__.GraphShape) {
        selectedNodes.push(this.viaGraph(node));
      } else {
        let nodeObject;
        if (typeof node === 'string') {
          nodeObject = this.graph.findNodeByUID(node) || this.graph.findNodeByName(node);
          if (nodeObject === undefined) {
            // Add a placeholder
            nodeObject = new _nodes_internal_PlaceholderNode__WEBPACK_IMPORTED_MODULE_1__.PlaceholderNode(node);
          }
        } else {
          nodeObject = node;
        }
        this.graph.addNode(nodeObject);
        this._insertNode(nodeObject);
        selectedNodes.push(nodeObject);
      }
    });
    this.previousNodes = selectedNodes;
    return this;
  }
  /**
   * Insert a new node in the existing graph
   * @param {Node} node Node to insert
   */
  _insertNode(node) {
    this.previousNodes.forEach(prevNode => {
      this.graph.addEdge(new _Edge__WEBPACK_IMPORTED_MODULE_3__.Edge(prevNode, node));
    });
  }
  static registerShape(key, fn) {
    GraphShapeBuilder.shapes.set(key, fn);
  }
  chunk(size, timeout, timeoutUnit) {
    return this.via(GraphShapeBuilder.shapes.get('chunk')(size, timeout, timeoutUnit));
  }
  flatten() {
    return this.via(GraphShapeBuilder.shapes.get('flatten')());
  }
  filter(filterFn) {
    return this.via(GraphShapeBuilder.shapes.get('filter')(filterFn));
  }
  /**
   * Filter objects inside frames
   * @param {Function} filterFn Filter function (true to keep, false to remove)
   * @returns {GraphShapeBuilder} Current graph builder instance
   */
  filterObjects(filterFn) {
    return this.via(GraphShapeBuilder.shapes.get('filterObjects')(filterFn));
  }
  /**
   * Merge objects
   * @param {Function} by Merge key
   * @param {number} timeout Timeout
   * @param {TimeUnit} timeoutUnit Timeout unit
   * @returns {GraphShapeBuilder} Current graph shape builder
   */
  merge(by = () => true, timeout = 100, timeoutUnit = _utils__WEBPACK_IMPORTED_MODULE_5__.TimeUnit.MILLISECOND) {
    return this.via(GraphShapeBuilder.shapes.get('merge')(by, timeout, timeoutUnit));
  }
  debounce(timeout = 100, timeoutUnit = _utils__WEBPACK_IMPORTED_MODULE_5__.TimeUnit.MILLISECOND) {
    return this.via(GraphShapeBuilder.shapes.get('debounce')(timeout, timeoutUnit));
  }
  delay(timeout = 100, timeoutUnit = _utils__WEBPACK_IMPORTED_MODULE_5__.TimeUnit.MILLISECOND) {
    return this.via(GraphShapeBuilder.shapes.get('delay')(timeout, timeoutUnit));
  }
  /**
   * Clone frames
   * @returns {GraphShapeBuilder} Current graph shape builder
   */
  clone() {
    return this.via(GraphShapeBuilder.shapes.get('clone')());
  }
  /**
   * Convert positions of all objects to a certain reference space
   * @param {ReferenceSpace | string} referenceSpace Reference space to convert to
   * @returns {GraphShapeBuilder} Current graph shape builder
   */
  convertToSpace(referenceSpace) {
    return this.via(GraphShapeBuilder.shapes.get('convertToSpace')(referenceSpace));
  }
  /**
   * Convert positions of all objects from a certain reference space
   * @param {ReferenceSpace | string} referenceSpace Reference space to convert from
   * @returns {GraphShapeBuilder} Current graph shape builder
   */
  convertFromSpace(referenceSpace) {
    return this.via(GraphShapeBuilder.shapes.get('convertFromSpace')(referenceSpace));
  }
  /**
   * Buffer pushed objects
   * @returns {GraphShapeBuilder} Current graph shape builder
   */
  buffer() {
    return this.via(GraphShapeBuilder.shapes.get('buffer')());
  }
  /**
   * Storage as sink node
   * @returns {GraphBuilder} Graph builder
   */
  store() {
    return this.to(GraphShapeBuilder.shapes.get('store')());
  }
  to(...nodes) {
    if (nodes.length !== 0) {
      const selectedNodes = [];
      nodes.forEach(node => {
        let nodeObject;
        if (node === undefined) {
          throw new Error('Undefined node was provided as a sink!');
        } else if (typeof node === 'string') {
          nodeObject = this.graph.findNodeByUID(node) || this.graph.findNodeByName(node);
          if (nodeObject === undefined) {
            // Add a placeholder
            nodeObject = new _nodes_internal_PlaceholderNode__WEBPACK_IMPORTED_MODULE_1__.PlaceholderNode(node);
          }
        } else {
          nodeObject = node;
        }
        this.graph.addNode(nodeObject);
        this._insertNode(nodeObject);
        this.graph.addEdge(new _Edge__WEBPACK_IMPORTED_MODULE_3__.Edge(nodeObject, this.graph.internalSink));
        selectedNodes.push(nodeObject);
      });
      this.previousNodes = selectedNodes;
    } else {
      this._insertNode(this.graph.internalSink);
    }
    return this.graphBuilder;
  }
}
GraphShapeBuilder.shapes = new Map();

/***/ }),

/***/ "./dist/esm5/graph/builders/index.js":
/*!*******************************************!*\
  !*** ./dist/esm5/graph/builders/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphBuilder: () => (/* reexport safe */ _GraphBuilder__WEBPACK_IMPORTED_MODULE_0__.GraphBuilder),
/* harmony export */   GraphShapeBuilder: () => (/* reexport safe */ _GraphBuilder__WEBPACK_IMPORTED_MODULE_0__.GraphShapeBuilder)
/* harmony export */ });
/* harmony import */ var _GraphBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphBuilder */ "./dist/esm5/graph/builders/GraphBuilder.js");



/***/ }),

/***/ "./dist/esm5/graph/events/PushError.js":
/*!*********************************************!*\
  !*** ./dist/esm5/graph/events/PushError.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushError: () => (/* binding */ PushError)
/* harmony export */ });
/**
 * Push error
 * @category Graph
 */
class PushError extends Error {
  constructor(frameUID, nodeUID, error) {
    super();
    this.frameUID = frameUID;
    this.nodeUID = nodeUID;
    this.name = error.name;
    this.message = error.message;
    this.stack = error.stack;
  }
}

/***/ }),

/***/ "./dist/esm5/graph/events/index.js":
/*!*****************************************!*\
  !*** ./dist/esm5/graph/events/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushError: () => (/* reexport safe */ _PushError__WEBPACK_IMPORTED_MODULE_0__.PushError)
/* harmony export */ });
/* harmony import */ var _PushError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PushError */ "./dist/esm5/graph/events/PushError.js");




/***/ }),

/***/ "./dist/esm5/graph/index.js":
/*!**********************************!*\
  !*** ./dist/esm5/graph/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* reexport safe */ _Edge__WEBPACK_IMPORTED_MODULE_2__.Edge),
/* harmony export */   GraphBuilder: () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.GraphBuilder),
/* harmony export */   GraphShapeBuilder: () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.GraphShapeBuilder),
/* harmony export */   PushError: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_1__.PushError)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./dist/esm5/graph/builders/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./dist/esm5/graph/events/index.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edge */ "./dist/esm5/graph/Edge.js");








/***/ }),

/***/ "./dist/esm5/index.lite.js":
/*!*********************************!*\
  !*** ./dist/esm5/index.lite.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Absolute2DPosition: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Absolute2DPosition),
/* harmony export */   Absolute3DPosition: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Absolute3DPosition),
/* harmony export */   AbsoluteOrientationSensor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.AbsoluteOrientationSensor),
/* harmony export */   AbsolutePosition: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.AbsolutePosition),
/* harmony export */   Acceleration: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Acceleration),
/* harmony export */   AccelerationUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.AccelerationUnit),
/* harmony export */   Accelerometer: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Accelerometer),
/* harmony export */   Accuracy: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Accuracy),
/* harmony export */   Accuracy1D: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Accuracy1D),
/* harmony export */   Accuracy2D: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Accuracy2D),
/* harmony export */   Accuracy3D: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Accuracy3D),
/* harmony export */   AccuracyModifierNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.AccuracyModifierNode),
/* harmony export */   AngleUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.AngleUnit),
/* harmony export */   AngularVelocity: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.AngularVelocity),
/* harmony export */   AngularVelocityUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.AngularVelocityUnit),
/* harmony export */   AxisAngle: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.AxisAngle),
/* harmony export */   BufferUtils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.BufferUtils),
/* harmony export */   CANBERRA: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.CANBERRA),
/* harmony export */   CHEBYSHEV: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.CHEBYSHEV),
/* harmony export */   CalibrationNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.CalibrationNode),
/* harmony export */   CalibrationService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.CalibrationService),
/* harmony export */   CallbackNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.CallbackNode),
/* harmony export */   CallbackSinkNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.CallbackSinkNode),
/* harmony export */   CallbackSourceNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.CallbackSourceNode),
/* harmony export */   CellIdentificationNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.CellIdentificationNode),
/* harmony export */   ConcreteTypeDescriptor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.ConcreteTypeDescriptor),
/* harmony export */   DataFrame: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.DataFrame),
/* harmony export */   DataFrameService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.DataFrameService),
/* harmony export */   DataObject: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.DataObject),
/* harmony export */   DataObjectService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.DataObjectService),
/* harmony export */   DataSerializer: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.DataSerializer),
/* harmony export */   DataSerializerUtils: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.DataSerializerUtils),
/* harmony export */   DataService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.DataService),
/* harmony export */   DataServiceDriver: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.DataServiceDriver),
/* harmony export */   DerivedUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.DerivedUnit),
/* harmony export */   Deserializer: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Deserializer),
/* harmony export */   DummyDataService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.DummyDataService),
/* harmony export */   DummyService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.DummyService),
/* harmony export */   EMAFilterNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.EMAFilterNode),
/* harmony export */   EUCLIDEAN: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.EUCLIDEAN),
/* harmony export */   Edge: () => (/* reexport safe */ _graph__WEBPACK_IMPORTED_MODULE_1__.Edge),
/* harmony export */   Euler: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Euler),
/* harmony export */   FilterProcessingNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.FilterProcessingNode),
/* harmony export */   GCS: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.GCS),
/* harmony export */   GeographicalPosition: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.GeographicalPosition),
/* harmony export */   GraphBuilder: () => (/* reexport safe */ _graph__WEBPACK_IMPORTED_MODULE_1__.GraphBuilder),
/* harmony export */   GraphShapeBuilder: () => (/* reexport safe */ _graph__WEBPACK_IMPORTED_MODULE_1__.GraphShapeBuilder),
/* harmony export */   GraphShapeNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.GraphShapeNode),
/* harmony export */   GravitySensor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.GravitySensor),
/* harmony export */   Gyroscope: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Gyroscope),
/* harmony export */   HAVERSINE: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.HAVERSINE),
/* harmony export */   HPFilterNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.HPFilterNode),
/* harmony export */   HistorySourceNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.HistorySourceNode),
/* harmony export */   Humidity: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Humidity),
/* harmony export */   KalmanFilter: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.KalmanFilter),
/* harmony export */   KalmanFilterNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.KalmanFilterNode),
/* harmony export */   KeyValueDataService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.KeyValueDataService),
/* harmony export */   LPFilterNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.LPFilterNode),
/* harmony export */   LengthUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.LengthUnit),
/* harmony export */   LinearAccelerationSensor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.LinearAccelerationSensor),
/* harmony export */   LinearVelocity: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.LinearVelocity),
/* harmony export */   LinearVelocitySensor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.LinearVelocitySensor),
/* harmony export */   LinearVelocityUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.LinearVelocityUnit),
/* harmony export */   ListSourceNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.ListSourceNode),
/* harmony export */   LocationBasedService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.LocationBasedService),
/* harmony export */   LoggingSinkNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.LoggingSinkNode),
/* harmony export */   LuminanceIntensityUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.LuminanceIntensityUnit),
/* harmony export */   LuminanceUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.LuminanceUnit),
/* harmony export */   MANHATTAN: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.MANHATTAN),
/* harmony export */   Magnetism: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Magnetism),
/* harmony export */   MagnetismUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.MagnetismUnit),
/* harmony export */   Magnetometer: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Magnetometer),
/* harmony export */   Matrix3: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Matrix3),
/* harmony export */   Matrix4: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Matrix4),
/* harmony export */   MemoryDataService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.MemoryDataService),
/* harmony export */   MemoryQueryEvaluator: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.MemoryQueryEvaluator),
/* harmony export */   ModelBuilder: () => (/* reexport safe */ _ModelBuilder__WEBPACK_IMPORTED_MODULE_6__.ModelBuilder),
/* harmony export */   ModelSerializer: () => (/* reexport safe */ _ModelSerializer__WEBPACK_IMPORTED_MODULE_8__.ModelSerializer),
/* harmony export */   MultilaterationNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.MultilaterationNode),
/* harmony export */   Node: () => (/* reexport safe */ _Node__WEBPACK_IMPORTED_MODULE_3__.Node),
/* harmony export */   NodeData: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.NodeData),
/* harmony export */   NodeDataService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.NodeDataService),
/* harmony export */   NumberType: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.NumberType),
/* harmony export */   ObjectProcessingNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.ObjectProcessingNode),
/* harmony export */   Orientation: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Orientation),
/* harmony export */   Pose: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Pose),
/* harmony export */   Pressure: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Pressure),
/* harmony export */   PressureUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.PressureUnit),
/* harmony export */   ProcessingNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.ProcessingNode),
/* harmony export */   PropertyFilterProcessingNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.PropertyFilterProcessingNode),
/* harmony export */   PushError: () => (/* reexport safe */ _graph__WEBPACK_IMPORTED_MODULE_1__.PushError),
/* harmony export */   Quaternion: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Quaternion),
/* harmony export */   ReferenceSpace: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.ReferenceSpace),
/* harmony export */   ReferenceSpaceConversionNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.ReferenceSpaceConversionNode),
/* harmony export */   RelativeAngle: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.RelativeAngle),
/* harmony export */   RelativeAngularVelocity: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.RelativeAngularVelocity),
/* harmony export */   RelativeDistance: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.RelativeDistance),
/* harmony export */   RelativeLinearVelocity: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.RelativeLinearVelocity),
/* harmony export */   RelativeOrientationSensor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.RelativeOrientationSensor),
/* harmony export */   RelativePosition: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.RelativePosition),
/* harmony export */   RelativePositionFilter: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.RelativePositionFilter),
/* harmony export */   RelativePositionProcessing: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.RelativePositionProcessing),
/* harmony export */   RemoteNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.RemoteNode),
/* harmony export */   RemoteService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.RemoteService),
/* harmony export */   RemoteServiceProxy: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.RemoteServiceProxy),
/* harmony export */   RemoteSinkNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.RemoteSinkNode),
/* harmony export */   RemoteSourceNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.RemoteSourceNode),
/* harmony export */   SMAFilterNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.SMAFilterNode),
/* harmony export */   SensorCalibrationData: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SensorCalibrationData),
/* harmony export */   SensorObject: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SensorObject),
/* harmony export */   SensorValue: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SensorValue),
/* harmony export */   SerializableArrayMember: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializableArrayMember),
/* harmony export */   SerializableMapMember: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializableMapMember),
/* harmony export */   SerializableMember: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializableMember),
/* harmony export */   SerializableMemberFunction: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializableMemberFunction),
/* harmony export */   SerializableObject: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializableObject),
/* harmony export */   SerializableSetMember: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializableSetMember),
/* harmony export */   SerializationUtils: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.SerializationUtils),
/* harmony export */   Serializer: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Serializer),
/* harmony export */   Service: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.Service),
/* harmony export */   SinkNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.SinkNode),
/* harmony export */   SourceNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.SourceNode),
/* harmony export */   Temperature: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Temperature),
/* harmony export */   TemperatureUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.TemperatureUnit),
/* harmony export */   TimeService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.TimeService),
/* harmony export */   TimeUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.TimeUnit),
/* harmony export */   Trajectory: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Trajectory),
/* harmony export */   TrajectoryService: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.TrajectoryService),
/* harmony export */   TriangulationNode: () => (/* reexport safe */ _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__.TriangulationNode),
/* harmony export */   TypeDescriptor: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.TypeDescriptor),
/* harmony export */   TypedJSON: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.TypedJSON),
/* harmony export */   UUID: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.UUID),
/* harmony export */   Unit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Unit),
/* harmony export */   UnitPrefix: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.UnitPrefix),
/* harmony export */   UnitValue: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.UnitValue),
/* harmony export */   Vector2: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vector2),
/* harmony export */   Vector3: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vector3),
/* harmony export */   Vector4: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vector4),
/* harmony export */   Velocity: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.Velocity),
/* harmony export */   WorkerServiceProxy: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_5__.WorkerServiceProxy),
/* harmony export */   mergeMemberOptions: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.mergeMemberOptions),
/* harmony export */   updateSerializableMember: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.updateSerializableMember),
/* harmony export */   updateSerializableObject: () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_4__.updateSerializableObject)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ "./dist/esm5/graph/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./dist/esm5/utils/index.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Node */ "./dist/esm5/Node.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./dist/esm5/data/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./dist/esm5/service/index.js");
/* harmony import */ var _ModelBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModelBuilder */ "./dist/esm5/ModelBuilder.js");
/* harmony import */ var _nodes_index_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nodes/index.lite */ "./dist/esm5/nodes/index.lite.js");
/* harmony import */ var _ModelSerializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModelSerializer */ "./dist/esm5/ModelSerializer.js");











/***/ }),

/***/ "./dist/esm5/nodes/CallbackNode.js":
/*!*****************************************!*\
  !*** ./dist/esm5/nodes/CallbackNode.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackNode: () => (/* binding */ CallbackNode)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");

/**
 * @category Node
 */
class CallbackNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor(pushCallback = () => true, pullCallback = () => null, options) {
    super(options);
    this.pushCallback = pushCallback;
    this.pullCallback = pullCallback;
    this.on('push', this._onPush.bind(this));
    this.on('pull', this._onPull.bind(this));
    this.options.autoPush = this.options.autoPush || true;
  }
  _onPush(frame, options) {
    return new Promise((resolve, reject) => {
      Promise.resolve(this.pushCallback(frame, options)).then(() => {
        if (this.options.autoPush) {
          return Promise.all(this.outlets.map(outlet => outlet.push(frame, options)));
        } else {
          resolve();
        }
      }).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  _onPull(options) {
    return new Promise((resolve, reject) => {
      Promise.resolve(this.pullCallback(options)).then(result => {
        if (result !== undefined && result !== null) {
          // Push result
          Promise.all(this.outlets.map(outlet => outlet.push(result, options))).then(() => {
            resolve();
          }).catch(reject);
        } else {
          // Forward pull
          Promise.all(this.inlets.map(inlet => inlet.pull(options))).then(() => {
            resolve();
          }).catch(reject);
        }
      }).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/GraphShapeNode.js":
/*!*******************************************!*\
  !*** ./dist/esm5/nodes/GraphShapeNode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphShapeNode: () => (/* binding */ GraphShapeNode)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");

/**
 * Graph shape node is a node that contains multiple nodes on itself. Other than a constructed
 * graph shape, this type of node should offer a collection of nodes. An example could be a "PDRProcessingNode"
 * that performs pedestrian dead reckoning by combining multiple internal nodes, such as an AccelerationProcessing,
 * VelocityProcessingNode and StepDetection.
 */
class GraphShapeNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor(options) {
    super(options);
    this.once('build', this._onBuild.bind(this));
    this.once('destroy', this._onDestroy.bind(this));
  }
  _onBuild() {
    return new Promise((resolve, reject) => {
      this.construct(this._builder);
      this._builder.build().then(graph => {
        this._graph = graph;
        this._builder = null;
        resolve();
      }).catch(reject);
    });
  }
  _onDestroy() {
    return this._graph.emitAsync('destroy');
  }
  /**
   * Send a pull request to the node
   * @param {PullOptions} [options] Pull options
   * @returns {Promise<void>} Pull promise
   */
  pull(options) {
    return this._graph.pull(options);
  }
  /**
   * Push data to the node
   * @param {DataFrame | DataFrame[]} data Data frame to push
   * @param {PushOptions} [options] Push options
   * @returns {Promise<void>} Push promise
   */
  push(data, options = {}) {
    return this._graph.push(data, options);
  }
  get processingGraph() {
    return this._graph;
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/ObjectProcessingNode.js":
/*!*************************************************!*\
  !*** ./dist/esm5/nodes/ObjectProcessingNode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectProcessingNode: () => (/* binding */ ObjectProcessingNode)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _ProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessingNode */ "./dist/esm5/nodes/ProcessingNode.js");


/**
 * Processing node that processes each {@link DataObject} in a {@link DataFrame} individually
 *
 * ## Usage
 *
 * ### Creating an ObjectProcessingNode
 * Extended on a {@link ProcessingNode} is an object processing node that processes individual objects in each frame.
 * ```typescript
 * import { DataFrame, DataObject, ObjectProcessingNode } from '@openhps/core';
 *
 * export class CustomObjectProcessingNode<InOut extends DataFrame> extends ObjectProcessingNode<InOut> {
 * // ...
 * public processObject(object: DataObject, frame?: DataFrame): Promise<DataObject> {
 * return new Promise<DataObject>((resolve, reject) => {
 * // Manipulate the object
 * object.displayName = "test";
 * resolve(object);
 * });
 * }
 * }
 * ```
 * @category Processing node
 */
class ObjectProcessingNode extends _ProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ProcessingNode {
  constructor(options) {
    super(options);
    this.options.objectFilter = this.options.objectFilter || (() => true);
  }
  process(frame, options) {
    return new Promise((resolve, reject) => {
      const processObjectPromises = [];
      const uids = [];
      const sourceUID = frame.source ? frame.source.uid : undefined;
      frame.getObjects().filter(value => this.options.objectFilter(value, frame)).forEach(object => {
        uids.push(object.uid);
        processObjectPromises.push(this.processObject(object, frame, options));
      });
      Promise.all(processObjectPromises).then(objects => {
        frame.clearObjects(this.options.objectFilter);
        objects.forEach((object, index) => {
          const oldUID = uids[index];
          frame.addObject(object);
          if (oldUID === sourceUID) {
            frame.source = object;
          }
        });
        resolve(frame);
      }).catch(reject);
    });
  }
  /**
   * Find an object by its uid
   * @param {string} uid Unique identifier of object to find
   * @param {DataFrame} dataFrame Optional data frame to look in
   * @param {string} type Optional type of the object to find
   * @returns {Promise<DataObject>} Data object promise if found
   */
  findObjectByUID(uid, dataFrame, type) {
    if (dataFrame !== undefined) {
      if (dataFrame.hasObject(new _data__WEBPACK_IMPORTED_MODULE_1__.DataObject(uid))) {
        return new Promise(resolve => {
          resolve(dataFrame.getObjectByUID(uid));
        });
      }
    }
    let service;
    if (type !== undefined) {
      service = this.model.findDataService(type);
    }
    service = service || this.model.findDataService(_data__WEBPACK_IMPORTED_MODULE_1__.DataObject);
    return new Promise(resolve => {
      service.findByUID(uid).then(resolve).catch(() => resolve(undefined));
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/ProcessingNode.js":
/*!*******************************************!*\
  !*** ./dist/esm5/nodes/ProcessingNode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessingNode: () => (/* binding */ ProcessingNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./dist/esm5/service/NodeDataService.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");




/**
 * Node that processes a dataframe or the contained objects.
 *
 * ## Usage
 *
 * ### Creating a ProcessingNode
 * Processing nodes hide the push and pull functionalities from a regular node. When a push is received, this
 * data frame is provided to the ```process()``` method that has to be implemented. When a pull is received, this pull is
 * forwarded to all incoming nodes.
 * ```typescript
 * import { DataFrame, DataObject, ProcessingNode } from '@openhps/core';
 *
 * export class CustomProcessingNode<In extends DataFrame, Out extends DataFrame> extends ProcessingNode<In, Out> {
 * // ...
 * public process(data: In, options?: GraphOptions): Promise<Out> {
 * return new Promise<Out>((resolve, reject) => {
 * // ... process/manipulate the data frame
 * data.addObject(new DataObject("custom_process_object"));
 * resolve(data);
 * });
 * }
 * }
 * ```
 * @category Processing node
 */
let ProcessingNode = class ProcessingNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor(options) {
    super(options);
    this.options.frameFilter = this.options.frameFilter || (() => true);
    this.on('push', this._onPush.bind(this));
  }
  _onPush(frame, options) {
    return new Promise((resolve, reject) => {
      const processPromises = [];
      if (Array.isArray(frame)) {
        frame.filter(frame => this.options.frameFilter(frame)).forEach(f => {
          processPromises.push(this.process(f, options));
        });
        frame.filter(frame => !this.options.frameFilter(frame)).forEach(f => {
          processPromises.push(Promise.resolve(f));
        });
      } else if (this.options.frameFilter(frame)) {
        processPromises.push(this.process(frame, options));
      } else {
        processPromises.push(Promise.resolve(frame));
      }
      Promise.all(processPromises).then(results => {
        const output = results.filter(res => res !== undefined);
        if (output.length > 0) {
          this.outlets.forEach(outlet => outlet.push(output.length === 1 ? output[0] : output, options));
        }
        resolve();
      }).catch(ex => {
        if (ex === undefined) {
          this.logger('warn', `Exception thrown in processing node ${this.uid} but no exception given!`);
        }
        reject(ex);
      });
    });
  }
  findNodeDataService() {
    return this.model.findDataService(_service__WEBPACK_IMPORTED_MODULE_1__.NodeData);
  }
  /**
   * Get node data
   * @param {DataObject} dataObject Data object to get node data from
   * @param {any} [defaultData] Default data
   * @returns {Promise<any>} Promise with node data
   */
  getNodeData(dataObject, defaultData = undefined) {
    return new Promise((resolve, reject) => {
      this.findNodeDataService().findData(this.uid, dataObject).then(data => {
        if (!data) {
          resolve(defaultData);
        } else {
          resolve(data);
        }
      }).catch(reject);
    });
  }
  /**
   * Set node data
   * @param {DataObject} dataObject Data object to store data for
   * @param {any} data Data to store
   * @returns {Promise<any>} Promise with stored node data
   */
  setNodeData(dataObject, data) {
    return new Promise((resolve, reject) => {
      this.findNodeDataService().insertData(this.uid, dataObject, data).then(resolve).catch(reject);
    });
  }
};
ProcessingNode = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object])], ProcessingNode);

/***/ }),

/***/ "./dist/esm5/nodes/RemoteNode.js":
/*!***************************************!*\
  !*** ./dist/esm5/nodes/RemoteNode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteNode: () => (/* binding */ RemoteNode)
/* harmony export */ });
/* harmony import */ var _data_DataFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/DataFrame */ "./dist/esm5/data/DataFrame.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");
/* harmony import */ var _service_RemoteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/RemoteService */ "./dist/esm5/service/RemoteService.js");
/* harmony import */ var _data_DataSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/DataSerializer */ "./dist/esm5/data/DataSerializer.js");




/**
 * A remote node connects to a service in order to provide a remote connection.
 * @category Node
 */
class RemoteNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor(options, node) {
    var _a, _b;
    super(options);
    this.proxyNode = node;
    this.options.service = this.options.service || _service_RemoteService__WEBPACK_IMPORTED_MODULE_1__.RemoteService;
    this.options.serialize = (_a = this.options.serialize) !== null && _a !== void 0 ? _a : object => _data_DataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.serialize(object);
    this.options.deserialize = (_b = this.options.deserialize) !== null && _b !== void 0 ? _b : object => _data_DataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.deserialize(object);
    this.on('push', this._onPush.bind(this));
    this.on('pull', this._onPull.bind(this));
    this.on('error', this._onDownstreamError.bind(this));
    this.on('completed', this._onDownstreamCompleted.bind(this));
    this.on('localpush', this._onLocalPush.bind(this));
    this.on('localpull', this._onLocalPull.bind(this));
    this.on('localevent', this._onLocalEvent.bind(this));
    this.once('build', this._onBuild.bind(this));
  }
  _onBuild() {
    return new Promise((resolve, reject) => {
      this.service = this.graph.findService(this.options.service);
      if (this.service === undefined || this.service === null) {
        return reject(new Error(`Remote service was not added to model!`));
      }
      this.service.registerNode(this).then(resolve).catch(reject);
    });
  }
  _onPush(frame, options) {
    return new Promise(resolve => {
      // Send push to clients
      this.service.remotePush(this.uid, frame, Object.assign(Object.assign({}, options), this.options));
      resolve();
    });
  }
  _onPull(options) {
    return new Promise(resolve => {
      // Send pull to clients
      this.service.remotePull(this.uid, options);
      resolve();
    });
  }
  _onLocalPush(frame, options) {
    return new Promise(resolve => {
      const frameDeserialized = frame instanceof _data_DataFrame__WEBPACK_IMPORTED_MODULE_3__.DataFrame ? frame : this.options.deserialize(frame, options);
      this.outlets.forEach(outlet => outlet.push(frameDeserialized, options));
      resolve();
    });
  }
  _onLocalPull(options) {
    return new Promise((resolve, reject) => {
      Promise.all(this.inlets.map(inlet => inlet.pull(options))).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  _onLocalEvent(event, arg) {
    this.inlets.forEach(inlet => inlet.emit(event, arg));
  }
  _onDownstreamCompleted(event) {
    // Send completed event to client
    this.service.remoteEvent(this.uid, 'completed', event);
  }
  _onDownstreamError(error) {
    // Send error to clients
    this.service.remoteEvent(this.uid, 'error', error);
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/SinkNode.js":
/*!*************************************!*\
  !*** ./dist/esm5/nodes/SinkNode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SinkNode: () => (/* binding */ SinkNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");




/**
 * Sink node
 *
 * ## Usage
 *
 * ### Creating a SinkNode
 * When creating a sink node, you have to implement an ```onPush``` method that provides you with the pushed data frame.
 * Sink nodes are the final nodes in the model and have no outlets. Once the onPush is resolved, data objects in that frame
 * are stored in a {@link DataObjectService}.
 * ```typescript
 * import { DataFrame, SinkNode } from '@openhps/core';
 *
 * export class CustomSink<In extends DataFrame> extends SinkNode<In> {
 * // ...
 * public onPush(data: In, options?: GraphOptions): Promise<void> {
 * return new Promise<void>((resolve, reject) => {
 *
 * });
 * }
 * }
 * ```
 * @category Sink node
 */
let SinkNode = class SinkNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor(options) {
    super(options);
    this.options.completedEvent = this.options['completedEvent'] === undefined ? true : this.options.completedEvent;
    this.options.persistence = this.options['persistence'] === undefined ? true : this.options.persistence;
  }
  push(data, options) {
    return new Promise((resolve, reject) => {
      if (data === null || data === undefined) {
        return reject();
      }
      // Push the frame to the sink node
      this.onPush(data, options).then(() => {
        const persistPromise = [];
        if (data instanceof Array) {
          data.forEach(f => {
            if (this.options.persistence) {
              persistPromise.push(this.persistDataObject(f));
            }
          });
        } else {
          if (this.options.persistence) {
            persistPromise.push(this.persistDataObject(data));
          }
        }
        return Promise.all(persistPromise);
      }).then(() => {
        resolve();
        // Fire a completed event
        if (this.options.completedEvent) {
          if (data instanceof Array) {
            data.forEach(f => {
              this.emit('completed', {
                frameUID: f.uid
              });
            });
          } else {
            this.emit('completed', {
              frameUID: data.uid
            });
          }
        }
      }).catch(reject);
    });
  }
  persistDataObject(frame) {
    return new Promise((resolve, reject) => {
      const servicePromises = [];
      const objects = frame.getObjects();
      for (const object of objects) {
        if (object.uid === null) {
          object.uid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
        // Queue the storage of the object in a data service
        const service = this.model.findDataService(object);
        servicePromises.push(service.insert(object.uid, object));
      }
      Promise.all(servicePromises).then(() => resolve()).catch(reject);
    });
  }
};
SinkNode = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object])], SinkNode);

/***/ }),

/***/ "./dist/esm5/nodes/SourceNode.js":
/*!***************************************!*\
  !*** ./dist/esm5/nodes/SourceNode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceNode: () => (/* binding */ SourceNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/object/DataObject */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");




/**
 * Source node
 *
 * ## Usage
 *
 * ### Creating a SourceNode
 * When creating a source node, you have to implement a promise based ```onPull``` method that expects a data
 * frame.
 *
 * As mentioned in the {@link Node} class, pulling normally does not require you to return
 * a data frame. The source node implementation provides an abstraction on top of this. If your source node can generate
 * data frames, you can resolve to a data frame. The data frame will then be pushed to outgoing nodes.
 * If not, you can simply resolve nothing or a null object.
 *
 * On top of this abstraction, a source node adds an intermediate output node that merges data objects from the [data service](#dataservice).
 * This way, the data frame pushed by the source will always be up-to-date and merged with existing processed information.
 *
 * ```typescript
 * import { DataFrame, SourceNode } from '@openhps/core';
 *
 * export class CustomSource<Out extends DataFrame> extends SourceNode<Out> {
 * // ...
 * constructor() {
 * // Source nodes expect a source object to be provided
 * super(new DataObject("mobile_input")));
 * }
 *
 * public onPull(options?: GraphPullOptions): Promise<Out> {
 * return new Promise<Out>((resolve, reject) => {
 * // ... pull request
 * // ... get data from somewhere
 *
 * const dataFrame = new DataFrame(this.getSource());
 * resolve(dataFrame);
 * });
 * }
 * }
 * ```
 * @category Source node
 */
let SourceNode = class SourceNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  /**
   * Construct a new source node
   * @param {SourceNodeOptions} [options] Source node options
   */
  constructor(options) {
    super(options);
    // Default source settings
    this.options.persistence = this.options['persistence'] === undefined ? true : this.options.persistence;
    this.on('push', this._onPush.bind(this));
    this.on('pull', this._onPull.bind(this));
    if (this.source) {
      this.once('build', this.registerService.bind(this));
    }
  }
  /**
   * Get the source data object
   * @returns {DataObject} Source data object
   */
  get source() {
    return this.options.source;
  }
  registerService() {
    return new Promise(resolve => {
      const service = this.model.findDataService(this.source);
      // Update source when modified
      service.on('insert', (uid, object) => {
        if (uid === this.source.uid) {
          this.options.source = object;
        }
      });
      // Update to the latest version
      service.findByUID(this.source.uid).then(object => {
        this.options.source = object;
        resolve();
      }).catch(() => {
        // Ignore, most likely not calibrated or stored yet
        resolve();
      });
    });
  }
  _onPush(data, options) {
    return new Promise((resolve, reject) => {
      const servicePromises = [];
      if (this.options.persistence) {
        if (data instanceof Array) {
          for (const f of data) {
            servicePromises.push(this.mergeFrame(f));
          }
        } else {
          servicePromises.push(this.mergeFrame(data));
        }
      }
      Promise.all(servicePromises).then(() => {
        this.outlets.map(outlet => outlet.push(data, options));
        resolve();
      }).catch(reject);
    });
  }
  mergeFrame(frame) {
    return new Promise((resolve, reject) => {
      const defaultService = this.model.findDataService(_data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__.DataObject);
      const promises = [];
      const objects = [];
      frame.getObjects().forEach(object => {
        objects.push(object);
      });
      objects.forEach(object => {
        promises.push(new Promise(objResolve => {
          let service = this.model.findDataService(object);
          if (service === null || service === undefined) {
            service = defaultService;
          }
          service.findByUID(object.uid).then(existingObject => {
            if (existingObject === null) {
              objResolve();
            }
            this.mergeObject(object, existingObject);
            objResolve();
          }).catch(() => {
            // Ignore
            objResolve();
          });
        }));
      });
      Promise.all(promises).then(() => {
        resolve(frame);
      }).catch(reject);
    });
  }
  /**
   * Merge an object
   * @param {DataObject} newObject New object
   * @param {DataObject} oldObject Existing object
   * @returns {DataObject} Existing object
   */
  mergeObject(newObject, oldObject) {
    newObject.displayName = newObject.displayName || oldObject.displayName;
    newObject.position = newObject.position || oldObject.position;
    newObject.parentUID = newObject.parentUID || oldObject.parentUID;
    oldObject.relativePositions.forEach(relativePosition => {
      // Get the new relative position by its uid and type
      const newPosition = newObject.getRelativePosition(relativePosition.referenceObjectUID, relativePosition.constructor.name);
      if (newPosition && newPosition.timestamp < relativePosition.timestamp) {
        // New object contains older relative position
        newObject.addRelativePosition(relativePosition);
      } else if (!newPosition) {
        // New object does not contain stored relative position
        newObject.addRelativePosition(relativePosition);
      }
    });
    return newObject;
  }
  _onPull(options = {}) {
    if (options.sourceNode && options.sourceNode !== this.uid) {
      // Pull options indicate the pull on a specific source node
      return Promise.resolve();
    }
    const sequential = options['sequentialPull'] === undefined ? true : options.sequentialPull;
    if (sequential) {
      return this._onSequentialPull(options);
    } else {
      return this._onParallelPull(options);
    }
  }
  _onSequentialPull(options) {
    const newOptions = Object.assign({
      sourceNode: this.uid
    }, options);
    const count = options.count || 1;
    let promise = Promise.resolve();
    for (let i = 0; i < count; i++) {
      promise = promise.then(() => new Promise((resolve, reject) => {
        this.onPull(options).then(frame => {
          if (frame !== undefined && frame !== null) {
            // Resolve after push is done
            return this.push(frame, newOptions);
          } else {
            resolve();
          }
        }).then(resolve).catch(reject);
      }));
    }
    return promise;
  }
  _onParallelPull(options) {
    return new Promise((resolve, reject) => {
      const newOptions = Object.assign({
        sourceNode: this.uid
      }, options);
      const count = options.count || 1;
      Promise.all([...Array(count).keys()].map(() => this.onPull(options))).then(results => {
        const pushPromises = [];
        results.forEach(frame => {
          if (frame !== undefined && frame !== null) {
            // Push without waiting
            pushPromises.push(this.push(frame, newOptions));
          }
        });
        return Promise.all(pushPromises);
      }).then(() => {
        resolve();
      }).catch(reject);
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], SourceNode.prototype, "options", void 0);
SourceNode = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object])], SourceNode);

/***/ }),

/***/ "./dist/esm5/nodes/_internal/PlaceholderNode.js":
/*!******************************************************!*\
  !*** ./dist/esm5/nodes/_internal/PlaceholderNode.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaceholderNode: () => (/* binding */ PlaceholderNode)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Node */ "./dist/esm5/Node.js");

class PlaceholderNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor(name, options) {
    super(Object.assign({
      name
    }, options));
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/index.lite.js":
/*!***************************************!*\
  !*** ./dist/esm5/nodes/index.lite.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccuracyModifierNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.AccuracyModifierNode),
/* harmony export */   CalibrationNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.CalibrationNode),
/* harmony export */   CallbackNode: () => (/* reexport safe */ _CallbackNode__WEBPACK_IMPORTED_MODULE_4__.CallbackNode),
/* harmony export */   CallbackSinkNode: () => (/* reexport safe */ _sink__WEBPACK_IMPORTED_MODULE_7__.CallbackSinkNode),
/* harmony export */   CallbackSourceNode: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_9__.CallbackSourceNode),
/* harmony export */   CellIdentificationNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.CellIdentificationNode),
/* harmony export */   EMAFilterNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.EMAFilterNode),
/* harmony export */   FilterProcessingNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.FilterProcessingNode),
/* harmony export */   GraphShapeNode: () => (/* reexport safe */ _GraphShapeNode__WEBPACK_IMPORTED_MODULE_6__.GraphShapeNode),
/* harmony export */   HPFilterNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.HPFilterNode),
/* harmony export */   HistorySourceNode: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_9__.HistorySourceNode),
/* harmony export */   KalmanFilter: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.KalmanFilter),
/* harmony export */   KalmanFilterNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.KalmanFilterNode),
/* harmony export */   LPFilterNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.LPFilterNode),
/* harmony export */   ListSourceNode: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_9__.ListSourceNode),
/* harmony export */   LoggingSinkNode: () => (/* reexport safe */ _sink__WEBPACK_IMPORTED_MODULE_7__.LoggingSinkNode),
/* harmony export */   MultilaterationNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.MultilaterationNode),
/* harmony export */   ObjectProcessingNode: () => (/* reexport safe */ _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_3__.ObjectProcessingNode),
/* harmony export */   ProcessingNode: () => (/* reexport safe */ _ProcessingNode__WEBPACK_IMPORTED_MODULE_2__.ProcessingNode),
/* harmony export */   PropertyFilterProcessingNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.PropertyFilterProcessingNode),
/* harmony export */   ReferenceSpaceConversionNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.ReferenceSpaceConversionNode),
/* harmony export */   RelativePositionFilter: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.RelativePositionFilter),
/* harmony export */   RelativePositionProcessing: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.RelativePositionProcessing),
/* harmony export */   RemoteNode: () => (/* reexport safe */ _RemoteNode__WEBPACK_IMPORTED_MODULE_5__.RemoteNode),
/* harmony export */   RemoteSinkNode: () => (/* reexport safe */ _sink__WEBPACK_IMPORTED_MODULE_7__.RemoteSinkNode),
/* harmony export */   RemoteSourceNode: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_9__.RemoteSourceNode),
/* harmony export */   SMAFilterNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.SMAFilterNode),
/* harmony export */   SinkNode: () => (/* reexport safe */ _SinkNode__WEBPACK_IMPORTED_MODULE_0__.SinkNode),
/* harmony export */   SourceNode: () => (/* reexport safe */ _SourceNode__WEBPACK_IMPORTED_MODULE_1__.SourceNode),
/* harmony export */   TriangulationNode: () => (/* reexport safe */ _processing__WEBPACK_IMPORTED_MODULE_8__.TriangulationNode)
/* harmony export */ });
/* harmony import */ var _SinkNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SinkNode */ "./dist/esm5/nodes/SinkNode.js");
/* harmony import */ var _SourceNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceNode */ "./dist/esm5/nodes/SourceNode.js");
/* harmony import */ var _ProcessingNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProcessingNode */ "./dist/esm5/nodes/ProcessingNode.js");
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");
/* harmony import */ var _CallbackNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CallbackNode */ "./dist/esm5/nodes/CallbackNode.js");
/* harmony import */ var _RemoteNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemoteNode */ "./dist/esm5/nodes/RemoteNode.js");
/* harmony import */ var _GraphShapeNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphShapeNode */ "./dist/esm5/nodes/GraphShapeNode.js");
/* harmony import */ var _sink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sink */ "./dist/esm5/nodes/sink/index.js");
/* harmony import */ var _processing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./processing */ "./dist/esm5/nodes/processing/index.js");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./source */ "./dist/esm5/nodes/source/index.js");











/***/ }),

/***/ "./dist/esm5/nodes/processing/AccuracyModifierNode.js":
/*!************************************************************!*\
  !*** ./dist/esm5/nodes/processing/AccuracyModifierNode.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccuracyModifierNode: () => (/* binding */ AccuracyModifierNode)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");


/**
 * Accuracy modifier node. Apply an offset of magnitude to the position accuracy.
 * @category Processing node
 */
class AccuracyModifierNode extends _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
  constructor(options) {
    super(options);
    this.options.offsetUnit = this.options.offsetUnit || _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER;
    this.options.offset = this.options.offset || 0;
    this.options.magnitude = this.options.magnitude || 1;
  }
  processObject(object) {
    return new Promise(resolve => {
      if (object.position) {
        if (this.options.value) {
          object.position.accuracy.value = _utils__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER.convert(this.options.value, object.position.unit);
        } else {
          const accuracy = object.position.accuracy.value || this.options.defaultValue;
          if (accuracy) {
            const offset = this.options.offsetUnit.convert(this.options.offset, object.position.unit);
            object.position.accuracy.value = accuracy * this.options.magnitude + offset;
          }
        }
      }
      resolve(object);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/CalibrationNode.js":
/*!*******************************************************!*\
  !*** ./dist/esm5/nodes/processing/CalibrationNode.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalibrationNode: () => (/* binding */ CalibrationNode)
/* harmony export */ });
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");

/**
 * Calibration node for sensors. This node allows intercepts data frames when
 * performing user-aided calibration.
 */
class CalibrationNode extends _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
  constructor(calibrationOptions) {
    super(calibrationOptions);
    this.state = CalibrationState.IDLE;
    this.once('build', this._onBuild.bind(this));
  }
  _onBuild() {
    this.service = this.model.findService(this.options.service);
    if (!this.service) {
      throw new Error(`Calibration node requires a calibration service of type '${this.options.service.name}'!`);
    } else {
      this.service.node = this;
    }
  }
  processObject(dataObject) {
    return new Promise((resolve, reject) => {
      if (this.state !== CalibrationState.RUNNING) {
        resolve(dataObject);
      } else if (this.objectCallback) {
        // Forward to service
        Promise.resolve(this.objectCallback(dataObject)).then(object => {
          resolve(object);
        }).catch(reject);
      } else {
        resolve(dataObject);
      }
    });
  }
  process(dataFrame) {
    return new Promise((resolve, reject) => {
      if (this.state === CalibrationState.SUSPENDED) {
        // Do not invoke callback but do not forward either
        resolve(undefined);
      } else if (this.state === CalibrationState.RUNNING) {
        if (this.frameCallback) {
          Promise.resolve(this.frameCallback(dataFrame)).then(frame => {
            var _a;
            return super.process((_a = frame) !== null && _a !== void 0 ? _a : dataFrame);
          }).then(() => {
            resolve(undefined);
          }).catch(reject);
        } else {
          super.process(dataFrame).then(() => {
            resolve(undefined);
          });
        }
      } else {
        resolve(dataFrame);
      }
    });
  }
  start(objectCallback, frameCallback) {
    this.objectCallback = objectCallback;
    this.frameCallback = frameCallback;
    this.state = CalibrationState.RUNNING;
  }
  suspend() {
    this.state = CalibrationState.SUSPENDED;
  }
  stop() {
    this.state = CalibrationState.IDLE;
  }
}
var CalibrationState;
(function (CalibrationState) {
  CalibrationState[CalibrationState["IDLE"] = 0] = "IDLE";
  CalibrationState[CalibrationState["SUSPENDED"] = 1] = "SUSPENDED";
  CalibrationState[CalibrationState["RUNNING"] = 2] = "RUNNING";
})(CalibrationState || (CalibrationState = {}));

/***/ }),

/***/ "./dist/esm5/nodes/processing/CellIdentificationNode.js":
/*!**************************************************************!*\
  !*** ./dist/esm5/nodes/processing/CellIdentificationNode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellIdentificationNode: () => (/* binding */ CellIdentificationNode)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/position/RelativeDistance.js");
/* harmony import */ var _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePositionProcessing */ "./dist/esm5/nodes/processing/RelativePositionProcessing.js");


/**
 * Cell identification processing node
 * @category Processing node
 */
class CellIdentificationNode extends _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_0__.RelativePositionProcessing {
  constructor(options) {
    super(_data__WEBPACK_IMPORTED_MODULE_1__.RelativeDistance, options);
    this.options.maxDistance = this.options.maxDistance || 2;
  }
  processRelativePositions(dataObject, relativePositions, dataFrame) {
    return new Promise(resolve => {
      let spheres = [];
      relativePositions.forEach((object, relativePosition) => {
        if (object.getPosition()) {
          spheres.push([object.getPosition(), relativePosition.distance]);
        }
      });
      // Order points and distances by distances
      spheres = spheres.sort((a, b) => a[1] - b[1]);
      if (spheres.length > 0 && spheres[0][1] <= this.options.maxDistance) {
        const position = spheres[0][0].clone();
        position.timestamp = dataFrame.createdTimestamp;
        position.accuracy.value = spheres[0][1];
        dataObject.setPosition(position);
        return resolve(dataObject);
      }
      resolve(dataObject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/MultilaterationNode.js":
/*!***********************************************************!*\
  !*** ./dist/esm5/nodes/processing/MultilaterationNode.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultilaterationNode: () => (/* binding */ MultilaterationNode)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/position/RelativeDistance.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/values/Accuracy1D.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/position/GeographicalPosition.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/math */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePositionProcessing */ "./dist/esm5/nodes/processing/RelativePositionProcessing.js");




/**
 * Multilateration processing node
 * @category Processing node
 */
class MultilaterationNode extends _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_0__.RelativePositionProcessing {
  constructor(options) {
    super(_data__WEBPACK_IMPORTED_MODULE_1__.RelativeDistance, options);
    this.options.incrementStep = this.options.incrementStep || 1;
    this.options.minReferences = this.options.minReferences || 1;
    this.options.nlsFunction = this.options.nlsFunction || this.nls.bind(this);
  }
  processRelativePositions(dataObject, relativePositions, dataFrame) {
    return new Promise((resolve, reject) => {
      let spheres = [];
      relativePositions.forEach((object, relativePosition) => {
        if (object.getPosition()) {
          spheres.push(new Sphere(object.getPosition(), relativePosition.distance, relativePosition.accuracy.valueOf()));
        }
      });
      // Order points and distances by distances
      spheres = spheres.sort((a, b) => a.radius - b.radius);
      // Check if amount of references surpasses the threshold
      if (spheres.length < this.options.minReferences) {
        return resolve(dataObject);
      } else if (spheres.length > this.options.maxReferences) {
        spheres = spheres.splice(0, this.options.maxReferences);
      }
      let position;
      switch (spheres.length) {
        case 0:
          return resolve(dataObject);
        case 1:
          position = spheres[0].position.clone();
          position.timestamp = dataFrame.createdTimestamp;
          // Accuracy is radius + accuracy of the position that we are using
          position.accuracy = new _data__WEBPACK_IMPORTED_MODULE_2__.Accuracy1D(spheres[0].radius + position.accuracy.valueOf() + spheres[0].accuracy, position.unit);
          dataObject.setPosition(position);
          return resolve(dataObject);
        case 2:
          if (spheres[0].position instanceof _data__WEBPACK_IMPORTED_MODULE_3__.GeographicalPosition) {
            position = this.midpointGeographical(spheres[0], spheres[1]);
          } else {
            position = this.midpoint(spheres[0], spheres[1]);
          }
          position.timestamp = dataFrame.createdTimestamp;
          position.accuracy = new _data__WEBPACK_IMPORTED_MODULE_2__.Accuracy1D(spheres.map(s => s.accuracy).reduce((a, b) => a.valueOf() + b.valueOf()) / spheres.length, position.unit);
          dataObject.setPosition(position);
          return resolve(dataObject);
        case 3:
          if (!this.options.preferNls) {
            this.trilaterate(spheres).then(position => {
              if (position) {
                position.timestamp = dataFrame.createdTimestamp;
                position.accuracy = new _data__WEBPACK_IMPORTED_MODULE_2__.Accuracy1D(spheres.map(s => s.accuracy).reduce((a, b) => a.valueOf() + b.valueOf()) / spheres.length, position.unit);
                dataObject.setPosition(position);
              }
              resolve(dataObject);
            }).catch(reject);
            break;
          }
        // eslint-disable-next-line
        default:
          position = this.options.nlsFunction(spheres);
          position.timestamp = dataFrame.createdTimestamp;
          position.accuracy = new _data__WEBPACK_IMPORTED_MODULE_2__.Accuracy1D(spheres.map(s => s.accuracy).reduce((a, b) => a.valueOf() + b.valueOf()) / spheres.length, position.unit);
          dataObject.setPosition(position);
          resolve(dataObject);
      }
    });
  }
  /**
   * Nonlinear least squares using nelder mead
   * @see {@link https://github.com/benfred/fmin}
   * @author Ben Frederickson, Qingrong Ke
   * @param {Array<Sphere<any>>} spheres Spheres with position and radius
   * @returns {AbsolutePosition} Output position
   */
  nls(spheres) {
    // Initiailize parameters
    const f = point => this._calculateError(point, spheres);
    const x0 = this._calculateInit(spheres);
    const maxIterations = this.options.maxIterations;
    const nonZeroDelta = 1.05;
    const zeroDelta = 0.001;
    const minErrorDelta = 1e-6;
    const minTolerance = 1e-5;
    const rho = 1;
    const chi = 2;
    const psi = -0.5;
    const sigma = 0.5;
    let maxDiff = 0;
    // Initialize simplex
    const N = x0.length;
    const simplex = new Array(N + 1);
    simplex[0] = x0;
    simplex[0].fx = f(x0);
    simplex[0].id = 0;
    for (let i = 0; i < N; ++i) {
      const point = x0.slice();
      point[i] = point[i] ? point[i] * nonZeroDelta : zeroDelta;
      simplex[i + 1] = point;
      simplex[i + 1].fx = f(point);
      simplex[i + 1].id = i + 1;
    }
    /**
     * @param {number} value Value
     */
    function updateSimplex(value) {
      for (let i = 0; i < value.length; i++) {
        simplex[N][i] = value[i];
      }
      simplex[N].fx = value.fx;
    }
    /**
     * @param {number[]} ret Return value
     * @param {number} w1 Weight 1
     * @param {number} v1 Value 1
     * @param {number} w2 Weight 2
     * @param {number} v2 Value 2
     */
    function weightedSum(ret, w1, v1, w2, v2) {
      for (let j = 0; j < ret.length; ++j) {
        ret[j] = w1 * v1[j] + w2 * v2[j];
      }
    }
    const sortOrder = (a, b) => a.fx - b.fx;
    const centroid = x0.slice();
    const reflected = x0.slice();
    const contracted = x0.slice();
    const expanded = x0.slice();
    for (let iteration = 0; iteration < maxIterations; ++iteration) {
      simplex.sort(sortOrder);
      maxDiff = 0;
      for (let i = 0; i < N; ++i) {
        maxDiff = Math.max(maxDiff, Math.abs(simplex[0][i] - simplex[1][i]));
      }
      if (Math.abs(simplex[0].fx - simplex[N].fx) < minErrorDelta && maxDiff < minTolerance) {
        break;
      }
      // compute the centroid of all but the worst point in the simplex
      for (let i = 0; i < N; ++i) {
        centroid[i] = 0;
        for (let j = 0; j < N; ++j) {
          centroid[i] += simplex[j][i];
        }
        centroid[i] /= N;
      }
      // reflect the worst point past the centroid and compute loss at reflected
      // point
      const worst = simplex[N];
      weightedSum(reflected, 1 + rho, centroid, -rho, worst);
      reflected.fx = f(reflected);
      // if the reflected point is the best seen, then possibly expand
      if (reflected.fx < simplex[0].fx) {
        weightedSum(expanded, 1 + chi, centroid, -chi, worst);
        expanded.fx = f(expanded);
        if (expanded.fx < reflected.fx) {
          updateSimplex(expanded);
        } else {
          updateSimplex(reflected);
        }
      }
      // if the reflected point is worse than the second worst, we need to
      // contract
      else if (reflected.fx >= simplex[N - 1].fx) {
        let shouldReduce = false;
        if (reflected.fx > worst.fx) {
          // do an inside contraction
          weightedSum(contracted, 1 + psi, centroid, -psi, worst);
          contracted.fx = f(contracted);
          if (contracted.fx < worst.fx) {
            updateSimplex(contracted);
          } else {
            shouldReduce = true;
          }
        } else {
          // do an outside contraction
          weightedSum(contracted, 1 - psi * rho, centroid, psi * rho, worst);
          contracted.fx = f(contracted);
          if (contracted.fx < reflected.fx) {
            updateSimplex(contracted);
          } else {
            shouldReduce = true;
          }
        }
        if (shouldReduce) {
          // if we don't contract here, we're done
          if (sigma >= 1) break;
          // do a reduction
          for (let i = 1; i < simplex.length; ++i) {
            weightedSum(simplex[i], 1 - sigma, simplex[0], sigma, simplex[i]);
            simplex[i].fx = f(simplex[i]);
          }
        }
      } else {
        updateSimplex(reflected);
      }
    }
    simplex.sort(sortOrder);
    const position = spheres[0].position.clone();
    position.fromVector(new _utils_math__WEBPACK_IMPORTED_MODULE_4__.Vector3(...simplex[0]));
    return position;
  }
  /**
   * Midpoint to another location
   * @param {Sphere<any>} sphereA sphere A
   * @param {Sphere<any>} sphereB sphere B
   * @returns {AbsolutePosition} Calculated midpoint
   */
  midpoint(sphereA, sphereB) {
    const pointA = sphereA.position;
    const pointB = sphereB.position;
    const newPoint = pointA.clone();
    newPoint.fromVector(pointA.toVector3().multiplyScalar(sphereB.radius).add(pointB.toVector3().multiplyScalar(sphereA.radius)).divideScalar(sphereA.radius + sphereB.radius));
    return newPoint;
  }
  /**
   * Get the midpoint of two geographical locations
   * @param {Sphere<GeographicalPosition>} sphereA First position to get midpoint from
   * @param {Sphere<GeographicalPosition>} sphereB Other position to get midpoint from
   * @returns {GeographicalPosition} Calculated midpoint
   */
  midpointGeographical(sphereA, sphereB) {
    const pointA = sphereA.position;
    const pointB = sphereB.position;
    if (sphereA.radius === sphereB.radius) {
      const lonRadA = _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.DEGREE.convert(pointA.longitude, _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.RADIAN);
      const latRadA = _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.DEGREE.convert(pointA.latitude, _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.RADIAN);
      const lonRadB = _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.DEGREE.convert(pointB.longitude, _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.RADIAN);
      const latRadB = _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.DEGREE.convert(pointB.latitude, _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.RADIAN);
      const Bx = Math.cos(latRadB) * Math.cos(lonRadB - lonRadA);
      const By = Math.cos(latRadB) * Math.sin(lonRadB - lonRadA);
      const latX = Math.atan2(Math.sin(latRadA) + Math.sin(latRadB), Math.sqrt((Math.cos(latRadA) + Bx) * (Math.cos(latRadA) + Bx) + By * By));
      const lonX = lonRadA + Math.atan2(By, Math.cos(latRadA) + Bx);
      const position = new _data__WEBPACK_IMPORTED_MODULE_3__.GeographicalPosition();
      position.latitude = _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.RADIAN.convert(latX, _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.DEGREE);
      position.longitude = _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.RADIAN.convert(lonX, _utils__WEBPACK_IMPORTED_MODULE_5__.AngleUnit.DEGREE);
      return position;
    } else {
      // Calculate bearings
      const bearingAB = pointA.bearing(pointB);
      const bearingBA = pointB.bearing(pointA);
      // Calculate two reference points
      const C = pointA.destination(bearingAB, sphereA.radius);
      const D = pointB.destination(bearingBA, sphereB.radius);
      // Calculate the middle of C and D
      const midpoint = this.midpoint(new Sphere(C, 1, C.accuracy.valueOf()), new Sphere(D, 1, D.accuracy.valueOf()));
      midpoint.accuracy = new _data__WEBPACK_IMPORTED_MODULE_2__.Accuracy1D(Math.round(C.distanceTo(D) / 2 * 100) / 100, midpoint.unit);
      return midpoint;
    }
  }
  trilaterate(spheres) {
    return new Promise(resolve => {
      const maxIterations = this.options.maxIterations || 900;
      const v = spheres.map(p => p.center);
      const ex = v[1].clone().sub(v[0]).normalize();
      const i = ex.clone().dot(v[2].clone().sub(v[0]));
      const ey = v[2].clone().sub(v[0]).sub(ex.clone().multiplyScalar(i)).normalize();
      const ez = ex.clone().cross(ey);
      const d = v[1].clone().sub(v[0]).length();
      const j = ey.clone().dot(v[2].clone().sub(v[0]));
      // Calculate coordinates
      let AX = spheres[0].radius;
      let BX = spheres[1].radius;
      let CX = spheres[2].radius;
      let x = 0;
      let y = 0;
      let b = -1;
      let iteration = 0;
      do {
        x = (Math.pow(AX, 2) - Math.pow(BX, 2) + Math.pow(d, 2)) / (2 * d);
        y = (Math.pow(AX, 2) - Math.pow(CX, 2) + Math.pow(i, 2) + Math.pow(j, 2)) / (2 * j) - i / j * x;
        b = Math.pow(AX, 2) - Math.pow(x, 2) - Math.pow(y, 2);
        // Increase distances
        AX += this.options.incrementStep;
        BX += this.options.incrementStep;
        CX += this.options.incrementStep;
        iteration++;
      } while (b < -1e-10 && iteration < maxIterations);
      const z = Math.sqrt(b) || 0;
      const point = spheres[0].position.clone();
      point.fromVector(v[0].clone().add(ex.multiplyScalar(x)).add(ey.multiplyScalar(y)).add(ez.multiplyScalar(z)));
      return resolve(point);
    });
  }
  _calculateInit(spheres) {
    // center coordinates of smallest circle
    const smallestSphere = spheres[0];
    // weighted centroid of all pnts
    const sumR = spheres.map(p => p.radius).reduce((a, b) => a + b);
    const wCentroid = new _utils_math__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0);
    spheres.forEach(sphere => {
      const weight = (sumR - sphere.radius) / ((spheres.length - 1) * sumR);
      wCentroid.add(sphere.center.clone().multiplyScalar(weight));
    });
    // pick weighted centroid if it's included within the smallest circle radius,
    // otherwise go as far in that direction as ~90% of the smallest radius allows
    const radRatio = Math.min(1, smallestSphere.radius / smallestSphere.center.distanceTo(wCentroid) * 0.9);
    const p0 = wCentroid.multiplyScalar(radRatio).add(smallestSphere.center.clone().multiplyScalar(1 - radRatio));
    return p0.toArray();
  }
  _calculateError(point, spheres) {
    return spheres.map(sphere => Math.pow(new _utils_math__WEBPACK_IMPORTED_MODULE_4__.Vector3(...point).distanceTo(sphere.center) - sphere.radius, 2)).reduce((a, b) => a + b);
  }
}
class Sphere {
  constructor(position, radius, accuracy) {
    this.position = position;
    this.radius = radius;
    this.accuracy = accuracy;
  }
  get center() {
    return this.position.toVector3();
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/ReferenceSpaceConversionNode.js":
/*!********************************************************************!*\
  !*** ./dist/esm5/nodes/processing/ReferenceSpaceConversionNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferenceSpaceConversionNode: () => (/* binding */ ReferenceSpaceConversionNode)
/* harmony export */ });
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/object/space/ReferenceSpace.js");


/**
 * This node converts the positions of data objects inside the frame
 * to another reference space.
 * @category Processing node
 */
class ReferenceSpaceConversionNode extends _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
  constructor(referenceSpace, options) {
    super(options);
    if (referenceSpace instanceof _data__WEBPACK_IMPORTED_MODULE_1__.ReferenceSpace) {
      this._referenceSpace = referenceSpace;
      this._referenceSpaceUID = referenceSpace.uid;
    } else {
      this._referenceSpaceUID = referenceSpace;
    }
    this.once('build', this._onRegisterService.bind(this));
  }
  _onRegisterService() {
    return new Promise(resolve => {
      const service = this.graph.findDataService(_data__WEBPACK_IMPORTED_MODULE_1__.ReferenceSpace);
      // Update reference space when modified
      service.on('insert', (uid, space) => {
        if (uid === this._referenceSpaceUID) {
          this._referenceSpace = space;
        }
      });
      // Update to the latest version
      service.findByUID(this._referenceSpaceUID).then(space => {
        this._referenceSpace = space;
        resolve();
      }).catch(() => {
        // Ignore, most likely not calibrated or stored yet
        resolve();
      });
    });
  }
  processObject(object, frame) {
    return new Promise(resolve => {
      // First check if a reference space is provided inside
      // the data frame. If not, use the stored reference space
      let referenceSpace = frame.getObjectByUID(this._referenceSpaceUID);
      if (referenceSpace === null || referenceSpace === undefined) {
        referenceSpace = this._referenceSpace;
      }
      if (object.getPosition() && object.uid !== referenceSpace.uid) {
        if (this.options.inverse) {
          // Convert from reference space to global
          object.setPosition(object.getPosition(), referenceSpace);
        } else {
          // Convert global space to reference space
          object.setPosition(object.getPosition(referenceSpace));
        }
      }
      resolve(object);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/RelativePositionProcessing.js":
/*!******************************************************************!*\
  !*** ./dist/esm5/nodes/processing/RelativePositionProcessing.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativePositionProcessing: () => (/* binding */ RelativePositionProcessing)
/* harmony export */ });
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");

/**
 * Relative position processing node.
 * @category Processing node
 */
class RelativePositionProcessing extends _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
  constructor(relativePositionType, options) {
    super(options);
    this._relativePositionType = relativePositionType;
  }
  processObject(dataObject, dataFrame) {
    return new Promise((resolve, reject) => {
      const referencePromises = [];
      const index = new Map();
      for (const relativePosition of dataObject.relativePositions) {
        // Only use relative positions that are instance of relativePositionType
        if (relativePosition instanceof this._relativePositionType) {
          index.set(relativePosition.referenceObjectUID, relativePosition);
          referencePromises.push(this.findObjectByUID(relativePosition.referenceObjectUID, dataFrame, relativePosition.referenceObjectType));
        }
      }
      Promise.all(referencePromises).then(referenceObjects => {
        const relativePositions = new Map();
        referenceObjects.filter(obj => obj !== undefined).forEach(referenceObject => {
          relativePositions.set(index.get(referenceObject.uid), referenceObject);
        });
        return this.processRelativePositions(dataObject, relativePositions, dataFrame);
      }).then(modifiedObject => {
        resolve(modifiedObject);
      }).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/TriangulationNode.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/nodes/processing/TriangulationNode.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TriangulationNode: () => (/* binding */ TriangulationNode)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/position/RelativeAngle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelativePositionProcessing */ "./dist/esm5/nodes/processing/RelativePositionProcessing.js");



/**
 * Triangulation processing node
 * Supported position types:
 * - {@link Absolute2DPosition}
 * - {@link Absolute3DPosition}
 * - {@link GeographicalPosition}
 * @category Processing node
 */
class TriangulationNode extends _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_0__.RelativePositionProcessing {
  constructor(options) {
    super(_data__WEBPACK_IMPORTED_MODULE_1__.RelativeAngle, options);
  }
  processRelativePositions(dataObject, relativePositions, dataFrame) {
    return new Promise((resolve, reject) => {
      const objects = [];
      const points = [];
      const angles = [];
      relativePositions.forEach((object, relativePosition) => {
        if (object.getPosition()) {
          objects.push(object);
          points.push(object.getPosition());
          angles.push(relativePosition.angleUnit.convert(relativePosition.angle, _utils__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN));
        }
      });
      switch (objects.length) {
        case 0:
        case 1:
          return resolve(dataObject);
        case 2:
          break;
        case 3:
          // TODO: Currently only for 2d
          this.triangulate(points, angles).then(position => {
            if (position !== null) {
              position.timestamp = dataFrame.createdTimestamp;
              dataObject.setPosition(position);
            }
            resolve(dataObject);
          }).catch(reject);
          break;
        default:
          return resolve(dataObject);
      }
    });
  }
  /**
   * Triangulate a absolute 3d location
   * @see {@link https://ieeexplore.ieee.org/document/6693716?tp=&arnumber=6693716}
   * @param {AbsolutePosition[]} points Points to triangulate
   * @param {number[]} angles Angles
   * @returns {Promise<AbsolutePosition>} Promise for the triangulated absolute position
   */
  triangulate(points, angles) {
    return new Promise((resolve, reject) => {
      const vectors = [points[0].toVector3(), points[1].toVector3(), points[2].toVector3()];
      const x1 = vectors[0].x - vectors[1].x;
      const y1 = vectors[0].y - vectors[1].y;
      const x3 = vectors[2].x - vectors[1].x;
      const y3 = vectors[2].y - vectors[1].y;
      const t12 = 1 / Math.tan(angles[1] - angles[0]);
      const t23 = 1 / Math.tan(angles[2] - angles[1]);
      const t31 = (1 - t12 * t23) / (t12 + t23);
      const x12 = x1 + t12 * y1;
      const y12 = y1 - t12 * x1;
      const x23 = x3 - t23 * y3;
      const y23 = y3 + t23 * x3;
      const x31 = x3 + x1 + t31 * (y3 - y1);
      const y31 = y3 + y1 - t31 * (x3 - x1);
      const k31 = x1 * x3 + y1 * y3 + t31 * (x1 * y3 - x3 * y1);
      const d = (x12 - x23) * (y23 - y31) - (y12 - y23) * (x23 - x31);
      if (d === 0) {
        return reject();
      }
      const xr = vectors[1].x + k31 * (y12 - y23) / d;
      const yr = vectors[1].y + k31 * (x23 - x12) / d;
      const point = points[0].clone();
      point.unit = points[0].unit;
      point.fromVector(new _utils__WEBPACK_IMPORTED_MODULE_3__.Vector3(xr, yr, 0));
      return resolve(point);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/EMAFilterNode.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/EMAFilterNode.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAFilterNode: () => (/* binding */ EMAFilterNode)
/* harmony export */ });
/* harmony import */ var _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js");

/**
 * @category Processing node
 */
class EMAFilterNode extends _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__.PropertyFilterProcessingNode {
  constructor(propertySelector, propertyModifier, options) {
    super(propertySelector, propertyModifier, options);
  }
  initFilter(object, value, options) {
    return new Promise(resolve => {
      if (options.alpha > 1 || options.alpha < 0) {
        throw new Error(`Filter coefficient needs to be between 0 and 1!`);
      }
      resolve({
        x: value,
        alpha: options.alpha
      });
    });
  }
  filter(object, value, filter) {
    return new Promise(resolve => {
      if (typeof value === 'number') {
        filter.x = filter.x * (1 - filter.alpha) + filter.alpha * value;
      } else {
        const vector = value;
        const filterVector = filter.x;
        filter.x = filterVector.clone().multiplyScalar(1 - filter.alpha).add(vector.clone().multiplyScalar(filter.alpha));
      }
      resolve(filter.x);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/FilterProcessingNode.js":
/*!****************************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/FilterProcessingNode.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterProcessingNode: () => (/* binding */ FilterProcessingNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");



/**
 * @category Processing node
 */
class FilterProcessingNode extends _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
  constructor(options) {
    super(options);
  }
  processObject(object, frame) {
    return new Promise((resolve, reject) => {
      // Get existing filter data
      this.getNodeData(object).then(nodeData => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
        if (nodeData === undefined) {
          nodeData = Object.assign({
            timestamp: _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now()
          }, yield this.initFilter(object, frame, this.options));
        } else if (nodeData['timestamp']) {
          if (nodeData.timestamp + this.options.expire < _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now()) {
            nodeData = Object.assign({
              timestamp: _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now()
            }, yield this.initFilter(object, frame, this.options));
          }
        } else {
          nodeData = Object.assign({
            timestamp: _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now()
          }, nodeData);
        }
        this.filter(object, frame, nodeData, this.options).then(result => {
          resolve(result);
        }).catch(reject).finally(() => {
          this.setNodeData(object, nodeData).then(() => {
            resolve(undefined);
          }).catch(reject);
        });
      })).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/HPFilterNode.js":
/*!********************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/HPFilterNode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HPFilterNode: () => (/* binding */ HPFilterNode)
/* harmony export */ });
/* harmony import */ var _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js");

/**
 * @category Processing node
 */
class HPFilterNode extends _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__.PropertyFilterProcessingNode {
  constructor(propertySelector, propertyModifier, options) {
    super(propertySelector, propertyModifier, options);
  }
  initFilter(object, value, options) {
    return new Promise(resolve => {
      const rc = 1.0 / (options.cutOff * 2 * Math.PI);
      const dt = 1.0 / options.sampleRate;
      const alpha = rc / (rc + dt);
      resolve({
        x: value,
        y: value,
        alpha
      });
    });
  }
  filter(object, value, filter) {
    return new Promise(resolve => {
      if (typeof value === 'number') {
        filter.x = filter.alpha * (filter.x + value - filter.y);
        filter.y = value;
        resolve(filter.x);
      } else {
        filter.x = filter.x.clone().add(value).sub(filter.y).multiplyScalar(filter.alpha);
        filter.y = value;
        resolve(filter.x);
      }
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/KalmanFilterNode.js":
/*!************************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/KalmanFilterNode.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KalmanFilter: () => (/* binding */ KalmanFilter),
/* harmony export */   KalmanFilterNode: () => (/* binding */ KalmanFilterNode)
/* harmony export */ });
/* harmony import */ var _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./dist/esm5/utils/math/Vector3.js");


/**
 * Kalman Filter processing node
 * @category Processing node
 */
class KalmanFilterNode extends _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__.PropertyFilterProcessingNode {
  constructor(propertySelector, propertyModifier, options) {
    super(propertySelector, propertyModifier, options);
  }
  initFilter(object, value, options) {
    return new Promise(resolve => {
      Object.keys(options).forEach(key => {
        if (typeof options[key] === 'number' && ['R', 'Q', 'A', 'B', 'C'].includes(key)) {
          options[key] = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vector3(options[key], 0, 0);
        }
      });
      resolve(Object.assign({
        x: undefined,
        cov: NaN
      }, options));
    });
  }
  filter(object, value, filter) {
    return new Promise(resolve => {
      const kf = new KalmanFilter(filter.R, filter.Q, filter.A, filter.B, filter.C, filter.x, filter.cov);
      const numeric = typeof value === 'number';
      if (numeric) {
        kf.filter(new _utils__WEBPACK_IMPORTED_MODULE_1__.Vector3(value, 0, 0));
      } else {
        kf.filter(value);
      }
      // Save the node data
      filter.x = kf.measurement;
      filter.cov = kf.covariance;
      if (numeric) {
        resolve(kf.measurement.x);
      } else {
        resolve(kf.measurement);
      }
    });
  }
}
/**
 * Basic Kalman Filter
 * @author Wouter Bulten
 * @see {@link http://github.com/wouterbulten/kalmanjs}
 * @copyright Copyright 2015-2018 Wouter Bulten
 * @license MIT
 */
class KalmanFilter {
  constructor(R, Q, A, B, C, x, cov) {
    this._R = R;
    this._Q = Q;
    this._A = A;
    this._B = B;
    this._C = C;
    this._x = x;
    this._cov = cov;
  }
  /**
   * Filter a new value
   * @param  {Vector3} z Measurement
   * @param  {Vector3} u Control
   * @returns {Vector3} Filtered value
   */
  filter(z, u) {
    if (this._x === undefined) {
      const ct = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).divide(this._C);
      this._x = ct.clone().multiply(z);
      this._cov = ct.clone().multiply(this._Q).multiply(ct);
    } else {
      // Compute prediction
      const predX = this.predict(u);
      const predCov = this.uncertainty();
      // Kalman gain
      const K = predCov.clone().multiply(this._C).multiply(new _utils__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).divide(this._C.clone().multiply(predCov).multiply(this._C).add(this._Q)));
      // Correction
      this._x = predX.clone().add(K.clone().multiply(z.clone().sub(this._C.clone().multiply(predX))));
      this._cov = predCov.clone().sub(K.clone().multiply(this._C).multiply(predCov));
    }
    return this._x;
  }
  /**
   * Predict next value
   * @param  {Vector3} [u] Control
   * @returns {Vector3} Predicted value
   */
  predict(u) {
    return this._A.clone().multiply(this._x).add(u === undefined ? new _utils__WEBPACK_IMPORTED_MODULE_1__.Vector3() : this._B.clone().multiply(u));
  }
  /**
   * Return uncertainty of filter
   * @returns {number} Uncertainty
   */
  uncertainty() {
    return this._A.clone().multiply(this._cov).multiply(this._A).add(this._R);
  }
  /**
   * Return the last filtered measurement
   * @returns {Vector3} Last measurement
   */
  get measurement() {
    return this._x;
  }
  /**
   * Get covariance
   * @returns {Vector3} covariance vector
   */
  get covariance() {
    return this._cov;
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/LPFilterNode.js":
/*!********************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/LPFilterNode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LPFilterNode: () => (/* binding */ LPFilterNode)
/* harmony export */ });
/* harmony import */ var _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js");

/**
 * @category Processing node
 */
class LPFilterNode extends _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__.PropertyFilterProcessingNode {
  constructor(propertySelector, propertyModifier, options) {
    super(propertySelector, propertyModifier, options);
  }
  initFilter(object, value, options) {
    return new Promise(resolve => {
      let alpha = options.alpha;
      if (alpha === undefined) {
        const rc = 1.0 / (options.cutOff * 2 * Math.PI);
        const dt = 1.0 / options.sampleRate;
        alpha = dt / (rc + dt);
      }
      resolve({
        x: value,
        alpha
      });
    });
  }
  filter(object, value, filter) {
    return new Promise(resolve => {
      if (typeof value === 'number') {
        filter.x = filter.x + filter.alpha * (value - filter.x);
      } else {
        const vector = value.clone();
        const filterVector = filter.x;
        filter.x = filterVector.add(vector.sub(filter.x).multiplyScalar(filter.alpha));
      }
      resolve(filter.x);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js":
/*!************************************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyFilterProcessingNode: () => (/* binding */ PropertyFilterProcessingNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ObjectProcessingNode */ "./dist/esm5/nodes/ObjectProcessingNode.js");
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/TimeService */ "./dist/esm5/service/TimeService.js");



/**
 * @category Processing node
 */
class PropertyFilterProcessingNode extends _ObjectProcessingNode__WEBPACK_IMPORTED_MODULE_0__.ObjectProcessingNode {
  constructor(propertySelector, propertyModifier, options) {
    super(options);
    this._propertySelector = propertySelector;
    this._propertyModifier = propertyModifier;
  }
  processObject(object, frame) {
    return new Promise((resolve, reject) => {
      // Extract all sensor values from the frame
      const types = this._propertySelector(object, frame);
      Promise.all(types.map(type => {
        return this.filterValue(object, type.value, type.key);
      })).then(results => {
        for (let i = 0; i < results.length; i++) {
          const result = results[i];
          const type = types[i];
          this._propertyModifier(type.key, result, object, frame);
        }
        resolve(object);
      }).catch(reject);
    });
  }
  filterValue(object, value, key = 'default') {
    return new Promise((resolve, reject) => {
      // Get existing filter data
      this.getNodeData(object).then(nodeData => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
        if (nodeData === undefined) {
          nodeData = {};
        }
        const currentTimestamp = _service_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now();
        if (nodeData[key] === undefined) {
          nodeData[key] = Object.assign({
            timestamp: currentTimestamp
          }, yield this.initFilter(object, value, this.options));
        } else {
          nodeData[key] = Object.assign({
            timestamp: currentTimestamp
          }, nodeData[key]);
        }
        if (this.options.expire) {
          const deleteData = [];
          Object.keys(nodeData).forEach(key => {
            const data = nodeData[key];
            if (data['timestamp']) {
              if (data.timestamp + this.options.expire < currentTimestamp) {
                deleteData.push(key);
              }
            }
          });
          deleteData.forEach(key => {
            delete nodeData[key];
          });
        }
        this.filter(object, value, nodeData[key], this.options).then(resolve).catch(reject).finally(() => {
          this.setNodeData(object, nodeData);
        });
      })).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/RelativePositionFilter.js":
/*!******************************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/RelativePositionFilter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativePositionFilter: () => (/* binding */ RelativePositionFilter)
/* harmony export */ });
/* harmony import */ var _service_TimeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _KalmanFilterNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KalmanFilterNode */ "./dist/esm5/nodes/processing/dsp/KalmanFilterNode.js");


/**
 * Relative position filter to filter the relative positions of an object depending on criteria
 */
class RelativePositionFilter extends _KalmanFilterNode__WEBPACK_IMPORTED_MODULE_0__.KalmanFilterNode {
  constructor(relativePositionType, options) {
    super(undefined, undefined, options);
    this._relativePositionType = relativePositionType;
    this.options.minValue = this.options.minValue || 0;
    this.options.maxValue = this.options.maxValue || 100;
    this.options.maxTimeDifference = this.options.maxTimeDifference || Infinity;
  }
  processObject(object) {
    return new Promise((resolve, reject) => {
      const relativePositions = object.relativePositions
      // For each relative position matching the type
      .filter(x => x instanceof this._relativePositionType);
      Promise.all(relativePositions
      // Filter the reference value with the built-in filter (key being object uid)
      .map(relPos => {
        return this.filterValue(object, relPos.referenceValue, relPos.referenceObjectUID);
      })).then(results => {
        results.forEach((result, idx) => {
          const value = result;
          const relativePosition = relativePositions[idx];
          if (typeof value === 'number' && value <= this.options.maxValue && value >= this.options.minValue && _service_TimeService__WEBPACK_IMPORTED_MODULE_1__.TimeService.now() - this.options.maxTimeDifference <= relativePosition.timestamp) {
            relativePosition.referenceValue = value;
          } else {
            object.removeRelativePositions(relativePosition.referenceObjectUID);
          }
        });
        resolve(object);
      }).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/SMAFilterNode.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/SMAFilterNode.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SMAFilterNode: () => (/* binding */ SMAFilterNode)
/* harmony export */ });
/* harmony import */ var _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js");

/**
 * @category Processing node
 */
class SMAFilterNode extends _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__.PropertyFilterProcessingNode {
  constructor(propertySelector, propertyModifier, options) {
    super(propertySelector, propertyModifier, options);
  }
  initFilter(object, value, options) {
    return new Promise(resolve => {
      if (options.taps < 1) {
        throw new Error(`Filter taps needs to be higher than 1!`);
      }
      resolve({
        x: [],
        taps: options.taps
      });
    });
  }
  filter(object, value, filter, options) {
    return new Promise(resolve => {
      filter.x.push(value);
      if (filter.x.length > filter.taps) {
        filter.x.shift();
      } else if (options.minTaps && filter.x.length < options.minTaps) {
        resolve(value);
      }
      if (typeof value === 'number') {
        const sum = filter.x.reduce((a, b) => a + b);
        resolve(sum / filter.taps);
      } else {
        const sum = filter.x[0].clone();
        for (let i = 1; i < filter.x.length; i++) {
          sum.add(filter.x[i]);
        }
        resolve(sum.divideScalar(filter.taps));
      }
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/processing/dsp/index.js":
/*!*************************************************!*\
  !*** ./dist/esm5/nodes/processing/dsp/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAFilterNode: () => (/* reexport safe */ _EMAFilterNode__WEBPACK_IMPORTED_MODULE_6__.EMAFilterNode),
/* harmony export */   FilterProcessingNode: () => (/* reexport safe */ _FilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__.FilterProcessingNode),
/* harmony export */   HPFilterNode: () => (/* reexport safe */ _HPFilterNode__WEBPACK_IMPORTED_MODULE_4__.HPFilterNode),
/* harmony export */   KalmanFilter: () => (/* reexport safe */ _KalmanFilterNode__WEBPACK_IMPORTED_MODULE_2__.KalmanFilter),
/* harmony export */   KalmanFilterNode: () => (/* reexport safe */ _KalmanFilterNode__WEBPACK_IMPORTED_MODULE_2__.KalmanFilterNode),
/* harmony export */   LPFilterNode: () => (/* reexport safe */ _LPFilterNode__WEBPACK_IMPORTED_MODULE_3__.LPFilterNode),
/* harmony export */   PropertyFilterProcessingNode: () => (/* reexport safe */ _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_1__.PropertyFilterProcessingNode),
/* harmony export */   RelativePositionFilter: () => (/* reexport safe */ _RelativePositionFilter__WEBPACK_IMPORTED_MODULE_7__.RelativePositionFilter),
/* harmony export */   SMAFilterNode: () => (/* reexport safe */ _SMAFilterNode__WEBPACK_IMPORTED_MODULE_5__.SMAFilterNode)
/* harmony export */ });
/* harmony import */ var _FilterProcessingNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/FilterProcessingNode.js");
/* harmony import */ var _PropertyFilterProcessingNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyFilterProcessingNode */ "./dist/esm5/nodes/processing/dsp/PropertyFilterProcessingNode.js");
/* harmony import */ var _KalmanFilterNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KalmanFilterNode */ "./dist/esm5/nodes/processing/dsp/KalmanFilterNode.js");
/* harmony import */ var _LPFilterNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LPFilterNode */ "./dist/esm5/nodes/processing/dsp/LPFilterNode.js");
/* harmony import */ var _HPFilterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HPFilterNode */ "./dist/esm5/nodes/processing/dsp/HPFilterNode.js");
/* harmony import */ var _SMAFilterNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SMAFilterNode */ "./dist/esm5/nodes/processing/dsp/SMAFilterNode.js");
/* harmony import */ var _EMAFilterNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EMAFilterNode */ "./dist/esm5/nodes/processing/dsp/EMAFilterNode.js");
/* harmony import */ var _RelativePositionFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RelativePositionFilter */ "./dist/esm5/nodes/processing/dsp/RelativePositionFilter.js");









/***/ }),

/***/ "./dist/esm5/nodes/processing/index.js":
/*!*********************************************!*\
  !*** ./dist/esm5/nodes/processing/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccuracyModifierNode: () => (/* reexport safe */ _AccuracyModifierNode__WEBPACK_IMPORTED_MODULE_5__.AccuracyModifierNode),
/* harmony export */   CalibrationNode: () => (/* reexport safe */ _CalibrationNode__WEBPACK_IMPORTED_MODULE_7__.CalibrationNode),
/* harmony export */   CellIdentificationNode: () => (/* reexport safe */ _CellIdentificationNode__WEBPACK_IMPORTED_MODULE_6__.CellIdentificationNode),
/* harmony export */   EMAFilterNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.EMAFilterNode),
/* harmony export */   FilterProcessingNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.FilterProcessingNode),
/* harmony export */   HPFilterNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.HPFilterNode),
/* harmony export */   KalmanFilter: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.KalmanFilter),
/* harmony export */   KalmanFilterNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.KalmanFilterNode),
/* harmony export */   LPFilterNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.LPFilterNode),
/* harmony export */   MultilaterationNode: () => (/* reexport safe */ _MultilaterationNode__WEBPACK_IMPORTED_MODULE_3__.MultilaterationNode),
/* harmony export */   PropertyFilterProcessingNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.PropertyFilterProcessingNode),
/* harmony export */   ReferenceSpaceConversionNode: () => (/* reexport safe */ _ReferenceSpaceConversionNode__WEBPACK_IMPORTED_MODULE_0__.ReferenceSpaceConversionNode),
/* harmony export */   RelativePositionFilter: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.RelativePositionFilter),
/* harmony export */   RelativePositionProcessing: () => (/* reexport safe */ _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_2__.RelativePositionProcessing),
/* harmony export */   SMAFilterNode: () => (/* reexport safe */ _dsp__WEBPACK_IMPORTED_MODULE_1__.SMAFilterNode),
/* harmony export */   TriangulationNode: () => (/* reexport safe */ _TriangulationNode__WEBPACK_IMPORTED_MODULE_4__.TriangulationNode)
/* harmony export */ });
/* harmony import */ var _ReferenceSpaceConversionNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReferenceSpaceConversionNode */ "./dist/esm5/nodes/processing/ReferenceSpaceConversionNode.js");
/* harmony import */ var _dsp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsp */ "./dist/esm5/nodes/processing/dsp/index.js");
/* harmony import */ var _RelativePositionProcessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelativePositionProcessing */ "./dist/esm5/nodes/processing/RelativePositionProcessing.js");
/* harmony import */ var _MultilaterationNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultilaterationNode */ "./dist/esm5/nodes/processing/MultilaterationNode.js");
/* harmony import */ var _TriangulationNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TriangulationNode */ "./dist/esm5/nodes/processing/TriangulationNode.js");
/* harmony import */ var _AccuracyModifierNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccuracyModifierNode */ "./dist/esm5/nodes/processing/AccuracyModifierNode.js");
/* harmony import */ var _CellIdentificationNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CellIdentificationNode */ "./dist/esm5/nodes/processing/CellIdentificationNode.js");
/* harmony import */ var _CalibrationNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CalibrationNode */ "./dist/esm5/nodes/processing/CalibrationNode.js");









/***/ }),

/***/ "./dist/esm5/nodes/shapes/BroadcastNode.js":
/*!*************************************************!*\
  !*** ./dist/esm5/nodes/shapes/BroadcastNode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BroadcastNode: () => (/* binding */ BroadcastNode)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Node */ "./dist/esm5/Node.js");

/**
 * @category Flow shape
 */
class BroadcastNode extends _Node__WEBPACK_IMPORTED_MODULE_0__.Node {}

/***/ }),

/***/ "./dist/esm5/nodes/sink/CallbackSinkNode.js":
/*!**************************************************!*\
  !*** ./dist/esm5/nodes/sink/CallbackSinkNode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackSinkNode: () => (/* binding */ CallbackSinkNode)
/* harmony export */ });
/* harmony import */ var _SinkNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SinkNode */ "./dist/esm5/nodes/SinkNode.js");

/**
 * @category Sink node
 */
class CallbackSinkNode extends _SinkNode__WEBPACK_IMPORTED_MODULE_0__.SinkNode {
  constructor(callback = () => null, options) {
    super(options);
    this.callback = callback;
  }
  onPush(frame, options) {
    return new Promise((resolve, reject) => {
      Promise.resolve(this.callback(frame, options)).then(resolve).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/sink/LoggingSinkNode.js":
/*!*************************************************!*\
  !*** ./dist/esm5/nodes/sink/LoggingSinkNode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggingSinkNode: () => (/* binding */ LoggingSinkNode)
/* harmony export */ });
/* harmony import */ var _CallbackSinkNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallbackSinkNode */ "./dist/esm5/nodes/sink/CallbackSinkNode.js");

/**
 * This sink node will serialize the data frames pushed to this
 * output layer, and log them to the console using the logging function
 * specified in the constructor.
 * @category Sink node
 */
class LoggingSinkNode extends _CallbackSinkNode__WEBPACK_IMPORTED_MODULE_0__.CallbackSinkNode {
  /**
   * Create a new logger output sink
   * @param {Function} loggingFn Logging function
   * @param {SinkNodeOptions} options Sink node options
   */
  constructor(loggingFn, options) {
    super(loggingFn, options);
    if (loggingFn === undefined) {
      this.callback = frame => {
        this.logger('debug', `Received a data frame in node ${this.uid}`, frame);
      };
    }
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/sink/RemoteSinkNode.js":
/*!************************************************!*\
  !*** ./dist/esm5/nodes/sink/RemoteSinkNode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteSinkNode: () => (/* binding */ RemoteSinkNode)
/* harmony export */ });
/* harmony import */ var _RemoteNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RemoteNode */ "./dist/esm5/nodes/RemoteNode.js");
/* harmony import */ var _SinkNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SinkNode */ "./dist/esm5/nodes/SinkNode.js");
/* harmony import */ var _graph_Edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graph/Edge */ "./dist/esm5/graph/Edge.js");



/**
 * Remote sink node
 */
class RemoteSinkNode extends _SinkNode__WEBPACK_IMPORTED_MODULE_0__.SinkNode {
  constructor(options) {
    var _a;
    super(options);
    this.remoteNode = new ((_a = options.type) !== null && _a !== void 0 ? _a : _RemoteNode__WEBPACK_IMPORTED_MODULE_1__.RemoteNode)(options, this);
    this.uid = `${this.uid}-sink`;
    this.once('build', this._onRemoteBuild.bind(this));
    this.once('destroy', this._onRemoteDestroy.bind(this));
  }
  _onRemoteBuild(graphBuilder) {
    this.remoteNode.graph = this.graph;
    graphBuilder.addNode(this.remoteNode);
    graphBuilder.addEdge(new _graph_Edge__WEBPACK_IMPORTED_MODULE_2__.Edge(this, this.remoteNode));
    return this.remoteNode.emitAsync('build', graphBuilder);
  }
  _onRemoteDestroy() {
    return this.remoteNode.emitAsync('destroy');
  }
  onPush(data, options) {
    // Force push to remote node, sink nodes do not push by default
    return this.remoteNode.push(data, options);
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/sink/index.js":
/*!***************************************!*\
  !*** ./dist/esm5/nodes/sink/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackSinkNode: () => (/* reexport safe */ _CallbackSinkNode__WEBPACK_IMPORTED_MODULE_1__.CallbackSinkNode),
/* harmony export */   LoggingSinkNode: () => (/* reexport safe */ _LoggingSinkNode__WEBPACK_IMPORTED_MODULE_0__.LoggingSinkNode),
/* harmony export */   RemoteSinkNode: () => (/* reexport safe */ _RemoteSinkNode__WEBPACK_IMPORTED_MODULE_2__.RemoteSinkNode)
/* harmony export */ });
/* harmony import */ var _LoggingSinkNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoggingSinkNode */ "./dist/esm5/nodes/sink/LoggingSinkNode.js");
/* harmony import */ var _CallbackSinkNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallbackSinkNode */ "./dist/esm5/nodes/sink/CallbackSinkNode.js");
/* harmony import */ var _RemoteSinkNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoteSinkNode */ "./dist/esm5/nodes/sink/RemoteSinkNode.js");




/***/ }),

/***/ "./dist/esm5/nodes/source/CallbackSourceNode.js":
/*!******************************************************!*\
  !*** ./dist/esm5/nodes/source/CallbackSourceNode.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackSourceNode: () => (/* binding */ CallbackSourceNode)
/* harmony export */ });
/* harmony import */ var _SourceNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SourceNode */ "./dist/esm5/nodes/SourceNode.js");

/**
 * @category Source node
 */
class CallbackSourceNode extends _SourceNode__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
  constructor(callback = () => null, options) {
    super(options);
    this.callback = callback;
  }
  onPull(options) {
    return new Promise((resolve, reject) => {
      Promise.resolve(this.callback(options)).then(output => {
        resolve(output);
      }).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/source/HistorySourceNode.js":
/*!*****************************************************!*\
  !*** ./dist/esm5/nodes/source/HistorySourceNode.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistorySourceNode: () => (/* binding */ HistorySourceNode)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _data_DataFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/DataFrame */ "./dist/esm5/data/DataFrame.js");
/* harmony import */ var _SourceNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SourceNode */ "./dist/esm5/nodes/SourceNode.js");



/**
 * @category Source node
 */
class HistorySourceNode extends _SourceNode__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
  constructor(options) {
    super(options);
  }
  onPull(options = {
    requestedObjects: []
  }) {
    return new Promise((resolve, reject) => {
      const service = this.model.findDataService(_data__WEBPACK_IMPORTED_MODULE_1__.DataObject);
      const requestPromises = [];
      options.requestedObjects.forEach(uid => {
        requestPromises.push(new Promise(resolve => {
          service.findByUID(uid).then(object => {
            resolve(object);
          }).catch(() => {
            // Ignore
            resolve(undefined);
          });
        }));
      });
      // Complete service requests
      Promise.all(requestPromises).then(objects => {
        // Create a new dataframe from these objects
        const frame = new _data_DataFrame__WEBPACK_IMPORTED_MODULE_2__.DataFrame(this.source);
        objects.forEach(object => {
          if (object) {
            frame.addObject(object);
          }
        });
        resolve(frame);
      }).catch(reject);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/source/ListSourceNode.js":
/*!**************************************************!*\
  !*** ./dist/esm5/nodes/source/ListSourceNode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListSourceNode: () => (/* binding */ ListSourceNode)
/* harmony export */ });
/* harmony import */ var _SourceNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SourceNode */ "./dist/esm5/nodes/SourceNode.js");

/**
 * This source node is initialized with an array of data. This data
 * is popped when pulling from this node.
 * @category Source node
 */
class ListSourceNode extends _SourceNode__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
  constructor(inputData, options) {
    super(options);
    this._inputData = [];
    this._inputData = inputData;
  }
  get inputData() {
    return this._inputData;
  }
  set inputData(inputData) {
    this._inputData = inputData;
  }
  get size() {
    return this._inputData.length;
  }
  onPull() {
    return new Promise(resolve => {
      if (this._inputData.length !== 0) {
        resolve(this._inputData.shift());
      }
      resolve(null);
    });
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/source/RemoteSourceNode.js":
/*!****************************************************!*\
  !*** ./dist/esm5/nodes/source/RemoteSourceNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteSourceNode: () => (/* binding */ RemoteSourceNode)
/* harmony export */ });
/* harmony import */ var _RemoteNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RemoteNode */ "./dist/esm5/nodes/RemoteNode.js");
/* harmony import */ var _graph_Edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graph/Edge */ "./dist/esm5/graph/Edge.js");
/* harmony import */ var _SourceNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SourceNode */ "./dist/esm5/nodes/SourceNode.js");



/**
 * Remote source node
 */
class RemoteSourceNode extends _SourceNode__WEBPACK_IMPORTED_MODULE_0__.SourceNode {
  constructor(options) {
    var _a;
    super(options);
    this.remoteNode = new ((_a = options.type) !== null && _a !== void 0 ? _a : _RemoteNode__WEBPACK_IMPORTED_MODULE_1__.RemoteNode)(options, this);
    this.uid = `${this.uid}-source`;
    this.once('build', this._onRemoteBuild.bind(this));
    this.on('error', this._onDownstreamError.bind(this));
    this.on('completed', this._onDownstreamCompleted.bind(this));
  }
  _onRemoteBuild(graphBuilder) {
    // Add a remote node before this node
    this.remoteNode.graph = this.graph;
    graphBuilder.addNode(this.remoteNode);
    graphBuilder.addEdge(new _graph_Edge__WEBPACK_IMPORTED_MODULE_2__.Edge(this.remoteNode, this));
    return this.remoteNode.emitAsync('build', graphBuilder);
  }
  onPull() {
    return new Promise((resolve, reject) => {
      this.remoteNode.pull().then(() => {
        resolve(undefined);
      }).catch(reject);
    });
  }
  _onDownstreamError(error) {
    this.remoteNode.emit('error', error);
  }
  _onDownstreamCompleted(event) {
    this.remoteNode.emit('completed', event);
  }
}

/***/ }),

/***/ "./dist/esm5/nodes/source/index.js":
/*!*****************************************!*\
  !*** ./dist/esm5/nodes/source/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackSourceNode: () => (/* reexport safe */ _CallbackSourceNode__WEBPACK_IMPORTED_MODULE_1__.CallbackSourceNode),
/* harmony export */   HistorySourceNode: () => (/* reexport safe */ _HistorySourceNode__WEBPACK_IMPORTED_MODULE_2__.HistorySourceNode),
/* harmony export */   ListSourceNode: () => (/* reexport safe */ _ListSourceNode__WEBPACK_IMPORTED_MODULE_0__.ListSourceNode),
/* harmony export */   RemoteSourceNode: () => (/* reexport safe */ _RemoteSourceNode__WEBPACK_IMPORTED_MODULE_3__.RemoteSourceNode)
/* harmony export */ });
/* harmony import */ var _ListSourceNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListSourceNode */ "./dist/esm5/nodes/source/ListSourceNode.js");
/* harmony import */ var _CallbackSourceNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallbackSourceNode */ "./dist/esm5/nodes/source/CallbackSourceNode.js");
/* harmony import */ var _HistorySourceNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HistorySourceNode */ "./dist/esm5/nodes/source/HistorySourceNode.js");
/* harmony import */ var _RemoteSourceNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemoteSourceNode */ "./dist/esm5/nodes/source/RemoteSourceNode.js");





/***/ }),

/***/ "./dist/esm5/service/CalibrationService.js":
/*!*************************************************!*\
  !*** ./dist/esm5/service/CalibrationService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalibrationService: () => (/* binding */ CalibrationService)
/* harmony export */ });
/* harmony import */ var _DataObjectService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataObjectService */ "./dist/esm5/service/DataObjectService.js");

/**
 * Calibration service. This service has to be used together with a [[CalibrationNode]]
 * that is placed behind the source node that is used for calibration.
 *
 * When a user-calibration is started, the calibration node will intercept all data frames.
 *
 * ## Usage
 * ```typescript
 * const model = await ModelBuilder.create()
 *  .addService(new MyCalibrationService())
 *  .from(new MyUncalibratedSensor())
 *  .via(new CalibrationNode({
 *      service: MyCalibrationService
 *  }))
 *  .via(...)
 *  .to(...).build();
 *
 * function whenUserClicksCalibrate() {
 *  model.findService(MyCalibrationService).calibrate();
 * }
 * ```
 */
class CalibrationService extends _DataObjectService__WEBPACK_IMPORTED_MODULE_0__.DataObjectService {
  /**
   * Start the calibration interception. Make sure to enable
   * any passive sources.
   * @param {CalibrationObjectCallback} [objectCallback] Object callback
   * @param {CalibrationFrameCallback} [frameCallback] Frame callback
   */
  start(objectCallback, frameCallback) {
    if (!this.node) {
      throw new Error(`Calibration node did not register itself to the calibration service!`);
    }
    this.node.start(objectCallback, frameCallback);
  }
  /**
   * Stop the calibration interception.
   */
  stop() {
    if (!this.node) {
      throw new Error(`Calibration node did not register itself to the calibration service!`);
    }
    this.node.stop();
  }
  /**
   * Suspend the calibration interception. This will still intercept data frames, but the
   * callbacks will be cleared.
   */
  suspend() {
    if (!this.node) {
      throw new Error(`Calibration node did not register itself to the calibration service!`);
    }
    this.node.suspend();
  }
}

/***/ }),

/***/ "./dist/esm5/service/DataFrameService.js":
/*!***********************************************!*\
  !*** ./dist/esm5/service/DataFrameService.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataFrameService: () => (/* binding */ DataFrameService)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");


/**
 * The data frame service manages storage of complete data frames.
 */
class DataFrameService extends _DataService__WEBPACK_IMPORTED_MODULE_0__.DataService {
  constructor(dataServiceDriver) {
    super(dataServiceDriver);
  }
  /**
   * Insert a new data frame
   * @param {DataFrame} frame Data frame to insert
   * @returns {DataFrame} Inserted frame
   */
  insertFrame(frame) {
    return this.insert(frame.uid, frame);
  }
  /**
   * Find data frames created before a certain timestamp
   * @param {number} timestamp Timestamp
   * @param {FindOptions} [options] Find options
   * @returns {DataFrame[]} Array of data frames before the specified timestamp
   */
  findBefore(timestamp, options) {
    return this._findTimestamp({
      $lte: timestamp
    }, options);
  }
  /**
   * Find data frames created after a certain timestamp
   * @param {number} timestamp Timestamp
   * @param {FindOptions} [options] Find options
   * @returns {DataFrame[]} Array of data frames after the specified timestamp
   */
  findAfter(timestamp, options) {
    return this._findTimestamp({
      $gte: timestamp
    }, options);
  }
  /**
   * Find data frames by data object
   * @param {DataObject | string} dataObject Data object to get frames for
   * @param {FindOptions} [options] Find options. By default sorted by createdTimestamp in descending order
   * @returns {DataFrame[]} Array of data frames that contain the specified object
   */
  findByDataObject(dataObject, options) {
    return this.findAll({
      objects: {
        $elemMatch: {
          uid: dataObject instanceof _data__WEBPACK_IMPORTED_MODULE_1__.DataObject ? dataObject.uid : dataObject
        }
      }
    }, options || {
      sort: [['createdTimestamp', -1]]
    });
  }
  _findTimestamp(timestampFilter, options) {
    return this.findAll({
      createdTimestamp: timestampFilter
    }, options);
  }
}

/***/ }),

/***/ "./dist/esm5/service/DataObjectService.js":
/*!************************************************!*\
  !*** ./dist/esm5/service/DataObjectService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataObjectService: () => (/* binding */ DataObjectService)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./dist/esm5/data/position/Absolute3DPosition.js");
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");


/**
 * The object service manages the data of objects that are currently being
 * processed in the model and objects that need to be tracked.
 */
class DataObjectService extends _DataService__WEBPACK_IMPORTED_MODULE_0__.DataService {
  constructor(dataServiceDriver) {
    super(dataServiceDriver);
  }
  /**
   * Insert a new data object
   * @param {DataObject} object Data object to insert
   * @returns {DataObject} Inserted object
   */
  insertObject(object) {
    return this.insert(object.uid, object);
  }
  insert(id, object) {
    return new Promise((resolve, reject) => {
      this.driver.insert(id, object).then(obj => {
        resolve(obj);
      }).catch(reject);
    });
  }
  /**
   * Find a data object by its display name
   * @param {string} displayName Name to search for
   * @returns {DataObject[]} Array of data objects that match the display name
   */
  findByDisplayName(displayName) {
    return this.findAll({
      displayName
    });
  }
  /**
   * Find a data object by its current absolute position
   * @param {AbsolutePosition} position Current absolute position
   * @returns {DataObject[]} Array of data objects that match the position
   */
  findByPosition(position) {
    const vector = position.toVector3();
    let filter;
    if (position instanceof _data__WEBPACK_IMPORTED_MODULE_1__.Absolute3DPosition) {
      filter = {
        'position.x': vector.x,
        'position.y': vector.y,
        'position.z': vector.z
      };
    } else {
      filter = {
        'position.x': vector.x,
        'position.y': vector.y
      };
    }
    return this.findAll(filter);
  }
  /**
   * Find all data objects with a parent UID
   * @param {string} parentUID string Parent UID
   * @returns {DataObject[]} Array of data objects that match the parent UID
   */
  findByParentUID(parentUID) {
    return this.findAll({
      parentUID
    });
  }
  /**
   * Find data objects created before a certain timestamp
   * @param {number} timestamp Timestamp
   * @returns {DataObject[]} Array of data objects before the specified timestamp
   */
  findBefore(timestamp) {
    return this._findTimestamp({
      $lte: timestamp
    });
  }
  /**
   * Find data objects created after a certain timestamp
   * @param {number} timestamp Timestamp
   * @returns {DataObject[]} Array of data objects after the specified timestamp
   */
  findAfter(timestamp) {
    return this._findTimestamp({
      $gte: timestamp
    });
  }
  _findTimestamp(timestampFilter) {
    return this.findAll({
      createdTimestamp: timestampFilter
    });
  }
}

/***/ }),

/***/ "./dist/esm5/service/DataService.js":
/*!******************************************!*\
  !*** ./dist/esm5/service/DataService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _DataServiceDriver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataServiceDriver */ "./dist/esm5/service/DataServiceDriver.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");




/**
 * DataService
 *
 * ## Usage
 *
 * ### Finding a DataService
 * ```typescript
 * import { Node, DataFrame } from '@openhps/core';
 *
 * export class CustomNode extends Node<DataFrame> {
 *     // Data services can be found in any function inside a node
 *     // that is added to a model
 *     functionInsideNode(): void {
 *         // Get a service by its type
 *         let service = this.model.findDataService(DataObject);
 *         let service = this.model.findDataServiceByName("DataObject");
 *     }
 * }
 * ```
 */
let DataService = class DataService extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(dataServiceDriver) {
    super();
    this.priority = -1;
    this.driver = dataServiceDriver;
    if (this.driver) {
      this.uid = this.driver.dataType.name;
    }
    this.once('build', this._buildDriver.bind(this));
    this.once('destroy', this._destroyDriver.bind(this));
  }
  _buildDriver() {
    return new Promise((resolve, reject) => {
      if (this.driver) {
        this.driver.model = this.model;
        this.driver.emitAsync('build').then(() => resolve()).catch(reject);
      } else {
        resolve();
      }
    });
  }
  _destroyDriver() {
    return new Promise((resolve, reject) => {
      if (this.driver) {
        this.driver.emitAsync('destroy').then(() => resolve()).catch(reject);
      } else {
        resolve();
      }
    });
  }
  get dataType() {
    if (this.driver) {
      return this.driver.dataType;
    }
    return undefined;
  }
  /**
   * Set the priority of the data service
   * a higher number means a higher priority.
   * @param {number} value Priority value
   * @returns {DataService} data service instance
   */
  setPriority(value) {
    this.priority = value;
    return this;
  }
  findByUID(uid) {
    return this.driver.findByUID(uid);
  }
  findOne(query, options) {
    return this.driver.findOne(query, options);
  }
  findAll(query, options) {
    return this.driver.findAll(query, options);
  }
  insert(id, object) {
    return this.driver.insert(id, object);
  }
  count(query) {
    return this.driver.count(query);
  }
  delete(id) {
    return this.driver.delete(id);
  }
  deleteAll(filter) {
    return this.driver.deleteAll(filter);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _DataServiceDriver__WEBPACK_IMPORTED_MODULE_3__.DataServiceDriver)], DataService.prototype, "driver", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)], DataService.prototype, "priority", void 0);
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_DataServiceDriver__WEBPACK_IMPORTED_MODULE_3__.DataServiceDriver])], DataService);

/***/ }),

/***/ "./dist/esm5/service/DataServiceDriver.js":
/*!************************************************!*\
  !*** ./dist/esm5/service/DataServiceDriver.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataServiceDriver: () => (/* binding */ DataServiceDriver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");
/* harmony import */ var _data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");




/**
 * DataService driver for storing and querying data objects
 * of a specific data type using a certain implementation.
 */
let DataServiceDriver = class DataServiceDriver extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(dataType, options = {}) {
    super();
    this.options = options;
    this.options.serialize = this.options.serialize || (obj => _data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.serialize(obj));
    this.options.deserialize = this.options.deserialize || (obj => _data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.deserialize(obj));
    if (dataType) {
      this.uid = dataType.name;
      this.dataType = dataType;
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)({
  serializer: dataType => dataType.name,
  deserializer: dataTypeString => _data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.findTypeByName(dataTypeString)
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], DataServiceDriver.prototype, "dataType", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], DataServiceDriver.prototype, "options", void 0);
DataServiceDriver = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object, Object])], DataServiceDriver);

/***/ }),

/***/ "./dist/esm5/service/DummyDataService.js":
/*!***********************************************!*\
  !*** ./dist/esm5/service/DummyDataService.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyDataService: () => (/* binding */ DummyDataService)
/* harmony export */ });
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");

class DummyDataService extends _DataService__WEBPACK_IMPORTED_MODULE_0__.DataService {
  constructor(uid, dataType) {
    super(undefined);
    this.uid = uid;
    this._dataType = dataType;
  }
  get dataType() {
    return this._dataType;
  }
}

/***/ }),

/***/ "./dist/esm5/service/DummyService.js":
/*!*******************************************!*\
  !*** ./dist/esm5/service/DummyService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyService: () => (/* binding */ DummyService)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");

class DummyService extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(uid) {
    super();
    this.uid = uid;
  }
}

/***/ }),

/***/ "./dist/esm5/service/KeyValueDataService.js":
/*!**************************************************!*\
  !*** ./dist/esm5/service/KeyValueDataService.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyValueDataService: () => (/* binding */ KeyValueDataService)
/* harmony export */ });
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");
/* harmony import */ var _MemoryDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemoryDataService */ "./dist/esm5/service/MemoryDataService.js");


/**
 * Basic key value data service. This data service can be used to communicate
 * between workers and the main thread.
 */
class KeyValueDataService extends _DataService__WEBPACK_IMPORTED_MODULE_0__.DataService {
  constructor(uid, dataServiceDriver) {
    super(dataServiceDriver);
    if (!dataServiceDriver) {
      this.driver = new _MemoryDataService__WEBPACK_IMPORTED_MODULE_1__.MemoryDataService(Object, {
        serialize: d => d,
        deserialize: d => d
      });
      this.driver.dataType = Object;
    }
    this.uid = uid || this.constructor.name;
  }
  /**
   * Get the value of a key
   * @param {string} key Key
   * @returns {Promise<any>} Promise of the value
   */
  getValue(key) {
    return this.findByUID(key);
  }
  /**
   * Set a value
   * @param {string} key Key to use
   * @param {any} value Value to store
   * @returns {Promise<void>} Promise of setting the value
   */
  setValue(key, value) {
    this.emit('set', key, value);
    return this.insert(key, value);
  }
}

/***/ }),

/***/ "./dist/esm5/service/LocationBasedService.js":
/*!***************************************************!*\
  !*** ./dist/esm5/service/LocationBasedService.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationBasedService: () => (/* binding */ LocationBasedService)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./dist/esm5/utils/unit/TimeUnit.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");
/* harmony import */ var _TimeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeService */ "./dist/esm5/service/TimeService.js");




/**
 * Location-Based Service
 *
 * ## Usage
 *
 * ### Creation
 * ```typescript
 * const service = new LocationBasedService<
 *  DataObject,
 *  GeographicalPosition
 * >();
 *
 * ModelBuilder.create()
 *  .addService(service)
 *  .from()
 *  .to().build();
 * ```
 *
 * ### Getting the current position
 *
 * ### Setting the current position
 *
 * ### Watching the position of an object
 */
class LocationBasedService extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(options) {
    super();
    this.watchers = new Map();
    this.watchedObjects = new Map();
    this.watchIndex = 1;
    this.options = options || {};
    this.once('build', this._initLBS.bind(this));
    this.once('destroy', this._destroy.bind(this));
  }
  _initLBS() {
    // Default options
    this.options.pullNode = this.options.pullNode || this.model.internalSink.uid;
    this.options.dataService = this.options.dataService || _data__WEBPACK_IMPORTED_MODULE_1__.DataObject;
    this.service = this.model.findDataService(this.options.dataService);
    this.service.on('insert', (uid, storedObject) => {
      const watchIds = this.watchedObjects.get(uid);
      if (watchIds) {
        const position = storedObject.position;
        watchIds.forEach(watchId => {
          const watcher = this.watchers.get(watchId);
          if (position) {
            watcher.callback(position);
          }
        });
      }
    });
  }
  _destroy() {
    Array.from(this.watchers.keys()).forEach(watcher => {
      this.clearWatch(watcher);
    });
  }
  /**
   * Set the current position of an object
   * @param {DataObject | string} object Data object to get the current position of or uid
   * @param {AbsolutePosition} position Position to update
   * @returns {Promise<void>} Promise of updating
   */
  setCurrentPosition(object, position) {
    return new Promise((resolve, reject) => {
      const uid = object instanceof _data__WEBPACK_IMPORTED_MODULE_1__.DataObject ? object.uid : object;
      this.service.findByUID(uid).then(storedObj => {
        storedObj.setPosition(position);
        return this.service.insertObject(storedObj);
      }).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  /**
   * Get the current position of a specific data object.
   * @param {DataObject | string} object Data object to get the current position of or uid
   * @param {GeoOptions} [options] Current position options
   * @returns {Promise<AbsolutePosition>} Promise of latest absolute position
   */
  getCurrentPosition(object, options = {}) {
    return new Promise((resolve, reject) => {
      const maximumAge = options.maximumAge || Infinity;
      options.timeout = options.timeout || 10000;
      const uid = object instanceof _data__WEBPACK_IMPORTED_MODULE_1__.DataObject ? object.uid : object;
      // Force update
      if (options.forceUpdate) {
        this.model.findNodeByUID(this.options.pullNode).pull({
          requestedObjects: [uid]
        });
        const timeout = setTimeout(() => {
          this.clearWatch(watchId);
          reject(new Error('Timeout error for getting current position!'));
        }, options.timeout);
        const watchId = this.watchPosition(object, (pos, err) => {
          this.clearWatch(watchId);
          clearTimeout(timeout);
          if (err) {
            return reject(err);
          }
          resolve(pos);
        }, Object.assign(Object.assign({}, options), {
          interval: -1,
          forceUpdate: false
        }));
      } else {
        this.service.findByUID(uid).then(storedObj => {
          const position = storedObj.position;
          const time = _TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.getUnit().convert(_TimeService__WEBPACK_IMPORTED_MODULE_2__.TimeService.now(), _utils__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.MILLISECOND);
          if (position && position.timestamp >= time - maximumAge) {
            // Stored position satisfies maximum age
            resolve(position);
          } else {
            return this.getCurrentPosition(object, Object.assign(Object.assign({}, options), {
              forceUpdate: true
            }));
          }
        }).then(resolve).catch(reject);
      }
    });
  }
  /**
   * Watch for position changes
   * @param {DataObject | string} object Data object to watch for position changes for
   * @param {(position: AbsolutePosition, err?: Error) => void} callback Callback function
   * @param {GeoWatchOptions} [options] Watch options
   * @returns {number} Watch number
   */
  watchPosition(object, callback, options = {}) {
    var _a;
    const uid = object instanceof _data__WEBPACK_IMPORTED_MODULE_1__.DataObject ? object.uid : object;
    const watchId = this.watchIndex++;
    const interval = (_a = options.interval) !== null && _a !== void 0 ? _a : 1000;
    const timer = interval !== -1 ? setInterval(() => {
      this.getCurrentPosition(object, options).then(callback).catch(ex => {
        callback(undefined, ex);
      });
    }, interval) : undefined;
    this.watchers.set(watchId, {
      timer,
      uid,
      callback
    });
    this.watchObject(uid, watchId);
    return watchId;
  }
  watchObject(uid, watchId) {
    var _a;
    const existingIds = (_a = this.watchedObjects.get(uid)) !== null && _a !== void 0 ? _a : [];
    existingIds.push(watchId);
    this.watchedObjects.set(uid, existingIds);
  }
  unwatchObject(uid, watchId) {
    var _a;
    const existingIds = (_a = this.watchedObjects.get(uid)) !== null && _a !== void 0 ? _a : [];
    existingIds.splice(existingIds.indexOf(watchId), 1);
    if (existingIds.length === 0) {
      this.watchedObjects.delete(uid);
    } else {
      this.watchedObjects.set(uid, existingIds);
    }
  }
  /**
   * Clear a running position watch
   * @param {number} watchId Watch identifier
   */
  clearWatch(watchId) {
    const watcher = this.watchers.get(watchId);
    if (watcher.timer !== undefined) {
      clearInterval(watcher.timer);
    }
    this.watchers.delete(watchId);
    this.unwatchObject(watcher.uid, watchId);
  }
}

/***/ }),

/***/ "./dist/esm5/service/MemoryDataService.js":
/*!************************************************!*\
  !*** ./dist/esm5/service/MemoryDataService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryDataService: () => (/* binding */ MemoryDataService)
/* harmony export */ });
/* harmony import */ var _DataServiceDriver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataServiceDriver */ "./dist/esm5/service/DataServiceDriver.js");
/* harmony import */ var _MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemoryQueryEvaluator */ "./dist/esm5/service/MemoryQueryEvaluator.js");


class MemoryDataService extends _DataServiceDriver__WEBPACK_IMPORTED_MODULE_0__.DataServiceDriver {
  constructor(dataType, options) {
    super(dataType, options);
    this._data = new Map();
  }
  findByUID(uid) {
    return new Promise((resolve, reject) => {
      if (this._data.has(uid)) {
        resolve(this.options.deserialize(this._data.get(uid)));
      } else {
        reject(`${this.dataType.name} with identifier #${uid} not found!`);
      }
    });
  }
  findOne(query, options = {}) {
    return new Promise((resolve, reject) => {
      this.findAll(query, {
        limit: 1,
        sort: options.sort
      }).then(results => {
        if (results.length > 0) {
          return resolve(results[0]);
        } else {
          resolve(undefined);
        }
      }).catch(reject);
    });
  }
  findAll(query, options = {}) {
    return new Promise(resolve => {
      options.limit = options.limit || this._data.size;
      let data = [];
      this._data.forEach(object => {
        if (_MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_1__.MemoryQueryEvaluator.evaluate(object, query)) {
          data.push(object);
          if (!options.sort && data.length >= options.limit) {
            return;
          }
        }
      });
      if (options.sort) {
        data = data.sort((a, b) => options.sort.map(s => {
          const res1 = _MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_1__.MemoryQueryEvaluator.getValueFromPath(s[1] > 0 ? a : b, s[0])[1];
          const res2 = _MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_1__.MemoryQueryEvaluator.getValueFromPath(s[1] > 0 ? b : a, s[0])[1];
          if (typeof res1 === 'number') {
            return res1 - res2;
          } else if (typeof res1 === 'string') {
            return res1.localeCompare(res2);
          } else {
            return 0;
          }
        }).reduce((a, b) => a + b)).slice(0, options.limit);
      }
      data = data.map(this.options.deserialize);
      resolve(data);
    });
  }
  insert(id, object) {
    return new Promise(resolve => {
      if (id && object) {
        this._data.set(id, this.options.serialize(object));
        resolve(object);
      } else {
        resolve(undefined);
      }
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      if (this._data.has(id)) {
        this._data.delete(id);
        resolve();
      } else {
        reject(`Unable to delete! ${this.dataType.name} with identifier #${id} not found!`);
      }
    });
  }
  count(filter) {
    return new Promise(resolve => {
      if (filter === undefined) {
        resolve(this._data.size);
      } else {
        let count = 0;
        for (const [, value] of this._data) {
          if (_MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_1__.MemoryQueryEvaluator.evaluate(value, filter)) {
            count++;
          }
        }
        resolve(count);
      }
    });
  }
  deleteAll(filter) {
    return new Promise(resolve => {
      if (filter === undefined) {
        this._data = new Map();
      } else {
        for (const [key, value] of this._data) {
          if (_MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_1__.MemoryQueryEvaluator.evaluate(value, filter)) {
            this.delete(key);
          }
        }
      }
      resolve();
    });
  }
}

/***/ }),

/***/ "./dist/esm5/service/MemoryQueryEvaluator.js":
/*!***************************************************!*\
  !*** ./dist/esm5/service/MemoryQueryEvaluator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryQueryEvaluator: () => (/* binding */ MemoryQueryEvaluator)
/* harmony export */ });
/**
 * Query evaluator for {@link FilterQuery}s with {@link MemoryDataService}.
 */
class MemoryQueryEvaluator {
  static isRegexQuery(query) {
    return Object.prototype.toString.call(query) === '[object RegExp]';
  }
  static evaluateComponent(object, key, query) {
    let result = true;
    const value = object[key];
    if (key.startsWith('$')) {
      result = result && MemoryQueryEvaluator.evaluateOp(key, object, query);
    } else if (key.includes('.')) {
      result = result && MemoryQueryEvaluator.evaluatePath(object, key, query);
    } else if (MemoryQueryEvaluator.isRegexQuery(query)) {
      result = result && value.match(query) ? true : false;
    } else if (typeof query === 'object') {
      result = result && MemoryQueryEvaluator.evaluateSelector(value, query);
    } else {
      result = result && value === query;
    }
    return result;
  }
  static evaluate(object, query) {
    let result = true;
    if (query) {
      for (const key of Object.keys(query)) {
        result = result && MemoryQueryEvaluator.evaluateComponent(object, key, query[key]);
      }
    }
    return result;
  }
  static getValueFromPath(object, path) {
    // https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arays-by-string-path
    let o = object;
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, ''); // strip a leading dot
    const a = path.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (!o) {
        return undefined;
      } else if (k in o) {
        if (i < n - 1) {
          o = o[k];
        } else {
          return [o, o[k], k];
        }
      } else {
        return undefined;
      }
    }
  }
  static evaluatePath(object, path, query) {
    const data = MemoryQueryEvaluator.getValueFromPath(object, path);
    if (!data) {
      return false;
    }
    return MemoryQueryEvaluator.evaluateComponent(data[0], data[2], query);
  }
  static evaluateSelector(value, subquery) {
    let result = true;
    for (const selector of Object.keys(subquery)) {
      result = result && MemoryQueryEvaluator.evaluateComparisonSelector(selector, value, subquery);
      result = result && MemoryQueryEvaluator.evaluateArraySelector(selector, value, subquery);
    }
    return result;
  }
  static evaluateComparisonSelector(selector, value, subquery) {
    let result = true;
    switch (selector) {
      case '$gt':
        result = result && value > subquery[selector];
        break;
      case '$gte':
        result = result && value >= subquery[selector];
        break;
      case '$lt':
        result = result && value < subquery[selector];
        break;
      case '$lte':
        result = result && value <= subquery[selector];
        break;
      case '$eq':
        result = result && value === subquery[selector];
        break;
    }
    return result;
  }
  static evaluateArraySelector(selector, value, subquery) {
    let result = true;
    switch (selector) {
      case '$in':
        result = result && Array.from(value).includes(subquery[selector]);
        break;
      case '$nin':
        result = result && !Array.from(value).includes(subquery[selector]);
        break;
      case '$elemMatch':
        result = false;
        if (value instanceof Array) {
          Array.from(value).forEach(element => {
            if (element['key'] && element['value']) {
              result = result || MemoryQueryEvaluator.evaluate(element['value'], subquery[selector]);
            } else {
              result = result || MemoryQueryEvaluator.evaluate(element, subquery[selector]);
            }
          });
        } else if (value instanceof Map) {
          value.forEach(element => {
            result = result || MemoryQueryEvaluator.evaluate(element, subquery[selector]);
          });
        }
        result = result && result;
        break;
    }
    return result;
  }
  static evaluateOp(key, object, subquery) {
    let result;
    switch (key) {
      case '$and':
        result = true;
        for (const query of subquery) {
          result = result && MemoryQueryEvaluator.evaluate(object, query);
        }
        break;
      case '$or':
        result = false;
        for (const query of subquery) {
          result = result || MemoryQueryEvaluator.evaluate(object, query);
        }
        break;
    }
    return result;
  }
}

/***/ }),

/***/ "./dist/esm5/service/NodeDataService.js":
/*!**********************************************!*\
  !*** ./dist/esm5/service/NodeDataService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeData: () => (/* binding */ NodeData),
/* harmony export */   NodeDataService: () => (/* binding */ NodeDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v5.js");




class NodeDataService extends _DataService__WEBPACK_IMPORTED_MODULE_0__.DataService {
  /**
   * Find node data
   * @param {string} nodeUID Node identifier
   * @param {DataObject} dataObject Data object to get node data for
   * @returns {Promise<any>} Promise of node data for data object
   */
  findData(nodeUID, dataObject) {
    return new Promise(resolve => {
      this.findByUID(this.getUID(nodeUID, typeof dataObject === 'string' ? dataObject : dataObject.uid)).then(nodeData => {
        resolve(nodeData.data);
      }).catch(() => {
        resolve(undefined);
      });
    });
  }
  insertData(nodeUID, dataObject, data) {
    const uid = this.getUID(nodeUID, typeof dataObject === 'string' ? dataObject : dataObject.uid);
    return this.insert(uid, new NodeData(uid, data));
  }
  getUID(nodeUID, dataObjectUID) {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(dataObjectUID + nodeUID, '97b9cc7e-19ca-4f20-8190-161d7b39e93a');
  }
}
let NodeData = class NodeData {
  constructor(uid, data = {}) {
    this.uid = uid;
    this.data = data;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], NodeData.prototype, "uid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)({
  serializer: data => {
    return data;
  },
  deserializer: json => {
    return json;
  }
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], NodeData.prototype, "data", void 0);
NodeData = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, Object])], NodeData);

/***/ }),

/***/ "./dist/esm5/service/RemoteService.js":
/*!********************************************!*\
  !*** ./dist/esm5/service/RemoteService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteService: () => (/* binding */ RemoteService),
/* harmony export */   RemoteServiceProxy: () => (/* binding */ RemoteServiceProxy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Node */ "./dist/esm5/Node.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");




/**
 * Remote node service
 */
let RemoteService = class RemoteService extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor() {
    super();
    this.nodes = new Set();
    this.localServices = new Set();
    this.remoteServices = new Set();
    this.promises = new Map();
    this.once('build', this._registerServices.bind(this));
  }
  _registerServices() {
    return new Promise(resolve => {
      if (!this.model) {
        return resolve(); // No services to add when not added to model
      }

      this.model.once('ready', () => {
        // Only register services after the model is ready
        // this is why we resolve the promise before this is completed
        this.model.findAllServices().forEach(service => {
          this.registerService(service);
        });
      });
      resolve();
    });
  }
  registerPromise(resolve, reject, id) {
    const uuid = id !== null && id !== void 0 ? id : this.generateUUID();
    this.promises.set(uuid, {
      resolve,
      reject
    });
    return uuid;
  }
  getPromise(uuid) {
    const promise = this.promises.get(uuid);
    if (promise) {
      this.promises.delete(uuid);
    }
    return promise;
  }
  /**
   * Local positioning model push
   * @param {string} uid UID of the node
   * @param {DataFrame | any} frame Data frame
   * @param {RemotePushOptions} options Push options
   */
  localPush(uid, frame, options) {
    options = options || {};
    if (this.nodes.has(uid)) {
      // Parse frame and options
      const node = this.model.findNodeByUID(uid);
      node.emit('localpush', frame, options);
    }
  }
  /**
   * Local positioning model pull
   * @param {string} uid UID of the node
   * @param {RemotePullOptions} options Pull options
   */
  localPull(uid, options) {
    options = options || {};
    if (this.nodes.has(uid)) {
      this.model.findNodeByUID(uid).emit('localpull', options);
    }
  }
  /**
   * Local positioning model event
   * @param {string} uid UID of the node
   * @param {string} event Event name
   * @param {any[]} [args] Argument
   */
  localEvent(uid, event, ...args) {
    if (this.nodes.has(uid)) {
      this.model.findNodeByUID(uid).emit('localevent', event, ...args);
    }
  }
  /**
   * Local service call
   * @param {string} uid Service uid
   * @param {string} method Method name
   * @param {any[]} [args] optional arguments
   * @returns {Promise<any> | any | void} service call output
   */
  localServiceCall(uid, method, ...args) {
    if (this.localServices.has(uid)) {
      const service = this.model.findService(uid) || this.model.findDataService(uid);
      return service[method](...args);
    }
  }
  /**
   * Register a node as a remotely available node
   * @param {Node<any, any> | string} node Node to register
   * @returns {Promise<void>} Promise of registration
   */
  registerNode(node) {
    return new Promise(resolve => {
      const existingNode = node instanceof _Node__WEBPACK_IMPORTED_MODULE_1__.Node ? node : this.model.findNodeByUID(node);
      this.nodes.add(existingNode.uid);
      this.logger('debug', `Registered remote server node ${existingNode.uid}`);
      resolve();
    });
  }
  /**
   * Register a service to be remotely available
   * @param {Service} service Service to register
   * @returns {Promise<void>} Promise of registration
   */
  registerService(service) {
    return new Promise(resolve => {
      if (!(service instanceof RemoteServiceProxy)) {
        this.localServices.add(service.uid);
      } else {
        this.remoteServices.add(service.uid);
      }
      resolve();
    });
  }
};
RemoteService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], RemoteService);
class RemoteServiceProxy extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(options) {
    super();
    this.options = options;
    this.uid = options.uid;
  }
  get(target, p) {
    const ownResult = this[p];
    if (ownResult) {
      return ownResult;
    }
    return this.createHandler(target, p);
  }
  set(target, p, value) {
    target[p] = value;
    return true;
  }
  /**
   * Create handler function for a specific property key
   * @param {Service} target Target service
   * @param {string|number|symbol} p Property
   * @returns {Function} Handler function
   */
  createHandler(target, p) {
    if (!this.service) {
      this.service = target.model.findService(this.options.service);
      if (this.service === undefined || this.service === null) {
        return () => undefined;
      }
      this.service.registerService(this);
    }
    return (...args) => this.service.remoteServiceCall(target.uid, p, ...args);
  }
}

/***/ }),

/***/ "./dist/esm5/service/Service.js":
/*!**************************************!*\
  !*** ./dist/esm5/service/Service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Service: () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _internal_AsyncEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_internal/AsyncEventEmitter */ "./dist/esm5/_internal/AsyncEventEmitter.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");




/**
 * Service is accessible by each {@link Node} inside the {@link Model}
 */
let Service = class Service extends _internal_AsyncEventEmitter__WEBPACK_IMPORTED_MODULE_0__.AsyncEventEmitter {
  constructor() {
    super();
    this._ready = false;
    this.uid = this.constructor.name;
    this.prependOnceListener('ready', () => {
      this._ready = true;
    });
  }
  generateUUID() {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  setUID(uid) {
    this.uid = uid;
    return this;
  }
  isReady() {
    return this._ready;
  }
  emit(name, ...args) {
    return super.emit(name, ...args);
  }
  once(name, listener) {
    if (name === 'ready' && this.isReady()) {
      listener();
      return this;
    }
    return super.once(name, listener);
  }
  /**
   * Graph logger
   * @param {string} level Logging level
   * @param {string} message Message
   * @param {any} data Data to include in log
   */
  logger(level, message, data) {
    if (this.model) {
      this.model.logger(level, message, data);
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], Service.prototype, "uid", void 0);
Service = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], Service);

/***/ }),

/***/ "./dist/esm5/service/TimeService.js":
/*!******************************************!*\
  !*** ./dist/esm5/service/TimeService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeService: () => (/* binding */ TimeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./dist/esm5/utils/unit/TimeUnit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMemberFunction.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
var TimeService_1;




/**
 * Time service for retrieving the current time.
 */
let TimeService = TimeService_1 = class TimeService extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(timeCallback, unit = _utils__WEBPACK_IMPORTED_MODULE_1__.TimeUnit.MILLISECOND) {
    super();
    this._timeCallback = timeCallback;
    this._timeUnit = unit;
    this.uid = this.constructor.name;
    // Specify the default time callback used by class initializers
    if (!TimeService_1._defaultTimeCallback) {
      TimeService_1.initialize();
    }
    // If time callback is undefined, use the default
    if (!this._timeCallback) {
      this._timeCallback = TimeService_1.now;
      this._timeUnit = TimeService_1.getUnit();
    } else {
      TimeService_1._defaultTimeCallback = timeCallback;
      TimeService_1._defaultUnit = unit;
    }
  }
  get isDefault() {
    return TimeService_1._defaultTimeCallback === this._timeCallback;
  }
  set isDefault(value) {
    if (value) {
      TimeService_1._defaultTimeCallback = this._timeCallback;
      TimeService_1._defaultUnit = this._timeUnit;
    }
  }
  static initialize() {
    TimeService_1._defaultTimeCallback = Date.now;
    TimeService_1._defaultUnit = _utils__WEBPACK_IMPORTED_MODULE_1__.TimeUnit.MILLISECOND;
    // Specify the default time callback used by class initializers
    try {
      // eslint-disable-next-line
      const microtime = __webpack_require__(/*! microtime */ "?deed");
      // Check if function exists, needed for webpack
      if (microtime.now) {
        TimeService_1._defaultTimeCallback = microtime.now;
        TimeService_1._defaultUnit = _utils__WEBPACK_IMPORTED_MODULE_1__.TimeUnit.MICROSECOND;
      }
    } catch (ex) {
      return;
    }
  }
  /**
   * Get the current time
   * @returns {number} Current time
   */
  getTime() {
    return this._timeCallback();
  }
  /**
   * Get the time unit
   * @returns {TimeUnit} Unit of time service
   */
  getUnit() {
    return this._timeUnit;
  }
  /**
   * Get the current time
   * @returns {number} Current time in a specific unit
   */
  static now() {
    if (!TimeService_1._defaultTimeCallback) {
      TimeService_1.initialize();
    }
    return TimeService_1._defaultTimeCallback();
  }
  static getUnit() {
    if (!TimeService_1._defaultTimeCallback) {
      TimeService_1.initialize();
    }
    return TimeService_1._defaultUnit;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMemberFunction)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function)], TimeService.prototype, "_timeCallback", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _utils__WEBPACK_IMPORTED_MODULE_1__.TimeUnit)], TimeService.prototype, "_timeUnit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Boolean])], TimeService.prototype, "isDefault", null);
TimeService = TimeService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Function, _utils__WEBPACK_IMPORTED_MODULE_1__.TimeUnit])], TimeService);

/***/ }),

/***/ "./dist/esm5/service/TrajectoryService.js":
/*!************************************************!*\
  !*** ./dist/esm5/service/TrajectoryService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrajectoryService: () => (/* binding */ TrajectoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/object/DataObject */ "./dist/esm5/data/object/DataObject.js");
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");



/**
 * A trajectory service stores the position of a data object
 * in a continuous trajectory.
 */
class TrajectoryService extends _DataService__WEBPACK_IMPORTED_MODULE_0__.DataService {
  constructor(dataServiceDriver, options) {
    var _a;
    super(dataServiceDriver);
    this.options = options || {};
    this.options.autoBind = this.options.autoBind === undefined ? true : this.options.autoBind;
    this.options.dataService = this.options.dataService || _data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__.DataObject;
    this.options.defaultUID = (_a = this.options.defaultUID) !== null && _a !== void 0 ? _a : object => object.uid;
    if (this.options.autoBind) {
      this.once('build', this._bindService.bind(this));
    }
  }
  _bindService() {
    return new Promise((resolve, reject) => {
      if (!this.model) {
        // No model
        return resolve();
      }
      const dataObjectService = this.model.findDataService(this.options.dataService);
      if (dataObjectService) {
        dataObjectService.on('insert', (_, object) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
          yield this.appendPosition(object);
        }));
        resolve();
      } else {
        reject(new Error(`Data object service not found for '${this.options.dataService}'`));
      }
    });
  }
  /**
   * Find the latest trajectory
   * @param {DataObject | string} object Data object to get trajectories for
   * @returns {Promise<Trajectory>} Trajectory promise if found
   */
  findCurrentTrajectory(object) {
    return new Promise((resolve, reject) => {
      this.findOne({
        objectUID: object instanceof _data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__.DataObject ? object.uid : object
      }, {
        sort: [['createdTimestamp', -1]]
      }).then(resolve).catch(reject);
    });
  }
  /**
   * Find the trajectory of an object from start to end date
   * @param {DataObject | string} object Data object to get trajectory for
   * @param {Date | number} start Start time or date
   * @param {Date | number} end End time or date
   * @returns {Trajectory} Trajectory match
   */
  findTrajectoryByRange(object, start, end) {
    return new Promise((resolve, reject) => {
      this.findOne({
        objectUID: object instanceof _data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__.DataObject ? object.uid : object,
        positions: {
          $elemMatch: {
            timestamp: {
              $lte: end ? end instanceof Date ? end.getTime() : end : Number.MAX_VALUE,
              $gte: start ? start instanceof Date ? start.getTime() : start : -1
            }
          }
        }
      }).then(trajectory => {
        resolve(trajectory);
      }).catch(reject);
    });
  }
  /**
   * Find all trajectories of an object
   * @param {DataObject | string} object Data object to get trajectories for
   * @returns {Promise<string[]>} List of trajectory UIDs
   */
  findTrajectories(object) {
    return new Promise(resolve => {
      this.findAll({
        objectUID: object instanceof _data_object_DataObject__WEBPACK_IMPORTED_MODULE_1__.DataObject ? object.uid : object
      }).then(trajectories => {
        resolve(trajectories.map(trajectory => trajectory.uid));
      });
    });
  }
  /**
   * Append a position to the trajectory service
   * @param {DataObject} object Data object to store
   * @param {string} uid Trajectory uid
   * @returns {Promise<Trajectory>} Stored trajectory
   */
  appendPosition(object, uid) {
    return new Promise((resolve, reject) => {
      const position = object.getPosition();
      if (position) {
        Promise.resolve(uid ? this.findOne({
          uid
        }) : this.findCurrentTrajectory(object)).then(trajectory => {
          if (!trajectory) {
            trajectory = new this.driver.dataType();
            trajectory.objectUID = object.uid;
            trajectory.uid = uid !== null && uid !== void 0 ? uid : this.options.defaultUID(object);
          }
          trajectory.positions.push(object.position);
          return this.insert(trajectory.uid, trajectory);
        }).then(resolve).catch(reject);
      } else {
        return reject();
      }
    });
  }
}

/***/ }),

/***/ "./dist/esm5/service/WorkerServiceProxy.js":
/*!*************************************************!*\
  !*** ./dist/esm5/service/WorkerServiceProxy.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerServiceProxy: () => (/* binding */ WorkerServiceProxy)
/* harmony export */ });
/* harmony import */ var _data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DataSerializer */ "./dist/esm5/data/DataSerializer.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _internal_ServiceProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal/ServiceProxy */ "./dist/esm5/service/_internal/ServiceProxy.js");



/**
 * A worker service proxy will forward function calls to an observable.
 * This observable can be a remote process or worker. It is mainly used
 * to proxy function calls from a worker thread to the main thread.
 */
class WorkerServiceProxy extends _internal_ServiceProxy__WEBPACK_IMPORTED_MODULE_0__.ServiceProxy {
  constructor(options) {
    super();
    this._promises = new Map();
    this.options = options;
    this.uid = options.uid;
    if (this.options.responseObservable) {
      this.options.responseObservable.subscribe(this._onOutput.bind(this));
    }
  }
  _onOutput(next) {
    if (this._promises.has(next.id)) {
      const promise = this._promises.get(next.id);
      if (next.success) {
        if (next.result === undefined) {
          promise.resolve();
        } else if (Array.isArray(next.result)) {
          const result = [];
          next.result.forEach(r => {
            if (r['__type']) {
              result.push(_data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.deserialize(r));
            } else {
              result.push(r);
            }
          });
          promise.resolve(result);
        } else {
          if (next.result['__type']) {
            promise.resolve(_data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.deserialize(next.result));
          } else {
            promise.resolve(next.result);
          }
        }
      } else {
        promise.reject(next.result);
      }
      this._promises.delete(next.id);
    }
  }
  get(target, p) {
    const ownResult = this[p];
    if (ownResult) {
      return ownResult;
    } else if (p === 'target') {
      return target;
    }
    return this.createHandler(target, p);
  }
  /**
   * Create handler function for a specific property key
   * @param {Service} target Target service
   * @param {string|number|symbol} p Property
   * @returns {Function} Handler function
   */
  createHandler(target, p) {
    return (...args) => new Promise((resolve, reject) => {
      const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this._promises.set(uuid, {
        resolve,
        reject
      });
      const serializedArgs = [];
      args.forEach(arg => {
        if (_data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.findTypeByName(arg.constructor.name)) {
          serializedArgs.push(_data_DataSerializer__WEBPACK_IMPORTED_MODULE_1__.DataSerializer.serialize(arg));
        } else {
          serializedArgs.push(arg);
        }
      });
      // Service call
      const call = {
        id: uuid,
        serviceUID: this.uid,
        method: p,
        parameters: serializedArgs
      };
      if (this.options.callObservable) {
        // Forward call to observable
        this.options.callObservable.next(call);
      } else {
        // Forward call to promise
        this.options.callFunction(call).then(response => {
          this._onOutput(response);
        }).catch(response => {
          this._onOutput(response);
        });
      }
    });
  }
}

/***/ }),

/***/ "./dist/esm5/service/_internal/DataServiceProxy.js":
/*!*********************************************************!*\
  !*** ./dist/esm5/service/_internal/DataServiceProxy.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataServiceProxy: () => (/* binding */ DataServiceProxy)
/* harmony export */ });
/* harmony import */ var _ServiceProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceProxy */ "./dist/esm5/service/_internal/ServiceProxy.js");

class DataServiceProxy extends _ServiceProxy__WEBPACK_IMPORTED_MODULE_0__.ServiceProxy {
  get(target, p) {
    if (p === 'dataType') {
      return target.dataType;
    }
    return super.get(target, p);
  }
}

/***/ }),

/***/ "./dist/esm5/service/_internal/ServiceProxy.js":
/*!*****************************************************!*\
  !*** ./dist/esm5/service/_internal/ServiceProxy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceProxy: () => (/* binding */ ServiceProxy)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Service */ "./dist/esm5/service/Service.js");

class ServiceProxy extends _Service__WEBPACK_IMPORTED_MODULE_0__.Service {
  get(target, p) {
    if (p === 'target') {
      return target;
    } else if (p === 'constructor') {
      return target.constructor;
    } else if (typeof target[p] === 'function') {
      return this.createHandler(target, p);
    }
    return target[p];
  }
  set(target, p, value) {
    target[p] = value;
    return true;
  }
  createHandler(target, p) {
    const key = p;
    return (...args) => {
      if (key !== 'emit' && key !== 'emitAsync' && key !== 'on' && key !== 'once') {
        target.emit(key, ...args);
      }
      return target[p](...args);
    };
  }
}

/***/ }),

/***/ "./dist/esm5/service/index.js":
/*!************************************!*\
  !*** ./dist/esm5/service/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalibrationService: () => (/* reexport safe */ _CalibrationService__WEBPACK_IMPORTED_MODULE_16__.CalibrationService),
/* harmony export */   DataFrameService: () => (/* reexport safe */ _DataFrameService__WEBPACK_IMPORTED_MODULE_10__.DataFrameService),
/* harmony export */   DataObjectService: () => (/* reexport safe */ _DataObjectService__WEBPACK_IMPORTED_MODULE_0__.DataObjectService),
/* harmony export */   DataService: () => (/* reexport safe */ _DataService__WEBPACK_IMPORTED_MODULE_8__.DataService),
/* harmony export */   DataServiceDriver: () => (/* reexport safe */ _DataServiceDriver__WEBPACK_IMPORTED_MODULE_2__.DataServiceDriver),
/* harmony export */   DummyDataService: () => (/* reexport safe */ _DummyDataService__WEBPACK_IMPORTED_MODULE_14__.DummyDataService),
/* harmony export */   DummyService: () => (/* reexport safe */ _DummyService__WEBPACK_IMPORTED_MODULE_15__.DummyService),
/* harmony export */   KeyValueDataService: () => (/* reexport safe */ _KeyValueDataService__WEBPACK_IMPORTED_MODULE_9__.KeyValueDataService),
/* harmony export */   LocationBasedService: () => (/* reexport safe */ _LocationBasedService__WEBPACK_IMPORTED_MODULE_11__.LocationBasedService),
/* harmony export */   MemoryDataService: () => (/* reexport safe */ _MemoryDataService__WEBPACK_IMPORTED_MODULE_7__.MemoryDataService),
/* harmony export */   MemoryQueryEvaluator: () => (/* reexport safe */ _MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_13__.MemoryQueryEvaluator),
/* harmony export */   NodeData: () => (/* reexport safe */ _NodeDataService__WEBPACK_IMPORTED_MODULE_5__.NodeData),
/* harmony export */   NodeDataService: () => (/* reexport safe */ _NodeDataService__WEBPACK_IMPORTED_MODULE_5__.NodeDataService),
/* harmony export */   RemoteService: () => (/* reexport safe */ _RemoteService__WEBPACK_IMPORTED_MODULE_12__.RemoteService),
/* harmony export */   RemoteServiceProxy: () => (/* reexport safe */ _RemoteService__WEBPACK_IMPORTED_MODULE_12__.RemoteServiceProxy),
/* harmony export */   Service: () => (/* reexport safe */ _Service__WEBPACK_IMPORTED_MODULE_1__.Service),
/* harmony export */   TimeService: () => (/* reexport safe */ _TimeService__WEBPACK_IMPORTED_MODULE_6__.TimeService),
/* harmony export */   TrajectoryService: () => (/* reexport safe */ _TrajectoryService__WEBPACK_IMPORTED_MODULE_4__.TrajectoryService),
/* harmony export */   WorkerServiceProxy: () => (/* reexport safe */ _WorkerServiceProxy__WEBPACK_IMPORTED_MODULE_3__.WorkerServiceProxy)
/* harmony export */ });
/* harmony import */ var _DataObjectService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataObjectService */ "./dist/esm5/service/DataObjectService.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service */ "./dist/esm5/service/Service.js");
/* harmony import */ var _DataServiceDriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataServiceDriver */ "./dist/esm5/service/DataServiceDriver.js");
/* harmony import */ var _WorkerServiceProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkerServiceProxy */ "./dist/esm5/service/WorkerServiceProxy.js");
/* harmony import */ var _TrajectoryService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrajectoryService */ "./dist/esm5/service/TrajectoryService.js");
/* harmony import */ var _NodeDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodeDataService */ "./dist/esm5/service/NodeDataService.js");
/* harmony import */ var _TimeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimeService */ "./dist/esm5/service/TimeService.js");
/* harmony import */ var _MemoryDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MemoryDataService */ "./dist/esm5/service/MemoryDataService.js");
/* harmony import */ var _DataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataService */ "./dist/esm5/service/DataService.js");
/* harmony import */ var _KeyValueDataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KeyValueDataService */ "./dist/esm5/service/KeyValueDataService.js");
/* harmony import */ var _DataFrameService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataFrameService */ "./dist/esm5/service/DataFrameService.js");
/* harmony import */ var _LocationBasedService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LocationBasedService */ "./dist/esm5/service/LocationBasedService.js");
/* harmony import */ var _RemoteService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RemoteService */ "./dist/esm5/service/RemoteService.js");
/* harmony import */ var _MemoryQueryEvaluator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MemoryQueryEvaluator */ "./dist/esm5/service/MemoryQueryEvaluator.js");
/* harmony import */ var _DummyDataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DummyDataService */ "./dist/esm5/service/DummyDataService.js");
/* harmony import */ var _DummyService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DummyService */ "./dist/esm5/service/DummyService.js");
/* harmony import */ var _CalibrationService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CalibrationService */ "./dist/esm5/service/CalibrationService.js");




















/***/ }),

/***/ "./dist/esm5/three/constants.js":
/*!**************************************!*\
  !*** ./dist/esm5/three/constants.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebGLCoordinateSystem: () => (/* binding */ WebGLCoordinateSystem),
/* harmony export */   WebGPUCoordinateSystem: () => (/* binding */ WebGPUCoordinateSystem)
/* harmony export */ });
/* unused harmony exports REVISION, MOUSE, TOUCH, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, VSMShadowMap, FrontSide, BackSide, DoubleSide, TwoPassDoubleSide, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, CineonToneMapping, ACESFilmicToneMapping, CustomToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, CubeUVReflectionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipmapNearestFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipmapNearestFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedInt248Type, AlphaFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, DepthFormat, DepthStencilFormat, RedFormat, RedIntegerFormat, RGFormat, RGIntegerFormat, RGBAIntegerFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGB_ETC2_Format, RGBA_ETC2_EAC_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_BPTC_Format, RGB_BPTC_SIGNED_Format, RGB_BPTC_UNSIGNED_Format, RED_RGTC1_Format, SIGNED_RED_RGTC1_Format, RED_GREEN_RGTC2_Format, SIGNED_RED_GREEN_RGTC2_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, NormalAnimationBlendMode, AdditiveAnimationBlendMode, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, NoColorSpace, SRGBColorSpace, LinearSRGBColorSpace, DisplayP3ColorSpace, LinearDisplayP3ColorSpace, ZeroStencilOp, KeepStencilOp, ReplaceStencilOp, IncrementStencilOp, DecrementStencilOp, IncrementWrapStencilOp, DecrementWrapStencilOp, InvertStencilOp, NeverStencilFunc, LessStencilFunc, EqualStencilFunc, LessEqualStencilFunc, GreaterStencilFunc, NotEqualStencilFunc, GreaterEqualStencilFunc, AlwaysStencilFunc, NeverCompare, LessCompare, EqualCompare, LessEqualCompare, GreaterCompare, NotEqualCompare, GreaterEqualCompare, AlwaysCompare, StaticDrawUsage, DynamicDrawUsage, StreamDrawUsage, StaticReadUsage, DynamicReadUsage, StreamReadUsage, StaticCopyUsage, DynamicCopyUsage, StreamCopyUsage, GLSL1, GLSL3, _SRGBAFormat */
const REVISION = '156';
const MOUSE = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2
};
const TOUCH = {
  ROTATE: 0,
  PAN: 1,
  DOLLY_PAN: 2,
  DOLLY_ROTATE: 3
};
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const CullFaceFrontBack = 3;
const BasicShadowMap = 0;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const TwoPassDoubleSide = 2; // r149
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;
const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const RGB_BPTC_SIGNED_Format = 36494;
const RGB_BPTC_UNSIGNED_Format = 36495;
const RED_RGTC1_Format = 36283;
const SIGNED_RED_RGTC1_Format = 36284;
const RED_GREEN_RGTC2_Format = 36285;
const SIGNED_RED_GREEN_RGTC2_Format = 36286;
const LoopOnce = 2200;
const LoopRepeat = 2201;
const LoopPingPong = 2202;
const InterpolateDiscrete = 2300;
const InterpolateLinear = 2301;
const InterpolateSmooth = 2302;
const ZeroCurvatureEnding = 2400;
const ZeroSlopeEnding = 2401;
const WrapAroundEnding = 2402;
const NormalAnimationBlendMode = 2500;
const AdditiveAnimationBlendMode = 2501;
const TrianglesDrawMode = 0;
const TriangleStripDrawMode = 1;
const TriangleFanDrawMode = 2;
/** @deprecated Use LinearSRGBColorSpace or NoColorSpace in three.js r152+. */
const LinearEncoding = 3000;
/** @deprecated Use SRGBColorSpace in three.js r152+. */
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
const NoColorSpace = '';
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const DisplayP3ColorSpace = 'display-p3';
const LinearDisplayP3ColorSpace = 'display-p3-linear';
const ZeroStencilOp = 0;
const KeepStencilOp = 7680;
const ReplaceStencilOp = 7681;
const IncrementStencilOp = 7682;
const DecrementStencilOp = 7683;
const IncrementWrapStencilOp = 34055;
const DecrementWrapStencilOp = 34056;
const InvertStencilOp = 5386;
const NeverStencilFunc = 512;
const LessStencilFunc = 513;
const EqualStencilFunc = 514;
const LessEqualStencilFunc = 515;
const GreaterStencilFunc = 516;
const NotEqualStencilFunc = 517;
const GreaterEqualStencilFunc = 518;
const AlwaysStencilFunc = 519;
const NeverCompare = 512;
const LessCompare = 513;
const EqualCompare = 514;
const LessEqualCompare = 515;
const GreaterCompare = 516;
const NotEqualCompare = 517;
const GreaterEqualCompare = 518;
const AlwaysCompare = 519;
const StaticDrawUsage = 35044;
const DynamicDrawUsage = 35048;
const StreamDrawUsage = 35040;
const StaticReadUsage = 35045;
const DynamicReadUsage = 35049;
const StreamReadUsage = 35041;
const StaticCopyUsage = 35046;
const DynamicCopyUsage = 35050;
const StreamCopyUsage = 35042;
const GLSL1 = '100';
const GLSL3 = '300 es';
const _SRGBAFormat = 1035; // fallback for WebGL 1

const WebGLCoordinateSystem = 2000;
const WebGPUCoordinateSystem = 2001;

/***/ }),

/***/ "./dist/esm5/three/math/Euler.js":
/*!***************************************!*\
  !*** ./dist/esm5/three/math/Euler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Euler: () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _Quaternion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quaternion.js */ "./dist/esm5/three/math/Quaternion.js");
/* harmony import */ var _Matrix4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix4.js */ "./dist/esm5/three/math/Matrix4.js");
/* harmony import */ var _MathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MathUtils.js */ "./dist/esm5/three/math/MathUtils.js");



const _matrix = /*@__PURE__*/new _Matrix4_js__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const _quaternion = /*@__PURE__*/new _Quaternion_js__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
class Euler {
  constructor(x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(value) {
    this._order = value;
    this._onChangeCallback();
  }
  set(x, y, z, order = this._order) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m, order = this._order, update = true) {
    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    const te = m.elements;
    const m11 = te[0],
      m12 = te[4],
      m13 = te[8];
    const m21 = te[1],
      m22 = te[5],
      m23 = te[9];
    const m31 = te[2],
      m32 = te[6],
      m33 = te[10];
    switch (order) {
      case 'XYZ':
        this._y = Math.asin((0,_MathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          this._x = Math.atan2(-m23, m33);
          this._z = Math.atan2(-m12, m11);
        } else {
          this._x = Math.atan2(m32, m22);
          this._z = 0;
        }
        break;
      case 'YXZ':
        this._x = Math.asin(-(0,_MathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          this._y = Math.atan2(m13, m33);
          this._z = Math.atan2(m21, m22);
        } else {
          this._y = Math.atan2(-m31, m11);
          this._z = 0;
        }
        break;
      case 'ZXY':
        this._x = Math.asin((0,_MathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          this._y = Math.atan2(-m31, m33);
          this._z = Math.atan2(-m12, m22);
        } else {
          this._y = 0;
          this._z = Math.atan2(m21, m11);
        }
        break;
      case 'ZYX':
        this._y = Math.asin(-(0,_MathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this._x = Math.atan2(m32, m33);
          this._z = Math.atan2(m21, m11);
        } else {
          this._x = 0;
          this._z = Math.atan2(-m12, m22);
        }
        break;
      case 'YZX':
        this._z = Math.asin((0,_MathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          this._x = Math.atan2(-m23, m22);
          this._y = Math.atan2(-m31, m11);
        } else {
          this._x = 0;
          this._y = Math.atan2(m13, m33);
        }
        break;
      case 'XZY':
        this._z = Math.asin(-(0,_MathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          this._x = Math.atan2(m32, m22);
          this._y = Math.atan2(m13, m11);
        } else {
          this._x = Math.atan2(-m23, m33);
          this._y = 0;
        }
        break;
      default:
        console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order);
    }
    this._order = order;
    if (update === true) this._onChangeCallback();
    return this;
  }
  setFromQuaternion(q, order, update) {
    _matrix.makeRotationFromQuaternion(q);
    return this.setFromRotationMatrix(_matrix, order, update);
  }
  setFromVector3(v, order = this._order) {
    return this.set(v.x, v.y, v.z, order);
  }
  reorder(newOrder) {
    // WARNING: this discards revolution information -bhouston

    _quaternion.setFromEuler(this);
    return this.setFromQuaternion(_quaternion, newOrder);
  }
  equals(euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  }
  fromArray(array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== undefined) this._order = array[3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
}
Euler.DEFAULT_ORDER = 'XYZ';


/***/ }),

/***/ "./dist/esm5/three/math/MathUtils.js":
/*!*******************************************!*\
  !*** ./dist/esm5/three/math/MathUtils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
/* unused harmony exports DEG2RAD, RAD2DEG, generateUUID, euclideanModulo, mapLinear, inverseLerp, lerp, damp, pingpong, smoothstep, smootherstep, randInt, randFloat, randFloatSpread, seededRandom, degToRad, radToDeg, isPowerOfTwo, ceilPowerOfTwo, floorPowerOfTwo, setQuaternionFromProperEuler, normalize, denormalize, MathUtils */
const _lut = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {
  const d0 = Math.random() * 0xffffffff | 0;
  const d1 = Math.random() * 0xffffffff | 0;
  const d2 = Math.random() * 0xffffffff | 0;
  const d3 = Math.random() * 0xffffffff | 0;
  const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];

  // .toLowerCase() here flattens concatenated strings to save heap memory space.
  return uuid.toLowerCase();
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo(n, m) {
  return (n % m + m) % m;
}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear(x, a1, a2, b1, b2) {
  return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}

// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp(x, y, value) {
  if (x !== y) {
    return (value - x) / (y - x);
  } else {
    return 0;
  }
}

// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp(x, y, lambda, dt) {
  return lerp(x, y, 1 - Math.exp(-lambda * dt));
}

// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong(x, length = 1) {
  return length - Math.abs(euclideanModulo(x, length * 2) - length);
}

// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep(x, min, max) {
  if (x <= min) return 0;
  if (x >= max) return 1;
  x = (x - min) / (max - min);
  return x * x * (3 - 2 * x);
}
function smootherstep(x, min, max) {
  if (x <= min) return 0;
  if (x >= max) return 1;
  x = (x - min) / (max - min);
  return x * x * x * (x * (x * 6 - 15) + 10);
}

// Random integer from <low, high> interval
function randInt(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1));
}

// Random float from <low, high> interval
function randFloat(low, high) {
  return low + Math.random() * (high - low);
}

// Random float from <-range/2, range/2> interval
function randFloatSpread(range) {
  return range * (0.5 - Math.random());
}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom(s) {
  if (s !== undefined) _seed = s;

  // Mulberry32 generator

  let t = _seed += 0x6D2B79F5;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function degToRad(degrees) {
  return degrees * DEG2RAD;
}
function radToDeg(radians) {
  return radians * RAD2DEG;
}
function isPowerOfTwo(value) {
  return (value & value - 1) === 0 && value !== 0;
}
function ceilPowerOfTwo(value) {
  return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
}
function floorPowerOfTwo(value) {
  return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}
function setQuaternionFromProperEuler(q, a, b, c, order) {
  // Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

  // rotations are applied to the axes in the order specified by 'order'
  // rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
  // angles are in radians

  const cos = Math.cos;
  const sin = Math.sin;
  const c2 = cos(b / 2);
  const s2 = sin(b / 2);
  const c13 = cos((a + c) / 2);
  const s13 = sin((a + c) / 2);
  const c1_3 = cos((a - c) / 2);
  const s1_3 = sin((a - c) / 2);
  const c3_1 = cos((c - a) / 2);
  const s3_1 = sin((c - a) / 2);
  switch (order) {
    case 'XYX':
      q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
      break;
    case 'YZY':
      q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
      break;
    case 'ZXZ':
      q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
      break;
    case 'XZX':
      q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
      break;
    case 'YXY':
      q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
      break;
    case 'ZYZ':
      q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
      break;
    default:
      console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order);
  }
}
function denormalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return value / 4294967295.0;
    case Uint16Array:
      return value / 65535.0;
    case Uint8Array:
      return value / 255.0;
    case Int32Array:
      return Math.max(value / 2147483647.0, -1.0);
    case Int16Array:
      return Math.max(value / 32767.0, -1.0);
    case Int8Array:
      return Math.max(value / 127.0, -1.0);
    default:
      throw new Error('Invalid component type.');
  }
}
function normalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return Math.round(value * 4294967295.0);
    case Uint16Array:
      return Math.round(value * 65535.0);
    case Uint8Array:
      return Math.round(value * 255.0);
    case Int32Array:
      return Math.round(value * 2147483647.0);
    case Int16Array:
      return Math.round(value * 32767.0);
    case Int8Array:
      return Math.round(value * 127.0);
    default:
      throw new Error('Invalid component type.');
  }
}
const MathUtils = {
  DEG2RAD: DEG2RAD,
  RAD2DEG: RAD2DEG,
  generateUUID: generateUUID,
  clamp: clamp,
  euclideanModulo: euclideanModulo,
  mapLinear: mapLinear,
  inverseLerp: inverseLerp,
  lerp: lerp,
  damp: damp,
  pingpong: pingpong,
  smoothstep: smoothstep,
  smootherstep: smootherstep,
  randInt: randInt,
  randFloat: randFloat,
  randFloatSpread: randFloatSpread,
  seededRandom: seededRandom,
  degToRad: degToRad,
  radToDeg: radToDeg,
  isPowerOfTwo: isPowerOfTwo,
  ceilPowerOfTwo: ceilPowerOfTwo,
  floorPowerOfTwo: floorPowerOfTwo,
  setQuaternionFromProperEuler: setQuaternionFromProperEuler,
  normalize: normalize,
  denormalize: denormalize
};


/***/ }),

/***/ "./dist/esm5/three/math/Matrix3.js":
/*!*****************************************!*\
  !*** ./dist/esm5/three/math/Matrix3.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix3: () => (/* binding */ Matrix3)
/* harmony export */ });
class Matrix3 {
  constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    Matrix3.prototype.isMatrix3 = true;
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (n11 !== undefined) {
      this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
    }
  }
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrix3Column(this, 0);
    yAxis.setFromMatrix3Column(this, 1);
    zAxis.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(m) {
    const me = m.elements;
    this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0],
      a12 = ae[3],
      a13 = ae[6];
    const a21 = ae[1],
      a22 = ae[4],
      a23 = ae[7];
    const a31 = ae[2],
      a32 = ae[5],
      a33 = ae[8];
    const b11 = be[0],
      b12 = be[3],
      b13 = be[6];
    const b21 = be[1],
      b22 = be[4],
      b23 = be[7];
    const b31 = be[2],
      b32 = be[5],
      b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const a = te[0],
      b = te[1],
      c = te[2],
      d = te[3],
      e = te[4],
      f = te[5],
      g = te[6],
      h = te[7],
      i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  }
  invert() {
    const te = this.elements,
      n11 = te[0],
      n21 = te[1],
      n31 = te[2],
      n12 = te[3],
      n22 = te[4],
      n32 = te[5],
      n13 = te[6],
      n23 = te[7],
      n33 = te[8],
      t11 = n33 * n22 - n32 * n23,
      t12 = n32 * n13 - n33 * n12,
      t13 = n23 * n12 - n22 * n13,
      det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;
    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;
    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;
    return this;
  }
  transpose() {
    let tmp;
    const m = this.elements;
    tmp = m[1];
    m[1] = m[3];
    m[3] = tmp;
    tmp = m[2];
    m[2] = m[6];
    m[6] = tmp;
    tmp = m[5];
    m[5] = m[7];
    m[7] = tmp;
    return this;
  }
  getNormalMatrix(matrix4) {
    return this.setFromMatrix4(matrix4).invert().transpose();
  }
  transposeIntoArray(r) {
    const m = this.elements;
    r[0] = m[0];
    r[1] = m[3];
    r[2] = m[6];
    r[3] = m[1];
    r[4] = m[4];
    r[5] = m[7];
    r[6] = m[2];
    r[7] = m[5];
    r[8] = m[8];
    return this;
  }
  setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
    return this;
  }

  //

  scale(sx, sy) {
    this.premultiply(_m3.makeScale(sx, sy));
    return this;
  }
  rotate(theta) {
    this.premultiply(_m3.makeRotation(-theta));
    return this;
  }
  translate(tx, ty) {
    this.premultiply(_m3.makeTranslation(tx, ty));
    return this;
  }

  // for 2D Transforms

  makeTranslation(x, y) {
    if (x.isVector2) {
      this.set(1, 0, x.x, 0, 1, x.y, 0, 0, 1);
    } else {
      this.set(1, 0, x, 0, 1, y, 0, 0, 1);
    }
    return this;
  }
  makeRotation(theta) {
    // counterclockwise

    const c = Math.cos(theta);
    const s = Math.sin(theta);
    this.set(c, -s, 0, s, c, 0, 0, 0, 1);
    return this;
  }
  makeScale(x, y) {
    this.set(x, 0, 0, 0, y, 0, 0, 0, 1);
    return this;
  }

  //

  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 9; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const _m3 = /*@__PURE__*/new Matrix3();


/***/ }),

/***/ "./dist/esm5/three/math/Matrix4.js":
/*!*****************************************!*\
  !*** ./dist/esm5/three/math/Matrix4.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4: () => (/* binding */ Matrix4)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./dist/esm5/three/constants.js");
/* harmony import */ var _Vector3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector3.js */ "./dist/esm5/three/math/Vector3.js");


class Matrix4 {
  constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    Matrix4.prototype.isMatrix4 = true;
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    if (n11 !== undefined) {
      this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
    }
  }
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    const te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    te[9] = me[9];
    te[10] = me[10];
    te[11] = me[11];
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    te[15] = me[15];
    return this;
  }
  copyPosition(m) {
    const te = this.elements,
      me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  setFromMatrix3(m) {
    const me = m.elements;
    this.set(me[0], me[3], me[6], 0, me[1], me[4], me[7], 0, me[2], me[5], me[8], 0, 0, 0, 0, 1);
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(xAxis, yAxis, zAxis) {
    this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
    return this;
  }
  extractRotation(m) {
    // this method does not support reflection matrices

    const te = this.elements;
    const me = m.elements;
    const scaleX = 1 / _v1.setFromMatrixColumn(m, 0).length();
    const scaleY = 1 / _v1.setFromMatrixColumn(m, 1).length();
    const scaleZ = 1 / _v1.setFromMatrixColumn(m, 2).length();
    te[0] = me[0] * scaleX;
    te[1] = me[1] * scaleX;
    te[2] = me[2] * scaleX;
    te[3] = 0;
    te[4] = me[4] * scaleY;
    te[5] = me[5] * scaleY;
    te[6] = me[6] * scaleY;
    te[7] = 0;
    te[8] = me[8] * scaleZ;
    te[9] = me[9] * scaleZ;
    te[10] = me[10] * scaleZ;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromEuler(euler) {
    const te = this.elements;
    const x = euler.x,
      y = euler.y,
      z = euler.z;
    const a = Math.cos(x),
      b = Math.sin(x);
    const c = Math.cos(y),
      d = Math.sin(y);
    const e = Math.cos(z),
      f = Math.sin(z);
    if (euler.order === 'XYZ') {
      const ae = a * e,
        af = a * f,
        be = b * e,
        bf = b * f;
      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;
      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;
      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === 'YXZ') {
      const ce = c * e,
        cf = c * f,
        de = d * e,
        df = d * f;
      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;
      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;
      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === 'ZXY') {
      const ce = c * e,
        cf = c * f,
        de = d * e,
        df = d * f;
      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;
      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;
      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === 'ZYX') {
      const ae = a * e,
        af = a * f,
        be = b * e,
        bf = b * f;
      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;
      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;
      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === 'YZX') {
      const ac = a * c,
        ad = a * d,
        bc = b * c,
        bd = b * d;
      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;
      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;
      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === 'XZY') {
      const ac = a * c,
        ad = a * d,
        bc = b * c,
        bd = b * d;
      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;
      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;
      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    }

    // bottom row
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;

    // last column
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(q) {
    return this.compose(_zero, q, _one);
  }
  lookAt(eye, target, up) {
    const te = this.elements;
    _z.subVectors(eye, target);
    if (_z.lengthSq() === 0) {
      // eye and target are in the same position

      _z.z = 1;
    }
    _z.normalize();
    _x.crossVectors(up, _z);
    if (_x.lengthSq() === 0) {
      // up and z are parallel

      if (Math.abs(up.z) === 1) {
        _z.x += 0.0001;
      } else {
        _z.z += 0.0001;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
    }
    _x.normalize();
    _y.crossVectors(_z, _x);
    te[0] = _x.x;
    te[4] = _y.x;
    te[8] = _z.x;
    te[1] = _x.y;
    te[5] = _y.y;
    te[9] = _z.y;
    te[2] = _x.z;
    te[6] = _y.z;
    te[10] = _z.z;
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0],
      a12 = ae[4],
      a13 = ae[8],
      a14 = ae[12];
    const a21 = ae[1],
      a22 = ae[5],
      a23 = ae[9],
      a24 = ae[13];
    const a31 = ae[2],
      a32 = ae[6],
      a33 = ae[10],
      a34 = ae[14];
    const a41 = ae[3],
      a42 = ae[7],
      a43 = ae[11],
      a44 = ae[15];
    const b11 = be[0],
      b12 = be[4],
      b13 = be[8],
      b14 = be[12];
    const b21 = be[1],
      b22 = be[5],
      b23 = be[9],
      b24 = be[13];
    const b31 = be[2],
      b32 = be[6],
      b33 = be[10],
      b34 = be[14];
    const b41 = be[3],
      b42 = be[7],
      b43 = be[11],
      b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[4] *= s;
    te[8] *= s;
    te[12] *= s;
    te[1] *= s;
    te[5] *= s;
    te[9] *= s;
    te[13] *= s;
    te[2] *= s;
    te[6] *= s;
    te[10] *= s;
    te[14] *= s;
    te[3] *= s;
    te[7] *= s;
    te[11] *= s;
    te[15] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const n11 = te[0],
      n12 = te[4],
      n13 = te[8],
      n14 = te[12];
    const n21 = te[1],
      n22 = te[5],
      n23 = te[9],
      n24 = te[13];
    const n31 = te[2],
      n32 = te[6],
      n33 = te[10],
      n34 = te[14];
    const n41 = te[3],
      n42 = te[7],
      n43 = te[11],
      n44 = te[15];

    //TODO: make this more efficient
    //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

    return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
  }
  transpose() {
    const te = this.elements;
    let tmp;
    tmp = te[1];
    te[1] = te[4];
    te[4] = tmp;
    tmp = te[2];
    te[2] = te[8];
    te[8] = tmp;
    tmp = te[6];
    te[6] = te[9];
    te[9] = tmp;
    tmp = te[3];
    te[3] = te[12];
    te[12] = tmp;
    tmp = te[7];
    te[7] = te[13];
    te[13] = tmp;
    tmp = te[11];
    te[11] = te[14];
    te[14] = tmp;
    return this;
  }
  setPosition(x, y, z) {
    const te = this.elements;
    if (x.isVector3) {
      te[12] = x.x;
      te[13] = x.y;
      te[14] = x.z;
    } else {
      te[12] = x;
      te[13] = y;
      te[14] = z;
    }
    return this;
  }
  invert() {
    // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    const te = this.elements,
      n11 = te[0],
      n21 = te[1],
      n31 = te[2],
      n41 = te[3],
      n12 = te[4],
      n22 = te[5],
      n32 = te[6],
      n42 = te[7],
      n13 = te[8],
      n23 = te[9],
      n33 = te[10],
      n43 = te[11],
      n14 = te[12],
      n24 = te[13],
      n34 = te[14],
      n44 = te[15],
      t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
      t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
      t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
      t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
    te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
    te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
    te[4] = t12 * detInv;
    te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
    te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
    te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
    te[8] = t13 * detInv;
    te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
    te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
    te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
    te[12] = t14 * detInv;
    te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
    te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
    te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
    return this;
  }
  scale(v) {
    const te = this.elements;
    const x = v.x,
      y = v.y,
      z = v.z;
    te[0] *= x;
    te[4] *= y;
    te[8] *= z;
    te[1] *= x;
    te[5] *= y;
    te[9] *= z;
    te[2] *= x;
    te[6] *= y;
    te[10] *= z;
    te[3] *= x;
    te[7] *= y;
    te[11] *= z;
    return this;
  }
  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  makeTranslation(x, y, z) {
    if (x.isVector3) {
      this.set(1, 0, 0, x.x, 0, 1, 0, x.y, 0, 0, 1, x.z, 0, 0, 0, 1);
    } else {
      this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
    }
    return this;
  }
  makeRotationX(theta) {
    const c = Math.cos(theta),
      s = Math.sin(theta);
    this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationY(theta) {
    const c = Math.cos(theta),
      s = Math.sin(theta);
    this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationZ(theta) {
    const c = Math.cos(theta),
      s = Math.sin(theta);
    this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationAxis(axis, angle) {
    // Based on http://www.gamedev.net/reference/articles/article1199.asp

    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const x = axis.x,
      y = axis.y,
      z = axis.z;
    const tx = t * x,
      ty = t * y;
    this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
    return this;
  }
  makeScale(x, y, z) {
    this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
    return this;
  }
  makeShear(xy, xz, yx, yz, zx, zy) {
    this.set(1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1, 0, 0, 0, 0, 1);
    return this;
  }
  compose(position, quaternion, scale) {
    const te = this.elements;
    const x = quaternion._x,
      y = quaternion._y,
      z = quaternion._z,
      w = quaternion._w;
    const x2 = x + x,
      y2 = y + y,
      z2 = z + z;
    const xx = x * x2,
      xy = x * y2,
      xz = x * z2;
    const yy = y * y2,
      yz = y * z2,
      zz = z * z2;
    const wx = w * x2,
      wy = w * y2,
      wz = w * z2;
    const sx = scale.x,
      sy = scale.y,
      sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  decompose(position, quaternion, scale) {
    const te = this.elements;
    let sx = _v1.set(te[0], te[1], te[2]).length();
    const sy = _v1.set(te[4], te[5], te[6]).length();
    const sz = _v1.set(te[8], te[9], te[10]).length();

    // if determine is negative, we need to invert one scale
    const det = this.determinant();
    if (det < 0) sx = -sx;
    position.x = te[12];
    position.y = te[13];
    position.z = te[14];

    // scale the rotation part
    _m1.copy(this);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m1.elements[0] *= invSX;
    _m1.elements[1] *= invSX;
    _m1.elements[2] *= invSX;
    _m1.elements[4] *= invSY;
    _m1.elements[5] *= invSY;
    _m1.elements[6] *= invSY;
    _m1.elements[8] *= invSZ;
    _m1.elements[9] *= invSZ;
    _m1.elements[10] *= invSZ;
    quaternion.setFromRotationMatrix(_m1);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;
    return this;
  }
  makePerspective(left, right, top, bottom, near, far, coordinateSystem = _constants_js__WEBPACK_IMPORTED_MODULE_0__.WebGLCoordinateSystem) {
    const te = this.elements;
    const x = 2 * near / (right - left);
    const y = 2 * near / (top - bottom);
    const a = (right + left) / (right - left);
    const b = (top + bottom) / (top - bottom);
    let c, d;
    if (coordinateSystem === _constants_js__WEBPACK_IMPORTED_MODULE_0__.WebGLCoordinateSystem) {
      c = -(far + near) / (far - near);
      d = -2 * far * near / (far - near);
    } else if (coordinateSystem === _constants_js__WEBPACK_IMPORTED_MODULE_0__.WebGPUCoordinateSystem) {
      c = -far / (far - near);
      d = -far * near / (far - near);
    } else {
      throw new Error('THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem);
    }
    te[0] = x;
    te[4] = 0;
    te[8] = a;
    te[12] = 0;
    te[1] = 0;
    te[5] = y;
    te[9] = b;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  }
  makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = _constants_js__WEBPACK_IMPORTED_MODULE_0__.WebGLCoordinateSystem) {
    const te = this.elements;
    const w = 1.0 / (right - left);
    const h = 1.0 / (top - bottom);
    const p = 1.0 / (far - near);
    const x = (right + left) * w;
    const y = (top + bottom) * h;
    let z, zInv;
    if (coordinateSystem === _constants_js__WEBPACK_IMPORTED_MODULE_0__.WebGLCoordinateSystem) {
      z = (far + near) * p;
      zInv = -2 * p;
    } else if (coordinateSystem === _constants_js__WEBPACK_IMPORTED_MODULE_0__.WebGPUCoordinateSystem) {
      z = near * p;
      zInv = -1 * p;
    } else {
      throw new Error('THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem);
    }
    te[0] = 2 * w;
    te[4] = 0;
    te[8] = 0;
    te[12] = -x;
    te[1] = 0;
    te[5] = 2 * h;
    te[9] = 0;
    te[13] = -y;
    te[2] = 0;
    te[6] = 0;
    te[10] = zInv;
    te[14] = -z;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  }
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 16; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 16; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  }
}
const _v1 = /*@__PURE__*/new _Vector3_js__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _m1 = /*@__PURE__*/new Matrix4();
const _zero = /*@__PURE__*/new _Vector3_js__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
const _one = /*@__PURE__*/new _Vector3_js__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
const _x = /*@__PURE__*/new _Vector3_js__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _y = /*@__PURE__*/new _Vector3_js__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _z = /*@__PURE__*/new _Vector3_js__WEBPACK_IMPORTED_MODULE_1__.Vector3();


/***/ }),

/***/ "./dist/esm5/three/math/Quaternion.js":
/*!********************************************!*\
  !*** ./dist/esm5/three/math/Quaternion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quaternion: () => (/* binding */ Quaternion)
/* harmony export */ });
/* harmony import */ var _MathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils.js */ "./dist/esm5/three/math/MathUtils.js");

class Quaternion {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.isQuaternion = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }
  static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
    // fuzz-free, array-based Quaternion SLERP operation

    let x0 = src0[srcOffset0 + 0],
      y0 = src0[srcOffset0 + 1],
      z0 = src0[srcOffset0 + 2],
      w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1 + 0],
      y1 = src1[srcOffset1 + 1],
      z1 = src1[srcOffset1 + 2],
      w1 = src1[srcOffset1 + 3];
    if (t === 0) {
      dst[dstOffset + 0] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
      return;
    }
    if (t === 1) {
      dst[dstOffset + 0] = x1;
      dst[dstOffset + 1] = y1;
      dst[dstOffset + 2] = z1;
      dst[dstOffset + 3] = w1;
      return;
    }
    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      let s = 1 - t;
      const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
        dir = cos >= 0 ? 1 : -1,
        sqrSin = 1 - cos * cos;

      // Skip the Slerp for tiny steps to avoid numeric problems:
      if (sqrSin > Number.EPSILON) {
        const sin = Math.sqrt(sqrSin),
          len = Math.atan2(sin, cos * dir);
        s = Math.sin(s * len) / sin;
        t = Math.sin(t * len) / sin;
      }
      const tDir = t * dir;
      x0 = x0 * s + x1 * tDir;
      y0 = y0 * s + y1 * tDir;
      z0 = z0 * s + z1 * tDir;
      w0 = w0 * s + w1 * tDir;

      // Normalize in case we just did a lerp:
      if (s === 1 - t) {
        const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
        x0 *= f;
        y0 *= f;
        z0 *= f;
        w0 *= f;
      }
    }
    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }
  static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
    const x0 = src0[srcOffset0];
    const y0 = src0[srcOffset0 + 1];
    const z0 = src0[srcOffset0 + 2];
    const w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1];
    const y1 = src1[srcOffset1 + 1];
    const z1 = src1[srcOffset1 + 2];
    const w1 = src1[srcOffset1 + 3];
    dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
    dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
    dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
    dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
    return dst;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(value) {
    this._w = value;
    this._onChangeCallback();
  }
  set(x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(euler, update) {
    const x = euler._x,
      y = euler._y,
      z = euler._z,
      order = euler._order;

    // http://www.mathworks.com/matlabcentral/fileexchange/
    // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
    //	content/SpinCalc.m

    const cos = Math.cos;
    const sin = Math.sin;
    const c1 = cos(x / 2);
    const c2 = cos(y / 2);
    const c3 = cos(z / 2);
    const s1 = sin(x / 2);
    const s2 = sin(y / 2);
    const s3 = sin(z / 2);
    switch (order) {
      case 'XYZ':
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case 'YXZ':
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case 'ZXY':
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case 'ZYX':
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case 'YZX':
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case 'XZY':
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      default:
        console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order);
    }
    if (update !== false) this._onChangeCallback();
    return this;
  }
  setFromAxisAngle(axis, angle) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

    // assumes axis is normalized

    const halfAngle = angle / 2,
      s = Math.sin(halfAngle);
    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    const te = m.elements,
      m11 = te[0],
      m12 = te[4],
      m13 = te[8],
      m21 = te[1],
      m22 = te[5],
      m23 = te[9],
      m31 = te[2],
      m32 = te[6],
      m33 = te[10],
      trace = m11 + m22 + m33;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1.0);
      this._w = 0.25 / s;
      this._x = (m32 - m23) * s;
      this._y = (m13 - m31) * s;
      this._z = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
      this._w = (m32 - m23) / s;
      this._x = 0.25 * s;
      this._y = (m12 + m21) / s;
      this._z = (m13 + m31) / s;
    } else if (m22 > m33) {
      const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
      this._w = (m13 - m31) / s;
      this._x = (m12 + m21) / s;
      this._y = 0.25 * s;
      this._z = (m23 + m32) / s;
    } else {
      const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
      this._w = (m21 - m12) / s;
      this._x = (m13 + m31) / s;
      this._y = (m23 + m32) / s;
      this._z = 0.25 * s;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(vFrom, vTo) {
    // assumes direction vectors vFrom and vTo are normalized

    let r = vFrom.dot(vTo) + 1;
    if (r < Number.EPSILON) {
      // vFrom and vTo point in opposite directions

      r = 0;
      if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
        this._x = -vFrom.y;
        this._y = vFrom.x;
        this._z = 0;
        this._w = r;
      } else {
        this._x = 0;
        this._y = -vFrom.z;
        this._z = vFrom.y;
        this._w = r;
      }
    } else {
      // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

      this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
      this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
      this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
      this._w = r;
    }
    return this.normalize();
  }
  angleTo(q) {
    return 2 * Math.acos(Math.abs(_MathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp(this.dot(q), -1, 1)));
  }
  rotateTowards(q, step) {
    const angle = this.angleTo(q);
    if (angle === 0) return this;
    const t = Math.min(1, step / angle);
    this.slerp(q, t);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    // quaternion is assumed to have unit length

    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(v) {
    return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let l = this.length();
    if (l === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l = 1 / l;
      this._x = this._x * l;
      this._y = this._y * l;
      this._z = this._z * l;
      this._w = this._w * l;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(q) {
    return this.multiplyQuaternions(this, q);
  }
  premultiply(q) {
    return this.multiplyQuaternions(q, this);
  }
  multiplyQuaternions(a, b) {
    // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

    const qax = a._x,
      qay = a._y,
      qaz = a._z,
      qaw = a._w;
    const qbx = b._x,
      qby = b._y,
      qbz = b._z,
      qbw = b._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this._onChangeCallback();
    return this;
  }
  slerp(qb, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(qb);
    const x = this._x,
      y = this._y,
      z = this._z,
      w = this._w;

    // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

    let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
    if (cosHalfTheta < 0) {
      this._w = -qb._w;
      this._x = -qb._x;
      this._y = -qb._y;
      this._z = -qb._z;
      cosHalfTheta = -cosHalfTheta;
    } else {
      this.copy(qb);
    }
    if (cosHalfTheta >= 1.0) {
      this._w = w;
      this._x = x;
      this._y = y;
      this._z = z;
      return this;
    }
    const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta <= Number.EPSILON) {
      const s = 1 - t;
      this._w = s * w + t * this._w;
      this._x = s * x + t * this._x;
      this._y = s * y + t * this._y;
      this._z = s * z + t * this._z;
      this.normalize();
      this._onChangeCallback();
      return this;
    }
    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
      ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    this._w = w * ratioA + this._w * ratioB;
    this._x = x * ratioA + this._x * ratioB;
    this._y = y * ratioA + this._y * ratioB;
    this._z = z * ratioA + this._z * ratioB;
    this._onChangeCallback();
    return this;
  }
  slerpQuaternions(qa, qb, t) {
    return this.copy(qa).slerp(qb, t);
  }
  random() {
    // Derived from http://planning.cs.uiuc.edu/node198.html
    // Note, this source uses w, x, y, z ordering,
    // so we swap the order below.

    const u1 = Math.random();
    const sqrt1u1 = Math.sqrt(1 - u1);
    const sqrtu1 = Math.sqrt(u1);
    const u2 = 2 * Math.PI * Math.random();
    const u3 = 2 * Math.PI * Math.random();
    return this.set(sqrt1u1 * Math.cos(u2), sqrtu1 * Math.sin(u3), sqrtu1 * Math.cos(u3), sqrt1u1 * Math.sin(u2));
  }
  equals(quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  }
  fromArray(array, offset = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this._x = attribute.getX(index);
    this._y = attribute.getY(index);
    this._z = attribute.getZ(index);
    this._w = attribute.getW(index);
    return this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
}


/***/ }),

/***/ "./dist/esm5/three/math/Vector2.js":
/*!*****************************************!*\
  !*** ./dist/esm5/three/math/Vector2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector2: () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var _MathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils.js */ "./dist/esm5/three/math/MathUtils.js");

class Vector2 {
  constructor(x = 0, y = 0) {
    Vector2.prototype.isVector2 = true;
    this.x = x;
    this.y = y;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error('index is out of range: ' + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  applyMatrix3(m) {
    const x = this.x,
      y = this.y;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  clamp(min, max) {
    // assumes min < max, componentwise

    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    // computes the angle in radians with respect to the positive x-axis

    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;

    // clamp, to handle numerical problems

    return Math.acos(_MathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x,
      dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    return this;
  }
  rotateAround(center, angle) {
    const c = Math.cos(angle),
      s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
}


/***/ }),

/***/ "./dist/esm5/three/math/Vector3.js":
/*!*****************************************!*\
  !*** ./dist/esm5/three/math/Vector3.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector3: () => (/* binding */ Vector3)
/* harmony export */ });
/* harmony import */ var _MathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils.js */ "./dist/esm5/three/math/MathUtils.js");
/* harmony import */ var _Quaternion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quaternion.js */ "./dist/esm5/three/math/Quaternion.js");


class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    Vector3.prototype.isVector3 = true;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x, y, z) {
    if (z === undefined) z = this.z; // sprite.scale.set(x,y)

    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      default:
        throw new Error('index is out of range: ' + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  }
  applyEuler(euler) {
    return this.applyQuaternion(_quaternion.setFromEuler(euler));
  }
  applyAxisAngle(axis, angle) {
    return this.applyQuaternion(_quaternion.setFromAxisAngle(axis, angle));
  }
  applyMatrix3(m) {
    const x = this.x,
      y = this.y,
      z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;
    return this;
  }
  applyNormalMatrix(m) {
    return this.applyMatrix3(m).normalize();
  }
  applyMatrix4(m) {
    const x = this.x,
      y = this.y,
      z = this.z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return this;
  }
  applyQuaternion(q) {
    const x = this.x,
      y = this.y,
      z = this.z;
    const qx = q.x,
      qy = q.y,
      qz = q.z,
      qw = q.w;

    // calculate quat * vector

    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  }
  project(camera) {
    return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
  }
  unproject(camera) {
    return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
  }
  transformDirection(m) {
    // input: THREE.Matrix4 affine matrix
    // vector interpreted as a direction

    const x = this.x,
      y = this.y,
      z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  }
  clamp(min, max) {
    // assumes min < max, componentwise

    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  // TODO lengthSquared?

  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    return this;
  }
  cross(v) {
    return this.crossVectors(this, v);
  }
  crossVectors(a, b) {
    const ax = a.x,
      ay = a.y,
      az = a.z;
    const bx = b.x,
      by = b.y,
      bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  projectOnVector(v) {
    const denominator = v.lengthSq();
    if (denominator === 0) return this.set(0, 0, 0);
    const scalar = v.dot(this) / denominator;
    return this.copy(v).multiplyScalar(scalar);
  }
  projectOnPlane(planeNormal) {
    _vector.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector);
  }
  reflect(normal) {
    // reflect incident vector off plane orthogonal to normal
    // normal is assumed to have unit length

    return this.sub(_vector.copy(normal).multiplyScalar(2 * this.dot(normal)));
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;

    // clamp, to handle numerical problems

    return Math.acos(_MathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x,
      dy = this.y - v.y,
      dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
  }
  setFromSpherical(s) {
    return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
  }
  setFromSphericalCoords(radius, phi, theta) {
    const sinPhiRadius = Math.sin(phi) * radius;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * radius;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }
  setFromCylindrical(c) {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  }
  setFromCylindricalCoords(radius, theta, y) {
    this.x = radius * Math.sin(theta);
    this.y = y;
    this.z = radius * Math.cos(theta);
    return this;
  }
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    return this;
  }
  setFromMatrixScale(m) {
    const sx = this.setFromMatrixColumn(m, 0).length();
    const sy = this.setFromMatrixColumn(m, 1).length();
    const sz = this.setFromMatrixColumn(m, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  }
  setFromMatrixColumn(m, index) {
    return this.fromArray(m.elements, index * 4);
  }
  setFromMatrix3Column(m, index) {
    return this.fromArray(m.elements, index * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  setFromColor(c) {
    this.x = c.r;
    this.y = c.g;
    this.z = c.b;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    // Derived from https://mathworld.wolfram.com/SpherePointPicking.html

    const u = (Math.random() - 0.5) * 2;
    const t = Math.random() * Math.PI * 2;
    const f = Math.sqrt(1 - u ** 2);
    this.x = f * Math.cos(t);
    this.y = f * Math.sin(t);
    this.z = u;
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
}
const _vector = /*@__PURE__*/new Vector3();
const _quaternion = /*@__PURE__*/new _Quaternion_js__WEBPACK_IMPORTED_MODULE_1__.Quaternion();


/***/ }),

/***/ "./dist/esm5/three/math/Vector4.js":
/*!*****************************************!*\
  !*** ./dist/esm5/three/math/Vector4.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector4: () => (/* binding */ Vector4)
/* harmony export */ });
class Vector4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    Vector4.prototype.isVector4 = true;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setW(w) {
    this.w = w;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      case 3:
        this.w = value;
        break;
      default:
        throw new Error('index is out of range: ' + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== undefined ? v.w : 1;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  applyMatrix4(m) {
    const x = this.x,
      y = this.y,
      z = this.z,
      w = this.w;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  setAxisAngleFromQuaternion(q) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

    // q is assumed to be normalized

    this.w = 2 * Math.acos(q.w);
    const s = Math.sqrt(1 - q.w * q.w);
    if (s < 0.0001) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(m) {
    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

    let angle, x, y, z; // variables for result
    const epsilon = 0.01,
      // margin to allow for rounding errors
      epsilon2 = 0.1,
      // margin to distinguish between 0 and 180 degrees

      te = m.elements,
      m11 = te[0],
      m12 = te[4],
      m13 = te[8],
      m21 = te[1],
      m22 = te[5],
      m23 = te[9],
      m31 = te[2],
      m32 = te[6],
      m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      // singularity found
      // first check for identity matrix which must have +1 for all terms
      // in leading diagonal and zero in other terms

      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        // this singularity is identity matrix so angle = 0

        this.set(1, 0, 0, 0);
        return this; // zero angle, arbitrary axis
      }

      // otherwise this singularity is angle = 180

      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        // m11 is the largest diagonal term

        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        // m22 is the largest diagonal term

        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        // m33 is the largest diagonal term so base result on this

        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }
      this.set(x, y, z, angle);
      return this; // return 180 deg rotation
    }

    // as we have reached here there are no singularities so we can handle normally

    let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12)); // used to normalize

    if (Math.abs(s) < 0.001) s = 1;

    // prevent divide by zero, should not happen if matrix is orthogonal and should be
    // caught by singularity test above, but I've left it in just in case

    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  }
  clamp(min, max) {
    // assumes min < max, componentwise

    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    this.w = Math.max(min.w, Math.min(max.w, this.w));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    this.w = Math.max(minVal, Math.min(maxVal, this.w));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    this.w += (v.w - this.w) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
}


/***/ }),

/***/ "./dist/esm5/utils/BufferUtils.js":
/*!****************************************!*\
  !*** ./dist/esm5/utils/BufferUtils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferUtils: () => (/* binding */ BufferUtils)
/* harmony export */ });
/**
 * Buffer to Hex string
 * @param {Uint8Array} buffer Buffer
 * @returns {string} Hex string
 */
function toHexString(buffer) {
  if (!buffer) {
    return undefined;
  }
  return buffer.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}
/**
 * Hex string to Buffer
 * @param {string} bufferString Hex string
 * @returns {Uint8Array} Buffer
 */
function fromHexString(bufferString) {
  if (!bufferString) {
    return undefined;
  }
  return Uint8Array.from(bufferString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}
/**
 *
 * @param {ArrayBuffer} a Array buffer to compare
 * @param {ArrayBuffer} b Array buffer to compare
 * @returns {boolean} Equals
 */
function arrayBuffersAreEqual(a, b) {
  return dataViewsAreEqual(new DataView(a), new DataView(b));
}
/**
 *
 * @param {DataView} a Data view to compare
 * @param {DataView} b Data view to compare
 * @returns {boolean} Equals
 */
function dataViewsAreEqual(a, b) {
  if (a.byteLength !== b.byteLength) return false;
  for (let i = 0; i < a.byteLength; i++) {
    if (a.getUint8(i) !== b.getUint8(i)) return false;
  }
  return true;
}
/**
 *
 * @param {...Uint8Array[]} buffers Buffers to concat
 * @returns {Uint8Array} Concatenated buffer
 */
function concatBuffer(...buffers) {
  const result = new Uint8Array(buffers.map(b => b.byteLength).reduce((a, b) => a + b));
  buffers.forEach((buffer, idx) => {
    result.set(buffer, idx > 0 ? buffers[idx - 1].byteLength : 0);
  });
  return result;
}
const BufferUtils = {
  toHexString,
  fromHexString,
  arrayBuffersAreEqual,
  concatBuffer,
  dataViewsAreEqual
};

/***/ }),

/***/ "./dist/esm5/utils/DistanceFunction.js":
/*!*********************************************!*\
  !*** ./dist/esm5/utils/DistanceFunction.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CANBERRA: () => (/* binding */ CANBERRA),
/* harmony export */   CHEBYSHEV: () => (/* binding */ CHEBYSHEV),
/* harmony export */   EUCLIDEAN: () => (/* binding */ EUCLIDEAN),
/* harmony export */   HAVERSINE: () => (/* binding */ HAVERSINE),
/* harmony export */   MANHATTAN: () => (/* binding */ MANHATTAN)
/* harmony export */ });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./dist/esm5/utils/unit/GCS.js");

/**
 * Haversine formulate to calculate distance of two geographical points
 * @param {number[]} pointA Point A
 * @param {number[]} pointB Point B
 * @returns {number} distance
 */
function HAVERSINE(pointA, pointB) {
  const latRadA = _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.DEGREE.convert(pointA[1], _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.RADIAN);
  const latRadB = _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.DEGREE.convert(pointB[1], _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.RADIAN);
  const deltaLat = _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.DEGREE.convert(pointB[1] - pointA[1], _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.RADIAN);
  const deltaLon = _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.DEGREE.convert(pointB[0] - pointA[0], _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit.RADIAN);
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(latRadA) * Math.cos(latRadB) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return _unit__WEBPACK_IMPORTED_MODULE_1__.GCS.EARTH_RADIUS_MEAN * c;
}
/**
 * Euclidean distance function
 * @param {number[]} pointA n-dimensional point
 * @param {number[]} pointB n-dimensional point
 * @returns {number} distance
 */
function EUCLIDEAN(pointA, pointB) {
  let distance = 0;
  for (let i = 0; i < pointA.length; i++) {
    distance += Math.pow(pointA[i] - pointB[i], 2);
  }
  distance = Math.sqrt(distance);
  return distance;
}
/**
 * Manhattan distance function
 * @param {number[]} pointA n-dimensional point
 * @param {number[]} pointB n-dimensional point
 * @returns {number} distance
 */
function MANHATTAN(pointA, pointB) {
  let distance = 0;
  for (let i = 0; i < pointA.length; i++) {
    distance += Math.abs(pointA[i] - pointB[i]);
  }
  return distance;
}
/**
 * Canberra distance function
 * @param {number[]} pointA n-dimensional point
 * @param {number[]} pointB n-dimensional point
 * @returns {number} distance
 */
function CANBERRA(pointA, pointB) {
  let distance = 0;
  for (let i = 0; i < pointA.length; i++) {
    distance += Math.abs(pointA[i] - pointB[i]) / (Math.abs(pointA[i]) + Math.abs(pointB[i]));
  }
  return distance;
}
/**
 * Chebyshev distance function
 * @param {number[]} pointA n-dimensional point
 * @param {number[]} pointB n-dimensional point
 * @returns {number} distance
 */
function CHEBYSHEV(pointA, pointB) {
  let maxDistance = 0;
  for (let i = 0; i < pointA.length; i++) {
    maxDistance = Math.max(maxDistance, Math.abs(pointA[i] - pointB[i]));
  }
  return maxDistance;
}

/***/ }),

/***/ "./dist/esm5/utils/index.js":
/*!**********************************!*\
  !*** ./dist/esm5/utils/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccelerationUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.AccelerationUnit),
/* harmony export */   AngleUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.AngleUnit),
/* harmony export */   AngularVelocityUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.AngularVelocityUnit),
/* harmony export */   AxisAngle: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.AxisAngle),
/* harmony export */   BufferUtils: () => (/* reexport safe */ _BufferUtils__WEBPACK_IMPORTED_MODULE_3__.BufferUtils),
/* harmony export */   CANBERRA: () => (/* reexport safe */ _DistanceFunction__WEBPACK_IMPORTED_MODULE_2__.CANBERRA),
/* harmony export */   CHEBYSHEV: () => (/* reexport safe */ _DistanceFunction__WEBPACK_IMPORTED_MODULE_2__.CHEBYSHEV),
/* harmony export */   DerivedUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.DerivedUnit),
/* harmony export */   EUCLIDEAN: () => (/* reexport safe */ _DistanceFunction__WEBPACK_IMPORTED_MODULE_2__.EUCLIDEAN),
/* harmony export */   Euler: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Euler),
/* harmony export */   GCS: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.GCS),
/* harmony export */   HAVERSINE: () => (/* reexport safe */ _DistanceFunction__WEBPACK_IMPORTED_MODULE_2__.HAVERSINE),
/* harmony export */   LengthUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.LengthUnit),
/* harmony export */   LinearVelocityUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.LinearVelocityUnit),
/* harmony export */   LuminanceIntensityUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.LuminanceIntensityUnit),
/* harmony export */   LuminanceUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.LuminanceUnit),
/* harmony export */   MANHATTAN: () => (/* reexport safe */ _DistanceFunction__WEBPACK_IMPORTED_MODULE_2__.MANHATTAN),
/* harmony export */   MagnetismUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.MagnetismUnit),
/* harmony export */   Matrix3: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Matrix3),
/* harmony export */   Matrix4: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Matrix4),
/* harmony export */   PressureUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.PressureUnit),
/* harmony export */   Quaternion: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Quaternion),
/* harmony export */   TemperatureUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.TemperatureUnit),
/* harmony export */   TimeUnit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.TimeUnit),
/* harmony export */   Unit: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.Unit),
/* harmony export */   UnitPrefix: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.UnitPrefix),
/* harmony export */   UnitValue: () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_0__.UnitValue),
/* harmony export */   Vector2: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Vector2),
/* harmony export */   Vector3: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Vector3),
/* harmony export */   Vector4: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_1__.Vector4)
/* harmony export */ });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./dist/esm5/utils/unit/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./dist/esm5/utils/math/index.js");
/* harmony import */ var _DistanceFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DistanceFunction */ "./dist/esm5/utils/DistanceFunction.js");
/* harmony import */ var _BufferUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BufferUtils */ "./dist/esm5/utils/BufferUtils.js");





/***/ }),

/***/ "./dist/esm5/utils/math/AxisAngle.js":
/*!*******************************************!*\
  !*** ./dist/esm5/utils/math/AxisAngle.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisAngle: () => (/* binding */ AxisAngle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit/AngleUnit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix4 */ "./dist/esm5/utils/math/Matrix4.js");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ "./dist/esm5/utils/math/Vector3.js");
var AxisAngle_1;





/**
 * Axis-angle rotation
 */
let AxisAngle = AxisAngle_1 = class AxisAngle extends _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3 {
  constructor(x, y, z, angle = null, unit = _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN) {
    super(unit.convert(x ? x : 0, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN), unit.convert(y ? y : 0, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN), unit.convert(z ? z : 0, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN));
    if (angle !== null) {
      this.angle = unit.convert(angle, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN);
    } else {
      this.angle = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
      this.normalize();
    }
  }
  /**
   * Convert quaternion to axis angles
   * @param {THREE.Quaternion} quat Quaternion
   * @returns {AxisAngle} Axis angle instance
   */
  static fromQuaternion(quat) {
    const axis = new AxisAngle_1();
    axis.angle = 2 * Math.acos(quat.w);
    if (1 - quat.w * quat.w < 0.000001) {
      axis.x = quat.x;
      axis.y = quat.y;
      axis.z = quat.z;
    } else {
      // http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/
      const s = Math.sqrt(1 - quat.w * quat.w);
      axis.x = quat.x / s;
      axis.y = quat.y / s;
      axis.z = quat.z / s;
    }
    return axis;
  }
  /**
   * Convert axis angle to rotation matrix
   * @returns {Matrix4} Rotation matrix
   */
  toRotationMatrix() {
    return _Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4.rotationFromAxisAngle(this, this.angle);
  }
  clone() {
    const vector = new this.constructor();
    vector.angle = this.angle;
    return vector;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_5__.NumberType.DOUBLE
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)], AxisAngle.prototype, "angle", void 0);
AxisAngle = AxisAngle_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number, Number, Number, Number, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit])], AxisAngle);

/***/ }),

/***/ "./dist/esm5/utils/math/Euler.js":
/*!***************************************!*\
  !*** ./dist/esm5/utils/math/Euler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Euler: () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Euler.js");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Matrix4 */ "./dist/esm5/utils/math/Matrix4.js");
/* harmony import */ var _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit/AngleUnit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector3 */ "./dist/esm5/utils/math/Vector3.js");
var Euler_1;






/**
 * Serializable THREE.js Euler
 */
let Euler = Euler_1 = class Euler extends _internal__WEBPACK_IMPORTED_MODULE_0__.Euler {
  constructor(x, y, z, order, unit) {
    super(x, y, z, order);
    if (unit) {
      this.x = unit.convert(this.x, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN);
      this.y = unit.convert(this.y, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN);
      this.z = unit.convert(this.z, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN);
    }
  }
  /**
   * Convert quaternion to euler
   * @param {THREE.Quaternion} quat Quaternion
   * @param {string} [order] Euler order
   * @returns {Euler} Euler instance
   */
  static fromQuaternion(quat, order = 'XYZ') {
    const euler = new Euler_1();
    euler.setFromQuaternion(quat, order);
    return euler;
  }
  /**
   * Convert rotation matrix to euler
   * @param {Matrix4} matrix Rotation matrix
   * @param {string} [order] Euler order
   * @returns {Euler} Euler instance
   */
  static fromRotationMatrix(matrix, order = 'XYZ') {
    const euler = new Euler_1();
    euler.setFromRotationMatrix(matrix, order);
    return euler;
  }
  /**
   * Convert the Euler angles to a vector
   * @param {AngleUnit} [unit] Angle unit to use in vector
   * @returns {Vector3} Vector output of Euler angles
   */
  toVector(unit = _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN) {
    return new _Vector3__WEBPACK_IMPORTED_MODULE_2__.Vector3(_unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN.convert(this.x, unit), _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN.convert(this.y, unit), _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN.convert(this.z, unit));
  }
  /**
   * Convert the Euler angles to a vector
   * @deprecated use {@link Euler.toVector}
   * @param {AngleUnit} [unit] Angle unit to use in vector
   * @returns {Vector3} Vector output of Euler angles
   */
  toVector3(unit) {
    return this.toVector(unit);
  }
  /**
   * Convert quaternion to rotation matrix
   * @returns {Matrix4} Rotation matrix
   */
  toRotationMatrix() {
    return _Matrix4__WEBPACK_IMPORTED_MODULE_3__.Matrix4.rotationFromEuler(this);
  }
  /**
   * Get pitch in degrees
   * @returns {number} Pitch in degrees
   */
  get pitch() {
    return _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN.convert(this.y, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.DEGREE);
  }
  /**
   * Get roll in degrees
   * @returns {number} Roll in degrees
   */
  get roll() {
    return _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN.convert(this.x, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.DEGREE);
  }
  /**
   * Get yaw in degrees
   * @returns {number} Yaw in degrees
   */
  get yaw() {
    return _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN.convert(this.z, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.DEGREE);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], Euler.prototype, "x", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], Euler.prototype, "y", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_5__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_6__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], Euler.prototype, "z", void 0);
Euler = Euler_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_7__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Number, Number, Number, String, _unit_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit])], Euler);

/***/ }),

/***/ "./dist/esm5/utils/math/Matrix3.js":
/*!*****************************************!*\
  !*** ./dist/esm5/utils/math/Matrix3.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix3: () => (/* binding */ Matrix3)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableArrayMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Matrix3.js");



/**
 * Serializable THREE.js Matrix3
 */
let Matrix3 = class Matrix3 extends _internal__WEBPACK_IMPORTED_MODULE_0__.Matrix3 {
  /**
   * Create a matrix from array
   * @param {number[][]} array Array
   * @returns {Matrix3} Matrix3
   */
  static fromArray(array) {
    const matrix = new this();
    matrix.fromArray([].concat(...array));
    matrix.transpose();
    return matrix;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableArrayMember)(Number, {
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)], Matrix3.prototype, "elements", void 0);
Matrix3 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], Matrix3);

/***/ }),

/***/ "./dist/esm5/utils/math/Matrix4.js":
/*!*****************************************!*\
  !*** ./dist/esm5/utils/math/Matrix4.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4: () => (/* binding */ Matrix4)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableArrayMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Matrix4.js");



/**
 * Serializable THREE.js Matrix4
 */
let Matrix4 = class Matrix4 extends _internal__WEBPACK_IMPORTED_MODULE_0__.Matrix4 {
  static round(value, decimals = 0) {
    const pow = Math.pow(10, decimals);
    value.elements.forEach((e, i) => {
      value.elements[i] = Math.round(e * pow) / pow;
    });
    return value;
  }
  /**
   * Create a matrix from array
   * @param {number[][]} array Array
   * @returns {Matrix4} Matrix4
   */
  static fromArray(array) {
    const matrix = new this();
    matrix.fromArray([].concat(...array));
    matrix.transpose();
    return matrix;
  }
  /**
   * Create a rotation matrix from quaternion
   * @param {THREE.Quaternion} quat Quaternion
   * @returns {Matrix4} Rotation matrix
   */
  static rotationFromQuaternion(quat) {
    const matrix = new this();
    matrix.makeRotationFromQuaternion(quat);
    return matrix;
  }
  /**
   * Create a rotation matrix from euler angles
   * @param {THREE.Euler} euler Euler angles
   * @returns {Matrix4} Rotation matrix
   */
  static rotationFromEuler(euler) {
    const matrix = new this();
    matrix.makeRotationFromEuler(euler);
    return matrix;
  }
  /**
   * Create a rotation matrix from euler angles
   * @param {THREE.Vector3} vector Vector
   * @param {number} angle Angle
   * @returns {Matrix4} Rotation matrix
   */
  static rotationFromAxisAngle(vector, angle) {
    const matrix = new this();
    matrix.makeRotationAxis(vector, angle);
    return matrix;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableArrayMember)(Number, {
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)], Matrix4.prototype, "elements", void 0);
Matrix4 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], Matrix4);

/***/ }),

/***/ "./dist/esm5/utils/math/Quaternion.js":
/*!********************************************!*\
  !*** ./dist/esm5/utils/math/Quaternion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quaternion: () => (/* binding */ Quaternion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Quaternion.js");
/* harmony import */ var _Euler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Euler */ "./dist/esm5/utils/math/Euler.js");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix4 */ "./dist/esm5/utils/math/Matrix4.js");
/* harmony import */ var _AxisAngle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AxisAngle */ "./dist/esm5/utils/math/AxisAngle.js");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector3 */ "./dist/esm5/utils/math/Vector3.js");
var Quaternion_1;







/**
 * Serializable THREE.js Quaternion
 */
let Quaternion = Quaternion_1 = class Quaternion extends _internal__WEBPACK_IMPORTED_MODULE_0__.Quaternion {
  /**
   * Convert a threejs quaternion to serializable quaternion
   * @param {THREE.Quaternion} threeQuaternion ThreeJS created quaternion
   * @returns {Quaternion} Serializable quaternion
   */
  static fromThreeJS(threeQuaternion) {
    const quaternion = new this();
    quaternion.x = threeQuaternion.x;
    quaternion.y = threeQuaternion.y;
    quaternion.z = threeQuaternion.z;
    quaternion.w = threeQuaternion.w;
    return quaternion;
  }
  static fromEuler(euler) {
    const quaternion = new this();
    if (euler instanceof _Euler__WEBPACK_IMPORTED_MODULE_1__.Euler) {
      quaternion.setFromEuler(euler);
    } else if (euler instanceof _Vector3__WEBPACK_IMPORTED_MODULE_2__.Vector3) {
      quaternion.setFromEuler(new _Euler__WEBPACK_IMPORTED_MODULE_1__.Euler(euler.x, euler.y, euler.z));
    } else if (euler instanceof Array) {
      quaternion.setFromEuler(new _Euler__WEBPACK_IMPORTED_MODULE_1__.Euler(euler[0], euler[1], euler[2]));
    } else if (euler['yaw'] === undefined) {
      quaternion.setFromEuler(new _Euler__WEBPACK_IMPORTED_MODULE_1__.Euler(euler.x, euler.y, euler.z, euler.order, euler.unit));
    } else {
      quaternion.setFromEuler(new _Euler__WEBPACK_IMPORTED_MODULE_1__.Euler(euler.roll, euler.pitch, euler.yaw, 'ZYX', euler.unit));
    }
    return quaternion;
  }
  static fromAxisAngle(axis) {
    const quaternion = new this();
    if (axis instanceof _AxisAngle__WEBPACK_IMPORTED_MODULE_3__.AxisAngle) {
      quaternion.setFromAxisAngle(new _Vector3__WEBPACK_IMPORTED_MODULE_2__.Vector3(axis.x, axis.y, axis.z), axis.angle);
    } else if (axis instanceof Array) {
      const axisAngle = new _AxisAngle__WEBPACK_IMPORTED_MODULE_3__.AxisAngle(axis[0], axis[1], axis[2], axis.length === 4 ? axis[3] : null);
      quaternion.setFromAxisAngle(axisAngle, axisAngle.angle);
    } else {
      const axisAngle = new _AxisAngle__WEBPACK_IMPORTED_MODULE_3__.AxisAngle(axis.x, axis.y, axis.z, axis.angle ? axis.angle : null, axis.unit);
      quaternion.setFromAxisAngle(axisAngle, axisAngle.angle);
    }
    return quaternion;
  }
  /**
   * Convert rotation matrix to quaternion
   * @param {Quaternion} this This type
   * @param {Matrix4} matrix Rotation matrix
   * @returns {Quaternion} Serializable quaternion
   */
  static fromRotationMatrix(matrix) {
    const quaternion = new this();
    quaternion.setFromRotationMatrix(matrix);
    return quaternion;
  }
  /**
   * Convert the quaternion to euler angles
   * @param {EulerOrder} order Euler order
   * @returns {Euler} Converted euler
   */
  toEuler(order) {
    return _Euler__WEBPACK_IMPORTED_MODULE_1__.Euler.fromQuaternion(this, order);
  }
  /**
   * Convert the quaternion to axis angles
   * @returns {AxisAngle} Converted axis angle
   */
  toAxisAngle() {
    return _AxisAngle__WEBPACK_IMPORTED_MODULE_3__.AxisAngle.fromQuaternion(this);
  }
  /**
   * Convert quaternion to rotation matrix
   * @returns {Matrix4} Rotation matrix
   */
  toRotationMatrix() {
    return _Matrix4__WEBPACK_IMPORTED_MODULE_4__.Matrix4.rotationFromQuaternion(this);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_7__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], Quaternion.prototype, "x", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_7__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], Quaternion.prototype, "y", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_7__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], Quaternion.prototype, "z", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_6__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_7__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], Quaternion.prototype, "w", void 0);
Quaternion = Quaternion_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_8__.SerializableObject)()], Quaternion);

/***/ }),

/***/ "./dist/esm5/utils/math/Vector2.js":
/*!*****************************************!*\
  !*** ./dist/esm5/utils/math/Vector2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector2: () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Vector2.js");



/**
 * Serializable THREE.js Vector2
 */
let Vector2 = class Vector2 extends _internal__WEBPACK_IMPORTED_MODULE_0__.Vector2 {
  static fromArray(array) {
    return new this().fromArray(array);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector2.prototype, "x", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector2.prototype, "y", void 0);
Vector2 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], Vector2);

/***/ }),

/***/ "./dist/esm5/utils/math/Vector3.js":
/*!*****************************************!*\
  !*** ./dist/esm5/utils/math/Vector3.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector3: () => (/* binding */ Vector3)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Vector3.js");



/**
 * Serializable THREE.js Vector3
 */
let Vector3 = class Vector3 extends _internal__WEBPACK_IMPORTED_MODULE_0__.Vector3 {
  static fromArray(array) {
    return new this().fromArray(array);
  }
  static fromVector(vector) {
    return new this(vector.x, vector.y, vector.z);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector3.prototype, "x", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector3.prototype, "y", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector3.prototype, "z", void 0);
Vector3 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], Vector3);

/***/ }),

/***/ "./dist/esm5/utils/math/Vector4.js":
/*!*****************************************!*\
  !*** ./dist/esm5/utils/math/Vector4.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector4: () => (/* binding */ Vector4)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/options.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal */ "./dist/esm5/three/math/Vector4.js");



/**
 * Serializable THREE.js Vector4
 */
let Vector4 = class Vector4 extends _internal__WEBPACK_IMPORTED_MODULE_0__.Vector4 {
  static fromArray(array) {
    return new this().fromArray(array);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector4.prototype, "x", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector4.prototype, "y", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector4.prototype, "z", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableMember)({
  numberType: _data_decorators__WEBPACK_IMPORTED_MODULE_3__.NumberType.DECIMAL
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)], Vector4.prototype, "w", void 0);
Vector4 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], Vector4);

/***/ }),

/***/ "./dist/esm5/utils/math/index.js":
/*!***************************************!*\
  !*** ./dist/esm5/utils/math/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisAngle: () => (/* reexport safe */ _AxisAngle__WEBPACK_IMPORTED_MODULE_6__.AxisAngle),
/* harmony export */   Euler: () => (/* reexport safe */ _Euler__WEBPACK_IMPORTED_MODULE_0__.Euler),
/* harmony export */   Matrix3: () => (/* reexport safe */ _Matrix3__WEBPACK_IMPORTED_MODULE_7__.Matrix3),
/* harmony export */   Matrix4: () => (/* reexport safe */ _Matrix4__WEBPACK_IMPORTED_MODULE_1__.Matrix4),
/* harmony export */   Quaternion: () => (/* reexport safe */ _Quaternion__WEBPACK_IMPORTED_MODULE_2__.Quaternion),
/* harmony export */   Vector2: () => (/* reexport safe */ _Vector2__WEBPACK_IMPORTED_MODULE_3__.Vector2),
/* harmony export */   Vector3: () => (/* reexport safe */ _Vector3__WEBPACK_IMPORTED_MODULE_4__.Vector3),
/* harmony export */   Vector4: () => (/* reexport safe */ _Vector4__WEBPACK_IMPORTED_MODULE_5__.Vector4)
/* harmony export */ });
/* harmony import */ var _Euler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Euler */ "./dist/esm5/utils/math/Euler.js");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix4 */ "./dist/esm5/utils/math/Matrix4.js");
/* harmony import */ var _Quaternion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quaternion */ "./dist/esm5/utils/math/Quaternion.js");
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector2 */ "./dist/esm5/utils/math/Vector2.js");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector3 */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vector4 */ "./dist/esm5/utils/math/Vector4.js");
/* harmony import */ var _AxisAngle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AxisAngle */ "./dist/esm5/utils/math/AxisAngle.js");
/* harmony import */ var _Matrix3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Matrix3 */ "./dist/esm5/utils/math/Matrix3.js");










/***/ }),

/***/ "./dist/esm5/utils/unit/AccelerationUnit.js":
/*!**************************************************!*\
  !*** ./dist/esm5/utils/unit/AccelerationUnit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccelerationUnit: () => (/* binding */ AccelerationUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _DerivedUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DerivedUnit */ "./dist/esm5/utils/unit/DerivedUnit.js");
/* harmony import */ var _LengthUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LengthUnit */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _TimeUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeUnit */ "./dist/esm5/utils/unit/TimeUnit.js");
var AccelerationUnit_1;





/**
 * @category Unit
 */
let AccelerationUnit = AccelerationUnit_1 = class AccelerationUnit extends _DerivedUnit__WEBPACK_IMPORTED_MODULE_0__.DerivedUnit {};
AccelerationUnit.METER_PER_SECOND_SQUARE = new AccelerationUnit_1('meter per second squared', {
  baseName: 'acceleration',
  aliases: ['m/s^2', 'm/s2', 'meters per second squared']
}).addUnit(_LengthUnit__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER, 1).addUnit(_TimeUnit__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.SECOND, -2);
AccelerationUnit.GRAVITATIONAL_FORCE = new AccelerationUnit_1('gravitational force', {
  baseName: 'acceleration',
  aliases: ['g-force', 'G', 'GS'],
  definitions: [{
    magnitude: 9.78033,
    unit: 'm/s^2'
  }]
});
AccelerationUnit = AccelerationUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], AccelerationUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/AngleUnit.js":
/*!*******************************************!*\
  !*** ./dist/esm5/utils/unit/AngleUnit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleUnit: () => (/* binding */ AngleUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
var AngleUnit_1;



/**
 * @category Unit
 */
let AngleUnit = AngleUnit_1 = class AngleUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
AngleUnit.RADIAN = new AngleUnit_1('radian', {
  baseName: 'angle',
  aliases: ['rad', 'rads', 'radians']
});
AngleUnit.DEGREE = new AngleUnit_1('degree', {
  baseName: 'angle',
  aliases: ['deg', 'degs', 'degrees'],
  definitions: [{
    magnitude: Math.PI / 180,
    unit: 'rad'
  }]
});
AngleUnit = AngleUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()], AngleUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/AngularVelocityUnit.js":
/*!*****************************************************!*\
  !*** ./dist/esm5/utils/unit/AngularVelocityUnit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularVelocityUnit: () => (/* binding */ AngularVelocityUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _DerivedUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DerivedUnit */ "./dist/esm5/utils/unit/DerivedUnit.js");
/* harmony import */ var _AngleUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AngleUnit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _TimeUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeUnit */ "./dist/esm5/utils/unit/TimeUnit.js");
var AngularVelocityUnit_1;





/**
 * @category Unit
 */
let AngularVelocityUnit = AngularVelocityUnit_1 = class AngularVelocityUnit extends _DerivedUnit__WEBPACK_IMPORTED_MODULE_0__.DerivedUnit {};
AngularVelocityUnit.RADIAN_PER_SECOND = new AngularVelocityUnit_1('radian per second', {
  baseName: 'angularvelocity',
  aliases: ['rad/s', 'radians per second']
}).addUnit(_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.RADIAN, 1).addUnit(_TimeUnit__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.SECOND, -1);
AngularVelocityUnit.DEGREE_PER_SECOND = AngularVelocityUnit_1.RADIAN_PER_SECOND.swap([_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.DEGREE], {
  baseName: 'angularvelocity',
  name: 'degree per second',
  aliases: ['deg/s', 'degrees per second']
});
AngularVelocityUnit.RADIAN_PER_MINUTE = AngularVelocityUnit_1.RADIAN_PER_SECOND.swap([_TimeUnit__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.MINUTE], {
  baseName: 'angularvelocity',
  name: 'radian per minute',
  aliases: ['rad/min', 'radian per minute']
});
AngularVelocityUnit.DEGREE_PER_MINUTE = AngularVelocityUnit_1.RADIAN_PER_SECOND.swap([_AngleUnit__WEBPACK_IMPORTED_MODULE_1__.AngleUnit.DEGREE, _TimeUnit__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.MINUTE], {
  baseName: 'angularvelocity',
  name: 'degree per minute',
  aliases: ['deg/min', 'degrees per minute']
});
AngularVelocityUnit = AngularVelocityUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], AngularVelocityUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/DerivedUnit.js":
/*!*********************************************!*\
  !*** ./dist/esm5/utils/unit/DerivedUnit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DerivedUnit: () => (/* binding */ DerivedUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");



/**
 * Derived Unit
 * @category Unit
 */
let DerivedUnit = class DerivedUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {
  constructor() {
    super(...arguments);
    this._units = new Map();
    this._unitPower = new Map();
  }
  addUnit(unit, power) {
    if (this._units.has(unit.baseName)) {
      throw new Error(`A unit with base name '${unit.baseName}' already exists for this unit!`);
    }
    this._units.set(unit.baseName, unit);
    this._unitPower.set(unit.baseName, power);
    return this;
  }
  swap(subunits, options) {
    if (_Unit__WEBPACK_IMPORTED_MODULE_0__.Unit.UNITS.has(options.name)) {
      return _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit.UNITS.get(options.name);
    }
    const UnitConstructor = Object.getPrototypeOf(this).constructor;
    const unit = new UnitConstructor();
    unit._name = options.name;
    unit._baseName = this.baseName;
    unit._aliases = options.aliases ? options.aliases : [];
    const definition = {
      unit: this.name,
      toUnit: undefined,
      fromUnit: undefined
    };
    subunits.forEach(subunit => {
      const currentUnit = this._units.get(subunit.baseName);
      const unitPower = this._unitPower.get(subunit.baseName);
      const newDefinition = subunit.createDefinition(currentUnit);
      const newToFn = value => Math.pow(newDefinition.toUnit(value), unitPower);
      const newFromFn = value => Math.pow(newDefinition.fromUnit(value), unitPower);
      const existingToFn = definition.toUnit;
      const existingFromFn = definition.fromUnit;
      if (existingToFn && existingFromFn) {
        definition.toUnit = value => existingToFn(newToFn(value));
        definition.fromUnit = value => existingFromFn(newFromFn(value));
      } else {
        definition.toUnit = newToFn;
        definition.fromUnit = newFromFn;
      }
    });
    unit._definitions.set(this.name, definition);
    return _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit.registerUnit(unit);
  }
};
DerivedUnit = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()], DerivedUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/GCS.js":
/*!*************************************!*\
  !*** ./dist/esm5/utils/unit/GCS.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GCS: () => (/* binding */ GCS)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector3 */ "./dist/esm5/utils/math/Vector3.js");
/* harmony import */ var _AngleUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AngleUnit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
var GCS_1;





/**
 * Geodetic coordinate system.
 */
let GCS = GCS_1 = class GCS extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {
  /**
   * @deprecated Use GCS.EARTH_RADIUS_MEAN
   * @returns {number} Mean earth radius
   */
  static get EARTH_RADIUS() {
    return GCS_1.EARTH_RADIUS_MEAN;
  }
};
GCS.EARTH_RADIUS_MEAN = 6371008.7714;
GCS.EARTH_EQUATORIAL_RADIUS = 6378137;
GCS.EARTH_POLAR_RADIUS = 6356752.3142;
GCS.EARTH_ECCENTRICITY = 8.1819190842622e-2;
GCS.EPSG4326 = new GCS_1('EPSG:4326', {
  baseName: 'gcs',
  aliases: ['WGS84', 'World Geodetic System']
});
GCS.WGS84 = GCS_1.EPSG4326;
GCS.ECEF = new GCS_1('ECEF', {
  baseName: 'gcs',
  aliases: ['earth-centered, earth-fixed', 'ECR', 'earth centered rotational'],
  definitions: [{
    unit: 'EPSG:4326',
    toUnit: input => {
      /* @see {@link https://gis.stackexchange.com/questions/265909/converting-from-ecef-to-geodetic-coordinates} */
      const f = 1.0 / 298.257223563;
      const a = GCS_1.EARTH_EQUATORIAL_RADIUS;
      const b = a - f * a;
      const e = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2)) / a;
      const clambda = Math.atan2(input.y, input.x);
      const p = Math.sqrt(Math.pow(input.x, 2.0) + Math.pow(input.y, 2));
      let h_old = 0.0;
      // First guess with h=0 meters
      let theta = Math.atan2(input.z, p * (1.0 - Math.pow(e, 2.0)));
      let cs = Math.cos(theta);
      let sn = Math.sin(theta);
      let N = Math.pow(a, 2.0) / Math.sqrt(Math.pow(a * cs, 2.0) + Math.pow(b * sn, 2.0));
      let h = p / cs - N;
      while (Math.abs(h - h_old) > 1.0e-6) {
        h_old = h;
        theta = Math.atan2(input.z, p * (1.0 - Math.pow(e, 2.0) * N / (N + h)));
        cs = Math.cos(theta);
        sn = Math.sin(theta);
        N = Math.pow(a, 2.0) / Math.sqrt(Math.pow(a * cs, 2.0) + Math.pow(b * sn, 2.0));
        h = p / cs - N;
      }
      return new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(_AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN.convert(clambda, _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE), _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN.convert(theta, _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE), h);
    },
    fromUnit: input => {
      var _a;
      const phi = _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE.convert(input.y, _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
      const lambda = _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.DEGREE.convert(input.x, _AngleUnit__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.RADIAN);
      const height = (_a = input.z) !== null && _a !== void 0 ? _a : 0;
      const clat = Math.cos(phi);
      const slat = Math.sin(phi);
      const clon = Math.cos(lambda);
      const slon = Math.sin(lambda);
      const N = GCS_1.EARTH_EQUATORIAL_RADIUS / Math.sqrt(1.0 - Math.pow(GCS_1.EARTH_ECCENTRICITY, 2) * Math.pow(slat, 2));
      return new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3((N + height) * clat * clon, (N + height) * clat * slon, (N * (1 - Math.pow(GCS_1.EARTH_ECCENTRICITY, 2)) + height) * slat);
    }
  }]
});
GCS.EPSG3857 = new GCS_1('EPSG:3857', {
  baseName: 'gcs',
  aliases: ['pseudo mercator', 'web mercator'],
  definitions: [{
    unit: 'EPSG:4326',
    fromUnit: input => {
      return new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(input.x * 20037508.34 / 180, Math.log(Math.tan((90 + input.y) * Math.PI / 360)) / (Math.PI / 180) * 20037508.34 / 180, 0);
    },
    toUnit: input => {
      return new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(input.x * 180 / 20037508.34, Math.atan(Math.exp(input.y * Math.PI / 20037508.34)) * 360 / Math.PI - 90, input.z);
    }
  }]
});
GCS = GCS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], GCS);

/***/ }),

/***/ "./dist/esm5/utils/unit/LengthUnit.js":
/*!********************************************!*\
  !*** ./dist/esm5/utils/unit/LengthUnit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LengthUnit: () => (/* binding */ LengthUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitPrefix */ "./dist/esm5/utils/unit/UnitPrefix.js");
var LengthUnit_1;




/**
 * @category Unit
 */
let LengthUnit = LengthUnit_1 = class LengthUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
LengthUnit.METER = new LengthUnit_1('meter', {
  baseName: 'length',
  aliases: ['m', 'meters'],
  prefixes: 'decimal'
});
LengthUnit.CENTIMETER = LengthUnit_1.METER.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.CENTI);
LengthUnit.MILLIMETER = LengthUnit_1.METER.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.MILLI);
LengthUnit.KILOMETER = LengthUnit_1.METER.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.KILO);
LengthUnit.MILE = new LengthUnit_1('mile', {
  baseName: 'length',
  aliases: ['mil', 'miles'],
  definitions: [{
    unit: 'meter',
    magnitude: 1609.344
  }]
});
LengthUnit = LengthUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)()], LengthUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/LinearVelocityUnit.js":
/*!****************************************************!*\
  !*** ./dist/esm5/utils/unit/LinearVelocityUnit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearVelocityUnit: () => (/* binding */ LinearVelocityUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _DerivedUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DerivedUnit */ "./dist/esm5/utils/unit/DerivedUnit.js");
/* harmony import */ var _LengthUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LengthUnit */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _TimeUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeUnit */ "./dist/esm5/utils/unit/TimeUnit.js");
var LinearVelocityUnit_1;





/**
 * @category Unit
 */
let LinearVelocityUnit = LinearVelocityUnit_1 = class LinearVelocityUnit extends _DerivedUnit__WEBPACK_IMPORTED_MODULE_0__.DerivedUnit {};
LinearVelocityUnit.METER_PER_SECOND = new LinearVelocityUnit_1('meter per second', {
  baseName: 'linearvelocity',
  aliases: ['m/s', 'meters per second']
}).addUnit(_LengthUnit__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.METER, 1).addUnit(_TimeUnit__WEBPACK_IMPORTED_MODULE_2__.TimeUnit.SECOND, -1);
LinearVelocityUnit.CENTIMETER_PER_SECOND = LinearVelocityUnit_1.METER_PER_SECOND.swap([_LengthUnit__WEBPACK_IMPORTED_MODULE_1__.LengthUnit.CENTIMETER], {
  baseName: 'linearvelocity',
  name: 'centimeter per minute',
  aliases: ['cm/min', 'centimeters per minute']
});
LinearVelocityUnit = LinearVelocityUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)()], LinearVelocityUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/LuminanceIntensityUnit.js":
/*!********************************************************!*\
  !*** ./dist/esm5/utils/unit/LuminanceIntensityUnit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LuminanceIntensityUnit: () => (/* binding */ LuminanceIntensityUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
var LuminanceIntensityUnit_1;



/**
 * @category Unit
 */
let LuminanceIntensityUnit = LuminanceIntensityUnit_1 = class LuminanceIntensityUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
LuminanceIntensityUnit.CANDELA = new LuminanceIntensityUnit_1('candela', {
  baseName: 'luminanceintensity',
  aliases: ['cd']
});
LuminanceIntensityUnit = LuminanceIntensityUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()], LuminanceIntensityUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/LuminanceUnit.js":
/*!***********************************************!*\
  !*** ./dist/esm5/utils/unit/LuminanceUnit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LuminanceUnit: () => (/* binding */ LuminanceUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
var LuminanceUnit_1;



/**
 * @category Unit
 */
let LuminanceUnit = LuminanceUnit_1 = class LuminanceUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
LuminanceUnit.LUMEN = new LuminanceUnit_1('lumen', {
  baseName: 'luminance',
  aliases: ['lm'],
  prefixes: 'decimal'
});
LuminanceUnit = LuminanceUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()], LuminanceUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/MagnetismUnit.js":
/*!***********************************************!*\
  !*** ./dist/esm5/utils/unit/MagnetismUnit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MagnetismUnit: () => (/* binding */ MagnetismUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitPrefix */ "./dist/esm5/utils/unit/UnitPrefix.js");
var MagnetismUnit_1;




/**
 * @category Unit
 */
let MagnetismUnit = MagnetismUnit_1 = class MagnetismUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
MagnetismUnit.TESLA = new MagnetismUnit_1('tesla', {
  baseName: 'magnetism',
  aliases: ['T'],
  prefixes: 'decimal'
});
MagnetismUnit.MICROTESLA = MagnetismUnit_1.TESLA.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.MICRO);
MagnetismUnit = MagnetismUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)()], MagnetismUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/PressureUnit.js":
/*!**********************************************!*\
  !*** ./dist/esm5/utils/unit/PressureUnit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PressureUnit: () => (/* binding */ PressureUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
var PressureUnit_1;



/**
 * @category Unit
 */
let PressureUnit = PressureUnit_1 = class PressureUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
PressureUnit.PASCAL = new PressureUnit_1('pascal', {
  baseName: 'pressure',
  aliases: ['P'],
  prefixes: 'decimal'
});
PressureUnit = PressureUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()], PressureUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/TemperatureUnit.js":
/*!*************************************************!*\
  !*** ./dist/esm5/utils/unit/TemperatureUnit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemperatureUnit: () => (/* binding */ TemperatureUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
var TemperatureUnit_1;



/**
 * @category Unit
 */
let TemperatureUnit = TemperatureUnit_1 = class TemperatureUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
TemperatureUnit.CELCIUS = new TemperatureUnit_1('celcius', {
  baseName: 'temperature'
});
TemperatureUnit.FAHRENHEIT = new TemperatureUnit_1('fahrenheit', {
  baseName: 'temperature',
  definitions: [{
    unit: 'celcius',
    offset: -32,
    magnitude: 5 / 9
  }]
});
TemperatureUnit.KELVIN = new TemperatureUnit_1('kelvin', {
  baseName: 'temperature',
  definitions: [{
    unit: 'celcius',
    offset: -273.15
  }]
});
TemperatureUnit.RANKINE = new TemperatureUnit_1('rankine', {
  baseName: 'temperature',
  definitions: [{
    unit: 'kelvin',
    magnitude: 1 / 1.8
  }]
});
TemperatureUnit = TemperatureUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)()], TemperatureUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/TimeUnit.js":
/*!******************************************!*\
  !*** ./dist/esm5/utils/unit/TimeUnit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeUnit: () => (/* binding */ TimeUnit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitPrefix */ "./dist/esm5/utils/unit/UnitPrefix.js");
var TimeUnit_1;




/**
 * @category Unit
 */
let TimeUnit = TimeUnit_1 = class TimeUnit extends _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit {};
TimeUnit.SECOND = new TimeUnit_1('second', {
  baseName: 'time',
  aliases: ['s', 'sec', 'seconds'],
  prefixes: 'decimal'
});
TimeUnit.MILLISECOND = TimeUnit_1.SECOND.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.MILLI);
TimeUnit.MICROSECOND = TimeUnit_1.SECOND.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.MICRO);
TimeUnit.NANOSECOND = TimeUnit_1.SECOND.specifier(_UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.NANO);
TimeUnit.MINUTE = new TimeUnit_1('minute', {
  baseName: 'time',
  aliases: ['m', 'min', 'minutes'],
  definitions: [{
    magnitude: 60,
    unit: 's'
  }]
});
TimeUnit.HOUR = new TimeUnit_1('hour', {
  baseName: 'time',
  aliases: ['h', 'hr', 'hrs', 'hours'],
  definitions: [{
    magnitude: 3600,
    unit: 's'
  }, {
    magnitude: 60,
    unit: 'min'
  }]
});
TimeUnit = TimeUnit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableObject)()], TimeUnit);

/***/ }),

/***/ "./dist/esm5/utils/unit/Unit.js":
/*!**************************************!*\
  !*** ./dist/esm5/utils/unit/Unit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Unit: () => (/* binding */ Unit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");
/* harmony import */ var _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitPrefix */ "./dist/esm5/utils/unit/UnitPrefix.js");
var Unit_1;




/**
 * Unit
 *
 * ## Usage
 * ### Creation
 * ```typescript
 * const myUnit = new Unit("meter", {
 * baseName: "length",
 * aliases: ["m", "meters"],
 * prefixes: 'decimal'
 * })
 * ```
 *
 * ### Specifiers
 * You can specify the prefix using the ```specifier(...)``` function.
 * ```typescript
 * const nanoUnit = myUnit.specifier(UnitPrefix.NANO);
 * ```
 * @category Unit
 */
let Unit = Unit_1 = class Unit {
  /**
   * Create a new unit
   * @param {string} name Unit name
   * @param {UnitOptions} options Unit options
   */
  constructor(name, options) {
    this._definitions = new Map();
    this._prefixType = 'none';
    this._aliases = [];
    const config = options || {
      baseName: undefined
    };
    config.aliases = config.aliases || [];
    config.prefixes = config.prefixes || 'none';
    config.definitions = config.definitions || [];
    // Unit config
    this._name = name || config.name;
    this._baseName = config.baseName;
    this._aliases = config.aliases;
    this._prefixType = config.prefixes;
    // Unit definitions
    config.definitions.forEach(this._initDefinition.bind(this));
    if (this.name) {
      Unit_1.registerUnit(this, config.override);
    }
  }
  /**
   * Get a unit from JSON
   * @param {any} json JSON object
   * @returns {Unit} Unit if found
   */
  static fromJSON(json) {
    if (json.name !== undefined) {
      const unit = Unit_1.findByName(json.name);
      if (!unit) {
        throw new Error(`Unit with name '${json.name}' not found! Unable to deserialize!`);
      }
      return unit;
    } else {
      throw new Error(`Unit does not define a serialization name! Unable to deserialize!`);
    }
  }
  _initDefinition(definition) {
    const referenceUnit = Unit_1.findByName(definition.unit, this.baseName);
    const unitName = referenceUnit ? referenceUnit.name : definition.unit;
    if ('toUnit' in definition) {
      // UnitFunctionDefinition
      this._initFunctionDefinition(definition, unitName);
    } else {
      // UnitBasicDefinition
      this._initBasicDefinition(definition, unitName);
    }
  }
  _initFunctionDefinition(definition, unitName) {
    const functionDefinition = definition;
    this._definitions.set(unitName, functionDefinition);
  }
  _initBasicDefinition(definition, unitName) {
    const definitionKeys = Object.keys(definition);
    const basicDefinition = definition;
    const magnitudeOrder = definitionKeys.indexOf('magnitude');
    const offsetOrder = definitionKeys.indexOf('offset');
    const magnitude = basicDefinition.magnitude || 1;
    const offset = basicDefinition.offset !== undefined ? basicDefinition.offset : 0;
    const offsetPriority = magnitudeOrder === -1 ? true : offsetOrder < magnitudeOrder;
    let toUnitFn;
    let fromUnitFn;
    if (offsetPriority) {
      toUnitFn = value => (value + offset) * magnitude;
      fromUnitFn = value => value / magnitude - offset;
    } else {
      toUnitFn = value => value * magnitude + offset;
      fromUnitFn = value => (value - offset) / magnitude;
    }
    this._definitions.set(unitName, {
      unit: basicDefinition.unit,
      toUnit: toUnitFn,
      fromUnit: fromUnitFn
    });
  }
  /**
   * Unit name
   * @returns {string} Name
   */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    const existingUnit = Unit_1.findByName(name);
    if (existingUnit) {
      this._baseName = existingUnit.baseName;
      this._definitions = existingUnit._definitions;
      this._prefixType = existingUnit._prefixType;
      this._aliases = existingUnit._aliases;
    }
  }
  /**
   * Unit aliases
   * @returns {string[]} Alias names as array
   */
  get aliases() {
    return this._aliases;
  }
  get baseName() {
    return this._baseName;
  }
  get prefixType() {
    return this._prefixType;
  }
  get definitions() {
    return Array.from(this._definitions.values());
  }
  get prefixes() {
    switch (this._prefixType) {
      case 'decimal':
        return _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix.DECIMAL;
      case 'none':
        return [];
    }
  }
  /**
   * Get or create a definition from this unit to the base
   * @returns {UnitFunctionDefinition} Definition to base
   */
  createBaseDefinition() {
    let newDefinition;
    // Get base unit
    const baseUnitName = Unit_1.UNIT_BASES.get(this.baseName);
    if (this._definitions.has(baseUnitName)) {
      const definition = this._definitions.get(baseUnitName);
      newDefinition = definition;
    } else {
      this._definitions.forEach(definition => {
        const unit = Unit_1.findByName(definition.unit, this.baseName);
        const baseDefinition = unit.createBaseDefinition();
        if (baseDefinition) {
          newDefinition = {
            unit: baseDefinition.unit,
            toUnit: value => baseDefinition.toUnit(definition.toUnit(value)),
            fromUnit: value => definition.fromUnit(baseDefinition.fromUnit(value))
          };
          return;
        }
      });
    }
    return newDefinition;
  }
  createDefinition(targetUnit) {
    let newDefinition;
    // Get base unit
    const baseUnitName = Unit_1.UNIT_BASES.get(this.baseName);
    const baseUnit = Unit_1.findByName(baseUnitName);
    if (this._definitions.has(targetUnit.name)) {
      // Direct conversion
      const definition = this._definitions.get(targetUnit.name);
      newDefinition = definition;
    } else if (targetUnit._definitions.has(this.name)) {
      // Reverse conversion
      const definition = targetUnit._definitions.get(this.name);
      newDefinition = {
        unit: targetUnit.name,
        toUnit: definition.fromUnit,
        fromUnit: definition.toUnit
      };
      this._definitions.set(targetUnit.name, newDefinition);
    } else if (baseUnit.name !== this.name) {
      // No direct conversion found, convert to base unit
      const currentToBase = this._definitions.get(baseUnitName);
      const baseToTarget = baseUnit.createDefinition(targetUnit);
      // Convert unit if definitions are found
      if (currentToBase && baseToTarget) {
        newDefinition = {
          unit: targetUnit.name,
          toUnit: value => baseToTarget.toUnit(currentToBase.toUnit(value)),
          fromUnit: value => currentToBase.fromUnit(baseToTarget.fromUnit(value))
        };
        this._definitions.set(targetUnit.name, newDefinition);
      }
    }
    return newDefinition;
  }
  /**
   * Get the unit specifier
   * @param {UnitPrefix} prefix Unit prefix
   * @returns {Unit} Unit with specifier
   */
  specifier(prefix) {
    // Check if the unit already exists
    const unitName = `${prefix.name}${this.name}`;
    if (Unit_1.UNITS.has(unitName)) {
      return Unit_1.UNITS.get(unitName);
    }
    // Confirm that the prefix is allowed
    if (!this.prefixes.includes(prefix)) throw new Error(`Prefix '${prefix.name}' is not allowed for this unit!`);
    // Get the unit constructor of the extended class. This allows
    // serializing of units that are extended (e.g. LengthUnit)
    const UnitConstructor = Object.getPrototypeOf(this).constructor;
    const unit = new UnitConstructor();
    unit._name = unitName;
    unit._baseName = this.baseName;
    const aliases = [];
    this.aliases.forEach(alias => {
      aliases.push(`${prefix.name}${alias}`);
      aliases.push(`${prefix.abbrevation}${alias}`);
    });
    unit._aliases = aliases;
    unit._definitions.set(this.name, {
      unit: this.name,
      toUnit: value => value * prefix.magnitude,
      fromUnit: value => value / prefix.magnitude
    });
    return Unit_1.registerUnit(unit);
  }
  /**
   * Find unit specifier by name or alias
   * @param {string} name Unit name
   * @returns {Unit | undefined} Unit if found
   */
  findByName(name) {
    // Check all aliases in those units
    for (const alias of this.aliases.concat(this.name)) {
      if (name === alias) {
        // Exact match with alias
        return this;
      } else if (name.endsWith(alias)) {
        // Unit that we are looking for ends with the alias
        // confirm that there is a prefix match
        for (const prefix of this.prefixes) {
          if (name.match(prefix.abbrevationPattern) || name.match(prefix.namePattern)) {
            return this.specifier(prefix);
          }
        }
      }
    }
    return undefined;
  }
  /**
   * Find a unit by its name
   * @param {string} name Unit name
   * @param {string} baseName Optional base name to specific result
   * @returns {Unit | undefined} Unit if found
   */
  static findByName(name, baseName) {
    if (name === undefined) {
      return undefined;
    } else if (Unit_1.UNITS.has(name)) {
      return Unit_1.UNITS.get(name);
    } else {
      // Check all units
      for (const [, unit] of Unit_1.UNITS) {
        if (baseName ? baseName !== unit.baseName : false) {
          continue;
        }
        // Check all aliases in those units
        const result = unit.findByName(name);
        if (result) {
          return result;
        }
      }
      return undefined;
    }
  }
  /**
   * Convert a value in the current unit to a target unit
   * @param {UnitValueType} value Value to convert
   * @param {string | Unit} target Target unit
   * @returns {number} Converted unit
   */
  convert(value, target) {
    const targetUnit = target instanceof Unit_1 ? target : Unit_1.findByName(target, this.baseName);
    // Do not convert if target unit is the same or undefined
    if (!targetUnit || targetUnit.name === this.name) {
      return value;
    }
    const definition = this.createDefinition(targetUnit);
    if (!definition) {
      throw new Error(`No conversion definition found from '${this.name}' to '${targetUnit.name}'!`);
    } else {
      return definition.toUnit(value);
    }
  }
  /**
   * Convert a value from a specific unit to a target unit
   * @param {UnitValueType} value Value to convert
   * @param {string | Unit} from Source unit
   * @param {string | Unit} to Target unit
   * @returns {UnitValueType} Converted unit
   */
  static convert(value, from, to) {
    const fromUnit = typeof from === 'string' ? Unit_1.findByName(from) : from;
    return fromUnit.convert(value, to);
  }
  /**
   * Register a new unit
   * @param {Unit} unit Unit to register
   * @param {boolean} override Override an existing unit with the same name
   * @returns {Unit} Registered unit
   */
  static registerUnit(unit, override = false) {
    if (!unit.name) {
      return unit;
    }
    // Register unit if it does not exist yet
    if (!Unit_1.UNITS.has(unit.name) || override) {
      Unit_1.UNITS.set(unit.name, unit);
    }
    // Check if the unit is a new base unit
    const baseName = unit.baseName ? unit.baseName : unit.name;
    const baseUnitName = Unit_1.UNIT_BASES.get(baseName);
    if (!baseUnitName) {
      Unit_1.UNIT_BASES.set(baseName, unit.name);
    } else {
      // Confirm that the unit can be converted to a base unit
      const baseUnit = Unit_1.findByName(baseUnitName, baseName);
      const fromBase = baseUnit.createDefinition(unit);
      const toBase = unit.createBaseDefinition();
      if (!fromBase) {
        // No conversion definition
        unit._definitions.set(baseUnitName, toBase);
      }
    }
    return unit;
  }
};
// Unit bases (e.g. length, time, velocity, ...)
Unit.UNIT_BASES = new Map();
// Units (e.g. second, meter, ...)
Unit.UNITS = new Map();
Unit.UNKNOWN = new Unit_1('unknown');
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_3__.SerializableMember)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String])], Unit.prototype, "name", null);
Unit = Unit_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_4__.SerializableObject)({
  initializer: Unit_1.fromJSON
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, Object])], Unit);

/***/ }),

/***/ "./dist/esm5/utils/unit/UnitPrefix.js":
/*!********************************************!*\
  !*** ./dist/esm5/utils/unit/UnitPrefix.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitPrefix: () => (/* binding */ UnitPrefix)
/* harmony export */ });
/**
 * @category Unit
 */
class UnitPrefix {
  constructor(name, abbrevation, magnitude) {
    this.name = name;
    this.abbrevation = abbrevation;
    this.magnitude = magnitude;
  }
  get namePattern() {
    return new RegExp(`/^${this.name}/g`);
  }
  get abbrevationPattern() {
    return new RegExp(`/^${this.abbrevation}/g`);
  }
}
UnitPrefix.DECA = new UnitPrefix('deca', 'da', 1e1);
UnitPrefix.HECTO = new UnitPrefix('hecto', 'h', 1e2);
UnitPrefix.KILO = new UnitPrefix('kilo', 'k', 1e3);
UnitPrefix.MEGA = new UnitPrefix('mega', 'M', 1e6);
UnitPrefix.GIGA = new UnitPrefix('giga', 'G', 1e9);
UnitPrefix.TERA = new UnitPrefix('tera', 'T', 1e12);
UnitPrefix.PETA = new UnitPrefix('peta', 'P', 1e15);
UnitPrefix.EXA = new UnitPrefix('exa', 'E', 1e18);
UnitPrefix.ZETTA = new UnitPrefix('zetta', 'Z', 1e21);
UnitPrefix.YOTTA = new UnitPrefix('yotta', 'Y', 1e24);
UnitPrefix.DECI = new UnitPrefix('deci', 'd', 1e-1);
UnitPrefix.CENTI = new UnitPrefix('centi', 'c', 1e-2);
UnitPrefix.MILLI = new UnitPrefix('milli', 'm', 1e-3);
UnitPrefix.MICRO = new UnitPrefix('micro', 'u', 1e-6);
UnitPrefix.NANO = new UnitPrefix('nano', 'n', 1e-9);
UnitPrefix.PICO = new UnitPrefix('pico', 'p', 1e-12);
UnitPrefix.FEMTO = new UnitPrefix('femto', 'f', 1e-15);
UnitPrefix.ATTO = new UnitPrefix('atto', 'a', 1e-18);
UnitPrefix.ZEPTO = new UnitPrefix('zepto', 'z', 1e-21);
UnitPrefix.YOCTO = new UnitPrefix('yocto', 'y', 1e-24);
UnitPrefix.DECIMAL = [UnitPrefix.DECA, UnitPrefix.HECTO, UnitPrefix.KILO, UnitPrefix.MEGA, UnitPrefix.GIGA, UnitPrefix.TERA, UnitPrefix.PETA, UnitPrefix.EXA, UnitPrefix.ZETTA, UnitPrefix.YOTTA, UnitPrefix.DECI, UnitPrefix.CENTI, UnitPrefix.MILLI, UnitPrefix.MICRO, UnitPrefix.NANO, UnitPrefix.PICO, UnitPrefix.FEMTO, UnitPrefix.ATTO, UnitPrefix.ZEPTO, UnitPrefix.YOCTO];

/***/ }),

/***/ "./dist/esm5/utils/unit/UnitValue.js":
/*!*******************************************!*\
  !*** ./dist/esm5/utils/unit/UnitValue.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitValue: () => (/* binding */ UnitValue)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableMember.js");
/* harmony import */ var _data_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/decorators */ "./dist/esm5/data/decorators/SerializableObject.js");


/**
 * Unit value
 *
 * ## Usage
 * ### Creation
 * ```typescript
 * const value = new UnitValue(5, LengthUnit.METER);
 * ```
 *
 * ### Conversion
 * ```typescript
 * const value = new UnitValue(5, LengthUnit.METER);
 * const converted = value.to(LengthUnit.CENTIMETER);
 * ```
 * @category Unit
 */
let UnitValue = class UnitValue {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }
  /**
   * Convert the value to another unit
   * @param {Unit} unit Target unit
   * @returns {UnitValue} Converted value
   */
  to(unit) {
    if (!unit) {
      throw new Error(`${this.constructor.name} does not have a unit to convert from!`);
    }
    const result = this.unit.convert(this.valueOf(), unit);
    return new this.constructor(result, unit);
  }
  /**
   * Unit this value is in
   * @returns {Unit} Unit this value is in
   */
  get unit() {
    return this._unit;
  }
  /**
   * Returns a string representation of an object.
   * @returns {string} Unit value as string
   */
  toString() {
    const value = this.valueOf();
    return value ? value.toString() : undefined;
  }
  /**
   * Returns the primitive value
   * @returns {number} Primitive value
   */
  valueOf() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
    return this;
  }
  clone() {
    const result = new this.constructor();
    result._value = this._value;
    result._unit = this._unit;
    return result;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)({
  name: 'value'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)], UnitValue.prototype, "_value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializableMember)({
  name: 'unit'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)], UnitValue.prototype, "_unit", void 0);
UnitValue = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_data_decorators__WEBPACK_IMPORTED_MODULE_2__.SerializableObject)(), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object, Object])], UnitValue);

/***/ }),

/***/ "./dist/esm5/utils/unit/index.js":
/*!***************************************!*\
  !*** ./dist/esm5/utils/unit/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccelerationUnit: () => (/* reexport safe */ _AccelerationUnit__WEBPACK_IMPORTED_MODULE_9__.AccelerationUnit),
/* harmony export */   AngleUnit: () => (/* reexport safe */ _AngleUnit__WEBPACK_IMPORTED_MODULE_4__.AngleUnit),
/* harmony export */   AngularVelocityUnit: () => (/* reexport safe */ _AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_5__.AngularVelocityUnit),
/* harmony export */   DerivedUnit: () => (/* reexport safe */ _DerivedUnit__WEBPACK_IMPORTED_MODULE_2__.DerivedUnit),
/* harmony export */   GCS: () => (/* reexport safe */ _GCS__WEBPACK_IMPORTED_MODULE_11__.GCS),
/* harmony export */   LengthUnit: () => (/* reexport safe */ _LengthUnit__WEBPACK_IMPORTED_MODULE_7__.LengthUnit),
/* harmony export */   LinearVelocityUnit: () => (/* reexport safe */ _LinearVelocityUnit__WEBPACK_IMPORTED_MODULE_8__.LinearVelocityUnit),
/* harmony export */   LuminanceIntensityUnit: () => (/* reexport safe */ _LuminanceIntensityUnit__WEBPACK_IMPORTED_MODULE_13__.LuminanceIntensityUnit),
/* harmony export */   LuminanceUnit: () => (/* reexport safe */ _LuminanceUnit__WEBPACK_IMPORTED_MODULE_14__.LuminanceUnit),
/* harmony export */   MagnetismUnit: () => (/* reexport safe */ _MagnetismUnit__WEBPACK_IMPORTED_MODULE_10__.MagnetismUnit),
/* harmony export */   PressureUnit: () => (/* reexport safe */ _PressureUnit__WEBPACK_IMPORTED_MODULE_15__.PressureUnit),
/* harmony export */   TemperatureUnit: () => (/* reexport safe */ _TemperatureUnit__WEBPACK_IMPORTED_MODULE_12__.TemperatureUnit),
/* harmony export */   TimeUnit: () => (/* reexport safe */ _TimeUnit__WEBPACK_IMPORTED_MODULE_6__.TimeUnit),
/* harmony export */   Unit: () => (/* reexport safe */ _Unit__WEBPACK_IMPORTED_MODULE_0__.Unit),
/* harmony export */   UnitPrefix: () => (/* reexport safe */ _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__.UnitPrefix),
/* harmony export */   UnitValue: () => (/* reexport safe */ _UnitValue__WEBPACK_IMPORTED_MODULE_3__.UnitValue)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./dist/esm5/utils/unit/Unit.js");
/* harmony import */ var _UnitPrefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitPrefix */ "./dist/esm5/utils/unit/UnitPrefix.js");
/* harmony import */ var _DerivedUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DerivedUnit */ "./dist/esm5/utils/unit/DerivedUnit.js");
/* harmony import */ var _UnitValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnitValue */ "./dist/esm5/utils/unit/UnitValue.js");
/* harmony import */ var _AngleUnit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AngleUnit */ "./dist/esm5/utils/unit/AngleUnit.js");
/* harmony import */ var _AngularVelocityUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AngularVelocityUnit */ "./dist/esm5/utils/unit/AngularVelocityUnit.js");
/* harmony import */ var _TimeUnit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimeUnit */ "./dist/esm5/utils/unit/TimeUnit.js");
/* harmony import */ var _LengthUnit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LengthUnit */ "./dist/esm5/utils/unit/LengthUnit.js");
/* harmony import */ var _LinearVelocityUnit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LinearVelocityUnit */ "./dist/esm5/utils/unit/LinearVelocityUnit.js");
/* harmony import */ var _AccelerationUnit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccelerationUnit */ "./dist/esm5/utils/unit/AccelerationUnit.js");
/* harmony import */ var _MagnetismUnit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MagnetismUnit */ "./dist/esm5/utils/unit/MagnetismUnit.js");
/* harmony import */ var _GCS__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GCS */ "./dist/esm5/utils/unit/GCS.js");
/* harmony import */ var _TemperatureUnit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TemperatureUnit */ "./dist/esm5/utils/unit/TemperatureUnit.js");
/* harmony import */ var _LuminanceIntensityUnit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LuminanceIntensityUnit */ "./dist/esm5/utils/unit/LuminanceIntensityUnit.js");
/* harmony import */ var _LuminanceUnit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LuminanceUnit */ "./dist/esm5/utils/unit/LuminanceUnit.js");
/* harmony import */ var _PressureUnit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PressureUnit */ "./dist/esm5/utils/unit/PressureUnit.js");



















/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/deserializer.js":
/*!*********************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/deserializer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deserializer: () => (/* binding */ Deserializer),
/* harmony export */   defaultTypeResolver: () => (/* binding */ defaultTypeResolver)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");




function defaultTypeResolver(sourceObject, knownTypes) {
    if (sourceObject.__type != null) {
        return knownTypes.get(sourceObject.__type);
    }
}
var Deserializer = (function () {
    function Deserializer() {
        this.typeResolver = defaultTypeResolver;
        this.errorHandler = _helpers__WEBPACK_IMPORTED_MODULE_0__.logError;
        this.deserializationStrategy = new Map([
            [_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.AnyT.ctor, _helpers__WEBPACK_IMPORTED_MODULE_0__.identity],
            [Number, deserializeDirectly],
            [String, deserializeDirectly],
            [Boolean, deserializeDirectly],
            [Date, deserializeDate],
            [ArrayBuffer, stringToArrayBuffer],
            [DataView, stringToDataView],
            [Array, convertAsArray],
            [Set, convertAsSet],
            [Map, convertAsMap],
            [Float32Array, convertAsFloatArray],
            [Float64Array, convertAsFloatArray],
            [Uint8Array, convertAsUintArray],
            [Uint8ClampedArray, convertAsUintArray],
            [Uint16Array, convertAsUintArray],
            [Uint32Array, convertAsUintArray],
        ]);
    }
    Deserializer.prototype.setDeserializationStrategy = function (type, deserializer) {
        this.deserializationStrategy.set(type, deserializer);
    };
    Deserializer.prototype.setNameResolver = function (nameResolverCallback) {
        this.nameResolver = nameResolverCallback;
    };
    Deserializer.prototype.setTypeResolver = function (typeResolverCallback) {
        if (typeof typeResolverCallback !== 'function') {
            throw new TypeError('\'typeResolverCallback\' is not a function.');
        }
        this.typeResolver = typeResolverCallback;
    };
    Deserializer.prototype.getTypeResolver = function () {
        return this.typeResolver;
    };
    Deserializer.prototype.setErrorHandler = function (errorHandlerCallback) {
        if (typeof errorHandlerCallback !== 'function') {
            throw new TypeError('\'errorHandlerCallback\' is not a function.');
        }
        this.errorHandler = errorHandlerCallback;
    };
    Deserializer.prototype.getErrorHandler = function () {
        return this.errorHandler;
    };
    Deserializer.prototype.convertSingleValue = function (sourceObject, typeDescriptor, knownTypes, memberName, memberOptions) {
        if (memberName === void 0) { memberName = 'object'; }
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        }
        else if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(sourceObject)) {
            return;
        }
        var deserializer = this.deserializationStrategy.get(typeDescriptor.ctor);
        if (deserializer !== undefined) {
            return deserializer(sourceObject, typeDescriptor, knownTypes, memberName, this, memberOptions);
        }
        if (typeof sourceObject === 'object') {
            return convertAsObject(sourceObject, typeDescriptor, knownTypes, memberName, this);
        }
        var error = "Could not deserialize '" + memberName + "'; don't know how to deserialize type";
        if (typeDescriptor.hasFriendlyName()) {
            error += " '" + typeDescriptor.ctor.name + "'";
        }
        this.errorHandler(new TypeError(error + "."));
    };
    Deserializer.prototype.instantiateType = function (ctor) {
        return new ctor();
    };
    Deserializer.prototype.mergeKnownTypes = function () {
        var _this = this;
        var knownTypeMaps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            knownTypeMaps[_i] = arguments[_i];
        }
        var result = new Map();
        knownTypeMaps.forEach(function (knownTypes) {
            knownTypes.forEach(function (ctor, name) {
                if (_this.nameResolver === undefined) {
                    result.set(name, ctor);
                }
                else {
                    result.set(_this.nameResolver(ctor), ctor);
                }
            });
        });
        return result;
    };
    Deserializer.prototype.createKnownTypesMap = function (knowTypes) {
        var _this = this;
        var map = new Map();
        knowTypes.forEach(function (ctor) {
            if (_this.nameResolver === undefined) {
                var knownTypeMeta = _metadata__WEBPACK_IMPORTED_MODULE_2__.JsonObjectMetadata.getFromConstructor(ctor);
                var customName = (knownTypeMeta === null || knownTypeMeta === void 0 ? void 0 : knownTypeMeta.isExplicitlyMarked) === true
                    ? knownTypeMeta.name
                    : null;
                map.set(customName !== null && customName !== void 0 ? customName : ctor.name, ctor);
            }
            else {
                map.set(_this.nameResolver(ctor), ctor);
            }
        });
        return map;
    };
    Deserializer.prototype.retrievePreserveNull = function (memberOptions) {
        return (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.getOptionValue)('preserveNull', (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(this.options, memberOptions));
    };
    return Deserializer;
}());

function throwTypeMismatchError(targetType, expectedSourceType, actualSourceType, memberName) {
    throw new TypeError("Could not deserialize " + memberName + " as " + targetType + ":"
        + (" expected " + expectedSourceType + ", got " + actualSourceType + "."));
}
function makeTypeErrorMessage(expectedType, actualType, memberName) {
    var expectedTypeName = typeof expectedType === 'function'
        ? (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(expectedType)
        : expectedType;
    var actualTypeName = typeof actualType === 'function' ? (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(actualType) : actualType;
    return "Could not deserialize " + memberName + ": expected '" + expectedTypeName + "',"
        + (" got '" + actualTypeName + "'.");
}
function srcTypeNameForDebug(sourceObject) {
    return sourceObject == null ? 'undefined' : (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObject.constructor);
}
function deserializeDirectly(sourceObject, typeDescriptor, knownTypes, objectName) {
    if (sourceObject.constructor !== typeDescriptor.ctor) {
        throw new TypeError(makeTypeErrorMessage((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(typeDescriptor.ctor), sourceObject.constructor, objectName));
    }
    return sourceObject;
}
function convertAsObject(sourceObject, typeDescriptor, knownTypes, memberName, deserializer) {
    if (typeof sourceObject !== 'object' || sourceObject === null) {
        deserializer.getErrorHandler()(new TypeError("Cannot deserialize " + memberName + ": 'sourceObject' must be a defined object."));
        return undefined;
    }
    var expectedSelfType = typeDescriptor.ctor;
    var sourceObjectMetadata = _metadata__WEBPACK_IMPORTED_MODULE_2__.JsonObjectMetadata.getFromConstructor(expectedSelfType);
    var knownTypeConstructors = knownTypes;
    var typeResolver = deserializer.getTypeResolver();
    if (sourceObjectMetadata !== undefined) {
        sourceObjectMetadata.processDeferredKnownTypes();
        knownTypeConstructors = deserializer.mergeKnownTypes(knownTypeConstructors, deserializer.createKnownTypesMap(sourceObjectMetadata.knownTypes));
        if (sourceObjectMetadata.typeResolver != null) {
            typeResolver = sourceObjectMetadata.typeResolver;
        }
    }
    var typeFromTypeHint = typeResolver(sourceObject, knownTypeConstructors);
    if (typeFromTypeHint != null) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isSubtypeOf)(typeFromTypeHint, expectedSelfType)) {
            expectedSelfType = typeFromTypeHint;
            sourceObjectMetadata = _metadata__WEBPACK_IMPORTED_MODULE_2__.JsonObjectMetadata.getFromConstructor(typeFromTypeHint);
            if (sourceObjectMetadata !== undefined) {
                knownTypeConstructors = deserializer.mergeKnownTypes(knownTypeConstructors, deserializer.createKnownTypesMap(sourceObjectMetadata.knownTypes));
            }
        }
    }
    if ((sourceObjectMetadata === null || sourceObjectMetadata === void 0 ? void 0 : sourceObjectMetadata.isExplicitlyMarked) === true) {
        var sourceMetadata_1 = sourceObjectMetadata;
        var sourceObjectWithDeserializedProperties_1 = {};
        var classOptions_1 = (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(deserializer.options, sourceMetadata_1.options);
        sourceMetadata_1.dataMembers.forEach(function (objMemberMetadata, propKey) {
            var objMemberValue = sourceObject[propKey];
            var objMemberDebugName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceMetadata_1.classType) + "." + propKey;
            var objMemberOptions = (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(classOptions_1, objMemberMetadata.options);
            var revivedValue;
            if (objMemberMetadata.deserializer != null) {
                revivedValue = objMemberMetadata.deserializer(objMemberValue, {
                    fallback: function (so, td) { return deserializer.convertSingleValue(so, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(td), knownTypes); },
                });
            }
            else if (objMemberMetadata.type == null) {
                throw new TypeError("Cannot deserialize " + objMemberDebugName + " there is"
                    + " no constructor nor deserialization function to use.");
            }
            else {
                revivedValue = deserializer.convertSingleValue(objMemberValue, objMemberMetadata.type(), knownTypeConstructors, objMemberDebugName, objMemberOptions);
            }
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(revivedValue)
                || (deserializer.retrievePreserveNull(objMemberOptions)
                    && revivedValue === null)) {
                sourceObjectWithDeserializedProperties_1[objMemberMetadata.key] = revivedValue;
            }
            else if (objMemberMetadata.isRequired === true) {
                deserializer.getErrorHandler()(new TypeError("Missing required member '" + objMemberDebugName + "'."));
            }
        });
        var targetObject = void 0;
        if (typeof sourceObjectMetadata.initializerCallback === 'function') {
            try {
                targetObject = sourceObjectMetadata.initializerCallback(sourceObjectWithDeserializedProperties_1, sourceObject);
                if (targetObject == null) {
                    throw new TypeError("Cannot deserialize " + memberName + ":"
                        + " 'initializer' function returned undefined/null"
                        + (", but '" + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObjectMetadata.classType) + "' was expected."));
                }
                else if (!(targetObject instanceof sourceObjectMetadata.classType)) {
                    throw new TypeError("Cannot deserialize " + memberName + ":"
                        + ("'initializer' returned '" + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(targetObject.constructor) + "'")
                        + (", but '" + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObjectMetadata.classType) + "' was expected")
                        + (", and '" + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(targetObject.constructor) + "' is not a subtype of")
                        + (" '" + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObjectMetadata.classType) + "'"));
                }
            }
            catch (e) {
                deserializer.getErrorHandler()(e);
                return undefined;
            }
        }
        else {
            targetObject = deserializer.instantiateType(expectedSelfType);
        }
        Object.assign(targetObject, sourceObjectWithDeserializedProperties_1);
        var methodName = sourceObjectMetadata.onDeserializedMethodName;
        if (methodName != null) {
            if (typeof targetObject[methodName] === 'function') {
                targetObject[methodName]();
            }
            else if (typeof targetObject.constructor[methodName] === 'function') {
                targetObject.constructor[methodName]();
            }
            else {
                deserializer.getErrorHandler()(new TypeError("onDeserialized callback"
                    + ("'" + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObjectMetadata.classType) + "." + methodName + "' is not a method.")));
            }
        }
        return targetObject;
    }
    else {
        var targetObject_1 = {};
        Object.keys(sourceObject).forEach(function (sourceKey) {
            targetObject_1[sourceKey] = deserializer.convertSingleValue(sourceObject[sourceKey], new _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ConcreteTypeDescriptor(sourceObject[sourceKey].constructor), knownTypes, sourceKey);
        });
        return targetObject_1;
    }
}
function convertAsArray(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ArrayTypeDescriptor)) {
        throw new TypeError("Could not deserialize " + memberName + " as Array: incorrect TypeDescriptor detected,"
            + ' please use proper annotation or function for this type');
    }
    if (!Array.isArray(sourceObject)) {
        deserializer.getErrorHandler()(new TypeError(makeTypeErrorMessage(Array, sourceObject.constructor, memberName)));
        return [];
    }
    if (typeDescriptor.elementType == null) {
        deserializer.getErrorHandler()(new TypeError("Could not deserialize " + memberName + " as Array: missing constructor reference of"
            + " Array elements."));
        return [];
    }
    return sourceObject.map(function (element, i) {
        try {
            return deserializer.convertSingleValue(element, typeDescriptor.elementType, knownTypes, memberName + "[" + i + "]", memberOptions);
        }
        catch (e) {
            deserializer.getErrorHandler()(e);
            return undefined;
        }
    });
}
function convertAsSet(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.SetTypeDescriptor)) {
        throw new TypeError("Could not deserialize " + memberName + " as Set: incorrect TypeDescriptor detected,"
            + " please use proper annotation or function for this type");
    }
    if (!Array.isArray(sourceObject)) {
        deserializer.getErrorHandler()(new TypeError(makeTypeErrorMessage(Array, sourceObject.constructor, memberName)));
        return new Set();
    }
    if (typeDescriptor.elementType == null) {
        deserializer.getErrorHandler()(new TypeError("Could not deserialize " + memberName + " as Set: missing constructor reference of"
            + " Set elements."));
        return new Set();
    }
    var resultSet = new Set();
    sourceObject.forEach(function (element, i) {
        try {
            resultSet.add(deserializer.convertSingleValue(element, typeDescriptor.elementType, knownTypes, memberName + "[" + i + "]", memberOptions));
        }
        catch (e) {
            deserializer.getErrorHandler()(e);
        }
    });
    return resultSet;
}
function isExpectedMapShape(source, expectedShape) {
    return (expectedShape === 0 && Array.isArray(source))
        || (expectedShape === 1 && typeof source === 'object');
}
function convertAsMap(sourceObject, typeDescriptor, knownTypes, memberName, deserializer, memberOptions) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.MapTypeDescriptor)) {
        throw new TypeError("Could not deserialize " + memberName + " as Map: incorrect TypeDescriptor detected,"
            + 'please use proper annotation or function for this type');
    }
    var expectedShape = typeDescriptor.getCompleteOptions().shape;
    if (!isExpectedMapShape(sourceObject, expectedShape)) {
        var expectedType = expectedShape === 0 ? Array : Object;
        deserializer.getErrorHandler()(new TypeError(makeTypeErrorMessage(expectedType, sourceObject.constructor, memberName)));
        return new Map();
    }
    if (typeDescriptor.keyType == null) {
        deserializer.getErrorHandler()(new TypeError("Could not deserialize " + memberName + " as Map: missing key constructor."));
        return new Map();
    }
    if (typeDescriptor.valueType == null) {
        deserializer.getErrorHandler()(new TypeError("Could not deserialize " + memberName + " as Map: missing value constructor."));
        return new Map();
    }
    var keyMemberName = memberName + "[].key";
    var valueMemberName = memberName + "[].value";
    var resultMap = new Map();
    if (expectedShape === 1) {
        Object.keys(sourceObject).forEach(function (key) {
            try {
                var resultKey = deserializer.convertSingleValue(key, typeDescriptor.keyType, knownTypes, keyMemberName, memberOptions);
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(resultKey)) {
                    resultMap.set(resultKey, deserializer.convertSingleValue(sourceObject[key], typeDescriptor.valueType, knownTypes, valueMemberName, memberOptions));
                }
            }
            catch (e) {
                deserializer.getErrorHandler()(e);
            }
        });
    }
    else {
        sourceObject.forEach(function (element) {
            try {
                var key = deserializer.convertSingleValue(element.key, typeDescriptor.keyType, knownTypes, keyMemberName, memberOptions);
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(key)) {
                    resultMap.set(key, deserializer.convertSingleValue(element.value, typeDescriptor.valueType, knownTypes, valueMemberName, memberOptions));
                }
            }
            catch (e) {
                deserializer.getErrorHandler()(e);
            }
        });
    }
    return resultMap;
}
function deserializeDate(sourceObject, typeDescriptor, knownTypes, memberName) {
    if (typeof sourceObject === 'number') {
        var isInteger = sourceObject % 1 === 0;
        if (!isInteger) {
            throw new TypeError("Could not deserialize " + memberName + " as Date:"
                + " expected an integer, got a number with decimal places.");
        }
        return new Date(sourceObject);
    }
    else if (typeof sourceObject === 'string') {
        return new Date(sourceObject);
    }
    else if (sourceObject instanceof Date) {
        return sourceObject;
    }
    else {
        throwTypeMismatchError('Date', 'an ISO-8601 string', srcTypeNameForDebug(sourceObject), memberName);
    }
}
function stringToArrayBuffer(sourceObject, typeDescriptor, knownTypes, memberName) {
    if (typeof sourceObject !== 'string') {
        throwTypeMismatchError('ArrayBuffer', 'a string source', srcTypeNameForDebug(sourceObject), memberName);
    }
    return createArrayBufferFromString(sourceObject);
}
function stringToDataView(sourceObject, typeDescriptor, knownTypes, memberName) {
    if (typeof sourceObject !== 'string') {
        throwTypeMismatchError('DataView', 'a string source', srcTypeNameForDebug(sourceObject), memberName);
    }
    return new DataView(createArrayBufferFromString(sourceObject));
}
function createArrayBufferFromString(input) {
    var buf = new ArrayBuffer(input.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        bufView[i] = input.charCodeAt(i);
    }
    return buf;
}
function convertAsFloatArray(sourceObject, typeDescriptor, knownTypes, memberName) {
    var constructor = typeDescriptor.ctor;
    if (Array.isArray(sourceObject) && sourceObject.every(function (elem) { return !isNaN(elem); })) {
        return new constructor(sourceObject);
    }
    return throwTypeMismatchError(constructor.name, 'a numeric source array', srcTypeNameForDebug(sourceObject), memberName);
}
function convertAsUintArray(sourceObject, typeDescriptor, knownTypes, memberName) {
    var constructor = typeDescriptor.ctor;
    if (Array.isArray(sourceObject) && sourceObject.every(function (elem) { return !isNaN(elem); })) {
        return new constructor(sourceObject.map(function (value) { return ~~value; }));
    }
    return throwTypeMismatchError(typeDescriptor.ctor.name, 'a numeric source array', srcTypeNameForDebug(sourceObject), memberName);
}
//# sourceMappingURL=deserializer.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/helpers.js":
/*!****************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/helpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAZY_TYPE_EXPLANATION: () => (/* binding */ LAZY_TYPE_EXPLANATION),
/* harmony export */   MISSING_REFLECT_CONF_MSG: () => (/* binding */ MISSING_REFLECT_CONF_MSG),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   isDirectlySerializableNativeType: () => (/* binding */ isDirectlySerializableNativeType),
/* harmony export */   isInstanceOf: () => (/* binding */ isInstanceOf),
/* harmony export */   isReflectMetadataSupported: () => (/* binding */ isReflectMetadataSupported),
/* harmony export */   isSubtypeOf: () => (/* binding */ isSubtypeOf),
/* harmony export */   isTypeTypedArray: () => (/* binding */ isTypeTypedArray),
/* harmony export */   isValueDefined: () => (/* binding */ isValueDefined),
/* harmony export */   logError: () => (/* binding */ logError),
/* harmony export */   logWarning: () => (/* binding */ logWarning),
/* harmony export */   nameof: () => (/* binding */ nameof),
/* harmony export */   parseToJSObject: () => (/* binding */ parseToJSObject)
/* harmony export */ });
/* unused harmony exports isDirectlyDeserializableNativeType, isObject, shouldOmitParseString, logMessage */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");


var LAZY_TYPE_EXPLANATION = "If the type is not yet defined, for example due to circular references, add '() => ' before it. E.g. @jsonMember(() => Foo)";
var MISSING_REFLECT_CONF_MSG = 'Make sure that you have both "experimentalDecorators"'
    + ' and "emitDecoratorMetadata" enabled in your tsconfig.json';
function isDirectlySerializableNativeType(type) {
    return [Date, Number, String, Boolean].indexOf(type) !== -1;
}
function isDirectlyDeserializableNativeType(type) {
    return [Number, String, Boolean].indexOf(type) !== -1;
}
function isTypeTypedArray(type) {
    return [
        Float32Array,
        Float64Array,
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
    ].indexOf(type) !== -1;
}
function isObject(value) {
    return typeof value === 'object';
}
function shouldOmitParseString(jsonStr, expectedType) {
    var expectsTypesSerializedAsStrings = expectedType === String
        || expectedType === ArrayBuffer
        || expectedType === DataView;
    var hasQuotes = jsonStr.length >= 2
        && jsonStr[0] === '"'
        && jsonStr[jsonStr.length - 1] === '"';
    if (expectedType === Date) {
        var isNumber = !isNaN(Number(jsonStr.trim()));
        return !hasQuotes && !isNumber;
    }
    return expectsTypesSerializedAsStrings && !hasQuotes;
}
function parseToJSObject(json, expectedType) {
    if (typeof json !== 'string' || shouldOmitParseString(json, expectedType)) {
        return json;
    }
    return JSON.parse(json);
}
function isSubtypeOf(A, B) {
    return A === B || A.prototype instanceof B;
}
function logError(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (typeof console === 'object' && typeof console.error === 'function') {
        console.error.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)([message], optionalParams));
    }
    else if (typeof console === 'object' && typeof console.log === 'function') {
        console.log.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)(["ERROR: " + message], optionalParams));
    }
}
function logMessage(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (typeof console === 'object' && typeof console.log === 'function') {
        console.log.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)([message], optionalParams));
    }
}
function logWarning(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (typeof console === 'object' && typeof console.warn === 'function') {
        console.warn.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)([message], optionalParams));
    }
    else if (typeof console === 'object' && typeof console.log === 'function') {
        console.log.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)(["WARNING: " + message], optionalParams));
    }
}
function isValueDefined(value) {
    return !(typeof value === 'undefined' || value === null);
}
function isInstanceOf(value, constructor) {
    if (constructor === _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.AnyT.ctor) {
        return true;
    }
    else if (typeof value === 'number') {
        return constructor === Number;
    }
    else if (typeof value === 'string') {
        return constructor === String;
    }
    else if (typeof value === 'boolean') {
        return constructor === Boolean;
    }
    else if (isObject(value)) {
        return value instanceof constructor;
    }
    return false;
}
var isReflectMetadataSupported = typeof Reflect === 'object' && typeof Reflect.getMetadata === 'function';
function nameof(fn) {
    if (typeof fn.name === 'string') {
        return fn.name;
    }
    return 'undefined';
}
function identity(arg) {
    return arg;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/index.js":
/*!**************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnyT: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.AnyT),
/* harmony export */   ArrayT: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.ArrayT),
/* harmony export */   ArrayTypeDescriptor: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.ArrayTypeDescriptor),
/* harmony export */   JsonObjectMetadata: () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata),
/* harmony export */   MapT: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.MapT),
/* harmony export */   MapTypeDescriptor: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.MapTypeDescriptor),
/* harmony export */   SetT: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.SetT),
/* harmony export */   SetTypeDescriptor: () => (/* reexport safe */ _type_descriptor__WEBPACK_IMPORTED_MODULE_10__.SetTypeDescriptor),
/* harmony export */   TypedJSON: () => (/* reexport safe */ _parser__WEBPACK_IMPORTED_MODULE_0__.TypedJSON),
/* harmony export */   defaultTypeEmitter: () => (/* reexport safe */ _parser__WEBPACK_IMPORTED_MODULE_2__.defaultTypeEmitter),
/* harmony export */   defaultTypeResolver: () => (/* reexport safe */ _parser__WEBPACK_IMPORTED_MODULE_1__.defaultTypeResolver),
/* harmony export */   jsonArrayMember: () => (/* reexport safe */ _json_array_member__WEBPACK_IMPORTED_MODULE_6__.jsonArrayMember),
/* harmony export */   jsonMapMember: () => (/* reexport safe */ _json_map_member__WEBPACK_IMPORTED_MODULE_8__.jsonMapMember),
/* harmony export */   jsonMember: () => (/* reexport safe */ _json_member__WEBPACK_IMPORTED_MODULE_5__.jsonMember),
/* harmony export */   jsonObject: () => (/* reexport safe */ _json_object__WEBPACK_IMPORTED_MODULE_4__.jsonObject),
/* harmony export */   jsonSetMember: () => (/* reexport safe */ _json_set_member__WEBPACK_IMPORTED_MODULE_7__.jsonSetMember),
/* harmony export */   toJson: () => (/* reexport safe */ _to_json__WEBPACK_IMPORTED_MODULE_9__.toJson)
/* harmony export */ });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/typedjson/lib/esm5/parser.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/typedjson/lib/esm5/deserializer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./node_modules/typedjson/lib/esm5/serializer.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _json_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-object */ "./node_modules/typedjson/lib/esm5/json-object.js");
/* harmony import */ var _json_member__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json-member */ "./node_modules/typedjson/lib/esm5/json-member.js");
/* harmony import */ var _json_array_member__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json-array-member */ "./node_modules/typedjson/lib/esm5/json-array-member.js");
/* harmony import */ var _json_set_member__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./json-set-member */ "./node_modules/typedjson/lib/esm5/json-set-member.js");
/* harmony import */ var _json_map_member__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./json-map-member */ "./node_modules/typedjson/lib/esm5/json-map-member.js");
/* harmony import */ var _to_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./to-json */ "./node_modules/typedjson/lib/esm5/to-json.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types */ "./node_modules/typedjson/lib/esm5/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_11__) if(["default","TypedJSON","defaultTypeResolver","defaultTypeEmitter","JsonObjectMetadata","jsonObject","jsonMember","jsonArrayMember","jsonSetMember","jsonMapMember","toJson","ArrayT","AnyT","SetT","MapT","SetTypeDescriptor","ArrayTypeDescriptor","MapTypeDescriptor"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_11__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/json-array-member.js":
/*!**************************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/json-array-member.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createArrayType: () => (/* binding */ createArrayType),
/* harmony export */   jsonArrayMember: () => (/* binding */ jsonArrayMember)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");




function jsonArrayMember(maybeTypeThunk, options) {
    if (options === void 0) { options = {}; }
    return function (target, propKey) {
        var _a;
        var decoratorName = "@jsonArrayMember on " + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(target.constructor) + "." + String(propKey);
        var typeThunk = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeThunk)(maybeTypeThunk, decoratorName);
        var dimensions = options.dimensions == null ? 1 : options.dimensions;
        if (!isNaN(dimensions) && dimensions < 1) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": 'dimensions' option must be at least 1.");
            return;
        }
        var reflectedType = _helpers__WEBPACK_IMPORTED_MODULE_0__.isReflectMetadataSupported
            ? Reflect.getMetadata('design:type', target, propKey)
            : null;
        if (reflectedType != null && reflectedType !== Array && reflectedType !== Object) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": property is not an Array. " + _helpers__WEBPACK_IMPORTED_MODULE_0__.MISSING_REFLECT_CONF_MSG);
            return;
        }
        (0,_metadata__WEBPACK_IMPORTED_MODULE_2__.injectMetadataInformation)(target, propKey, {
            type: function () { return createArrayType((0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(typeThunk()), dimensions); },
            emitDefaultValue: options.emitDefaultValue,
            isRequired: options.isRequired,
            options: (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.extractOptionBase)(options),
            key: propKey.toString(),
            name: (_a = options.name) !== null && _a !== void 0 ? _a : propKey.toString(),
            deserializer: options.deserializer,
            serializer: options.serializer,
        });
    };
}
function createArrayType(elementType, dimensions) {
    var type = new _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ArrayTypeDescriptor(elementType);
    for (var i = 1; i < dimensions; ++i) {
        type = new _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ArrayTypeDescriptor(type);
    }
    return type;
}
//# sourceMappingURL=json-array-member.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/json-map-member.js":
/*!************************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/json-map-member.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsonMapMember: () => (/* binding */ jsonMapMember)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");




function jsonMapMember(maybeKeyThunk, maybeValueThunk, options) {
    if (options === void 0) { options = {}; }
    return function (target, propKey) {
        var _a;
        var decoratorName = "@jsonMapMember on " + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(target.constructor) + "." + String(propKey);
        var keyThunk = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeThunk)(maybeKeyThunk, decoratorName);
        var valueThunk = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeThunk)(maybeValueThunk, decoratorName);
        var reflectedType = _helpers__WEBPACK_IMPORTED_MODULE_0__.isReflectMetadataSupported
            ? Reflect.getMetadata('design:type', target, propKey)
            : null;
        if (reflectedType != null && reflectedType !== Map && reflectedType !== Object) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": property is not a Map. " + _helpers__WEBPACK_IMPORTED_MODULE_0__.MISSING_REFLECT_CONF_MSG);
            return;
        }
        (0,_metadata__WEBPACK_IMPORTED_MODULE_2__.injectMetadataInformation)(target, propKey, {
            type: function () { return (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.MapT)(keyThunk(), valueThunk(), { shape: options.shape }); },
            emitDefaultValue: options.emitDefaultValue,
            isRequired: options.isRequired,
            options: (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.extractOptionBase)(options),
            key: propKey.toString(),
            name: (_a = options.name) !== null && _a !== void 0 ? _a : propKey.toString(),
            deserializer: options.deserializer,
            serializer: options.serializer,
        });
    };
}
//# sourceMappingURL=json-map-member.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/json-member.js":
/*!********************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/json-member.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsonMember: () => (/* binding */ jsonMember)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");




function jsonMember(optionsOrPrototype, propertyKeyOrOptions) {
    if (typeof propertyKeyOrOptions === 'string' || typeof propertyKeyOrOptions === 'symbol') {
        var property = propertyKeyOrOptions;
        var prototype = optionsOrPrototype;
        var decoratorName = "@jsonMember on " + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(prototype.constructor) + "." + String(property);
        if (!_helpers__WEBPACK_IMPORTED_MODULE_0__.isReflectMetadataSupported) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": ReflectDecorators is required if the type is not explicitly provided with e.g. @jsonMember(Number)");
            return;
        }
        var reflectPropCtor = Reflect.getMetadata('design:type', prototype, property);
        if (reflectPropCtor == null) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": could not resolve detected property constructor at runtime. Potential solutions:\n - " + _helpers__WEBPACK_IMPORTED_MODULE_0__.LAZY_TYPE_EXPLANATION + "\n - " + _helpers__WEBPACK_IMPORTED_MODULE_0__.MISSING_REFLECT_CONF_MSG);
            return;
        }
        var typeDescriptor_1 = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(reflectPropCtor);
        if (isSpecialPropertyType(decoratorName, typeDescriptor_1)) {
            return;
        }
        (0,_metadata__WEBPACK_IMPORTED_MODULE_2__.injectMetadataInformation)(prototype, property, {
            type: function () { return typeDescriptor_1; },
            key: propertyKeyOrOptions.toString(),
            name: propertyKeyOrOptions.toString(),
        });
        return;
    }
    return jsonMemberDecoratorFactory(optionsOrPrototype, propertyKeyOrOptions);
}
function jsonMemberDecoratorFactory(optionsOrType, options) {
    return function (target, property) {
        var _a;
        var decoratorName = "@jsonMember on " + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(target.constructor) + "." + String(property);
        var typeThunk;
        if ((0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.isTypelike)(optionsOrType) || (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.isTypeThunk)(optionsOrType)) {
            typeThunk = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeThunk)(optionsOrType, decoratorName);
        }
        else {
            options = optionsOrType;
        }
        options = options !== null && options !== void 0 ? options : {};
        if (Object.prototype.hasOwnProperty.call(options, 'constructor')) {
            if (typeThunk !== undefined) {
                throw new Error('Cannot both define constructor option and type. Only one allowed.');
            }
            if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(options.constructor)) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": cannot resolve specified property constructor at runtime. " + _helpers__WEBPACK_IMPORTED_MODULE_0__.LAZY_TYPE_EXPLANATION);
                return;
            }
            var newTypeDescriptor_1 = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(options.constructor);
            typeThunk = function () { return newTypeDescriptor_1; };
            if (_helpers__WEBPACK_IMPORTED_MODULE_0__.isReflectMetadataSupported && !(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isSubtypeOf)(newTypeDescriptor_1.ctor, Reflect.getMetadata('design:type', target, property))) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logWarning)(decoratorName + ": detected property type does not match"
                    + " 'constructor' option.");
            }
        }
        else if (typeThunk !== undefined) {
        }
        else if (_helpers__WEBPACK_IMPORTED_MODULE_0__.isReflectMetadataSupported) {
            var reflectCtor_1 = Reflect.getMetadata('design:type', target, property);
            if (reflectCtor_1 == null) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": cannot resolve detected property constructor at runtime. " + _helpers__WEBPACK_IMPORTED_MODULE_0__.LAZY_TYPE_EXPLANATION);
                return;
            }
            typeThunk = function () { return (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(reflectCtor_1); };
        }
        else if (options.deserializer === undefined) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": Cannot determine type");
            return;
        }
        var typeToTest = typeThunk === null || typeThunk === void 0 ? void 0 : typeThunk();
        if (typeToTest !== undefined && isSpecialPropertyType(decoratorName, typeToTest)) {
            return;
        }
        (0,_metadata__WEBPACK_IMPORTED_MODULE_2__.injectMetadataInformation)(target, property, {
            type: typeThunk === undefined
                ? undefined
                : function () { return (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(typeThunk()); },
            emitDefaultValue: options.emitDefaultValue,
            isRequired: options.isRequired,
            options: (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.extractOptionBase)(options),
            key: property.toString(),
            name: (_a = options.name) !== null && _a !== void 0 ? _a : property.toString(),
            deserializer: options.deserializer,
            serializer: options.serializer,
        });
    };
}
function isConstructorEqual(type, constructor) {
    return type instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.TypeDescriptor ? type.ctor === constructor : type === constructor;
}
function isSpecialPropertyType(decoratorName, typeDescriptor) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ArrayTypeDescriptor)
        && isConstructorEqual(typeDescriptor, Array)) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": property is an Array. Use the jsonArrayMember decorator to"
            + " serialize this property.");
        return true;
    }
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.SetTypeDescriptor) && isConstructorEqual(typeDescriptor, Set)) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": property is a Set. Use the jsonSetMember decorator to"
            + " serialize this property.");
        return true;
    }
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.MapTypeDescriptor) && isConstructorEqual(typeDescriptor, Map)) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": property is a Map. Use the jsonMapMember decorator to"
            + " serialize this property.");
        return true;
    }
    return false;
}
//# sourceMappingURL=json-member.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/json-object.js":
/*!********************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/json-object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsonObject: () => (/* binding */ jsonObject)
/* harmony export */ });
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");


function jsonObject(optionsOrTarget) {
    var options;
    if (typeof optionsOrTarget === 'function') {
        options = {};
    }
    else {
        options = optionsOrTarget !== null && optionsOrTarget !== void 0 ? optionsOrTarget : {};
    }
    function decorator(target) {
        var objectMetadata = _metadata__WEBPACK_IMPORTED_MODULE_0__.JsonObjectMetadata.ensurePresentInPrototype(target.prototype);
        objectMetadata.isExplicitlyMarked = true;
        objectMetadata.onDeserializedMethodName = options.onDeserialized;
        objectMetadata.beforeSerializationMethodName = options.beforeSerialization;
        if (options.typeResolver != null) {
            objectMetadata.typeResolver = options.typeResolver;
        }
        if (options.typeHintEmitter != null) {
            objectMetadata.typeHintEmitter = options.typeHintEmitter;
        }
        objectMetadata.initializerCallback = options.initializer;
        if (options.name != null) {
            objectMetadata.name = options.name;
        }
        var optionsBase = (0,_options_base__WEBPACK_IMPORTED_MODULE_1__.extractOptionBase)(options);
        if (optionsBase !== undefined) {
            objectMetadata.options = optionsBase;
        }
        if (options.knownTypes != null) {
            options.knownTypes
                .filter(function (knownType) { return Boolean(knownType); })
                .forEach(function (knownType) { return objectMetadata.knownTypes.add(knownType); });
        }
    }
    if (typeof optionsOrTarget === 'function') {
        decorator(optionsOrTarget);
    }
    else {
        return decorator;
    }
}
//# sourceMappingURL=json-object.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/json-set-member.js":
/*!************************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/json-set-member.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsonSetMember: () => (/* binding */ jsonSetMember)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");




function jsonSetMember(maybeTypeThunk, options) {
    if (options === void 0) { options = {}; }
    return function (target, propKey) {
        var _a;
        var decoratorName = "@jsonSetMember on " + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(target.constructor) + "." + String(propKey);
        var typeThunk = (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeThunk)(maybeTypeThunk, decoratorName);
        var reflectedType = _helpers__WEBPACK_IMPORTED_MODULE_0__.isReflectMetadataSupported
            ? Reflect.getMetadata('design:type', target, propKey)
            : null;
        if (reflectedType != null && reflectedType !== Set && reflectedType !== Object) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": property is not a Set. " + _helpers__WEBPACK_IMPORTED_MODULE_0__.MISSING_REFLECT_CONF_MSG);
            return;
        }
        (0,_metadata__WEBPACK_IMPORTED_MODULE_2__.injectMetadataInformation)(target, propKey, {
            type: function () { return (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.SetT)(typeThunk()); },
            emitDefaultValue: options.emitDefaultValue,
            isRequired: options.isRequired,
            options: (0,_options_base__WEBPACK_IMPORTED_MODULE_3__.extractOptionBase)(options),
            key: propKey.toString(),
            name: (_a = options.name) !== null && _a !== void 0 ? _a : propKey.toString(),
            deserializer: options.deserializer,
            serializer: options.serializer,
        });
    };
}
//# sourceMappingURL=json-set-member.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/metadata.js":
/*!*****************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/metadata.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonObjectMetadata: () => (/* binding */ JsonObjectMetadata),
/* harmony export */   injectMetadataInformation: () => (/* binding */ injectMetadataInformation)
/* harmony export */ });
/* unused harmony export METADATA_FIELD_KEY */
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");

var METADATA_FIELD_KEY = '__typedJsonJsonObjectMetadataInformation__';
var JsonObjectMetadata = (function () {
    function JsonObjectMetadata(classType) {
        this.dataMembers = new Map();
        this.knownTypes = new Set();
        this.knownTypesDeferred = [];
        this.isExplicitlyMarked = false;
        this.isHandledWithoutAnnotation = false;
        this.classType = classType;
    }
    JsonObjectMetadata.getJsonObjectName = function (ctor) {
        var metadata = JsonObjectMetadata.getFromConstructor(ctor);
        return metadata === undefined ? (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(ctor) : (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(metadata.classType);
    };
    JsonObjectMetadata.getFromConstructor = function (ctor) {
        var prototype = ctor.prototype;
        if (prototype == null) {
            return;
        }
        var metadata;
        if (Object.prototype.hasOwnProperty.call(prototype, METADATA_FIELD_KEY)) {
            metadata = prototype[METADATA_FIELD_KEY];
        }
        if ((metadata === null || metadata === void 0 ? void 0 : metadata.isExplicitlyMarked) === true) {
            return metadata;
        }
        if (JsonObjectMetadata.doesHandleWithoutAnnotation(ctor)) {
            var primitiveMeta = new JsonObjectMetadata(ctor);
            primitiveMeta.isExplicitlyMarked = true;
            return primitiveMeta;
        }
    };
    JsonObjectMetadata.ensurePresentInPrototype = function (prototype) {
        if (Object.prototype.hasOwnProperty.call(prototype, METADATA_FIELD_KEY)) {
            return prototype[METADATA_FIELD_KEY];
        }
        var objectMetadata = new JsonObjectMetadata(prototype.constructor);
        var parentMetadata = prototype[METADATA_FIELD_KEY];
        if (parentMetadata !== undefined) {
            parentMetadata.dataMembers.forEach(function (memberMetadata, propKey) {
                objectMetadata.dataMembers.set(propKey, memberMetadata);
            });
            parentMetadata.knownTypes.forEach(function (knownType) {
                objectMetadata.knownTypes.add(knownType);
            });
            objectMetadata.typeResolver = parentMetadata.typeResolver;
            objectMetadata.typeHintEmitter = parentMetadata.typeHintEmitter;
        }
        Object.defineProperty(prototype, METADATA_FIELD_KEY, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: objectMetadata,
        });
        return objectMetadata;
    };
    JsonObjectMetadata.getKnownTypeNameFromType = function (constructor) {
        var metadata = JsonObjectMetadata.getFromConstructor(constructor);
        return metadata === undefined ? (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(constructor) : (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(metadata.classType);
    };
    JsonObjectMetadata.doesHandleWithoutAnnotation = function (ctor) {
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDirectlySerializableNativeType)(ctor) || (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isTypeTypedArray)(ctor)
            || ctor === DataView || ctor === ArrayBuffer;
    };
    JsonObjectMetadata.prototype.processDeferredKnownTypes = function () {
        var _this = this;
        this.knownTypesDeferred.forEach(function (typeThunk) {
            typeThunk().getTypes().forEach(function (ctor) { return _this.knownTypes.add(ctor); });
        });
        this.knownTypesDeferred = [];
    };
    return JsonObjectMetadata;
}());

function injectMetadataInformation(prototype, propKey, metadata) {
    var decoratorName = "@jsonMember on " + (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(prototype.constructor) + "." + String(propKey);
    if (typeof prototype === 'function') {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": cannot use a static property.");
        return;
    }
    if (typeof prototype[propKey] === 'function') {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": cannot use a method property.");
        return;
    }
    if (metadata == null
        || (metadata.type === undefined && metadata.deserializer === undefined)) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.logError)(decoratorName + ": JsonMemberMetadata has unknown type.");
        return;
    }
    var objectMetadata = JsonObjectMetadata.ensurePresentInPrototype(prototype);
    if (metadata.deserializer === undefined) {
        objectMetadata.knownTypesDeferred.push(metadata.type);
    }
    Object.keys(metadata)
        .forEach(function (key) { return (metadata[key] === undefined) && delete metadata[key]; });
    objectMetadata.dataMembers.set(metadata.name, metadata);
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/options-base.js":
/*!*********************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/options-base.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractOptionBase: () => (/* binding */ extractOptionBase),
/* harmony export */   getOptionValue: () => (/* binding */ getOptionValue),
/* harmony export */   mergeOptions: () => (/* binding */ mergeOptions)
/* harmony export */ });
/* unused harmony export getDefaultOptionOf */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");

var kAllOptions = [
    'preserveNull',
];
function extractOptionBase(from) {
    var options = Object.keys(from)
        .filter(function (key) { return kAllOptions.indexOf(key) > -1; })
        .reduce(function (obj, key) {
        obj[key] = from[key];
        return obj;
    }, {});
    return Object.keys(options).length > 0 ? options : undefined;
}
function getDefaultOptionOf(key) {
    switch (key) {
        case 'preserveNull':
            return false;
    }
    return null;
}
function getOptionValue(key, options) {
    if (options != null && options[key] != null) {
        return options[key];
    }
    return getDefaultOptionOf(key);
}
function mergeOptions(existing, moreSpecific) {
    return moreSpecific == null
        ? existing
        : (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, existing), moreSpecific);
}
//# sourceMappingURL=options-base.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/parser.js":
/*!***************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/parser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedJSON: () => (/* binding */ TypedJSON)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _deserializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deserializer */ "./node_modules/typedjson/lib/esm5/deserializer.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _json_array_member__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./json-array-member */ "./node_modules/typedjson/lib/esm5/json-array-member.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializer */ "./node_modules/typedjson/lib/esm5/serializer.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");









var TypedJSON = (function () {
    function TypedJSON(rootConstructor, settings) {
        this.serializer = new _serializer__WEBPACK_IMPORTED_MODULE_0__.Serializer();
        this.deserializer = new _deserializer__WEBPACK_IMPORTED_MODULE_1__.Deserializer();
        this.globalKnownTypes = [];
        this.indent = 0;
        var rootMetadata = _metadata__WEBPACK_IMPORTED_MODULE_2__.JsonObjectMetadata.getFromConstructor(rootConstructor);
        if (rootMetadata === undefined
            || (!rootMetadata.isExplicitlyMarked && !rootMetadata.isHandledWithoutAnnotation)) {
            throw new TypeError('The TypedJSON root data type must have the @jsonObject decorator used.');
        }
        this.nameResolver = function (ctor) { return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.nameof)(ctor); };
        this.rootConstructor = rootConstructor;
        this.errorHandler = function (error) { return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.logError)(error); };
        this.config(settings);
    }
    TypedJSON.parse = function (object, rootType, settings) {
        return new TypedJSON(rootType, settings).parse(object);
    };
    TypedJSON.parseAsArray = function (object, elementType, settings, dimensions) {
        return new TypedJSON(elementType, settings).parseAsArray(object, dimensions);
    };
    TypedJSON.parseAsSet = function (object, elementType, settings) {
        return new TypedJSON(elementType, settings).parseAsSet(object);
    };
    TypedJSON.parseAsMap = function (object, keyType, valueType, settings) {
        return new TypedJSON(valueType, settings).parseAsMap(object, keyType);
    };
    TypedJSON.toPlainJson = function (object, rootType, settings) {
        return new TypedJSON(rootType, settings).toPlainJson(object);
    };
    TypedJSON.toPlainArray = function (object, elementType, dimensions, settings) {
        return new TypedJSON(elementType, settings).toPlainArray(object, dimensions);
    };
    TypedJSON.toPlainSet = function (object, elementType, settings) {
        return new TypedJSON(elementType, settings).toPlainSet(object);
    };
    TypedJSON.toPlainMap = function (object, keyCtor, valueCtor, settings) {
        return new TypedJSON(valueCtor, settings).toPlainMap(object, keyCtor);
    };
    TypedJSON.stringify = function (object, rootType, settings) {
        return new TypedJSON(rootType, settings).stringify(object);
    };
    TypedJSON.stringifyAsArray = function (object, elementType, dimensions, settings) {
        return new TypedJSON(elementType, settings).stringifyAsArray(object, dimensions);
    };
    TypedJSON.stringifyAsSet = function (object, elementType, settings) {
        return new TypedJSON(elementType, settings).stringifyAsSet(object);
    };
    TypedJSON.stringifyAsMap = function (object, keyCtor, valueCtor, settings) {
        return new TypedJSON(valueCtor, settings).stringifyAsMap(object, keyCtor);
    };
    TypedJSON.setGlobalConfig = function (config) {
        Object.assign(this._globalConfig, config);
    };
    TypedJSON.mapType = function (type, converters) {
        if (this._globalConfig.mappedTypes == null) {
            this._globalConfig.mappedTypes = new Map();
        }
        this._globalConfig.mappedTypes.set(type, converters);
    };
    TypedJSON.prototype.config = function (settings) {
        var _this = this;
        settings = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, TypedJSON._globalConfig), settings);
        if (settings.knownTypes != null
            && TypedJSON._globalConfig.knownTypes != null) {
            settings.knownTypes = Array.from(new Set(settings.knownTypes.concat(TypedJSON._globalConfig.knownTypes)));
        }
        var options = (0,_options_base__WEBPACK_IMPORTED_MODULE_5__.extractOptionBase)(settings);
        this.serializer.options = options;
        this.deserializer.options = options;
        if (settings.errorHandler != null) {
            this.errorHandler = settings.errorHandler;
            this.deserializer.setErrorHandler(settings.errorHandler);
            this.serializer.setErrorHandler(settings.errorHandler);
        }
        if (settings.replacer != null) {
            this.replacer = settings.replacer;
        }
        if (settings.typeResolver != null) {
            this.deserializer.setTypeResolver(settings.typeResolver);
        }
        if (settings.typeHintEmitter != null) {
            this.serializer.setTypeHintEmitter(settings.typeHintEmitter);
        }
        if (settings.indent != null) {
            this.indent = settings.indent;
        }
        if (settings.mappedTypes != null) {
            settings.mappedTypes.forEach(function (upDown, type) {
                _this.setSerializationStrategies(type, upDown);
            });
        }
        if (settings.nameResolver != null) {
            this.nameResolver = settings.nameResolver;
            this.deserializer.setNameResolver(settings.nameResolver);
        }
        if (settings.knownTypes != null) {
            settings.knownTypes.forEach(function (knownType, i) {
                if (typeof knownType === 'undefined' || knownType === null) {
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.logWarning)("TypedJSON.config: 'knownTypes' contains an undefined/null value"
                        + (" (element " + i + ")."));
                }
            });
            this.globalKnownTypes = settings.knownTypes;
        }
    };
    TypedJSON.prototype.mapType = function (type, converters) {
        this.setSerializationStrategies(type, converters);
    };
    TypedJSON.prototype.parse = function (object) {
        var json = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseToJSObject)(object, this.rootConstructor);
        var result;
        try {
            result = this.deserializer.convertSingleValue(json, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.ensureTypeDescriptor)(this.rootConstructor), this.getKnownTypes());
        }
        catch (e) {
            this.errorHandler(e);
        }
        return result;
    };
    TypedJSON.prototype.parseAsArray = function (object, dimensions) {
        if (dimensions === void 0) { dimensions = 1; }
        var json = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseToJSObject)(object, Array);
        return this.deserializer.convertSingleValue(json, (0,_json_array_member__WEBPACK_IMPORTED_MODULE_7__.createArrayType)((0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.ensureTypeDescriptor)(this.rootConstructor), dimensions), this._mapKnownTypes(this.globalKnownTypes));
    };
    TypedJSON.prototype.parseAsSet = function (object) {
        var json = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseToJSObject)(object, Set);
        return this.deserializer.convertSingleValue(json, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.SetT)(this.rootConstructor), this._mapKnownTypes(this.globalKnownTypes));
    };
    TypedJSON.prototype.parseAsMap = function (object, keyConstructor) {
        var json = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseToJSObject)(object, Map);
        return this.deserializer.convertSingleValue(json, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.MapT)(keyConstructor, this.rootConstructor), this._mapKnownTypes(this.globalKnownTypes));
    };
    TypedJSON.prototype.toPlainJson = function (object) {
        try {
            return this.serializer.convertSingleValue(object, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.ensureTypeDescriptor)(this.rootConstructor));
        }
        catch (e) {
            this.errorHandler(e);
        }
    };
    TypedJSON.prototype.toPlainArray = function (object, dimensions) {
        if (dimensions === void 0) { dimensions = 1; }
        try {
            return this.serializer.convertSingleValue(object, (0,_json_array_member__WEBPACK_IMPORTED_MODULE_7__.createArrayType)((0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.ensureTypeDescriptor)(this.rootConstructor), dimensions));
        }
        catch (e) {
            this.errorHandler(e);
        }
    };
    TypedJSON.prototype.toPlainSet = function (object) {
        try {
            return this.serializer.convertSingleValue(object, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.SetT)(this.rootConstructor));
        }
        catch (e) {
            this.errorHandler(e);
        }
    };
    TypedJSON.prototype.toPlainMap = function (object, keyConstructor) {
        try {
            return this.serializer.convertSingleValue(object, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.MapT)(keyConstructor, this.rootConstructor));
        }
        catch (e) {
            this.errorHandler(e);
        }
    };
    TypedJSON.prototype.stringify = function (object) {
        var result = this.toPlainJson(object);
        if (result === undefined) {
            return '';
        }
        return JSON.stringify(result, this.replacer, this.indent);
    };
    TypedJSON.prototype.stringifyAsArray = function (object, dimensions) {
        return JSON.stringify(this.toPlainArray(object, dimensions), this.replacer, this.indent);
    };
    TypedJSON.prototype.stringifyAsSet = function (object) {
        return JSON.stringify(this.toPlainSet(object), this.replacer, this.indent);
    };
    TypedJSON.prototype.stringifyAsMap = function (object, keyConstructor) {
        return JSON.stringify(this.toPlainMap(object, keyConstructor), this.replacer, this.indent);
    };
    TypedJSON.prototype.getKnownTypes = function () {
        var _this = this;
        var rootMetadata = _metadata__WEBPACK_IMPORTED_MODULE_2__.JsonObjectMetadata.getFromConstructor(this.rootConstructor);
        var knownTypes = new Map();
        this.globalKnownTypes.filter(function (ktc) { return ktc; }).forEach(function (knownTypeCtor) {
            knownTypes.set(_this.nameResolver(knownTypeCtor), knownTypeCtor);
        });
        if (rootMetadata !== undefined) {
            rootMetadata.processDeferredKnownTypes();
            rootMetadata.knownTypes.forEach(function (knownTypeCtor) {
                knownTypes.set(_this.nameResolver(knownTypeCtor), knownTypeCtor);
            });
        }
        return knownTypes;
    };
    TypedJSON.prototype._mapKnownTypes = function (constructors) {
        var _this = this;
        var map = new Map();
        constructors.filter(function (ctor) { return ctor; }).forEach(function (ctor) { return map.set(_this.nameResolver(ctor), ctor); });
        return map;
    };
    TypedJSON.prototype.setSerializationStrategies = function (type, converters) {
        var _this = this;
        if (converters.deserializer != null) {
            this.deserializer.setDeserializationStrategy(type, function (value) { return converters.deserializer(value, {
                fallback: function (so, td) { return _this.deserializer.convertSingleValue(so, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.ensureTypeDescriptor)(td), _this.getKnownTypes()); },
            }); });
        }
        if (converters.serializer != null) {
            this.serializer.setSerializationStrategy(type, function (value) { return converters.serializer(value, {
                fallback: function (so, td) { return _this.serializer.convertSingleValue(so, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_6__.ensureTypeDescriptor)(td)); },
            }); });
        }
    };
    TypedJSON._globalConfig = {};
    return TypedJSON;
}());

//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/serializer.js":
/*!*******************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/serializer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Serializer: () => (/* binding */ Serializer),
/* harmony export */   defaultTypeEmitter: () => (/* binding */ defaultTypeEmitter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ "./node_modules/typedjson/lib/esm5/metadata.js");
/* harmony import */ var _options_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options-base */ "./node_modules/typedjson/lib/esm5/options-base.js");
/* harmony import */ var _type_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-descriptor */ "./node_modules/typedjson/lib/esm5/type-descriptor.js");





function defaultTypeEmitter(targetObject, sourceObject, expectedSourceType, sourceTypeMetadata) {
    var _a;
    if (sourceObject.constructor !== expectedSourceType) {
        targetObject.__type = (_a = sourceTypeMetadata === null || sourceTypeMetadata === void 0 ? void 0 : sourceTypeMetadata.name) !== null && _a !== void 0 ? _a : (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObject.constructor);
    }
}
var Serializer = (function () {
    function Serializer() {
        this.typeHintEmitter = defaultTypeEmitter;
        this.errorHandler = _helpers__WEBPACK_IMPORTED_MODULE_0__.logError;
        this.serializationStrategy = new Map([
            [_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.AnyT.ctor, _helpers__WEBPACK_IMPORTED_MODULE_0__.identity],
            [Date, _helpers__WEBPACK_IMPORTED_MODULE_0__.identity],
            [Number, _helpers__WEBPACK_IMPORTED_MODULE_0__.identity],
            [String, _helpers__WEBPACK_IMPORTED_MODULE_0__.identity],
            [Boolean, _helpers__WEBPACK_IMPORTED_MODULE_0__.identity],
            [ArrayBuffer, convertAsArrayBuffer],
            [DataView, convertAsDataView],
            [Array, convertAsArray],
            [Set, convertAsSet],
            [Map, convertAsMap],
            [Float32Array, convertAsTypedArray],
            [Float64Array, convertAsTypedArray],
            [Int8Array, convertAsTypedArray],
            [Uint8Array, convertAsTypedArray],
            [Uint8ClampedArray, convertAsTypedArray],
            [Int16Array, convertAsTypedArray],
            [Uint16Array, convertAsTypedArray],
            [Int32Array, convertAsTypedArray],
            [Uint32Array, convertAsTypedArray],
        ]);
    }
    Serializer.prototype.setSerializationStrategy = function (type, serializer) {
        this.serializationStrategy.set(type, serializer);
    };
    Serializer.prototype.setTypeHintEmitter = function (typeEmitterCallback) {
        if (typeof typeEmitterCallback !== 'function') {
            throw new TypeError('\'typeEmitterCallback\' is not a function.');
        }
        this.typeHintEmitter = typeEmitterCallback;
    };
    Serializer.prototype.getTypeHintEmitter = function () {
        return this.typeHintEmitter;
    };
    Serializer.prototype.setErrorHandler = function (errorHandlerCallback) {
        if (typeof errorHandlerCallback !== 'function') {
            throw new TypeError('\'errorHandlerCallback\' is not a function.');
        }
        this.errorHandler = errorHandlerCallback;
    };
    Serializer.prototype.getErrorHandler = function () {
        return this.errorHandler;
    };
    Serializer.prototype.retrievePreserveNull = function (memberOptions) {
        return (0,_options_base__WEBPACK_IMPORTED_MODULE_2__.getOptionValue)('preserveNull', (0,_options_base__WEBPACK_IMPORTED_MODULE_2__.mergeOptions)(this.options, memberOptions));
    };
    Serializer.prototype.convertSingleValue = function (sourceObject, typeDescriptor, memberName, memberOptions) {
        if (memberName === void 0) { memberName = 'object'; }
        if (this.retrievePreserveNull(memberOptions) && sourceObject === null) {
            return null;
        }
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(sourceObject)) {
            return;
        }
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isInstanceOf)(sourceObject, typeDescriptor.ctor)) {
            var expectedName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(typeDescriptor.ctor);
            var actualName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceObject.constructor);
            this.errorHandler(new TypeError("Could not serialize '" + memberName + "': expected '" + expectedName + "',"
                + (" got '" + actualName + "'.")));
            return;
        }
        var serializer = this.serializationStrategy.get(typeDescriptor.ctor);
        if (serializer !== undefined) {
            return serializer(sourceObject, typeDescriptor, memberName, this, memberOptions);
        }
        if (typeof sourceObject === 'object') {
            return convertAsObject(sourceObject, typeDescriptor, memberName, this, memberOptions);
        }
        var error = "Could not serialize '" + memberName + "'; don't know how to serialize type";
        if (typeDescriptor.hasFriendlyName()) {
            error += " '" + typeDescriptor.ctor.name + "'";
        }
        this.errorHandler(new TypeError(error + "."));
    };
    return Serializer;
}());

function convertAsObject(sourceObject, typeDescriptor, memberName, serializer, memberOptions) {
    var sourceTypeMetadata;
    var targetObject;
    var typeHintEmitter = serializer.getTypeHintEmitter();
    if (sourceObject.constructor !== typeDescriptor.ctor
        && sourceObject instanceof typeDescriptor.ctor) {
        sourceTypeMetadata = _metadata__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata.getFromConstructor(sourceObject.constructor);
    }
    else {
        sourceTypeMetadata = _metadata__WEBPACK_IMPORTED_MODULE_3__.JsonObjectMetadata.getFromConstructor(typeDescriptor.ctor);
    }
    if (sourceTypeMetadata === undefined) {
        targetObject = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, sourceObject);
    }
    else {
        var beforeSerializationMethodName = sourceTypeMetadata.beforeSerializationMethodName;
        if (beforeSerializationMethodName != null) {
            if (typeof sourceObject[beforeSerializationMethodName] === 'function') {
                sourceObject[beforeSerializationMethodName]();
            }
            else if (typeof sourceObject.constructor[beforeSerializationMethodName]
                === 'function') {
                sourceObject.constructor[beforeSerializationMethodName]();
            }
            else {
                serializer.getErrorHandler()(new TypeError("beforeSerialization callback '"
                    + ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceTypeMetadata.classType) + "." + beforeSerializationMethodName)
                    + "' is not a method."));
            }
        }
        var sourceMeta_1 = sourceTypeMetadata;
        targetObject = {};
        var classOptions_1 = (0,_options_base__WEBPACK_IMPORTED_MODULE_2__.mergeOptions)(serializer.options, sourceMeta_1.options);
        if (sourceMeta_1.typeHintEmitter != null) {
            typeHintEmitter = sourceMeta_1.typeHintEmitter;
        }
        sourceMeta_1.dataMembers.forEach(function (objMemberMetadata) {
            var objMemberOptions = (0,_options_base__WEBPACK_IMPORTED_MODULE_2__.mergeOptions)(classOptions_1, objMemberMetadata.options);
            var serialized;
            if (objMemberMetadata.serializer != null) {
                serialized = objMemberMetadata.serializer(sourceObject[objMemberMetadata.key], {
                    fallback: function (so, td) { return serializer.convertSingleValue(so, (0,_type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ensureTypeDescriptor)(td)); },
                });
            }
            else if (objMemberMetadata.type == null) {
                throw new TypeError("Could not serialize " + objMemberMetadata.name + ", there is"
                    + " no constructor nor serialization function to use.");
            }
            else {
                serialized = serializer.convertSingleValue(sourceObject[objMemberMetadata.key], objMemberMetadata.type(), (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(sourceMeta_1.classType) + "." + objMemberMetadata.key, objMemberOptions);
            }
            if ((serializer.retrievePreserveNull(objMemberOptions) && serialized === null)
                || (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(serialized)) {
                targetObject[objMemberMetadata.name] = serialized;
            }
        });
    }
    typeHintEmitter(targetObject, sourceObject, typeDescriptor.ctor, sourceTypeMetadata);
    return targetObject;
}
function convertAsArray(sourceObject, typeDescriptor, memberName, serializer, memberOptions) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.ArrayTypeDescriptor)) {
        throw new TypeError("Could not serialize " + memberName + " as Array: incorrect TypeDescriptor detected, please"
            + ' use proper annotation or function for this type');
    }
    if (typeDescriptor.elementType == null) {
        throw new TypeError("Could not serialize " + memberName + " as Array: missing element type definition.");
    }
    sourceObject.forEach(function (element, i) {
        if (!(serializer.retrievePreserveNull(memberOptions) && element === null)
            && !(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isInstanceOf)(element, typeDescriptor.elementType.ctor)) {
            var expectedTypeName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(typeDescriptor.elementType.ctor);
            var actualTypeName = element && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.nameof)(element.constructor);
            throw new TypeError("Could not serialize " + memberName + "[" + i + "]:"
                + (" expected '" + expectedTypeName + "', got '" + actualTypeName + "'."));
        }
    });
    return sourceObject.map(function (element, i) {
        return serializer.convertSingleValue(element, typeDescriptor.elementType, memberName + "[" + i + "]", memberOptions);
    });
}
function convertAsSet(sourceObject, typeDescriptor, memberName, serializer, memberOptions) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.SetTypeDescriptor)) {
        throw new TypeError("Could not serialize " + memberName + " as Set: incorrect TypeDescriptor detected, please"
            + ' use proper annotation or function for this type');
    }
    if (typeDescriptor.elementType == null) {
        throw new TypeError("Could not serialize " + memberName + " as Set: missing element type definition.");
    }
    memberName += '[]';
    var resultArray = [];
    sourceObject.forEach(function (element) {
        var resultElement = serializer.convertSingleValue(element, typeDescriptor.elementType, memberName, memberOptions);
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(element) || (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(resultElement)) {
            resultArray.push(resultElement);
        }
    });
    return resultArray;
}
function convertAsMap(sourceObject, typeDescriptor, memberName, serializer, memberOptions) {
    if (!(typeDescriptor instanceof _type_descriptor__WEBPACK_IMPORTED_MODULE_1__.MapTypeDescriptor)) {
        throw new TypeError("Could not serialize " + memberName + " as Map: incorrect TypeDescriptor detected, please"
            + ' use proper annotation or function for this type');
    }
    if (typeDescriptor.valueType == null) {
        throw new TypeError("Could not serialize " + memberName + " as Map: missing value type definition.");
    }
    if (typeDescriptor.keyType == null) {
        throw new TypeError("Could not serialize " + memberName + " as Map: missing key type definition.");
    }
    var keyMemberName = memberName + "[].key";
    var valueMemberName = memberName + "[].value";
    var resultShape = typeDescriptor.getCompleteOptions().shape;
    var result = resultShape === 1 ? {} : [];
    var preserveNull = serializer.retrievePreserveNull(memberOptions);
    sourceObject.forEach(function (value, key) {
        var resultKeyValuePairObj = {
            key: serializer.convertSingleValue(key, typeDescriptor.keyType, keyMemberName, memberOptions),
            value: serializer.convertSingleValue(value, typeDescriptor.valueType, valueMemberName, memberOptions),
        };
        var keyDefined = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(resultKeyValuePairObj.key);
        var valueDefined = (resultKeyValuePairObj.value === null && preserveNull)
            || (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isValueDefined)(resultKeyValuePairObj.value);
        if (keyDefined && valueDefined) {
            if (resultShape === 1) {
                result[resultKeyValuePairObj.key] = resultKeyValuePairObj.value;
            }
            else {
                result.push(resultKeyValuePairObj);
            }
        }
    });
    return result;
}
function convertAsTypedArray(sourceObject) {
    return Array.from(sourceObject);
}
function convertAsArrayBuffer(buffer) {
    return Array.from(new Uint16Array(buffer))
        .map(function (charCode) { return String.fromCharCode(charCode); }).join('');
}
function convertAsDataView(dataView) {
    return convertAsArrayBuffer(dataView.buffer);
}
//# sourceMappingURL=serializer.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/to-json.js":
/*!****************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/to-json.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toJson: () => (/* binding */ toJson)
/* harmony export */ });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/typedjson/lib/esm5/parser.js");

function toJson(optionsOrTarget) {
    if (typeof optionsOrTarget === 'function') {
        toJsonDecorator(optionsOrTarget, {});
        return;
    }
    return function (target) {
        toJsonDecorator(target, optionsOrTarget);
    };
}
function toJsonDecorator(target, options) {
    if (options.overwrite !== true && target.prototype.toJSON !== undefined) {
        throw new Error(target.name + " already has toJSON defined!");
    }
    target.prototype.toJSON = function toJSON() {
        return _parser__WEBPACK_IMPORTED_MODULE_0__.TypedJSON.toPlainJson(this, Object.getPrototypeOf(this).constructor);
    };
}
//# sourceMappingURL=to-json.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/type-descriptor.js":
/*!************************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/type-descriptor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnyT: () => (/* binding */ AnyT),
/* harmony export */   ArrayT: () => (/* binding */ ArrayT),
/* harmony export */   ArrayTypeDescriptor: () => (/* binding */ ArrayTypeDescriptor),
/* harmony export */   ConcreteTypeDescriptor: () => (/* binding */ ConcreteTypeDescriptor),
/* harmony export */   MapT: () => (/* binding */ MapT),
/* harmony export */   MapTypeDescriptor: () => (/* binding */ MapTypeDescriptor),
/* harmony export */   SetT: () => (/* binding */ SetT),
/* harmony export */   SetTypeDescriptor: () => (/* binding */ SetTypeDescriptor),
/* harmony export */   TypeDescriptor: () => (/* binding */ TypeDescriptor),
/* harmony export */   ensureTypeDescriptor: () => (/* binding */ ensureTypeDescriptor),
/* harmony export */   ensureTypeThunk: () => (/* binding */ ensureTypeThunk),
/* harmony export */   isTypeThunk: () => (/* binding */ isTypeThunk),
/* harmony export */   isTypelike: () => (/* binding */ isTypelike)
/* harmony export */ });
/* unused harmony export GenericTypeDescriptor */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/typedjson/lib/esm5/helpers.js");


var TypeDescriptor = (function () {
    function TypeDescriptor(ctor) {
        this.ctor = ctor;
    }
    TypeDescriptor.prototype.getTypes = function () {
        return [this.ctor];
    };
    TypeDescriptor.prototype.hasFriendlyName = function () {
        return this.ctor.name !== 'Object';
    };
    return TypeDescriptor;
}());

var ConcreteTypeDescriptor = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ConcreteTypeDescriptor, _super);
    function ConcreteTypeDescriptor(ctor) {
        return _super.call(this, ctor) || this;
    }
    return ConcreteTypeDescriptor;
}(TypeDescriptor));

var GenericTypeDescriptor = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(GenericTypeDescriptor, _super);
    function GenericTypeDescriptor(ctor) {
        return _super.call(this, ctor) || this;
    }
    return GenericTypeDescriptor;
}(TypeDescriptor));

var ArrayTypeDescriptor = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ArrayTypeDescriptor, _super);
    function ArrayTypeDescriptor(elementType) {
        var _this = _super.call(this, Array) || this;
        _this.elementType = elementType;
        return _this;
    }
    ArrayTypeDescriptor.prototype.getTypes = function () {
        return _super.prototype.getTypes.call(this).concat(this.elementType.getTypes());
    };
    return ArrayTypeDescriptor;
}(GenericTypeDescriptor));

function ArrayT(elementType) {
    return new ArrayTypeDescriptor(ensureTypeDescriptor(elementType));
}
var SetTypeDescriptor = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SetTypeDescriptor, _super);
    function SetTypeDescriptor(elementType) {
        var _this = _super.call(this, Set) || this;
        _this.elementType = elementType;
        return _this;
    }
    SetTypeDescriptor.prototype.getTypes = function () {
        return _super.prototype.getTypes.call(this).concat(this.elementType.getTypes());
    };
    return SetTypeDescriptor;
}(GenericTypeDescriptor));

function SetT(elementType) {
    return new SetTypeDescriptor(ensureTypeDescriptor(elementType));
}
var MapTypeDescriptor = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MapTypeDescriptor, _super);
    function MapTypeDescriptor(keyType, valueType, options) {
        var _this = _super.call(this, Map) || this;
        _this.keyType = keyType;
        _this.valueType = valueType;
        _this.options = options;
        return _this;
    }
    MapTypeDescriptor.prototype.getTypes = function () {
        return _super.prototype.getTypes.call(this).concat(this.keyType.getTypes(), this.valueType.getTypes());
    };
    MapTypeDescriptor.prototype.getCompleteOptions = function () {
        var _a, _b;
        return {
            shape: (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.shape) !== null && _b !== void 0 ? _b : 0,
        };
    };
    return MapTypeDescriptor;
}(GenericTypeDescriptor));

function MapT(keyType, valueType, options) {
    return new MapTypeDescriptor(ensureTypeDescriptor(keyType), ensureTypeDescriptor(valueType), options);
}
var AnyT = new ConcreteTypeDescriptor(function () { return undefined; });
function isTypelike(type) {
    return type != null && (typeof type === 'function' || type instanceof TypeDescriptor);
}
function isTypeThunk(candidate) {
    return typeof candidate === 'function' && candidate.name === '';
}
function ensureTypeDescriptor(type) {
    return type instanceof TypeDescriptor ? type : new ConcreteTypeDescriptor(type);
}
function ensureTypeThunk(typeThunkOrSerializable, decoratorName) {
    if (typeThunkOrSerializable == null) {
        throw new Error("No type given on " + decoratorName + ". " + _helpers__WEBPACK_IMPORTED_MODULE_1__.LAZY_TYPE_EXPLANATION);
    }
    if (isTypeThunk(typeThunkOrSerializable)) {
        return typeThunkOrSerializable;
    }
    return function () { return typeThunkOrSerializable; };
}
//# sourceMappingURL=type-descriptor.js.map

/***/ }),

/***/ "./node_modules/typedjson/lib/esm5/types.js":
/*!**************************************************!*\
  !*** ./node_modules/typedjson/lib/esm5/types.js ***!
  \**************************************************/
/***/ (() => {

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ v35)
/* harmony export */ });
/* unused harmony exports DNS, URL */
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "?deed":
/*!***************************!*\
  !*** microtime (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays)
/* harmony export */ });
/* unused harmony exports __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./dist/esm5/index.lite.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=openhps-core-lite.js.map