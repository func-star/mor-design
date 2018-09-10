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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_Component) {
	_inherits(Col, _Component);

	function Col() {
		_classCallCheck(this, Col);

		return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
	}

	_createClass(Col, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    className = _props.className,
			    span = _props.span,
			    xs = _props.xs,
			    sm = _props.sm,
			    md = _props.md,
			    lg = _props.lg,
			    xl = _props.xl,
			    xxl = _props.xxl,
			    children = _props.children,
			    gutter = _props.gutter,
			    style = _props.style,
			    props = _objectWithoutProperties(_props, ['className', 'span', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'children', 'gutter', 'style']);

			var sty = style;
			if (!sty) {
				sty = {};
			}
			if (gutter) {
				if (!sty.paddingLeft) {
					sty.paddingLeft = gutter / 2;
				}
				if (!sty.paddingRight) {
					sty.paddingRight = gutter / 2;
				}
			}
			var cls = [];
			['xs', 'sm', 'span', 'md', 'lg', 'xl', 'xxl'].forEach(function (v) {
				if (!_this2.props[v]) {
					return;
				}
				if (v === 'span') {
					cls.push('mona-col-' + _this2.props[v]);
				} else {
					cls.push('mona-col-' + v + '-' + _this2.props[v]);
				}
			});

			return _react2.default.createElement(
				'div',
				_extends({ className: (0, _classnames2.default)(cls, className), style: sty }, props),
				children
			);
		}
	}]);

	return Col;
}(_react.Component);

exports.default = Col;