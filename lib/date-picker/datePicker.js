'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _select = require('./components/select');

var _select2 = _interopRequireDefault(_select);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_Component) {
	_inherits(DatePicker, _Component);

	function DatePicker(props) {
		_classCallCheck(this, DatePicker);

		var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

		_this.exactTime = {
			second: 6,
			minute: 5,
			hour: 4,
			date: 3,
			month: 2,
			year: 1
		};

		var exactTime = _this.exactTime[_this.props.exactTime] || 3;
		_this.format = ['YYYY', '-MM', '-DD', ' HH', ':mm', ':ss'].slice(0, exactTime).join('');
		_this.date = props.defaultValue;
		return _this;
	}

	_createClass(DatePicker, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.ipt = (0, _reactDom.findDOMNode)(this.refs.ipt);
			if (this.props.defaultValue) {
				this.ipt.value = this.props.defaultValue.format(this.format);
			}
		}
	}, {
		key: 'onSelect',
		value: function onSelect(date) {
			this.date = date;
			if (date) {
				this.refs.ipt.setValue(date.format(this.format));
			} else {
				this.refs.ipt.setValue('');
			}
			this.onChange(date);
			this.refs.drop.hide();
		}
	}, {
		key: 'clear',
		value: function clear(e) {
			e.stopPropagation();
			this.refs.ipt.setValue('');
			this.date = null;
			this.onChange(this.date);
		}
	}, {
		key: 'onChange',
		value: function onChange(date) {
			this.props.onChange && this.props.onChange(date);
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			var disabled = this.props.disabled;

			if (disabled) {
				return;
			}

			this.refs.drop.toggle();
		}
	}, {
		key: 'show',
		value: function show() {
			this.refs.ipt.focus();
			this.refs.drop.show();
		}
	}, {
		key: 'placement',
		value: function placement(parentInfo, domInfo, overlayInfo) {
			var left = domInfo.left - parentInfo.left;
			var top = domInfo.top - parentInfo.top + domInfo.height + 5;
			var rect = domInfo.dom.getBoundingClientRect();
			var bottom = window.innerHeight - rect.bottom;
			if (overlayInfo.height > bottom) {
				top = domInfo.top - parentInfo.top - overlayInfo.height - 5;
			}
			if (top < domInfo.top - rect.top) {
				//top = domInfo.top - rect.top;
				top = domInfo.top - parentInfo.top + domInfo.height + 5;
			}
			return {
				left: left,
				top: top
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    allowClear = _props.allowClear,
			    disabled = _props.disabled,
			    placeholder = _props.placeholder,
			    getContainer = _props.getContainer,
			    props = _objectWithoutProperties(_props, ['className', 'allowClear', 'disabled', 'placeholder', 'getContainer']);

			var dateSel = _react2.default.createElement(
				'div',
				{ className: 'mona-date-picker-wrap' },
				_react2.default.createElement(_select2.default, _extends({ defaultValue: this.date, onSelect: this.onSelect.bind(this) }, props))
			);
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-date-picker', className), onClick: this.toggle.bind(this) },
				_react2.default.createElement(
					_dropdown2.default,
					{ placement: this.placement.bind(this), cleanWhenHide: true, topAdd: 5, overlay: dateSel,
						trigger: 'blurCheck', ref: 'drop', getContainer: getContainer },
					_react2.default.createElement(
						_row2.default,
						{ className: (0, _classnames2.default)('pos-r', { 'mona-date-picker-allowClear': this.date && allowClear }), align: 'center' },
						_react2.default.createElement(_input2.default, { placeholder: placeholder, readOnly: true, ref: 'ipt', disabled: disabled, className: 'mona-date-picker-ipt' }),
						_react2.default.createElement(
							'div',
							{ className: 'mona-date-picker-icon flex-center' },
							_react2.default.createElement(_icon2.default, { name: 'calendar', className: 'mona-date-picker-icon-calendar' }),
							this.date && allowClear ? _react2.default.createElement(_icon2.default, { name: 'solid-close', className: 'd-b mona-date-picker-icon-clear', onClick: this.clear.bind(this) }) : null
						)
					)
				)
			);
		}
	}]);

	return DatePicker;
}(_react.Component);

DatePicker.defaultProps = {
	showToday: true,
	allowClear: true,
	exactTime: 'date'
};
exports.default = DatePicker;