/* eslint-disable */
(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/* ajv 6.5.0: Another JSON Schema Validator */
!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Ajv=e()}}(function(){return function o(i,n,l){function u(r,e){if(!n[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return require(r,!0);if(c)return c(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var s=n[r]={exports:{}};i[r][0].call(s.exports,function(e){return u(i[r][1][e]||e)},s,s.exports,o,i,n,l)}return n[r].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,r,t){"use strict";var a=r.exports=function(){this._cache={}};a.prototype.put=function(e,r){this._cache[e]=r},a.prototype.get=function(e){return this._cache[e]},a.prototype.del=function(e){delete this._cache[e]},a.prototype.clear=function(){this._cache={}}},{}],2:[function(e,r,t){"use strict";var s=e("./error_classes").MissingRef;r.exports=function t(r,i,a){var n=this;if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");"function"==typeof i&&(a=i,i=void 0);var e=l(r).then(function(){var e=n._addSchema(r,void 0,i);return e.validate||function(o){try{return n._compile(o)}catch(e){if(e instanceof s)return function(e){var r=e.missingSchema;if(s(r))throw new Error("Schema "+r+" is loaded but "+e.missingRef+" cannot be resolved");var t=n._loadingSchemas[r];t||(t=n._loadingSchemas[r]=n._opts.loadSchema(r)).then(a,a);return t.then(function(e){if(!s(r))return l(e).then(function(){s(r)||n.addSchema(e,r,void 0,i)})}).then(function(){return u(o)});function a(){delete n._loadingSchemas[r]}function s(e){return n._refs[e]||n._schemas[e]}}(e);throw e}}(e)});a&&e.then(function(e){a(null,e)},a);return e;function l(e){var r=e.$schema;return r&&!n.getSchema(r)?t.call(n,{$ref:r},!0):Promise.resolve()}function u(o){try{return n._compile(o)}catch(e){if(e instanceof s)return function(e){var r=e.missingSchema;if(s(r))throw new Error("Schema "+r+" is loaded but "+e.missingRef+" cannot be resolved");var t=n._loadingSchemas[r];t||(t=n._loadingSchemas[r]=n._opts.loadSchema(r)).then(a,a);return t.then(function(e){if(!s(r))return l(e).then(function(){s(r)||n.addSchema(e,r,void 0,i)})}).then(function(){return u(o)});function a(){delete n._loadingSchemas[r]}function s(e){return n._refs[e]||n._schemas[e]}}(e);throw e}}}},{"./error_classes":3}],3:[function(e,r,t){"use strict";var a=e("./resolve");function s(e,r,t){this.message=t||s.message(e,r),this.missingRef=a.url(e,r),this.missingSchema=a.normalizeId(a.fullPath(this.missingRef))}function o(e){return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e}r.exports={Validation:o(function(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0}),MissingRef:o(s)},s.message=function(e,r){return"can't resolve reference "+r+" from id "+e}},{"./resolve":6}],4:[function(e,r,t){"use strict";var a=e("./util"),o=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31],n=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,s=/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,l=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,u=/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,c=/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,h=/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,d=/^(?:\/(?:[^~/]|~0|~1)*)*$/,f=/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,p=/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;function m(e){return a.copy(m[e="full"==e?"full":"fast"])}function v(e){var r=e.match(o);if(!r)return!1;var t,a=+r[2],s=+r[3];return 1<=a&&a<=12&&1<=s&&s<=(2!=a||((t=+r[1])%4!=0||t%100==0&&t%400!=0)?i[a]:29)}function g(e,r){var t=e.match(n);if(!t)return!1;var a=t[1],s=t[2],o=t[3];return(a<=23&&s<=59&&o<=59||23==a&&59==s&&60==o)&&(!r||t[5])}(r.exports=m).fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,uri:/^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,"uri-template":u,url:c,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:s,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:h,"json-pointer":d,"json-pointer-uri-fragment":f,"relative-json-pointer":p},m.full={date:v,time:g,"date-time":function(e){var r=e.split(y);return 2==r.length&&v(r[0])&&g(r[1],!0)},uri:function(e){return P.test(e)&&l.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":u,url:c,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:function(e){return e.length<=255&&s.test(e)},ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:h,"json-pointer":d,"json-pointer-uri-fragment":f,"relative-json-pointer":p};var y=/t|\s/i;var P=/\/|:/;var E=/[^\\]\\Z/;function w(e){if(E.test(e))return!1;try{return new RegExp(e),!0}catch(e){return!1}}},{"./util":10}],5:[function(e,r,t){"use strict";var $=e("./resolve"),D=e("./util"),j=e("./error_classes"),l=e("fast-json-stable-stringify"),I=e("../dotjs/validate"),O=D.ucs2length,A=e("fast-deep-equal"),C=j.Validation;function k(e,r,t){for(var a=0;a<this._compilations.length;a++){var s=this._compilations[a];if(s.schema==e&&s.root==r&&s.baseId==t)return a}return-1}function L(e,r){return"var pattern"+e+" = new RegExp("+D.toQuotedString(r[e])+");"}function z(e){return"var default"+e+" = defaults["+e+"];"}function T(e,r){return void 0===r[e]?"":"var refVal"+e+" = refVal["+e+"];"}function N(e){return"var customRule"+e+" = customRules["+e+"];"}function q(e,r){if(!e.length)return"";for(var t="",a=0;a<e.length;a++)t+=r(a,e);return t}r.exports=function u(e,c,h,r){var d=this,f=this._opts,p=[void 0],m={},v=[],t={},g=[],a={},y=[];c=c||{schema:e,refVal:p,refs:m};var s=function(e,r,t){var a=k.call(this,e,r,t);return 0<=a?{index:a,compiling:!0}:{index:a=this._compilations.length,compiling:(this._compilations[a]={schema:e,root:r,baseId:t},!1)}}.call(this,e,c,r);var o=this._compilations[s.index];if(s.compiling)return o.callValidate=function e(){var r=o.validate;var t=r.apply(this,arguments);e.errors=r.errors;return t};var P=this._formats;var E=this.RULES;try{var i=w(e,c,h,r);o.validate=i;var n=o.callValidate;return n&&(n.schema=i.schema,n.errors=null,n.refs=i.refs,n.refVal=i.refVal,n.root=i.root,n.$async=i.$async,f.sourceCode&&(n.source=i.source)),i}finally{(function(e,r,t){var a=k.call(this,e,r,t);0<=a&&this._compilations.splice(a,1)}).call(this,e,c,r)}function w(e,r,t,a){var s=!r||r&&r.schema==e;if(r.schema!=c.schema)return u.call(d,e,r,t,a);var o,i=!0===e.$async,n=I({isTop:!0,schema:e,isRoot:s,baseId:a,root:r,schemaPath:"",errSchemaPath:"#",errorPath:'""',MissingRefError:j.MissingRef,RULES:E,validate:I,util:D,resolve:$,resolveRef:S,usePattern:F,useDefault:x,useCustomRule:R,opts:f,formats:P,logger:d.logger,self:d});n=q(p,T)+q(v,L)+q(g,z)+q(y,N)+n,f.processCode&&(n=f.processCode(n));try{var l=new Function("self","RULES","formats","root","refVal","defaults","customRules","equal","ucs2length","ValidationError",n);o=l(d,E,P,c,p,g,y,A,O,C),p[0]=o}catch(e){throw d.logger.error("Error compiling schema, function code:",n),e}return o.schema=e,o.errors=null,o.refs=m,o.refVal=p,o.root=s?o:r,i&&(o.$async=!0),!0===f.sourceCode&&(o.source={code:n,patterns:v,defaults:g}),o}function S(e,r,t){r=$.url(e,r);var a,s,o=m[r];if(void 0!==o)return _(a=p[o],s="refVal["+o+"]");if(!t&&c.refs){var i=c.refs[r];if(void 0!==i)return s=b(r,a=c.refVal[i]),_(a,s)}s=b(r);var n=$.call(d,w,c,r);if(void 0===n){var l=h&&h[r];l&&(n=$.inlineRef(l,f.inlineRefs)?l:u.call(d,l,c,h,e))}if(void 0!==n)return p[m[r]]=n,_(n,s);delete m[r]}function b(e,r){var t=p.length;return p[t]=r,"refVal"+(m[e]=t)}function _(e,r){return"object"==typeof e||"boolean"==typeof e?{code:r,schema:e,inline:!0}:{code:r,$async:e&&!!e.$async}}function F(e){var r=t[e];return void 0===r&&(r=t[e]=v.length,v[r]=e),"pattern"+r}function x(e){switch(typeof e){case"boolean":case"number":return""+e;case"string":return D.toQuotedString(e);case"object":if(null===e)return"null";var r=l(e),t=a[r];return void 0===t&&(t=a[r]=g.length,g[t]=e),"default"+t}}function R(e,r,t,a){var s=e.definition.validateSchema;if(s&&!1!==d._opts.validateSchema){var o=s(r);if(!o){var i="keyword schema is invalid: "+d.errorsText(s.errors);if("log"!=d._opts.validateSchema)throw new Error(i);d.logger.error(i)}}var n,l=e.definition.compile,u=e.definition.inline,c=e.definition.macro;if(l)n=l.call(d,r,t,a);else if(c)n=c.call(d,r,t,a),!1!==f.validateSchema&&d.validateSchema(n,!0);else if(u)n=u.call(d,a,e.keyword,r,t);else if(!(n=e.definition.validate))return;if(void 0===n)throw new Error('custom keyword "'+e.keyword+'"failed to compile');var h=y.length;return{code:"customRule"+h,validate:y[h]=n}}}},{"../dotjs/validate":37,"./error_classes":3,"./resolve":6,"./util":10,"fast-deep-equal":41,"fast-json-stable-stringify":42}],6:[function(e,r,t){"use strict";var m=e("uri-js"),v=e("fast-deep-equal"),g=e("./util"),l=e("./schema_obj"),a=e("json-schema-traverse");function u(e,r,t){var a=this._refs[t];if("string"==typeof a){if(!this._refs[a])return u.call(this,e,r,a);a=this._refs[a]}if((a=a||this._schemas[t])instanceof l)return d(a.schema,this._opts.inlineRefs)?a.schema:a.validate||this._compile(a);var s,o,i,n=c.call(this,r,t);return n&&(s=n.schema,r=n.root,i=n.baseId),s instanceof l?o=s.validate||e.call(this,s.schema,r,void 0,i):void 0!==s&&(o=d(s,this._opts.inlineRefs)?s:e.call(this,s,r,void 0,i)),o}function c(e,r){var t=m.parse(r),a=f(t),s=y(this._getId(e.schema));if(a!==s){var o=P(a),i=this._refs[o];if("string"==typeof i)return function(e,r,t){var a=c.call(this,e,r);if(a){var s=a.schema,o=a.baseId;e=a.root;var i=this._getId(s);return i&&(o=p(o,i)),n.call(this,t,o,s,e)}}.call(this,e,i,t);if(i instanceof l)i.validate||this._compile(i),e=i;else{if(!((i=this._schemas[o])instanceof l))return;if(i.validate||this._compile(i),o==P(r))return{schema:i,root:e,baseId:s};e=i}if(!e.schema)return;s=y(this._getId(e.schema))}return n.call(this,t,s,e.schema,e)}(r.exports=u).normalizeId=P,u.fullPath=y,u.url=p,u.ids=function(e){var r=P(this._getId(e)),h={"":r},d={"":y(r,!1)},f={},p=this;return a(e,{allKeys:!0},function(e,r,t,a,s,o,i){if(""!==r){var n=p._getId(e),l=h[a],u=d[a]+"/"+s;if(void 0!==i&&(u+="/"+("number"==typeof i?i:g.escapeFragment(i))),"string"==typeof n){n=l=P(l?m.resolve(l,n):n);var c=p._refs[n];if("string"==typeof c&&(c=p._refs[c]),c&&c.schema){if(!v(e,c.schema))throw new Error('id "'+n+'" resolves to more than one schema')}else if(n!=P(u))if("#"==n[0]){if(f[n]&&!v(e,f[n]))throw new Error('id "'+n+'" resolves to more than one schema');f[n]=e}else p._refs[n]=u}h[r]=l,d[r]=u}}),f},u.inlineRef=d,u.schema=c;var h=g.toHash(["properties","patternProperties","enum","dependencies","definitions"]);function n(e,r,t,a){if(e.fragment=e.fragment||"","/"==e.fragment.slice(0,1)){for(var s=e.fragment.split("/"),o=1;o<s.length;o++){var i=s[o];if(i){if(void 0===(t=t[i=g.unescapeFragment(i)]))break;var n;if(!h[i]&&((n=this._getId(t))&&(r=p(r,n)),t.$ref)){var l=p(r,t.$ref),u=c.call(this,a,l);u&&(t=u.schema,a=u.root,r=u.baseId)}}}return void 0!==t&&t!==a.schema?{schema:t,root:a,baseId:r}:void 0}}var i=g.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]);function d(e,r){return!1!==r&&(void 0===r||!0===r?function e(r){var t;if(Array.isArray(r)){for(var a=0;a<r.length;a++)if("object"==typeof(t=r[a])&&!e(t))return!1}else for(var s in r){if("$ref"==s)return!1;if("object"==typeof(t=r[s])&&!e(t))return!1}return!0}(e):r?function e(r){var t,a=0;if(Array.isArray(r)){for(var s=0;s<r.length;s++)if("object"==typeof(t=r[s])&&(a+=e(t)),a==1/0)return 1/0}else for(var o in r){if("$ref"==o)return 1/0;if(i[o])a++;else if("object"==typeof(t=r[o])&&(a+=e(t)+1),a==1/0)return 1/0}return a}(e)<=r:void 0)}function y(e,r){return!1!==r&&(e=P(e)),f(m.parse(e))}function f(e){return m.serialize(e).split("#")[0]+"#"}var s=/#\/?$/;function P(e){return e?e.replace(s,""):""}function p(e,r){return r=P(r),m.resolve(e,r)}},{"./schema_obj":8,"./util":10,"fast-deep-equal":41,"json-schema-traverse":43,"uri-js":44}],7:[function(e,r,t){"use strict";var o=e("../dotjs"),i=e("./util").toHash;r.exports=function(){var a=[{type:"number",rules:[{maximum:["exclusiveMaximum"]},{minimum:["exclusiveMinimum"]},"multipleOf","format"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","items","contains","uniqueItems"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","propertyNames",{properties:["additionalProperties","patternProperties"]}]},{rules:["$ref","const","enum","not","anyOf","oneOf","allOf","if"]}],s=["type","$comment"];return a.all=i(s),a.types=i(["number","integer","string","array","object","boolean","null"]),a.forEach(function(e){e.rules=e.rules.map(function(e){var r;if("object"==typeof e){var t=Object.keys(e)[0];r=e[t],e=t,r.forEach(function(e){s.push(e),a.all[e]=!0})}return s.push(e),a.all[e]={keyword:e,code:o[e],implements:r}}),a.all.$comment={keyword:"$comment",code:o.$comment},e.type&&(a.types[e.type]=e)}),a.keywords=i(s.concat(["$schema","$id","id","$data","title","description","default","definitions","examples","readOnly","writeOnly","contentMediaType","contentEncoding","additionalItems","then","else"])),a.custom={},a}},{"../dotjs":26,"./util":10}],8:[function(e,r,t){"use strict";var a=e("./util");r.exports=function(e){a.copy(e,this)}},{"./util":10}],9:[function(e,r,t){"use strict";r.exports=function(e){for(var r,t=0,a=e.length,s=0;s<a;)t++,55296<=(r=e.charCodeAt(s++))&&r<=56319&&s<a&&56320==(64512&(r=e.charCodeAt(s)))&&s++;return t}},{}],10:[function(e,r,t){"use strict";function o(e,r,t){var a=t?" !== ":" === ",s=t?" || ":" && ",o=t?"!":"",i=t?"":"!";switch(e){case"null":return r+a+"null";case"array":return o+"Array.isArray("+r+")";case"object":return"("+o+r+s+"typeof "+r+a+'"object"'+s+i+"Array.isArray("+r+"))";case"integer":return"(typeof "+r+a+'"number"'+s+i+"("+r+" % 1)"+s+r+a+r+")";default:return"typeof "+r+a+'"'+e+'"'}}r.exports={copy:function(e,r){for(var t in r=r||{},e)r[t]=e[t];return r},checkDataType:o,checkDataTypes:function(e,r){switch(e.length){case 1:return o(e[0],r,!0);default:var t="",a=n(e);for(var s in a.array&&a.object&&(t=a.null?"(":"(!"+r+" || ",t+="typeof "+r+' !== "object")',delete a.null,delete a.array,delete a.object),a.number&&delete a.integer,a)t+=(t?" && ":"")+o(s,r,!0);return t}},coerceToTypes:function(e,r){if(Array.isArray(r)){for(var t=[],a=0;a<r.length;a++){var s=r[a];i[s]?t[t.length]=s:"array"===e&&"array"===s&&(t[t.length]=s)}if(t.length)return t}else{if(i[r])return[r];if("array"===e&&"array"===r)return["array"]}},toHash:n,getProperty:h,escapeQuotes:l,equal:e("fast-deep-equal"),ucs2length:e("./ucs2length"),varOccurences:function(e,r){var t=e.match(new RegExp(r+="[^0-9]","g"));return t?t.length:0},varReplace:function(e,r,t){return r+="([^0-9])",t=t.replace(/\$/g,"$$$$"),e.replace(new RegExp(r,"g"),t+"$1")},cleanUpCode:function(e){return e.replace(u,"").replace(c,"").replace(d,"if (!($1))")},finalCleanUpCode:function(e,r){var t=e.match(f);t&&2==t.length&&(e=r?e.replace(m,"").replace(y,P):e.replace(p,"").replace(v,g));return(t=e.match(E))&&3===t.length?e.replace(w,""):e},schemaHasRules:function(e,r){if("boolean"==typeof e)return!e;for(var t in e)if(r[t])return!0},schemaHasRulesExcept:function(e,r,t){if("boolean"==typeof e)return!e&&"not"!=t;for(var a in e)if(a!=t&&r[a])return!0},toQuotedString:S,getPathExpr:function(e,r,t,a){return F(e,t?"'/' + "+r+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+r+" + ']'":"'[\\'' + "+r+" + '\\']'")},getPath:function(e,r,t){var a=S(t?"/"+x(r):h(r));return F(e,a)},getData:function(e,r,t){var a,s,o,i;if(""===e)return"rootData";if("/"==e[0]){if(!b.test(e))throw new Error("Invalid JSON-pointer: "+e);s=e,o="rootData"}else{if(!(i=e.match(_)))throw new Error("Invalid JSON-pointer: "+e);if(a=+i[1],"#"==(s=i[2])){if(r<=a)throw new Error("Cannot access property/index "+a+" levels up, current level is "+r);return t[r-a]}if(r<a)throw new Error("Cannot access data "+a+" levels up, current level is "+r);if(o="data"+(r-a||""),!s)return o}for(var n=o,l=s.split("/"),u=0;u<l.length;u++){var c=l[u];c&&(o+=h(R(c)),n+=" && "+o)}return n},unescapeFragment:function(e){return R(decodeURIComponent(e))},unescapeJsonPointer:R,escapeFragment:function(e){return encodeURIComponent(x(e))},escapeJsonPointer:x};var i=n(["string","number","integer","boolean","null"]);function n(e){for(var r={},t=0;t<e.length;t++)r[e[t]]=!0;return r}var a=/^[a-z$_][a-z$_0-9]*$/i,s=/'|\\/g;function h(e){return"number"==typeof e?"["+e+"]":a.test(e)?"."+e:"['"+l(e)+"']"}function l(e){return e.replace(s,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}var u=/else\s*{\s*}/g,c=/if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,d=/if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;var f=/[^v.]errors/g,p=/var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,m=/var errors = 0;|var vErrors = null;/g,v="return errors === 0;",g="validate.errors = null; return true;",y=/if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,P="return data;",E=/[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,w=/if \(rootData === undefined\) rootData = data;/;function S(e){return"'"+l(e)+"'"}var b=/^\/(?:[^~]|~0|~1)*$/,_=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function F(e,r){return'""'==e?r:(e+" + "+r).replace(/' \+ '/g,"")}function x(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function R(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}},{"./ucs2length":9,"fast-deep-equal":41}],11:[function(e,r,t){"use strict";var l=["multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","additionalItems","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","additionalProperties","enum","format","const"];r.exports=function(e,r){for(var t=0;t<r.length;t++){e=JSON.parse(JSON.stringify(e));var a,s=r[t].split("/"),o=e;for(a=1;a<s.length;a++)o=o[s[a]];for(a=0;a<l.length;a++){var i=l[a],n=o[i];n&&(o[i]={anyOf:[n,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"}]})}}return e}},{}],12:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var f="maximum"==r,p=f?"exclusiveMaximum":"exclusiveMinimum",m=e.schema[p],v=e.opts.$data&&m&&m.$data,g=f?"<":">",y=f?">":"<",P=void 0;if(v){var E=e.util.getData(m.$data,i,e.dataPathArr),w="exclusive"+o,S="exclType"+o,b="exclIsNumber"+o,_="' + "+(R="op"+o)+" + '";s+=" var schemaExcl"+o+" = "+E+"; ";var F;P=p;(F=F||[]).push(s+=" var "+w+"; var "+S+" = typeof "+(E="schemaExcl"+o)+"; if ("+S+" != 'boolean' && "+S+" != 'undefined' && "+S+" != 'number') { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(P||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(s+=" , message: '"+p+" should be boolean' "),e.opts.verbose&&(s+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var x=s;s=F.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+x+"]); ":" validate.errors = ["+x+"]; return false; ":" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } else if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+S+" == 'number' ? ( ("+w+" = "+a+" === undefined || "+E+" "+g+"= "+a+") ? "+h+" "+y+"= "+E+" : "+h+" "+y+" "+a+" ) : ( ("+w+" = "+E+" === true) ? "+h+" "+y+"= "+a+" : "+h+" "+y+" "+a+" ) || "+h+" !== "+h+") { var op"+o+" = "+w+" ? '"+g+"' : '"+g+"='; ",void 0===n&&(u=e.errSchemaPath+"/"+(P=p),a=E,d=v)}else{_=g;if((b="number"==typeof m)&&d){var R="'"+_+"'";s+=" if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" ( "+a+" === undefined || "+m+" "+g+"= "+a+" ? "+h+" "+y+"= "+m+" : "+h+" "+y+" "+a+" ) || "+h+" !== "+h+") { "}else{b&&void 0===n?(w=!0,u=e.errSchemaPath+"/"+(P=p),a=m,y+="="):(b&&(a=Math[f?"min":"max"](m,n)),m===(!b||a)?(w=!0,u=e.errSchemaPath+"/"+(P=p),y+="="):(w=!1,_+="="));R="'"+_+"'";s+=" if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+h+" "+y+" "+a+" || "+h+" !== "+h+") { "}}P=P||r,(F=F||[]).push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(P||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { comparison: "+R+", limit: "+a+", exclusive: "+w+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be "+_+" ",s+=d?"' + "+a:a+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";x=s;return s=F.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+x+"]); ":" validate.errors = ["+x+"]; return false; ":" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",c&&(s+=" else { "),s}},{}],13:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || ");var f=r,p=p||[];p.push(s+=" "+h+".length "+("maxItems"==r?">":"<")+" "+a+") { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxItems"==r?"more":"less",s+=" than ",s+=d?"' + "+a+" + '":""+n,s+=" items' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],14:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=!1===e.opts.unicode?" "+h+".length ":" ucs2length("+h+") ";var f=r,p=p||[];p.push(s+=" "+("maxLength"==r?">":"<")+" "+a+") { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT be ",s+="maxLength"==r?"longer":"shorter",s+=" than ",s+=d?"' + "+a+" + '":""+n,s+=" characters' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],15:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || ");var f=r,p=p||[];p.push(s+=" Object.keys("+h+").length "+("maxProperties"==r?">":"<")+" "+a+") { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxProperties"==r?"more":"less",s+=" than ",s+=d?"' + "+a+" + '":""+n,s+=" properties' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],16:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.schema[r],o=e.schemaPath+e.util.getProperty(r),i=e.errSchemaPath+"/"+r,n=!e.opts.allErrors,l=e.util.copy(e),u="";l.level++;var c="valid"+l.level,h=l.baseId,d=!0,f=s;if(f)for(var p,m=-1,v=f.length-1;m<v;)p=f[m+=1],e.util.schemaHasRules(p,e.RULES.all)&&(d=!1,l.schema=p,l.schemaPath=o+"["+m+"]",l.errSchemaPath=i+"/"+m,a+="  "+e.validate(l)+" ",l.baseId=h,n&&(a+=" if ("+c+") { ",u+="}"));return n&&(a+=d?" if (true) { ":" "+u.slice(0,-1)+" "),a=e.util.cleanUpCode(a)}},{}],17:[function(e,r,t){"use strict";r.exports=function(r,e,t){var a=" ",s=r.level,o=r.dataLevel,i=r.schema[e],n=r.schemaPath+r.util.getProperty(e),l=r.errSchemaPath+"/"+e,u=!r.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=r.util.copy(r),p="";f.level++;var m="valid"+f.level;if(i.every(function(e){return r.util.schemaHasRules(e,r.RULES.all)})){var v=f.baseId;a+=" var "+d+" = errors; var "+h+" = false;  ";var g=r.compositeRule;r.compositeRule=f.compositeRule=!0;var y=i;if(y)for(var P,E=-1,w=y.length-1;E<w;)P=y[E+=1],f.schema=P,f.schemaPath=n+"["+E+"]",f.errSchemaPath=l+"/"+E,a+="  "+r.validate(f)+" ",f.baseId=v,a+=" "+h+" = "+h+" || "+m+"; if (!"+h+") { ",p+="}";r.compositeRule=f.compositeRule=g,a+=" "+p+" if (!"+h+") {   var err =   ",!1!==r.createErrors?(a+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+r.errorPath+" , schemaPath: "+r.util.toQuotedString(l)+" , params: {} ",!1!==r.opts.messages&&(a+=" , message: 'should match some schema in anyOf' "),r.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+r.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!r.compositeRule&&u&&(a+=r.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),a+=" } else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } ",r.opts.allErrors&&(a+=" } "),a=r.util.cleanUpCode(a)}else u&&(a+=" if (true) { ");return a}},{}],18:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.errSchemaPath+"/"+r,o=e.util.toQuotedString(e.schema[r]);return!0===e.opts.$comment?a+=" console.log("+o+");":"function"==typeof e.opts.$comment&&(a+=" self._opts.$comment("+o+", "+e.util.toQuotedString(s)+", validate.root.schema);"),a}},{}],19:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; "),d||(a+=" var schema"+s+" = validate.schema"+n+";");var f=f||[];f.push(a+="var "+h+" = equal("+c+", schema"+s+"); if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'const' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValue: schema"+s+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to constant' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var p=a;return a=f.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",u&&(a+=" else { "),a}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e);f.level++;var p="valid"+f.level,m="i"+s,v=f.dataLevel=e.dataLevel+1,g="data"+v,y=e.baseId,P=e.util.schemaHasRules(i,e.RULES.all);if(a+="var "+d+" = errors;var "+h+";",P){var E=e.compositeRule;e.compositeRule=f.compositeRule=!0,f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+=" var "+p+" = false; for (var "+m+" = 0; "+m+" < "+c+".length; "+m+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);var w=c+"["+m+"]";f.dataPathArr[v]=m;var S=e.validate(f);f.baseId=y,e.util.varOccurences(S,g)<2?a+=" "+e.util.varReplace(S,g,w)+" ":a+=" var "+g+" = "+w+"; "+S+" ",a+=" if ("+p+") break; }  ",e.compositeRule=f.compositeRule=E,a+="  if (!"+p+") {"}else a+=" if ("+c+".length == 0) {";var b=b||[];b.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'contains' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should contain a valid item' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var _=a;return a=b.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ",P&&(a+="  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } "),e.opts.allErrors&&(a+=" } "),a=e.util.cleanUpCode(a)}},{}],21:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s,o=" ",i=e.level,n=e.dataLevel,l=e.schema[r],u=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,d="data"+(n||""),f="valid"+i,p="errs__"+i,m=e.opts.$data&&l&&l.$data;m?(o+=" var schema"+i+" = "+e.util.getData(l.$data,n,e.dataPathArr)+"; ",s="schema"+i):s=l;var v,g,y,P,E,w=this,S="definition"+i,b=w.definition,_="";if(m&&b.$data){var F=b.validateSchema;o+=" var "+S+" = RULES.custom['"+r+"'].definition; var "+(E="keywordValidate"+i)+" = "+S+".validate;"}else{if(!(P=e.useCustomRule(w,l,e.schema,e)))return;s="validate.schema"+u,E=P.code,v=b.compile,g=b.inline,y=b.macro}var x=E+".errors",R="i"+i,$="ruleErr"+i,D=b.async;if(D&&!e.async)throw new Error("async keyword in sync schema");if(g||y||(o+=x+" = null;"),o+="var "+p+" = errors;var "+f+";",m&&b.$data&&(_+="}",o+=" if ("+s+" === undefined) { "+f+" = true; } else { ",F&&(_+="}",o+=" "+f+" = "+S+".validateSchema("+s+"); if ("+f+") { ")),g)o+=b.statements?" "+P.validate+" ":" "+f+" = "+P.validate+"; ";else if(y){var j=e.util.copy(e);_="";j.level++;var I="valid"+j.level;j.schema=P.validate,j.schemaPath="";var O=e.compositeRule;e.compositeRule=j.compositeRule=!0;var A=e.validate(j).replace(/validate\.schema/g,E);e.compositeRule=j.compositeRule=O,o+=" "+A}else{(z=z||[]).push(o),o="",o+="  "+E+".call( ",o+=e.opts.passContext?"this":"self",o+=v||!1===b.schema?" , "+d+" ":" , "+s+" , "+d+" , validate.schema"+e.schemaPath+" ",o+=" , (dataPath || '')",'""'!=e.errorPath&&(o+=" + "+e.errorPath);var C=n?"data"+(n-1||""):"parentData",k=n?e.dataPathArr[n]:"parentDataProperty",L=o+=" , "+C+" , "+k+" , rootData )  ";o=z.pop(),!1===b.errors?(o+=" "+f+" = ",D&&(o+="await "),o+=L+"; "):o+=D?" var "+(x="customErrors"+i)+" = null; try { "+f+" = await "+L+"; } catch (e) { "+f+" = false; if (e instanceof ValidationError) "+x+" = e.errors; else throw e; } ":" "+x+" = null; "+f+" = "+L+"; "}if(b.modifying&&(o+=" if ("+C+") "+d+" = "+C+"["+k+"];"),o+=""+_,b.valid)h&&(o+=" if (true) { ");else{var z;o+=" if ( ",void 0===b.valid?(o+=" !",o+=y?""+I:""+f):o+=" "+!b.valid+" ",a=w.keyword,(z=z||[]).push(o+=") { "),(z=z||[]).push(o=""),o="",!1!==e.createErrors?(o+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+w.keyword+"' } ",!1!==e.opts.messages&&(o+=" , message: 'should pass \""+w.keyword+"\" keyword validation' "),e.opts.verbose&&(o+=" , schema: validate.schema"+u+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var T=o;o=z.pop();var N=o+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+T+"]); ":" validate.errors = ["+T+"]; return false; ":" var err = "+T+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";o=z.pop(),g?b.errors?"full"!=b.errors&&(o+="  for (var "+R+"="+p+"; "+R+"<errors; "+R+"++) { var "+$+" = vErrors["+R+"]; if ("+$+".dataPath === undefined) "+$+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+$+".schemaPath === undefined) { "+$+'.schemaPath = "'+c+'"; } ',e.opts.verbose&&(o+=" "+$+".schema = "+s+"; "+$+".data = "+d+"; "),o+=" } "):!1===b.errors?o+=" "+N+" ":(o+=" if ("+p+" == errors) { "+N+" } else {  for (var "+R+"="+p+"; "+R+"<errors; "+R+"++) { var "+$+" = vErrors["+R+"]; if ("+$+".dataPath === undefined) "+$+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+$+".schemaPath === undefined) { "+$+'.schemaPath = "'+c+'"; } ',e.opts.verbose&&(o+=" "+$+".schema = "+s+"; "+$+".data = "+d+"; "),o+=" } } "):y?(o+="   var err =   ",!1!==e.createErrors?(o+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+w.keyword+"' } ",!1!==e.opts.messages&&(o+=" , message: 'should pass \""+w.keyword+"\" keyword validation' "),e.opts.verbose&&(o+=" , schema: validate.schema"+u+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&h&&(o+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; ")):!1===b.errors?o+=" "+N+" ":(o+=" if (Array.isArray("+x+")) { if (vErrors === null) vErrors = "+x+"; else vErrors = vErrors.concat("+x+"); errors = vErrors.length;  for (var "+R+"="+p+"; "+R+"<errors; "+R+"++) { var "+$+" = vErrors["+R+"]; if ("+$+".dataPath === undefined) "+$+".dataPath = (dataPath || '') + "+e.errorPath+";  "+$+'.schemaPath = "'+c+'";  ',e.opts.verbose&&(o+=" "+$+".schema = "+s+"; "+$+".data = "+d+"; "),o+=" } } else { "+N+" } "),o+=" } ",h&&(o+=" else { ")}return o}},{}],22:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e),f="";d.level++;var p="valid"+d.level,m={},v={},g=e.opts.ownProperties;for(w in i){var y=i[w],P=Array.isArray(y)?v:m;P[w]=y}a+="var "+h+" = errors;";var E=e.errorPath;for(var w in a+="var missing"+s+";",v)if((P=v[w]).length){if(a+=" if ( "+c+e.util.getProperty(w)+" !== undefined ",g&&(a+=" && Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(w)+"') "),u){a+=" && ( ";var S=P;if(S)for(var b=-1,_=S.length-1;b<_;){j=S[b+=1],b&&(a+=" || "),a+=" ( ( "+(C=c+(A=e.util.getProperty(j)))+" === undefined ",g&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(j)+"') "),a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?j:A)+") ) "}a+=")) {  ";var F="missing"+s,x="' + "+F+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,F,!0):E+" + "+F);var R=R||[];R.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+x+"', depsCount: "+P.length+", deps: '"+e.util.escapeQuotes(1==P.length?P[0]:P.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",a+=1==P.length?"property "+e.util.escapeQuotes(P[0]):"properties "+e.util.escapeQuotes(P.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var $=a;a=R.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+$+"]); ":" validate.errors = ["+$+"]; return false; ":" var err = "+$+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else{a+=" ) { ";var D=P;if(D)for(var j,I=-1,O=D.length-1;I<O;){j=D[I+=1];var A=e.util.getProperty(j),C=(x=e.util.escapeQuotes(j),c+A);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,j,e.opts.jsonPointers)),a+=" if ( "+C+" === undefined ",g&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(j)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+x+"', depsCount: "+P.length+", deps: '"+e.util.escapeQuotes(1==P.length?P[0]:P.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",a+=1==P.length?"property "+e.util.escapeQuotes(P[0]):"properties "+e.util.escapeQuotes(P.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}a+=" }   ",u&&(f+="}",a+=" else { ")}e.errorPath=E;var k=d.baseId;for(var w in m){e.util.schemaHasRules(y=m[w],e.RULES.all)&&(a+=" "+p+" = true; if ( "+c+e.util.getProperty(w)+" !== undefined ",g&&(a+=" && Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(w)+"') "),a+=") { ",d.schema=y,d.schemaPath=n+e.util.getProperty(w),d.errSchemaPath=l+"/"+e.util.escapeFragment(w),a+="  "+e.validate(d)+" ",d.baseId=k,a+=" }  ",u&&(a+=" if ("+p+") { ",f+="}"))}return u&&(a+="   "+f+" if ("+h+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],23:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ");var f="i"+s,p="schema"+s;d||(a+=" var "+p+" = validate.schema"+n+";"),a+="var "+h+";",d&&(a+=" if (schema"+s+" === undefined) "+h+" = true; else if (!Array.isArray(schema"+s+")) "+h+" = false; else {"),a+=h+" = false;for (var "+f+"=0; "+f+"<"+p+".length; "+f+"++) if (equal("+c+", "+p+"["+f+"])) { "+h+" = true; break; }",d&&(a+="  }  ");var m=m||[];m.push(a+=" if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValues: schema"+s+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var v=a;return a=m.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",u&&(a+=" else { "),a}},{}],24:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||"");if(!1===e.opts.format)return u&&(a+=" if (true) { "),a;var h,d=e.opts.$data&&i&&i.$data;d?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",h="schema"+s):h=i;var f=e.opts.unknownFormats,p=Array.isArray(f);if(d){a+=" var "+(m="format"+s)+" = formats["+h+"]; var "+(v="isObject"+s)+" = typeof "+m+" == 'object' && !("+m+" instanceof RegExp) && "+m+".validate; var "+(g="formatType"+s)+" = "+v+" && "+m+".type || 'string'; if ("+v+") { ",e.async&&(a+=" var async"+s+" = "+m+".async; "),a+=" "+m+" = "+m+".validate; } if (  ",d&&(a+=" ("+h+" !== undefined && typeof "+h+" != 'string') || "),a+=" (","ignore"!=f&&(a+=" ("+h+" && !"+m+" ",p&&(a+=" && self._opts.unknownFormats.indexOf("+h+") == -1 "),a+=") || "),a+=" ("+m+" && "+g+" == '"+t+"' && !(typeof "+m+" == 'function' ? ",a+=e.async?" (async"+s+" ? await "+m+"("+c+") : "+m+"("+c+")) ":" "+m+"("+c+") ",a+=" : "+m+".test("+c+"))))) {"}else{var m;if(!(m=e.formats[i])){if("ignore"==f)return e.logger.warn('unknown format "'+i+'" ignored in schema at path "'+e.errSchemaPath+'"'),u&&(a+=" if (true) { "),a;if(p&&0<=f.indexOf(i))return u&&(a+=" if (true) { "),a;throw new Error('unknown format "'+i+'" is used in schema at path "'+e.errSchemaPath+'"')}var v,g=(v="object"==typeof m&&!(m instanceof RegExp)&&m.validate)&&m.type||"string";if(v){var y=!0===m.async;m=m.validate}if(g!=t)return u&&(a+=" if (true) { "),a;if(y){if(!e.async)throw new Error("async format in sync schema");a+=" if (!(await "+(P="formats"+e.util.getProperty(i)+".validate")+"("+c+"))) { "}else{a+=" if (! ";var P="formats"+e.util.getProperty(i);v&&(P+=".validate"),a+="function"==typeof m?" "+P+"("+c+") ":" "+P+".test("+c+") ",a+=") { "}}var E=E||[];E.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { format:  ",a+=d?""+h:""+e.util.toQuotedString(i),a+="  } ",!1!==e.opts.messages&&(a+=" , message: 'should match format \"",a+=d?"' + "+h+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=d?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var w=a;return a=E.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+w+"]); ":" validate.errors = ["+w+"]; return false; ":" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",u&&(a+=" else { "),a}},{}],25:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e);f.level++;var p="valid"+f.level,m=e.schema.then,v=e.schema.else,g=void 0!==m&&e.util.schemaHasRules(m,e.RULES.all),y=void 0!==v&&e.util.schemaHasRules(v,e.RULES.all),P=f.baseId;if(g||y){var E;f.createErrors=!1,f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+=" var "+d+" = errors; var "+h+" = true;  ";var w=e.compositeRule;e.compositeRule=f.compositeRule=!0,a+="  "+e.validate(f)+" ",f.baseId=P,f.createErrors=!0,a+="  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; }  ",e.compositeRule=f.compositeRule=w,g?(a+=" if ("+p+") {  ",f.schema=e.schema.then,f.schemaPath=e.schemaPath+".then",f.errSchemaPath=e.errSchemaPath+"/then",a+="  "+e.validate(f)+" ",f.baseId=P,a+=" "+h+" = "+p+"; ",g&&y?a+=" var "+(E="ifClause"+s)+" = 'then'; ":E="'then'",a+=" } ",y&&(a+=" else { ")):a+=" if (!"+p+") { ",y&&(f.schema=e.schema.else,f.schemaPath=e.schemaPath+".else",f.errSchemaPath=e.errSchemaPath+"/else",a+="  "+e.validate(f)+" ",f.baseId=P,a+=" "+h+" = "+p+"; ",g&&y?a+=" var "+(E="ifClause"+s)+" = 'else'; ":E="'else'",a+=" } "),a+=" if (!"+h+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'if' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { failingKeyword: "+E+" } ",!1!==e.opts.messages&&(a+=" , message: 'should match \"' + "+E+" + '\" schema' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&u&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),a+=" }   ",u&&(a+=" else { "),a=e.util.cleanUpCode(a)}else u&&(a+=" if (true) { ");return a}},{}],26:[function(e,r,t){"use strict";r.exports={$ref:e("./ref"),allOf:e("./allOf"),anyOf:e("./anyOf"),$comment:e("./comment"),const:e("./const"),contains:e("./contains"),dependencies:e("./dependencies"),enum:e("./enum"),format:e("./format"),if:e("./if"),items:e("./items"),maximum:e("./_limit"),minimum:e("./_limit"),maxItems:e("./_limitItems"),minItems:e("./_limitItems"),maxLength:e("./_limitLength"),minLength:e("./_limitLength"),maxProperties:e("./_limitProperties"),minProperties:e("./_limitProperties"),multipleOf:e("./multipleOf"),not:e("./not"),oneOf:e("./oneOf"),pattern:e("./pattern"),properties:e("./properties"),propertyNames:e("./propertyNames"),required:e("./required"),uniqueItems:e("./uniqueItems"),validate:e("./validate")}},{"./_limit":12,"./_limitItems":13,"./_limitLength":14,"./_limitProperties":15,"./allOf":16,"./anyOf":17,"./comment":18,"./const":19,"./contains":20,"./dependencies":22,"./enum":23,"./format":24,"./if":25,"./items":27,"./multipleOf":28,"./not":29,"./oneOf":30,"./pattern":31,"./properties":32,"./propertyNames":33,"./ref":34,"./required":35,"./uniqueItems":36,"./validate":37}],27:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level,v="i"+s,g=f.dataLevel=e.dataLevel+1,y="data"+g,P=e.baseId;if(a+="var "+d+" = errors;var "+h+";",Array.isArray(i)){var E=e.schema.additionalItems;if(!1===E){a+=" "+h+" = "+c+".length <= "+i.length+"; ";var w=l;l=e.errSchemaPath+"/additionalItems";var S=S||[];S.push(a+="  if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+i.length+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have more than "+i.length+" items' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var b=a;a=S.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+b+"]); ":" validate.errors = ["+b+"]; return false; ":" var err = "+b+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",l=w,u&&(p+="}",a+=" else { ")}var _=i;if(_)for(var F,x=-1,R=_.length-1;x<R;)if(F=_[x+=1],e.util.schemaHasRules(F,e.RULES.all)){a+=" "+m+" = true; if ("+c+".length > "+x+") { ";var $=c+"["+x+"]";f.schema=F,f.schemaPath=n+"["+x+"]",f.errSchemaPath=l+"/"+x,f.errorPath=e.util.getPathExpr(e.errorPath,x,e.opts.jsonPointers,!0),f.dataPathArr[g]=x;var D=e.validate(f);f.baseId=P,e.util.varOccurences(D,y)<2?a+=" "+e.util.varReplace(D,y,$)+" ":a+=" var "+y+" = "+$+"; "+D+" ",a+=" }  ",u&&(a+=" if ("+m+") { ",p+="}")}if("object"==typeof E&&e.util.schemaHasRules(E,e.RULES.all)){f.schema=E,f.schemaPath=e.schemaPath+".additionalItems",f.errSchemaPath=e.errSchemaPath+"/additionalItems",a+=" "+m+" = true; if ("+c+".length > "+i.length+") {  for (var "+v+" = "+i.length+"; "+v+" < "+c+".length; "+v+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);$=c+"["+v+"]";f.dataPathArr[g]=v;D=e.validate(f);f.baseId=P,e.util.varOccurences(D,y)<2?a+=" "+e.util.varReplace(D,y,$)+" ":a+=" var "+y+" = "+$+"; "+D+" ",u&&(a+=" if (!"+m+") break; "),a+=" } }  ",u&&(a+=" if ("+m+") { ",p+="}")}}else if(e.util.schemaHasRules(i,e.RULES.all)){f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+="  for (var "+v+" = 0; "+v+" < "+c+".length; "+v+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);$=c+"["+v+"]";f.dataPathArr[g]=v;D=e.validate(f);f.baseId=P,e.util.varOccurences(D,y)<2?a+=" "+e.util.varReplace(D,y,$)+" ":a+=" var "+y+" = "+$+"; "+D+" ",u&&(a+=" if (!"+m+") break; "),a+=" }"}return u&&(a+=" "+p+" if ("+d+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],28:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="var division"+o+";if (",d&&(s+=" "+a+" !== undefined && ( typeof "+a+" != 'number' || "),s+=" (division"+o+" = "+h+" / "+a+", ",s+=e.opts.multipleOfPrecision?" Math.abs(Math.round(division"+o+") - division"+o+") > 1e-"+e.opts.multipleOfPrecision+" ":" division"+o+" !== parseInt(division"+o+") ",s+=" ) ",d&&(s+="  )  ");var f=f||[];f.push(s+=" ) {   "),s="",!1!==e.createErrors?(s+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { multipleOf: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be multiple of ",s+=d?"' + "+a:a+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var p=s;return s=f.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],29:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e);d.level++;var f="valid"+d.level;if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i,d.schemaPath=n,d.errSchemaPath=l,a+=" var "+h+" = errors;  ";var p,m=e.compositeRule;e.compositeRule=d.compositeRule=!0,d.createErrors=!1,d.opts.allErrors&&(p=d.opts.allErrors,d.opts.allErrors=!1),a+=" "+e.validate(d)+" ",d.createErrors=!0,p&&(d.opts.allErrors=p),e.compositeRule=d.compositeRule=m;var v=v||[];v.push(a+=" if ("+f+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var g=a;a=v.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+g+"]); ":" validate.errors = ["+g+"]; return false; ":" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } ")}else a+="  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u&&(a+=" if (false) { ");return a}},{}],30:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level,v=f.baseId,g="prevValid"+s,y="passingSchemas"+s;a+="var "+d+" = errors , "+g+" = false , "+h+" = false , "+y+" = null; ";var P=e.compositeRule;e.compositeRule=f.compositeRule=!0;var E=i;if(E)for(var w,S=-1,b=E.length-1;S<b;)w=E[S+=1],e.util.schemaHasRules(w,e.RULES.all)?(f.schema=w,f.schemaPath=n+"["+S+"]",f.errSchemaPath=l+"/"+S,a+="  "+e.validate(f)+" ",f.baseId=v):a+=" var "+m+" = true; ",S&&(a+=" if ("+m+" && "+g+") { "+h+" = false; "+y+" = ["+y+", "+S+"]; } else { ",p+="}"),a+=" if ("+m+") { "+h+" = "+g+" = true; "+y+" = "+S+"; }";return e.compositeRule=f.compositeRule=P,a+=p+"if (!"+h+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { passingSchemas: "+y+" } ",!1!==e.opts.messages&&(a+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&u&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),a+="} else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; }",e.opts.allErrors&&(a+=" } "),a}},{}],31:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var f=d?"(new RegExp("+a+"))":e.usePattern(n);s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'string') || ");var p=p||[];p.push(s+=" !"+f+".test("+h+") ) {   "),s="",!1!==e.createErrors?(s+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { pattern:  ",s+=d?""+a:""+e.util.toQuotedString(n),s+="  } ",!1!==e.opts.messages&&(s+=" , message: 'should match pattern \"",s+=d?"' + "+a+" + '":""+e.util.escapeQuotes(n),s+="\"' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+e.util.toQuotedString(n),s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],32:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e),f="";d.level++;var p="valid"+d.level,m="key"+s,v="idx"+s,g=d.dataLevel=e.dataLevel+1,y="data"+g,P="dataProperties"+s,E=Object.keys(i||{}),w=e.schema.patternProperties||{},S=Object.keys(w),b=e.schema.additionalProperties,_=E.length||S.length,F=!1===b,x="object"==typeof b&&Object.keys(b).length,R=e.opts.removeAdditional,$=F||x||R,D=e.opts.ownProperties,j=e.baseId,I=e.schema.required;if(I&&(!e.opts.$data||!I.$data)&&I.length<e.opts.loopRequired)var O=e.util.toHash(I);if(a+="var "+h+" = errors;var "+p+" = true;",D&&(a+=" var "+P+" = undefined;"),$){if(a+=D?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+v+"=0; "+v+"<"+P+".length; "+v+"++) { var "+m+" = "+P+"["+v+"]; ":" for (var "+m+" in "+c+") { ",_){if(a+=" var isAdditional"+s+" = !(false ",E.length)if(8<E.length)a+=" || validate.schema"+n+".hasOwnProperty("+m+") ";else{var A=E;if(A)for(var C=-1,k=A.length-1;C<k;)J=A[C+=1],a+=" || "+m+" == "+e.util.toQuotedString(J)+" "}if(S.length){var L=S;if(L)for(var z=-1,T=L.length-1;z<T;)ae=L[z+=1],a+=" || "+e.usePattern(ae)+".test("+m+") "}a+=" ); if (isAdditional"+s+") { "}if("all"==R)a+=" delete "+c+"["+m+"]; ";else{var N=e.errorPath,q="' + "+m+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers)),F)if(R)a+=" delete "+c+"["+m+"]; ";else{var U=l;l=e.errSchemaPath+"/additionalProperties",(ee=ee||[]).push(a+=" "+p+" = false; "),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { additionalProperty: '"+q+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is an invalid additional property":"should NOT have additional properties",a+="' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var Q=a;a=ee.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+Q+"]); ":" validate.errors = ["+Q+"]; return false; ":" var err = "+Q+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=U,u&&(a+=" break; ")}else if(x)if("failing"==R){a+=" var "+h+" = errors;  ";var V=e.compositeRule;e.compositeRule=d.compositeRule=!0,d.schema=b,d.schemaPath=e.schemaPath+".additionalProperties",d.errSchemaPath=e.errSchemaPath+"/additionalProperties",d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var H=c+"["+m+"]";d.dataPathArr[g]=m;var M=e.validate(d);d.baseId=j,e.util.varOccurences(M,y)<2?a+=" "+e.util.varReplace(M,y,H)+" ":a+=" var "+y+" = "+H+"; "+M+" ",a+=" if (!"+p+") { errors = "+h+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+c+"["+m+"]; }  ",e.compositeRule=d.compositeRule=V}else{d.schema=b,d.schemaPath=e.schemaPath+".additionalProperties",d.errSchemaPath=e.errSchemaPath+"/additionalProperties",d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);H=c+"["+m+"]";d.dataPathArr[g]=m;M=e.validate(d);d.baseId=j,e.util.varOccurences(M,y)<2?a+=" "+e.util.varReplace(M,y,H)+" ":a+=" var "+y+" = "+H+"; "+M+" ",u&&(a+=" if (!"+p+") break; ")}e.errorPath=N}_&&(a+=" } "),a+=" }  ",u&&(a+=" if ("+p+") { ",f+="}")}var B=e.opts.useDefaults&&!e.compositeRule;if(E.length){var K=E;if(K)for(var J,Z=-1,G=K.length-1;Z<G;){if(J=K[Z+=1],e.util.schemaHasRules(ie=i[J],e.RULES.all)){var Y=e.util.getProperty(J),W=(H=c+Y,B&&void 0!==ie.default);d.schema=ie,d.schemaPath=n+Y,d.errSchemaPath=l+"/"+e.util.escapeFragment(J),d.errorPath=e.util.getPath(e.errorPath,J,e.opts.jsonPointers),d.dataPathArr[g]=e.util.toQuotedString(J);M=e.validate(d);if(d.baseId=j,e.util.varOccurences(M,y)<2){M=e.util.varReplace(M,y,H);var X=H}else{X=y;a+=" var "+y+" = "+H+"; "}if(W)a+=" "+M+" ";else{if(O&&O[J]){a+=" if ( "+X+" === undefined ",D&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "),a+=") { "+p+" = false; ";N=e.errorPath,U=l;var ee,re=e.util.escapeQuotes(J);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(N,J,e.opts.jsonPointers)),l=e.errSchemaPath+"/required",(ee=ee||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+re+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+re+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";Q=a;a=ee.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+Q+"]); ":" validate.errors = ["+Q+"]; return false; ":" var err = "+Q+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=U,e.errorPath=N,a+=" } else { "}else u?(a+=" if ( "+X+" === undefined ",D&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "),a+=") { "+p+" = true; } else { "):(a+=" if ("+X+" !== undefined ",D&&(a+=" &&   Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "),a+=" ) { ");a+=" "+M+" } "}}u&&(a+=" if ("+p+") { ",f+="}")}}if(S.length){var te=S;if(te)for(var ae,se=-1,oe=te.length-1;se<oe;){var ie;if(ae=te[se+=1],e.util.schemaHasRules(ie=w[ae],e.RULES.all)){d.schema=ie,d.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(ae),d.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(ae),a+=D?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+v+"=0; "+v+"<"+P+".length; "+v+"++) { var "+m+" = "+P+"["+v+"]; ":" for (var "+m+" in "+c+") { ",a+=" if ("+e.usePattern(ae)+".test("+m+")) { ",d.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);H=c+"["+m+"]";d.dataPathArr[g]=m;M=e.validate(d);d.baseId=j,e.util.varOccurences(M,y)<2?a+=" "+e.util.varReplace(M,y,H)+" ":a+=" var "+y+" = "+H+"; "+M+" ",u&&(a+=" if (!"+p+") break; "),a+=" } ",u&&(a+=" else "+p+" = true; "),a+=" }  ",u&&(a+=" if ("+p+") { ",f+="}")}}}return u&&(a+=" "+f+" if ("+h+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],33:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e);d.level++;var f="valid"+d.level;if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i,d.schemaPath=n,d.errSchemaPath=l;var p="key"+s,m="idx"+s,v="i"+s,g="' + "+p+" + '",y="data"+(d.dataLevel=e.dataLevel+1),P="dataProperties"+s,E=e.opts.ownProperties,w=e.baseId;a+=" var "+h+" = errors; ",E&&(a+=" var "+P+" = undefined; "),a+=E?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+m+"=0; "+m+"<"+P+".length; "+m+"++) { var "+p+" = "+P+"["+m+"]; ":" for (var "+p+" in "+c+") { ",a+=" var startErrs"+s+" = errors; ";var S=p,b=e.compositeRule;e.compositeRule=d.compositeRule=!0;var _=e.validate(d);d.baseId=w,e.util.varOccurences(_,y)<2?a+=" "+e.util.varReplace(_,y,S)+" ":a+=" var "+y+" = "+S+"; "+_+" ",e.compositeRule=d.compositeRule=b,a+=" if (!"+f+") { for (var "+v+"=startErrs"+s+"; "+v+"<errors; "+v+"++) { vErrors["+v+"].propertyName = "+p+"; }   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'propertyNames' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { propertyName: '"+g+"' } ",!1!==e.opts.messages&&(a+=" , message: 'property name \\'"+g+"\\' is invalid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&u&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),u&&(a+=" break; "),a+=" } }"}return u&&(a+="  if ("+h+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],34:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s,o=" ",i=e.dataLevel,n=e.schema[r],l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(i||""),h="valid"+e.level;if("#"==n||"#/"==n)e.isRoot?(a=e.async,s="validate"):(a=!0===e.root.schema.$async,s="root.refVal[0]");else{var d=e.resolveRef(e.baseId,n,e.isRoot);if(void 0===d){var f=e.MissingRefError.message(e.baseId,n);if("fail"==e.opts.missingRefs){e.logger.error(f),(g=g||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { ref: '"+e.util.escapeQuotes(n)+"' } ",!1!==e.opts.messages&&(o+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(n)+"' "),e.opts.verbose&&(o+=" , schema: "+e.util.toQuotedString(n)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),o+=" } "):o+=" {} ";var p=o;o=g.pop(),o+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u&&(o+=" if (false) { ")}else{if("ignore"!=e.opts.missingRefs)throw new e.MissingRefError(e.baseId,n,f);e.logger.warn(f),u&&(o+=" if (true) { ")}}else if(d.inline){var m=e.util.copy(e);m.level++;var v="valid"+m.level;m.schema=d.schema,m.schemaPath="",m.errSchemaPath=n,o+=" "+e.validate(m).replace(/validate\.schema/g,d.code)+" ",u&&(o+=" if ("+v+") { ")}else a=!0===d.$async||e.async&&!1!==d.$async,s=d.code}if(s){var g;(g=g||[]).push(o),o="",o+=e.opts.passContext?" "+s+".call(this, ":" "+s+"( ",o+=" "+c+", (dataPath || '')",'""'!=e.errorPath&&(o+=" + "+e.errorPath);var y=o+=" , "+(i?"data"+(i-1||""):"parentData")+" , "+(i?e.dataPathArr[i]:"parentDataProperty")+", rootData)  ";if(o=g.pop(),a){if(!e.async)throw new Error("async schema referenced by sync schema");u&&(o+=" var "+h+"; "),o+=" try { await "+y+"; ",u&&(o+=" "+h+" = true; "),o+=" } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ",u&&(o+=" "+h+" = false; "),o+=" } ",u&&(o+=" if ("+h+") { ")}else o+=" if (!"+y+") { if (vErrors === null) vErrors = "+s+".errors; else vErrors = vErrors.concat("+s+".errors); errors = vErrors.length; } ",u&&(o+=" else { ")}return o}},{}],35:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ");var f="schema"+s;if(!d)if(i.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var p=[],m=i;if(m)for(var v,g=-1,y=m.length-1;g<y;){v=m[g+=1];var P=e.schema.properties[v];P&&e.util.schemaHasRules(P,e.RULES.all)||(p[p.length]=v)}}else p=i;if(d||p.length){var E=e.errorPath,w=d||e.opts.loopRequired<=p.length,S=e.opts.ownProperties;if(u)if(a+=" var missing"+s+"; ",w){d||(a+=" var "+f+" = validate.schema"+n+"; ");var b="' + "+(D="schema"+s+"["+(x="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,D,e.opts.jsonPointers)),a+=" var "+h+" = true; ",d&&(a+=" if (schema"+s+" === undefined) "+h+" = true; else if (!Array.isArray(schema"+s+")) "+h+" = false; else {"),a+=" for (var "+x+" = 0; "+x+" < "+f+".length; "+x+"++) { "+h+" = "+c+"["+f+"["+x+"]] !== undefined ",S&&(a+=" &&   Object.prototype.hasOwnProperty.call("+c+", "+f+"["+x+"]) "),a+="; if (!"+h+") break; } ",d&&(a+="  }  "),($=$||[]).push(a+="  if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var _=a;a=$.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { "}else{a+=" if ( ";var F=p;if(F)for(var x=-1,R=F.length-1;x<R;){I=F[x+=1],x&&(a+=" || "),a+=" ( ( "+(k=c+(C=e.util.getProperty(I)))+" === undefined ",S&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(I)+"') "),a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?I:C)+") ) "}a+=") {  ";var $;b="' + "+(D="missing"+s)+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,D,!0):E+" + "+D),($=$||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";_=a;a=$.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { "}else if(w){d||(a+=" var "+f+" = validate.schema"+n+"; ");var D;b="' + "+(D="schema"+s+"["+(x="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,D,e.opts.jsonPointers)),d&&(a+=" if ("+f+" && !Array.isArray("+f+")) {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+f+" !== undefined) { "),a+=" for (var "+x+" = 0; "+x+" < "+f+".length; "+x+"++) { if ("+c+"["+f+"["+x+"]] === undefined ",S&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", "+f+"["+x+"]) "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",d&&(a+="  }  ")}else{var j=p;if(j)for(var I,O=-1,A=j.length-1;O<A;){I=j[O+=1];var C=e.util.getProperty(I),k=(b=e.util.escapeQuotes(I),c+C);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,I,e.opts.jsonPointers)),a+=" if ( "+k+" === undefined ",S&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(I)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}e.errorPath=E}else u&&(a+=" if (true) {");return a}},{}],36:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d="valid"+o,f=e.opts.$data&&n&&n.$data;if(f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,(n||f)&&!1!==e.opts.uniqueItems){f&&(s+=" var "+d+"; if ("+a+" === false || "+a+" === undefined) "+d+" = true; else if (typeof "+a+" != 'boolean') "+d+" = false; else { "),s+=" var i = "+h+".length , "+d+" = true , j; if (i > 1) { ";var p=e.schema.items&&e.schema.items.type,m=Array.isArray(p);if(!p||"object"==p||"array"==p||m&&(0<=p.indexOf("object")||0<=p.indexOf("array")))s+=" outer: for (;i--;) { for (j = i; j--;) { if (equal("+h+"[i], "+h+"[j])) { "+d+" = false; break outer; } } } ";else s+=" var itemIndices = {}, item; for (;i--;) { var item = "+h+"[i]; ",s+=" if ("+e.util["checkDataType"+(m?"s":"")](p,"item",!0)+") continue; ",m&&(s+=" if (typeof item == 'string') item = '\"' + item; "),s+=" if (typeof itemIndices[item] == 'number') { "+d+" = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";s+=" } ",f&&(s+="  }  ");var v=v||[];v.push(s+=" if (!"+d+") {   "),s="",!1!==e.createErrors?(s+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { i: i, j: j } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var g=s;s=v.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+g+"]); ":" validate.errors = ["+g+"]; return false; ":" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",c&&(s+=" else { ")}else c&&(s+=" if (true) { ");return s}},{}],37:[function(e,r,t){"use strict";r.exports=function(a,e,r){var t="",s=!0===a.schema.$async,o=a.util.schemaHasRulesExcept(a.schema,a.RULES.all,"$ref"),i=a.self._getId(a.schema);if(a.isTop&&(t+=" var validate = ",s&&(a.async=!0,t+="async "),t+="function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ",i&&(a.opts.sourceCode||a.opts.processCode)&&(t+=" /*# sourceURL="+i+" */ ")),"boolean"==typeof a.schema||!o&&!a.schema.$ref){var n=a.level,l=a.dataLevel,u=a.schema[e="false schema"],c=a.schemaPath+a.util.getProperty(e),h=a.errSchemaPath+"/"+e,d=!a.opts.allErrors,f="data"+(l||""),p="valid"+n;if(!1===a.schema){a.isTop?d=!0:t+=" var "+p+" = false; ",(K=K||[]).push(t),t="",!1!==a.createErrors?(t+=" { keyword: 'false schema' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: {} ",!1!==a.opts.messages&&(t+=" , message: 'boolean schema is false' "),a.opts.verbose&&(t+=" , schema: false , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";var m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else t+=a.isTop?s?" return data; ":" validate.errors = null; return true; ":" var "+p+" = true; ";return a.isTop&&(t+=" }; return validate; "),t}if(a.isTop){var v=a.isTop;n=a.level=0,l=a.dataLevel=0,f="data";a.rootId=a.resolve.fullPath(a.self._getId(a.root.schema)),a.baseId=a.baseId||a.rootId,delete a.isTop,a.dataPathArr=[void 0],t+=" var vErrors = null; ",t+=" var errors = 0;     ",t+=" if (rootData === undefined) rootData = data; "}else{n=a.level,f="data"+((l=a.dataLevel)||"");if(i&&(a.baseId=a.resolve.url(a.baseId,i)),s&&!a.async)throw new Error("async schema in sync schema");t+=" var errs_"+n+" = errors;"}p="valid"+n,d=!a.opts.allErrors;var g="",y="",P=a.schema.type,E=Array.isArray(P);if(E&&1==P.length&&(P=P[0],E=!1),a.schema.$ref&&o){if("fail"==a.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+a.errSchemaPath+'" (see option extendRefs)');!0!==a.opts.extendRefs&&(o=!1,a.logger.warn('$ref: keywords ignored in schema at path "'+a.errSchemaPath+'"'))}if(a.schema.$comment&&a.opts.$comment&&(t+=" "+a.RULES.all.$comment.code(a,"$comment")),P){if(a.opts.coerceTypes)var w=a.util.coerceToTypes(a.opts.coerceTypes,P);var S=a.RULES.types[P];if(w||E||!0===S||S&&!J(S)){c=a.schemaPath+".type",h=a.errSchemaPath+"/type",c=a.schemaPath+".type",h=a.errSchemaPath+"/type";if(t+=" if ("+a.util[E?"checkDataTypes":"checkDataType"](P,f,!0)+") { ",w){var b="dataType"+n,_="coerced"+n;t+=" var "+b+" = typeof "+f+"; ","array"==a.opts.coerceTypes&&(t+=" if ("+b+" == 'object' && Array.isArray("+f+")) "+b+" = 'array'; "),t+=" var "+_+" = undefined; ";var F="",x=w;if(x)for(var R,$=-1,D=x.length-1;$<D;)R=x[$+=1],$&&(t+=" if ("+_+" === undefined) { ",F+="}"),"array"==a.opts.coerceTypes&&"array"!=R&&(t+=" if ("+b+" == 'array' && "+f+".length == 1) { "+_+" = "+f+" = "+f+"[0]; "+b+" = typeof "+f+";  } "),"string"==R?t+=" if ("+b+" == 'number' || "+b+" == 'boolean') "+_+" = '' + "+f+"; else if ("+f+" === null) "+_+" = ''; ":"number"==R||"integer"==R?(t+=" if ("+b+" == 'boolean' || "+f+" === null || ("+b+" == 'string' && "+f+" && "+f+" == +"+f+" ","integer"==R&&(t+=" && !("+f+" % 1)"),t+=")) "+_+" = +"+f+"; "):"boolean"==R?t+=" if ("+f+" === 'false' || "+f+" === 0 || "+f+" === null) "+_+" = false; else if ("+f+" === 'true' || "+f+" === 1) "+_+" = true; ":"null"==R?t+=" if ("+f+" === '' || "+f+" === 0 || "+f+" === false) "+_+" = null; ":"array"==a.opts.coerceTypes&&"array"==R&&(t+=" if ("+b+" == 'string' || "+b+" == 'number' || "+b+" == 'boolean' || "+f+" == null) "+_+" = ["+f+"]; ");(K=K||[]).push(t+=" "+F+" if ("+_+" === undefined) {   "),t="",!1!==a.createErrors?(t+=" { keyword: 'type' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: { type: '",t+=E?""+P.join(","):""+P,t+="' } ",!1!==a.opts.messages&&(t+=" , message: 'should be ",t+=E?""+P.join(","):""+P,t+="' "),a.opts.verbose&&(t+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } else {  ";var j=l?"data"+(l-1||""):"parentData";t+=" "+f+" = "+_+"; ",l||(t+="if ("+j+" !== undefined)"),t+=" "+j+"["+(l?a.dataPathArr[l]:"parentDataProperty")+"] = "+_+"; } "}else{(K=K||[]).push(t),t="",!1!==a.createErrors?(t+=" { keyword: 'type' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: { type: '",t+=E?""+P.join(","):""+P,t+="' } ",!1!==a.opts.messages&&(t+=" , message: 'should be ",t+=E?""+P.join(","):""+P,t+="' "),a.opts.verbose&&(t+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}t+=" } "}}if(a.schema.$ref&&!o)t+=" "+a.RULES.all.$ref.code(a,"$ref")+" ",d&&(t+=" } if (errors === ",t+=v?"0":"errs_"+n,t+=") { ",y+="}");else{var I=a.RULES;if(I)for(var O=-1,A=I.length-1;O<A;)if(J(S=I[O+=1])){if(S.type&&(t+=" if ("+a.util.checkDataType(S.type,f)+") { "),a.opts.useDefaults&&!a.compositeRule)if("object"==S.type&&a.schema.properties){u=a.schema.properties;var C=Object.keys(u);if(C)for(var k,L=-1,z=C.length-1;L<z;){if(void 0!==(N=u[k=C[L+=1]]).default)t+="  if ("+(U=f+a.util.getProperty(k))+" === undefined) "+U+" = ",t+="shared"==a.opts.useDefaults?" "+a.useDefault(N.default)+" ":" "+JSON.stringify(N.default)+" ",t+="; "}}else if("array"==S.type&&Array.isArray(a.schema.items)){var T=a.schema.items;if(T){$=-1;for(var N,q=T.length-1;$<q;){var U;if(void 0!==(N=T[$+=1]).default)t+="  if ("+(U=f+"["+$+"]")+" === undefined) "+U+" = ",t+="shared"==a.opts.useDefaults?" "+a.useDefault(N.default)+" ":" "+JSON.stringify(N.default)+" ",t+="; "}}}var Q=S.rules;if(Q)for(var V,H=-1,M=Q.length-1;H<M;)if(Z(V=Q[H+=1])){var B=V.code(a,V.keyword,S.type);B&&(t+=" "+B+" ",d&&(g+="}"))}if(d&&(t+=" "+g+" ",g=""),S.type&&(t+=" } ",P&&P===S.type&&!w)){var K;c=a.schemaPath+".type",h=a.errSchemaPath+"/type";(K=K||[]).push(t+=" else { "),t="",!1!==a.createErrors?(t+=" { keyword: 'type' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: { type: '",t+=E?""+P.join(","):""+P,t+="' } ",!1!==a.opts.messages&&(t+=" , message: 'should be ",t+=E?""+P.join(","):""+P,t+="' "),a.opts.verbose&&(t+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } "}d&&(t+=" if (errors === ",t+=v?"0":"errs_"+n,t+=") { ",y+="}")}}function J(e){for(var r=e.rules,t=0;t<r.length;t++)if(Z(r[t]))return!0}function Z(e){return void 0!==a.schema[e.keyword]||e.implements&&function(e){for(var r=e.implements,t=0;t<r.length;t++)if(void 0!==a.schema[r[t]])return!0}(e)}return d&&(t+=" "+y+" "),v?(s?(t+=" if (errors === 0) return data;           ",t+=" else throw new ValidationError(vErrors); "):(t+=" validate.errors = vErrors; ",t+=" return errors === 0;       "),t+=" }; return validate;"):t+=" var "+p+" = errors === errs_"+n+";",t=a.util.cleanUpCode(t),v&&(t=a.util.finalCleanUpCode(t,s)),t}},{}],38:[function(e,r,t){"use strict";var c=/^[a-z_$][a-z0-9_$-]*$/i,h=e("./dotjs/custom");r.exports={add:function(e,r){var n=this.RULES;if(n.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!c.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(r){if(r.macro&&void 0!==r.valid)throw new Error('"valid" option cannot be used with macro keywords');var t=r.type;if(Array.isArray(t)){var a,s=t.length;for(a=0;a<s;a++)u(t[a]);for(a=0;a<s;a++)l(e,t[a],r)}else t&&u(t),l(e,t,r);var o=!0===r.$data&&this._opts.$data;if(o&&!r.validate)throw new Error('$data support: "validate" function is not defined');var i=r.metaSchema;i&&(o&&(i={anyOf:[i,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"}]}),r.validateSchema=this.compile(i,!0))}function l(e,r,t){for(var a,s=0;s<n.length;s++){var o=n[s];if(o.type==r){a=o;break}}a||n.push(a={type:r,rules:[]});var i={keyword:e,definition:t,custom:!0,code:h,implements:t.implements};a.rules.push(i),n.custom[e]=i}function u(e){if(!n.types[e])throw new Error("Unknown type "+e)}return n.keywords[e]=n.all[e]=!0,this},get:function(e){var r=this.RULES.custom[e];return r?r.definition:this.RULES.keywords[e]||!1},remove:function(e){var r=this.RULES;delete r.keywords[e],delete r.all[e],delete r.custom[e];for(var t=0;t<r.length;t++)for(var a=r[t].rules,s=0;s<a.length;s++)if(a[s].keyword==e){a.splice(s,1);break}return this}}},{"./dotjs/custom":21}],39:[function(e,r,t){r.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",description:"Meta-schema for $data reference (JSON Schema extension proposal)",type:"object",required:["$data"],properties:{$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},additionalProperties:!1}},{}],40:[function(e,r,t){r.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0}},{}],41:[function(e,r,t){"use strict";var f=Array.isArray,p=Object.keys,m=Object.prototype.hasOwnProperty;r.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){var a,s,o,i=f(r),n=f(t);if(i&&n){if((s=r.length)!=t.length)return!1;for(a=s;0!=a--;)if(!e(r[a],t[a]))return!1;return!0}if(i!=n)return!1;var l=r instanceof Date,u=t instanceof Date;if(l!=u)return!1;if(l&&u)return r.getTime()==t.getTime();var c=r instanceof RegExp,h=t instanceof RegExp;if(c!=h)return!1;if(c&&h)return r.toString()==t.toString();var d=p(r);if((s=d.length)!==p(t).length)return!1;for(a=s;0!=a--;)if(!m.call(t,d[a]))return!1;for(a=s;0!=a--;)if(!e(r[o=d[a]],t[o]))return!1;return!0}return r!=r&&t!=t}},{}],42:[function(e,r,t){"use strict";r.exports=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var a,l="boolean"==typeof r.cycles&&r.cycles,u=r.cmp&&(a=r.cmp,function(t){return function(e,r){return a({key:e,value:t[e]},{key:r,value:t[r]})}}),c=[];return function e(r){if(r&&r.toJSON&&"function"==typeof r.toJSON&&(r=r.toJSON()),void 0!==r){if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);var t,a;if(Array.isArray(r)){for(a="[",t=0;t<r.length;t++)t&&(a+=","),a+=e(r[t])||"null";return a+"]"}if(null===r)return"null";if(-1!==c.indexOf(r)){if(l)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var s=c.push(r)-1,o=Object.keys(r).sort(u&&u(r));for(a="",t=0;t<o.length;t++){var i=o[t],n=e(r[i]);n&&(a&&(a+=","),a+=JSON.stringify(i)+":"+n)}return c.splice(s,1),"{"+a+"}"}}(e)}},{}],43:[function(e,r,t){"use strict";var p=r.exports=function(e,r,t){"function"==typeof r&&(t=r,r={}),function e(r,t,a,s,o,i,n,l,u){if(a&&"object"==typeof a&&!Array.isArray(a))for(var c in t(a,s,o,i,n,l,u),a){var h=a[c];if(Array.isArray(h)){if(c in p.arrayKeywords)for(var d=0;d<h.length;d++)e(r,t,h[d],s+"/"+c+"/"+d,o,s,c,a,d)}else if(c in p.propsKeywords){if(h&&"object"==typeof h)for(var f in h)e(r,t,h[f],s+"/"+c+"/"+f.replace(/~/g,"~0").replace(/\//g,"~1"),o,s,c,a,f)}else(c in p.keywords||r.allKeys&&!(c in p.skipKeywords))&&e(r,t,h,s+"/"+c,o,s,c,a)}}(r,t,e,"",e)};p.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0},p.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},p.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},p.skipKeywords={enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0}},{}],44:[function(e,r,t){var a;a=this,function(e){"use strict";function C(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];if(1<r.length){r[0]=r[0].slice(0,-1);for(var a=r.length-1,s=1;s<a;++s)r[s]=r[s].slice(1,-1);return r[a]=r[a].slice(1),r.join("")}return r[0]}function k(e){return"(?:"+e+")"}function a(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function p(e){return e.toUpperCase()}function r(e){var r="[A-Za-z]",t="[0-9]",a=C(t,"[A-Fa-f]"),s=k(k("%[EFef]"+a+"%"+a+a+"%"+a+a)+"|"+k("%[89A-Fa-f]"+a+"%"+a+a)+"|"+k("%"+a+a)),o="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",i=C("[\\:\\/\\?\\#\\[\\]\\@]",o),n=e?"[\\uE000-\\uF8FF]":"[]",l=C(r,t,"[\\-\\.\\_\\~]",e?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]"),u=k(r+C(r,t,"[\\+\\-\\.]")+"*"),c=k(k(s+"|"+C(l,o,"[\\:]"))+"*"),h=(k(k("25[0-5]")+"|"+k("2[0-4]"+t)+"|"+k("1"+t+t)+"|"+k("[1-9]"+t)+"|"+t),k(k("25[0-5]")+"|"+k("2[0-4]"+t)+"|"+k("1"+t+t)+"|"+k("0?[1-9]"+t)+"|0?0?"+t)),d=k(h+"\\."+h+"\\."+h+"\\."+h),f=k(a+"{1,4}"),p=k(k(f+"\\:"+f)+"|"+d),m=k([k(k(f+"\\:")+"{6}"+p),k("\\:\\:"+k(f+"\\:")+"{5}"+p),k(k(f)+"?\\:\\:"+k(f+"\\:")+"{4}"+p),k(k(k(f+"\\:")+"{0,1}"+f)+"?\\:\\:"+k(f+"\\:")+"{3}"+p),k(k(k(f+"\\:")+"{0,2}"+f)+"?\\:\\:"+k(f+"\\:")+"{2}"+p),k(k(k(f+"\\:")+"{0,3}"+f)+"?\\:\\:"+f+"\\:"+p),k(k(k(f+"\\:")+"{0,4}"+f)+"?\\:\\:"+p),k(k(k(f+"\\:")+"{0,5}"+f)+"?\\:\\:"+f),k(k(k(f+"\\:")+"{0,6}"+f)+"?\\:\\:")].join("|")),v=k(k(l+"|"+s)+"+"),g=(k(m+"\\%25"+v),k("\\["+k(k(m+k("\\%25|\\%(?!"+a+"{2})")+v)+"|"+m+"|"+k("[vV]"+a+"+\\."+C(l,o,"[\\:]")+"+"))+"\\]")),y=k(k(s+"|"+C(l,o))+"*"),P=k(g+"|"+d+"(?!"+y+")|"+y),E=k(t+"*"),w=k(k(c+"@")+"?"+P+k("\\:"+E)+"?"),S=k(s+"|"+C(l,o,"[\\:\\@]")),b=k(S+"*"),_=k(S+"+"),F=k(k(s+"|"+C(l,o,"[\\@]"))+"+"),x=k(k("\\/"+b)+"*"),R=k("\\/"+k(_+x)+"?"),$=k(F+x),D=k(_+x),j="(?!"+S+")",I=(k(x+"|"+R+"|"+$+"|"+D+"|"+j),k(k(S+"|"+C("[\\/\\?]",n))+"*")),O=k(k(S+"|[\\/\\?]")+"*"),A=k(k("\\/\\/"+w+x)+"|"+R+"|"+D+"|"+j);k(k(u+"\\:"+A+k("\\?"+I)+"?"+k("\\#"+O)+"?")+"|"+k(k(k("\\/\\/"+w+x)+"|"+R+"|"+$+"|"+j)+k("\\?"+I)+"?"+k("\\#"+O)+"?")),k(u+"\\:"+A+k("\\?"+I)+"?"),k(k("\\/\\/("+k("("+c+")@")+"?("+P+")"+k("\\:("+E+")")+"?)")+"?("+x+"|"+R+"|"+D+"|"+j+")"),k("\\?("+I+")"),k("\\#("+O+")"),k(k("\\/\\/("+k("("+c+")@")+"?("+P+")"+k("\\:("+E+")")+"?)")+"?("+x+"|"+R+"|"+$+"|"+j+")"),k("\\?("+I+")"),k("\\#("+O+")"),k(k("\\/\\/("+k("("+c+")@")+"?("+P+")"+k("\\:("+E+")")+"?)")+"?("+x+"|"+R+"|"+D+"|"+j+")"),k("\\?("+I+")"),k("\\#("+O+")"),k("("+c+")@"),k("\\:("+E+")");return{NOT_SCHEME:new RegExp(C("[^]",r,t,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(C("[^\\%\\:]",l,o),"g"),NOT_HOST:new RegExp(C("[^\\%\\[\\]\\:]",l,o),"g"),NOT_PATH:new RegExp(C("[^\\%\\/\\:\\@]",l,o),"g"),NOT_PATH_NOSCHEME:new RegExp(C("[^\\%\\/\\@]",l,o),"g"),NOT_QUERY:new RegExp(C("[^\\%]",l,o,"[\\:\\@\\/\\?]",n),"g"),NOT_FRAGMENT:new RegExp(C("[^\\%]",l,o,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(C("[^]",l,o),"g"),UNRESERVED:new RegExp(l,"g"),OTHER_CHARS:new RegExp(C("[^\\%]",l,i),"g"),PCT_ENCODED:new RegExp(s,"g"),IPV4ADDRESS:new RegExp("^("+d+")$"),IPV6ADDRESS:new RegExp("^\\[?("+m+")"+k(k("\\%25|\\%(?!"+a+"{2})")+"("+v+")")+"?\\]?$")}}var c=r(!1),h=r(!0),w=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],a=!0,s=!1,o=void 0;try{for(var i,n=e[Symbol.iterator]();!(a=(i=n.next()).done)&&(t.push(i.value),!r||t.length!==r);a=!0);}catch(e){s=!0,o=e}finally{try{!a&&n.return&&n.return()}finally{if(s)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},A=2147483647,t=/^xn--/,s=/[^\0-\x7E]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,i={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=Math.floor,z=String.fromCharCode;function T(e){throw new RangeError(i[e])}function n(e,r){var t=e.split("@"),a="";return 1<t.length&&(a=t[0]+"@",e=t[1]),a+function(e,r){for(var t=[],a=e.length;a--;)t[a]=r(e[a]);return t}((e=e.replace(o,".")).split("."),r).join(".")}function N(e){for(var r=[],t=0,a=e.length;t<a;){var s=e.charCodeAt(t++);if(55296<=s&&s<=56319&&t<a){var o=e.charCodeAt(t++);56320==(64512&o)?r.push(((1023&s)<<10)+(1023&o)+65536):(r.push(s),t--)}else r.push(s)}return r}var q=function(e,r){return e+22+75*(e<26)-((0!=r)<<5)},U=function(e,r,t){var a=0;for(e=t?L(e/700):e>>1,e+=L(e/r);455<e;a+=36)e=L(e/35);return L(a+36*e/(e+38))},l=function(e){var r,t=[],a=e.length,s=0,o=128,i=72,n=e.lastIndexOf("-");n<0&&(n=0);for(var l=0;l<n;++l)128<=e.charCodeAt(l)&&T("not-basic"),t.push(e.charCodeAt(l));for(var u=0<n?n+1:0;u<a;){for(var c=s,h=1,d=36;;d+=36){a<=u&&T("invalid-input");var f=(r=e.charCodeAt(u++))-48<10?r-22:r-65<26?r-65:r-97<26?r-97:36;(36<=f||f>L((A-s)/h))&&T("overflow"),s+=f*h;var p=d<=i?1:i+26<=d?26:d-i;if(f<p)break;var m=36-p;h>L(A/m)&&T("overflow"),h*=m}var v=t.length+1;i=U(s-c,v,0==c),L(s/v)>A-o&&T("overflow"),o+=L(s/v),s%=v,t.splice(s++,0,o)}return String.fromCodePoint.apply(String,t)},u=function(e){var r=[],t=(e=N(e)).length,a=128,s=0,o=72,i=!0,n=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var h=u.value;h<128&&r.push(z(h))}}catch(e){n=!0,l=e}finally{try{!i&&c.return&&c.return()}finally{if(n)throw l}}var d=r.length,f=d;for(d&&r.push("-");f<t;){var p=A,m=!0,v=!1,g=void 0;try{for(var y,P=e[Symbol.iterator]();!(m=(y=P.next()).done);m=!0){var E=y.value;a<=E&&E<p&&(p=E)}}catch(e){v=!0,g=e}finally{try{!m&&P.return&&P.return()}finally{if(v)throw g}}var w=f+1;p-a>L((A-s)/w)&&T("overflow"),s+=(p-a)*w,a=p;var S=!0,b=!1,_=void 0;try{for(var F,x=e[Symbol.iterator]();!(S=(F=x.next()).done);S=!0){var R=F.value;if(R<a&&++s>A&&T("overflow"),R==a){for(var $=s,D=36;;D+=36){var j=D<=o?1:o+26<=D?26:D-o;if($<j)break;var I=$-j,O=36-j;r.push(z(q(j+I%O,0))),$=L(I/O)}r.push(z(q($,0))),o=U(s,w,f==d),s=0,++f}}}catch(e){b=!0,_=e}finally{try{!S&&x.return&&x.return()}finally{if(b)throw _}}++s,++a}return r.join("")},v={version:"2.1.0",ucs2:{decode:N,encode:function(e){return String.fromCodePoint.apply(String,function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(e))}},decode:l,encode:u,toASCII:function(e){return n(e,function(e){return s.test(e)?"xn--"+u(e):e})},toUnicode:function(e){return n(e,function(e){return t.test(e)?l(e.slice(4).toLowerCase()):e})}},d={};function m(e){var r=e.charCodeAt(0);return r<16?"%0"+r.toString(16).toUpperCase():r<128?"%"+r.toString(16).toUpperCase():r<2048?"%"+(r>>6|192).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase():"%"+(r>>12|224).toString(16).toUpperCase()+"%"+(r>>6&63|128).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase()}function f(e){for(var r="",t=0,a=e.length;t<a;){var s=parseInt(e.substr(t+1,2),16);if(s<128)r+=String.fromCharCode(s),t+=3;else if(194<=s&&s<224){if(6<=a-t){var o=parseInt(e.substr(t+4,2),16);r+=String.fromCharCode((31&s)<<6|63&o)}else r+=e.substr(t,6);t+=6}else if(224<=s){if(9<=a-t){var i=parseInt(e.substr(t+4,2),16),n=parseInt(e.substr(t+7,2),16);r+=String.fromCharCode((15&s)<<12|(63&i)<<6|63&n)}else r+=e.substr(t,9);t+=9}else r+=e.substr(t,3),t+=3}return r}function g(e,t){function r(e){var r=f(e);return r.match(t.UNRESERVED)?r:e}return e.scheme&&(e.scheme=String(e.scheme).replace(t.PCT_ENCODED,r).toLowerCase().replace(t.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(t.PCT_ENCODED,r).replace(t.NOT_USERINFO,m).replace(t.PCT_ENCODED,p)),void 0!==e.host&&(e.host=String(e.host).replace(t.PCT_ENCODED,r).toLowerCase().replace(t.NOT_HOST,m).replace(t.PCT_ENCODED,p)),void 0!==e.path&&(e.path=String(e.path).replace(t.PCT_ENCODED,r).replace(e.scheme?t.NOT_PATH:t.NOT_PATH_NOSCHEME,m).replace(t.PCT_ENCODED,p)),void 0!==e.query&&(e.query=String(e.query).replace(t.PCT_ENCODED,r).replace(t.NOT_QUERY,m).replace(t.PCT_ENCODED,p)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(t.PCT_ENCODED,r).replace(t.NOT_FRAGMENT,m).replace(t.PCT_ENCODED,p)),e}function S(e){return e.replace(/^0*(.*)/,"$1")||"0"}function b(e,r){var t=e.match(r.IPV4ADDRESS)||[],a=w(t,2)[1];return a?a.split(".").map(S).join("."):e}function y(e,r){var t=e.match(r.IPV6ADDRESS)||[],a=w(t,3),s=a[1],o=a[2];if(s){for(var i=s.toLowerCase().split("::").reverse(),n=w(i,2),l=n[0],u=n[1],c=u?u.split(":").map(S):[],h=l.split(":").map(S),d=r.IPV4ADDRESS.test(h[h.length-1]),f=d?7:8,p=h.length-f,m=Array(f),v=0;v<f;++v)m[v]=c[v]||h[p+v]||"";d&&(m[f-1]=b(m[f-1],r));var g=m.reduce(function(e,r,t){if(!r||"0"===r){var a=e[e.length-1];a&&a.index+a.length===t?a.length++:e.push({index:t,length:1})}return e},[]).sort(function(e,r){return r.length-e.length})[0],y=void 0;if(g&&1<g.length){var P=m.slice(0,g.index),E=m.slice(g.index+g.length);y=P.join(":")+"::"+E.join(":")}else y=m.join(":");return o&&(y+="%"+o),y}return e}var P=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,E=void 0==="".match(/(){0}/)[1];function _(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t={},a=!1!==r.iri?h:c;"suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e);var s=e.match(P);if(s){E?(t.scheme=s[1],t.userinfo=s[3],t.host=s[4],t.port=parseInt(s[5],10),t.path=s[6]||"",t.query=s[7],t.fragment=s[8],isNaN(t.port)&&(t.port=s[5])):(t.scheme=s[1]||void 0,t.userinfo=-1!==e.indexOf("@")?s[3]:void 0,t.host=-1!==e.indexOf("//")?s[4]:void 0,t.port=parseInt(s[5],10),t.path=s[6]||"",t.query=-1!==e.indexOf("?")?s[7]:void 0,t.fragment=-1!==e.indexOf("#")?s[8]:void 0,isNaN(t.port)&&(t.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?s[4]:void 0)),t.host&&(t.host=y(b(t.host,a),a)),t.reference=void 0!==t.scheme||void 0!==t.userinfo||void 0!==t.host||void 0!==t.port||t.path||void 0!==t.query?void 0===t.scheme?"relative":void 0===t.fragment?"absolute":"uri":"same-document",r.reference&&"suffix"!==r.reference&&r.reference!==t.reference&&(t.error=t.error||"URI is not a "+r.reference+" reference.");var o=d[(r.scheme||t.scheme||"").toLowerCase()];if(r.unicodeSupport||o&&o.unicodeSupport)g(t,a);else{if(t.host&&(r.domainHost||o&&o.domainHost))try{t.host=v.toASCII(t.host.replace(a.PCT_ENCODED,f).toLowerCase())}catch(e){t.error=t.error||"Host's domain name can not be converted to ASCII via punycode: "+e}g(t,c)}o&&o.parse&&o.parse(t,r)}else t.error=t.error||"URI can not be parsed.";return t}var F=/^\.\.?\//,x=/^\/\.(\/|$)/,R=/^\/\.\.(\/|$)/,$=/^\/?(?:.|\n)*?(?=\/|$)/;function D(e){for(var r=[];e.length;)if(e.match(F))e=e.replace(F,"");else if(e.match(x))e=e.replace(x,"/");else if(e.match(R))e=e.replace(R,"/"),r.pop();else if("."===e||".."===e)e="";else{var t=e.match($);if(!t)throw new Error("Unexpected dot segment condition");var a=t[0];e=e.slice(a.length),r.push(a)}return r.join("")}function j(r){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=t.iri?h:c,a=[],s=d[(t.scheme||r.scheme||"").toLowerCase()];if(s&&s.serialize&&s.serialize(r,t),r.host)if(e.IPV6ADDRESS.test(r.host));else if(t.domainHost||s&&s.domainHost)try{r.host=t.iri?v.toUnicode(r.host):v.toASCII(r.host.replace(e.PCT_ENCODED,f).toLowerCase())}catch(e){r.error=r.error||"Host's domain name can not be converted to "+(t.iri?"Unicode":"ASCII")+" via punycode: "+e}g(r,e),"suffix"!==t.reference&&r.scheme&&(a.push(r.scheme),a.push(":"));var o,i,n,l=(i=!1!==t.iri?h:c,n=[],void 0!==(o=r).userinfo&&(n.push(o.userinfo),n.push("@")),void 0!==o.host&&n.push(y(b(String(o.host),i),i).replace(i.IPV6ADDRESS,function(e,r,t){return"["+r+(t?"%25"+t:"")+"]"})),"number"==typeof o.port&&(n.push(":"),n.push(o.port.toString(10))),n.length?n.join(""):void 0);if(void 0!==l&&("suffix"!==t.reference&&a.push("//"),a.push(l),r.path&&"/"!==r.path.charAt(0)&&a.push("/")),void 0!==r.path){var u=r.path;t.absolutePath||s&&s.absolutePath||(u=D(u)),void 0===l&&(u=u.replace(/^\/\//,"/%2F")),a.push(u)}return void 0!==r.query&&(a.push("?"),a.push(r.query)),void 0!==r.fragment&&(a.push("#"),a.push(r.fragment)),a.join("")}function I(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a={};return arguments[3]||(e=_(j(e,t),t),r=_(j(r,t),t)),!(t=t||{}).tolerant&&r.scheme?(a.scheme=r.scheme,a.userinfo=r.userinfo,a.host=r.host,a.port=r.port,a.path=D(r.path||""),a.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(a.userinfo=r.userinfo,a.host=r.host,a.port=r.port,a.path=D(r.path||""),a.query=r.query):(r.path?("/"===r.path.charAt(0)?a.path=D(r.path):(a.path=void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:r.path:"/"+r.path,a.path=D(a.path)),a.query=r.query):(a.path=e.path,a.query=void 0!==r.query?r.query:e.query),a.userinfo=e.userinfo,a.host=e.host,a.port=e.port),a.scheme=e.scheme),a.fragment=r.fragment,a}function O(e,r){return e&&e.toString().replace(r&&r.iri?h.PCT_ENCODED:c.PCT_ENCODED,f)}var Q={scheme:"http",domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){return e.port!==("https"!==String(e.scheme).toLowerCase()?80:443)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}},V={scheme:"https",domainHost:Q.domainHost,parse:Q.parse,serialize:Q.serialize},H={},M="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",B="[0-9A-Fa-f]",K=k(k("%[EFef]"+B+"%"+B+B+"%"+B+B)+"|"+k("%[89A-Fa-f]"+B+"%"+B+B)+"|"+k("%"+B+B)),J=C("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",'[\\"\\\\]'),Z=new RegExp(M,"g"),G=new RegExp(K,"g"),Y=new RegExp(C("[^]","[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]","[\\.]",'[\\"]',J),"g"),W=new RegExp(C("[^]",M,"[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),"g"),X=W;function ee(e){var r=f(e);return r.match(Z)?r:e}var re={scheme:"mailto",parse:function(e,r){var t=e,a=t.to=t.path?t.path.split(","):[];if(t.path=void 0,t.query){for(var s=!1,o={},i=t.query.split("&"),n=0,l=i.length;n<l;++n){var u=i[n].split("=");switch(u[0]){case"to":for(var c=u[1].split(","),h=0,d=c.length;h<d;++h)a.push(c[h]);break;case"subject":t.subject=O(u[1],r);break;case"body":t.body=O(u[1],r);break;default:s=!0,o[O(u[0],r)]=O(u[1],r)}}s&&(t.headers=o)}t.query=void 0;for(var f=0,p=a.length;f<p;++f){var m=a[f].split("@");if(m[0]=O(m[0]),r.unicodeSupport)m[1]=O(m[1],r).toLowerCase();else try{m[1]=v.toASCII(O(m[1],r).toLowerCase())}catch(e){t.error=t.error||"Email address's domain name can not be converted to ASCII via punycode: "+e}a[f]=m.join("@")}return t},serialize:function(e,r){var t,a=e,s=null!=(t=e.to)?t instanceof Array?t:"number"!=typeof t.length||t.split||t.setInterval||t.call?[t]:Array.prototype.slice.call(t):[];if(s){for(var o=0,i=s.length;o<i;++o){var n=String(s[o]),l=n.lastIndexOf("@"),u=n.slice(0,l).replace(G,ee).replace(G,p).replace(Y,m),c=n.slice(l+1);try{c=r.iri?v.toUnicode(c):v.toASCII(O(c,r).toLowerCase())}catch(e){a.error=a.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+e}s[o]=u+"@"+c}a.path=s.join(",")}var h=e.headers=e.headers||{};e.subject&&(h.subject=e.subject),e.body&&(h.body=e.body);var d=[];for(var f in h)h[f]!==H[f]&&d.push(f.replace(G,ee).replace(G,p).replace(W,m)+"="+h[f].replace(G,ee).replace(G,p).replace(X,m));return d.length&&(a.query=d.join("&")),a}},te=/^([^\:]+)\:(.*)/,ae={scheme:"urn",parse:function(e,r){var t=e.path&&e.path.match(te),a=e;if(t){var s=r.scheme||a.scheme||"urn",o=t[1].toLowerCase(),i=t[2],n=d[s+":"+(r.nid||o)];a.nid=o,a.nss=i,a.path=void 0,n&&(a=n.parse(a,r))}else a.error=a.error||"URN can not be parsed.";return a},serialize:function(e,r){var t=e.nid,a=d[(r.scheme||e.scheme||"urn")+":"+(r.nid||t)];a&&(e=a.serialize(e,r));var s=e;return s.path=(t||r.nid)+":"+e.nss,s}},se=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,oe={scheme:"urn:uuid",parse:function(e,r){var t=e;return t.uuid=t.nss,t.nss=void 0,r.tolerant||t.uuid&&t.uuid.match(se)||(t.error=t.error||"UUID is not valid."),t},serialize:function(e,r){var t=e;return t.nss=(e.uuid||"").toLowerCase(),t}};d[Q.scheme]=Q,d[V.scheme]=V,d[re.scheme]=re,d[ae.scheme]=ae,d[oe.scheme]=oe,e.SCHEMES=d,e.pctEncChar=m,e.pctDecChars=f,e.parse=_,e.removeDotSegments=D,e.serialize=j,e.resolveComponents=I,e.resolve=function(e,r,t){var a=function(e,r){var t=e;if(r)for(var a in r)t[a]=r[a];return t}({scheme:"null"},t);return j(I(_(e,a),_(r,a),a,!0),a)},e.normalize=function(e,r){return"string"==typeof e?e=j(_(e,r),r):"object"===a(e)&&(e=_(j(e,r),r)),e},e.equal=function(e,r,t){return"string"==typeof e?e=j(_(e,t),t):"object"===a(e)&&(e=j(e,t)),"string"==typeof r?r=j(_(r,t),t):"object"===a(r)&&(r=j(r,t)),e===r},e.escapeComponent=function(e,r){return e&&e.toString().replace(r&&r.iri?h.ESCAPE:c.ESCAPE,m)},e.unescapeComponent=O,Object.defineProperty(e,"__esModule",{value:!0})}("object"==typeof t&&void 0!==r?t:a.URI=a.URI||{})},{}],ajv:[function(a,e,r){"use strict";var n=a("./compile"),d=a("./compile/resolve"),t=a("./cache"),f=a("./compile/schema_obj"),s=a("fast-json-stable-stringify"),o=a("./compile/formats"),i=a("./compile/rules"),l=a("./data"),u=a("./compile/util");(e.exports=g).prototype.validate=function(e,r){var t;if("string"==typeof e){if(!(t=this.getSchema(e)))throw new Error('no schema with key or ref "'+e+'"')}else{var a=this._addSchema(e);t=a.validate||this._compile(a)}var s=t(r);!0!==t.$async&&(this.errors=t.errors);return s},g.prototype.compile=function(e,r){var t=this._addSchema(e,void 0,r);return t.validate||this._compile(t)},g.prototype.addSchema=function(e,r,t,a){if(Array.isArray(e)){for(var s=0;s<e.length;s++)this.addSchema(e[s],void 0,t,a);return this}var o=this._getId(e);if(void 0!==o&&"string"!=typeof o)throw new Error("schema id must be string");return b(this,r=d.normalizeId(r||o)),this._schemas[r]=this._addSchema(e,t,a,!0),this},g.prototype.addMetaSchema=function(e,r,t){return this.addSchema(e,r,t,!0),this},g.prototype.validateSchema=function(e,r){var t=e.$schema;if(void 0!==t&&"string"!=typeof t)throw new Error("$schema must be a string");if(!(t=t||this._opts.defaultMeta||(a=this,s=a._opts.meta,a._opts.defaultMeta="object"==typeof s?a._getId(s)||s:a.getSchema(p)?p:void 0,a._opts.defaultMeta)))return this.logger.warn("meta-schema not available"),!(this.errors=null);var a,s;var o,i=this._formats.uri;this._formats.uri="function"==typeof i?this._schemaUriFormatFunc:this._schemaUriFormat;try{o=this.validate(t,e)}finally{this._formats.uri=i}if(!o&&r){var n="schema is invalid: "+this.errorsText();if("log"!=this._opts.validateSchema)throw new Error(n);this.logger.error(n)}return o},g.prototype.getSchema=function(e){var r=y(this,e);switch(typeof r){case"object":return r.validate||this._compile(r);case"string":return this.getSchema(r);case"undefined":return function(e,r){var t=d.schema.call(e,{schema:{}},r);if(t){var a=t.schema,s=t.root,o=t.baseId,i=n.call(e,a,s,void 0,o);return e._fragments[r]=new f({ref:r,fragment:!0,schema:a,root:s,baseId:o,validate:i}),i}}(this,e)}},g.prototype.removeSchema=function(e){if(e instanceof RegExp)return P(this,this._schemas,e),P(this,this._refs,e),this;switch(typeof e){case"undefined":return P(this,this._schemas),P(this,this._refs),this._cache.clear(),this;case"string":var r=y(this,e);return r&&this._cache.del(r.cacheKey),delete this._schemas[e],delete this._refs[e],this;case"object":var t=this._opts.serialize,a=t?t(e):e;this._cache.del(a);var s=this._getId(e);s&&(s=d.normalizeId(s),delete this._schemas[s],delete this._refs[s])}return this},g.prototype.addFormat=function(e,r){"string"==typeof r&&(r=new RegExp(r));return this._formats[e]=r,this},g.prototype.errorsText=function(e,r){if(!(e=e||this.errors))return"No errors";for(var t=void 0===(r=r||{}).separator?", ":r.separator,a=void 0===r.dataVar?"data":r.dataVar,s="",o=0;o<e.length;o++){var i=e[o];i&&(s+=a+i.dataPath+" "+i.message+t)}return s.slice(0,-t.length)},g.prototype._addSchema=function(e,r,t,a){if("object"!=typeof e&&"boolean"!=typeof e)throw new Error("schema should be object or boolean");var s=this._opts.serialize,o=s?s(e):e,i=this._cache.get(o);if(i)return i;a=a||!1!==this._opts.addUsedSchema;var n=d.normalizeId(this._getId(e));n&&a&&b(this,n);var l,u=!1!==this._opts.validateSchema&&!r;u&&!(l=n&&n==d.normalizeId(e.$schema))&&this.validateSchema(e,!0);var c=d.ids.call(this,e),h=new f({id:n,schema:e,localRefs:c,cacheKey:o,meta:t});"#"!=n[0]&&a&&(this._refs[n]=h);this._cache.put(o,h),u&&l&&this.validateSchema(e,!0);return h},g.prototype._compile=function(t,e){if(t.compiling)return(t.validate=s).schema=t.schema,s.errors=null,s.root=e||s,!0===t.schema.$async&&(s.$async=!0),s;var r,a;t.compiling=!0,t.meta&&(r=this._opts,this._opts=this._metaOpts);try{a=n.call(this,t.schema,e,t.localRefs)}finally{t.compiling=!1,t.meta&&(this._opts=r)}return t.validate=a,t.refs=a.refs,t.refVal=a.refVal,t.root=a.root,a;function s(){var e=t.validate,r=e.apply(this,arguments);return s.errors=e.errors,r}},g.prototype.compileAsync=a("./compile/async");var c=a("./keyword");g.prototype.addKeyword=c.add,g.prototype.getKeyword=c.get,g.prototype.removeKeyword=c.remove;var h=a("./compile/error_classes");g.ValidationError=h.Validation,g.MissingRefError=h.MissingRef,g.$dataMetaSchema=l;var p="http://json-schema.org/draft-07/schema",m=["removeAdditional","useDefaults","coerceTypes"],v=["/properties"];function g(e){if(!(this instanceof g))return new g(e);e=this._opts=u.copy(e)||{},function(e){var r=e._opts.logger;if(!1===r)e.logger={log:_,warn:_,error:_};else{if(void 0===r&&(r=console),!("object"==typeof r&&r.log&&r.warn&&r.error))throw new Error("logger must implement log, warn and error methods");e.logger=r}}(this),this._schemas={},this._refs={},this._fragments={},this._formats=o(e.format);var r=this._schemaUriFormat=this._formats["uri-reference"];this._schemaUriFormatFunc=function(e){return r.test(e)},this._cache=e.cache||new t,this._loadingSchemas={},this._compilations=[],this.RULES=i(),this._getId=function(e){switch(e.schemaId){case"auto":return S;case"id":return E;default:return w}}(e),e.loopRequired=e.loopRequired||1/0,"property"==e.errorDataPath&&(e._errorDataPathProperty=!0),void 0===e.serialize&&(e.serialize=s),this._metaOpts=function(e){for(var r=u.copy(e._opts),t=0;t<m.length;t++)delete r[m[t]];return r}(this),e.formats&&function(e){for(var r in e._opts.formats){var t=e._opts.formats[r];e.addFormat(r,t)}}(this),function(e){var r;e._opts.$data&&(r=a("./refs/data.json"),e.addMetaSchema(r,r.$id,!0));if(!1===e._opts.meta)return;var t=a("./refs/json-schema-draft-07.json");e._opts.$data&&(t=l(t,v));e.addMetaSchema(t,p,!0),e._refs["http://json-schema.org/schema"]=p}(this),"object"==typeof e.meta&&this.addMetaSchema(e.meta),function(e){var r=e._opts.schemas;if(!r)return;if(Array.isArray(r))e.addSchema(r);else for(var t in r)e.addSchema(r[t],t)}(this)}function y(e,r){return r=d.normalizeId(r),e._schemas[r]||e._refs[r]||e._fragments[r]}function P(e,r,t){for(var a in r){var s=r[a];s.meta||t&&!t.test(a)||(e._cache.del(s.cacheKey),delete r[a])}}function E(e){return e.$id&&this.logger.warn("schema $id ignored",e.$id),e.id}function w(e){return e.id&&this.logger.warn("schema id ignored",e.id),e.$id}function S(e){if(e.$id&&e.id&&e.$id!=e.id)throw new Error("schema $id is different from id");return e.$id||e.id}function b(e,r){if(e._schemas[r]||e._refs[r])throw new Error('schema with key or id "'+r+'" already exists')}function _(){}},{"./cache":1,"./compile":5,"./compile/async":2,"./compile/error_classes":3,"./compile/formats":4,"./compile/resolve":6,"./compile/rules":7,"./compile/schema_obj":8,"./compile/util":10,"./data":11,"./keyword":38,"./refs/data.json":39,"./refs/json-schema-draft-07.json":40,"fast-json-stable-stringify":42}]},{},[])("ajv")});
//# sourceMappingURL=ajv.min.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"id":"http://json-schema.org/draft-04/schema#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true}},"type":"object","properties":{"id":{"type":"string","format":"uri"},"$schema":{"type":"string","format":"uri"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"boolean","default":false},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"boolean","default":false},"maxLength":{"$ref":"#/definitions/positiveInteger"},"minLength":{"$ref":"#/definitions/positiveIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/positiveInteger"},"minItems":{"$ref":"#/definitions/positiveIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxProperties":{"$ref":"#/definitions/positiveInteger"},"minProperties":{"$ref":"#/definitions/positiveIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"]},"default":{}}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sampling__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonschema__ = __webpack_require__(10);
/* eslint-env commonjs */





/*
* Supports the `browser.study` webExtensionExperiment api.
*
* See API.md at:
* https://github.com/mozilla/shield-studies-addon-utils/blob/develop/docs/api.md
*
* Note: There are a number of methods that won't work if the
* setup method has not executed (they perform a check with the
* `throwIfNotSetup` method). The setup method ensures that the
* studySetup data passed in is valid per the studySetup schema.
*
* Tests for this module are at /test-addon.
*/

const UTILS_VERSION = __webpack_require__(7).version;
const PACKET_VERSION = 3;

const Ajv = __webpack_require__(0);

const { Services } = ChromeUtils.import(
  "resource://gre/modules/Services.jsm",
  {},
);
const { Preferences } = ChromeUtils.import(
  "resource://gre/modules/Preferences.jsm",
  {},
);

const { AddonManager } = ChromeUtils.import(
  "resource://gre/modules/AddonManager.jsm",
  {},
);
Cu.importGlobalProperties(["URL", "crypto", "URLSearchParams"]);

const { ExtensionUtils } = ChromeUtils.import(
  "resource://gre/modules/ExtensionUtils.jsm",
  {},
);
// eslint-disable-next-line no-undef
const { ExtensionError } = ExtensionUtils;

const logger = (this.logger = createShieldStudyLogger("shield-study-utils"));

// telemetry utils
const CID = ChromeUtils.import("resource://gre/modules/ClientID.jsm", {});
const { TelemetryController } = ChromeUtils.import(
  "resource://gre/modules/TelemetryController.jsm",
  null,
);
const { TelemetryEnvironment } = ChromeUtils.import(
  "resource://gre/modules/TelemetryEnvironment.jsm",
  null,
);

/**
 * Telemetry Probe JSON schema validation (via AJV at runtime)
 *
 * Schemas here are used for:
 *  - Telemetry (Ensure correct Parquet format for different types of
 *    outbound packets):
 *    - "shield-study": shield study state and outcome data common to all
 *      shield studies.
 *    - "shield-study-addon": addon-specific probe data, with `attributes`
 *      (used to capture feature-specific state) sent as Map(string,string).
 *    - "shield-study-error": data used to notify, group and count some kinds
 *      of errors from shield studies
 */
const schemas = {
  // Telemetry PingType schemas
  "shield-study": __webpack_require__(6), // eslint-disable-line max-len
  "shield-study-addon": __webpack_require__(4), // eslint-disable-line max-len
  "shield-study-error": __webpack_require__(5), // eslint-disable-line max-len
};


/**
 * Schemas for enforcing objects relating to the public `browser.study` api
 */
class Guard {
  /**
   * @param {object} identifiedSchemas a jsonschema with ids
   *
   */
  constructor(identifiedSchemas) {
    this.ajv = new Ajv({ schemas: identifiedSchemas, schemaId: "auto" });
    this.ajv.addMetaSchema(__webpack_require__(1));
  }

  it(schemaId, arg, msg = null) {
    const valid = this.ajv.validate(schemaId, arg);
    if (!valid) {
      throw new ExtensionError(
        `GuardError: ${schemaId} ${JSON.stringify(
          this.ajv.errors,
        )} ${JSON.stringify(arg)} ${msg}`,
      );
    }
  }
}
const guard = new Guard(__webpack_require__(8)[0].types);

/**  Simple spread/rest based merge, using Object.assign.
 *
 * Right-most overrides, top level only, by full value replacement.
 *
 * Note: Unlike deep merges might not handle symbols and other things.
 *
 * @param {...Object} sources - 1 or more sources
 * @returns {Object} - the resulting merged object
 */
function merge(...sources) {
  return Object.assign({}, ...sources);
}

/**
 * Appends a query string to a url.
 * @param {string} url - a base url to append; must be static (data) or external
 * @param {Object} args - query arguments, one or more object literal used to
 * build a query string
 *
 * @returns {string} - an absolute url appended with a query string
 */
function mergeQueryArgs(url, ...args) {
  const U = new URL(url);
  // get the query string already attached to url, if it exists
  let q = U.search || "?";
  // create an interface to interact with the query string
  q = new URLSearchParams(q);
  const merged = merge({}, ...args);
  // Set each search parameter in "merged" to its value in the query string,
  // building up the query string one search parameter at a time.
  Object.keys(merged).forEach(k => {
    q.set(k, merged[k]);
  });
  // append our new query string to the URL object made with "url"
  U.search = q.toString();
  // return the full url, with the appended query string
  return U.toString();
}

/**
 * Class representing utilities for shield studies.
 */
class StudyUtils {
  /**
   * Create a StudyUtils instance to power the `browser.study` API
   *
   * About `this._internals`:
   * - variation:  (chosen variation, `setup` )
   * - isEnding: bool  `endStudy`
   * - isSetup: bool   `setup`
   * - isFirstRun: bool `setup`, based on pref
   * - studySetup: bool  `setup` the config
   * - seenTelemetry: object of lists of seen telemetry by bucket
   * - prefs: object of all created prefs and their names
   * - endingRequested: string of ending name
   * - endingReturns: object with useful ending instructions
   *
   * Returned by `studyDebug.getInternals()` for testing
   * Reset by `studyDebug.reset`  and `studyUtils.reset`
   *
   * About: `this._extensionManifest`
   * - mirrors the extensionManifest at the time of api creation
   * - used by uninstall, and to name the firstRunTimestamp pref
   *
   */
  constructor() {
    // Expose sampling methods onto the exported studyUtils singleton
    this.sampling = __WEBPACK_IMPORTED_MODULE_0__sampling__["a" /* default */];
    // expose schemas
    this.schemas = schemas;
    // expose jsonschema validation methods
    this.jsonschema = __WEBPACK_IMPORTED_MODULE_1__jsonschema__["a" /* default */];

    this._extensionManifest = {};

    // internals, also used by `studyDebug.getInternals()`
    // either setup() or reset() will create, using extensionManifest
    this._internals = {};
  }

  _createInternals() {
    if (!this._extensionManifest) {
      throw new ExtensionError(
        "_createInternals needs `setExtensionManifest`. This should be done by `getApi`.",
      );
    }
    function makeWidgetId(id) {
      id = id.toLowerCase();
      // FIXME: This allows for collisions.
      // WebExt hasn't ever had a problem.
      return id.replace(/[^a-z0-9_-]/g, "_");
    }

    const widgetId = makeWidgetId(
      this._extensionManifest.applications.gecko.id,
    );

    const internals = {
      widgetId,
      variation: undefined,
      studySetup: undefined,
      isFirstRun: false,
      isSetup: false,
      isEnding: false,
      isEnded: false,
      seenTelemetry: {
        "shield-study": [],
        "shield-study-addon": [],
        "shield-study-error": [],
      },
      prefs: {
        firstRunTimestamp: `shield.${widgetId}.firstRunTimestamp`,
      },
      endingRequested: undefined,
      endingReturned: undefined,
    };
    Object.seal(internals);
    return internals;
  }

  /**
   * Checks if the StudyUtils.setup method has been called
   * @param {string} name - the name of a StudyUtils method
   * @returns {void}
   */
  throwIfNotSetup(name = "unknown") {
    if (!this._internals.isSetup)
      throw new ExtensionError(
        name + ": this method can't be used until `setup` is called",
      );
  }

  /**
   * Validates the studySetup object passed in from the addon.
   * @param {Object} studySetup - the studySetup object, see schema.studySetup.json
   * @returns {StudyUtils} - the StudyUtils class instance
   */
  async setup(studySetup) {
    if (!this._internals) {
      this._internals = this._createInternals();
    }

    logger.debug(`setting up! -- ${JSON.stringify(studySetup)}`);

    if (this._internals.isSetup) {
      throw new ExtensionError("StudyUtils is already setup");
    }
    guard.it("studySetup", studySetup, "(in studySetup)");

    // variation:  decide and set
    const variation =
      studySetup.weightedVariations[studySetup.testing.variationName] ||
      (await this._deterministicVariation(
        studySetup.activeExperimentName,
        studySetup.weightedVariations,
      ));
    logger.debug(`setting up: variation ${variation.name}`);

    this._internals.variation = variation;
    this._internals.studySetup = studySetup;
    this._internals.isSetup = true;

    // isFirstRun?  ever seen before?
    const firstRunTimestamp = this.getFirstRunTimestamp();
    // 'firstSeen' is the first telemetry we attempt to send.  needs 'isSetup'
    if (firstRunTimestamp) {
      this._internals.isFirstRun = false;
    } else {
      // 'enter' telemetry, and firstSeen
      await studyUtils.firstSeen();
    }

    // Note: is allowed  to enroll is handled at API.
    // FIXME: 5.1 maybe do it here?
    return this;
  }

  /**
   * Resets the state of the study. Suggested use is for testing.
   * @returns {Object} internals internals
   */
  reset() {
    this._internals = this._createInternals();
    this.resetFirstRunTimestamp();
  }

  /**
   * Gets the variation for the StudyUtils instance.
   * @returns {Object} - the study variation for this user
   */
  getVariation() {
    this.throwIfNotSetup("getvariation");
    logger.debug(`getVariation: ${JSON.stringify(this._internals.variation)}`);
    return this._internals.variation;
  }

  setExtensionManifest(extensionManifest) {
    this._extensionManifest = extensionManifest;
  }

  getFirstRunTimestamp() {
    return Number(
      Services.prefs.getStringPref(this._internals.prefs.firstRunTimestamp, 0),
    );
  }

  setFirstRunTimestamp(timestamp) {
    const pref = this._internals.prefs.firstRunTimestamp;
    return Services.prefs.setStringPref(pref, "" + timestamp);
  }

  resetFirstRunTimestamp(timestamp) {
    const pref = this._internals.prefs.firstRunTimestamp;
    Preferences.reset(pref);
  }

  /** Calculate time left in study given `studySetup.expire.days` and firstRunTimestamp
   *
   * @return {Number} timeUntilExpire Either the time left or Number.MAX_SAFE_INTEGER
   */
  getTimeUntilExpire() {
    const days = this._internals.studySetup.expire.days;
    if (days) {
      // days in ms
      const ms = days * 86400 * 1000;
      const firstrun = this.getFirstRunTimestamp();
      return firstrun + ms - Date.now();
    }
    return Number.MAX_SAFE_INTEGER; // approx 286,000 years
  }

  /**
   * @async
   * Gets the telemetry client ID for the user.
   * @returns {string} - the telemetry client ID
   */
  async getTelemetryId() {
    const id = TelemetryController.clientID;
    /* istanbul ignore next */
    if (id === undefined) {
      return CID.ClientIDImpl._doLoadClientID();
    }
    return id;
  }

  /**
   * Gets the Shield recipe client ID.
   * @returns {string} - the Shield recipe client ID.
   */
  getShieldId() {
    const key = "extensions.shield-recipe-client.user_id";
    return Services.prefs.getStringPref(key, "");
  }

  /**
   * Packages information about the study into an object.
   * @returns {Object} - study information, see schema.studySetup.json
   */
  info() {
    logger.debug("getting info");
    this.throwIfNotSetup("info");

    const studyInfo = {
      activeExperimentName: this._internals.studySetup.activeExperimentName,
      isFirstRun: this._internals.isFirstRun,
      firstRunTimestamp: this.getFirstRunTimestamp(),
      variation: this.getVariation(),
      shieldId: this.getShieldId(),
      timeUntilExpire: this.getTimeUntilExpire(),
    };
    guard.it("studyInfoObject", studyInfo, "(in studyInfo)");
    return studyInfo;
  }

  /**
   * Get the telemetry configuration for the study.
   * @returns {Object} - the telemetry cofiguration, see schema.studySetup.json
   */
  get telemetryConfig() {
    this.throwIfNotSetup("telemetryConfig");
    return this._internals.studySetup.telemetry;
  }

  /**
   * @async
   * Deterministically selects and returns the study variation for the user.
   * @param {string} activeExperimentName name to use as part of the hash
   * @param {Object[]} weightedVariations - see schema.weightedVariations.json
   * @param {Number} fraction - a number (0 <= fraction < 1); can be set explicitly for testing
   * @returns {Object} - the study variation for this user
   */
  async _deterministicVariation(
    activeExperimentName,
    weightedVariations,
    fraction = null,
  ) {
    // this is the standard arm choosing method
    // TODO, allow 'pioneer' algorithm
    if (fraction === null) {
      // hash the studyName and telemetryId to get the same branch every time.
      const clientId = await this.getTelemetryId();
      fraction = await this.sampling.hashFraction(
        activeExperimentName + clientId,
        12,
      );
    }
    logger.debug(`_deterministicVariation`, weightedVariations);
    return this.sampling.chooseWeighted(weightedVariations, fraction);
  }

  /**
   * Sends an 'enter' telemetry ping for the study; should be called on addon
   * startup for the reason ADDON_INSTALL. For more on study states like 'enter'
   * see ABOUT.md at github.com/mozilla/shield-studies-addon-template
   *
   * Side effects:
   * - sends 'enter'
   * - sets this._internals.prefs.firstRunTimestamp to Date.now()
   *
   * @returns {void}
   */
  async firstSeen() {
    this.throwIfNotSetup("firstSeen uses telemetry.");
    logger.debug(`attempting firstSeen`);
    this._internals.isFirstRun = true;
    await this._telemetry({ study_state: "enter" }, "shield-study");
    this.setFirstRunTimestamp("" + Date.now());
  }

  /**
   * Marks the study's telemetry pings as being part of this experimental
   * cohort in a way that downstream data pipeline tools
   * (like ExperimentsViewer) can use it.
   * @returns {void}
   */
  setActive() {
    this.throwIfNotSetup("setActive uses telemetry.");
    const info = this.info();
    logger.debug(
      "marking TelemetryEnvironment",
      info.activeExperimentName,
      info.variation.name,
    );
    TelemetryEnvironment.setExperimentActive(
      info.activeExperimentName,
      info.variation.name,
    );
  }

  /**
   * Removes the study from the active list of telemetry experiments
   * @returns {void}
   */
  unsetActive() {
    this.throwIfNotSetup("unsetActive uses telemetry.");
    const info = this.info();
    logger.debug(
      "unmarking TelemetryEnvironment",
      info.activeExperimentName,
      info.variation.name,
    );
    TelemetryEnvironment.setExperimentInactive(info.activeExperimentName);
  }

  /**
   * Adds the study to the active list of telemetry experiments and sends the
   * "installed" telemetry ping if applicable
   * @param {string} reason - The reason the addon has started up
   * @returns {void}
   */
  async startup() {
    this.throwIfNotSetup("startup");
    const isFirstRun = this._internals.isFirstRun;
    logger.debug(`startup.  setting active. isFirstRun? ${isFirstRun}`);
    this.setActive();
    if (isFirstRun) {
      await this._telemetry({ study_state: "installed" }, "shield-study");
    }
  }

  /**
   * @async
   * Ends the study:
   *  - Removes the study from the active list of telemetry experiments
   *  - Sends a telemetry ping about the nature of the ending
   *    (positive, neutral, negative)
   *  - Sends an exit telemetry ping
   * @param {string} endingName - The reason the study is ending, see
   *    schema.studySetup.json
   * @returns {Object} endingReturned _internals.endingReturned
   */
  async endStudy(endingName) {
    this.throwIfNotSetup("endStudy");

    // also handle default endings.
    const alwaysHandle = ["ineligible", "expired", "user-disable"];
    let ending = this._internals.studySetup.endings[endingName];
    if (!ending) {
      // a 'no-action' ending is okay for the 'always handle'
      if (alwaysHandle.includes(endingName)) ending = {};
      else throw new ExtensionError(`${endingName} isn't known ending`);
    }

    // throw if already ending
    if (this._internals.isEnding) {
      logger.debug("endStudy, already ending!");
      throw new ExtensionError(
        `endStudy, requested:  ${endingName}, but already ending ${
          this._internals.endingRequested
        }`,
      );
    }

    // if not already ending, claim it.  We are first!
    this._internals.isEnding = true;
    this._internals.endingRequested = endingName;

    logger.debug(`endStudy ${endingName}`);
    await this.unsetActive();

    // do the work to end the studyUtils involvement

    // 1. Telemetry for ending
    const { fullname } = ending;
    let finalName = endingName;
    switch (endingName) {
      // handle the 'formal' endings (defined in parquet)
      case "ineligible":
      case "expired":
      case "user-disable":
      case "ended-positive":
      case "ended-neutral":
      case "ended-negative":
        await this._telemetry(
          {
            study_state: endingName,
            study_state_fullname: fullname || endingName,
          },
          "shield-study",
        );
        break;
      default:
        (finalName = ending.category || "ended-neutral"),
        // call all 'unknowns' as "ended-neutral"
        await this._telemetry(
          {
            study_state: finalName,
            study_state_fullname: endingName,
          },
          "shield-study",
        );
        break;
    }
    await this._telemetry({ study_state: "exit" }, "shield-study");

    // 2. create ending instructions for the webExt to use
    const out = {
      shouldUninstall: true,
      urls: [],
    };

    // baseUrls: needs to be appended with query arguments before use,
    // exactUrls: used as is
    const { baseUrls, exactUrls } = ending;
    if (exactUrls) {
      out.urls.push(...exactUrls);
    }
    const qa = await this.endingQueryArgs();
    qa.reason = finalName;
    qa.fullreason = endingName;

    if (baseUrls) {
      for (const baseUrl of baseUrls) {
        const fullUrl = mergeQueryArgs(baseUrl, qa);
        out.urls.push(fullUrl);
      }
    }

    out.queryArgs = qa;

    // 3. Tidy up the internals.
    this._internals.endingReturned = out;
    this._internals.isEnded = true; // done!
    return out;
  }

  /**
   * @async
   * Builds an object whose properties are query arguments that can be
   * appended to a study ending url
   * @returns {Object} - the query arguments for the study
   */
  async endingQueryArgs() {
    this.throwIfNotSetup("endingQueryArgs");
    const info = this.info();
    const who = await this.getTelemetryId();
    const queryArgs = {
      shield: PACKET_VERSION,
      study: info.activeExperimentName,
      variation: info.variation.name,
      updateChannel: Services.appinfo.defaultUpdateChannel,
      fxVersion: Services.appinfo.version,
      addon: this._extensionManifest.version, // addon version
      who, // telemetry clientId
    };
    queryArgs.testing = Number(!this.telemetryConfig.removeTestingFlag);
    return queryArgs;
  }

  /**
   * @async
   * Validates and submits telemetry pings from StudyUtils.
   * @param {Object} data - the data to send as part of the telemetry packet
   * @param {string} bucket - the type of telemetry packet to be sent
   * @returns {Promise|boolean} - A promise that resolves with the ping id
   * once the ping is stored or sent, or false if
   *   - there is a validation error,
   *   - the packet is of type "shield-study-error"
   *   - the study's telemetryConfig.send is set to false
   */
  async _telemetry(data, bucket = "shield-study-addon") {
    this.throwIfNotSetup("_telemetry");
    logger.debug(`telemetry in:  ${bucket} ${JSON.stringify(data)}`);
    const info = this.info();
    logger.debug(`telemetry INFO: ${JSON.stringify(info)}`);

    const payload = {
      version: PACKET_VERSION,
      study_name: info.activeExperimentName,
      branch: info.variation.name,
      addon_version: this._extensionManifest.version,
      shield_version: UTILS_VERSION,
      type: bucket,
      data,
      testing: !this.telemetryConfig.removeTestingFlag,
    };

    let validation;
    try {
      validation = __WEBPACK_IMPORTED_MODULE_1__jsonschema__["a" /* default */].validate(payload, schemas[bucket]);
    } catch (err) {
      // Catch failures of unknown origin (could be library, addon, system...)
      // if validation broke, GIVE UP.
      logger.error(err);
      return false;
    }
    /*
    * Handle validation errors by sending a "shield-study-error"
    * telemetry ping with the error report.
    * If the invalid payload is itself of type "shield-study-error",
    * throw an error (to avoid a possible infinite loop).
    */
    if (validation.errors.length) {
      const errorReport = {
        error_id: "jsonschema-validation",
        error_source: "addon",
        severity: "fatal",
        message: JSON.stringify(validation.errors),
      };
      if (bucket === "shield-study-error") {
        logger.warn("cannot validate shield-study-error", data, bucket);
        return false; // just die, maybe should have a super escape hatch?
      }
      return this.telemetryError(errorReport);
    }
    logger.debug(`telemetry: ${JSON.stringify(payload)}`);

    // IFF it's a shield-study or error ping, which are few in number
    if (bucket === "shield-study" || bucket === "shield-study-error") {
      this._internals.seenTelemetry[bucket].push(payload);
    }

    // during developement, don't actually send
    if (!this.telemetryConfig.send) {
      logger.debug("NOT sending.  `telemetryConfig.send` is false");
      return false;
    }

    const telOptions = { addClientId: true, addEnvironment: true };
    return TelemetryController.submitExternalPing(bucket, payload, telOptions);
  }

  /**
   * @async
   * Validates and submits telemetry pings from the addon; mostly from
   * webExtension messages.
   * @param {Object} data - the data to send as part of the telemetry packet
   * @returns {Promise|boolean} - see StudyUtils._telemetry
   */
  async telemetry(data) {
    this.throwIfNotSetup("telemetry");
    logger.debug(`telemetry ${JSON.stringify(data)}`);
    const toSubmit = {
      attributes: data,
    };
    return this._telemetry(toSubmit, "shield-study-addon");
  }

  /**
   * Submits error report telemetry pings.
   * @param {Object} errorReport - the error report, see StudyUtils._telemetry
   * @returns {Promise|boolean} - see StudyUtils._telemetry
   */
  telemetryError(errorReport) {
    return this._telemetry(errorReport, "shield-study-error");
  }

  /**
   * Uninstalls the shield study addon, given its addon id.
   * @param {string} id - the addon id
   * @returns {void}
   */
  uninstall(id) {
    if (!id) id = this._extensionManifest.applications.gecko.id;
    if (!id) {
      throw new ExtensionError(
        "uninstall needs addon.id as arg or from setup.",
      );
    }
    logger.debug(`about to uninstall ${id}`);
    AddonManager.getAddonByID(id, addon => addon.uninstall());
  }
}

/**
 * Creates a logger for debugging.
 *
 * The pref to control this is "shieldStudy.logLevel"
 *
 * @param {string} logPrefix - the name of the Console instance
 * @param {string} level - level to use by default
 * @returns {Object} - the Console instance, see gre/modules/Console.jsm
 */
function createShieldStudyLogger(logPrefix, level = "Warn") {
  const prefName = "shieldStudy.logLevel";
  const ConsoleAPI = ChromeUtils.import(
    "resource://gre/modules/Console.jsm",
    {},
  ).ConsoleAPI;
  return new ConsoleAPI({
    maxLogLevel: level,
    maxLogLevelPref: prefName,
    prefix: logPrefix,
  });
}

// TODO, use the usual es6 exports
// Actually create the singleton.
const studyUtils = new StudyUtils();
this.studyUtils = studyUtils;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* eslint-env node */

// TODO, making this a seperate file means that we have to pass the error from the other compartment.

/**
 * Returns array of pings of type `type` in reverse sorted order by timestamp
 * first element is most recent ping
 *
 * searchTelemetryQuery
 * - type:  string or array of ping types
 * - n:  positive integer. at most n pings.
 * - timestamp:  only pings after this timestamp.
 * - headersOnly: boolean, just the 'headers' for the pings, not the full bodies.
 *
 * TODO: Fix shortcoming:
 * Some pings are sent immediately after one another and it's
 * original sending order is not reflected by the return of
 * TelemetryArchive.promiseArchivedPingList
 * Thus, we can currently only test that the last two pings are the
 * correct ones but not that their order is correct
 *
 *
 * @param {Object<backstagePass>} TelemetryArchive from TelemetryArchive.jsm
 * @param {ObjectsearchTelemetryQuery} searchTelemetryQuery See searchSentTelemetry
 *
 * @returns {Array} Array of found Telemetry Pings
 */
async function searchTelemetryArchive(TelemetryArchive, searchTelemetryQuery) {
  let { type } = searchTelemetryQuery;
  const { n, timestamp, headersOnly } = searchTelemetryQuery;
  // {type, id, timestampCreated}
  let pings = await TelemetryArchive.promiseArchivedPingList();
  if (type && !Array.isArray(type)) {
    type = [type];
  }
  if (type) pings = pings.filter(p => type.includes(p.type));

  if (timestamp) pings = pings.filter(p => p.timestampCreated > timestamp);

  if (pings.length === 0) {
    return Promise.resolve([]);
  }

  pings.sort((a, b) => b.timestampCreated - a.timestampCreated);

  if (n) pings = pings.slice(0, n);
  const pingData = headersOnly
    ? pings
    : pings.map(ping => TelemetryArchive.promiseArchivedPingById(ping.id));

  return Promise.all(pingData);
}

// TODO pings report, from the utility addon

module.exports = {
  searchTelemetryArchive,
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"$schema":"http://json-schema.org/draft-04/schema#","type":"object","title":"shield-study-addon","description":"`shield-study-addon` addon-specific probe data, with `attributes` sent as Map(s,s).","properties":{"version":{"type":"integer","title":"Version schema.  Will be 3","enum":[3]},"study_name":{"description":"Name of a particular study.  Usually the addon_id.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"branch":{"description":"Which branch (variation) of the study the user has.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"addon_version":{"description":"Semantic version of the addon.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"shield_version":{"description":"Which version of the shield-studies-addon-utils.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"testing":{"type":"boolean","description":"If `true`, this packet is a TESTING packet and can be safely ignored."},"data":{"type":"object","title":"Shield-Study-Addon 'data' field.","description":"`shield-study-addon` addon-specific probe data, with `attributes` sent as Map(s,s).","properties":{"attributes":{"type":"object","description":"Map(string, string) of attributes.","properties":{},"additionalProperties":{"type":"string"}}},"required":["attributes"]},"type":{"type":"string","description":"doc_type, restated","enum":["shield-study-addon"]}},"required":["version","study_name","branch","addon_version","shield_version","data","type"]}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"$schema":"http://json-schema.org/draft-04/schema#","type":"object","title":"shield-study-error","description":"`shield-study-error` data used to notify, group and count some kinds of errors from shield studies.","properties":{"version":{"type":"integer","title":"Version schema.  Will be 3","enum":[3]},"study_name":{"description":"Name of a particular study.  Usually the addon_id.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"branch":{"description":"Which branch (variation) of the study the user has.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"addon_version":{"description":"Semantic version of the addon.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"shield_version":{"description":"Which version of the shield-studies-addon-utils.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"testing":{"type":"boolean","description":"If `true`, this packet is a TESTING packet and can be safely ignored."},"data":{"type":"object","title":"Shield-Study-Error 'data' field","description":"`shield-study-error` data used to notify, group and count some kinds of errors from shield studies.","properties":{"error_id":{"description":"between 1,100 chars, no spaces, unicode ok.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"error_source":{"type":"string","description":"Where did the error originate.","enum":["addon","shield","firefox","unknown"]},"message":{"type":"string","minLength":1,"title":"Message schema.","description":"String of an error message."},"severity":{"type":"string","description":"An explanation about the purpose of this instance.","enum":["debug","info","warn","fatal","impossible"]},"attributes":{"type":"object","description":"Map(string, string) of attributes.","properties":{},"additionalProperties":{"type":"string"}},"error":{"type":"object","description":"(Future use), things like tracebacks.","properties":{},"additionalProperties":{"type":"string"}}},"required":["error_id","error_source"]},"type":{"type":"string","description":"doc_type, restated","enum":["shield-study-error"]}},"required":["version","study_name","branch","addon_version","shield_version","data","type"]}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"$schema":"http://json-schema.org/draft-04/schema#","type":"object","title":"shield-study","description":"`shield-study` state and outcome data.","properties":{"version":{"type":"integer","title":"Version schema.  Will be 3","enum":[3]},"study_name":{"description":"Name of a particular study.  Usually the addon_id.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"branch":{"description":"Which branch (variation) of the study the user has.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"addon_version":{"description":"Semantic version of the addon.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"shield_version":{"description":"Which version of the shield-studies-addon-utils.","type":"string","pattern":"^\\S+$","minLength":1,"maxLength":100},"testing":{"type":"boolean","description":"If `true`, this packet is a TESTING packet and can be safely ignored."},"data":{"type":"object","description":"`shield-study` state and outcome data.","properties":{"study_state":{"type":"string","description":"message about the most recent state of the study.","enum":["enter","exit","installed","ineligible","expired","user-disable","ended-positive","ended-neutral","ended-negative","active"]},"study_state_fullname":{"type":"string","description":"Second part of name of state, if any.  Study-specific for study-defined endings."},"attributes":{"type":"object","description":"Map(string, string) of attributes.","properties":{},"additionalProperties":{"type":"string"}}},"required":["study_state"]},"type":{"type":"string","description":"doc_type, restated","enum":["shield-study"]}},"required":["version","study_name","branch","addon_version","shield_version","data","type"]}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"name":"shield-studies-addon-utils","description":"Utilities for building Shield-Study Mozilla Firefox add-ons.","version":"5.0.0","author":"Mozilla","bin":{"copyStudyUtils":"bin/copyStudyUtils.js"},"bugs":{"url":"https://github.com/mozilla/shield-studies-addon-utils/issues"},"dependencies":{"commander":"^2.15.1","fs-extra":"^6.0.1","shield-study-schemas":"^0.8.3"},"devDependencies":{"ajv":"^6.5.0","assert":"^1.4.1","doctoc":"^1.3.1","eslint":"4.19.1","eslint-plugin-json":"^1.2.0","eslint-plugin-mozilla":"^0.13.0","eslint-plugin-no-unsanitized":"^3.0.2","fixpack":"^2.3.1","fx-runner":"^1.0.7","geckodriver":"^1.11.0","get-firefox":"^2.1.0","mocha":"^5.2.0","npm-run-all":"^4.1.2","pre-commit":"^1.2.2","prettier":"^1.11.0","selenium-webdriver":"^3.6.0","web-ext":"^2.5.0","webpack":"^2.6.1","yamljs":"^0.3.0"},"files":["bin/copyStudyUtils.js","testUtils","webExtensionApis/prefs/api.js","webExtensionApis/prefs/schema.json","webExtensionApis/study/api.js","webExtensionApis/study/schema.json","webExtensionApis/study/src/telemetry.js"],"homepage":"https://github.com/mozilla/shield-studies-addon-utils#readme","keywords":["addon","jsm","mozilla","normandy","shield","shield-study"],"license":"MPL-2.0","main":"src/index.js","pre-commit":["format"],"repository":{"type":"git","url":"git://github.com/mozilla/shield-studies-addon-utils.git"},"scripts":{"build":"npm-run-all build:*","build:code":"cd webExtensionApis/study && webpack","build:docs":"node ./bin/documentSchema.js ./webExtensionApis/study/schema.json > docs/api.md","build:schema":"cd webExtensionApis/study && yaml2json schema.yaml -p > schema.json && node ../../bin/verifyWeeSchema.js schema.json","clean":"rm -rf examples/*/{src/privileged/,dist/}","docformat":"doctoc --title '**Contents**' docs/*.md && prettier '**/*.md' --write","eslint":"eslint . --ext js --ext json","eslint-fix":"npm run eslint -- --fix","fakeApi":"cd webExtensionApis/study && node ../../bin/schemaToInterface.js ./schema.json > fakeApi.js","fast-build":"npm run-all build:*  # no pre and post checks","format":"prettier '**/*.{css,js,jsm,json,md}' --trailing-comma=all --ignore-path=.eslintignore --write","lint":"npm-run-all lint:*","lint:eslint":"npm run eslint","lint:fixpack":"fixpack  # cleans up package.json","postbuild":"if [ -z ${SKIPLINT} ]; then npm run format; fi","postformat":"run-p lint:fixpack eslint-fix","prebuild":"if [ -z ${SKIPLINT} ]; then npm run lint; fi","prepare":"fixpack && npm run build","presmall-study:run":"npm run build && npm run small-study:bundle-utils","pretest":"npm run build && npm run test-addon:bundle-utils && npm run test-addon:build","pretest-addon:run":"npm run pretest","test":"npm run test-only","test-addon:build":"cd test-addon && web-ext build","test-addon:bundle-utils":"test-addon/bin/bundle-shield-studies-addon-utils.sh","test-addon:run":"cd test-addon && web-ext run --no-reload","test-only":"FIREFOX_BINARY=${FIREFOX_BINARY:-firefox} ADDON_ZIP=test-addon/dist/shield_utils_test_add-on-1.0.0.zip mocha test/functional/ --bail"}}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [{"namespace":"study","description":"Interface for Shield and Pioneer studies.","apiVersion":5,"types":[{"id":"NullableString","oneOf":[{"type":"null"},{"type":"string"}],"choices":[{"type":"null"},{"type":"string"}],"testcases":[null,"a string"]},{"id":"studyTypesEnum","type":"string","enum":["shield","pioneer"],"testcase":"shield"},{"id":"weightedVariationObject","type":"object","properties":{"name":{"type":"string"},"weight":{"type":"number","minimum":0}},"required":["name","weight"]},{"id":"weightedVariationsArray","type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"weight":{"type":"number","minimum":0}},"required":["name","weight"]},"testcase":[{"name":"feature-active","weight":1.5}]},{"id":"anEndingRequest","type":"object","properties":{"fullname":{"$ref":"NullableString","optional":true},"category":{"oneOf":[{"type":"null"},{"type":"string","enum":["ended-positive","ended-neutral","ended-negative"]}],"choices":[{"type":"null"},{"type":"string","enum":["ended-positive","ended-neutral","ended-negative"]}],"optional":true},"baseUrls":{"oneOf":[{"type":"null"},{"type":"array","items":{"type":"string"}}],"choices":[{"type":"null"},{"type":"array","items":{"type":"string"}}],"optional":true,"default":[]},"exacturls":{"oneOf":[{"type":"null"},{"type":"array","items":{"type":"string"}}],"choices":[{"type":"null"},{"type":"array","items":{"type":"string"}}],"optional":"true\ndefault: []"}},"additionalProperties":true,"testcases":[{"baseUrls":["some.url"],"fullname":"anEnding","category":"ended-positive"},{},{"baseUrls":["some.url"]},{"baseUrls":[],"fullname":null,"category":null}],"failcases":[{"baseUrls":null,"category":"not okay"}]},{"id":"onEndStudyResponse","type":"object","properties":{"fields":{"type":"object","additionalProperties":true},"urls":{"type":"array","items":{"type":"string"}}}},{"id":"studyInfoObject","type":"object","additionalProperties":true,"properties":{"variation":{"$ref":"weightedVariationObject"},"firstRunTimestamp":{"type":"number"},"activeExperimentName":{"type":"string"},"timeUntilExpire":{"type":"number"},"isFirstRun":{"type":"boolean"}},"required":["variation","firstRunTimestamp","activeExperimentName","isFirstRun"]},{"id":"dataPermissionsObject","type":"object","additionalProperties":true,"properties":{"shield":{"type":"boolean"}},"required":["shield"]},{"id":"studySetup","type":"object","properties":{"activeExperimentName":{"type":"string"},"studyType":{"$ref":"studyTypesEnum"},"expire":{"type":"object","properties":{"days":{"type":"integer"}},"optional":true},"endings":{"type":"object","additionalProperties":{"$ref":"anEndingRequest"}},"weightedVariations":{"$ref":"weightedVariationsArray"},"telemetry":{"type":"object","properties":{"send":{"type":"boolean"},"removeTestingFlag":{"type":"boolean"}}},"testing":{"type":"object","properties":{"variationName":{"$ref":"NullableString","optional":true},"expired":{"choices":[{"type":"null"},{"type":"boolean"}],"oneOf":[{"type":"null"},{"type":"boolean"}],"optional":true}},"additionalProperties":true,"optional":true}},"required":["activeExperimentName","studyType","endings","weightedVariations","telemetry"],"additionalProperties":true,"testcases":[{"activeExperimentName":"aStudy","studyType":"shield","expire":{"days":10},"endings":{"anEnding":{"baseUrls":["some.url"]}},"weightedVariations":[{"name":"feature-active","weight":1.5}],"telemetry":{"send":false,"removeTestingFlag":false}},{"activeExperimentName":"aStudy","studyType":"shield","expire":{"days":10},"endings":{"anEnding":{"baseUrls":["some.url"]}},"weightedVariations":[{"name":"feature-active","weight":1.5}],"telemetry":{"send":false,"removeTestingFlag":false},"testing":{}},{"activeExperimentName":"aStudy","studyType":"pioneer","endings":{"anEnding":{"baseUrls":["some.url"]}},"weightedVariations":[{"name":"feature-active","weight":1.5}],"telemetry":{"send":false,"removeTestingFlag":true},"testing":{"expired":true}},{"activeExperimentName":"shield-utils-test-addon@shield.mozilla.org","studyType":"shield","telemetry":{"send":true,"removeTestingFlag":false},"endings":{"user-disable":{"baseUrls":["http://www.example.com/?reason=user-disable"]},"ineligible":{"baseUrls":["http://www.example.com/?reason=ineligible"]},"expired":{"baseUrls":["http://www.example.com/?reason=expired"]},"dataPermissionsRevoked":{"category":"ended-neutral"},"some-study-defined-ending":{"category":"ended-neutral"},"some-study-defined-ending-with-survey-url":{"baseUrls":["http://www.example.com/?reason=some-study-defined-ending-with-survey-url"],"category":"ended-negative"}},"weightedVariations":[{"name":"feature-active","weight":1.5},{"name":"feature-passive","weight":1.5},{"name":"control","weight":1}],"expire":{"days":14},"testing":{},"allowEnroll":true}]},{"id":"telemetryPayload","type":"object","additionalProperties":true,"testcase":{"foo":"bar"}},{"id":"searchTelemetryQuery","type":"object","properties":{"type":{"type":["array"],"items":{"type":"string"},"optional":true},"n":{"type":"integer","optional":true},"minimumTimestamp":{"type":"number","optional":true},"headersOnly":{"type":"boolean","optional":true}},"additionalProperties":false,"testcase":{"type":["shield-study-addon","shield-study"],"n":100,"minimumTimestamp":1523968204184,"headersOnly":false}},{"id":"anEndingAnswer","type":"object","additionalProperties":true}],"functions":[{"name":"setup","type":"function","async":true,"description":"Attempt an setup/enrollment, with these effects:\n\n- sets 'studyType' as Shield or Pioneer\n  - affects telemetry\n  - watches for dataPermission changes that should *always*\n    stop that kind of study\n\n- Use or choose variation\n  - `testing.variation` if present\n  - OR (internal) deterministicVariation\n    from `weightedVariations`\n    based on hash of\n\n    - activeExperimentName\n    - clientId\n\n- During firstRun[1] only:\n  - set firstRunTimestamp pref value\n  - send 'enter' ping\n  - if `allowEnroll`, send 'install' ping\n  - else endStudy(\"ineligible\") and return\n\n- Every Run\n  - setActiveExperiment(studySetup)\n  - monitor shield | pioneer permission endings\n  - suggests alarming if `expire` is set.\n\nReturns:\n- studyInfo object (see `getStudyInfo`)\n\nTelemetry Sent (First run only)\n\n  - enter\n  - install\n\nFires Events\n\n(At most one of)\n- study:onReady  OR\n- study:onEndStudy\n\nPreferences set\n- `shield.${runtime.id}.firstRunTimestamp`\n\nNote:\n1. allowEnroll is ONLY used during first run (install)\n","parameters":[{"name":"studySetup","$ref":"studySetup"}],"returns":[{"$ref":"studyInfoObject"}]},{"name":"endStudy","type":"function","async":true,"defaultReturn":{"urls":["url1","url2"],"endingName":"some-reason"},"description":"Signal to browser.study that it should end.\n\nUsage scenarios:\n- addons defined\n  - postive endings (tried feature)\n  - negative endings (client clicked 'no thanks')\n  - expiration / timeout (feature should last for 14 days then uninstall)\n\nLogic:\n- If study has already ended, do nothing.\n- Else: END\n\nEND:\n- record internally that study is ended.\n- disable all methods that rely on configuration / setup.\n- clear all prefs stored by `browser.study`\n- fire telemetry pings for:\n  - 'exit'\n  - the ending, one of:\n\n    \"ineligible\",\n    \"expired\",\n    \"user-disable\",\n    \"ended-positive\",\n    \"ended-neutral\",\n    \"ended-negative\",\n\n- augment all ending urls with query urls\n- fire 'study:end' event to `browser.study.onEndStudy` handlers.\n\nAddon should then do\n- open returned urls\n- feature specific cleanup\n- uninstall the addon\n\nNote:\n1.  calling this function multiple time is safe.\n`browser.study` will choose the\n","parameters":[{"name":"anEndingAlias","type":"string"}],"returns":[{"$ref":"anEndingAnswer"}]},{"name":"getStudyInfo","type":"function","async":true,"description":"current study configuration, including\n- variation\n- activeExperimentName\n- timeUntilExpire\n- firstRunTimestamp\n- isFirstRun\n\nBut not:\n- telemetry clientId\n\nThrows Error if called before `browser.study.setup`\n","defaultReturn":{"variation":"styleA","firstRunTimestamp":1523968204184,"activeExperimentName":"some experiment","timeUntilExpire":12},"parameters":[],"returns":[{"$ref":"studyInfoObject"}]},{"name":"sendTelemetry","type":"function","description":"Send Telemetry using appropriate shield or pioneer methods.\n\nshield:\n- `shield-study-addon` ping, requires object string keys and string values\n\npioneer:\n- TBD\n\nNote:\n- no conversions / coercion of data happens.\n\nNote:\n- undefined what happens if validation fails\n- undefined what happens when you try to send 'shield' from 'pioneer'\n\nTBD fix the parameters here.\n","async":true,"parameters":[{"name":"payload","$ref":"telemetryPayload"}],"defaultReturn":"undefined","returns":null},{"name":"searchSentTelemetry","type":"function","async":true,"description":"Search locally stored telemetry pings using these fields (if set)\n\nn:\n  if set, no more than `n` pings.\ntype:\n  Array of 'ping types' (e.g., main, crash, shield-study-addon) to filter\nminimumTimestamp:\n  only pings after this timestamp.\nheadersOnly:\n  boolean.  If true, only the 'headers' will be returned.\n\nPings will be returned sorted by timestamp with most recent first.\n\nUsage scenarios:\n- enrollment / eligiblity using recent Telemetry behaviours or client environment\n- addon testing scenarios\n","defaultReturn":[{"pingType":"main"}],"parameters":[{"name":"searchTelemetryQuery","$ref":"searchTelemetryQuery"}]},{"name":"surveyUrl","type":"function","async":true,"description":"Format url with study covariate queryArgs appended / mixed in.\n\nUse this for constructing midpoint surveys.\n","defaultReturn":"https://example.com?version=59.0&branch=studyA","parameters":[{"name":"baseUrl","type":"string"},{"name":"additionalFields","type":"object","optional":true}],"returns":[{"type":"string"}]},{"name":"validateJSON","type":"function","async":true,"defaultReturn":{"valid":true,"errors":[]},"description":"Using AJV, do jsonschema validation of an object.  Can be used to validate your arguments, packets at client.","parameters":[{"name":"someJson","type":"object","additionalProperties":true},{"name":"jsonschema","type":"object","descripton":"a valid jsonschema object","additionalProperties":true}],"returns":[{"type":"object"},{"parameters":null,"valid":[{"type":"boolean"}],"errors":[{"type":"array"}]}]},{"name":"uninstall","type":"function","async":true,"descripton":"Uninstall this addon.","parameters":[]}],"events":[{"name":"onDataPermissionsChange","type":"function","defaultReturn":{"shield":true,"pioneer":false},"description":"Fires whenever any 'dataPermission' changes, with the new dataPermission object.  Allows watching for shield or pioneer revocation.","parameters":[{"name":"updatedPermissions","type":"object"}]},{"name":"onReady","type":"function","defaultReturn":{"variation":"styleA","firstRunTimestamp":1523968204184},"description":"Fires when the study is 'ready' for the feature to startup.","parameters":[{"name":"studyInfo","type":"object"}]},{"name":"onEndStudy","type":"function","defaultReturn":{"urls":[],"reason":"some-reason"},"description":"Listen for when the study wants to end.\n\nAct on it by\n- opening surveyUrls\n- tearing down your feature\n- uninstalling the addon\n","parameters":[{"name":"ending","type":"object"}]}]},{"namespace":"studyDebug","description":"Interface for Test Utilities","apiVersion":5,"functions":[{"name":"throwAnException","type":"function","description":"Throws an exception from a privileged function - for making sure that we can catch these in our web extension","async":false,"parameters":[{"name":"message","type":"string"}]},{"name":"throwAnExceptionAsync","type":"function","description":"Throws an exception from a privileged async function - for making sure that we can catch these in our web extension","async":true,"parameters":[{"name":"message","type":"string"}]},{"name":"firstSeen","type":"function","async":true,"description":"","parameters":[]},{"name":"setActive","type":"function","async":true,"description":"","parameters":[]},{"name":"startup","type":"function","async":true,"description":"","parameters":[{"name":"details","type":"object","additionalProperties":true}]},{"name":"setFirstRunTimestamp","type":"function","async":true,"description":"Set the pref for firstRunTimestamp, to simulate:\n- 2nd run\n- other useful tests around expiration and states.\n","parameters":[{"name":"timestamp","type":"number","minimum":1}]},{"name":"reset","type":"function","async":true,"description":"\nReset the studyUtils _internals, for debugging purposes.\n","parameters":[]},{"name":"getInternals","type":"function","async":true,"description":"Return `_internals` of the studyUtils object.\n\nUse this for debugging state.\n\nAbout `this._internals`:\n- variation:  (chosen variation, `setup` )\n- isEnding: bool  `endStudy`\n- isSetup: bool   `setup`\n- isFirstRun: bool `setup`, based on pref\n- studySetup: bool  `setup` the config\n- seenTelemetry: object of lists of seen telemetry by bucket\n- prefs: object of all created prefs and their names\n","parameters":[]}]},{"namespace":"prefs","description":"Temporary subset of `Services.prefs` API,\ndescribed at:  https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Services.jsm\n\nSee https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrefBranch\n\nNo attempt here to improve the api at all.\n\nTODO: Convert observers to events.\n\nIf a true 'prefs' api lands in tree, this module will be removed.\n","apiVersion":5,"functions":[{"name":"getStringPref","type":"function","async":true,"description":"","parameters":[{"name":"aPrefName","type":"string"},{"name":"aDefaultValue","type":"string","optional":true}]}]}]

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env commonjs */
/* eslint no-logger: off */
/* global ExtensionAPI */

ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
ChromeUtils.import("resource://gre/modules/ExtensionUtils.jsm");

const { logger, studyUtils } = __webpack_require__(2);
logger.log("in index!");

// eslint-disable-next-line no-undef
const { EventManager } = ExtensionCommon;
// eslint-disable-next-line no-undef
const { EventEmitter, ExtensionError } = ExtensionUtils;

/** Event emitter to handle Events defined in the API
 *
 * - onReady
 * - onEndStudy
 *
 * onDataPermissionChange is handled more directly
 */
class StudyApiEventEmitter extends EventEmitter {
  emitDataPermissionsChange(updatedPermissions) {
    this.emit("dataPermissionsChange", updatedPermissions);
  }

  emitReady(studyInfo) {
    this.emit("ready", studyInfo);
  }

  emitEndStudy(endingResponse) {
    this.emit("endStudy", endingResponse);
  }
}

/** Implements the study/getApi for `browser.study` API */
this.study = class extends ExtensionAPI {
  /**
   * We don't need to override the constructor for other
   * reasons than to clarify the class member "extension"
   * being of type Extension
   *
   * @param {object} extension Extension
   */
  constructor(extension) {
    super(extension);
    /**
     * @type Extension
     */
    this.extension = extension;
    this.studyUtils = studyUtils;
    this.studyApiEventEmitter = new StudyApiEventEmitter();
    logger.log("constructed!");
  }

  /**
   * Extension Uninstall
   * APIs that allocate any resources (e.g., adding elements to the browser’s
   * user interface, setting up internal event listeners, etc.) must free
   * these resources when the extension for which they are allocated is
   * shut down.
   *
   * https://searchfox.org/mozilla-central/source/toolkit/components/extensions/parent/ext-protocolHandlers.js#46
   *
   * @param {string} shutdownReason one of the reasons
   * @returns {undefined} TODO TODO
   */
  async onShutdown(shutdownReason) {
    logger.log("possible uninstalling", shutdownReason);
    if (shutdownReason === "ADDON_UNINSTALL") {
      logger.log("definitely uninstalling", shutdownReason);
      const anEndingAlias = "user-disable";
      const endingResponse = await this.studyUtils.endStudy(anEndingAlias);
      await this.studyApiEventEmitter.emitEndStudy(endingResponse);
    }
  }

  /**
   * @param {object} context the addon context
   * @returns {object} api with study, studyDebug keys
   */
  getAPI(context) {
    const { extension } = this;

    /* eslint no-shadow: off */
    const { studyUtils, studyApiEventEmitter } = this;

    // once.  Used for pref naming, telemetry
    studyUtils.setExtensionManifest(extension.manifest);
    studyUtils.reset();

    return {
      study: {
        /** Attempt an setup/enrollment, with these effects:
         *
         *  - sets 'studyType' as Shield or Pioneer
         *    - affects telemetry
         *    - watches for dataPermission changes that should *always*
         *      stop that kind of study
         *
         *  - Use or choose variation
         *    - `testing.variation` if present
         *    - OR deterministicVariation
         *      for the studyType using `weightedVariations`
         *
         *  - During firstRun[1] only:
         *    - set firstRunTimestamp pref value
         *    - send 'enter' ping
         *    - if `allowEnroll`, send 'install' ping
         *    - else endStudy("ineligible") and return
         *
         *  - Every Run
         *    - setActiveExperiment(studySetup)
         *    - monitor shield | pioneer permission endings
         *    - suggests alarming if `expire` is set.
         *
         *  Returns:
         *  - studyInfo object (see `getStudyInfo`)
         *
         *  Telemetry Sent (First run only)
         *
         *    - enter
         *    - install
         *
         *  Fires Events
         *
         *  (At most one of)
         *  - study:onReady  OR
         *  - study:onEndStudy
         *
         *  Preferences set
         *  - `shield.${runtime.id}.firstRunTimestamp`
         *
         *  Note:
         *  1. allowEnroll is ONLY used during first run (install)
         *
         * @param {Object<studySetup>} studySetup See API.md
         * @returns {Object<studyInfo>} studyInfo.  See studyInfo
         **/
        setup: async function setup(studySetup) {
          // 0.  testing overrides, if any
          if (!studySetup.testing) {
            studySetup.testing = {};
          }

          // 1. addon info for prefs etc.
          studyUtils.setExtensionManifest(extension.manifest);

          // Setup and sets the variation / _internals
          // incldues possible 'firstRun' handling.
          await studyUtils.setup(studySetup);

          // current studyInfo.
          let studyInfo = studyUtils.info();

          // Check if the user is eligible to run this study using the |isEligible|
          // function when the study is initialized
          if (studyInfo.isFirstRun) {
            if (!studySetup.allowEnroll) {
              logger.debug("User is ineligible, ending study.");
              // 1. uses studySetup.endings.ineligible.url if any,
              // 2. sends UT for "ineligible"
              // 3. then uninstalls addon
              await studyUtils.endStudy("ineligible");
              return studyUtils.info();
            }
          }

          if (studySetup.testing.expired) {
            await studyUtils.endStudy("expired");
            return studyUtils.info();
          }

          /*
          * Adds the study to the active list of telemetry experiments,
          * and sends the "installed" telemetry ping if applicable,
          * if it's a firstRun
          */
          await studyUtils.startup();

          // update what the study variation and other info is.
          studyInfo = studyUtils.info();
          logger.debug(`api info: ${JSON.stringify(studyInfo)}`);
          try {
            studyApiEventEmitter.emitReady(studyInfo);
          } catch (e) {
            logger.error("browser.study.setup error");
            logger.error(e);
          }
          return studyUtils.info();
        },

        /* Signal to browser.study that it should end.
         *
         *  Usage scenarios:
         *  - addons defined
         *    - postive endings (tried feature)
         *    - negative endings (client clicked 'no thanks')
         *    - expiration / timeout (feature should last for 14 days then uninstall)
         *
         *  Logic:
         *  - If study has already ended, do nothing.
         *  - Else: END
         *
         *  END:
         *  - record internally that study is ended.
         *  - disable all methods that rely on configuration / setup.
         *  - clear all prefs stored by `browser.study`
         *  - fire telemetry pings for:
         *    - 'exit'
         *    - the ending, one of:
         *
         *      "ineligible",
         *      "expired",
         *      "user-disable",
         *      "ended-positive",
         *      "ended-neutral",
         *      "ended-negative",
         *
         *  - augment all ending urls with query urls
         *  - fire 'study:end' event to `browser.study.onEndStudy` handlers.
         *
         *  Addon should then do
         *  - open returned urls
         *  - feature specific cleanup
         *  - uninstall the addon
         *
         *  Note:
         *  1.  calling this function multiple time is safe.
         *  `browser.study` will choose the first in.
         *  2.  the 'user-disable' case is handled above
         *  3.  throws if the endStudy fails
         **/
        endStudy: async function endStudy(anEndingAlias) {
          logger.log("called endStudy anEndingAlias");
          const endingResponse = await studyUtils.endStudy(anEndingAlias);
          studyApiEventEmitter.emitEndStudy(endingResponse);
        },

        /* current study configuration, including
         *  - variation
         *  - activeExperimentName
         *  - timeUntilExpire
         *  - firstRunTimestamp
         *
         *  But not:
         *  - telemetry clientId
         *
         *  Throws ExtensionError if called before `browser.study.setup`
         **/
        getStudyInfo: async function getStudyInfo() {
          logger.log("called getStudyInfo ");
          return studyUtils.info();
        },

        /** Uninstall the addon from the webExtension context.
         *
         * note: call in response to and onEndStudy.
         *
         * @returns {void}
         */
        uninstall: async function uninstall() {
          return studyUtils.uninstall();
        },

        /** Send Telemetry using appropriate shield or pioneer methods.
         *
         *  shield:
         *  - `shield-study-addon` ping, requires object string keys and string values
         *
         *  pioneer:
         *  - TBD
         *
         *  Note:
         *  - no conversions / coercion of data happens.
         *
         *  Note:
         *  - undefined what happens if validation fails
         *  - undefined what happens when you try to send 'shield' from 'pioneer'
         *
         *  TBD fix the parameters here.
         *
         * @param {Object} payload Non-nested object with key strings, and key values
         * @returns {undefined}
         */
        sendTelemetry: async function sendTelemetry(payload) {
          logger.log("called sendTelemetry payload");

          function throwIfInvalid(obj) {
            // Check: all keys and values must be strings,
            for (const k in obj) {
              if (typeof k !== "string")
                throw new ExtensionError(`key ${k} not a string`);
              if (typeof obj[k] !== "string")
                throw new ExtensionError(`value ${k} ${obj[k]} not a string`);
            }
            return true;
          }

          throwIfInvalid(payload);
          return studyUtils.telemetry(payload);
        },

        /** Search locally stored telemetry pings using these fields (if set)
         *
         *  n:
         *    if set, no more than `n` pings.
         *  type:
         *    Array of 'ping types' (e.g., main, crash, shield-study-addon) to filter
         *  mininumTimestamp:
         *    only pings after this timestamp.
         *  headersOnly:
         *    boolean.  If true, only the 'headers' will be returned.
         *
         *  Pings will be returned sorted by timestamp with most recent first.
         *
         *  Usage scenarios:
         *  - enrollment / eligiblity using recent Telemetry behaviours or client environment
         *  - addon testing scenarios
         *
         * @param {Object<query>} searchTelemetryQuery see above
         * @returns {Array<sendTelemetry>} matchingPings
         */
        async searchSentTelemetry(searchTelemetryQuery) {
          const { TelemetryArchive } = ChromeUtils.import(
            "resource://gre/modules/TelemetryArchive.jsm",
            {},
          );
          const { searchTelemetryArchive } = __webpack_require__(3);
          return searchTelemetryArchive(TelemetryArchive, searchTelemetryQuery);
        },

        /* Using AJV, do jsonschema validation of an object.  Can be used to validate your arguments, packets at client. */
        validateJSON: async function validateJSON(someJson, jsonschema) {
          logger.log("called validateJSON someJson, jsonschema");
          return studyUtils.jsonschema.validate(someJson, jsonschema);
          // return { valid: true, errors: [] };
        },

        /**
         * Schema.json `events`
         *
         * See https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/events.html
         */

        /* Fires when the study is 'ready' for the feature to startup. */
        onReady: new EventManager(context, "study:onReady", fire => {
          const listener = (eventReference, studyInfo) => {
            fire.async(studyInfo);
          };
          studyApiEventEmitter.once("ready", listener);
          return () => {
            studyApiEventEmitter.off("ready", listener);
          };
        }).api(),

        /* Listen for when the study wants to end.
         *
         *  Act on it by
         *  - opening surveyUrls
         *  - tearing down your feature
         *  - uninstalling the addon
         */
        onEndStudy: new EventManager(context, "study:onEndStudy", fire => {
          const listener = (eventReference, ending) => {
            fire.async(ending);
          };
          studyApiEventEmitter.on("endStudy", listener);
          return () => {
            studyApiEventEmitter.off("endStudy", listener);
          };
        }).api(),
      },

      studyDebug: {
        throwAnException(message) {
          throw new ExtensionError(message);
        },

        async throwAnExceptionAsync(message) {
          throw new ExtensionError(message);
        },

        async setFirstRunTimestamp(timestamp) {
          return studyUtils.setFirstRunTimestamp(timestamp);
        },

        async setActive() {
          return studyUtils.setActive();
        },

        async startup({ reason }) {
          return studyUtils.startup({ reason });
        },

        async reset() {
          return studyUtils.reset();
        },

        async getInternals() {
          return studyUtils._internals;
        },
      },
    };
  }
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-env commonjs */

ChromeUtils.import("resource://gre/modules/ExtensionUtils.jsm");

// eslint-disable-next-line no-undef
const { ExtensionError } = ExtensionUtils;

const Ajv = __webpack_require__(0);
const ajv = new Ajv({ schemaId: "auto" });
ajv.addMetaSchema(__webpack_require__(1));

const jsonschema = {
  /**
   * Validates input data based on a specified schema
   * @param {Object} data - The data to be validated
   * @param {Object} schema - The schema to validate against
   * @returns {boolean} - Will return true if the data is valid
   */
  validate(data, schema) {
    const valid = ajv.validate(schema, data);
    return { valid, errors: ajv.errors || [] };
  },
  /**
   * Validates input data based on a specified schema
   * @param {Object} data - The data to be validated
   * @param {Object} schema - The schema to validate against
   * @throws Will throw an error if the data is not valid
   * @returns {boolean} - Will return true if the data is valid
   */
  validateOrThrow(data, schema) {
    const valid = ajv.validate(schema, data);
    if (!valid) {
      throw new ExtensionError(JSON.stringify(ajv.errors));
    }
    return true;
  },
};

/* harmony default export */ __webpack_exports__["a"] = (jsonschema);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export chooseWeighted */
/* unused harmony export hashFraction */
/* unused harmony export sha256 */
/* unused harmony export cumsum */
const { Services } = ChromeUtils.import(
  "resource://gre/modules/Services.jsm",
  {},
);
const { TextEncoder } = Cu.getGlobalForObject(Services);

/**
 * Given sample weights (weightedVariations) and a particular position
 * (fraction), return a variation.  If no fraction given, return a variation
 * at random fraction proportional to the weightVariations object
 * @param {Object[]} weightedVariations - the array of branch name:weight pairs
 * used to randomly assign the user to a branch
 * @param {Number} fraction - a number (0 <= fraction < 1)
 * @returns {Object} - the variation object in weightedVariations for the given
 * fraction
 *
 */
function chooseWeighted(weightedVariations, fraction = Math.random()) {
  /*
   weightedVariations, list of:
   {
    name: string of any length
    weight: float >= 0
   }
  */

  const weights = weightedVariations.map(x => x.weight || 1);
  const partial = cumsum(weights);
  const total = weights.reduce((a, b) => a + b);
  for (let ii = 0; ii < weightedVariations.length; ii++) {
    if (fraction <= partial[ii] / total) {
      return weightedVariations[ii];
    }
  }
  return null;
}

/**
 * @async
 * Converts a string into a fraction (0 <= fraction < 1) based on the first
 * X bits of its sha256 hexadecimal representation
 * Note: Salting (adding the study name to the telemetry clientID) ensures
 * that the same user gets a different bucket/hash for each study.
 * Hashing of the salted string ensures uniform hashing; i.e. that every
 * bucket/variation gets filled.
 * @param {string} saltedString - a salted string used to create a hash for
 * the user
 * @param {Number} bits - The first number of bits to use in the sha256 hex
 * representation
 * @returns {Number} - a fraction (0 <= fraction < 1)
 */
async function hashFraction(saltedString, bits = 12) {
  const hash = await sha256(saltedString);
  return parseInt(hash.substr(0, bits), 16) / Math.pow(16, bits);
}

/**
 * @async
 * Converts a string into its sha256 hexadecimal representation.
 * Note: This is ultimately used to make a hash of the user's telemetry clientID
 * and the study name.
 * @param {string} message - The message to convert.
 * @returns {string} - a hexadecimal, 256-bit hash
 */
async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder("utf-8").encode(message);
  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // convert bytes to hex string
  const hashHex = hashArray
    .map(b => ("00" + b.toString(16)).slice(-2))
    .join("");
  return hashHex;
}

/**
 * Converts an array of length N into a cumulative sum array of length N,
 * where n_i = sum(array.slice(0,i)) i.e. each element is the sum of all
 * elements up to and including that element
 * This is ultimately used for turning sample weights (AKA weightedVariations)
 * into right hand limits (>= X) to  deterministically select which variation
 * a user receives.
 * @example [.25,.3,.45] => [.25,.55,1.0]; if a user's sample weight were .25,
 * they would fall into the left-most bucket
 * @param {Number[]} arr - An array of sample weights (0 <= sample weight < 1)
 * @returns {Number[]} - A cumulative sum array of sample weights
 * (0 <= sample weight <= 1)
 */
function cumsum(arr) {
  return arr.reduce(function(r, c, i) {
    r.push((r[i - 1] || 0) + c);
    return r;
  }, []);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  chooseWeighted,
  cumsum,
  hashFraction,
  sha256,
});


/***/ })
/******/ ])));
