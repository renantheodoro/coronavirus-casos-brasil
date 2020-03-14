/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_IndexReport_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/IndexReport.vue */ \"./src/components/IndexReport.vue\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    IndexReport: _components_IndexReport_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  metaInfo: {\n    title: 'Coronavírus',\n    titleTemplate: '%s | Casos confirmados no Brasil'\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/IndexReport.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IndexReport.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.vue\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"IndexReport\",\n  components: {\n    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: {\n    msg: String\n  },\n  data: function data() {\n    return {\n      loader: true,\n      report: null,\n      sources: null,\n      updatedAt: null\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    this.axios.get(\"https://dt6g6dr24g.execute-api.us-east-1.amazonaws.com/prod/casos\").then(function (response) {\n      _this.report = {\n        cases: response.data.data.brazil.latest.cases,\n        cases_from_midia: response.data.data.brazil.latest.cases_from_midia,\n        states: response.data.data.brazil.states\n      };\n      console.log(\"report\", response);\n      _this.sources = response.data.data.brazil.latest.sources;\n      _this.updatedAt = _this.getDate(response.data.meta.last_update);\n      _this.loader = false;\n    });\n  },\n  methods: {\n    getDate: function getDate(date) {\n      var day;\n      var month;\n      var year;\n      var monthArr = [\"janeiro\", \"fevereiro\", \"março\", \"abril\", \"maio\", \"junho\", \"julho\", \"agosto\", \"setembro\", \"outubro\", \"novembro\", \"dezembro\"];\n      day = date.split(\"/\")[0];\n      month = monthArr[parseInt(date.split(\"/\")[1]) - 1];\n      year = date.split(\"/\")[2].replace(\" \", \" às \");\n      return day + \" de \" + month + \" de \" + year;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/IndexReport.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0d7fc2b8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d7fc2b8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [_c(\"IndexReport\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220d7fc2b8-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0d7fc2b8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/IndexReport.vue?vue&type=template&id=781900b4&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d7fc2b8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IndexReport.vue?vue&type=template&id=781900b4& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"main\",\n    [\n      _c(\"section\", { staticClass: \"main-content\" }, [\n        _vm._m(0),\n        _c(\"div\", { staticClass: \"results-report\" }, [\n          _vm.report\n            ? _c(\n                \"p\",\n                { staticClass: \"main-response -health-text\" },\n                [\n                  _c(\"big\", { staticClass: \"report-number\" }, [\n                    _vm._v(_vm._s(_vm.report.cases))\n                  ]),\n                  _vm._m(1)\n                ],\n                1\n              )\n            : _vm._e(),\n          _vm.report\n            ? _c(\n                \"p\",\n                { staticClass: \"main-response -media-text\" },\n                [\n                  _c(\"big\", { staticClass: \"report-number\" }, [\n                    _vm._v(_vm._s(_vm.report.cases_from_midia))\n                  ]),\n                  _vm._m(2)\n                ],\n                1\n              )\n            : _vm._e()\n        ])\n      ]),\n      _c(\"footer\", [\n        _c(\"div\", { staticClass: \"info-box\" }, [\n          _vm.report\n            ? _c(\"p\", { staticClass: \"source\" }, [\n                _c(\n                  \"small\",\n                  [\n                    _vm._v(\" Fontes: \"),\n                    _c(\"br\"),\n                    _vm._l(_vm.sources, function(source, index) {\n                      return _c(\n                        \"a\",\n                        {\n                          key: index,\n                          attrs: { href: source.link, target: \"_blank\" }\n                        },\n                        [\n                          _c(\"strong\", [_vm._v(\"- \" + _vm._s(source.website))]),\n                          _c(\"br\")\n                        ]\n                      )\n                    }),\n                    _c(\"br\")\n                  ],\n                  2\n                )\n              ])\n            : _vm._e(),\n          _vm.updatedAt\n            ? _c(\"p\", { staticClass: \"updated\" }, [\n                _c(\"small\", [\n                  _vm._v(\" Atualização em: \"),\n                  _c(\"br\"),\n                  _c(\"strong\", [_vm._v(_vm._s(_vm.updatedAt))])\n                ])\n              ])\n            : _vm._e()\n        ]),\n        _c(\"div\", { staticClass: \"collaborators\" }, [\n          _c(\"h2\", [_vm._v(\"Colaboradores:\")]),\n          _c(\"ul\", {}, [\n            _c(\"li\", [\n              _c(\n                \"a\",\n                {\n                  attrs: { href: \"https://www.linkedin.com/in/darleisoares/\" }\n                },\n                [\n                  _c(\n                    \"svg\",\n                    {\n                      attrs: {\n                        height: \"2500\",\n                        width: \"2490\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 256 256\"\n                      }\n                    },\n                    [\n                      _c(\"g\", { attrs: { fill: \"none\" } }, [\n                        _c(\"path\", {\n                          attrs: {\n                            d:\n                              \"M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z\",\n                            fill: \"#069\"\n                          }\n                        }),\n                        _c(\"path\", {\n                          attrs: {\n                            d:\n                              \"M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z\",\n                            fill: \"#fff\"\n                          }\n                        })\n                      ])\n                    ]\n                  ),\n                  _vm._v(\" Darlei Santos Soares \")\n                ]\n              )\n            ]),\n            _c(\"li\", [\n              _c(\n                \"a\",\n                {\n                  attrs: {\n                    href: \"https://br.linkedin.com/in/renantheodoro\",\n                    target: \"_blank\"\n                  }\n                },\n                [\n                  _c(\n                    \"svg\",\n                    {\n                      attrs: {\n                        height: \"2500\",\n                        width: \"2490\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 256 256\"\n                      }\n                    },\n                    [\n                      _c(\"g\", { attrs: { fill: \"none\" } }, [\n                        _c(\"path\", {\n                          attrs: {\n                            d:\n                              \"M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z\",\n                            fill: \"#069\"\n                          }\n                        }),\n                        _c(\"path\", {\n                          attrs: {\n                            d:\n                              \"M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z\",\n                            fill: \"#fff\"\n                          }\n                        })\n                      ])\n                    ]\n                  ),\n                  _vm._v(\" Renan Barbosa Theodoro \")\n                ]\n              )\n            ])\n          ])\n        ])\n      ]),\n      _vm.loader ? _c(\"Loader\") : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"h1\", { staticClass: \"main-question\" }, [\n      _vm._v(\" Casos confirmados de \"),\n      _c(\"br\"),\n      _c(\"strong\", { staticClass: \"highlight\" }, [_vm._v(\"Coronavírus\")]),\n      _vm._v(\" no Brasil \")\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"span\", { staticClass: \"report-legend\" }, [\n      _vm._v(\"Dados do \"),\n      _c(\"strong\", [_vm._v(\"Ministério da Saúde\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"span\", { staticClass: \"report-legend\" }, [\n      _vm._v(\"Dados da \"),\n      _c(\"strong\", [_vm._v(\"Mídia\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/IndexReport.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220d7fc2b8-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0d7fc2b8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Loader.vue?vue&type=template&id=04a0d67a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d7fc2b8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=template&id=04a0d67a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"spinner-box\" }, [\n      _c(\"div\", { staticClass: \"pulse-container\" }, [\n        _c(\"div\", { staticClass: \"pulse-bubble pulse-bubble-1\" }),\n        _c(\"div\", { staticClass: \"pulse-bubble pulse-bubble-2\" }),\n        _c(\"div\", { staticClass: \"pulse-bubble pulse-bubble-3\" })\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Loader.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%220d7fc2b8-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/assets/scss/main.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/images/coronavirus.jpeg */ \"./src/assets/images/coronavirus.jpeg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"/* Imports */\\n/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n* {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box; }\\n\\nhtml {\\n  overflow-x: hidden;\\n  overflow-y: visible; }\\n\\nbody {\\n  overflow-x: hidden;\\n  overflow-y: overlay;\\n  font-size: 16px; }\\n\\nmain {\\n  position: relative;\\n  height: 100vh;\\n  background: #2c3e50; }\\n\\n.main-content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start;\\n  padding: 4rem;\\n  padding-bottom: 8%;\\n  background: #2c3e50;\\n  position: relative; }\\n  .main-content::before {\\n    content: \\\"\\\";\\n    display: block;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    opacity: 0.2;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center; }\\n  @media (max-width: 600px) {\\n    .main-content {\\n      padding: 1.5rem; } }\\n  .main-content img {\\n    max-width: 100%; }\\n\\na {\\n  text-decoration: none;\\n  color: #f1c40f; }\\n\\nh1.main-question {\\n  font-size: 1.5rem;\\n  margin-bottom: 2rem;\\n  text-align: center;\\n  color: #67C0C5;\\n  text-transform: uppercase;\\n  position: relative; }\\n  @media (max-width: 600px) {\\n    h1.main-question {\\n      font-size: 1.2rem;\\n      margin-bottom: 1.5rem; } }\\n  h1.main-question .highlight {\\n    display: block;\\n    font-size: 3.5rem;\\n    text-transform: uppercase;\\n    color: #fff;\\n    line-height: 120%; }\\n    @media (max-width: 600px) {\\n      h1.main-question .highlight {\\n        font-size: 2.5rem;\\n        line-height: 150%; } }\\n\\n.results-report {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  width: 100%;\\n  max-width: 500px; }\\n  @media (max-width: 600px) {\\n    .results-report {\\n      -webkit-box-orient: vertical;\\n      -webkit-box-direction: normal;\\n          -ms-flex-direction: column;\\n              flex-direction: column; } }\\n  .results-report .main-response {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    position: relative; }\\n    @media (max-width: 600px) {\\n      .results-report .main-response {\\n        margin-bottom: 4rem; } }\\n  .results-report .main-response .report-number {\\n    font-weight: bold;\\n    font-size: 6rem;\\n    color: #ecf0f1; }\\n    @media (max-width: 600px) {\\n      .results-report .main-response .report-number {\\n        font-size: 8rem; } }\\n  .results-report .main-response .report-legend {\\n    font-size: 1rem;\\n    color: #2c3e50;\\n    display: block;\\n    background-color: #ecf0f1;\\n    padding: 6px;\\n    border-radius: 4px; }\\n    .results-report .main-response .report-legend strong {\\n      font-weight: bold; }\\n  .results-report .main-response.-health-text .report-number {\\n    color: #f1c40f; }\\n  .results-report .main-response.-health-text .report-legend strong {\\n    color: #f1c40f; }\\n  .results-report .main-response.-media-text .report-number {\\n    color: #67C0C5; }\\n  .results-report .main-response.-media-text .report-legend strong {\\n    color: #67C0C5; }\\n\\nul.locate-list {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  text-align: center;\\n  margin-top: 4rem;\\n  position: relative; }\\n  ul.locate-list li {\\n    margin: 0 1.4rem; }\\n    ul.locate-list li .card {\\n      width: 200px;\\n      border-radius: 4px;\\n      -webkit-box-shadow: 5px 5px 10px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\\n              box-shadow: 5px 5px 10px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\\n      padding: 1rem;\\n      background-color: #67C0C5;\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-orient: vertical;\\n      -webkit-box-direction: normal;\\n          -ms-flex-direction: column;\\n              flex-direction: column;\\n      -webkit-box-pack: center;\\n          -ms-flex-pack: center;\\n              justify-content: center;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center; }\\n    ul.locate-list li .card .card-title {\\n      text-align: center;\\n      font-size: 1.5rem;\\n      color: #2c3e50;\\n      margin-bottom: 0.5rem;\\n      color: #fff; }\\n    ul.locate-list li .card .card-content {\\n      font-size: 4rem;\\n      font-weight: bold;\\n      text-align: center;\\n      color: #67C0C5; }\\n  ul.locate-list strong {\\n    font-size: 2rem;\\n    color: #2c3e50;\\n    display: block; }\\n  ul.locate-list span {\\n    font-size: 1.4rem;\\n    color: #2c3e50; }\\n\\n.info-box {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column; }\\n  .info-box p {\\n    display: block;\\n    margin-bottom: 1rem; }\\n    .info-box p strong {\\n      font-weight: bold; }\\n  .info-box a {\\n    line-height: 1.5em;\\n    display: block;\\n    margin-right: 10px; }\\n\\nfooter {\\n  position: relative;\\n  width: 100%;\\n  padding: 2rem;\\n  background-color: #2c3e50;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n  footer h2,\\n  footer p {\\n    color: #fff; }\\n  @media (max-width: 600px) {\\n    footer {\\n      -webkit-box-orient: vertical;\\n      -webkit-box-direction: normal;\\n          -ms-flex-direction: column;\\n              flex-direction: column;\\n      position: relative;\\n      width: calc(100% + (2rem * 2)); } }\\n  footer > div {\\n    width: 50%; }\\n    @media (max-width: 600px) {\\n      footer > div {\\n        width: 100%;\\n        margin-bottom: 1rem; } }\\n  footer .collaborators li {\\n    display: block;\\n    color: #fff; }\\n    footer .collaborators li a {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center;\\n      margin: 0.5rem 0; }\\n    footer .collaborators li svg {\\n      width: 20px;\\n      height: 20px;\\n      display: inline-block;\\n      margin-right: 0.5rem; }\\n\\n/*LOADER*/\\n/* KEYFRAMES */\\n@-webkit-keyframes spin {\\n  from {\\n    -webkit-transform: rotate(0);\\n            transform: rotate(0); }\\n  to {\\n    -webkit-transform: rotate(359deg);\\n            transform: rotate(359deg); } }\\n@keyframes spin {\\n  from {\\n    -webkit-transform: rotate(0);\\n            transform: rotate(0); }\\n  to {\\n    -webkit-transform: rotate(359deg);\\n            transform: rotate(359deg); } }\\n\\n@-webkit-keyframes spin3D {\\n  from {\\n    -webkit-transform: rotate3d(0.5, 0.5, 0.5, 360deg);\\n            transform: rotate3d(0.5, 0.5, 0.5, 360deg); }\\n  to {\\n    -webkit-transform: rotate3d(0deg);\\n            transform: rotate3d(0deg); } }\\n\\n@keyframes spin3D {\\n  from {\\n    -webkit-transform: rotate3d(0.5, 0.5, 0.5, 360deg);\\n            transform: rotate3d(0.5, 0.5, 0.5, 360deg); }\\n  to {\\n    -webkit-transform: rotate3d(0deg);\\n            transform: rotate3d(0deg); } }\\n\\n@-webkit-keyframes configure-clockwise {\\n  0% {\\n    -webkit-transform: rotate(0);\\n            transform: rotate(0); }\\n  25% {\\n    -webkit-transform: rotate(90deg);\\n            transform: rotate(90deg); }\\n  50% {\\n    -webkit-transform: rotate(180deg);\\n            transform: rotate(180deg); }\\n  75% {\\n    -webkit-transform: rotate(270deg);\\n            transform: rotate(270deg); }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n            transform: rotate(360deg); } }\\n\\n@keyframes configure-clockwise {\\n  0% {\\n    -webkit-transform: rotate(0);\\n            transform: rotate(0); }\\n  25% {\\n    -webkit-transform: rotate(90deg);\\n            transform: rotate(90deg); }\\n  50% {\\n    -webkit-transform: rotate(180deg);\\n            transform: rotate(180deg); }\\n  75% {\\n    -webkit-transform: rotate(270deg);\\n            transform: rotate(270deg); }\\n  100% {\\n    -webkit-transform: rotate(360deg);\\n            transform: rotate(360deg); } }\\n\\n@-webkit-keyframes configure-xclockwise {\\n  0% {\\n    -webkit-transform: rotate(45deg);\\n            transform: rotate(45deg); }\\n  25% {\\n    -webkit-transform: rotate(-45deg);\\n            transform: rotate(-45deg); }\\n  50% {\\n    -webkit-transform: rotate(-135deg);\\n            transform: rotate(-135deg); }\\n  75% {\\n    -webkit-transform: rotate(-225deg);\\n            transform: rotate(-225deg); }\\n  100% {\\n    -webkit-transform: rotate(-315deg);\\n            transform: rotate(-315deg); } }\\n\\n@keyframes configure-xclockwise {\\n  0% {\\n    -webkit-transform: rotate(45deg);\\n            transform: rotate(45deg); }\\n  25% {\\n    -webkit-transform: rotate(-45deg);\\n            transform: rotate(-45deg); }\\n  50% {\\n    -webkit-transform: rotate(-135deg);\\n            transform: rotate(-135deg); }\\n  75% {\\n    -webkit-transform: rotate(-225deg);\\n            transform: rotate(-225deg); }\\n  100% {\\n    -webkit-transform: rotate(-315deg);\\n            transform: rotate(-315deg); } }\\n\\n@-webkit-keyframes pulse {\\n  from {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1); }\\n  to {\\n    opacity: 0.25;\\n    -webkit-transform: scale(0.75);\\n            transform: scale(0.75); } }\\n\\n@keyframes pulse {\\n  from {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1); }\\n  to {\\n    opacity: 0.25;\\n    -webkit-transform: scale(0.75);\\n            transform: scale(0.75); } }\\n\\n/* GRID STYLING */\\n.spinner-box {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background-color: #2c3e50; }\\n\\n/* SPINNING CIRCLE */\\n.leo-border-1 {\\n  position: absolute;\\n  width: 150px;\\n  height: 150px;\\n  padding: 3px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  border-radius: 50%;\\n  background: #3ff9dc;\\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(33%, rgba(63, 249, 220, 0.1)), to(#3ff9dc));\\n  background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, #3ff9dc 100%);\\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\\n          animation: spin3D 1.8s linear 0s infinite; }\\n\\n.leo-core-1 {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #37474faa;\\n  border-radius: 50%; }\\n\\n.leo-border-2 {\\n  position: absolute;\\n  width: 150px;\\n  height: 150px;\\n  padding: 3px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  border-radius: 50%;\\n  background: #3ff9dc;\\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(33%, rgba(255, 171, 145, 0.1)), to(#ffab91));\\n  background: linear-gradient(0deg, rgba(255, 171, 145, 0.1) 33%, #ffab91 100%);\\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\\n          animation: spin3D 2.2s linear 0s infinite; }\\n\\n.leo-core-2 {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #ffab91aa;\\n  border-radius: 50%; }\\n\\n/* ALTERNATING ORBITS */\\n.circle-border {\\n  width: 150px;\\n  height: 150px;\\n  padding: 3px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  border-radius: 50%;\\n  background: #3ff9dc;\\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(33%, rgba(63, 249, 220, 0.1)), to(#3ff9dc));\\n  background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, #3ff9dc 100%);\\n  -webkit-animation: spin 0.8s linear 0s infinite;\\n          animation: spin 0.8s linear 0s infinite; }\\n\\n.circle-core {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #37474f;\\n  border-radius: 50%; }\\n\\n/* X-ROTATING BOXES */\\n.configure-border-1 {\\n  width: 115px;\\n  height: 115px;\\n  padding: 3px;\\n  position: absolute;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background: #ffab91;\\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate; }\\n\\n.configure-border-2 {\\n  width: 115px;\\n  height: 115px;\\n  padding: 3px;\\n  left: -115px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background: #3ff9dc;\\n  -webkit-transform: rotate(45deg);\\n          transform: rotate(45deg);\\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate; }\\n\\n.configure-core {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #37474f; }\\n\\n/* PULSE BUBBLES */\\n.pulse-container {\\n  width: 120px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.pulse-bubble {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  background-color: #67C0C5; }\\n\\n.pulse-bubble-1 {\\n  -webkit-animation: pulse 0.4s ease 0s infinite alternate;\\n          animation: pulse 0.4s ease 0s infinite alternate; }\\n\\n.pulse-bubble-2 {\\n  -webkit-animation: pulse 0.4s ease 0.2s infinite alternate;\\n          animation: pulse 0.4s ease 0.2s infinite alternate; }\\n\\n.pulse-bubble-3 {\\n  -webkit-animation: pulse 0.4s ease 0.4s infinite alternate;\\n          animation: pulse 0.4s ease 0.4s infinite alternate; }\\n\\n/* SOLAR SYSTEM */\\n.solar-system {\\n  width: 250px;\\n  height: 250px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.orbit {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  border: 1px solid #6d9dc5;\\n  border-radius: 50%; }\\n\\n.earth-orbit {\\n  width: 165px;\\n  height: 165px;\\n  -webkit-animation: spin 12s linear 0s infinite; }\\n\\n.venus-orbit {\\n  width: 120px;\\n  height: 120px;\\n  -webkit-animation: spin 7.4s linear 0s infinite; }\\n\\n.mercury-orbit {\\n  width: 90px;\\n  height: 90px;\\n  -webkit-animation: spin 3s linear 0s infinite; }\\n\\n.planet {\\n  position: absolute;\\n  top: -5px;\\n  width: 10px;\\n  height: 10px;\\n  border-radius: 50%;\\n  background-color: #67c0c5; }\\n\\n.sun {\\n  width: 35px;\\n  height: 35px;\\n  border-radius: 50%;\\n  background-color: #67c0c5; }\\n\\n.leo {\\n  position: absolute;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  border-radius: 50%; }\\n\\n.blue-orbit {\\n  width: 165px;\\n  height: 165px;\\n  border: 1px solid #91daffa5;\\n  -webkit-animation: spin3D 3s linear 0.2s infinite; }\\n\\n.green-orbit {\\n  width: 120px;\\n  height: 120px;\\n  border: 1px solid #91ffbfa5;\\n  -webkit-animation: spin3D 2s linear 0s infinite; }\\n\\n.red-orbit {\\n  width: 90px;\\n  height: 90px;\\n  border: 1px solid #ffca91a5;\\n  -webkit-animation: spin3D 1s linear 0s infinite; }\\n\\n.white-orbit {\\n  width: 60px;\\n  height: 60px;\\n  border: 2px solid #ffffff;\\n  -webkit-animation: spin3D 10s linear 0s infinite; }\\n\\n.w1 {\\n  -webkit-transform: rotate3D(1, 1, 1, 90deg);\\n          transform: rotate3D(1, 1, 1, 90deg); }\\n\\n.w2 {\\n  -webkit-transform: rotate3D(1, 2, 0.5, 90deg);\\n          transform: rotate3D(1, 2, 0.5, 90deg); }\\n\\n.w3 {\\n  -webkit-transform: rotate3D(0.5, 1, 2, 90deg);\\n          transform: rotate3D(0.5, 1, 2, 90deg); }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0d7fc2b8-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0d7fc2b8-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/images/coronavirus.jpeg":
/*!********************************************!*\
  !*** ./src/assets/images/coronavirus.jpeg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/coronavirus.79a70947.jpeg\";\n\n//# sourceURL=webpack:///./src/assets/images/coronavirus.jpeg?");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"1ba235d7\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?");

/***/ }),

