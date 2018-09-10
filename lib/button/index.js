'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = require('../BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_BaseComponent) {
	_inherits(Button, _BaseComponent);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	}

	_createClass(Button, [{
		key: 'onClick',
		value: function onClick() {
			var _this2 = this;

			var onClick = this.props.onClick;

			if (!onClick) {
				return;
			}
			var p = onClick.apply(undefined, arguments);
			if (p) {
				this.loading = true;
				this.setState({});
				p.then(function () {
					_this2.loading = false;
					_this2.setState({});
				}).catch(function () {
					_this2.loading = false;
					_this2.setState({});
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    theme = _props.theme,
			    size = _props.size,
			    type = _props.type,
			    children = _props.children,
			    className = _props.className,
			    disabled = _props.disabled,
			    loading = _props.loading,
			    onClick = _props.onClick,
			    props = _objectWithoutProperties(_props, ['theme', 'size', 'type', 'children', 'className', 'disabled', 'loading', 'onClick']);

			var _loading = this.loading || loading;
			return _react2.default.createElement(
				'button',
				_extends({
					onClick: this.onClick.bind(this),
					className: (0, _classnames2.default)('mona-btn', 'mona-btn-theme-' + ('' + theme), 'mona-btn-size-' + ('' + size), className),
					disabled: disabled || _loading,
					type: type
				}, props),
				!_loading ? children : null,
				_loading ? _react2.default.createElement(
					_row2.default,
					{ align: 'center' },
					_react2.default.createElement(_icon2.default, { name: 'loading', className: 'mona-btn-loading' }),
					children
				) : null
			);
		}
	}]);

	return Button;
}(_BaseComponent3.default);

Button.Group = _group2.default;
Button.defaultProps = {
	size: 'default',
	theme: 'default',
	type: 'button'
};
exports.default = Button;