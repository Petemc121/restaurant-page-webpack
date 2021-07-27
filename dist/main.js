/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Pacifico-Regular.ttf */ \"./src/Pacifico-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nbody {\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n\\tcontent: '';\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\\r\\n\\r\\n    @font-face {\\r\\n        font-family: 'myfont';\\r\\n        src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n        font-weight: 600;\\r\\n        font-style: normal;\\r\\n      }\\r\\n      \\r\\n#header\\r\\n{\\r\\n    background-color:#9E2A2B;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    justify-content:space-between;\\r\\n}   \\r\\n.title {\\r\\n    width:100%;\\r\\n    font-size:50px;\\r\\n    font-family:'myfont';\\r\\n    color:#E09F3E;\\r\\n    background-color:#9E2A2B;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    align-items:center;\\r\\n    font-weight:bold;\\r\\n}\\r\\n\\r\\n.navBar {\\r\\n    display:flex;\\r\\n    justify-content:space-evenly;\\r\\n    align-items:center;\\r\\n    background-color:#9E2A2B;\\r\\n    height:100px;\\r\\n    width:100%;\\r\\n    font-family:'Courier New', Courier, monospace;\\r\\n    margin-top:5px;\\r\\n}\\r\\n\\r\\n.navs{\\r\\n\\r\\n    color:#FFF3B0;\\r\\n    transition:all 0.2s linear;\\r\\n    height:100px;\\r\\n    line-height:100px;\\r\\n    position:relative;\\r\\n    text-align:center;\\r\\n    font-weight:none;\\r\\n    width:25%;\\r\\n    cursor:pointer;\\r\\n}\\r\\n\\r\\n@media (max-width:600px)\\r\\n{\\r\\n    .navs {\\r\\n        font-size:20px;\\r\\n        height:60px;\\r\\n        line-height:60px;\\r\\n    }\\r\\n\\r\\n    .navBar\\r\\n    {\\r\\n        height:60px;\\r\\n    }\\r\\n\\r\\n    .navs:hover {\\r\\n\\r\\n        font-size:25px;\\r\\n       \\r\\n    }\\r\\n\\r\\n    .homeImage\\r\\n    {\\r\\n        height:80%;\\r\\n        width:80%;\\r\\n    }\\r\\n\\r\\n    .locationImage\\r\\n    {\\r\\n        height:60%;\\r\\n        width:60%;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n@media (min-width:600px)\\r\\n{\\r\\n    .navs {\\r\\n        font-size:35px;\\r\\n    }\\r\\n\\r\\n    .navs:hover {\\r\\n\\r\\n        font-size:38px;\\r\\n       \\r\\n    }\\r\\n\\r\\n    .homeImage\\r\\n{\\r\\n    height:60%;\\r\\n    width:60%;\\r\\n}\\r\\n\\r\\n\\r\\n.locationImage\\r\\n{\\r\\n\\r\\n    height:40%;\\r\\n    width:40%;\\r\\n}\\r\\n}\\r\\n\\r\\n.navs:hover {\\r\\n    font-weight:bold;\\r\\n    color:#335C67;\\r\\n    background-color:#E09F3E;\\r\\n}\\r\\n\\r\\n.homeImageCon\\r\\n{\\r\\n    margin:20px auto;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    align-items:center;\\r\\n    justify-content:space-evenly;\\r\\n}\\r\\n\\r\\n.locationImageCon\\r\\n{\\r\\n    margin:20px auto;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    align-items:center;\\r\\n    justify-content:space-evenly;\\r\\n}\\r\\n\\r\\n\\r\\n.contactDetails{\\r\\n    font-family:'myfont';\\r\\n    font-size:30px;\\r\\n    color:#FFF3B0;\\r\\n    text-align:center;\\r\\n    margin-top:50px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.about {\\r\\n font-family:'myFont';\\r\\n font-size:35px;\\r\\n color:#FFF3B0;\\r\\n text-align:center;\\r\\n margin:100px auto;\\r\\n width:80%;\\r\\n}\\r\\n\\r\\n.aboutText {\\r\\n    margin:100px 0px;\\r\\n    line-height:50px;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n    display:flex;\\r\\n    width:80%;\\r\\n    flex-wrap:wrap;\\r\\n    justify-content:center;\\r\\n    margin:100px auto;\\r\\n\\r\\n}\\r\\n\\r\\n.menuImage {\\r\\n    max-height:200px;\\r\\n    width:100%;\\r\\n    margin-bottom:30px;\\r\\n}\\r\\n\\r\\n.menuCards {\\r\\n    margin:30px 30px;\\r\\n    width:300px;\\r\\n    height:320px;\\r\\n    font-family:'myFont';\\r\\n    font-size:35px;\\r\\n    color:#FFF3B0;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    align-items:center;\\r\\n    justify-content:flex-start;\\r\\n    border:2px solid #E09F3E;\\r\\n    border-radius:5px;\\r\\n\\r\\n}\\r\\n\\r\\n.slogan{\\r\\n    font-family:'myfont';\\r\\n    font-size:30px;\\r\\n    color:#FFF3B0;\\r\\n    text-align:center;\\r\\n    margin-top:50px;\\r\\n}\\r\\n\\r\\n\\r\\nbody {\\r\\n    background-color:#540B0E;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://resturant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\r\n const about = document.createElement('div');\r\n about.classList.add('about');\r\n\r\n const paragraph1 = document.createElement('p')\r\n paragraph1.classList.add('aboutText')\r\n paragraph1.textContent = \"Pedrinios is a new wave restaurant run by the legendary Pedrinio himself!\";\r\n\r\n const paragraph2 = document.createElement('p')\r\n paragraph2.classList.add('aboutText')\r\n paragraph2.textContent = \"Opened just last year, Pedrinios has already established itself as a 3 star michilin establishment!\"\r\n\r\n const paragraph3 = document.createElement('p')\r\n paragraph3.classList.add('aboutText')\r\n paragraph3.textContent = \"Drop by this weekend and try our famous Haggis Paella!\"\r\n\r\n about.appendChild(paragraph1)\r\n about.appendChild(paragraph2)\r\n about.appendChild(paragraph3)\r\n\r\n return about;\r\n}\r\n\r\nfunction loadAbout() {\r\n    const main = document.getElementById('main');\r\n    main.textContent = \"\";\r\n    main.appendChild(createAbout())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://resturant-page/./src/About.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _location_PNG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.PNG */ \"./src/location.PNG\");\n\r\n\r\nfunction createContact()\r\n{\r\n    const div = document.createElement('div');\r\n    div.classList.add('locationImageCon')\r\n\r\n    const mylocation = new Image();\r\n    mylocation.src = _location_PNG__WEBPACK_IMPORTED_MODULE_0__;\r\n    mylocation.classList.add('locationImage')\r\n\r\n\r\n    div.appendChild(mylocation);\r\n\r\n    const details = document.createElement('div')\r\n    details.classList.add('contactDetails');\r\n    details.textContent = \"Phone Number: 0773456789\"\r\n\r\n    div.appendChild(details)\r\n\r\n    return div;\r\n}\r\n\r\nfunction loadContact() {\r\n  const main = document.getElementById('main');\r\n  main.textContent = \"\";\r\n\r\n  main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://resturant-page/./src/Contact.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.jpg */ \"./src/icon.jpg\");\n\r\n\r\nfunction createHome()\r\n{\r\n    const div = document.createElement('div');\r\n    div.classList.add('homeImageCon')\r\n\r\n    const myIcon = new Image();\r\n    myIcon.src = _icon_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    myIcon.classList.add('homeImage')\r\n\r\n\r\n    div.appendChild(myIcon);\r\n\r\n    const slogan = document.createElement('div')\r\n    slogan.classList.add('slogan');\r\n    slogan.textContent = \"Bringing Scottish and Spanish fusion food to your table!\"\r\n\r\n    div.appendChild(slogan)\r\n\r\n    return div;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.getElementById('main');\r\n  main.textContent = \"\";\r\n\r\n  main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://resturant-page/./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lobster_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lobster.jpeg */ \"./src/lobster.jpeg\");\n/* harmony import */ var _pie_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie.jpg */ \"./src/pie.jpg\");\n/* harmony import */ var _scallops_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scallops.jpeg */ \"./src/scallops.jpeg\");\n/* harmony import */ var _icon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.jpg */ \"./src/icon.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenu() {\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menu')\r\n\r\n    const lobsterImage = new Image();\r\n    lobsterImage.src = _lobster_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    lobsterImage.classList.add('menuImage')\r\n\r\n    const pieImage = new Image();\r\n    pieImage.src = _pie_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    pieImage.classList.add('menuImage')\r\n\r\n\r\n    const scallopsImage = new Image();\r\n    scallopsImage.src = _scallops_jpeg__WEBPACK_IMPORTED_MODULE_2__;\r\n    scallopsImage.classList.add('menuImage')\r\n\r\n\r\n    const iconImage = new Image();\r\n    iconImage.src = _icon_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n    iconImage.classList.add('menuImage')\r\n\r\n\r\n    const menuCards = [{name:'Haggis Paella', image: iconImage}, {name:'Baked Lobster', image: lobsterImage}, {name:'Scottish Pie', image: pieImage}, {name:'Scallops', image: scallopsImage},]\r\n\r\n    menuCards.forEach(card => {\r\n        const container = document.createElement('div')\r\n        container.classList.add('menuCards')\r\n        container.appendChild(card.image);\r\n        const name = document.createElement('p');\r\n        name.textContent = card.name;\r\n        container.appendChild(name);\r\n        menu.appendChild(container)\r\n    })\r\n\r\n    return menu;\r\n\r\n}\r\n\r\nfunction loadMenu() {\r\n    const main = document.querySelector('#main')\r\n    main.textContent = \"\";\r\n    main.appendChild(createMenu())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://resturant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Pacifico-Regular.ttf":
/*!**********************************!*\
  !*** ./src/Pacifico-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93cd59fff879b8bdd57d.ttf\";\n\n//# sourceURL=webpack://resturant-page/./src/Pacifico-Regular.ttf?");

/***/ }),

