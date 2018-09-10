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

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostForm = function (_Component) {
	_inherits(PostForm, _Component);

	function PostForm() {
		_classCallCheck(this, PostForm);

		return _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).apply(this, arguments));
	}

	_createClass(PostForm, [{
		key: 'select',
		value: function select(item) {
			if (this.refs.ipt) {
				this.refs.ipt.setValue(item.value);
			}
			this.props.onSelect && this.props.onSelect(item);
			this.refs.drop.hide();
		}
	}, {
		key: 'onVisibleChange',
		value: function onVisibleChange(v) {
			//this.visible = v;
			//this.setState({})
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.refs.drop.hide();
		}
	}, {
		key: 'show',
		value: function show() {
			this.refs.drop.show();
		}
	}, {
		key: 'onChange',
		value: function onChange() {
			var _props;

			this.props.onChange && (_props = this.props).onChange.apply(_props, arguments);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    children = _props2.children,
			    data = _props2.data,
			    onSelect = _props2.onSelect,
			    onChange = _props2.onChange,
			    props = _objectWithoutProperties(_props2, ['children', 'data', 'onSelect', 'onChange']);

			return _react2.default.createElement(
				_dropdown2.default,
				{
					ref: 'drop',
					trigger: 'click',
					placement: 'bottomLeft',
					sameWidth: true,
					overlay: _react2.default.createElement(_list2.default, { data: data || [],
						visible: this.visible,
						onSelect: this.select.bind(this),
						onVisibleChange: this.onVisibleChange.bind(this) }) },
				_react2.default.createElement(_input2.default, _extends({}, props, { autoComplete: 'off', onChange: this.onChange.bind(this), ref: 'ipt' }))
			);
		}
	}]);

	return PostForm;
}(_react.Component);

exports.default = PostForm;