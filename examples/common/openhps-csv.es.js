import * as __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__ from "./openhps-core.es.js";
/******/ var __webpack_modules__ = ({

/***/ "./dist/esm/CSVDataObjectService.js":
/*!******************************************!*\
  !*** ./dist/esm/CSVDataObjectService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSVDataObjectService: () => (/* binding */ CSVDataObjectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csv-parser */ "./node_modules/csv-parser/index.js");
/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "?38c3");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream */ "?5598");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_3__);





class CSVDataObjectService extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataObjectService {
    constructor(dataType, options) {
        super(new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.MemoryDataService(dataType));
        this.options = options;
        this.once('build', this._initCSV.bind(this));
    }
    _initCSV() {
        return new Promise((resolve, reject) => {
            if (!this.options.file) {
                return resolve();
            }
            this.parseStream(fs__WEBPACK_IMPORTED_MODULE_2__.createReadStream(this.options.file))
                .then((data) => {
                return Promise.all(data.map(this.insertObject.bind(this)));
            })
                .then(() => {
                resolve();
            })
                .catch(reject);
        });
    }
    parseContent(content) {
        const s = new stream__WEBPACK_IMPORTED_MODULE_3__.Readable();
        s.push(content);
        s.push(null);
        return this.parseStream(s);
    }
    parseStream(s) {
        return new Promise((resolve, reject) => {
            const inputData = [];
            let countUnprocessed = 0;
            let countProcessed = 0;
            const stream = s
                .pipe(csv_parser__WEBPACK_IMPORTED_MODULE_1__(this.options))
                .on('data', (row) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                countUnprocessed++;
                const object = yield Promise.resolve(this.options.rowCallback(row));
                if (object !== null && object !== undefined) {
                    inputData.push(object);
                }
                countProcessed++;
            }))
                .on('end', () => {
                stream.destroy();
            })
                .on('close', function (err) {
                if (err) {
                    return reject(err);
                }
                if (countProcessed !== countUnprocessed) {
                    const timer = setInterval(() => {
                        if (countProcessed === countUnprocessed) {
                            clearInterval(timer);
                            resolve(inputData);
                        }
                    }, 100);
                }
                else {
                    resolve(inputData);
                }
            });
        });
    }
}
//# sourceMappingURL=CSVDataObjectService.js.map

/***/ }),

/***/ "./dist/esm/CSVDataSource.js":
/*!***********************************!*\
  !*** ./dist/esm/CSVDataSource.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSVDataSource: () => (/* binding */ CSVDataSource)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "?a981");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "?38c3");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! csv-parser */ "./node_modules/csv-parser/index.js");
/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stream */ "?5598");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Source node for CSV files.
 *
 * ## Usage
 * Files are loaded when the model is build. You can force a reset using the ```reset()``` function.
 *
 * ### Basic Usage
 * example1.csv**
 * ```text
 * TIME,NAME,X,Y
 * 1,Maxim,0,0
 * 2,Maxim,0,1
 * 3,Maxim,1,1
 * ```
 * Implementation**
 * ```typescript
 * new CSVDataSource("example1.csv", (row: any) => {
 * const object = new DataObject(row.NAME);
 * const position = new Absolute2DPosition(parseFloat(row.X), parseFloat(row.Y));
 * position.timestamp = parseInt(row.TIME);
 * object.setPosition(position);
 * return new DataFrame(object);
 * })
 * ```
 *
 * ### Advanced Usage
 * For more info, please check the [csv-parser](https://www.npmjs.com/package/csv-parser) documentation.
 *
 * example3.csv**
 * ```text
 * 1;Maxim;0;0
 * 2;Maxim;0;1
 * 3;Maxim;1;1
 * ```
 * Implementation**
 * ```typescript
 * new CSVDataSource("example1.csv", (row: any) => {
 * const object = new DataObject(row.NAME);
 * const position = new Absolute2DPosition(parseFloat(row.X), parseFloat(row.Y));
 * position.timestamp = parseInt(row.TIME);
 * object.setPosition(position);
 * return new DataFrame(object);
 * }, {
 * headers: ["TIME", "NAME", "X", "Y"],
 * separator: ";"
 * })
 * ```
 * @category Source node
 */
class CSVDataSource extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.ListSourceNode {
    constructor(file, rowCallback, options) {
        super([], options);
        this.options.source = this.options.source || new _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataObject(file ? path__WEBPACK_IMPORTED_MODULE_1__.basename(file) : undefined);
        this.rowCallback = rowCallback;
        this._file = file;
        this.once('build', this._initCSV.bind(this));
    }
    _initCSV() {
        return new Promise((resolve, reject) => {
            if (!this._file) {
                return resolve();
            }
            this.parseStream(fs__WEBPACK_IMPORTED_MODULE_2__.createReadStream(this._file))
                .then((data) => {
                this.inputData = data;
                resolve();
            })
                .catch(reject);
        });
    }
    parseContent(content) {
        const s = new stream__WEBPACK_IMPORTED_MODULE_4__.Readable();
        s.push(content);
        s.push(null);
        return this.parseStream(s);
    }
    parseStream(s) {
        return new Promise((resolve, reject) => {
            const inputData = [];
            const stream = s
                .pipe(csv_parser__WEBPACK_IMPORTED_MODULE_3__(this.options))
                .on('data', (row) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const frame = (yield Promise.resolve(this.rowCallback(row)));
                if (frame !== null && frame !== undefined) {
                    if (frame.source === undefined) {
                        frame.source = this.source;
                    }
                    inputData.push(frame);
                }
            }))
                .on('end', () => {
                stream.destroy();
            })
                .on('close', function (err) {
                if (err) {
                    return reject(err);
                }
                resolve(inputData);
            });
        });
    }
    /**
     * Reload the source with a new CSV file
     * @param {string} file New CSV file
     * @returns {Promise<void>} Promise of the reload
     */
    reload(file) {
        this._file = file;
        return this.reset();
    }
    reset() {
        return new Promise((resolve, reject) => {
            this.inputData = [];
            this._initCSV()
                .then(() => {
                resolve();
            })
                .catch((ex) => {
                reject(ex);
            });
        });
    }
}
//# sourceMappingURL=CSVDataSource.js.map

