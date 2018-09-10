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

var _index3 = require('./ctrl/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectSingle = function (_SelectBase) {
	_inherits(SelectSingle, _SelectBase);

	function SelectSingle(props) {
		_classCallCheck(this, SelectSingle);

		var _this = _possibleConstructorReturn(this, (SelectSingle.__proto__ || Object.getPrototypeOf(SelectSingle)).call(this, props));

		_this.autoValueList = true;
		_this.Ctrl = _index4.default;
		_this.Holder = _index2.default;
		_this.trigger = 'blurCheck';

		_this.ctrl = new _this.Ctrl();
		return _this;
	}

	_createClass(SelectSingle, [{
		key: 'onChange',
		value: function onChange() {
			this.props.onChange && this.props.onChange(this.getValue(), this.ctrl.selected);
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

	return SelectSingle;
}(_selectBase2.default);

exports.default = SelectSingle;