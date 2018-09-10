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

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
	_inherits(Dropdown, _Component);

	function Dropdown() {
		_classCallCheck(this, Dropdown);

		return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
	}

	_createClass(Dropdown, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			if (this.dropdownItem) {
				var overlay = props.overlay;

				this.dropdownItem.refresh(overlay);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.removeNode();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var dom = (0, _reactDom.findDOMNode)(this);
			if (!dom) {
				return;
			}
			this.eventShow = this.show.bind(this);
			this.eventHide = this.hide.bind(this);
			this.eventToggle = this.toggle.bind(this);
			this.leaveCheck = this.leaveCheck.bind(this);

			this.childDom = dom;
			this.register(dom);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var dom = (0, _reactDom.findDOMNode)(this);
			if (dom === this.childDom) {
				return;
			}
			if (dom) {
				this.register(dom);
			}
		}
	}, {
		key: 'leaveCheck',
		value: function leaveCheck(e) {
			if (!this.visible) {
				return;
			}
			var clickOther = true;
			if (this.childDom.contains(e.target) || this.dropdownNode && this.dropdownNode.contains(e.target)) {
				clickOther = false;
			}

			if (clickOther) {
				this.props.onBlur && this.props.onBlur();
				this.hide(20);
			}
		}
	}, {
		key: 'register',
		value: function register(dom) {
			var trigger = this.props.trigger;

			if (trigger === 'hover') {
				dom.addEventListener('mouseenter', this.eventShow, false);
				dom.addEventListener('mouseleave', this.eventHide, false);
			}
			if (trigger === 'click') {
				dom.addEventListener('click', this.eventToggle, false);
				document.addEventListener('click', this.leaveCheck, true);
			}
			if (trigger === 'blurCheck') {
				document.addEventListener('click', this.leaveCheck, true);
			}
		}
	}, {
		key: 'dropdownDomRegister',
		value: function dropdownDomRegister(dom) {
			var trigger = this.props.trigger;

			if (trigger === 'hover') {
				this.dropdownNode.addEventListener('mouseenter', this.eventShow, false);
				this.dropdownNode.addEventListener('mouseleave', this.eventHide, false);
			}
		}

		/* unregister(dom){*/
		//dom.removeEventListener("mouseenter",this.eventShow);
		//dom.removeEventListener("mouseleave",this.eventHide);
		//dom.removeEventListener("click",this.eventToggle,false);
		//document.removeEventListener("click",this.leaveCheck,true)
		/*}*/

	}, {
		key: 'relocation',
		value: function relocation() {
			if (!this.visible) {
				return;
			}
			this.dropdownItem.toRelocation && this.dropdownItem.toRelocation();
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			if (!this.visible) {
				this.show();
			} else {
				this.hide();
			}
		}
	}, {
		key: 'show',
		value: function show() {
			var _this2 = this;

			clearTimeout(this.hideTimeout);
			if (this.visible) {
				return;
			}

			var _props = this.props,
			    children = _props.children,
			    sameWidth = _props.sameWidth,
			    style = _props.style,
			    getContainer = _props.getContainer,
			    conf = _objectWithoutProperties(_props, ['children', 'sameWidth', 'style', 'getContainer']);

			var _conf = _extends({}, conf);

			var _sty = _extends({}, style);
			_conf.style = _sty;

			if (sameWidth && !_sty.width) {
				_sty.width = this.childDom.offsetWidth;
			}

			if (!this.dropdownItem) {
				var container = getContainer ? getContainer() : document.body;
				this.dropdownNode = _item2.default.init(function (item) {
					_this2.dropdownItem = item;
					_this2.visible = true;
					_this2.dropdownItem.show(_this2.childDom, _conf, function () {
						_this2.onVisibleChange(true);
					});
				}, container);
				//注册dropdow内容hover事件
				this.dropdownDomRegister();
				return;
			}
			this.visible = true;
			this.dropdownItem.show(this.childDom, _conf, function () {
				_this2.onVisibleChange(true);
			});
		}
	}, {
		key: 'hide',
		value: function hide() {
			var _this3 = this;

			var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			this.hideTimeout = setTimeout(function () {
				var cleanWhenHide = _this3.props.cleanWhenHide;

				if (!_this3.dropdownItem) {
					return;
				}
				_this3.visible = false;
				//cleanwhenhide 隐藏时清除下拉节点
				if (cleanWhenHide) {
					_reactDom2.default.unmountComponentAtNode(_this3.dropdownNode);
					_this3.dropdownNode.remove();
					_this3.dropdownNode = undefined;
					_this3.dropdownItem = undefined;
					return;
				}
				_this3.dropdownItem.hide(function () {
					_this3.onVisibleChange(false);
				});
			}, time);
		}
	}, {
		key: 'removeNode',
		value: function removeNode() {
			if (!this.dropdownNode) {
				return;
			}
			_reactDom2.default.unmountComponentAtNode(this.dropdownNode);
			this.dropdownNode.remove();
			this.dropdownNode = undefined;
			this.dropdownItem = undefined;
		}
	}, {
		key: 'onVisibleChange',
		value: function onVisibleChange(val) {
			this.props.onVisibleChange && this.props.onVisibleChange(val);
		}
	}, {
		key: 'render',
		value: function render() {
			var children = this.props.children;

			return children;
		}
	}]);

	return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
	trigger: 'hover',
	placement: 'bottomLeft'
};
exports.default = Dropdown;