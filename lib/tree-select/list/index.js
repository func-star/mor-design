'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('../../row');

var _row2 = _interopRequireDefault(_row);

var _baseComponent = require('../../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checker = require('../../checker');

var _checker2 = _interopRequireDefault(_checker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSelectList = function (_BaseComponent) {
	_inherits(TreeSelectList, _BaseComponent);

	function TreeSelectList(props) {
		_classCallCheck(this, TreeSelectList);

		var _this = _possibleConstructorReturn(this, (TreeSelectList.__proto__ || Object.getPrototypeOf(TreeSelectList)).call(this, props));

		_this.ctrl = props.ctrl;
		return _this;
	}

	_createClass(TreeSelectList, [{
		key: 'didMount',
		value: function didMount() {
			var _this2 = this;

			var info = this.props.info;

			var _info = info || {};
			var data = _info.data || [];
			this.bind(this.ctrl, 'filter', this.onFilter.bind(this));
			this.bind(this.ctrl, 'valueChange', function () {
				if (!_this2.refs.checker) {
					return;
				}
				_this2.refs.checker.setValue(_this2.ctrl.selected);
			});
		}
	}, {
		key: 'onFilter',
		value: function onFilter(value) {
			var info = this.props.info;

			var _info = info || {};
			var data = _info.data || [];
			this.ctrl.expandedKeys = [];
			this.parseData(data, value);
			this.setState({});
		}
	}, {
		key: 'parseData',
		value: function parseData(data, val) {
			var _this3 = this;

			var visible = false;
			data.forEach(function (v) {
				v.labelHtml = undefined;
				if (val && v.label.indexOf(val) >= 0) {
					visible = true;
					v.labelHtml = v.label.replace(val, '<span class="text-red">' + val + '</span>');
				}
				if (v.children && _this3.parseData(v.children, val)) {
					_this3.ctrl.expandedKeys.push(v.value);
					visible = true;
				}
			});
			return visible;
		}
	}, {
		key: 'isSelected',
		value: function isSelected(item) {
			return this.ctrl.isSelected(item);
		}
	}, {
		key: 'selectItem',
		value: function selectItem(item) {
			var _props$info = this.props.info,
			    loadData = _props$info.loadData,
			    checkable = _props$info.checkable;

			if (checkable) {
				return;
			}
			this.ctrl.toggleSelect(item);
			this.setState({});
		}
	}, {
		key: 'toggleChildren',
		value: function toggleChildren(item) {
			var _this4 = this;

			var info = this.props.info;

			if (info.loadData && item.isLeaf || item.loading) {
				return;
			}
			if (info.loadData && !item.children) {
				item.loading = true;
				this.setState({});
				info.loadData(item).then(function () {
					item.loading = false;
					_this4.ctrl.toggleChildren(item);
					_this4.setState({});
				}).catch(function (e) {
					item.loading = false;
					_this4.setState({});
				});
				return;
			}
			this.ctrl.toggleChildren(item);
			this.setState({});
		}
	}, {
		key: 'childrenVisible',
		value: function childrenVisible(item) {
			return this.ctrl.childrenExpanded(item);
		}
	}, {
		key: 'onCheck',
		value: function onCheck(v) {
			this.ctrl.setSelected(v);
		}
	}, {
		key: 'treeRender',
		value: function treeRender(data, level) {
			var _props$info2 = this.props.info,
			    loadData = _props$info2.loadData,
			    checkable = _props$info2.checkable;

			if (!data) {
				return null;
			}
			return data.map(function (item) {
				return _react2.default.createElement(
					'div',
					{ key: item.value },
					_react2.default.createElement(
						_row2.default,
						{ className: (0, _classnames2.default)('mona-treeSelect-item', {
								'mona-treeSelect-item-group': item.children && item.children.length > 0 || loadData && !item.isLeaf,
								'mona-treeSelect-item-group-visible': this.childrenVisible(item),
								'mona-treeSelect-item-active': this.isSelected(item)
							}), align: 'center' },
						_react2.default.createElement(
							'div',
							{ className: 'mona-treeSelect-arrow flex-center', onClick: this.toggleChildren.bind(this, item) },
							!item.loading ? _react2.default.createElement(_icon2.default, { name: 'down' }) : null,
							item.loading ? _react2.default.createElement(_icon2.default, { name: 'loading' }) : null
						),
						checkable ? _react2.default.createElement(_checkbox2.default, { className: 'm-r-xs', value: item }) : null,
						item.labelHtml ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: item.labelHtml }, className: 'mona-treeSelect-item-label flex-1', onClick: this.selectItem.bind(this, item) }) : null,
						!item.labelHtml ? _react2.default.createElement(
							'div',
							{ className: 'mona-treeSelect-item-label flex-1', onClick: this.selectItem.bind(this, item) },
							item.label
						) : null
					),
					_react2.default.createElement(
						'div',
						{ className: 'mona-treeSelect-child-wrap' },
						item.children && item.children.length > 0 && this.childrenVisible(item) ? this.treeRender(item.children, level + 1) : null
					)
				);
			}, this);
		}
	}, {
		key: 'render',
		value: function render() {
			var info = this.props.info;
			var _props$info3 = this.props.info,
			    loadData = _props$info3.loadData,
			    checkable = _props$info3.checkable;

			var _info = info || {};
			var data = _info.data || [];
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-baseSelect-list mona-treeSelect-list', {
						'mona-treeSelect-checkable': checkable
					}), ref: 'wrap' },
				_react2.default.createElement(
					_checker2.default,
					{ onChange: this.onCheck.bind(this), ref: 'checker' },
					this.treeRender(data, 0),
					data.length === 0 ? _react2.default.createElement(
						'div',
						{ className: 'mona-baseSelect-list-empty' },
						'\u6682\u65E0\u6570\u636E'
					) : null
				)
			);
		}
	}]);

	return TreeSelectList;
}(_baseComponent2.default);

exports.default = TreeSelectList;