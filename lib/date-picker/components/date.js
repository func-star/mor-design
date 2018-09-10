'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _row = require('../../row');

var _row2 = _interopRequireDefault(_row);

var _col = require('../../col');

var _col2 = _interopRequireDefault(_col);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _hour = require('./hour');

var _hour2 = _interopRequireDefault(_hour);

var _minuteOrSecond = require('./minuteOrSecond');

var _minuteOrSecond2 = _interopRequireDefault(_minuteOrSecond);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateSelect = function (_Component) {
	_inherits(DateSelect, _Component);

	function DateSelect(props) {
		_classCallCheck(this, DateSelect);

		var _this = _possibleConstructorReturn(this, (DateSelect.__proto__ || Object.getPrototypeOf(DateSelect)).call(this, props));

		_this.date = props.date;
		_this.todayDate = (0, _moment2.default)().startOf('day');
		_this.todayValue = _this.todayDate.valueOf();

		_this.days = _this.getDates(_this.date);

		var w = (0, _moment2.default)();
		var dow = w.startOf('week').isoWeekday();
		var weeks = _moment2.default.weekdaysMin();
		_this.weeks = weeks.map(function (v, i) {
			return weeks[(i + dow) % 7];
		});
		_this.ctrl = _this.props.ctrl;
		return _this;
	}

	_createClass(DateSelect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.inputTimeChange = function (date) {
				if (date.format('YYYY-MM-DD') !== _this2.date.format('YYYY-MM-DD')) {
					_this2.toDate(date);
				}
			};
			this.ctrl.on('inputTime', this.inputTimeChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.ctrl.off('inputTime', this.inputTimeChange);
		}
	}, {
		key: 'getDates',
		value: function getDates(date) {
			var disabledDate = this.props.disabledDate;
			//克隆两个时间对象，一个用于月的开始时间，一个用于月的结束时间

			var _fd = date.clone();
			var _ed = date.clone();

			var f = _fd.startOf('month');
			var e = _ed.endOf('month');

			var startDay = f.startOf('week');
			var endDay = e.endOf('week');

			var monthNum = date.format('M');

			var days = [];

			var end = false;
			var endTime = endDay.valueOf();
			while (!end) {
				var startTime = startDay.valueOf();
				var mNum = startDay.format('M');
				var dis = false;
				if (disabledDate) {
					dis = disabledDate(startDay);
				}
				days.push({
					month: mNum,
					disabled: dis,
					date: startDay.clone(),
					number: startDay.format('D'),
					isToday: startTime == this.todayValue,
					inMonth: mNum == monthNum
				});
				startDay.add(1, 'days');
				end = startDay.valueOf() > endTime;
			}
			return days;
		}
	}, {
		key: 'toDate',
		value: function toDate(date) {
			this.date = date;
			this.days = this.getDates(this.date);
			this.weeks = _moment2.default.weekdaysMin();
			this.setState({});
		}
	}, {
		key: 'onSelect',
		value: function onSelect(day) {
			if (day.disabled) {
				return;
			}
			this.selDate(day.date);
			/*   if(this.props.exactTime >= this.ctrl.exactTime.hour){*/
			//if(day.format("M")){
			//this.toDate(day.date)
			//return;
			//}
			//this.date = day.date;
			//this.setState({})
			//this.ctrl.changeTime(this.date)
			//}else{
			//this.ctrl.selectDate(day.date,"date")
			/*}*/
		}
	}, {
		key: 'selDate',
		value: function selDate(date) {
			if (this.props.exactTime >= this.ctrl.exactTime.hour) {
				if (!date.format('M')) {
					this.toDate(date);
					return;
				}
				this.date = date;
				this.setState({});
				this.ctrl.changeTime(date);
			} else {
				this.ctrl.selectDate(date, 'date');
			}
		}
	}, {
		key: 'toYear',
		value: function toYear() {
			this.ctrl.changeView('year');
		}
	}, {
		key: 'toMonth',
		value: function toMonth() {
			this.ctrl.changeView('month');
		}
	}, {
		key: 'toToday',
		value: function toToday() {
			var disabledDate = this.props.disabledDate;

			if (disabledDate(this.todayDate)) {
				return;
			}
			this.selDate((0, _moment2.default)());
		}
	}, {
		key: 'changeYear',
		value: function changeYear(size) {
			this.date.add(size, 'years');
			this.toDate(this.date);
			this.ctrl.changeTime(this.date);
		}
	}, {
		key: 'changeMonth',
		value: function changeMonth(size) {
			this.date.add(size, 'months');
			this.toDate(this.date);
			this.ctrl.changeTime(this.ctrl.date);
		}
	}, {
		key: 'submit',
		value: function submit() {
			this.ctrl.selectDate(this.date, 'time');
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    exactTime = _props.exactTime,
			    ctrl = _props.ctrl,
			    showToday = _props.showToday,
			    disabledDate = _props.disabledDate;

			var dateNumber = ctrl.date.format('D');
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_row2.default,
					{ justify: 'space-between', className: 'mona-date-picker-header' },
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs c-po  mona-date-picker-p', onClick: this.changeMonth.bind(this, -1) },
							_react2.default.createElement(_icon2.default, { name: 'arrowLeft' })
						)
					),
					_react2.default.createElement(
						_row2.default,
						{ className: 'mona-date-picker-header-info' },
						_react2.default.createElement(
							'div',
							{ className: 'p-l-xs c-po', onClick: this.toYear.bind(this) },
							this.date.format('YYYY'),
							'\u5E74'
						),
						_react2.default.createElement(
							'div',
							{ className: 'p-r-xs c-po', onClick: this.toMonth.bind(this) },
							this.date.format('M'),
							'\u6708'
						)
					),
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs c-po mona-date-picker-n', onClick: this.changeMonth.bind(this, 1) },
							_react2.default.createElement(_icon2.default, { name: 'arrowRight' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mona-date-picker-con-wrap' },
					_react2.default.createElement(
						_row2.default,
						null,
						this.weeks.map(function (item) {
							return _react2.default.createElement(
								_col2.default,
								{ className: 'w-1-7 mona-date-picker-week-name', key: item },
								item
							);
						}, this)
					),
					_react2.default.createElement(
						_row2.default,
						null,
						this.days.map(function (day) {
							return _react2.default.createElement(
								_col2.default,
								{ className: (0, _classnames2.default)('w-1-7 mona-date-picker-day-wrap', {
										'mona-date-picker-day-today': day.isToday,
										'mona-date-picker-day-other': !day.inMonth,
										'mona-date-picker-day-disabled': day.disabled
									}), key: day.month + '-' + day.number },
								_react2.default.createElement(
									'div',
									{ className: 'mona-date-picker-day-item' },
									day.inMonth ? _react2.default.createElement(
										'div',
										{ className: (0, _classnames2.default)('mona-date-picker-day-item-inner', { active: dateNumber == day.number && day.inMonth }), onClick: this.onSelect.bind(this, day) },
										day.number
									) : null
								)
							);
						}, this)
					)
				),
				showToday && exactTime < ctrl.exactTime.hour ? _react2.default.createElement(
					'div',
					{ className: 'mona-date-picker-toToday' },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)('c-po', { 'mona-date-picker-toToday-disabled': disabledDate(this.todayDate) }), onClick: this.toToday.bind(this) },
						'\u4ECA\u5929'
					)
				) : null,
				exactTime >= ctrl.exactTime.hour ? _react2.default.createElement(
					_row2.default,
					{ className: 'mona-date-picker-foot padder-xs', justify: 'space-between' },
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(_hour2.default, { ctrl: ctrl }),
						exactTime >= ctrl.exactTime.minute ? [_react2.default.createElement(
							'span',
							{ className: 'padder-xs', key: '0'
							},
							':'
						), _react2.default.createElement(_minuteOrSecond2.default, { type: 'minute', ctrl: ctrl, key: '1'
						})] : null,
						exactTime >= ctrl.exactTime.second ? [_react2.default.createElement(
							'span',
							{ className: 'padder-xs', key: '0'
							},
							':'
						), _react2.default.createElement(_minuteOrSecond2.default, { type: 'second', ctrl: ctrl, key: '1'
						})] : null
					),
					_react2.default.createElement(
						_button2.default,
						{ theme: 'primary', className: 'mona-date-picker-foot-btn m-l-sm', onClick: this.submit.bind(this) },
						'\u786E\u8BA4'
					)
				) : null
			);
		}
	}]);

	return DateSelect;
}(_react.Component);

exports.default = DateSelect;