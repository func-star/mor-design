'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//重写部分component方法，扩展功能，并保证稳定
var BaseComponent = function (_Component) {
	_inherits(BaseComponent, _Component);

	function BaseComponent() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, BaseComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call.apply(_ref, [this].concat(args))), _this), _this._bindEvents = [], _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(BaseComponent, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			this.willReceiveProps && this.willReceiveProps.apply(this, arguments);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.willMount && this.willMount();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.didMount && this.didMount();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.unmount = true;
			this.willUnmount && this.willUnmount();
			this.unbindAll();
		}
	}, {
		key: 'setState',
		value: function setState(data) {
			var _get2;

			if (this.unmount) {
				return;
			}

			for (var _len2 = arguments.length, other = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				other[_key2 - 1] = arguments[_key2];
			}

			return (_get2 = _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'setState', this)).call.apply(_get2, [this, data || {}].concat(other));
		}
	}, {
		key: 'bind',
		value: function bind(server, name, fun, useCapture) {
			this._bindEvents.push({
				server: server,
				name: name,
				fun: fun
			});
			if (server.addEventListener) {
				server.addEventListener(name, fun, useCapture);
			} else {
				server.on(name, fun);
			}
		}
	}, {
		key: 'unbindAll',
		value: function unbindAll() {
			this._bindEvents.forEach(function (v) {
				if (v.server.addEventListener) {
					v.server.removeEventListener(v.name, v.fun);
				} else {
					v.server.off(v.name, v.fun);
				}
			});
		}
	}, {
		key: 'unbind',
		value: function unbind(server, name) {
			this._bindEvents.forEach(function (v) {
				if (v.server == server, v.name == name) {
					if (v.server.addEventListener) {
						v.server.removeEventListener(v.name, v.fun);
					} else {
						v.server.off(v.name, v.fun);
					}
				}
			});
		}
	}]);

	return BaseComponent;
}(_react.Component);

exports.default = BaseComponent;