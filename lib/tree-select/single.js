'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selectBase = require('../select-base');

var _selectBase2 = _interopRequireDefault(_selectBase);

var _index = require('../select-base/holder/index');

var _index2 = _interopRequireDefault(_index);

var _ctrl = require('./ctrl');

var _ctrl2 = _interopRequireDefault(_ctrl);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSelectSingle = function (_SelectBase) {
	_inherits(TreeSelectSingle, _SelectBase);

	function TreeSelectSingle(props) {
		_classCallCheck(this, TreeSelectSingle);

		var _this = _possibleConstructorReturn(this, (TreeSelectSingle.__proto__ || Object.getPrototypeOf(TreeSelectSingle)).call(this, props));

		_this.Ctrl = _ctrl2.default;
		_this.Holder = _index2.default;
		_this.trigger = 'blurCheck';
		_this.autoCleanIpt = false;
		_this.List = _list2.default;

		_this.ctrl = new _this.Ctrl();
		return _this;
	}

	_createClass(TreeSelectSingle, [{
		key: 'getValueList',
		value: function getValueList(list, data) {
			var _this2 = this;

			if (!data) {
				return;
			}
			data.forEach(function (v) {
				list.push(v);
				_this2.getValueList(list, v.children);
			});
			return list;
		}
	}, {
		key: 'setValueList',
		value: function setValueList(props) {
			var list = [];
			this.getValueList(list, props.data);
			this.ctrl.setValueList(list);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			if (!this.ctrl.selected) {
				return;
			}
			return this.ctrl.selected.value;
		}
	}]);

	return TreeSelectSingle;
}(_selectBase2.default);

exports.default = TreeSelectSingle;