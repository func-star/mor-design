'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBaseMultipleIpt = function (_Component) {
	_inherits(SelectBaseMultipleIpt, _Component);

	function SelectBaseMultipleIpt() {
		_classCallCheck(this, SelectBaseMultipleIpt);

		return _possibleConstructorReturn(this, (SelectBaseMultipleIpt.__proto__ || Object.getPrototypeOf(SelectBaseMultipleIpt)).apply(this, arguments));
	}

	_createClass(SelectBaseMultipleIpt, [{
		key: 'focus',
		value: function focus() {
			this.refs.ipt.focus();
		}
	}, {
		key: 'onChange',
		value: function onChange(e) {
			this.setWidth();
			this.props.onChange(e.target.value);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.onKeyDown = function (e) {
				if (document.activeElement !== _this2.refs.ipt || e.keyCode !== 8) {
					return;
				}
				if (!_this2.refs.ipt.value) {
					return _this2.props.onDelete();
				}
			};
			document.addEventListener('keydown', this.onKeyDown);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.onKeyDown);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.refs.ipt.value;
		}
	}, {
		key: 'setValue',
		value: function setValue(value, full) {
			this.refs.ipt.value = value;
			this.setWidth(full);
		}
	}, {
		key: 'setWidth',
		value: function setWidth(full) {
			if (!full) {
				this.refs.ipt.style.width = '14px';
				this.refs.ipt.style.width = this.refs.ipt.scrollWidth + 2 + 'px';
			} else {
				this.refs.ipt.style.width = '100%';
			}
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {
			this.props.onFocus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    placeholder = _props.placeholder,
			    disabled = _props.disabled;

			return _react2.default.createElement('input', { ref: 'ipt',
				disabled: disabled,
				placeholder: placeholder,
				onFocus: this.onFocus.bind(this),
				className: 'mona-baseSelect-multiple-ipt',
				onChange: this.onChange.bind(this) });
		}
	}]);

	return SelectBaseMultipleIpt;
}(_react.Component);

exports.default = SelectBaseMultipleIpt;