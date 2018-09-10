'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contentStorage = require('../content-storage');

var _contentStorage2 = _interopRequireDefault(_contentStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentItem = _contentStorage2.default.Item;

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
			this.setState({});
			ctrl.on('changeActiveKey', function (key) {
				_this2.tabKey = key;
				_this2.setState({});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    info = _props.info,
			    ctrl = _props.ctrl,
			    props = _objectWithoutProperties(_props, ['info', 'ctrl']);

			var activeKey = ctrl.getActiveKey(info);
			return _react2.default.createElement(
				'div',
				{ className: 'mona-tabs-content' },
				_react2.default.createElement(
					_contentStorage2.default,
					null,
					info.map(function (item) {
						return _react2.default.createElement(
							ContentItem,
							{ condition: activeKey === item.key, key: item.key },
							item.content
						);
					}, this)
				)
			);
		}
	}]);

	return Content;
}(_react.Component);

exports.default = Content;