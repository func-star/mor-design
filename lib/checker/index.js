'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checker = function (_Component) {
	_inherits(Checker, _Component);

	function Checker(props) {
		_classCallCheck(this, Checker);

		var _this = _possibleConstructorReturn(this, (Checker.__proto__ || Object.getPrototypeOf(Checker)).call(this, props));

		_this.value = [];

		_this.setValue(props.defaultValue, false);
		return _this;
	}

	_createClass(Checker, [{
		key: 'getName',
		value: function getName() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			return this.props[name];
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			var _props = this.props,
			    multiple = _props.multiple,
			    type = _props.type,
			    emptyValue = _props.emptyValue;
			//选择为空时，可设置默认值

			if (this.value.length === 0 && emptyValue) {
				return emptyValue;
			}

			if (multiple) {
				if (type === 'array') {
					return this.value;
				}
				if (type === 'string') {
					return this.value.join(',');
				}
			} else {
				return this.value[0];
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(val) {
			var childFresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			if (typeof val === 'undefined') {
				this.value = [];
			} else {
				this.value = val;
			}
			if (!(this.value instanceof Array) && this.props.type !== 'string') {
				this.value = [val];
			}
			if (typeof val === 'string' && this.props.type === 'string') {
				this.value = val.split(',');
			}
			if (childFresh) {
				_tool2.default.queryReactDomAll(this.refs.wrap, '.mona-checker-item').forEach(function (v) {
					v.checkSelect();
				});
			}
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			if (this.props.onChange) {
				this.props.onChange(this.getValue());
			}
		}
	}, {
		key: 'isActive',
		value: function isActive(value) {
			return this.value.filter(function (v) {
				return v === value;
			}).length > 0;
			//return this.value.indexOf(value) >= 0;
		}
	}, {
		key: 'toggleSelect',
		value: function toggleSelect(value) {
			var _props2 = this.props,
			    multiple = _props2.multiple,
			    cancelAble = _props2.cancelAble;

			var index = this.value.indexOf(value);
			var length = this.value.length;
			if (index >= 0) {
				if (multiple) {
					this.value.splice(index, 1);
				} else {
					if (cancelAble) {
						//单选 已存在
						this.value = [];
					}
				}
			} else {
				if (multiple) {
					this.value.push(value);
				} else {
					this.value = [value];
					if (length > 0) {
						_tool2.default.queryReactDomAll(this.refs.wrap, '.mona-checker-item').forEach(function (v) {
							v.checkSelect();
						});
					}
				}
			}
			this.onChange();
			return index < 0;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    className = _props3.className,
			    children = _props3.children,
			    formIgnore = _props3.formIgnore,
			    node = _props3.node,
			    item = _props3.item,
			    emptyValue = _props3.emptyValue,
			    props = _objectWithoutProperties(_props3, ['className', 'children', 'formIgnore', 'node', 'item', 'emptyValue']);

			if (node) {
				var Node = node;
				return _react2.default.createElement(
					Node,
					{ className: (0, _classnames2.default)('mona-checker', { 'mona-form-control': !formIgnore }, className), ref: 'wrap' },
					children
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('mona-checker', { 'mona-form-control': !formIgnore }, className), ref: 'wrap' },
					children
				);
			}
		}
	}]);

	return Checker;
}(_react.Component);

Checker.Item = _item2.default;
Checker.defaultProps = {
	formIgnore: false,
	type: 'array',
	multiple: true,
	cancelAble: true //针对单选  是否点击可取消
};
exports.default = Checker;