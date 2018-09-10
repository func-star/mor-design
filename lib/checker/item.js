'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckerItem = function (_Component) {
	_inherits(CheckerItem, _Component);

	function CheckerItem() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CheckerItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckerItem.__proto__ || Object.getPrototypeOf(CheckerItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(CheckerItem, [{
		key: 'getName',
		value: function getName() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			return this.props[name];
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			if (this.props.hasOwnProperty('active')) {
				if (this.props.active) {
					return this.value;
				}
				if (!this.props.active) {
					return;
				}
			}
			return this.value;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var value = this.props.value;

			if (!this.checkerParent) {
				this.checkerParent = _tool2.default.queryParentReactDom(this.refs.wrap, '.mona-checker');
			}
			if (!this.checkerParent) {
				return this.checkSelect();
			}
			this.setState({
				active: this.checkerParent.isActive(value)
			});
		}

		//检测选中

	}, {
		key: 'toggleSelect',
		value: function toggleSelect() {
			var _props = this.props,
			    disabled = _props.disabled,
			    value = _props.value;

			if (disabled) {
				return false;
			}
			if (!this.checkerParent) {
				return this.selfToggle();
			}
			this.checkerParent.toggleSelect(value);
			this.setState({
				active: this.checkerParent.isActive(value)
			});
		}
	}, {
		key: 'checkSelect',
		value: function checkSelect() {
			if (!this.checkerParent) {
				return this.selfCheckSelect();
			}
			var value = this.props.value;

			this.setState({
				active: this.checkerParent.isActive(value)
			});
		}

		//保证独立存活
		//无group时独自切换状态

	}, {
		key: 'selfToggle',
		value: function selfToggle() {
			var _props2 = this.props,
			    value = _props2.value,
			    onChange = _props2.onChange;

			if (this.value === value) {
				this.value = undefined;
			} else {
				this.value = value;
			}
			this.setState({
				active: this.value === value
			});
			onChange && onChange(this.value);
		}

		//无group时检测选中

	}, {
		key: 'selfCheckSelect',
		value: function selfCheckSelect() {
			var value = this.props.value;

			return this.value === value;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    className = _props3.className,
			    children = _props3.children,
			    theme = _props3.theme,
			    disabled = _props3.disabled,
			    value = _props3.value,
			    props = _objectWithoutProperties(_props3, ['className', 'children', 'theme', 'disabled', 'value']);

			var active = this.state.active;
			if (this.props.hasOwnProperty('active')) {
				active = this.props.active;
			}
			return _react2.default.createElement(
				'div',
				{
					ref: 'wrap',
					className: (0, _classnames2.default)('mona-checker-item', 'mona-checker-item-' + theme, className, {
						active: active,
						'mona-checker-item-disabled': disabled
					}),
					onClick: this.toggleSelect.bind(this) },
				children
			);
		}
	}]);

	return CheckerItem;
}(_react.Component);

CheckerItem.Item = _item2.default;
CheckerItem.defaultProps = {
	theme: 'default'
};
exports.default = CheckerItem;