import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Row from '../../row'
import Tool from '../../tool'
import BaseComponent from '../../baseComponent'
import classNames from 'classnames'

export default class Option extends BaseComponent {
	onChange () {
		this.setState({})
	}
	
	didMount () {
		this.selfDom = findDOMNode(this)
		this.par = Tool.queryParentReactDom(this.selfDom, '.mona-baseSelect-list')
		this.ctrl = this.par.getCtrl()
		this.bind(this.ctrl, 'activeChange', this.onChange.bind(this))
		this.bind(this.ctrl, 'valueChange', this.onChange.bind(this))
		this.setState({})
	}
	
	getInfo () {
		let props = this.props
		return {
			value: props.value,
			label: Tool.childrenText(props.children),
			reactDom: this
		}
	}
	
	getLabel () {
		const { children } = this.props
		return Tool.childrenText(children)
	}
	
	select () {
		this.ctrl.selectOpt(this.props.value, this)
		this.ctrl.toggleSelect(this.getInfo())
	}
	
	isSelected () {
		if (!this.ctrl) {
			return false
		}
		return this.ctrl.isSelected(this.getInfo())
	}
	
	isActive () {
		if (!this.ctrl) {
			return false
		}
		return this.ctrl.isActive(this.getInfo())
	}
	
	render () {
		const { value, children } = this.props
		return (
			<div className={classNames('mona-baseSelect-option mona-select-option', {
				'mona-select-option-active': this.isActive(),
				'mona-select-option-selected': this.isSelected()
			})} onClick={this.select.bind(this)}>
				<Row align="center" className="full">
					<div></div>
					<div ref="child">{children}</div>
				</Row>
			</div>
		)
	}
}
