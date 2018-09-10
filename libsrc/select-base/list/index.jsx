import React, { Component } from 'react'
import Tool from '../../tool'
import BaseComponent from '../../base-component'

export default class SelectBaseList extends BaseComponent {
	constructor (props) {
		super(props)
		this.ctrl = props.ctrl
	}
	
	getCtrl () {
		return this.ctrl
	}
	
	didMount () {
		const { ctrl } = this.props
		this.bind(ctrl, 'filter', () => {
			this.setState({})
		})
		this.bind(document, 'keydown', this.onKeyDown.bind(this))
	}
	
	onKeyDown (e) {
		let ctrl = this.ctrl
		if (!ctrl.listVisible) {
			return
		}
		let keyCode = e.keyCode
		if ([13, 38, 40].indexOf(keyCode) < 0) {
			return
		}
		e.stopPropagation()
		e.preventDefault()
		
		if (keyCode === 13) {
			ctrl.selectActive()
		}
		if (keyCode === 38) {
			ctrl.changeActive(-1)
		}
		if (keyCode === 40) {
			ctrl.changeActive(1)
		}
	}
	
	onFilter (item) {
		let val = this.ctrl.searchVal
		let fun = this.ctrl.filterOption
		if (val === '') {
			return true
		}
		const { children } = item.props
		let label = Tool.childrenText(children)
		if (fun) {
			return fun(label, this)
		} else {
			return label.indexOf(val) >= 0
		}
	}
	
	setValueList (children) {
		let valueList = children.map((v) => {
			let props = v.props
			return {
				value: props.value,
				label: Tool.childrenText(props.children)
			}
		})
		this.ctrl.setValueList(valueList)
	}
	
	render () {
		const { children, ...props } = this.props
		let isEmpty = true
		let optLength = 0
		let child = React.Children.map(children, (v) => {
			if (this.onFilter(v)) {
				optLength += 1
				return v
			} else {
				return null
			}
		}).filter((v) => {
			return v
		})
		this.setValueList(child)
		return (
			<div className="mona-baseSelect-list" ref="wrap">
				{child}
				<If condition={optLength === 0}>
					<div className="mona-baseSelect-list-empty">暂无数据</div>
				</If>
			</div>
		)
	}
}
