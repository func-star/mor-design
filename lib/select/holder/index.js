'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('../../input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectHolder = function (_Component) {
	_inherits(SelectHolder, _Component);

	function SelectHolder(props) {
		_classCallCheck(this, SelectHolder);

		var _this = _possibleConstructorReturn(this, (SelectHolder.__proto__ || Object.getPrototypeOf(SelectHolder)).call(this, props));

		_this.ctrl = _this.props.ctrl;
		return _this;
	}

	_createClass(SelectHolder, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.onValueChange = function () {
				var value = _this2.ctrl.selected ? _this2.ctrl.selected.label : '';
				_this2.refs.value.setValue(value);
				_this2.ctrl.hideDropView();
			};
			this.onVisibleChange = function () {
				var showSearch = _this2.props.showSearch;

				if (!showSearch) {
					return;
				}
				_this2.searchVisible = _this2.ctrl.listVisible;
				_this2.refs.ipt.setValue('');
				_this2.search('');
				_this2.setState({});
			};
			this.ctrl.on('valueChange', this.onValueChange);
			this.ctrl.on('visibleChange', this.onVisibleChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.ctrl.off('visibleChagne', this.onVisibleChange);
			this.ctrl.off('valueChange', this.onValueChange);
		}
	}, {
		key: 'search',
		value: function search(val) {
			var filterOption = this.props.filterOption;

			this.ctrl.search(val, filterOption);
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			var _this3 = this;

			this.ctrl.dropView.show();
			var showSearch = this.props.showSearch;

			if (!showSearch) {
				return;
			}
			this.searchVisible = true;
			this.setState({}, function () {
				_this3.refs.ipt.focus();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    size = _props.size,
			    showSearch = _props.showSearch,
			    filterOption = _props.filterOption,
			    placeholder = _props.placeholder,
			    props = _objectWithoutProperties(_props, ['size', 'showSearch', 'filterOption', 'placeholder']);

			return _react2.default.createElement(
				'div',
				{ className: 'mona-baseSelect-holder-input', onClick: this.onClick.bind(this) },
				_react2.default.createElement(_input2.default, { readOnly: true, ref: 'value', className: (0, _classnames2.default)({ hide: this.searchVisible }), onChange: this.search.bind(this), placeholder: placeholder }),
				_react2.default.createElement(_input2.default, { ref: 'ipt', className: (0, _classnames2.default)({ hide: !this.searchVisible }), onChange: this.search.bind(this), placeholder: placeholder })
			);
		}
	}]);

	return SelectHolder;
}(_react.Component);

exports.default = SelectHolder;