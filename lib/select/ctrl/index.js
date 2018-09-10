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

var SelectCtrl = function (_CtrlBase) {
	_inherits(SelectCtrl, _CtrlBase);

	function SelectCtrl() {
		_classCallCheck(this, SelectCtrl);

		return _possibleConstructorReturn(this, (SelectCtrl.__proto__ || Object.getPrototypeOf(SelectCtrl)).apply(this, arguments));
	}

	_createClass(SelectCtrl, [{
		key: 'setDefaultValue',

		//设置默认属性
		value: function setDefaultValue(val, props) {
			if (typeof val === 'undefined') {
				return;
			}
			this.valueList = props.children.map(function (v) {
				var _props = v.props;
				return {
					value: _props.value,
					label: _tool2.default.childrenText(_props.children)
				};
			});

			var l = this.valueList.filter(function (v) {
				return v.value === val;
			});
			if (l.length > 0) {
				this.selected = l[0];
				this.emit('valueChange');
			}
		}

		//切换选中状态

	}, {
		key: 'toggleSelect',
		value: function toggleSelect(info) {
			if (!this.selected || this.selected.value !== info.value) {
				this.selected = info;
			}
			this.emit('valueChange');
		}

		//是否选中

	}, {
		key: 'isSelected',
		value: function isSelected(info) {
			return this.selected && this.selected.value === info.value;
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.selected = undefined;
			this.emit('valueChange');
		}
	}]);

	return SelectCtrl;
}(CtrlBase);

exports.default = SelectCtrl;