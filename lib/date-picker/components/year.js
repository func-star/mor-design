'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var YearSelect = function (_Component) {
	_inherits(YearSelect, _Component);

	function YearSelect(props) {
		_classCallCheck(this, YearSelect);

		var _this = _possibleConstructorReturn(this, (YearSelect.__proto__ || Object.getPrototypeOf(YearSelect)).call(this, props));

		_this.ctrl = _this.props.ctrl;
		_this.setInfo(props.date);
		return _this;
	}

	_createClass(YearSelect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var ctrl = this.props.ctrl;

			this.inputTimeChange = function (date) {
				if (date.format('YYYY') !== _this2.date.format('YYYY')) {
					_this2.setInfo(date);
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
		key: 'setInfo',
		value: function setInfo(date) {
			this.date = date;
			this.year = parseInt(this.date.format('YYYY'));
			this.years = [];
			var startYear = parseInt(this.year / 20) * 20;
			for (var i = 0; i < 20; i++) {
				this.years.push(startYear + i);
			}
		}
	}, {
		key: 'onSelect',
		value: function onSelect(year) {
			this.date.year(year);
			this.ctrl.selectDate(this.date, 'year');
			this.ctrl.changeTime();
		}
	}, {
		key: 'changeYear',
		value: function changeYear(size) {
			this.date.add(size, 'years');
			this.ctrl.changeTime(this.date);
			this.setInfo(this.date);
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
							{ className: 'padder-xs c-po mona-date-picker-prev', onClick: this.changeYear.bind(this, -20) },
							_react2.default.createElement('img', { src: ctrl.pImg })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mona-date-picker-header-info' },
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs' },
							this.years[0],
							'-',
							this.years[19]
						)
					),
					_react2.default.createElement(
						_row2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'padder-xs c-po mona-date-picker-next', onClick: this.changeYear.bind(this, 20) },
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
						this.years.map(function (year) {
							return _react2.default.createElement(
								_col2.default,
								{ className: 'w-1-5', key: year, onClick: this.onSelect.bind(this, year) },
								_react2.default.createElement(
									'div',
									{ className: 'flex-center mona-date-picker-year-item-wrap' },
									_react2.default.createElement(
										'div',
										{ className: (0, _classnames2.default)('mona-date-picker-year-item flex-center', { active: year === this.year }) },
										year
									)
								)
							);
						}, this)
					)
				)
			);
		}
	}]);

	return YearSelect;
}(_react.Component);

exports.default = YearSelect;