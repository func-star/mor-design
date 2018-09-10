'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var Textarea = function (_Component) {
	_inherits(Textarea, _Component);

	function Textarea() {
		_classCallCheck(this, Textarea);

		return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
	}

	_createClass(Textarea, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (_typeof(this.props.autosize) === 'object') {
				var sty = window.getComputedStyle(this.refs.text);
				this.styleInfo = {
					append: parseInt(sty.paddingTop) + parseInt(sty.paddingBottom),
					lineHeight: parseInt(sty.lineHeight)
				};
				this.setState({});
			}
		}
	}, {
		key: 'getName',
		value: function getName() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			return this.props[name];
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.refs.text.value;
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			this.refs.text.value = value;
		}
	}, {
		key: 'onChange',
		value: function onChange(e) {
			var autosize = this.props.autosize;

			if (autosize) {
				this.refs.text.style.height = 'auto';
				this.refs.text.style.height = this.refs.text.scrollHeight + 2 + 'px';
			}

			if (this.props.onChange) {
				this.props.onChange(this.refs.text.value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    autosize = _props.autosize,
			    error = _props.error,
			    rows = _props.rows,
			    style = _props.style,
			    disabled = _props.disabled,
			    verify = _props.verify,
			    props = _objectWithoutProperties(_props, ['className', 'autosize', 'error', 'rows', 'style', 'disabled', 'verify']);

			var sty = _extends({}, style);

			if ((typeof autosize === 'undefined' ? 'undefined' : _typeof(autosize)) === 'object') {
				if (autosize.minRows && this.styleInfo) {
					sty.minHeight = this.styleInfo.append + autosize.minRows * this.styleInfo.lineHeight;
				}
				if (autosize.minRows && this.styleInfo) {
					sty.maxHeight = this.styleInfo.append + autosize.maxRows * this.styleInfo.lineHeight;
				}
			}
			return _react2.default.createElement('textarea', _extends({
				ref: 'text',
				style: sty,
				className: (0, _classnames2.default)('mona-textarea mona-form-control', className),
				rows: rows,
				disabled: disabled ? 'disabled' : '',
				onChange: this.onChange.bind(this)
			}, props));
		}
	}]);

	return Textarea;
}(_react.Component);

Textarea.defaultProps = {
	rows: 3
};
exports.default = Textarea;