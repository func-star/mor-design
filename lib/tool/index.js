'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment2 = require('moment');

var _moment3 = _interopRequireDefault(_moment2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var delayFuns = {};
var singleReqList = {};

//工具
var Tool = function () {
	function Tool() {
		_classCallCheck(this, Tool);

		this.prefixList = ['transform', 'transition'];
	}

	_createClass(Tool, [{
		key: 'clearDelayFun',
		value: function clearDelayFun(id) {
			clearTimeout(delayFuns[id]);
		}
	}, {
		key: 'delayFun',
		value: function delayFun(id, fun, time) {
			clearTimeout(delayFuns[id]);
			delayFuns[id] = setTimeout(function () {
				fun();
			}, time || 500);
		}

		//延迟下次

	}, {
		key: 'delayNextFun',
		value: function delayNextFun(id, fun, time) {
			if (delayFuns[id]) {
				return;
			}
			fun();
			delayFuns[id] = setTimeout(function () {
				delayFuns[id] = undefined;
			}, time || 500);
		}
	}, {
		key: 'singleReq',
		value: function singleReq(id, req) {
			if (singleReqList[id]) {
				return singleReqList[id];
			}
			var p = req();
			singleReqList[id] = p;

			p.then(function () {
				delete singleReqList[id];
			}).catch(function () {
				delete singleReqList[id];
			});
			return p;
		}

		//解决像NodeList这样，不是数组的循环问题

	}, {
		key: 'forEach',
		value: function forEach(v, fun) {
			return Array.prototype.forEach.call(v, fun);
		}
	}, {
		key: 'map',
		value: function map(v, fun) {
			return Array.prototype.map.call(v, fun);
		}
	}, {
		key: 'toArray',
		value: function toArray(v) {
			var arr = [];
			this.forEach(v, function (item) {
				arr.push(item);
			});
			return arr;
		}
	}, {
		key: 'newArray',
		value: function newArray(start, end) {
			var result = [];
			for (var i = start; i < end; i++) {
				result.push(i);
			}
			return result;
		}
	}, {
		key: 'pad',
		value: function pad(num, n) {
			var l = ('' + num).length;
			return Array(n > l ? n - l + 1 : 0).join(0) + num;
		}

		//数组过滤

	}, {
		key: 'arrayUnique',
		value: function arrayUnique(arr, fn) {
			if (arr.length < 2) {
				return arr;
			}
			if (typeof fn != 'function') {
				fn = function fn(a) {
					return a;
				};
			}
			var tmp = [];
			return arr.filter(function (v) {
				var a = fn(v);
				if (tmp.indexOf(a) >= 0) {
					return false;
				}
				tmp.push(a);
				return true;
			});
		}
	}, {
		key: 'q',
		value: function q(data) {
			var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve(data);
				}, time);
			});
		}
	}, {
		key: 'delegate',
		value: function delegate(parSelector, childSelector, action, fun) {
			var parent = void 0;
			if (parSelector == window || parSelector == document) {
				parent = parSelector;
			} else {
				parent = document.querySelector(parSelector);
			}
			if (!parent) {
				return parent;
			}
			parent.addEventListener(action, function (e) {
				var res = e.target.matches(childSelector);
				if (res) {
					fun(e);
				}
			});
		}

		//查询父节点

	}, {
		key: 'queryParent',
		value: function queryParent(el, selector) {
			var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var result = [];
			el = el.parentElement;
			while (el) {
				var res = el.matches(selector);
				if (!all && res) {
					return el;
				}
				if (res) {
					result.push(el);
				}
				el = el.parentElement;
			}
			if (!all) {
				return null;
			}
			return result;
		}

		//查询所有父节点

	}, {
		key: 'queryParents',
		value: function queryParents(el, selector) {
			return this.queryParent(el, selector, true);
		}
	}, {
		key: 'queryParentReactDom',
		value: function queryParentReactDom(dom, selector) {
			if (!dom) {
				return null;
			}
			var parent = this.queryParent(dom, selector);
			if (!parent) {
				return null;
			}
			return this.getReactDom(parent);
		}
	}, {
		key: 'isStaticPositioned',
		value: function isStaticPositioned(element) {
			return getComputedStyle(element).position == 'static';
		}
	}, {
		key: 'offset',
		value: function offset(elem) {
			if (!elem || !elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}
			var rect = elem.getBoundingClientRect();
			var win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		}
	}, {
		key: 'getElementTop',
		value: function getElementTop(element) {
			if (!element) {
				return 0;
			}
			var actualTop = element.offsetTop;
			var current = element.offsetParent;
			while (current !== null) {
				actualTop += current.offsetTop;
				current = current.offsetParent;
			}
			return actualTop;
		}
	}, {
		key: 'getElementLeft',
		value: function getElementLeft(element) {
			if (!element) {
				return 0;
			}
			var actualLeft = element.offsetLeft;
			var current = element.offsetParent;
			while (current !== null) {
				actualLeft += current.offsetLeft;
				current = current.offsetParent;
			}
			return actualLeft;
		}

		//交集判断  t表示容差

	}, {
		key: 'intersect',
		value: function intersect(a, b) {
			var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			if (a.length != 2 || b.length != 2) {
				return;
			}
			var s = a[0] > b[0] ? b[0] : a[0];
			var e = a[1] > b[1] ? a[1] : b[1];

			return e - s < a[1] - a[0] + b[1] - b[0] - t;
		}
	}, {
		key: 'css',
		value: function css(dom, data) {
			//换个方式实现，性能应该会有比较大的提升
			var _data = this.parseStyleObj(data);
			Object.keys(_data).forEach(function (v) {
				dom.style.setProperty(v, _data[v]);
			});
		}
	}, {
		key: 'removeCss',
		value: function removeCss(dom, props) {
			dom.style.removeProperty(props);
			if (this.prefixList.indexOf(props)) {
				dom.style.removeProperty('-webkit-' + props);
			}
		}

		//将样式对象转化为可使用的样式对象

	}, {
		key: 'parseStyleObj',
		value: function parseStyleObj(data) {
			var _this = this;

			var cssNumber = ['columnCount', 'fillOpacity', 'fontWeight', 'lineHeight', 'opacity', 'order', 'orphans', 'widows', 'zIndex', 'zoom'];

			var _data = _extends({}, data);
			Object.keys(_data).forEach(function (v) {
				if (_this.prefixList.indexOf(v) >= 0) {
					_data['-webkit-' + v] = _data[v];
				}
				if (typeof _data[v] == 'number' && cssNumber.indexOf(v) < 0) {
					_data[v] = _data[v] + 'px';
				}
			});
			return _data;
		}
	}, {
		key: 'queryReactDomAll',
		value: function queryReactDomAll() {
			var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

			var _this2 = this;

			var selector = arguments[1];
			var filter = arguments[2];

			var reactDoms = [];
			var doms = dom.querySelectorAll(selector);
			if (filter) {
				doms = filter(doms);
			}
			this.forEach(doms, function (dom) {
				var reactDom = _this2.getReactDom(dom);
				if (reactDom) {
					reactDoms.push(reactDom);
				}
			});
			return reactDoms;
		}
	}, {
		key: 'queryReactDom',
		value: function queryReactDom() {
			var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
			var selector = arguments[1];

			return this.getReactDom(dom.querySelector(selector));
		}

		//根据dom 获取react dom

	}, {
		key: 'getReactDom',
		value: function getReactDom(dom) {
			if (!dom) {
				return null;
			}
			for (var key in dom) {
				if (key.indexOf('__reactInternalInstance$') == 0) {
					var compInternals = dom[key]._currentElement;
					var compWrapper = compInternals._owner;
					var comp = compWrapper._instance;
					return comp;
				}
			}
			return null;
		}
	}, {
		key: 'isEmpty',


		//字符串 对象 布尔值 数组 是否为空
		value: function isEmpty(val) {
			if (typeof val == 'string') {
				return !val;
			}
			//0 认为是非空
			if (typeof val == 'number') {
				return val !== 0 && !val;
			}
			if (val instanceof Array) {
				return val.length == 0;
			}
			if (val instanceof Object) {
				return Object.keys(val).length == 0;
			}
			return !val;
		}

		//moment占个位，以后统一解决东八区问题

	}, {
		key: 'moment',
		value: function moment() {
			return _moment3.default.apply(undefined, arguments);
		}
	}, {
		key: 'momentTime',
		value: function momentTime(date, format) {
			return (0, _moment3.default)(date, format);
		}
	}, {
		key: 'addClass',
		value: function addClass(dom, cls) {
			var className = dom.className || '';
			var cArr = className.split(' ');
			var addArr = cls.split(' ');
			addArr.forEach(function (v) {
				if (cArr.indexOf(v) < 0) {
					cArr.push(v);
				}
			});
			dom.className = cArr.join(' ');
		}
	}, {
		key: 'removeClass',
		value: function removeClass(dom, cls) {
			var className = dom.className || '';
			var cArr = className.split(' ');
			var removeArr = cls.split(' ');
			cArr = cArr.filter(function (v) {
				return removeArr.indexOf(v) < 0;
			});
			dom.className = cArr.join(' ');
		}
	}, {
		key: 'hasClass',
		value: function hasClass(dom, cls) {
			var className = dom.className || '';
			if (className.split(' ').indexOf(cls) > -1) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'imgSize',
		value: function imgSize(url, size) {
			if (!url) {
				return '';
			}
			var ext = '.png';
			try {
				ext = /.+(\.\w+)$/.exec(url)[1];
			} catch (e) {
				//return '';
			}
			return url + '_' + size + ext;
		}

		//将一维数组分割为二维数组

	}, {
		key: 'arrShort',
		value: function arrShort(arr, length) {
			return arr.map(function (v, i) {
				var l = i / length;
				if (l == parseInt(l)) {
					return arr.slice(i, i + length);
				}
				return false;
			}).filter(function (v) {
				return v;
			});
		}
	}, {
		key: 'safeParse',
		value: function safeParse(str) {
			try {
				return JSON.parse(str);
			} catch (e) {
				return null;
			}
		}
	}, {
		key: 'childrenText',
		value: function childrenText(children) {
			return typeof children == 'number' || typeof children == 'string' ? children : children.join('');
		}
	}]);

	return Tool;
}();

exports.default = new Tool();