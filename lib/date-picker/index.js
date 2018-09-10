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

var _datePicker = require('./datePicker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monaDatePicker = function (_Component) {
	_inherits(monaDatePicker, _Component);

	function monaDatePicker(props) {
		_classCallCheck(this, monaDatePicker);

		var _this = _possibleConstructorReturn(this, (monaDatePicker.__proto__ || Object.getPrototypeOf(monaDatePicker)).call(this, props));

		_this.state = {};
		_this.key = Date.now();
		var _this$props = _this.props,
		    defaultValue = _this$props.defaultValue,
		    valueType = _this$props.valueType;

		if (defaultValue) {
			if (valueType === 'unix' && parseInt(defaultValue) === defaultValue) {
				_this.date = _tool2.default.moment(defaultValue * 1000);
			} else {
				_this.date = _tool2.default.moment(defaultValue);
			}
		}
		return _this;
	}

	_createClass(monaDatePicker, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.form = _tool2.default.queryParentReactDom(this.refs.wrap, '.mona-form');
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
			if (!this.date) {
				return null;
			}
			var _props = this.props,
			    valueType = _props.valueType,
			    format = _props.format;

			if (valueType === 'unix') {
				return this.date.unix();
			}
			if (valueType === 'value') {
				return this.date.valueOf();
			}
			if (format) {
				return this.date.format(format);
			}
			if (valueType === 'string') {
				return this.date.format('YYYY-MM-DD');
			}
			return this.date;
		}
	}, {
		key: 'setValue',
		value: function setValue(date) {
			this.date = _tool2.default.moment(date);
			this.key = Date.now();
			this.setState({});
		}
	}, {
		key: 'getDate',
		value: function getDate() {
			return this.date;
		}
	}, {
		key: 'onChange',
		value: function onChange(date, dateString) {
			this.date = date;
			this.setState({});
			if (this.props.onChange) {
				this.props.onChange(date, dateString);
			}
			if (this.form) {
				this.form.onChange();
			}
		}
	}, {
		key: 'disabledDate',
		value: function disabledDate(val) {
			if (!val) {
				return;
			}
			var _props2 = this.props,
			    disabledDate = _props2.disabledDate,
			    disabledStartReact = _props2.disabledStartReact,
			    disabledEndReact = _props2.disabledEndReact;

			if (disabledDate) {
				return disabledDate(val);
			}
			if (disabledStartReact && disabledStartReact()) {
				var date = disabledStartReact().getDate();
				if (!date) {
					return;
				}
				date = date.clone();
				date.startOf('day');
				return date.valueOf() > val.valueOf();
			}
			if (disabledEndReact && disabledEndReact()) {
				var _date = disabledEndReact().getDate();
				if (!_date) {
					return;
				}
				_date = _date.clone();
				_date.startOf('day');
				return _date.valueOf() < val.valueOf();
			}
		}
	}, {
		key: 'show',
		value: function show() {
			this.refs.picker.show();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    className = _props3.className,
			    valueType = _props3.valueType,
			    disabledDate = _props3.disabledDate,
			    disabledStartReact = _props3.disabledStartReact,
			    disabledEndReact = _props3.disabledEndReact,
			    format = _props3.format,
			    defaultValue = _props3.defaultValue,
			    props = _objectWithoutProperties(_props3, ['className', 'valueType', 'disabledDate', 'disabledStartReact', 'disabledEndReact', 'format', 'defaultValue']);

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-date-wrapper mona-form-control', className), ref: 'wrap', key: this.key },
				_react2.default.createElement(_datePicker2.default, _extends({ disabledDate: this.disabledDate.bind(this) }, props, { defaultValue: this.date, onChange: this.onChange.bind(this), ref: 'picker' }))
			);
		}
	}]);

	return monaDatePicker;
}(_react.Component);

exports.default = monaDatePicker;