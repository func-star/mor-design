'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = function (_Component) {
	_inherits(Confirm, _Component);

	function Confirm() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Confirm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			visible: true
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Confirm, [{
		key: 'onCancel',
		value: function onCancel() {
			this.state.visible = false;
			this.setState({});
			this.props.info.onCancel && this.props.info.onCancel();
		}
	}, {
		key: 'onConfirm',
		value: function onConfirm() {
			this.state.visible = false;
			this.setState({});
			this.props.info.onConfirm && this.props.info.onConfirm();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$info = this.props.info,
			    className = _props$info.className,
			    content = _props$info.content,
			    onConfirm = _props$info.onConfirm,
			    title = _props$info.title,
			    onCancel = _props$info.onCancel,
			    props = _objectWithoutProperties(_props$info, ['className', 'content', 'onConfirm', 'title', 'onCancel']);

			return this.state.visible ? _react2.default.createElement(
				_index2.default,
				_extends({
					style: { width: '340px', top: '80px' },
					className: (0, _classnames2.default)('mona-modal-confirm', className),
					visible: this.state.visible,
					onConfirm: this.onConfirm.bind(this),
					title: title,
					onCancel: this.onCancel.bind(this)
				}, props),
				content
			) : null;
		}
	}]);

	return Confirm;
}(_react.Component);

exports.default = Confirm;