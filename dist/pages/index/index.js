(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _eval = __webpack_require__(/*! ./eval */ "./src/pages/index/eval.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["viewer", "showblog"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).apply(this, arguments);
      this.isDecimalAdded = false;
      this.isOperatorAdded = false; // 是否已经输入运算符
      this.isStarted = false; //  是否开始输入数字
      this.state = {
        viewer: '0',
        showblog: false //  显示博客名称
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _taroWeapp2.default.setNavigationBarTitle({
        title: ''
      });
      _taroWeapp2.default.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#eee'
      });
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        // console.log(res.target)
      }
      return {
        title: 'k380-calculator',
        path: '/pages/index/index'
      };
    }
    // 判断是否有运算符

  }, {
    key: 'isOperator',
    value: function isOperator(character) {
      return ['+', '-', '×', '÷'].includes(character);
    }
  }, {
    key: 'append',
    value: function append(character) {
      var _state = this.state,
          viewer = _state.viewer,
          showblog = _state.showblog;

      showblog && this.setState({ showblog: false });
      _taroWeapp2.default.vibrateShort();
      if (viewer === '0' && !this.isOperator(character)) {
        if (character === '.') {
          this.setState({
            viewer: viewer + character + ''
          });
          this.isDecimalAdded = true;
        } else {
          this.setState({
            viewer: character + ''
          });
        }
        this.isStarted = true;
        return;
      }
      // 输入数字
      if (!this.isOperator(character)) {
        if (character === '.' && this.isDecimalAdded) {
          return;
        }
        if (character === '.') {
          this.isDecimalAdded = true;
          this.isOperatorAdded = true;
        } else {
          this.isOperatorAdded = false;
        }
        this.setState({
          viewer: viewer + character + ''
        });
      }
      // 输入运算符
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.setState({
          viewer: viewer + character + ''
        });
        this.isDecimalAdded = false;
        this.isOperatorAdded = true;
      }
    }
    // 点击 =

  }, {
    key: 'calculate',
    value: function calculate() {
      _taroWeapp2.default.vibrateShort();
      var _state2 = this.state,
          viewer = _state2.viewer,
          showblog = _state2.showblog;

      if (viewer === '21' || showblog) {
        // 彩蛋
        this.setState({
          viewer: 'BerniLin21',
          showblog: true
        });
      } else {
        this.setState({
          // viewer: parseFloat(eval(result).toFixed(9)).toString()
          viewer: this.result(viewer)
        });
        this.isDecimalAdded = false;
        this.isOperatorAdded = false;
      }
    }
    // 格式化

  }, {
    key: 'result',
    value: function result(v) {
      var format = v.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/');
      switch (format[format.length - 1]) {
        case '+':
          format += '0';
          break;
        case '-':
          format += '0';
          break;
        case '*':
          format += '1';
          break;
        case '/':
          format += '1';
          break;
      }
      var result = parseFloat((0, _eval.computed)(format).toFixed(9)).toString() === 'NaN' ? '0' : parseFloat((0, _eval.computed)(format).toFixed(9)).toString();
      return result;
    }
    // 点击 +/-

  }, {
    key: 'calculateSign',
    value: function calculateSign() {
      var _this2 = this;

      var _state3 = this.state,
          viewer = _state3.viewer,
          showblog = _state3.showblog;

      showblog && this.setState({ showblog: false });
      _taroWeapp2.default.vibrateShort();
      if (this.isOperatorAdded || !this.isStarted) {
        return;
      }
      this.setState({
        viewer: '-1 *' + viewer
        // viewer: viewer + 'r 1'
      }, function () {
        _this2.calculate();
      });
    }
    // 点击 %

  }, {
    key: 'calculatePercent',
    value: function calculatePercent() {
      var _this3 = this;

      var _state4 = this.state,
          viewer = _state4.viewer,
          showblog = _state4.showblog;

      showblog && this.setState({ showblog: false });
      _taroWeapp2.default.vibrateShort();
      if (this.isOperatorAdded || !this.isStarted) {
        return;
      }
      this.setState({
        viewer: viewer + '* 0.01'
      }, function () {
        _this3.calculate();
      });
    }
    // 清除

  }, {
    key: 'clear',
    value: function clear() {
      _taroWeapp2.default.vibrateShort();
      this.setState({
        viewer: '0',
        showblog: false
      });
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;
      this.isStarted = false;
    }
  }, {
    key: 'toBlog',
    value: function toBlog() {}
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state5 = this.__state,
          viewer = _state5.viewer,
          showblog = _state5.showblog;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["toBlog", "clear", "calculateSign", "calculatePercent", "append", "calculate"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\workPack\\_demo\\k380-calculator\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/workPack/_demo/k380-calculator/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/eval.js":
/*!*********************************!*\
  !*** ./src/pages/index/eval.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**计算没有括号的表达式的值(操作符限定为'+'、'-'、'*'、'/') */
function calcExpressionWithoutQuote(expression) {
  if (expression.indexOf('(') > -1 || expression.indexOf(')') > -1) {
    return calcExpression(expression);
  }
  var operators = [];
  var nums = [];
  var lastOperatorIndex = -1;
  for (var i = 0; i < expression.length; i++) {
    var charAtIndex = expression.charAt(i);
    if (isOperatorChar(charAtIndex)) {
      operators[operators.length] = charAtIndex;
      nums[nums.length] = expression.substring(lastOperatorIndex + 1, i);
      lastOperatorIndex = i;
    }
    if (i == expression.length - 1 && lastOperatorIndex < i) {
      nums[nums.length] = expression.substring(lastOperatorIndex + 1, expression.length);
    }
  }
  if (operators.length <= 0 || nums.length <= 0) {
    return expression;
  }
  while (operators.indexOf('*') > -1 || operators.indexOf('/') > -1) {
    operators.forEach(function (value, index) {
      if (value == '*' || value == '/') {
        // 拿到操作符位置。
        var tempResult = calcExpressionWithSingleOperator(nums[index], nums[index + 1], value);
        operators.splice(index, 1);
        nums.splice(index, 2, [tempResult]);
      }
    });
  }
  var calcResult = nums[0] * 1;
  // 现在只剩下'+'、'-'了
  if (operators.indexOf('+') > -1 || operators.indexOf('-') > -1) {
    for (var index = 0; index < operators.length; index++) {
      var value = operators[index];
      if (value == '+' || value == '-') {
        calcResult = calcExpressionWithSingleOperator(calcResult, nums[index + 1], value);
      }
    }
    return calcResult;
  } else {
    return nums[0] * 1;
  }
}

/**
* 计算只有一个操作符的表达式的值(操作符限定为'+'、'-'、'*'、'/')
*/
function calcExpressionWithSingleOperator(num1, num2, operator) {
  if (operator == '+') return num1 * 1 + num2 * 1;
  if (operator == '-') return num1 * 1 - num2 * 1;
  if (operator == '*') return num1 * num2;
  if (operator == '/') return num1 / num2;
  return NaN;
}

/** 计算算术表达式的值 */
function calcExpression(expression) {
  expression = expression.replace(/\s/g, '').replace(/÷/g, '/').replace(/x/g, '*').replace(/×/g, '*').replace(/X/g, '*');
  if (getCharCountInString(expression, '(') != getCharCountInString(expression, ')')) return NaN;
  while (expression && expression.indexOf('(') > -1 && expression.indexOf(')') > -1) {
    var firstRightQuoteIndex = expression.indexOf(')');
    var leftQuoteIndex = expression.indexOf('(');
    for (var i = leftQuoteIndex; i < firstRightQuoteIndex; i++) {
      if (expression.charAt(i) == '(') {
        leftQuoteIndex = i;
      }
    }
    var tempExpression = expression.substring(leftQuoteIndex + 1, firstRightQuoteIndex);
    var tempValue = calcExpressionWithoutQuote(tempExpression);
    expression = expression.substring(0, leftQuoteIndex) + tempValue + expression.substring(firstRightQuoteIndex + 1, expression.length);
  }
  return calcExpressionWithoutQuote(expression);
}

/**获取字符串中某子字符串出现次数 */
function getCharCountInString(strings, chars) {
  return strings.split(chars).length - 1;
}

/**判断字符是否是运算符 */
function isOperatorChar(aimChar) {
  return '+-*/'.indexOf(aimChar) > -1;
}

module.exports = { computed: calcExpression };

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_workPack_demo_k380_calculator_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/workPack/_demo/k380-calculator/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\workPack\\_demo\\k380-calculator\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_workPack_demo_k380_calculator_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_workPack_demo_k380_calculator_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_workPack_demo_k380_calculator_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_workPack_demo_k380_calculator_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);