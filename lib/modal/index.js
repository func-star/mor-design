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

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _mountRoot = require('../mount-root');

var _mountRoot2 = _interopRequireDefault(_mountRoot);

var _queueAnim = require('../queue-anim');

var _queueAnim2 = _interopRequireDefault(_queueAnim);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
	_inherits(Modal, _Component);

	function Modal() {
		_classCallCheck(this, Modal);

		return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	}

	_createClass(Modal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			this.confirmLoading = props.confirmLoading;
			this.setState({});
		}
	}, {
		key: 'onConfirm',
		value: function onConfirm() {
			if (this.props.onConfirm) {
				this.props.onConfirm();
			}
		}
	}, {
		key: 'onCancel',
		value: function onCancel() {
			if (this.props.onCancel) {
				this.props.onCancel();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    visible = _props.visible,
			    title = _props.title,
			    onConfirm = _props.onConfirm,
			    style = _props.style,
			    onCancel = _props.onCancel,
			    okText = _props.okText,
			    cancelText = _props.cancelText,
			    footer = _props.footer,
			    closable = _props.closable,
			    maskClosable = _props.maskClosable,
			    wrapClassName = _props.wrapClassName,
			    confirmLoading = _props.confirmLoading,
			    children = _props.children,
			    props = _objectWithoutProperties(_props, ['className', 'visible', 'title', 'onConfirm', 'style', 'onCancel', 'okText', 'cancelText', 'footer', 'closable', 'maskClosable', 'wrapClassName', 'confirmLoading', 'children']);

			return _react2.default.createElement(
				_mountRoot2.default,
				{ visible: visible, closeDelay: 300, className: 'mona-modal-root' },
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('mona-modal', className) },
					_react2.default.createElement(
						_queueAnim2.default,
						{ animConfig: { opacity: [1, 0] }, duration: 200, leaveReverse: true },
						visible ? _react2.default.createElement('div', { className: 'mona-modal-bg', key: 'bg' }) : null
					),
					_react2.default.createElement(
						_queueAnim2.default,
						{ type: 'scale', className: 'mona-modal-con o-a', duration: 300, leaveReverse: true },
						maskClosable ? _react2.default.createElement('div', { className: 'mona-modal-con-bg', onClick: this.onCancel.bind(this), key: 'conBg' }) : null,
						visible ? _react2.default.createElement(
							'div',
							_extends({ className: (0, _classnames2.default)('mona-modal-wrap block-center', wrapClassName) }, props, { key: 'wrap', style: style }),
							closable ? _react2.default.createElement(
								'a',
								{ className: 'mona-modal-close', onClick: this.onCancel.bind(this) },
								_react2.default.createElement(_icon2.default, { name: 'close' })
							) : null,
							_react2.default.createElement(
								'div',
								{ className: 'mona-modal-con-wrap' },
								title ? _react2.default.createElement(
									'div',
									{ className: 'mona-modal-header' },
									title
								) : null,
								children ? _react2.default.createElement(
									'div',
									{ className: 'mona-modal-body' },
									children
								) : null
							),
							footer ? _react2.default.createElement(
								'div',
								{ className: 'mona-modal-footer b-t' },
								footer
							) : null,
							!footer && footer !== false ? _react2.default.createElement(
								_row2.default,
								{ className: 'mona-modal-footer text-right', align: 'center', justify: 'end' },
								_react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										_button2.default,
										{ loading: this.confirmLoading, theme: 'primary', onClick: this.onConfirm.bind(this), className: 'w-m-80' },
										okText || '确定'
									),
									_react2.default.createElement(
										_button2.default,
										{ onClick: this.onCancel.bind(this), className: 'm-l-sm w-m-80' },
										cancelText || '取消'
									)
								)
							) : null
						) : null
					)
				)
			);
		}
	}], [{
		key: 'confirm',
		value: function confirm() {
			var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			if (!Modal.modalConfirmNode) {
				Modal.modalConfirmNode = document.createElement('div');
				document.getElementsByTagName('body')[0].appendChild(Modal.modalConfirmNode);
				Modal.modalConfirmNode.remove();
			}
			_reactDom2.default.render(_react2.default.createElement(_confirm2.default, { info: info, key: Date.now() }), Modal.modalConfirmNode);
		}
	}]);

	return Modal;
}(_react.Component);

Modal.defaultProps = {
	maskClosable: true,
	closable: true,
	okText: '确定'
};
exports.default = Modal;