'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _itemV = require('./itemV');

var _itemV2 = _interopRequireDefault(_itemV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
	_inherits(Form, _Component);

	function Form() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Form);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Form, [{
		key: 'onSubmit',
		value: function onSubmit(e) {
			e.preventDefault();
			var data = this.getInfo();
			if (this.props.onSubmit) {
				this.props.onSubmit(e, data);
			}
			return false;
		}
	}, {
		key: 'getVerifyInfo',
		value: function getVerifyInfo() {
			var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			var verifyInfo = [];
			var formControls = this.getChildren();
			formControls.forEach(function (v) {
				var verify = v.props.verify;
				var name = v.getName(n);
				if (!verify || !name) {
					return;
				}
				var val = v.getValue();

				if (verify === true && _tool2.default.isEmpty(val)) {
					verifyInfo.push({
						reactDom: v,
						isEmpty: true
					});
					return;
				}
				if (verify instanceof RegExp && !verify.test(val)) {
					verifyInfo.push({
						reactDom: v,
						isRegVerify: true
					});
				}
				if (verify instanceof Function) {
					var _v = verify(val);
					if (!_v.success) {
						verifyInfo.push(_extends({
							reactDom: v,
							isFun: true
						}, _v));
					}
				}
			});
			return verifyInfo;
		}
	}, {
		key: 'getChildren',
		value: function getChildren(a) {
			var formControls = void 0;
			var dom = (0, _reactDom.findDOMNode)(this.refs.form);
			if (this.props.filterNestChild) {
				var nestChild = _tool2.default.toArray(dom.querySelectorAll(':scope .mona-form-control .mona-form-control'));
				if (a) {}
				formControls = _tool2.default.queryReactDomAll(dom, ':scope .mona-form-control', function (doms) {
					return _tool2.default.toArray(doms).filter(function (v) {
						return nestChild.indexOf(v) < 0;
					});
				});
			} else {
				formControls = _tool2.default.queryReactDomAll(dom, ':scope .mona-form-control');
			}
			return formControls;
		}
	}, {
		key: 'getInfo',
		value: function getInfo() {
			var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';
			var filterEmpty = arguments[1];

			var formControls = this.getChildren();
			var info = {};
			formControls.forEach(function (v) {
				var name = v.getName(n);
				if (!name) {
					return;
				}
				var val = v.getValue();
				if (filterEmpty && _tool2.default.isEmpty(val)) {
					return;
				}
				if (!/[\[\]\.]/.test(name)) {
					info[name] = val;
					return;
				}
				var nameInfo = name.split('.');
				var index = nameInfo.length - 1;
				var obj = info;
				nameInfo.forEach(function (v, i) {
					if (!/[^\[\]]+\[\w*\]/.test(v)) {
						if (i == index) {
							obj[v] = val;
							return;
						}
						if (!obj[v]) {
							obj[v] = {};
						}
						obj = obj[v];
						return;
					}

					if (/[^\[\]]+\[\w*\]/.test(v)) {
						var vi = /([^\[\]]+)\[(\w*)\]/.exec(v);
						if (!obj[vi[1]]) {
							obj[vi[1]] = [];
						}
						if (i == index) {
							if (!vi[2]) {
								obj[vi[1]].push(val);
							} else {
								obj[vi[1]][vi[2]] = val;
							}
							return;
						}
						if (!vi[2]) {
							var arr = [];
							obj[vi[1]].push(arr);
							obj = arr;
						} else {
							if (!obj[vi[1]][vi[2]]) {
								obj[vi[1]][vi[2]] = {};
							}
							obj = obj[vi[1]][vi[2]];
						}
					}
				});
			});
			return info;
		}
	}, {
		key: 'onChange',
		value: function onChange(e) {
			if (e) {
				e.preventDefault();
			}
			if (this.props.onChange) {
				this.props.onChange();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    node = _props.node,
			    children = _props.children,
			    filterNestChild = _props.filterNestChild,
			    props = _objectWithoutProperties(_props, ['className', 'node', 'children', 'filterNestChild']);

			if (node) {
				var Node = node;
				return _react2.default.createElement(
					Node,
					_extends({ className: (0, _classnames2.default)('mona-form', className) }, props, { onSubmit: this.onSubmit.bind(this), ref: 'form' }),
					children
				);
			}
			return _react2.default.createElement(
				'form',
				_extends({ className: (0, _classnames2.default)('mona-form', className) }, props, { onSubmit: this.onSubmit.bind(this), ref: 'form' }),
				children
			);
		}
	}]);

	return Form;
}(_react.Component);

Form.defaultProps = {
	filterNestChild: true //过滤 mona-form-control嵌套的子元素
};
Form.Item = _item2.default;
Form.ItemV = _itemV2.default;
exports.default = Form;