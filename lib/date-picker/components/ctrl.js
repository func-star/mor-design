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

var monaDateCtrl = function (_Events) {
	_inherits(monaDateCtrl, _Events);

	function monaDateCtrl() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, monaDateCtrl);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = monaDateCtrl.__proto__ || Object.getPrototypeOf(monaDateCtrl)).call.apply(_ref, [this].concat(args))), _this), _this.prevImg = 'https://s10.mogucdn.com/mlcdn/c45406/170727_0l6cl6jf4c07ekc970077hjbjh7jh_66x64.png', _this.nextImg = 'https://s10.mogucdn.com/mlcdn/c45406/170727_7ek4199ecckifg7c58df5ga636808_66x64.png', _this.pImg = 'https://s10.mogucdn.com/mlcdn/c45406/170727_06ik6lff20jfejfg8ji2hhk688bdh_34x64.png', _this.nImg = 'https://s10.mogucdn.com/mlcdn/c45406/170727_8gi9ie0662756j6ie7kddf6hafaj3_34x64.png', _this.exactTime = {
			second: 6,
			minute: 5,
			hour: 4,
			date: 3,
			month: 2,
			year: 1
		}, _this.hour = '0', _this.minute = '0', _this.second = '0', _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(monaDateCtrl, [{
		key: 'changeView',


		//日期视图修改
		value: function changeView(type) {
			this.emit('changeView', type);
		}

		//选中日期

	}, {
		key: 'selectDate',
		value: function selectDate(date, type) {
			this.date = date;
			this.parseDate(date);
			this.emit('select', type);
		}

		//时间变更通知

	}, {
		key: 'changeTime',
		value: function changeTime(date) {
			if (date) {
				this.date = date;
			}
			this.parseDate(this.date);
			this.emit('changeTime');
		}
	}, {
		key: 'parseDate',
		value: function parseDate(date) {
			if (!date) {
				return;
			}
			date.hour(this.hour);
			date.minute(this.minute);
			date.second(this.second);
		}

		//手动输入

	}, {
		key: 'inputTime',
		value: function inputTime(date) {
			this.date = date;
			this.emit('inputTime', date);
		}
	}]);

	return monaDateCtrl;
}(_monaEvents2.default);

exports.default = monaDateCtrl;