'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = function (_Component) {
	_inherits(Popover, _Component);

	function Popover() {
		_classCallCheck(this, Popover);

		return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
	}

	_createClass(Popover, [{
		key: 'hide',
		value: function hide() {
			this.refs.dropdown.hide();
		}
	}, {
		key: 'show',
		value: function show() {
			this.refs.dropdown.show();
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			this.refs.dropdown.toggle();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    trigger = _props.trigger,
			    title = _props.title,
			    content = _props.content,
			    theme = _props.theme,
			    props = _objectWithoutProperties(_props, ['children', 'trigger', 'title', 'content', 'theme']);

			var overlay = _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-popover', 'mona-popover-' + theme) },
				_react2.default.createElement('div', { className: 'mona-popover-arrow' }),
				_react2.default.createElement(
					'div',
					{ className: 'mona-popover-inner' },
					title ? _react2.default.createElement(
						_row2.default,
						{ className: 'mona-popover-title', align: 'center' },
						title
					) : null,
					_react2.default.createElement(
						'div',
						{ className: 'mona-popover-content' },
						content
					)
				)
			);
			return _react2.default.createElement(
				_dropdown2.default,
				_extends({ trigger: trigger, overlay: overlay }, props, { ref: 'dropdown' }),
				children
			);
		}
	}]);

	return Popover;
}(_react.Component);

Popover.defaultProps = {
	trigger: 'click',
	theme: 'default'
};
exports.default = Popover;