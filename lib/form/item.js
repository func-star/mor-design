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

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _col = require('../col');

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = function (_Component) {
	_inherits(FormItem, _Component);

	function FormItem() {
		_classCallCheck(this, FormItem);

		return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
	}

	_createClass(FormItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    children = _props.children,
			    label = _props.label,
			    labelCol = _props.labelCol,
			    wrapperCol = _props.wrapperCol,
			    labelSpan = _props.labelSpan,
			    wrapperSpan = _props.wrapperSpan,
			    required = _props.required,
			    colon = _props.colon,
			    props = _objectWithoutProperties(_props, ['className', 'children', 'label', 'labelCol', 'wrapperCol', 'labelSpan', 'wrapperSpan', 'required', 'colon']);

			var labelInfo = labelCol || {};
			var wrapperInfo = wrapperCol || {};

			return _react2.default.createElement(
				'div',
				_extends({ className: (0, _classnames2.default)(className, 'mona-form-item') }, props),
				_react2.default.createElement(
					_row2.default,
					null,
					_react2.default.createElement(
						_col2.default,
						_extends({}, labelInfo, { span: labelSpan || labelInfo.span, className: 'mona-form-item-label' }),
						required,
						required ? _react2.default.createElement(
							'span',
							{ className: 'text-red' },
							'*'
						) : null,
						label,
						label && colon ? '\uFF1A' : null
					),
					_react2.default.createElement(
						_col2.default,
						_extends({}, wrapperInfo, { span: wrapperSpan || wrapperInfo.span }),
						children
					)
				)
			);
		}
	}]);

	return FormItem;
}(_react.Component);

FormItem.defaultProps = {
	colon: true
};
exports.default = FormItem;