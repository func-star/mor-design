'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
	_inherits(Input, _Component);

	function Input() {
		_classCallCheck(this, Input);

		return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
	}

	_createClass(Input, [{
		key: 'getName',
		value: function getName() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			return this.props[name];
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.refs.ipt.value;
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			this.refs.ipt.value = value;
		}
	}, {
		key: 'focus',
		value: function focus() {
			return this.refs.ipt.focus();
		}
	}, {
		key: 'onChange',
		value: function onChange(e) {
			if (this.props.onChange) {
				this.props.onChange(this.refs.ipt.value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    verify = _props.verify,
			    className = _props.className,
			    size = _props.size,
			    type = _props.type,
			    disabled = _props.disabled,
			    onChange = _props.onChange,
			    props = _objectWithoutProperties(_props, ['verify', 'className', 'size', 'type', 'disabled', 'onChange']);

			return _react2.default.createElement('input', _extends({
				type: type,
				className: (0, _classnames2.default)('mona-input mona-form-control', 'mona-input-size-' + size, className),
				disabled: disabled,
				ref: 'ipt',
				onChange: this.onChange.bind(this)
			}, props));
		}
	}]);

	return Input;
}(_react.Component);

Input.defaultProps = {
	size: 'normal'
};
exports.default = Input;