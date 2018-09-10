'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tool = require('../../tool');

var _tool2 = _interopRequireDefault(_tool);

var _baseComponent = require('../../base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBaseList = function (_BaseComponent) {
	_inherits(SelectBaseList, _BaseComponent);

	function SelectBaseList(props) {
		_classCallCheck(this, SelectBaseList);

		var _this = _possibleConstructorReturn(this, (SelectBaseList.__proto__ || Object.getPrototypeOf(SelectBaseList)).call(this, props));

		_this.ctrl = props.ctrl;
		return _this;
	}

	_createClass(SelectBaseList, [{
		key: 'getCtrl',
		value: function getCtrl() {
			return this.ctrl;
		}
	}, {
		key: 'didMount',
		value: function didMount() {
			var _this2 = this;

			var ctrl = this.props.ctrl;

			this.bind(ctrl, 'filter', function () {
				_this2.setState({});
			});
			this.bind(document, 'keydown', this.onKeyDown.bind(this));
		}
	}, {
		key: 'onKeyDown',
		value: function onKeyDown(e) {
			var ctrl = this.ctrl;
			if (!ctrl.listVisible) {
				return;
			}
			var keyCode = e.keyCode;
			if ([13, 38, 40].indexOf(keyCode) < 0) {
				return;
			}
			e.stopPropagation();
			e.preventDefault();

			if (keyCode === 13) {
				ctrl.selectActive();
			}
			if (keyCode === 38) {
				ctrl.changeActive(-1);
			}
			if (keyCode === 40) {
				ctrl.changeActive(1);
			}
		}
	}, {
		key: 'onFilter',
		value: function onFilter(item) {
			var val = this.ctrl.searchVal;
			var fun = this.ctrl.filterOption;
			if (val === '') {
				return true;
			}
			var children = item.props.children;

			var label = _tool2.default.childrenText(children);
			if (fun) {
				return fun(label, this);
			} else {
				return label.indexOf(val) >= 0;
			}
		}
	}, {
		key: 'setValueList',
		value: function setValueList(children) {
			var valueList = children.map(function (v) {
				var props = v.props;
				return {
					value: props.value,
					label: _tool2.default.childrenText(props.children)
				};
			});
			this.ctrl.setValueList(valueList);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    children = _props.children,
			    props = _objectWithoutProperties(_props, ['children']);

			var isEmpty = true;
			var optLength = 0;
			var child = _react2.default.Children.map(children, function (v) {
				if (_this3.onFilter(v)) {
					optLength += 1;
					return v;
				} else {
					return null;
				}
			}).filter(function (v) {
				return v;
			});
			this.setValueList(child);
			return _react2.default.createElement(
				'div',
				{ className: 'mona-baseSelect-list', ref: 'wrap' },
				child,
				optLength === 0 ? _react2.default.createElement(
					'div',
					{ className: 'mona-baseSelect-list-empty' },
					'\u6682\u65E0\u6570\u636E'
				) : null
			);
		}
	}]);

	return SelectBaseList;
}(_baseComponent2.default);

exports.default = SelectBaseList;