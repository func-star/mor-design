'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _selectBase = require('../../select-base');

var _selectBase2 = _interopRequireDefault(_selectBase);

var _tool = require('../../tool');

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CtrlBase = _selectBase2.default.BaseCtrl;
//单选

var SelectCtrlMultiple = function (_CtrlBase) {
	_inherits(SelectCtrlMultiple, _CtrlBase);

	function SelectCtrlMultiple() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SelectCtrlMultiple);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectCtrlMultiple.__proto__ || Object.getPrototypeOf(SelectCtrlMultiple)).call.apply(_ref, [this].concat(args))), _this), _this.selected = [], _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SelectCtrlMultiple, [{
		key: 'setDefaultValue',


		//设置默认值
		value: function setDefaultValue(val, props) {
			var _this2 = this;

			if (!val || !(val instanceof Array) || val.length === 0) {
				return;
			}
			this.valueList = props.children.map(function (v) {
				var props = v.props;
				return {
					value: props.value,
					label: _tool2.default.childrenText(props.children)
				};
			});

			var ids = this.valueList.map(function (v) {
				return v.value;
			});

			var l = val.map(function (v) {
				var index = ids.indexOf(v);
				if (index >= 0) {
					return _this2.valueList[index];
				} else {
					return {
						value: v,
						label: v
					};
				}
			});
			if (l.length > 0) {
				this.selected = l;
				this.emit('valueChange');
			}
		}

		//选中判断

	}, {
		key: 'toggleSelect',
		value: function toggleSelect(info) {
			var index = this.getSelectedIndex(info);
			if (index < 0) {
				this.selected.push(info);
			} else {
				this.selected = this.selected.filter(function (v) {
					return v.value !== info.value;
				});
			}
			this.emit('valueChange');
			//this.hideDropView();
		}

		//获取option在选中列表中的index

	}, {
		key: 'getSelectedIndex',
		value: function getSelectedIndex(info) {
			var index = -1;
			this.selected.forEach(function (v, i) {
				if (v.value === info.value) {
					index = i;
				}
			});
			return index;
		}

		//是否选中

	}, {
		key: 'isSelected',
		value: function isSelected(info) {
			var index = this.getSelectedIndex(info);
			return index >= 0;
		}

		//移除最后一个

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

	return SelectCtrlMultiple;
}(CtrlBase);

exports.default = SelectCtrlMultiple;