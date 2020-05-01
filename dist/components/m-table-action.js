"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-enable no-unused-vars */
var MTableAction = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MTableAction, _React$Component);

  var _super = _createSuper(MTableAction);

  function MTableAction() {
    (0, _classCallCheck2["default"])(this, MTableAction);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MTableAction, [{
    key: "render",
    value: function render() {
      var _this = this;

      var action = this.props.action;

      if (typeof action === 'function') {
        action = action(this.props.data);

        if (!action) {
          return null;
        }
      }

      var handleOnClick = function handleOnClick(event) {
        if (action.onClick) {
          action.onClick(event, _this.props.data);
          event.stopPropagation();
        }
      };

      var button = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_core.IconButton, {
        color: "inherit",
        disabled: action.disabled,
        onClick: function onClick(event) {
          return handleOnClick(event);
        }
      }, typeof action.icon === "string" ? /*#__PURE__*/React.createElement(_core.Icon, (0, _extends2["default"])({}, action.iconProps, {
        fontSize: "small"
      }), action.icon) : /*#__PURE__*/React.createElement(action.icon, (0, _extends2["default"])({}, action.iconProps, {
        disabled: action.disabled
      }))));

      if (action.tooltip) {
        return /*#__PURE__*/React.createElement(_core.Tooltip, {
          title: action.tooltip
        }, button);
      } else {
        return button;
      }
    }
  }]);
  return MTableAction;
}(React.Component);

MTableAction.defaultProps = {
  action: {},
  data: {}
};
MTableAction.propTypes = {
  action: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]).isRequired,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].object)])
};
var _default = MTableAction;
exports["default"] = _default;