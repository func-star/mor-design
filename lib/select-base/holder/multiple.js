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

var _baseComponent = require('../../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _multipleIpt = require('./multipleIpt');

var _multipleIpt2 = _interopRequireDefault(_multipleIpt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBaseMultiple = function (_BaseComponent) {
	_inherits(SelectBaseMultiple, _BaseComponent);

	function SelectBaseMultiple(props) {
		_classCallCheck(this, SelectBaseMultiple);

		var _this = _possibleConstructorReturn(this, (SelectBaseMultiple.__proto__ || Object.getPrototypeOf(SelectBaseMultiple)).call(this, props));

		_this.values = [];

		_this.ctrl = _this.props.ctrl;
		return _this;
	}

	_createClass(SelectBaseMultiple, [{
		key: 'didMount',
		value: function didMount() {
			this.bind(this.ctrl, 'valueChange', this.onValueChange.bind(this));
			this.bind(this.ctrl, 'visibleChange', this.onVisibleChange.bind(this));
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange() {
			var _this2 = this;

			this.values = this.ctrl.selected || [];
			this.refs.ipt.setWidth();
			var value = this.refs.ipt.getValue();
			if (value) {
				this.refs.ipt.setValue('', this.values.length === 0);
				this.ctrl.search('');
			}
			this.setState({}, function () {
				_this2.ctrl.dropView.relocation();
			});
		}
	}, {
		key: 'onVisibleChange',
		value: function onVisibleChange(v) {
			var autoCleanIpt = this.props.autoCleanIpt;

			if (autoCleanIpt) {
				this.refs.ipt.setValue('', this.values.length === 0);
				this.ctrl.search('');
			}
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			if (this.props.disabled) {
				return;
			}
			this.ctrl.toggleSelect(item);
			this.ctrl.dropView.relocation();
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			if (this.props.disabled) {
				return;
			}
			this.refs.ipt.focus();
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {
			this.ctrl.dropView.show();
		}
	}, {
		key: 'onChange',
		value: function onChange(val) {
			var filterOption = this.props.filterOption;

			this.ctrl.search(val, filterOption);
			this.ctrl.dropView.relocation();
		}
	}, {
		key: 'onDelete',
		value: function onDelete() {
			if (this.props.disabled) {
				return;
			}
			this.ctrl.removeLast();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    size = _props.size,
			    placeholder = _props.placeholder,
			    disabled = _props.disabled,
			    props = _objectWithoutProperties(_props, ['size', 'placeholder', 'disabled']);

			var hasSelect = this.values.length > 0;
			return _react2.default.createElement(
				_row2.default,
				{ align: 'center', className: (0, _classnames2.default)('mona-baseSelect-multiple-holder', { 'mona-baseSelect-multiple-holder-disabled': disabled }), ref: 'wrap', onClick: this.onClick.bind(this) },
				this.values.map(function (item) {
					return _react2.default.createElement(
						_row2.default,
						{ className: 'mona-baseSelect-multiple-item', key: item.value, align: 'center' },
						_react2.default.createElement(
							'span',
							null,
							item.label
						),
						_react2.default.createElement(
							'span',
							{ className: 'mona-baseSelect-multiple-del', onClick: this.delete.bind(this, item) },
							_react2.default.createElement(_icon2.default, { name: 'close-bold' })
						)
					);
				}, this),
				_react2.default.createElement(_multipleIpt2.default, {
					ref: 'ipt',
					disabled: disabled,
					onFocus: this.onFocus.bind(this),
					onChange: this.onChange.bind(this),
					onDelete: this.onDelete.bind(this),
					placeholder: hasSelect ? '' : placeholder,
					hasSelect: hasSelect })
			);
		}
	}]);

	return SelectBaseMultiple;
}(_baseComponent2.default);

exports.default = SelectBaseMultiple;