'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _col = require('../col');

var _col2 = _interopRequireDefault(_col);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

var _selectPkg = require('../select-pkg');

var _selectPkg2 = _interopRequireDefault(_selectPkg);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
	_inherits(Pagination, _Component);

	function Pagination(props) {
		_classCallCheck(this, Pagination);

		var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

		_this.pageNumbers = [];
		_this.current = 0;
		_this.startPage = 0;
		_this.endPage = 0;
		_this.pages = 0;

		_this.pageSize = props.pageSize;
		_this.total = props.total;
		return _this;
	}

	_createClass(Pagination, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    numberSize = _props.numberSize,
			    defaultCurrent = _props.defaultCurrent;

			this.toPage(defaultCurrent);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			this.pageSize = props.pageSize;
			this.total = props.total;
			this.toPage(props.current || this.current, false);
		}
	}, {
		key: 'toPage',


		//change 是否出发change事件，pageCheck是否检测合法页数
		value: function toPage(page, change, pageCheck) {
			var numberSize = this.props.numberSize;

			var pages = Math.ceil(this.total / this.pageSize);
			if (pageCheck && (!page || page < 1 || page > pages)) {
				return;
			}
			var startPage = page - Math.floor(numberSize / 2);
			if (startPage < 1) {
				startPage = 1;
			}
			var endPage = startPage + numberSize - 1;
			if (endPage > pages) {
				endPage = pages;
				startPage = pages - numberSize + 1;
				startPage = startPage > 1 ? startPage : 1;
			}

			this.current = page;
			if (this.current > pages) {
				this.current = pages;
			}
			this.startPage = startPage;
			this.endPage = endPage;
			this.pages = pages;
			this.pageNumbers = _tool2.default.newArray(startPage, endPage + 1);
			if (change) {
				this.onChange();
			}
			this.setState({});
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			this.props.onChange && this.props.onChange(this.current);
		}
	}, {
		key: 'onShowSizeChange',
		value: function onShowSizeChange(v) {
			this.pageSize = v;
			this.toPage(this.current);
			this.props.onShowSizeChange && this.props.onShowSizeChange(this.current, this.pageSize);
		}
	}, {
		key: 'jump',
		value: function jump(e) {
			if (e) {
				e.preventDefault();
			}
			var val = this.refs.ipt.getValue();
			this.refs.ipt.setValue('');
			this.toPage(parseInt(val), true, true);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    className = _props2.className,
			    numberSize = _props2.numberSize,
			    theme = _props2.theme,
			    gutter = _props2.gutter,
			    total = _props2.total,
			    showTotal = _props2.showTotal,
			    pageSizeOptions = _props2.pageSizeOptions,
			    showSizeChanger = _props2.showSizeChanger,
			    showQuickJumper = _props2.showQuickJumper;

			var pageSize = this.pageSize;
			var pageOpt = pageSizeOptions.map(function (v) {
				return {
					name: v + '条/页',
					value: v
				};
			});
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-pagination', 'mona-pagination-' + theme, className) },
				_react2.default.createElement(
					_row2.default,
					{ gutter: gutter },
					showTotal ? _react2.default.createElement(
						_col2.default,
						null,
						showTotal(total, [(this.current - 1) * pageSize + 1, this.current * pageSize], this.pages, this.current)
					) : null,
					_react2.default.createElement(
						_col2.default,
						null,
						this.current === 1 ? _react2.default.createElement(
							'div',
							{ className: 'mona-pagination-item disabled' },
							_react2.default.createElement(_icon2.default, { name: 'arrowLeft' })
						) : null,
						this.current !== 1 ? _react2.default.createElement(
							'div',
							{ className: 'mona-pagination-item', onClick: this.toPage.bind(this, this.current - 1, true) },
							_react2.default.createElement(_icon2.default, { name: 'arrowLeft' })
						) : null
					),
					this.startPage > 1 ? _react2.default.createElement(
						_col2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'mona-pagination-item', onClick: this.toPage.bind(this, 1, true) },
							1
						)
					) : null,
					this.startPage > 2 ? _react2.default.createElement(
						_col2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'h-full padder-xs', onClick: this.toPage.bind(this, this.current - numberSize, true) },
							'...'
						)
					) : null,
					this.pageNumbers.map(function (item) {
						return _react2.default.createElement(
							_col2.default,
							{ key: item },
							_react2.default.createElement(
								'div',
								{ className: (0, _classnames2.default)('mona-pagination-item', {
										active: this.current === item
									}), onClick: this.toPage.bind(this, item, true) },
								item
							)
						);
					}, this),
					this.endPage < this.pages - 1 ? _react2.default.createElement(
						_col2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'h-full padder-xs', onClick: this.toPage.bind(this, this.current + numberSize, true) },
							'...'
						)
					) : null,
					this.endPage < this.pages ? _react2.default.createElement(
						_col2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'mona-pagination-item', onClick: this.toPage.bind(this, this.pages, true) },
							this.pages
						)
					) : null,
					_react2.default.createElement(
						_col2.default,
						null,
						this.current === this.pages ? _react2.default.createElement(
							'div',
							{ className: 'mona-pagination-item disabled' },
							_react2.default.createElement(_icon2.default, { name: 'arrowRight' })
						) : null,
						this.current < this.pages ? _react2.default.createElement(
							'div',
							{ className: 'mona-pagination-item', onClick: this.toPage.bind(this, this.current + 1, true) },
							_react2.default.createElement(_icon2.default, { name: 'arrowRight' })
						) : null
					),
					showSizeChanger ? _react2.default.createElement(
						_col2.default,
						{ className: 'mona-pagination-pageSizeOpt' },
						_react2.default.createElement(_selectPkg2.default, { className: 'mona-pagination-pageSize-sel', data: pageOpt, defaultValue: pageSize, onChange: this.onShowSizeChange.bind(this), placement: 'top' })
					) : null,
					showQuickJumper ? _react2.default.createElement(
						_col2.default,
						null,
						_react2.default.createElement(
							_row2.default,
							null,
							_react2.default.createElement(
								'span',
								null,
								'\u8DF3\u81F3'
							),
							_react2.default.createElement(
								'div',
								{ className: 'padder-xs' },
								_react2.default.createElement(
									'form',
									{ onSubmit: this.jump.bind(this) },
									_react2.default.createElement(_input2.default, { className: 'mona-pagination-jumper-ipt', ref: 'ipt' })
								)
							),
							_react2.default.createElement(
								'span',
								null,
								'\u9875'
							)
						)
					) : null
				)
			);
		}
	}]);

	return Pagination;
}(_react.Component);

Pagination.defaultProps = {
	theme: 'default',
	gutter: 8,
	total: 100,
	pageSize: 10,
	defaultCurrent: 1,
	numberSize: 5,
	pageSizeOptions: ['10', '20', '30', '40']
	/*   onShowSizeChange*/
	//onChange
	//showSizeChanger
	//showQuickJumper
};
exports.default = Pagination;