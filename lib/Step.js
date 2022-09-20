"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Step = /*#__PURE__*/function (_Component) {
  _inherits(Step, _Component);

  var _super = _createSuper(Step);

  function Step() {
    var _this;

    _classCallCheck(this, Step);

    _this = _super.call(this);
    _this.getStyles = _this.getStyles.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Step, [{
    key: "getStyles",
    value: function getStyles() {
      var _this$props = this.props,
          activeColor = _this$props.activeColor,
          completeColor = _this$props.completeColor,
          defaultColor = _this$props.defaultColor,
          circleFontColor = _this$props.circleFontColor,
          activeTitleColor = _this$props.activeTitleColor,
          completeTitleColor = _this$props.completeTitleColor,
          defaultTitleColor = _this$props.defaultTitleColor,
          size = _this$props.size,
          circleFontSize = _this$props.circleFontSize,
          titleFontSize = _this$props.titleFontSize,
          circleTop = _this$props.circleTop,
          titleTop = _this$props.titleTop,
          width = _this$props.width,
          completeOpacity = _this$props.completeOpacity,
          activeOpacity = _this$props.activeOpacity,
          defaultOpacity = _this$props.defaultOpacity,
          completeTitleOpacity = _this$props.completeTitleOpacity,
          activeTitleOpacity = _this$props.activeTitleOpacity,
          defaultTitleOpacity = _this$props.defaultTitleOpacity,
          barStyle = _this$props.barStyle,
          defaultBarColor = _this$props.defaultBarColor,
          completeBarColor = _this$props.completeBarColor,
          defaultBorderColor = _this$props.defaultBorderColor,
          completeBorderColor = _this$props.completeBorderColor,
          activeBorderColor = _this$props.activeBorderColor,
          defaultBorderStyle = _this$props.defaultBorderStyle,
          completeBorderStyle = _this$props.completeBorderStyle,
          activeBorderStyle = _this$props.activeBorderStyle,
          lineMarginOffset = _this$props.lineMarginOffset,
          defaultBorderWidth = _this$props.defaultBorderWidth;
      return {
        step: {
          width: "".concat(width, "%"),
          display: 'table-cell',
          position: 'relative',
          paddingTop: circleTop
        },
        circle: {
          width: size,
          height: size,
          margin: '0 auto',
          backgroundColor: defaultColor,
          borderRadius: '50%',
          textAlign: 'center',
          padding: 1,
          fontSize: circleFontSize,
          color: circleFontColor,
          display: 'block',
          opacity: defaultOpacity,
          borderWidth: defaultBorderColor ? defaultBorderWidth : 0,
          borderColor: defaultBorderColor,
          borderStyle: defaultBorderStyle
        },
        activeCircle: {
          backgroundColor: activeColor,
          opacity: activeOpacity,
          borderWidth: activeBorderColor ? defaultBorderWidth : 0,
          borderColor: activeBorderColor,
          borderStyle: activeBorderStyle
        },
        completedCircle: {
          backgroundColor: completeColor,
          opacity: completeOpacity,
          borderWidth: completeBorderColor ? defaultBorderWidth : 0,
          borderColor: completeBorderColor,
          borderStyle: completeBorderStyle
        },
        index: {
          lineHeight: "".concat(size + circleFontSize / 4, "px"),
          color: circleFontColor
        },
        title: {
          marginTop: titleTop,
          fontSize: titleFontSize,
          fontWeight: '300',
          textAlign: 'center',
          display: 'block',
          color: defaultTitleColor,
          opacity: defaultTitleOpacity
        },
        activeTitle: {
          color: activeTitleColor,
          opacity: activeTitleOpacity
        },
        completedTitle: {
          color: completeTitleColor,
          opacity: completeTitleOpacity
        },
        leftBar: {
          position: 'absolute',
          top: circleTop + size / 2,
          height: 1,
          borderTopStyle: barStyle,
          borderTopWidth: 1,
          borderTopColor: defaultBarColor,
          left: 0,
          right: '50%',
          marginRight: size / 2 + lineMarginOffset,
          opacity: defaultOpacity
        },
        rightBar: {
          position: 'absolute',
          top: circleTop + size / 2,
          height: 1,
          borderTopStyle: barStyle,
          borderTopWidth: 1,
          borderTopColor: defaultBarColor,
          right: 0,
          left: '50%',
          marginLeft: size / 2 + lineMarginOffset,
          opacity: defaultOpacity
        },
        completedBar: {
          borderTopStyle: barStyle,
          borderTopWidth: 1,
          borderTopColor: completeBarColor,
          opacity: completeOpacity
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          icon = _this$props2.icon,
          index = _this$props2.index,
          active = _this$props2.active,
          completed = _this$props2.completed,
          first = _this$props2.first,
          isLast = _this$props2.isLast,
          href = _this$props2.href,
          onClick = _this$props2.onClick;
      var styles = this.getStyles();
      var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active ? styles.activeCircle : {});
      var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active ? styles.activeTitle : {});
      var leftStyle = Object.assign(styles.leftBar, active || completed ? styles.completedBar : {});
      var rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});
      var stepContent = icon ? /*#__PURE__*/_react["default"].createElement("img", {
        src: icon,
        alt: index + 1
      }) : index + 1;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.step
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: circleStyle
      }, active || completed ? /*#__PURE__*/_react["default"].createElement("a", {
        href: href,
        onClick: onClick,
        style: styles.index
      }, stepContent) : /*#__PURE__*/_react["default"].createElement("span", {
        style: styles.index
      }, stepContent)), active || completed ? /*#__PURE__*/_react["default"].createElement("a", {
        href: href,
        onClick: onClick,
        style: titleStyle
      }, title) : /*#__PURE__*/_react["default"].createElement("div", {
        style: titleStyle
      }, title), !first && /*#__PURE__*/_react["default"].createElement("div", {
        style: leftStyle
      }), !isLast && /*#__PURE__*/_react["default"].createElement("div", {
        style: rightStyle
      }));
    }
  }]);

  return Step;
}(_react.Component);

