webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.50c1f97ce3bae0c2ba34.hot-update.js.map