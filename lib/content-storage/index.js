'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nullView = require('../null-view');

var _nullView2 = _interopRequireDefault(_nullView);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentStorage = function (_Component) {
	_inherits(ContentStorage, _Component);

	function ContentStorage(props) {
		_classCallCheck(this, ContentStorage);

		var _this = _possibleConstructorReturn(this, (ContentStorage.__proto__ || Object.getPrototypeOf(ContentStorage)).call(this, props));

		_this.visibleList = [];

		var child = _react2.default.Children.toArray(props.children);
		_this.updateVisible(child);
		return _this;
	}

	_createClass(ContentStorage, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var child = _react2.default.Children.toArray(nextProps.children);
			this.updateVisible(child);
		}
	}, {
		key: 'updateVisible',
		value: function updateVisible(child) {
			var _this2 = this;

			child.forEach(function (v, index) {
				var id = v.props.id || index;
				if (v.props.condition && _this2.visibleList.indexOf(id) < 0) {
					_this2.visibleList.push(id);
				}
			});
		}
	}, {
		key: 'itemVisible',
		value: function itemVisible(item, index) {
			var id = item.props.id || index;
			return item.props.condition || this.visibleList.indexOf(id) >= 0;
		}
	}, {
		key: 'itemKey',
		value: function itemKey(item, index) {
			return item.props.id || index;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    props = _objectWithoutProperties(_props, ['children']);

			var child = _react2.default.Children.toArray(children);
			return _react2.default.createElement(
				'div',
				props,
				child.map(function (item, index) {
					return this.itemVisible(item, index) ? _react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)({ hide: !item.props.condition }), key: this.itemKey(item, index) },
						item.props.children
					) : null;
				}, this)
			);
		}
	}]);

	return ContentStorage;
}(_react.Component);

ContentStorage.Item = _nullView2.default;
exports.default = ContentStorage;