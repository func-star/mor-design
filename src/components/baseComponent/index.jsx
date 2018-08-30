import React, { Component } from 'react';

//重写部分component方法，扩展功能，并保证稳定
export default class BaseComponent extends Component {
	_bindEvents = [];
	
	componentWillReceiveProps (...data) {
		this.willReceiveProps && this.willReceiveProps(...data);
	}
	
	componentWillMount () {
		this.willMount && this.willMount();
	}
	
	componentDidMount () {
		this.didMount && this.didMount();
	}
	
	componentWillUnmount () {
		this.unmount = true;
		this.willUnmount && this.willUnmount();
		this.unbindAll();
	}
	
	setState (data, ...other) {
		if (this.unmount) {
			return;
		}
		return super.setState(data || {}, ...other);
	}
	
	bind (server, name, fun, useCapture) {
		this._bindEvents.push({
			server: server,
			name: name,
			fun: fun,
		});
		if (server.addEventListener) {
			server.addEventListener(name, fun, useCapture);
		} else {
			server.on(name, fun);
		}
	}
	
	unbindAll () {
		this._bindEvents.forEach((v) => {
			if (v.server.addEventListener) {
				v.server.removeEventListener(v.name, v.fun);
			} else {
				v.server.off(v.name, v.fun);
			}
		});
	}
	
	unbind (server, name) {
		this._bindEvents.forEach((v) => {
			if (v.server == server, v.name == name) {
				if (v.server.addEventListener) {
					v.server.removeEventListener(v.name, v.fun);
				} else {
					v.server.off(v.name, v.fun);
				}
			}
		});
	}
}
