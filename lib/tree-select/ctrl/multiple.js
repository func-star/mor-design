'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _selectBase = require('../../select-base');

var _selectBase2 = _interopRequireDefault(_selectBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CtrlBase = _selectBase2.default.BaseCtrl;
//单选

var TreeSelectMultiple = function (_CtrlBase) {
	_inherits(TreeSelectMultiple, _CtrlBase);

	function TreeSelectMultiple() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TreeSelectMultiple);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TreeSelectMultiple.__proto__ || Object.getPrototypeOf(TreeSelectMultiple)).call.apply(_ref, [this].concat(args))), _this), _this.selected = [], _this.selectedValues = [], _this.expandedKeys = [], _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TreeSelectMultiple, [{
		key: 'setDefaultValue',


		//设置默认值
		value: function setDefaultValue(val, props) {
			if (props.defaultValueData) {
				this.selected = props.defaultValueData;
				this.parseSelectValues();
				this.emit('valueChange');
				return;
			}
			if (typeof val === 'undefined' || !props.data) {
				return;
			}
			this.setDefaultData(val, props.data);
			this.parseSelectValues();
			if (this.selected.length > 0) {
				this.emit('valueChange');
			}
		}
	}, {
		key: 'setDefaultData',
		value: function setDefaultData(value, data) {
			var _this2 = this;

			data.forEach(function (v) {
				if (v.value === value) {
					_this2.selected.push(v);
				}
				if (v.children) {
					_this2.setDefaultData(value, v.children);
				}
			});
		}
	}, {
		key: 'parseSelectValues',
		value: function parseSelectValues() {
			this.selectedValues = this.selected.map(function (v) {
				return v.value;
			});
		}
	}, {
		key: 'setSelected',
		value: function setSelected(val) {
			this.selected = val;
			this.parseSelectValues();
			this.emit('valueChange');
		}

		//切换选中状态

	}, {
		key: 'toggleSelect',
		value: function toggleSelect(info) {
			if (this.isSelected(info)) {
				this.selected = this.selected.filter(function (v) {
					return v.value !== info.value;
				});
			} else {
				this.selected.push(info);
			}
			this.parseSelectValues();
			this.emit('valueChange');
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.selected = [];
			this.parseSelectValues();
			this.emit('valueChange');
		}

		//是否选中

	}, {
		key: 'isSelected',
		value: function isSelected(info) {
			return this.selectedValues.indexOf(info.value) >= 0;
		}
	}, {
		key: 'toggleChildren',
		value: function toggleChildren(item) {
			if (this.expandedKeys.indexOf(item.value) > 0) {
				this.expandedKeys.splice(this.expandedKeys.indexOf(item.value), 1);
			} else {
				this.expandedKeys.push(item.value);
			}
		}
	}, {
		key: 'childrenExpanded',
		value: function childrenExpanded(item) {
			return this.expandedKeys.indexOf(item.value) >= 0;
		}
	}, {
		key: 'removeLast',
		value: function removeLast() {
			if (this.selected.length === 0) {
				return;
			}
			this.selected.splice(this.selected.length - 1, 1);
			this.emit('valueChange');
		}
	}]);

	return TreeSelectMultiple;
}(CtrlBase);

exports.default = TreeSelectMultiple;