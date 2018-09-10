'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
	_inherits(Content, _Component);

	function Content() {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	}

	_createClass(Content, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var ctrl = this.props.ctrl;

			this.tabKey = ctrl.activeKey;
			this.moveInkBar();
			this.setState({}, function () {
				_this2.barInit = true;
			});
			ctrl.on('changeActiveKey', function (key) {
				_this2.tabKey = key;
				_this2.setState({});
				_this2.moveInkBar();
			});
			this.wResize = function () {
				_this2.moveInkBar();
			};
			window.addEventListener('resize', this.wResize);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.wResize);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (!this.hasMoveBar) {
				this.moveInkBar();
			}
		}
	}, {
		key: 'toTab',
		value: function toTab(item) {
			var ctrl = this.props.ctrl;

			ctrl.setActiveKey(item.key);
		}
	}, {
		key: 'moveInkBar',
		value: function moveInkBar() {
			if (!this.refs.bar) {
				return;
			}
			var _props = this.props,
			    info = _props.info,
			    ctrl = _props.ctrl;

			var activeKey = ctrl.getActiveKey(info);

			var index = info.map(function (v) {
				return v.key + '';
			}).indexOf(activeKey + '');

			if (index < 0) {
				return;
			}
			var dom = this.refs['tab_' + index];
			if (!dom) {
				return;
			}
			this.hasMoveBar = true;
			_tool2.default.css(this.refs.bar, {
				transform: 'translate3d(' + dom.offsetLeft + 'px, 0, 0)',
				width: dom.offsetWidth
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    info = _props2.info,
			    theme = _props2.theme,
			    ctrl = _props2.ctrl,
			    props = _objectWithoutProperties(_props2, ['info', 'theme', 'ctrl']);

			var activeKey = ctrl.getActiveKey(info);
			return _react2.default.createElement(
				'div',
				{ className: 'mona-tabs-nav' },
				_react2.default.createElement(
					_row2.default,
					{ className: 'mona-tabs-nav-wrap' },
					info.map(function (item, index) {
						return _react2.default.createElement(
							'div',
							{ className: (0, _classnames2.default)('mona-tabs-nav-item flex-center', item.props.className, { active: activeKey == item.key }), key: item.key, onClick: this.toTab.bind(this, item), ref: 'tab_' + index },
							item.tab
						);
					}, this)
				),
				theme == 'default' ? _react2.default.createElement('div', { className: (0, _classnames2.default)('mona-tabs-nav-ink-bar', { 'mona-tabs-nav-ink-bar-animated': this.barInit && this.hasMoveBar }), ref: 'bar' }) : null
			);
		}
	}]);

	return Content;
}(_react.Component);

exports.default = Content;