/***/ }),

/***/ "./node_modules/csv-parser/index.js":
/*!******************************************!*\
  !*** ./node_modules/csv-parser/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Transform } = __webpack_require__(/*! stream */ "?f6f1")

const [cr] = Buffer.from('\r')
const [nl] = Buffer.from('\n')
const defaults = {
  escape: '"',
  headers: null,
  mapHeaders: ({ header }) => header,
  mapValues: ({ value }) => value,
  newline: '\n',
  quote: '"',
  raw: false,
  separator: ',',
  skipComments: false,
  skipLines: null,
  maxRowBytes: Number.MAX_SAFE_INTEGER,
  strict: false
}

class CsvParser extends Transform {
  constructor (opts = {}) {
    super({ objectMode: true, highWaterMark: 16 })

    if (Array.isArray(opts)) opts = { headers: opts }

    const options = Object.assign({}, defaults, opts)

    options.customNewline = options.newline !== defaults.newline

    for (const key of ['newline', 'quote', 'separator']) {
      if (typeof options[key] !== 'undefined') {
        ([options[key]] = Buffer.from(options[key]))
      }
    }

    // if escape is not defined on the passed options, use the end value of quote
    options.escape = (opts || {}).escape ? Buffer.from(options.escape)[0] : options.quote

    this.state = {
      empty: options.raw ? Buffer.alloc(0) : '',
      escaped: false,
      first: true,
      lineNumber: 0,
      previousEnd: 0,
      rowLength: 0,
      quoted: false
    }

    this._prev = null

    if (options.headers === false) {
      // enforce, as the column length check will fail if headers:false
      options.strict = false
    }

    if (options.headers || options.headers === false) {
      this.state.first = false
    }

    this.options = options
    this.headers = options.headers
  }

  parseCell (buffer, start, end) {
    const { escape, quote } = this.options
    // remove quotes from quoted cells
    if (buffer[start] === quote && buffer[end - 1] === quote) {
      start++
      end--
    }

    let y = start

    for (let i = start; i < end; i++) {
      // check for escape characters and skip them
      if (buffer[i] === escape && i + 1 < end && buffer[i + 1] === quote) {
        i++
      }

      if (y !== i) {
        buffer[y] = buffer[i]
      }
      y++
    }

    return this.parseValue(buffer, start, y)
  }

  parseLine (buffer, start, end) {
    const { customNewline, escape, mapHeaders, mapValues, quote, separator, skipComments, skipLines } = this.options

    end-- // trim newline
    if (!customNewline && buffer.length && buffer[end - 1] === cr) {
      end--
    }

    const comma = separator
    const cells = []
    let isQuoted = false
    let offset = start

    if (skipComments) {
      const char = typeof skipComments === 'string' ? skipComments : '#'
      if (buffer[start] === Buffer.from(char)[0]) {
        return
      }
    }

    const mapValue = (value) => {
      if (this.state.first) {
        return value
      }

      const index = cells.length
      const header = this.headers[index]

      return mapValues({ header, index, value })
    }

    for (let i = start; i < end; i++) {
      const isStartingQuote = !isQuoted && buffer[i] === quote
      const isEndingQuote = isQuoted && buffer[i] === quote && i + 1 <= end && buffer[i + 1] === comma
      const isEscape = isQuoted && buffer[i] === escape && i + 1 < end && buffer[i + 1] === quote

      if (isStartingQuote || isEndingQuote) {
        isQuoted = !isQuoted
        continue
      } else if (isEscape) {
        i++
        continue
      }

      if (buffer[i] === comma && !isQuoted) {
        let value = this.parseCell(buffer, offset, i)
        value = mapValue(value)
        cells.push(value)
        offset = i + 1
      }
    }

    if (offset < end) {
      let value = this.parseCell(buffer, offset, end)
      value = mapValue(value)
      cells.push(value)
    }

    if (buffer[end - 1] === comma) {
      cells.push(mapValue(this.state.empty))
    }

    const skip = skipLines && skipLines > this.state.lineNumber
    this.state.lineNumber++

    if (this.state.first && !skip) {
      this.state.first = false
      this.headers = cells.map((header, index) => mapHeaders({ header, index }))

      this.emit('headers', this.headers)
      return
    }

    if (!skip && this.options.strict && cells.length !== this.headers.length) {
      const e = new RangeError('Row length does not match headers')
      this.emit('error', e)
    } else {
      if (!skip) this.writeRow(cells)
    }
  }

