/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-quadtree/index.js":
/*!*******************************************!*\
  !*** ./node_modules/js-quadtree/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;const Box = __webpack_require__(/*! ./src/Box */ \"./node_modules/js-quadtree/src/Box.js\");\nconst Circle = __webpack_require__(/*! ./src/Circle */ \"./node_modules/js-quadtree/src/Circle.js\");\nconst Point = __webpack_require__(/*! ./src/Point */ \"./node_modules/js-quadtree/src/Point.js\");\nconst QuadTree = __webpack_require__(/*! ./src/QuadTree */ \"./node_modules/js-quadtree/src/QuadTree.js\");\n\n(function (root, name, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, 'QT', {Box, Circle, Point, QuadTree}));\n\n\n//# sourceURL=webpack:///./node_modules/js-quadtree/index.js?");

/***/ }),

/***/ "./node_modules/js-quadtree/src/Box.js":
/*!*********************************************!*\
  !*** ./node_modules/js-quadtree/src/Box.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Box class.\n * @class Box\n */\n\nclass Box {\n\n    /**\n     * Box constructor;\n     * @constructs Box\n     * @param {number} x - X coordinate of the box.\n     * @param {number} y - Y coordinate of the box.\n     * @param {number} w - Width of the box.\n     * @param {number} h - Height of the box.\n     * @param {*} [data] - Data to store along the box.\n     */\n    constructor(x, y, w, h, data) {\n        this.x = x;\n        this.y = y;\n        this.w = w;\n        this.h = h;\n        if (data) this.data = data;\n    }\n\n    /**\n     * Check if a point is contained in the box.\n     * @param {Point|Object} point - The point to test if it is contained in the box.\n     * @returns {boolean} - True if the point is contained in the box, otherwise false.\n     */\n    contains(point) {\n        return point.x >= this.x &&\n            point.x <= this.x + this.w &&\n            point.y >= this.y &&\n            point.y <= this.y + this.h;\n    }\n\n    /**\n     * Check if a box intersects with this box.\n     * @param {Box|Object} range - The box to test the intersection with.\n     * @returns {boolean} - True if it intersects, otherwise false.\n     */\n    intersects(range) {\n        return !(range.x > this.x + this.w\n            || range.x + range.w < this.x\n            || range.y > this.y + this.h\n            || range.y + range.h < this.y);\n    }\n\n}\n\nmodule.exports = Box;\n\n\n//# sourceURL=webpack:///./node_modules/js-quadtree/src/Box.js?");

/***/ }),

/***/ "./node_modules/js-quadtree/src/Circle.js":
/*!************************************************!*\
  !*** ./node_modules/js-quadtree/src/Circle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Box Circle.\n * @class Circle\n */\nclass Circle {\n\n    /**\n     * Circle constructor;\n     * @constructs Circle\n     * @param {number} x - X coordinate of the circle.\n     * @param {number} y - Y coordinate of the circle.\n     * @param {number} r - Radius of the circle.\n     * @param {*} [data] - Data to store along the circle.\n     */\n    constructor(x, y, r, data) {\n        this.x = x;\n        this.y = y;\n        this.r = r;\n        this.rPow2 = this.r * this.r; // To avoid square roots\n        if (data) this.data = data;\n    }\n\n    _euclideanDistancePow2(point1, point2) {\n        return Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2);\n    }\n\n    /**\n     * Check if a point is contained in the circle.\n     * @param {Point|Object} point - The point to test if it is contained in the circle.\n     * @returns {boolean} - True if the point is contained in the circle, otherwise false.\n     */\n    contains(point) {\n        return this._euclideanDistancePow2(point, this) <= this.rPow2;\n    }\n\n    /**\n     * Check if a box intersects with this circle.\n     * @param {Box|Object} range - The box to test the intersection with.\n     * @returns {boolean} - True if it intersects, otherwise false.\n     */\n    intersects(range) {\n        const Max = (a, b) => a >= b ? a : b;\n        const Min = (a, b) => a <= b ? a : b;\n\n        const dX = this.x - Max(range.x, Min(this.x, range.x + range.w));\n        const dY = this.y - Max(range.y, Min(this.y, range.y + range.h));\n        return (dX * dX + dY * dY) <= (this.rPow2);\n    }\n}\n\nmodule.exports = Circle;\n\n\n//# sourceURL=webpack:///./node_modules/js-quadtree/src/Circle.js?");

/***/ }),

/***/ "./node_modules/js-quadtree/src/Point.js":
/*!***********************************************!*\
  !*** ./node_modules/js-quadtree/src/Point.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Point class.\n * @class Point\n */\nclass Point {\n\n    /**\n     * Point constructor.\n     * @constructs Point\n     * @param {number} x - X coordinate of the point.\n     * @param {number} y - Y coordinate of the point.\n     * @param {*} [data] - Data to store along the point.\n     */\n    constructor(x, y, data) {\n        this.x = x;\n        this.y = y;\n        if (data) this.data = data;\n    }\n\n}\n\nmodule.exports = Point;\n\n\n//# sourceURL=webpack:///./node_modules/js-quadtree/src/Point.js?");

