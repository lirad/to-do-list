/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/tailwindcss/tailwind.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../postcss-loader/dist/cjs.js!./tailwind.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/tailwindcss/tailwind.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./node_modules/tailwindcss/tailwind.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/classes/localstorage.js":
/*!*************************************!*\
  !*** ./src/classes/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStorage\": () => /* binding */ localStorage,\n/* harmony export */   \"getSingleProject\": () => /* binding */ getSingleProject\n/* harmony export */ });\nconst localStorage = () => {\n  const projects = JSON.parse(window.localStorage.getItem('projects'));\n  return projects;\n};\n\nconst getSingleProject = (projectId) => {\n  const project = localStorage();\n  return project[projectId];\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/classes/localstorage.js?");

/***/ }),

/***/ "./src/classes/projects.js":
/*!*********************************!*\
  !*** ./src/classes/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => /* binding */ Project,\n/* harmony export */   \"getFormValues\": () => /* binding */ getFormValues,\n/* harmony export */   \"addProjectsLinks\": () => /* binding */ addProjectsLinks\n/* harmony export */ });\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/classes/localstorage.js\");\n\n\nconst Project = ([title, description, priority, todos = []]) => ({\n  title, description, priority, todos,\n});\n\nconst getFormValues = () => {\n  const valuesForm = document.querySelectorAll('input');\n  const values = [];\n  for (let i = 0; i < valuesForm.length; i += 1) {\n    values.push(valuesForm[i].value);\n  }\n\n  const b = JSON.parse(window.localStorage.getItem('projects'));\n  values.id = b.length + 1;\n  const p = Project(values);\n  b.push(p);\n  window.localStorage.setItem('projects', [JSON.stringify(b)]);\n};\n\nconst addProjectsLinks = () => {\n  const projects = document.querySelectorAll('.project-card');\n  for (let i = 0; i < projects.length; i++) {\n    const el = projects[i];\n    el.addEventListener('click', (event) => { event.preventDefault(); window.location.hash = `#add-item/${i}`; });\n  }\n};\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/classes/projects.js?");

/***/ }),

/***/ "./src/classes/to-dos.js":
/*!*******************************!*\
  !*** ./src/classes/to-dos.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst ToDoItem = (itemDescription, completed = false) => ({ itemDescription, completed });\n\nconst addItem = (projectId, item) => {\n  const todo = ToDoItem(item, false);\n  const b = JSON.parse(window.localStorage.getItem('projects'));\n  const p = b[projectId];\n  p.todos.push(todo);\n  window.localStorage.setItem('projects', [JSON.stringify(b)]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItem);\n\n//# sourceURL=webpack://to-do-list/./src/classes/to-dos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var _interface_new_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/new-project */ \"./src/interface/new-project.js\");\n/* harmony import */ var _interface_new_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/new-item */ \"./src/interface/new-item.js\");\n/* harmony import */ var _interface_list_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/list-projects */ \"./src/interface/list-projects.js\");\n/* harmony import */ var _classes_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/localstorage */ \"./src/classes/localstorage.js\");\n/* harmony import */ var _classes_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/projects */ \"./src/classes/projects.js\");\n\n\n\n\n\n\n\n\nconst routes = () => {\n  const url = new URL(window.location.hash);\n  let project = JSON.parse(window.localStorage.getItem('projects'));\n  switch (true) {\n    case /#new-project/.test(url.hash):\n      document.querySelector('#content').innerHTML = (0,_interface_new_project__WEBPACK_IMPORTED_MODULE_1__.default)();\n      break;\n    case /.*?add-item(.*?)/g.test(url.hash):\n      document.querySelector('#content').innerHTML = (0,_interface_new_item__WEBPACK_IMPORTED_MODULE_2__.default)(project[0]);\n      break;\n    default:\n      window.location.hash = '#index';\n      document.querySelector('#content').innerHTML = (0,_interface_list_projects__WEBPACK_IMPORTED_MODULE_3__.default)((0,_classes_localstorage__WEBPACK_IMPORTED_MODULE_4__.localStorage)());\n      (0,_classes_projects__WEBPACK_IMPORTED_MODULE_5__.addProjectsLinks)();\n      break;\n  }\n};\n\n\nconst urlListner = () => {\n  window.onhashchange = () => routes();\n};\n\nconst addEventListener = (id, url) => {\n  const createProjectButton = document.getElementById(id);\n  createProjectButton.addEventListener('click', () => { window.location.hash = url; });\n};\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  addEventListener('#createNewProjectButton', '#new-project');\n  addEventListener('#logo', '#index');\n  routes();\n  urlListner();\n});\n\n//\n\n// document.querySelector('#content').innerHTML = ListProjects();\n\n// let project = JSON.parse(window.localStorage.getItem('projects'));\n\n\n// document.querySelector('#content').innerHTML = NewItem(project[0]);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/interface/list-projects.js":
