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

var SelectMultipleIpt = function (_Component) {
	_inherits(SelectMultipleIpt, _Component);

	function SelectMultipleIpt() {
		_classCallCheck(this, SelectMultipleIpt);

		return _possibleConstructorReturn(this, (SelectMultipleIpt.__proto__ || Object.getPrototypeOf(SelectMultipleIpt)).apply(this, arguments));
	}

	_createClass(SelectMultipleIpt, [{
		key: 'focus',
		value: function focus() {
			this.refs.ipt.focus();
		}
	}, {
		key: 'onChange',
		value: function onChange(e) {
			if (!e.target.value && e.keyCode) {}
			this.refs.ipt.style.width = '14px';
			this.refs.ipt.style.width = this.refs.ipt.scrollWidth + 2 + 'px';
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
		key: 'setValue',
		value: function setValue(value) {
			this.refs.ipt.value = value;
			this.refs.ipt.style.width = '14px';
			this.refs.ipt.style.width = this.refs.ipt.scrollWidth + 2 + 'px';
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {

			this.props.onFocus();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', { ref: 'ipt',
				onFocus: this.onFocus.bind(this),
				className: 'mona-select-multiple-ipt',
				onChange: this.onChange.bind(this) });
		}
	}]);

	return SelectMultipleIpt;
}(_react.Component);

exports.default = SelectMultipleIpt;