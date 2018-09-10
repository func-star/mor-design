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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _queueAnim = require('../queue-anim');

var _queueAnim2 = _interopRequireDefault(_queueAnim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_Component) {
	_inherits(Notification, _Component);

	function Notification() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Notification);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.notifyList = [], _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Notification, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			Notification.instance = this;
		}
	}, {
		key: 'add',
		value: function add(conf) {
			var _this2 = this;

			var duration = conf.duration;

			var item = _extends({ id: Date.now() + '' + (Math.random() * 1000 | 1) }, conf);
			item.icon = item.type;
			if (item.type === 'error') {
				item.icon = 'error';
			}
			if (item.type === 'success') {
				item.icon = 'success';
			}
			if (item.type === 'warning') {
				item.icon = 'warning';
			}
			if (item.type === 'info') {
				item.icon = 'info';
			}
			this.notifyList.push(item);
			item.timeout = setTimeout(function () {
				_this2.remove(item);
			}, duration || 2000);
			this.setState({});
		}
	}, {
		key: 'close',
		value: function close(item) {
			clearTimeout(item.timeout);
			this.remove(item);
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			this.notifyList.splice(this.notifyList.indexOf(item), 1);
			this.setState({});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mona-notification' },
				_react2.default.createElement(
					_queueAnim2.default,
					{ type: 'right', duration: 400, leaveReverse: true },
					this.notifyList.map(function (item) {
						return _react2.default.createElement(
							_row2.default,
							{ key: item.id, className: 'mona-notification-item', align: 'center' },
							item.icon ? _react2.default.createElement(
								'div',
								{ className: (0, _classnames2.default)('mona-notification-icon flex-center', 'mona-notification-icon-' + item.type) },
								_react2.default.createElement(_icon2.default, { name: item.icon })
							) : null,
							_react2.default.createElement(
								'div',
								{ className: 'flex-1 mona-notification-content' },
								item.title ? _react2.default.createElement(
									'div',
									{ className: 'mona-notification-title' },
									item.title
								) : null,
								item.message
							),
							_react2.default.createElement(
								'div',
								{ className: 'flex-center mona-notification-close', onClick: this.close.bind(this, item) },
								_react2.default.createElement(_icon2.default, { name: 'close' })
							)
						);
					}, this)
				)
			);
		}
	}], [{
		key: 'config',
		value: function config(options) {
			if (!Notification.node) {
				Notification.node = document.createElement('div');
				document.body.appendChild(Notification.node);
				_reactDom2.default.render(_react2.default.createElement(Notification, null), Notification.node, function () {
					Notification.instance.add(options);
				});
			} else {
				Notification.instance.add(options);
			}
		}
	}]);

	return Notification;
}(_react.Component);

exports.default = Notification;