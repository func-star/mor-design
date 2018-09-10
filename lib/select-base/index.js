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

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _baseComponent = require('../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _option = require('./option');

var _option2 = _interopRequireDefault(_option);

var _base = require('./ctrl/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBase = function (_BaseComponent) {
	_inherits(SelectBase, _BaseComponent);

	function SelectBase() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SelectBase);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectBase.__proto__ || Object.getPrototypeOf(SelectBase)).call.apply(_ref, [this].concat(args))), _this), _this.sameWidth = true, _this.autoCleanIpt = true, _this.List = _list2.default, _this.trigger = 'blurCheck', _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SelectBase, [{
		key: 'getName',
		value: function getName() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			return this.props[name];
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.ctrl.getValue();
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			return this.ctrl.setValue(value);
		}
	}, {
		key: 'didMount',
		value: function didMount() {
			var _this2 = this;

			this.ctrl.setDefaultValue(this.props.defaultValue, this.props);
			this.ctrl.dropView = this.refs.drop;
			this.bind(this.ctrl, 'valueChange', this.onValueChange.bind(this));
			this.bind(this.ctrl, 'filter', this.onSearch.bind(this));
			this.bind(this.ctrl, 'selectOpt', function () {
				if (_this2.props.onSelect) {
					var _props;

					(_props = _this2.props).onSelect.apply(_props, arguments);
				}
			});
		}
	}, {
		key: 'onSearch',
		value: function onSearch(val) {
			this.props.onSearch && this.props.onSearch(val);
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange() {
			this.onChange && this.onChange();
		}
	}, {
		key: 'visibleChange',
		value: function visibleChange(v) {
			this.ctrl.visibleChange(v);
		}
	}, {
		key: 'placement',
		value: function placement(parentInfo, domInfo, overlayInfo) {
			var left = domInfo.left - parentInfo.left;
			var top = domInfo.top - parentInfo.top + domInfo.height + 5;
			var rect = domInfo.dom.getBoundingClientRect();
			var bottom = window.innerHeight - rect.bottom;
			if (overlayInfo.height > bottom) {
				top = domInfo.top - parentInfo.top - overlayInfo.height - 5;
			}
			if (top < domInfo.top - rect.top) {
				//top = domInfo.top - rect.top;
				top = domInfo.top - parentInfo.top + domInfo.height + 5;
			}
			return {
				left: left,
				top: top
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    children = _props2.children,
			    placement = _props2.placement,
			    getContainer = _props2.getContainer,
			    dropClassName = _props2.dropClassName,
			    className = _props2.className,
			    disabled = _props2.disabled,
			    onSelect = _props2.onSelect,
			    props = _objectWithoutProperties(_props2, ['children', 'placement', 'getContainer', 'dropClassName', 'className', 'disabled', 'onSelect']);

			var Holder = this.Holder;
			var List = this.List;
			var dropProps = {};
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-form-control', className) },
				_react2.default.createElement(
					_dropdown2.default,
					_extends({
						ref: 'drop',
						getContainer: getContainer,
						className: dropClassName,
						placement: this.placement,
						sameWidth: this.sameWidth,
						overlay: _react2.default.createElement(
							List,
							{ ctrl: this.ctrl, info: props },
							children
						),
						trigger: this.trigger,
						onVisibleChange: this.visibleChange.bind(this)
					}, dropProps),
					_react2.default.createElement(Holder, _extends({ autoCleanIpt: this.autoCleanIpt, disabled: disabled, ctrl: this.ctrl }, props))
				)
			);
		}
	}]);

	return SelectBase;
}(_baseComponent2.default);

SelectBase.BaseCtrl = _base2.default;
SelectBase.Option = _option2.default;
exports.default = SelectBase;