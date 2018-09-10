'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _monaEvents = require('mona-events');

var _monaEvents2 = _interopRequireDefault(_monaEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBaseCtrl = function (_Events) {
	_inherits(SelectBaseCtrl, _Events);

	function SelectBaseCtrl() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SelectBaseCtrl);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectBaseCtrl.__proto__ || Object.getPrototypeOf(SelectBaseCtrl)).call.apply(_ref, [this].concat(args))), _this), _this.valueList = [], _this.activeIndex = -1, _this.listVisible = false, _this.searchVal = '', _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SelectBaseCtrl, [{
		key: 'toggleSelect',

		//需要继承重写
		value: function toggleSelect(val) {}
	}, {
		key: 'isSelected',
		value: function isSelected(value) {}
	}, {
		key: 'setDefaultValue',
		value: function setDefaultValue(value) {}
	}, {
		key: 'selectOpt',
		value: function selectOpt(value, opt) {
			this.emit('selectOpt', value, opt);
		}
	}, {
		key: 'clear',
		value: function clear() {}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.selected;
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			this.selected = value;
		}
	}, {
		key: 'visibleChange',
		value: function visibleChange(v) {
			this.listVisible = v;
			this.emit('visibleChange');
		}
	}, {
		key: 'setValueList',
		value: function setValueList(valueList) {
			this.valueList = valueList;
		}
	}, {
		key: 'changeActive',
		value: function changeActive(size) {
			this.activeIndex += size;
			if (this.activeIndex < 0) {
				this.activeIndex = this.valueList.length - 1;
			}
			if (this.activeIndex > this.valueList.length - 1) {
				this.activeIndex = 0;
			}
			this.emit('activeChange');
		}
	}, {
		key: 'selectActive',
		value: function selectActive() {
			if (!this.valueList[this.activeIndex]) {
				return;
			}
			this.toggleSelect(this.valueList[this.activeIndex]);
		}
	}, {
		key: 'isActive',
		value: function isActive(val) {
			if (!this.valueList[this.activeIndex]) {
				return false;
			}
			var value = this.valueList[this.activeIndex].value;
			return value === val.value;
		}
	}, {
		key: 'hideDropView',
		value: function hideDropView() {
			if (!this.dropView) {
				return;
			}
			this.dropView.hide();
		}
	}, {
		key: 'search',
		value: function search(val, fun) {
			this.isEmpty = true;
			this.searchVal = val;
			this.filterOption = fun;
			this.emit('filter', val, fun);
			this.emit('afterFilter', val, fun);
		}
	}]);

	return SelectBaseCtrl;
}(_monaEvents2.default);

exports.default = SelectBaseCtrl;