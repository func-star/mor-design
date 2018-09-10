'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

var _baseComponent = require('../../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBaseHolder = function (_BaseComponent) {
	_inherits(SelectBaseHolder, _BaseComponent);

	function SelectBaseHolder(props) {
		_classCallCheck(this, SelectBaseHolder);

		var _this = _possibleConstructorReturn(this, (SelectBaseHolder.__proto__ || Object.getPrototypeOf(SelectBaseHolder)).call(this, props));

		_this.ctrl = _this.props.ctrl;
		return _this;
	}

	_createClass(SelectBaseHolder, [{
		key: 'didMount',
		value: function didMount() {
			this.bind(this.ctrl, 'valueChange', this.onValueChange.bind(this));
			this.bind(this.ctrl, 'visibleChange', this.onVisibleChange.bind(this));
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange() {
			var value = this.ctrl.selected ? this.ctrl.selected.label : '';
			this.refs.value.setValue(value);
			this.ctrl.hideDropView();
			this.setState({});
		}
	}, {
		key: 'onVisibleChange',
		value: function onVisibleChange() {
			var showSearch = this.props.showSearch;

			if (showSearch) {
				this.searchVisible = this.ctrl.listVisible;
				this.refs.ipt.setValue('');
				this.search('');
			}
			this.listVisible = this.ctrl.listVisible;
			this.setState({});
		}
	}, {
		key: 'clear',
		value: function clear(e) {
			e.nativeEvent.stopImmediatePropagation();
			e.stopPropagation();
			e.preventDefault();
			if (this.props.disabled) {
				return;
			}
			this.ctrl.clear();
		}
	}, {
		key: 'search',
		value: function search(val) {
			var filterOption = this.props.filterOption;

			this.ctrl.search(val, filterOption);
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			var _this2 = this;

			var _props = this.props,
			    showSearch = _props.showSearch,
			    disabled = _props.disabled;

			if (disabled) {
				return;
			}
			this.ctrl.dropView.show();
			if (!showSearch) {
				return;
			}
			this.searchVisible = true;
			this.setState({}, function () {
				_this2.refs.ipt.focus();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    size = _props2.size,
			    showSearch = _props2.showSearch,
			    filterOption = _props2.filterOption,
			    placeholder = _props2.placeholder,
			    allowClear = _props2.allowClear,
			    disabled = _props2.disabled,
			    props = _objectWithoutProperties(_props2, ['size', 'showSearch', 'filterOption', 'placeholder', 'allowClear', 'disabled']);

			var _allowClear = allowClear;
			if (disabled) {
				_allowClear = false;
			}
			var value = this.ctrl.selected ? this.ctrl.selected.label : '';
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-baseSelect-holder-input', {
						'mona-baseSelect-holder-input-active': this.listVisible,
						'mona-baseSelect-holder-input-allowClear': !this.listVisible && this.ctrl.selected && _allowClear
					}), onClick: this.onClick.bind(this) },
				_react2.default.createElement(_input2.default, { defaultValue: value, readOnly: true, disabled: disabled, ref: 'value', className: (0, _classnames2.default)({ hide: this.searchVisible }), onChange: this.search.bind(this), placeholder: placeholder }),
				_react2.default.createElement(_input2.default, { ref: 'ipt', className: (0, _classnames2.default)({ hide: !this.searchVisible }), onChange: this.search.bind(this), placeholder: placeholder, disabled: disabled }),
				_react2.default.createElement(
					'div',
					{ className: 'mona-baseSelect-holder-input-arrow' },
					_react2.default.createElement(_icon2.default, { name: 'arrowDown' })
				),
				!this.listVisible && this.ctrl.selected && _allowClear ? _react2.default.createElement(
					'div',
					{ className: 'mona-baseSelect-holder-input-clear', onClick: this.clear.bind(this) },
					_react2.default.createElement(_icon2.default, { name: 'solid-close' })
				) : null
			);
		}
	}]);

	return SelectBaseHolder;
}(_baseComponent2.default);

exports.default = SelectBaseHolder;