/*!****************************************!*\
  !*** ./src/interface/list-projects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst ListProjects = (projects) => {\n\n\n  const projectsList = [];\n  for (let i = 0; i < projects.length; i += 1) {\n    const projectCardHtml = `\n    <div class=\"h-48 shadow-lg rounded flex flex-col justify-around p-5 col-span-1 project-card cursor-pointer hover:shadow-none hover:bg-gray-100 transition-opacity\"  >\n      <div class=\"h-1/2\">\n        <div class=\"h-4 w-4 rounded-full shadow bg-indigo-700 mt-5 \"></div>\n      </div>  \n      <div class=\"flex flex-col justify-end h-1/2\">\n        <div class=\"text-gray-800 text-xl\">\n          ${projects[i].title}\n        </div>  \n        <div class=\"text-gray-400\"> \n          6 Tasks\n        </div>\n      </div>\n    </div>\n  `;\n\n    projectsList.push(projectCardHtml);\n  }\n\n  const html = `\n    <h2 class=\"font-black text-2xl my-5\">These are your projects</h2>\n    <div class=\"grid grid-cols-2 gap-5 md:grid-cols-4\">\n      ${projectsList.join(' ')}\n    </div>\n  `;\n\n  return html;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListProjects);\n\n//# sourceURL=webpack://to-do-list/./src/interface/list-projects.js?");

/***/ }),

/***/ "./src/interface/new-item.js":
/*!***********************************!*\
  !*** ./src/interface/new-item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _classes_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/localstorage */ \"./src/classes/localstorage.js\");\n/* harmony import */ var _classes_to_dos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/to-dos */ \"./src/classes/to-dos.js\");\n\n\n\nconst NewItem = () => {\n  const projects = window.location.hash.split('/');\n  const projectId = projects[1];\n  const project = (0,_classes_localstorage__WEBPACK_IMPORTED_MODULE_0__.getSingleProject)(projectId);\n\n  window.onload = () => {\n    const el = document.getElementById('button');\n    el.addEventListener('click', () => (0,_classes_to_dos__WEBPACK_IMPORTED_MODULE_1__.default)(projectId, 'Test ToDo'));\n  };\n\n\n  const html = `\n  <h2>${project.title}<h2>\n  <input placeholder=\"Description\" class=\"border\"/> \n  <div  id=\"button\" class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\">\n  Add new item\n  </div>\n`;\n\n  return html;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewItem);\n\n//# sourceURL=webpack://to-do-list/./src/interface/new-item.js?");

/***/ }),

/***/ "./src/interface/new-project.js":
/*!**************************************!*\
  !*** ./src/interface/new-project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _classes_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/projects */ \"./src/classes/projects.js\");\n/* eslint-disable no-unused-vars */\n\n\nconst newProject = () => {\n  window.onload = () => {\n    const el = document.getElementById('button');\n    el.addEventListener('click', () => (0,_classes_projects__WEBPACK_IMPORTED_MODULE_0__.getFormValues)());\n  };\n\n\n  const html = `\n    <form class=\"block text-sm font-medium text-gray-700 w-8/12 mt-10 p-28 bg-gray-50  \">\n      <label class=\"font-black\"> Project Title </label>\n      <div class=\"mt-1 relative rounded-md shadow-sm border-gray-800\">\n        <input type=\"text\" name=\"project-title\" placeholder=\"Type your project name\" class=\"focus:ring-indigo-500 \n        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12\">\n      </div>\n      <label class=\"font-black\"> Project Description </label>\n      <div class=\"mt-1 relative rounded-md shadow-sm border-gray-800\">\n        <input type=\"text\" name=\"project-description\" placeholder=\"Type your project name\" class=\"focus:ring-indigo-500 \n        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12\">\n      </div>\n      <label class=\"font-black\"> Project Priority </label>\n      <div class=\"mt-1 relative rounded-md shadow-sm border-gray-800\">\n        <input type=\"text\" name=\"project-priority\" placeholder=\"Type your project name\" class=\"focus:ring-indigo-500 \n        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12\">\n      </div>\n      <div id=\"button\" class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer\">\n          Create project\n      </div>\n    </form>\n  `;\n\n\n  return html;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProject);\n\n//# sourceURL=webpack://to-do-list/./src/interface/new-project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;