'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _row = require('../../row');

var _row2 = _interopRequireDefault(_row);

var _tool = require('../../tool');

var _tool2 = _interopRequireDefault(_tool);

var _baseComponent = require('../../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBaseOption = function (_BaseComponent) {
	_inherits(SelectBaseOption, _BaseComponent);

	function SelectBaseOption() {
		_classCallCheck(this, SelectBaseOption);

		return _possibleConstructorReturn(this, (SelectBaseOption.__proto__ || Object.getPrototypeOf(SelectBaseOption)).apply(this, arguments));
	}

	_createClass(SelectBaseOption, [{
		key: 'onChange',
		value: function onChange() {
			this.setState({});
		}
	}, {
		key: 'didMount',
		value: function didMount() {
			this.selfDom = (0, _reactDom.findDOMNode)(this);
			this.par = _tool2.default.queryParentReactDom(this.selfDom, '.mona-baseSelect-list');
			this.ctrl = this.par.getCtrl();
			this.bind(this.ctrl, 'activeChange', this.onChange.bind(this));
			this.bind(this.ctrl, 'valueChange', this.onChange.bind(this));
			this.setState({});
		}
	}, {
		key: 'getInfo',
		value: function getInfo() {
			var props = this.props;
			return {
				value: props.value,
				label: _tool2.default.childrenText(props.children),
				reactDom: this
			};
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			var children = this.props.children;

			return _tool2.default.childrenText(children);
		}
	}, {
		key: 'select',
		value: function select() {
			this.ctrl.selectOpt(this.props.value, this);
			this.ctrl.toggleSelect(this.getInfo());
		}
	}, {
		key: 'isSelected',
		value: function isSelected() {
			if (!this.ctrl) {
				return false;
			}
			return this.ctrl.isSelected(this.getInfo());
		}
	}, {
		key: 'isActive',
		value: function isActive() {
			if (!this.ctrl) {
				return false;
			}
			return this.ctrl.isActive(this.getInfo());
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    value = _props.value,
			    children = _props.children;

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-baseSelect-option mona-select-option', {
						'mona-select-option-active': this.isActive(),
						'mona-select-option-selected': this.isSelected()
					}), onClick: this.select.bind(this) },
				_react2.default.createElement(
					_row2.default,
					{ align: 'center', className: 'full' },
					_react2.default.createElement('div', null),
					_react2.default.createElement(
						'div',
						{ ref: 'child' },
						children
					)
				)
			);
		}
	}]);

	return SelectBaseOption;
}(_baseComponent2.default);

exports.default = SelectBaseOption;