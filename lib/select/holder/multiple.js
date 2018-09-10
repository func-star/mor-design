'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('../../row');

var _row2 = _interopRequireDefault(_row);

var _multipleIpt = require('./multipleIpt');

var _multipleIpt2 = _interopRequireDefault(_multipleIpt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMultiple = function (_Component) {
	_inherits(SelectMultiple, _Component);

	function SelectMultiple(props) {
		_classCallCheck(this, SelectMultiple);

		var _this = _possibleConstructorReturn(this, (SelectMultiple.__proto__ || Object.getPrototypeOf(SelectMultiple)).call(this, props));

		_this.values = [];

		_this.ctrl = _this.props.ctrl;
		return _this;
	}

	_createClass(SelectMultiple, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.onValueChange = function () {
				_this2.values = _this2.ctrl.selected || [];
				_this2.refs.ipt.setValue('');
				_this2.ctrl.search('');
				_this2.setState({}, function () {
					_this2.ctrl.dropView.relocation();
				});
			};
			this.onVisibleChange = function () {
				_this2.refs.ipt.setValue('');
				//this.ctrl.search('')
			};
			this.ctrl.on('visibleChange', this.onVisibleChange);
			this.ctrl.on('valueChange', this.onValueChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.ctrl.off('visibleChagne', this.onVisibleChange);
			this.ctrl.off('valueChange', this.onValueChange);
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			this.ctrl.toggleSelect(item);
			this.ctrl.dropView.relocation();
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			this.refs.ipt.focus();
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {
			this.ctrl.dropView.show();
		}
	}, {
		key: 'onChange',
		value: function onChange(val) {
			var filterOption = this.props.filterOption;

			this.ctrl.search(val, filterOption);
			this.ctrl.dropView.relocation();
		}
	}, {
		key: 'onDelete',
		value: function onDelete() {
			this.ctrl.removeLast();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    size = _props.size,
			    props = _objectWithoutProperties(_props, ['size']);

			return _react2.default.createElement(
				_row2.default,
				{ align: 'center', className: 'mona-select-multiple-holder', ref: 'wrap', onClick: this.onClick.bind(this) },
				this.values.map(function (item) {
					return _react2.default.createElement(
						_row2.default,
						{ className: 'mona-select-multiple-item', key: item.value, align: 'center' },
						_react2.default.createElement(
							'span',
							null,
							item.label
						),
						_react2.default.createElement(
							'span',
							{ className: 'mona-select-multiple-del', onClick: this.delete.bind(this, item) },
							'x'
						)
					);
				}, this),
				_react2.default.createElement(_multipleIpt2.default, { ref: 'ipt', onFocus: this.onFocus.bind(this), onChange: this.onChange.bind(this), onDelete: this.onDelete.bind(this) })
			);
		}
	}]);

	return SelectMultiple;
}(_react.Component);

exports.default = SelectMultiple;