'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _baseComponent = require('../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_BaseComponent) {
	_inherits(List, _BaseComponent);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	}

	_createClass(List, [{
		key: 'didMount',
		value: function didMount() {}
		//this.bind(document,'keydown',this.onKeyDown.bind(this))


		/* onKeyDown(e){*/
		//const {data} = this.props
		//if(!data || !data.length){
		//return;
		//}
		//let keyCode = e.keyCode;
		//if([13,38,40].indexOf(keyCode) < 0){
		//return;
		//}
		//e.stopPropagation();
		//e.preventDefault();
		//if(keyCode == 13){
		//}
		//if(keyCode == 38){
		//this.changeActive(-1)
		//}
		//if(keyCode == 40){
		//this.changeActive(1)
		//}
		/*}*/

	}, {
		key: 'select',
		value: function select(item) {
			this.props.onSelect && this.props.onSelect(item);
		}
	}, {
		key: 'render',
		value: function render() {
			var data = this.props.data;

			if (!data || !data.length) {
				return null;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'mona-autoComplete-list', ref: 'wrap' },
				data.map(function (item, index) {
					return _react2.default.createElement(
						_row2.default,
						{ align: 'center', className: 'mona-autoComplete-list-item', key: index, onClick: this.select.bind(this, item) },
						item.name
					);
				}, this)
			);
		}
	}]);

	return List;
}(_baseComponent2.default);

exports.default = List;