exports["default"] = Step;
Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8,
  defaultBarColor: '#E0E0E0',
  barStyle: 'solid',
  borderStyle: 'solid',
  lineMarginOffset: 4,
  defaultBorderWidth: 3
};
Step.propTypes = {
  width: _propTypes.PropTypes.number.isRequired,
  activeColor: _propTypes.PropTypes.string,
  completeColor: _propTypes.PropTypes.string,
  defaultColor: _propTypes.PropTypes.string,
  activeTitleColor: _propTypes.PropTypes.string,
  completeTitleColor: _propTypes.PropTypes.string,
  defaultTitleColor: _propTypes.PropTypes.string,
  circleFontColor: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.number,
  circleFontSize: _propTypes.PropTypes.number,
  titleFontSize: _propTypes.PropTypes.number,
  circleTop: _propTypes.PropTypes.number,
  titleTop: _propTypes.PropTypes.number,
  title: _propTypes.PropTypes.string,
  index: _propTypes.PropTypes.number,
  active: _propTypes.PropTypes.bool,
  completed: _propTypes.PropTypes.bool,
  first: _propTypes.PropTypes.bool,
  isLast: _propTypes.PropTypes.bool,
  completeOpacity: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
  defaultOpacity: _propTypes.PropTypes.string,
  completeTitleOpacity: _propTypes.PropTypes.string,
  activeTitleOpacity: _propTypes.PropTypes.string,
  defaultTitleOpacity: _propTypes.PropTypes.string,
  barStyle: _propTypes.PropTypes.string,
  defaultBarColor: _propTypes.PropTypes.string,
  completeBarColor: _propTypes.PropTypes.string,
  defaultBorderColor: _propTypes.PropTypes.string,
  completeBorderColor: _propTypes.PropTypes.string,
  activeBorderColor: _propTypes.PropTypes.string,
  defaultBorderStyle: _propTypes.PropTypes.string,
  completeBorderStyle: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  lineMarginOffset: _propTypes.PropTypes.number,
  defaultBorderWidth: _propTypes.PropTypes.number
};