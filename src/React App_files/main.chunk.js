(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n  box-sizing: border-box\n}\n\n.containerApp {\n    outline: 2px solid #fff;\n    outline-offset: -8px;\n    background-color: #f74b78;\n    color: #fff;\n    font-size: 17px;\n   \n    margin: 0 auto\n}\n input{\n   border-radius: 5px;\n   width: 100px;\n }\ni{\n  font-size: 30px;\n  color: #fff;\n}\ni:hover{\n   font-size: 40px;\n}\n\n.iconStyle  {\n    font-size: 48px;\n    position: absolute;\n    top: 26px;\n    right: 15px;\n    cursor: pointer;\n    padding: 5px;\n  }\n\n  .meter { \n\theight: 40px; \n\tposition: relative;\n  background-image: url(" + escape(__webpack_require__(/*! ./progress-bw-light-96d82c64f20a376f32b16285193cbf0f.svg */ "./src/progress-bw-light-96d82c64f20a376f32b16285193cbf0f.svg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n\tpadding: 10px;\n}\n\n.meter2 {\n  /* display: block;\n  height: 100%;\n  border: 1px solid red; */\n  /* border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: rgb(43,194,83); */\n  /* background-image: url(./progress-color-69e8606201e12e0c1eb64c28a3acf414.svg);\n  position: relative;\n  overflow: hidden; */\n  display: block;\n    height: 100%;\n    border: 1px solid red;\n    background-image: url(" + escape(__webpack_require__(/*! ./progress-color-69e8606201e12e0c1eb64c28a3acf414.svg */ "./src/progress-color-69e8606201e12e0c1eb64c28a3acf414.svg")) + ");\n    position: relative;\n    overflow: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_textImageComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/textImageComponent */ "./src/components/textImageComponent.js");






var _jsxFileName = "/home/ada/kamil-projekty/wyzwanie-czytanie/src/App.js";



var iconStyle = {
  fontSize: '48px',
  position: 'absolute',
  top: '26px',
  right: '15px',
  cursor: 'pointer',
  padding: '5px'
};

var App =
/*#__PURE__*/
function (_Component) {
  Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    _this.readBookHendler = function () {
      _this.setState(function (prevState, props) {
        return {
          readingNumberOfBook: prevState.readingNumberOfBook + 1,
          percent: Math.round((_this.state.readingNumberOfBook + 1) * 100 / _this.state.number)
        };
      });
    };

    _this.toogleButtonHendler = function () {
      var doesShowSecondPage = _this.state.isSeconPage;
      var dosesShowFirdPage = _this.state.isFirdPage;

      _this.setState({
        isSeconPage: !doesShowSecondPage,
        isFirdPage: !dosesShowFirdPage,
        percent: Math.round(_this.state.readingNumberOfBook * 100 / _this.state.number)
      });
    };

    _this.toogleExitHendler = function () {
      var doesShowFourthPage = _this.state.isFourthPage;
      var doesShowSecondPage = _this.state.isSeconPage;

      _this.setState({
        isSeconPage: !doesShowSecondPage,
        isFourthPage: !doesShowFourthPage
      });
    };

    _this.changeContentHandler = function (e) {
      var Newnumber = e.target.value;

      _this.setState({
        number: Newnumber
      });
    };

    _this.changeWordHandler = function (inputnumber, singularNumber, pluralNumber, pluralNumber_genitive) {
      inputnumber = Math.abs(_this.state.number);
      if (inputnumber === 1) return singularNumber;
      var rest10 = inputnumber % 10;
      var rest100 = inputnumber % 100;
      if (rest10 > 4 || rest10 < 2 || rest100 < 15 && rest100 > 11) return pluralNumber_genitive;
      return pluralNumber;
    };

    _this.state = {
      isSeconPage: false,
      isFirstPage: true,
      isFirdPage: false,
      isFourthPage: false,
      number: "",
      showOn: true,
      showComponent: false,
      disabled: true,
      readingNumberOfBook: 0,
      percent: 0
    };
    _this.enableShowSeconPage = _this.enableShowSeconPage.bind(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.enableShowFirdPage = _this.enableShowFirdPage.bind(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.enableShowFourthPage = _this.enableShowFourthPage.bind(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.returnToOnePage = _this.returnToOnePage.bind(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.readBookHendler = _this.readBookHendler.bind(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "enableShowSeconPage",
    value: function enableShowSeconPage() {
      this.setState({
        isSeconPage: true,
        isFirstPage: false
      });
    }
  }, {
    key: "enableShowFirdPage",
    value: function enableShowFirdPage() {
      this.setState({
        isSeconPage: false,
        isFirstPage: false,
        isFirdPage: true
      });
    }
  }, {
    key: "enableShowFourthPage",
    value: function enableShowFourthPage() {
      this.setState({
        isSeconPage: false,
        isFirstPage: false,
        isFirdPage: false,
        isFourthPage: true
      });
    }
  }, {
    key: "returnToOnePage",
    value: function returnToOnePage() {
      this.setState({
        isSeconPage: false,
        isFirstPage: true,
        isFirdPage: false,
        isFourthPage: false,
        disabled: true,
        number: ""
      });
    } // hendler dodajacy ilosc przeczytanych ksiazke , wyliczanie procetow

  }, {
    key: "fourthPagerender",
    //czwarta strona 
    value: function fourthPagerender() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "containerApp p-3 my-4 text-center pt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-times ",
        style: iconStyle,
        onClick: this.toogleExitHendler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "To nie ten przycisk! Tym si\u0119 rezygnuje, a przecie\u017C tak \u015Bwietnie Ci idzie! No dobra, zgadzamy si\u0119 na tydzie\u0144 przerwy, a potem wracaj do wyzwania! Jeste\u015Bmy z Tob\u0105, wi\u0119c naci\u015Bnij anuluj i nie rezygnuj."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: " btn btn-lg btn-light ",
        onClick: this.returnToOnePage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Poddaj si\u0119"));
    }
  }, {
    key: "firdPagerender",
    //trzecia strona 
    value: function firdPagerender() {
      var changeContent = null;
      var disabled = this.state.disabled;

      if (this.state.showOn && this.state.number >= 1 && this.state.number <= 4) {
        changeContent = "Naprawdę? To chyba cel tygodniowy, a nie roczny 😂";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 5 && this.state.number <= 9) {
        changeContent = "To chyba będą baaaardzo grube 📚 książki 😀";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 10 && this.state.number <= 19) {
        changeContent = "1-2 książki miesięcznie to dobry cel. 👍 Trzymamy kciuki.";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 20 && this.state.number <= 29) {
        changeContent = "To będzie dobry rok z ksiązką w tle. Powodzenia! 👍";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 30 && this.state.number <= 39) {
        changeContent = "Hej, świetny wybór. Na pewno Ci się uda! 📚 👍";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 40 && this.state.number <= 59) {
        changeContent = "Challenge Accepted. Powodzenia! 😎";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 60 && this.state.number <= 79) {
        changeContent = "No, no, no. Ktoś tu idzie na rekord! 😉";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 80 && this.state.number <= 99) {
        changeContent = "Jesteś czytelniczym szybkim Billem! Brawo! 👏";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 100) {
        changeContent = "Wynik marzenie! W sporcie to już waga ciężka. 🏋️ Trzymamy kciuki! ";
        disabled = !this.state.disabled;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "containerApp p-3 my-4 text-center pt-5 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-times",
        style: iconStyle,
        onClick: this.toogleButtonHendler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_textImageComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Przeczytam"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        onChange: this.changeContentHandler,
        value: this.state.number,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, this.changeWordHandler(this.state.number, " książkę", " książki", " książek")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, " w 2019 roku!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, changeContent), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: " btn btn-lg btn-light ",
        onClick: this.toogleButtonHendler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "zmie\u0144"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "lub"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        onClick: this.enableShowFourthPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, " Zrezygnuj>"))));
    }
  }, {
    key: "seondPagerender",
    //druga strona 
    value: function seondPagerender() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "containerApp p-3 my-4 text-center pt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "far fa-edit",
        style: iconStyle,
        onClick: this.enableShowFirdPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_textImageComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, " Przeczyta\u0142e\u015B ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, this.state.readingNumberOfBook), " z ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, this.state.number), " ksi\u0105\u017Cek w tym roku. "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "progress-bar",
        style: {
          width: this.state.percent + '%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "meter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "meter2",
        style: {
          width: "25%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, this.state.percent, "%"))));
    }
  }, {
    key: "firstPagerender",
    // pierwsza strona wyzwanie 
    value: function firstPagerender() {
      var changeContent = null;
      var disabled = this.state.disabled;

      if (this.state.showOn && this.state.number >= 1 && this.state.number <= 4) {
        changeContent = "Naprawdę? To chyba cel tygodniowy, a nie roczny 😂";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 5 && this.state.number <= 9) {
        changeContent = "To chyba będą baaaardzo grube 📚 książki 😀";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 10 && this.state.number <= 19) {
        changeContent = "1-2 książki miesięcznie to dobry cel. 👍 Trzymamy kciuki.";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 20 && this.state.number <= 29) {
        changeContent = "To będzie dobry rok z ksiązką w tle. Powodzenia! 👍";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 30 && this.state.number <= 39) {
        changeContent = "Hej, świetny wybór. Na pewno Ci się uda! 📚 👍";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 40 && this.state.number <= 59) {
        changeContent = "Challenge Accepted. Powodzenia! 😎";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 60 && this.state.number <= 79) {
        changeContent = "No, no, no. Ktoś tu idzie na rekord! 😉";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 80 && this.state.number <= 99) {
        changeContent = "Jesteś czytelniczym szybkim Billem! Brawo! 👏";
        disabled = !this.state.disabled;
      }

      if (this.state.showOn && this.state.number >= 100) {
        changeContent = "Wynik marzenie! W sporcie to już waga ciężka. 🏋️ Trzymamy kciuki! ";
        disabled = !this.state.disabled;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "containerApp p-3  text-center pt-5 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_textImageComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "Przeczytam "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        onChange: this.changeContentHandler,
        value: this.state.number,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, this.changeWordHandler(this.state.number, " książkę", " książki", " książek")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, " w 2019 roku!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, changeContent), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: " btn btn-lg btn-light ",
        onClick: this.enableShowSeconPage,
        disabled: disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "Bior\u0119 udzia\u0142"))));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, this.state.isFirstPage ? this.firstPagerender() : null, this.state.isSeconPage ? this.seondPagerender() : null, this.state.isFirdPage ? this.firdPagerender() : null, this.state.isFourthPage ? this.fourthPagerender() : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: this.readBookHendler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "ksi\u0105\u017Cka przeczytana"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/textImageComponent.js":
/*!**********************************************!*\
  !*** ./src/components/textImageComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/ada/kamil-projekty/wyzwanie-czytanie/src/components/textImageComponent.js";


var TextImageComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextImageComponent, _React$Component);

  function TextImageComponent() {
    Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextImageComponent);

    return Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TextImageComponent).apply(this, arguments));
  }

  Object(_home_ada_kamil_projekty_wyzwanie_czytanie_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextImageComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Wyzwanie - Czytanie!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "book",
        src: "/ksiazka.svg",
        width: "150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }));
    }
  }]);

  return TextImageComponent;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextImageComponent);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/ada/kamil-projekty/wyzwanie-czytanie/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/progress-bw-light-96d82c64f20a376f32b16285193cbf0f.svg":
/*!********************************************************************!*\
  !*** ./src/progress-bw-light-96d82c64f20a376f32b16285193cbf0f.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/progress-bw-light-96d82c64f20a376f32b16285193cbf0f.96d82c64.svg";

/***/ }),

/***/ "./src/progress-color-69e8606201e12e0c1eb64c28a3acf414.svg":
/*!*****************************************************************!*\
  !*** ./src/progress-color-69e8606201e12e0c1eb64c28a3acf414.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/progress-color-69e8606201e12e0c1eb64c28a3acf414.69e86062.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ada/kamil-projekty/wyzwanie-czytanie/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/ada/kamil-projekty/wyzwanie-czytanie/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map