/***/ "./src/components/IndexReport.vue":
/*!****************************************!*\
  !*** ./src/components/IndexReport.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IndexReport_vue_vue_type_template_id_781900b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexReport.vue?vue&type=template&id=781900b4& */ \"./src/components/IndexReport.vue?vue&type=template&id=781900b4&\");\n/* harmony import */ var _IndexReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexReport.vue?vue&type=script&lang=js& */ \"./src/components/IndexReport.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _IndexReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _IndexReport_vue_vue_type_template_id_781900b4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _IndexReport_vue_vue_type_template_id_781900b4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/IndexReport.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/IndexReport.vue?");

/***/ }),

/***/ "./src/components/IndexReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/IndexReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./IndexReport.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/IndexReport.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/IndexReport.vue?");

/***/ }),

/***/ "./src/components/IndexReport.vue?vue&type=template&id=781900b4&":
/*!***********************************************************************!*\
  !*** ./src/components/IndexReport.vue?vue&type=template&id=781900b4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexReport_vue_vue_type_template_id_781900b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0d7fc2b8-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./IndexReport.vue?vue&type=template&id=781900b4& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0d7fc2b8-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/IndexReport.vue?vue&type=template&id=781900b4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexReport_vue_vue_type_template_id_781900b4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexReport_vue_vue_type_template_id_781900b4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/IndexReport.vue?");

/***/ }),

/***/ "./src/components/Loader.vue":
/*!***********************************!*\
  !*** ./src/components/Loader.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Loader_vue_vue_type_template_id_04a0d67a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=04a0d67a& */ \"./src/components/Loader.vue?vue&type=template&id=04a0d67a&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _Loader_vue_vue_type_template_id_04a0d67a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Loader_vue_vue_type_template_id_04a0d67a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Loader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Loader.vue?");

/***/ }),

/***/ "./src/components/Loader.vue?vue&type=template&id=04a0d67a&":
/*!******************************************************************!*\
  !*** ./src/components/Loader.vue?vue&type=template&id=04a0d67a& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_04a0d67a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"0d7fc2b8-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=04a0d67a& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"0d7fc2b8-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Loader.vue?vue&type=template&id=04a0d67a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_04a0d67a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_0d7fc2b8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_04a0d67a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Loader.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_work_coronavirus_casos_brasil_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.min.js\");\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-meta */ \"./node_modules/vue-meta/dist/vue-meta.esm.js\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(vue_meta__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(vue_axios__WEBPACK_IMPORTED_MODULE_7___default.a, axios__WEBPACK_IMPORTED_MODULE_6___default.a);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });