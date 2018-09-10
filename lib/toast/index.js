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

var Toast = function (_Component) {
	_inherits(Toast, _Component);

	function Toast() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Toast);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.notifyList = [], _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Toast, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			Toast.instance = this;
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
				{ className: 'mona-toast' },
				_react2.default.createElement(
					_queueAnim2.default,
					{ type: 'fade', duration: 400, leaveReverse: true },
					this.notifyList.map(function (item) {
						return _react2.default.createElement(
							_row2.default,
							{ justify: 'center', key: item.id },
							_react2.default.createElement(
								_row2.default,
								{ className: (0, _classnames2.default)('mona-toast-item', 'mona-toast-' + item.type), align: 'center' },
								item.type ? _react2.default.createElement(_icon2.default, { name: item.icon }) : null,
								_react2.default.createElement(
									'div',
									{ className: 'flex-1 mona-toast-content' },
									item.title
								)
							)
						);
					}, this)
				)
			);
		}
	}], [{
		key: 'config',
		value: function config(options) {
			if (!Toast.node) {
				Toast.node = document.createElement('div');
				document.body.appendChild(Toast.node);
				_reactDom2.default.render(_react2.default.createElement(Toast, null), Toast.node, function () {
					Toast.instance.add(options);
				});
			} else {
				Toast.instance.add(options);
			}
		}
	}]);

	return Toast;
}(_react.Component);

exports.default = Toast;