/***/ }),

/***/ "./node_modules/js-quadtree/src/QuadTree.js":
/*!**************************************************!*\
  !*** ./node_modules/js-quadtree/src/QuadTree.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Box = __webpack_require__(/*! ./Box */ \"./node_modules/js-quadtree/src/Box.js\");\n\n/**\n * QuadTree class.\n * @class QuadTree\n */\nclass QuadTree {\n    /**\n     * Create a new QuadTree\n     * @constructor\n     * @param {Box} container - The box on which the QuadTree will operate.\n     * @param {Object} [config] - The configuration of the quadtree.\n     * @param {number} [config.capacity] - The maximum amount of points per node.\n     * @param {boolean} [config.removeEmptyNodes] - Specify if the quadtree has to remove subnodes if they are empty.\n     * @param {(Object[]|Point[])} [points] - An array of initial points to insert in the QuadTree.\n     * @param {number} points[].x - X coordinate of the point.\n     * @param {number} points[].y - Y coordinate of the point.\n     */\n    constructor(container, config, points = []) {\n        this._container = container;\n        this._config = this._parseConfig(config);\n\n        this._isDivided = false;\n        this._points = [];\n\n        for (let point of points) {\n            this._insert(point);\n        }\n    }\n\n    /**\n     * Parses the configuration and assigns the default values\n     * @param {Object} config - The user configuration\n     * @returns {Object}\n     * @private\n     */\n    _parseConfig(config) {\n        const defaultConfig = {\n            capacity: 4,\n            removeEmptyNodes: false\n        };\n\n        return Object.assign({}, defaultConfig, config);\n    }\n\n    /**\n     * Return a tree representation of the QuadTree\n     * @returns {{se: *, sw: *, ne: *, nw: *}|Number} - A tree representation of the QuadTree\n     */\n    getTree() {\n        let tree;\n\n        if (this._isDivided) {\n            tree = {\n                ne: this._ne.getTree(),\n                nw: this._nw.getTree(),\n                se: this._se.getTree(),\n                sw: this._sw.getTree()\n            };\n\n        } else {\n            tree = this._getNodePointAmount();\n        }\n\n        return tree;\n    }\n\n    /**\n     * Get all the points in the QuadTree\n     * @returns {(Object[]|Point[])} - An array containing all the points.\n     */\n    getAllPoints() {\n        const pointsList = [];\n        this._getAllPoints(pointsList);\n        return pointsList;\n    }\n\n    /**\n     * Get all the points in the QuadTree\n     * @param {(Object[]|Point[])} pointsList\n     * @private\n     */\n    _getAllPoints(pointsList) {\n        if (!this._isDivided) {\n            Array.prototype.push.apply(pointsList, this._points.slice());\n            return;\n        }\n\n        this._ne._getAllPoints(pointsList);\n        this._nw._getAllPoints(pointsList);\n        this._se._getAllPoints(pointsList);\n        this._sw._getAllPoints(pointsList);\n    }\n\n    /**\n     * Return the amount of points in this node.\n     * @returns {number} - The amount of points in this node.\n     * @private\n     */\n    _getNodePointAmount() {\n        return this._points.length;\n    }\n\n    /**\n     * Divide this node into 4 sub-nodes\n     * @private\n     */\n    _divide() {\n        this._isDivided = true;\n\n        let x = this._container.x;\n        let y = this._container.y;\n        let w = this._container.w / 2;\n        let h = this._container.h / 2;\n\n        // Creation of the sub-nodes, and insertion of the current point\n        this._ne = new QuadTree(new Box(x + w, y, w, h), this._config, this._points.slice());\n        this._nw = new QuadTree(new Box(x, y, w, h), this._config, this._points.slice());\n        this._se = new QuadTree(new Box(x + w, y + h, w, h), this._config, this._points.slice());\n        this._sw = new QuadTree(new Box(x, y + h, w, h), this._config, this._points.slice());\n\n        // We empty this node points\n        this._points.length = 0;\n        this._points = [];\n    }\n\n    /**\n     * Remove a point in the QuadTree\n     * @param {(Point|Object|Point[]|Object[])} pointOrArray - A point or an array of points to remove\n     * @param {number} pointOrArray.x - X coordinate of the point\n     * @param {number} pointOrArray.y - Y coordinate of the point\n     */\n    remove(pointOrArray) {\n        if (pointOrArray.constructor === Array) {\n            for (const point of pointOrArray) {\n                this._remove(point);\n            }\n        } else {\n            this._remove(pointOrArray);\n        }\n    }\n\n    /**\n     * Remove a point in the QuadTree\n     * @param {(Point|Object)} point - A point to remove\n     * @param {number} point.x - X coordinate of the point\n     * @param {number} point.y - Y coordinate of the point\n     * @private\n     */\n    _remove(point) {\n        if (!this._container.contains(point)) {\n            return;\n        }\n\n        if (!this._isDivided) {\n            //this._points.splice(this._points.findIndex(aPoint => aPoint.x === point.x && aPoint.y === point.y), 1);\n\n            const len = this._points.length;\n            for (let i = len - 1; i >= 0; i--) {\n                if (point.x === this._points[i].x && point.y === this._points[i].y) {\n                    this._points.splice(i, 1);\n                }\n            }\n\n            return;\n        }\n\n        this._ne._remove(point);\n        this._nw._remove(point);\n        this._se._remove(point);\n        this._sw._remove(point);\n\n        if (this._config.removeEmptyNodes) {\n            if (this._ne._getNodePointAmount() === 0 && !this._ne._isDivided &&\n                this._nw._getNodePointAmount() === 0 && !this._nw._isDivided &&\n                this._se._getNodePointAmount() === 0 && !this._se._isDivided &&\n                this._sw._getNodePointAmount() === 0 && !this._sw._isDivided) {\n\n                this._isDivided = false;\n\n                delete this._ne;\n                delete this._nw;\n                delete this._se;\n                delete this._sw;\n            }\n        }\n    }\n\n    /**\n     * Insert a point in the QuadTree\n     * @param {(Point|Object|Point[]|Object[])} pointOrArray - A point or an array of points to insert\n     * @param {number} pointOrArray.x - X coordinate of the point\n     * @param {number} pointOrArray.y - Y coordinate of the point\n     */\n    insert(pointOrArray) {\n        if (pointOrArray.constructor === Array) {\n            for (const point of pointOrArray) {\n                this._insert(point);\n            }\n        } else {\n            this._insert(pointOrArray);\n        }\n    }\n\n\n    /**\n     * Insert a point in the QuadTree\n     * @param {(Point|Object)} point - A point to insert\n     * @param {number} point.x - X coordinate of the point\n     * @param {number} point.y - Y coordinate of the point\n     * @returns {boolean}\n     * @private\n     */\n    _insert(point) {\n        if (!this._container.contains(point)) {\n            return false;\n        }\n\n        if (!this._isDivided) {\n            if (this._getNodePointAmount() < this._config.capacity) {\n                this._points.push(point);\n                return true;\n            }\n\n            this._divide();\n        }\n\n        if (this._ne._insert(point)) return true;\n        if (this._nw._insert(point)) return true;\n        if (this._se._insert(point)) return true;\n        return this._sw._insert(point);\n    }\n\n    /**\n     * Query all the point within a range\n     * @param {(Box|Object|Circle)} range - The range to test\n     * @param {number} range.x - X coordinate of the range.\n     * @param {number} range.y - Y coordinate of the range.\n     * @param {number} range.w - Width of the range.\n     * @param {number} range.h - Height of the range.\n     * @returns {(Point[]|Object[])} - The points within the range\n     */\n    query(range) {\n        let pointsFound = [];\n        this._query(range, pointsFound);\n        return pointsFound;\n    }\n\n    /**\n     * @param {(Box|Object)} range\n     * @param {(Point[]|Object[])} pointsFound\n     * @returns {(Point[]|Object[])}\n     * @private\n     */\n    _query(range, pointsFound) {\n        if (!range.intersects(this._container)) {\n            return pointsFound;\n        }\n\n        if (this._isDivided) {\n            this._ne._query(range, pointsFound);\n            this._nw._query(range, pointsFound);\n            this._se._query(range, pointsFound);\n            this._sw._query(range, pointsFound);\n        } else {\n            const p = this._points.filter((point) => range.contains(point));\n\n            Array.prototype.push.apply(pointsFound, p);\n        }\n\n        return pointsFound;\n    }\n\n    /**\n     * Clear the QuadTree\n     */\n    clear() {\n        this._points = [];\n        this._isDivided = false;\n\n        delete this._ne;\n        delete this._nw;\n        delete this._se;\n        delete this._sw;\n    }\n}\n\nmodule.exports = QuadTree;\n\n\n\n//# sourceURL=webpack:///./node_modules/js-quadtree/src/QuadTree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_quadtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-quadtree */ \"./node_modules/js-quadtree/index.js\");\n/* harmony import */ var js_quadtree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_quadtree__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction createRoot() {\r\n    const element = document.createElement('div');\r\n    element.setAttribute('id', 'root');\r\n    return element;\r\n}\r\n\r\nfunction createCanvas(element) {\r\n    const canvas = document.createElement('canvas');\r\n    canvas.setAttribute('id', 'canvas');\r\n    element.appendChild(canvas);\r\n}\r\n\r\nfunction app() {\r\n    const rootDiv = createRoot();\r\n    createCanvas(rootDiv);\r\n  \r\n    const tree = new js_quadtree__WEBPACK_IMPORTED_MODULE_0__[\"QuadTree\"](new js_quadtree__WEBPACK_IMPORTED_MODULE_0__[\"Box\"](0, 0, 1000, 1000));\r\n    tree.insert(new js_quadtree__WEBPACK_IMPORTED_MODULE_0__[\"Point\"](100, 200, {custom: 'xd_Data_xd'}));\r\n    const results = tree.query(new js_quadtree__WEBPACK_IMPORTED_MODULE_0__[\"Circle\"](150, 150, 100));\r\n    console.log(results);\r\n\r\n    return rootDiv;\r\n  }\r\n  \r\n  document.body.appendChild(app());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });