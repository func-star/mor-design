'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nullView = require('../null-view');

var _nullView2 = _interopRequireDefault(_nullView);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ctrl = require('./ctrl');

var _ctrl2 = _interopRequireDefault(_ctrl);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs(props) {
		_classCallCheck(this, Tabs);

		var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

		_this.ctrl = new _ctrl2.default();
		_this.ctrl.activeKey = props.defaultActiveKey;
		return _this;
	}

	_createClass(Tabs, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.ctrl.on('changeActiveKey', function (key) {
				_this2.props.onChange && _this2.props.onChange(key);
			});
		}
	}, {
		key: 'setActiveKey',
		value: function setActiveKey(key) {
			this.ctrl.setActiveKey(key);
		}
	}, {
		key: 'parseInfo',
		value: function parseInfo() {
			var children = this.props.children;

			return _react2.default.Children.map(children, function (v, i) {
				if (!v) {
					return;
				}
				return {
					key: v.key || i,
					tab: v.props.tab,
					props: v.props,
					content: v.props.children
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    navVisible = _props.navVisible,
			    contentVisible = _props.contentVisible,
			    theme = _props.theme;

			var info = this.parseInfo();
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-tabs', 'mona-tabs-' + theme, className) },
				navVisible ? _react2.default.createElement(_nav2.default, { info: info, ctrl: this.ctrl, theme: theme }) : null,
				contentVisible ? _react2.default.createElement(_content2.default, { info: info, ctrl: this.ctrl }) : null
			);
		}
	}]);

	return Tabs;
}(_react.Component);

Tabs.item = _nullView2.default;
Tabs.defaultProps = {
	theme: 'default',
	contentVisible: true,
	navVisible: true
};
exports.default = Tabs;