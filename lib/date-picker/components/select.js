'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ctrl = require('./ctrl');

var _ctrl2 = _interopRequireDefault(_ctrl);

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _month = require('./month');

var _month2 = _interopRequireDefault(_month);

var _year = require('./year');

var _year2 = _interopRequireDefault(_year);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import ValueIpt from './valueIpt';

var monaDateSelect = function (_Component) {
	_inherits(monaDateSelect, _Component);

	function monaDateSelect(props) {
		_classCallCheck(this, monaDateSelect);

		var _this = _possibleConstructorReturn(this, (monaDateSelect.__proto__ || Object.getPrototypeOf(monaDateSelect)).call(this, props));

		_this.changeView = function (type) {
			_this.selType = type;
			_this.date = _this.ctrl.date;
			_this.setState({});
		};

		_this.onSelect = function (type) {
			var _type = void 0;
			if (_this.ctrl.exactTime[type] >= _this.exactTime) {
				_this.select(_this.ctrl.date);
				return;
			}
			if (type === 'year') {
				_type = 'month';
			}
			if (type === 'month') {
				_type = 'date';
			}
			if (type === 'time') {
				_this.select(_this.ctrl.date);
				return;
			}
			_this.changeView(_type);
		};

		_this.ctrl = new _ctrl2.default();
		_this.date = props.defaultValue || (0, _moment2.default)();
		_this.ctrl.date = _this.date;
		_this.exactTime = _this.ctrl.exactTime[props.exactTime];

		if (_this.exactTime >= _this.ctrl.exactTime.hour) {
			_this.ctrl.hour = _this.date.format('HH');
		}
		if (_this.exactTime >= _this.ctrl.exactTime.minute) {
			_this.ctrl.minute = _this.date.format('mm');
		}
		if (_this.exactTime >= _this.ctrl.exactTime.second) {
			_this.ctrl.second = _this.date.format('ss');
		}

		if (props.defaultHour) {
			_this.ctrl.hour = props.defaultHour;
		}
		if (props.defaultMinute) {
			_this.ctrl.minute = props.defaultMinute;
		}
		if (props.defaultSecond) {
			_this.ctrl.second = defaultSecond;
		}

		_this.selType = _this.props.exactTime;
		if (!_this.exactTime) {
			_this.selType = 'date';
			_this.exactTime = _this.ctrl.exactTime.date;
		}
		if (_this.exactTime >= _this.ctrl.exactTime.hour) {
			_this.selType = 'date';
		}
		return _this;
	}

	_createClass(monaDateSelect, [{
		key: 'select',
		value: function select(date) {
			this.props.onSelect(date);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.ctrl.on('changeView', this.changeView);
			this.ctrl.on('select', this.onSelect);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.ctrl.off('changeView', this.changeView);
			this.ctrl.off('select', this.onSelect);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    disabledDate = _props.disabledDate,
			    showToday = _props.showToday;

			return _react2.default.createElement(
				'div',
				null,
				this.selType === 'date' ? _react2.default.createElement(_date2.default, { date: this.date, ctrl: this.ctrl, exactTime: this.exactTime, disabledDate: disabledDate, showToday: showToday }) : null,
				this.selType === 'month' ? _react2.default.createElement(_month2.default, { date: this.date, ctrl: this.ctrl }) : null,
				this.selType === 'year' ? _react2.default.createElement(_year2.default, { date: this.date, ctrl: this.ctrl }) : null
			);
		}
	}]);

	return monaDateSelect;
}(_react.Component);

monaDateSelect.defaultProps = {
	exactTime: 'date'
};
exports.default = monaDateSelect;