  parseValue (buffer, start, end) {
    if (this.options.raw) {
      return buffer.slice(start, end)
    }

    return buffer.toString('utf-8', start, end)
  }

  writeRow (cells) {
    const headers = (this.headers === false) ? cells.map((value, index) => index) : this.headers

    const row = cells.reduce((o, cell, index) => {
      const header = headers[index]
      if (header === null) return o // skip columns
      if (header !== undefined) {
        o[header] = cell
      } else {
        o[`_${index}`] = cell
      }
      return o
    }, {})

    this.push(row)
  }

  _flush (cb) {
    if (this.state.escaped || !this._prev) return cb()
    this.parseLine(this._prev, this.state.previousEnd, this._prev.length + 1) // plus since online -1s
    cb()
  }

  _transform (data, enc, cb) {
    if (typeof data === 'string') {
      data = Buffer.from(data)
    }

    const { escape, quote } = this.options
    let start = 0
    let buffer = data

    if (this._prev) {
      start = this._prev.length
      buffer = Buffer.concat([this._prev, data])
      this._prev = null
    }

    const bufferLength = buffer.length

    for (let i = start; i < bufferLength; i++) {
      const chr = buffer[i]
      const nextChr = i + 1 < bufferLength ? buffer[i + 1] : null

      this.state.rowLength++
      if (this.state.rowLength > this.options.maxRowBytes) {
        return cb(new Error('Row exceeds the maximum size'))
      }

      if (!this.state.escaped && chr === escape && nextChr === quote && i !== start) {
        this.state.escaped = true
        continue
      } else if (chr === quote) {
        if (this.state.escaped) {
          this.state.escaped = false
          // non-escaped quote (quoting the cell)
        } else {
          this.state.quoted = !this.state.quoted
        }
        continue
      }

      if (!this.state.quoted) {
        if (this.state.first && !this.options.customNewline) {
          if (chr === nl) {
            this.options.newline = nl
          } else if (chr === cr) {
            if (nextChr !== nl) {
              this.options.newline = cr
            }
          }
        }

        if (chr === this.options.newline) {
          this.parseLine(buffer, this.state.previousEnd, i + 1)
          this.state.previousEnd = i + 1
          this.state.rowLength = 0
        }
      }
    }

    if (this.state.previousEnd === bufferLength) {
      this.state.previousEnd = 0
      return cb()
    }

    if (bufferLength - this.state.previousEnd < data.length) {
      this._prev = data
      this.state.previousEnd -= (bufferLength - data.length)
      return cb()
    }

    this._prev = buffer
    cb()
  }
}

module.exports = (opts) => new CsvParser(opts)


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __awaiter: () => (/* binding */ __awaiter)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __metadata, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
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
/* global Reflect, Promise */

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
        while (_) try {
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
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
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


/***/ }),

/***/ "@openhps/core":
/*!***************************************!*\
  !*** external "./openhps-core.es.js" ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = x({ ["DataObject"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.DataObject, ["DataObjectService"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.DataObjectService, ["ListSourceNode"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.ListSourceNode, ["MemoryDataService"]: () => __WEBPACK_EXTERNAL_MODULE__openhps_core_es_js_870a26f4__.MemoryDataService });

/***/ }),

/***/ "?38c3":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a981":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5598":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f6f1":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

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
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/*!*******************************!*\
  !*** ./dist/esm/index.web.js ***!
  \*******************************/
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSVDataObjectService: () => (/* reexport safe */ _CSVDataObjectService__WEBPACK_IMPORTED_MODULE_1__.CSVDataObjectService),
/* harmony export */   CSVDataSource: () => (/* reexport safe */ _CSVDataSource__WEBPACK_IMPORTED_MODULE_0__.CSVDataSource)
/* harmony export */ });
/* harmony import */ var _CSVDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSVDataSource */ "./dist/esm/CSVDataSource.js");
/* harmony import */ var _CSVDataObjectService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSVDataObjectService */ "./dist/esm/CSVDataObjectService.js");


//# sourceMappingURL=index.web.js.map
})();

var __webpack_exports__CSVDataObjectService = __webpack_exports__.CSVDataObjectService;
var __webpack_exports__CSVDataSource = __webpack_exports__.CSVDataSource;
export { __webpack_exports__CSVDataObjectService as CSVDataObjectService, __webpack_exports__CSVDataSource as CSVDataSource };

//# sourceMappingURL=openhps-csv.es.js.map