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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownItem = function (_Component) {
	_inherits(DropdownItem, _Component);

	function DropdownItem() {
		_classCallCheck(this, DropdownItem);

		return _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
	}

	_createClass(DropdownItem, [{
		key: 'refresh',
		value: function refresh(overlay) {
			this.overlay = overlay;
			this.setState({});
		}

		//定位

	}, {
		key: 'locating',
		value: function locating(dom, conf) {

			var offset = _tool2.default.offset(dom);
			//包含节点的信息
			var domInfo = {
				left: offset.left,
				top: offset.top,
				height: dom.offsetHeight,
				width: dom.offsetWidth,
				dom: dom
			};
			var overlayDom = (0, _reactDom.findDOMNode)(this);

			//定位父节点信息
			var offsetParent = this.node.offsetParent;
			var parentInfo = {
				left: 0,
				top: 0
			};

			if (offsetParent) {
				var parOffset = _tool2.default.offset(offsetParent);

				parentInfo.left = parOffset.left;
				parentInfo.top = parOffset.top;
				parentInfo.height = offsetParent.offsetHeight;
				parentInfo.dom = offsetParent;
			}

			var sty = {};
			var placement = conf.placement;

			//可定制位置
			if (placement instanceof Function) {
				var _sty = placement(parentInfo, domInfo, {
					height: overlayDom.offsetHeight,
					width: overlayDom.offsetWidth,
					dom: overlayDom
				});
				_tool2.default.css(this.node, _extends({}, conf.style, _sty));
				return;
			}

			switch (placement) {
				case 'topLeft':
					sty = {
						left: domInfo.left - parentInfo.left,
						top: domInfo.top - parentInfo.top - overlayDom.offsetHeight
					};
					break;
				case 'top':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width / 2 - overlayDom.offsetWidth / 2,
						top: domInfo.top - parentInfo.top - overlayDom.offsetHeight
					};
					break;
				case 'topRight':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width - overlayDom.offsetWidth,
						top: domInfo.top - parentInfo.top - overlayDom.offsetHeight
					};
					break;
				case 'rightTop':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width,
						top: domInfo.top - parentInfo.top
					};
					break;
				case 'right':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width,
						top: domInfo.top - parentInfo.top + domInfo.height / 2 - overlayDom.offsetHeight / 2
					};
					break;
				case 'rightBottom':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width,
						top: domInfo.top - parentInfo.top + domInfo.height - overlayDom.offsetHeight
					};
					break;
				case 'bottomRight':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width - overlayDom.offsetWidth,
						top: domInfo.top + domInfo.height - parentInfo.top
					};

					break;
				case 'bottom':
					sty = {
						left: domInfo.left - parentInfo.left + domInfo.width / 2 - overlayDom.offsetWidth / 2,
						top: domInfo.top + domInfo.height - parentInfo.top
					};
					break;
				case 'bottomLeft':
					sty = {
						left: domInfo.left - parentInfo.left,
						top: domInfo.top + domInfo.height - parentInfo.top
					};
					break;
				case 'leftBottom':
					sty = {
						left: domInfo.left - parentInfo.left - overlayDom.offsetWidth,
						top: domInfo.top - parentInfo.top + domInfo.height - overlayDom.offsetHeight
					};
					break;
				case 'left':
					sty = {
						left: domInfo.left - parentInfo.left - overlayDom.offsetWidth,
						top: domInfo.top - parentInfo.top + domInfo.height / 2 - overlayDom.offsetHeight / 2
					};
					break;
				case 'leftTop':
					sty = {
						left: domInfo.left - parentInfo.left - overlayDom.offsetWidth,
						top: domInfo.top - parentInfo.top
					};
					break;
				default:
			}
			if (sty.hasOwnProperty('left') && conf.leftAdd) {
				sty.left += conf.leftAdd;
			}
			if (sty.hasOwnProperty('top') && conf.topAdd) {
				sty.top += conf.topAdd;
			}
			if (sty.hasOwnProperty('right') && conf.rightAdd) {
				sty.right += conf.rightAdd;
			}
			if (sty.hasOwnProperty('bottom') && conf.bottomAdd) {
				sty.bottom += conf.bottomAdd;
			}
			_tool2.default.css(this.node, _extends({}, conf.style, sty));
		}
	}, {
		key: 'relocation',
		value: function relocation(dom, conf) {
			if (this.unmount) {
				return;
			}
			this.node.className = (0, _classnames2.default)('mona-dropdown', 'mona-dropdown-visible', 'mona-dropdown-placement-' + conf.placement, conf.className);
			_tool2.default.removeCss(this.node, 'top');
			_tool2.default.removeCss(this.node, 'left');
			_tool2.default.removeCss(this.node, 'bottom');
			_tool2.default.removeCss(this.node, 'right');
			this.locating(dom, conf);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.unmount = true;
			window.removeEventListener('resize', this.toRelocation);
		}
	}, {
		key: 'show',
		value: function show(dom, conf, cbk) {
			var _this2 = this;

			this.overlay = conf.overlay;
			this.toRelocation = function () {
				_this2.relocation(dom, conf);
			};
			this.setState({}, function () {
				_this2.toRelocation();
				window.addEventListener('resize', _this2.toRelocation);
				cbk && cbk();
			});
		}

		//隐藏节点

	}, {
		key: 'hide',
		value: function hide(cbk) {
			window.removeEventListener('resize', this.toRelocation);
			_tool2.default.removeClass(this.node, 'mona-dropdown-visible');
			cbk && cbk();
		}

		//卸载节点

	}, {
		key: 'remove',
		value: function remove() {
			window.removeEventListener('resize', this.toRelocation);
			_reactDom2.default.unmountComponentAtNode(this.node);
			this.node.remove();
		}
	}, {
		key: 'render',
		value: function render() {
			return this.overlay || null;
		}
	}], [{
		key: 'init',
		value: function init(cbk, container) {
			var node = document.createElement('div');
			node.className = 'mona-dropdown';
			container.appendChild(node);
			_reactDom2.default.render(_react2.default.createElement(DropdownItem, null), node, function () {
				this.container = container;
				this.node = node;
				cbk(this);
			});
			return node;
		}
	}]);

	return DropdownItem;
}(_react.Component);

exports.default = DropdownItem;