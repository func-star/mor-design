'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selectBase = require('../select-base');

var _selectBase2 = _interopRequireDefault(_selectBase);

var _multiple = require('./multiple');

var _multiple2 = _interopRequireDefault(_multiple);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _selectBase2.default.Option;

var MonaSelect = function (_Component) {
	_inherits(MonaSelect, _Component);

	function MonaSelect() {
		_classCallCheck(this, MonaSelect);

		return _possibleConstructorReturn(this, (MonaSelect.__proto__ || Object.getPrototypeOf(MonaSelect)).apply(this, arguments));
	}

	_createClass(MonaSelect, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    multiple = _props.multiple,
			    props = _objectWithoutProperties(_props, ['multiple']);

			if (multiple) {
				return _react2.default.createElement(_multiple2.default, props);
			} else {
				return _react2.default.createElement(_single2.default, props);
			}
		}
	}]);

	return MonaSelect;
}(_react.Component);

MonaSelect.Option = Option;
exports.default = MonaSelect;