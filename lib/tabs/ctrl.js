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

var monaTabsCtrl = function (_Events) {
	_inherits(monaTabsCtrl, _Events);

	function monaTabsCtrl() {
		_classCallCheck(this, monaTabsCtrl);

		return _possibleConstructorReturn(this, (monaTabsCtrl.__proto__ || Object.getPrototypeOf(monaTabsCtrl)).apply(this, arguments));
	}

	_createClass(monaTabsCtrl, [{
		key: 'setActiveKey',
		value: function setActiveKey(key) {
			if (key === this.activeKey) {
				return;
			}
			this.activeKey = key;
			this.emit('changeActiveKey', key);
		}
	}, {
		key: 'getActiveKey',
		value: function getActiveKey(info) {
			if (info.length === 0) {
				return;
			}
			if (undefined === this.activeKey) {
				return info[0].key;
			}
			return this.activeKey;
		}
	}]);

	return monaTabsCtrl;
}(_monaEvents2.default);

exports.default = monaTabsCtrl;