/***/ "./src/icon.jpg":
/*!**********************!*\
  !*** ./src/icon.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e66d624bd982eb0ce41.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/icon.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/lobster.jpeg":
/*!**************************!*\
  !*** ./src/lobster.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f870bf1402beacd9004.jpeg\";\n\n//# sourceURL=webpack://resturant-page/./src/lobster.jpeg?");

/***/ }),

/***/ "./src/location.PNG":
/*!**************************!*\
  !*** ./src/location.PNG ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e01bd746cdaba734dfb5.PNG\";\n\n//# sourceURL=webpack://resturant-page/./src/location.PNG?");

/***/ }),

/***/ "./src/pie.jpg":
/*!*********************!*\
  !*** ./src/pie.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"311c844dcd2c780a212a.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/pie.jpg?");

/***/ }),

/***/ "./src/scallops.jpeg":
/*!***************************!*\
  !*** ./src/scallops.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8285a59315af0e32d761.jpeg\";\n\n//# sourceURL=webpack://resturant-page/./src/scallops.jpeg?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n    const title = document.createElement('div');\r\n    title.classList.add('title');\r\n    title.textContent = \"Pedronios\"\r\n\r\n    return title;\r\n    \r\n}\r\n\r\nfunction createNavbar() {\r\n\r\n    const navBar = document.createElement('div');\r\n    navBar.classList.add('navBar')\r\n\r\n    const home = document.createElement('div');\r\n    home.classList.add('navs')\r\n    home.textContent = 'Home';\r\n    home.addEventListener('click', () => {\r\n        if(home.classList.contains('active')) return\r\n        setActiveButton(home);\r\n        (0,_Home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n        \r\n    })\r\n\r\n    const about = document.createElement('div');\r\n    about.classList.add('navs')\r\n    about.textContent = 'About';\r\n    about.addEventListener('click', () => {\r\n        if(about.classList.contains('active')) return\r\n        setActiveButton(about);\r\n        (0,_About__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        \r\n    })\r\n\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('navs')\r\n    menu.textContent = 'Menu';\r\n    menu.addEventListener('click', () => {\r\n        if(menu.classList.contains('active')) return\r\n        setActiveButton(menu);\r\n        (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n        \r\n    })\r\n\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('navs')\r\n    contact.textContent = 'Contact';\r\n    contact.addEventListener('click', () => {\r\n        if(contact.classList.contains('active')) return\r\n        setActiveButton(contact);\r\n        (0,_Contact__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n        \r\n    })\r\n\r\n    navBar.appendChild(home);\r\n    navBar.appendChild(about);\r\n    navBar.appendChild(menu);\r\n    navBar.appendChild(contact);\r\n    \r\n\r\n    return navBar\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n    button.classList.add('active');\r\n\r\n    const navs = document.querySelectorAll('.navs');\r\n    navs.forEach(nav=> {\r\n        if (nav !== button) \r\n        {\r\n            nav.classList.remove('active');\r\n        }\r\n    })\r\n}\r\n\r\nfunction loadMain() {\r\n  const main = document.createElement('div')\r\n  main.setAttribute('id', 'main')\r\n\r\nreturn main;\r\n}\r\n\r\nfunction initializeWebsite() {\r\n    const content = document.getElementById('content');\r\n    const header = document.createElement('div');\r\n    header.setAttribute('id', 'header')\r\n    header.appendChild(createHeader())\r\n    header.appendChild(createNavbar())\r\n    content.appendChild(header);\r\n    content.appendChild(loadMain());\r\n    (0,_Home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://resturant-page/./src/website.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;