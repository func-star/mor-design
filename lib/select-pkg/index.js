'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _tool = require('../tool');

var _tool2 = _interopRequireDefault(_tool);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var SelectPkg = function (_Component) {
	_inherits(SelectPkg, _Component);

	function SelectPkg(props) {
		_classCallCheck(this, SelectPkg);

		var _this = _possibleConstructorReturn(this, (SelectPkg.__proto__ || Object.getPrototypeOf(SelectPkg)).call(this, props));

		_this.selectKey = Date.now();
		_this.state = {
			updateKey: Date.now()
		};
		_this.valueObj = {};

		if (typeof props.disFilter === 'undefined' && !props.multiple) {
			_this.disFilter = true;
		}
		_this.value = props.defaultValue;
		return _this;
	}

	_createClass(SelectPkg, [{
		key: 'getName',
		value: function getName() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';

			return this.props[name];
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			var _this2 = this;

			var _props = this.props,
			    valueType = _props.valueType,
			    multiple = _props.multiple,
			    joinSign = _props.joinSign;

			var val = void 0;
			if (multiple) {
				val = this.value || [];
				if (valueType === 'detail') {
					return val.map(function (v) {
						return _this2.valueObj['val' + v];
					});
				}
				if (valueType === 'string' && typeof val === 'string') {
					return val;
				}
				if (valueType === 'string') {
					return val.join(joinSign);
				}
			} else {
				val = this.value;
				if (valueType === 'detail') {
					return this.valueObj['val' + val];
				}
			}
			return val;
		}
	}, {
		key: 'setState',
		value: function setState() {
			var _get2;

			if (this.unmount) {
				return;
			}

			for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
				props[_key] = arguments[_key];
			}

			(_get2 = _get(SelectPkg.prototype.__proto__ || Object.getPrototypeOf(SelectPkg.prototype), 'setState', this)).call.apply(_get2, [this].concat(props));
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.unmount = true;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			var _props2 = this.props,
			    server = _props2.server,
			    data = _props2.data,
			    defaultValue = _props2.defaultValue,
			    multiple = _props2.multiple;

			if (server) {
				server(this.getValue()).then(function (data) {
					_this3.setData(data);
				});
			} else if (data) {
				this.setData(data);
			}
			this.form = _tool2.default.queryParentReactDom(this.refs.wrap, '.mona-form');
		}

		//设置值

	}, {
		key: 'setData',
		value: function setData(data) {
			var _props3 = this.props,
			    defaultValue = _props3.defaultValue,
			    multiple = _props3.multiple,
			    valueKey = _props3.valueKey;

			var _data = {
				data: data
			};
			if (typeof defaultValue !== 'undefined') {
				this.setDefaultvalue(data, defaultValue);
			} else {
				this.setState(_data);
			}
		}

		//设置默认值

	}, {
		key: 'setDefaultvalue',
		value: function setDefaultvalue(data, val) {
			var _this4 = this;

			this.value = val;
			var _props4 = this.props,
			    multiple = _props4.multiple,
			    valueType = _props4.valueType,
			    valueKey = _props4.valueKey,
			    keyType = _props4.keyType,
			    joinSign = _props4.joinSign;

			var defaultValue = void 0;
			if (multiple && valueType === 'string' && typeof defaultValue === 'string') {
				defaultValue = defaultValue.split(joinSign);
			} else if (multiple) {
				defaultValue = val;
			}
			if (!multiple) {
				defaultValue = val + '';
			}
			if (keyType === 'value') {
				defaultValue = val;
			} else if (multiple) {
				defaultValue = data.filter(function (v) {
					return defaultValue.indexOf(v[valueKey]) >= 0;
				}).map(function (v) {
					_this4.setDetail(v[valueKey], v);
					return v[valueKey] + '';
				});
			} else {
				data.forEach(function (v) {
					if (v[valueKey] === val) {
						_this4.setDetail(v[valueKey], v);
					}
				});
			}
			this.setState({
				updateKey: Date.now(),
				data: data,
				defaultValue: defaultValue
			});
		}
	}, {
		key: 'onChange',
		value: function onChange(value) {
			this.value = value;
			if (this.props.onChange) {
				this.props.onChange(this.getValue(), this.valueObj['val' + value]);
			}
			if (this.form) {
				this.form.onChange();
			}
		}
	}, {
		key: 'setDetail',
		value: function setDetail(val, info) {
			var parseDetail = this.props.parseDetail;

			if (parseDetail) {
				this.valueObj['val' + val] = parseDetail(info);
			} else {
				this.valueObj['val' + val] = info;
			}
		}
	}, {
		key: 'onSelect',
		value: function onSelect(val, option) {
			this.setDetail(option.props.value, option.props.info);
		}
	}, {
		key: 'onSearch',
		value: function onSearch(val) {
			var _this5 = this;

			var onSearch = this.props.onSearch;

			if (onSearch) {
				onSearch(val, function (data) {
					_this5.setState({
						data: data
					});
				});
			}
		}
	}, {
		key: 'searchFilter',
		value: function searchFilter() {
			return true;
		}

		//设置唯一key，可用index或value

	}, {
		key: 'getItemKey',
		value: function getItemKey(item, index) {
			var _props5 = this.props,
			    valueKey = _props5.valueKey,
			    indexKey = _props5.indexKey;

			if (indexKey) {
				return index;
			}
			return item[valueKey];
		}
	}, {
		key: 'render',
		value: function render() {
			var _props6 = this.props,
			    defaultValue = _props6.defaultValue,
			    className = _props6.className,
			    children = _props6.children,
			    server = _props6.server,
			    data = _props6.data,
			    valueType = _props6.valueType,
			    keyType = _props6.keyType,
			    nameKey = _props6.nameKey,
			    valueKey = _props6.valueKey,
			    onSearch = _props6.onSearch,
			    onSelect = _props6.onSelect,
			    searchFilter = _props6.searchFilter,
			    parseDetail = _props6.parseDetail,
			    joinSign = _props6.joinSign,
			    disFilter = _props6.disFilter,
			    keyField = _props6.keyField,
			    indexKey = _props6.indexKey,
			    optionRender = _props6.optionRender,
			    onChange = _props6.onChange,
			    props = _objectWithoutProperties(_props6, ['defaultValue', 'className', 'children', 'server', 'data', 'valueType', 'keyType', 'nameKey', 'valueKey', 'onSearch', 'onSelect', 'searchFilter', 'parseDetail', 'joinSign', 'disFilter', 'keyField', 'indexKey', 'optionRender', 'onChange']);

			var _data = this.state.data || data || [];
			var opt = {};
			if (this.disFilter) {
				opt.filterOption = this.searchFilter.bind(this);
			}
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('mona-form-control mona-selectPkg', className), ref: 'wrap', key: this.selectKey },
				_react2.default.createElement(
					_select2.default,
					_extends({}, props, opt, {
						key: this.state.updateKey,
						className: 'w-full',
						optionFilterProp: 'children',
						onChange: this.onChange.bind(this),
						onSelect: this.onSelect.bind(this),
						defaultValue: this.state.defaultValue,
						onSearch: this.onSearch.bind(this) }),
					keyType == 'value' ? _data.map(function (item, index) {
						return _react2.default.createElement(
							Option,
							{ key: item + '', value: item + '', info: item },
							item
						);
					}, this) : _data.map(function (item, index) {
						return _react2.default.createElement(
							Option,
							{ key: this.getItemKey(item, index), value: item[valueKey] + '', info: item },
							optionRender ? optionRender(item, index) : item[nameKey]
						);
					}, this)
				)
			);
		}
	}]);

	return SelectPkg;
}(_react.Component);

SelectPkg.defaultProps = {
	showSearch: true,
	joinSign: ',',
	keyType: 'key-value',
	nameKey: 'name',
	valueKey: 'value'
};
exports.default = SelectPkg;