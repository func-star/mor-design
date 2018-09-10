'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _row = require('../../row');

var _row2 = _interopRequireDefault(_row);

var _col = require('../../col');

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthSelect = function (_Component) {
	_inherits(MonthSelect, _Component);

	function MonthSelect(props) {
		_classCallCheck(this, MonthSelect);

		var _this = _possibleConstructorReturn(this, (MonthSelect.__proto__ || Object.getPrototypeOf(MonthSelect)).call(this, props));

		_this.ctrl = _this.props.ctrl;
		_this.date = props.date;
		_this.month = parseInt(_this.date.format('M')) - 1;
		_this.months = _moment2.default.monthsShort().map(function (v, i) {
			return {
				value: i,
				name: v
			};
		});
		return _this;
	}

	_createClass(MonthSelect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var ctrl = this.props.ctrl;

			this.inputTimeChange = function (date) {
				var change = false;
				if (date.format('YYYY') !== _this2.date.format('YYYY')) {
					_this2.date.year(date.format('YYYY'));
					change = true;
				}
				if (date.format('MM') !== _this2.date.format('MM')) {
					_this2.month = parseInt(date.format('M')) - 1;
					_this2.date.month(_this2.month);
					change = true;
				}
				if (change) {
					_this2.setState({});
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
		key: 'onSelect',
		value: function onSelect(month) {
			this.date.month(month.value);
			this.ctrl.selectDate(this.date, 'month');
			this.ctrl.changeTime();
		}
	}, {
		key: 'toYear',
		value: function toYear() {
			this.ctrl.changeView('year');
		}
	}, {
		key: 'changeYear',
		value: function changeYear(size) {
			this.date.add(size, 'years');
			this.setState({});
		}
	}, {
		key: 'render',
		value: function render() {
			var ctrl = this.props.ctrl;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_row2.default,
					{ justify: 'space-between', className: 'mona-date-picker-header', align: 'center' },
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs c-po mona-date-picker-prev', onClick: this.changeYear.bind(this, -1) },
							_react2.default.createElement('img', { src: ctrl.pImg })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mona-date-picker-header-info' },
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs c-po d-ib', onClick: this.toYear.bind(this) },
							this.date.format('YYYY')
						)
					),
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs c-po mona-date-picker-next', onClick: this.changeYear.bind(this, 1) },
							_react2.default.createElement('img', { src: ctrl.nImg })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mona-date-picker-con-wrap' },
					_react2.default.createElement(
						_row2.default,
						null,
						this.months.map(function (month) {
							return _react2.default.createElement(
								_col2.default,
								{ className: 'w-1-3', key: month.name, onClick: this.onSelect.bind(this, month) },
								_react2.default.createElement(
									'div',
									{ className: 'flex-center mona-date-picker-month-item-wrap' },
									_react2.default.createElement(
										'div',
										{ className: (0, _classnames2.default)('mona-date-picker-month-item flex-center', { active: month.value == this.month }) },
										month.name
									)
								)
							);
						}, this)
					)
				)
			);
		}
	}]);

	return MonthSelect;
}(_react.Component);

exports.default = MonthSelect;