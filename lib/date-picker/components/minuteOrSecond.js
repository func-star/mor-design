'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tool = require('../../tool');

var _tool2 = _interopRequireDefault(_tool);

var _inputTime = require('./inputTime');

var _inputTime2 = _interopRequireDefault(_inputTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinuteOrSecondSelect = function (_Component) {
	_inherits(MinuteOrSecondSelect, _Component);

	function MinuteOrSecondSelect(props) {
		_classCallCheck(this, MinuteOrSecondSelect);

		var _this = _possibleConstructorReturn(this, (MinuteOrSecondSelect.__proto__ || Object.getPrototypeOf(MinuteOrSecondSelect)).call(this, props));

		_this.sel = props.ctrl[props.type];
		return _this;
	}

	_createClass(MinuteOrSecondSelect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var ctrl = this.props.ctrl;

			this.inputTimeChange = function (date) {
				var val = void 0;
				if (_this2.props.type === 'minute') {
					val = date.format('mm');
				} else {
					val = date.format('ss');
				}
				if (val !== _this2.sel) {
					_this2.sel = val;
					_this2.refs.ipt.setValue(val);
				}
			};
			ctrl.on('inputTime', this.inputTimeChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var ctrl = this.props.ctrl;

			ctrl.off('inputTime', this.inputTimeChange);
		}
	}, {
		key: 'blur',
		value: function blur() {
			var sel = this.refs.ipt.getValue();
			if (!sel) {
				sel = 0;
			}
			this.refs.ipt.setValue(_tool2.default.pad(sel, 2));
		}
	}, {
		key: 'getTimeList',
		value: function getTimeList() {
			if (this.times) {
				return this.times;
			}
			this.times = _tool2.default.newArray(0, 60).map(function (v) {
				return _tool2.default.pad(v, 2);
			});
			return this.times;
		}
	}, {
		key: 'select',
		value: function select(item) {
			this.refs.ipt.setValue(item);
			this.onChange();
		}
	}, {
		key: 'iptChange',
		value: function iptChange() {
			var sel = _tool2.default.pad(this.refs.ipt.getValue(), 2);
			if (this.times.indexOf(sel) < 0 && sel !== '') {
				this.refs.ipt.setValue(this.sel);
				return;
			}
			this.sel = sel;
			this.onChange();
			this.setState({});
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			var ctrl = this.props.ctrl;

			ctrl[this.props.type] = this.refs.ipt.getValue();
			ctrl.date[this.props.type](ctrl[this.props.type]);
			ctrl.changeTime(this.date);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    onSelect = _props.onSelect,
			    className = _props.className,
			    type = _props.type,
			    props = _objectWithoutProperties(_props, ['onSelect', 'className', 'type']);

			var times = this.props.times || this.getTimeList();
			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(_inputTime2.default, { defaultValue: _tool2.default.pad(this.sel, 2), min: '0', max: '23', ref: 'ipt',
					onChange: this.iptChange.bind(this),
					onBlur: this.blur.bind(this) })
			);
		}
	}]);

	return MinuteOrSecondSelect;
}(_react.Component);

exports.default = MinuteOrSecondSelect;