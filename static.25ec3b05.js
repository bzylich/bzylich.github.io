(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var full_name = exports.full_name = "Brian Zylich";

var researchTitle = exports.researchTitle = {
	en: 'Research',
	es: 'Investigación'
};

var experienceTitle = exports.experienceTitle = {
	en: 'Experience',
	es: 'Experiencia laboral'
};

var projectsTitle = exports.projectsTitle = {
	en: 'Projects',
	es: 'Proyectos'
};

var goalsTitle = exports.goalsTitle = {
	en: 'Goals',
	es: 'Metas'
};

var contactTitle = exports.contactTitle = {
	en: 'Contact Me',
	es: 'Contacto'
};

var aboutmeTitle = exports.aboutmeTitle = {
	en: 'About Me',
	es: 'Biografía'
};

var aboutme = exports.aboutme = {
	en: 'I\'m a rising senior at Worcester Polytechnic Institute pursuing a BS/MS in Computer Science by May 2019. ' + 'After graduating I hope to continue my studies in a PhD program. My interests are in Natural Language Processing and ' + 'Machine Learning.',
	es: 'Acabo de empezar mi cuarto año de estudios en Worcester Polytechnic Institute. Espero obtener el bachillerato ' + 'universitario y la maestría en informática para el Mayo 2019. Después de graduarme quisiera perseguir un doctorado. ' + 'Mis áreas de interés son la ligüística computacional y el aprendizaje automático.'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(7);

__webpack_require__(8);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _Body = __webpack_require__(16);

var _Body2 = _interopRequireDefault(_Body);

var _Footer = __webpack_require__(25);

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//

//


var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: 'rgba(0, 0, 0, 0.61)',
      dark: '#FFFFFF',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#FFFFFF'
    },
    action: {
      hoverOpacity: 0.2
    },
    type: 'dark'
  }
});

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      language: 'en'
    };

    _this.changeLanguage = _this.changeLanguage.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'changeLanguage',
    value: function changeLanguage(event) {
      if (event.target.value !== this.state.language) {
        this.setState({ language: event.target.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          _styles.MuiThemeProvider,
          { theme: theme },
          _react2.default.createElement(_Header2.default, { language: this.state.language, changeLanguage: this.changeLanguage }),
          _react2.default.createElement(_Body2.default, { language: this.state.language }),
          _react2.default.createElement(_Footer2.default, { language: this.state.language }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0}.App{text-align:center}.App-logo{-webkit-animation:App-logo-spin infinite 20s linear;animation:App-logo-spin infinite 20s linear;height:120px}.App-header{background-color:#ddd;height:170px;padding:20px;color:#000}.App-title{font-size:1.5em}.App-intro{font-size:large}@-webkit-keyframes App-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes App-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(10);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(11);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(12);

var _Typography2 = _interopRequireDefault(_Typography);

var _Select = __webpack_require__(13);

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = __webpack_require__(14);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Input = __webpack_require__(15);

var _Input2 = _interopRequireDefault(_Input);

var _strings = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var styles = {
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: 50,
		paddingRight: 50
	},
	name: {
		color: 'white'
	}
};

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { position: 'fixed', top: 0, width: '100%' } },
				_react2.default.createElement(
					_AppBar2.default,
					{ position: 'static', style: { opacity: '50%' } },
					_react2.default.createElement(
						_Toolbar2.default,
						{ style: styles.root },
						_react2.default.createElement(
							_Typography2.default,
							{ variant: 'display1', style: styles.name },
							_strings.full_name
						),
						_react2.default.createElement(
							_Select2.default,
							{
								value: this.props.language,
								onChange: this.props.changeLanguage,
								inputProps: {
									name: 'language',
									id: 'language-selector'
								}
							},
							_react2.default.createElement(
								_MenuItem2.default,
								{ value: 'en' },
								'English'
							),
							_react2.default.createElement(
								_MenuItem2.default,
								{ value: 'es' },
								'Espa\xF1ol'
							)
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(17);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Avatar = __webpack_require__(18);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _GridList = __webpack_require__(19);

var _GridList2 = _interopRequireDefault(_GridList);

var _GridListTile = __webpack_require__(20);

var _GridListTile2 = _interopRequireDefault(_GridListTile);

var _GridListTileBar = __webpack_require__(21);

var _GridListTileBar2 = _interopRequireDefault(_GridListTileBar);

var _bannerCropped = __webpack_require__(22);

var _bannerCropped2 = _interopRequireDefault(_bannerCropped);

var _github = __webpack_require__(23);

var _github2 = _interopRequireDefault(_github);

var _linkedin = __webpack_require__(24);

var _linkedin2 = _interopRequireDefault(_linkedin);

var _strings = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var styles = {
	root: {
		overflow: 'hidden'
	},
	socialIcons: {
		position: 'absolute',
		marginTop: -130,
		right: 20
	},
	githubButton: {
		marginLeft: -12,
		marginRight: 40,
		width: 120,
		height: 120
	},
	linkedinButton: {
		marginLeft: -10,
		marginRight: 20,
		width: 120,
		height: 120
	},
	githubAvatar: {
		width: 80,
		height: 80
	},
	linkedinAvatar: {
		width: 80,
		height: 80,
		padding: 14
	},
	gridList: {
		width: '100%',
		height: '100%',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)'
	},
	titleBar: {
		background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)'
	}
};

var Body = function (_React$Component) {
	_inherits(Body, _React$Component);

	function Body() {
		_classCallCheck(this, Body);

		return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
	}

	_createClass(Body, [{
		key: 'render',
		value: function render() {
			var sectionsData = [{
				name: _strings.researchTitle[this.props.language],
				img: ''
			}, {
				name: _strings.experienceTitle[this.props.language],
				img: ''
			}, {
				name: _strings.projectsTitle[this.props.language],
				img: ''
			}, {
				name: _strings.goalsTitle[this.props.language],
				img: ''
			}, {
				name: _strings.contactTitle[this.props.language],
				img: ''
			}];

			return _react2.default.createElement(
				'div',
				{ style: styles.root },
				_react2.default.createElement('img', { src: _bannerCropped2.default, height: '100%' }),
				_react2.default.createElement(
					'div',
					{ style: styles.socialIcons },
					_react2.default.createElement(
						_IconButton2.default,
						{ style: styles.githubButton, color: 'inherit', 'aria-label': 'github', href: 'https://github.com/bzylich' },
						_react2.default.createElement(_Avatar2.default, { src: _github2.default, style: styles.githubAvatar })
					),
					_react2.default.createElement(
						_IconButton2.default,
						{ style: styles.linkedinButton, color: 'inherit', 'aria-label': 'linkedin', href: 'https://www.linkedin.com/in/brian-zylich/' },
						_react2.default.createElement(_Avatar2.default, { src: _linkedin2.default, style: styles.linkedinAvatar })
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						_strings.aboutmeTitle[this.props.language]
					),
					_react2.default.createElement(
						'p',
						{ style: { textAlign: 'left', paddingLeft: 100, paddingRight: 100, paddingTop: 0, paddingBottom: 30 } },
						_strings.aboutme[this.props.language]
					)
				),
				_react2.default.createElement(
					_GridList2.default,
					{ cellHeight: 200, spacing: 4, style: styles.gridList },
					sectionsData.map(function (tile) {
						return _react2.default.createElement(
							_GridListTile2.default,
							{ key: tile.img, cols: 1, rows: 1 },
							_react2.default.createElement('img', { src: tile.img }),
							_react2.default.createElement(_GridListTileBar2.default, {
								title: tile.name,
								titlePosition: 'top',
								style: styles.titleBar
							})
						);
					})
				)
			);
		}
	}]);

	return Body;
}(_react2.default.Component);

exports.default = Body;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTileBar");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bannerCropped.38413380.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEzMjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTQxNEFCQzk5QTExMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMwOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTMxOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R7ClIwAADR5JREFUeNrsnQuw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"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACACAYAAAA73po8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTFCNjNERjFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTFCNjNFMDFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MUI2M0REMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1MUI2M0RFMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oJuRQQAABQBJREFUeNrsnT1MFEEUgG+MVpAgjSY2HI2xBCnUjgCFJhYkdFYY0cTOAhupsbGXRDChsyKBhAQKIXRggdBigdAYtRGS28bmfANzyYKXY3dvhp2d/b7kubBxf27fx8ybvdk7Va/XK+dRSo3LYlRiUKKrAkXmWGJDYlFyPd/WnrQsjRD6JHb1aiLI0Lnti+c8TcRF0a3JERc0+NA5Hs8iizr5RyndouzQYpeqaxqU3O+m2aghy4H83MM1LBWHkvtqmg2umGIWUcpHj8l9cllMrQLlZDRVN2SKHigp0hWpNC0LALIAsgCyALIAsgCyACALIAuEJEtHR8eWxHOJXn23sBHy+12zfos0FAcn8yZEgk2J/iTzJOT/DUnsVZhrcumRavKTI1Gms0yu0duRwBLJIgmfyDptzwgzQRJLIEvWFqWJMO9JpH+yWJuioAvVWq32wFYh1dnZuRdF0W1KSscFa05TFKYsv46XpNIvrLQstlsVWpewW5YFR69llnSGd1NuzdH5rZGiwLqhNE1Z6hNUijnCARa4QDcEYFEWGbVUXZycq/1Cvi3LiKPzGyFF4cky5uj8xkhRYKMhjZ6vUqvVDmx2QVEUfSdFYY6GZiy/jhlS6aFcFU+mJzBNgfksiIIs9oWR7SZJYMlkMcKsSFQTSlLVc3ZJXkkmP7UYJa1WTt+V/hwfLclop18WA3p4LKOeh5SO/o+G+DAfZOGNRPD3Di4gCwCyALKAS65yCazcHtAP969LfJX4I7Hf5DZBt/l1WKJX3zYo2pMLDJ3bE2ROYkHEOMqyD5HoeuV0GsaEiHPf96GzVVlsTtxOO1Hb1rEvOq6RZEoEWbeZNDMrcOayb1Aii4PjiiS/ZPHEtiRNpBmSxapIc803WShwk3U5n2Rxx7UoGnOMG3LMb0HXLCG2LPoddEngx8tOjKlnvrgugmlZ7LUouYhiWhhdNN8z3Z8XIIuHopwT5hGy+C3K67xFiQmzI+fzlprFw5pFaoUVSdAjn+Q19ctvFyMkapb28O5DhEx3lHtLR8tSEFw9R0XLEiD6vaa8770gS7GYRRZISq6fhEXNUjBsfxIWNUvA5PnFGMiSflQyJjEjsan/yuOh10lMmvsirtjN8/Xn8nRbgkclczt2i28u+VlJ9jTmX4lnjs5juhLC46uhypI1QS6E0dLmlTO6oYu7nckoit5k2Va2mzPzb4MAWVqLMiQJf9fmbmy/CbjP0NnDobOt7w6QrqM766Ru18Nnhs6WRj0WZ6kN0w2FzYTFffUjS8BYfiSDliXkwpargCxJGeASIEtSej3fH7J4hNWCVOqfm8gCdEMAyAJtwe1+C8cu8vlxux/ohgBZAFkAWQBZAJAFkAWQBZAFkAWQBQBZAFkAWQBZAFkAWQCQBZAFkAWQBYoE3+sMZ1BK3ZLF43Orl+v1+g9kgf9EETE+nFv/QmIZWSDOiShajti67cY6ahZoihbEtDAD1CxwUZfUaF22GQ1B6paFB+MtHLvI5xc/r1YFrh4RWZUFCtmCqKRDZ2RBFj5yA+yDLIAsgCyALIAsgCyALADIAsgCOciyxGUoLUtpZVnkmpWWVLlX+pvAlVIH8nMP165UHEruq1lqllGuXak4zpLzE1nEsF1ZPDU7gfBFeWVyng7dDTVC6JPQO6kTQYbObV8852lCGUnOFjJKjZtmalCiiz/GwrckG7qYlVzPt7OjfwIMAN9R2U1EzV3sAAAAAElFTkSuQmCC"

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSimpleChatbot = __webpack_require__(26);

var _reactSimpleChatbot2 = _interopRequireDefault(_reactSimpleChatbot);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
	root: {
		position: 'fixed',
		bottom: 0
	},
	chatbot: {
		position: 'fixed',
		right: 0,
		bottom: 0
	},
	mainBackground: {
		backgroundColor: 'rgba(0, 0, 0, 0.61)'
	}
};

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		_this.state = {
			opened: true
		};

		_this.toggleChatbot = _this.toggleChatbot.bind(_this);
		return _this;
	}

	_createClass(Footer, [{
		key: 'toggleChatbot',
		value: function toggleChatbot(_ref) {
			var opened = _ref.opened;

			this.setState({ opened: opened });
		}
	}, {
		key: 'render',
		value: function render() {
			var steps = [{
				id: '0',
				message: 'Welcome to Brian\'s website!',
				trigger: '1'
			}, {
				id: '1',
				user: true,
				trigger: function trigger(_ref2) {
					var value = _ref2.value,
					    steps = _ref2.steps;

					if (value === 'bye') {
						return '3';
					} else {
						return '2';
					}
				}
			}, {
				id: '2',
				message: function message(_ref3) {
					var previousValue = _ref3.previousValue,
					    steps = _ref3.steps;
					return "You said: " + previousValue;
				},
				trigger: '1'
			}, {
				id: '3',
				message: 'Bye!',
				end: true
			}];

			return _react2.default.createElement(
				'div',
				{ style: styles.root },
				_react2.default.createElement(_reactSimpleChatbot2.default, {
					style: styles.chatbot,
					bubbleStyle: styles.mainBackground,
					steps: steps,
					headerTitle: 'Brian\'s Agent',
					userDelay: 10,
					floating: true,
					opened: this.state.opened,
					toggleFloating: this.toggleChatbot
				})
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-simple-chatbot");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".biAEAb,.glfuN,.jwPUxT{background-color:rgba(0,0,0,.61)!important}.kFPviT{color:#fff}", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.25ec3b05.js.map