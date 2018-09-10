import React, { Component } from 'react'
import classNames from 'classnames'
import Dropdown from '../dropdown'
import BaseComponent from '../baseComponent'
import List from './list'
import Option from './option'
import BaseCtrl from './ctrl/base.js'

export default class BaseSelect extends BaseComponent {
	static BaseCtrl = BaseCtrl
	static Option = Option
	sameWidth = true
	autoCleanIpt = true
	List = List
	trigger = 'blurCheck'
	
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		return this.ctrl.getValue()
	}
	
	setValue (value) {
		return this.ctrl.setValue(value)
	}
	
	didMount () {
		this.ctrl.setDefaultValue(this.props.defaultValue, this.props)
		this.ctrl.dropView = this.refs.drop
		this.bind(this.ctrl, 'valueChange', this.onValueChange.bind(this))
		this.bind(this.ctrl, 'filter', this.onSearch.bind(this))
		this.bind(this.ctrl, 'selectOpt', (...data) => {
			if (this.props.onSelect) {
				this.props.onSelect(...data)
			}
		})
	}
	
	onSearch (val) {
		this.props.onSearch && this.props.onSearch(val)
	}
	
	onValueChange () {
		this.onChange && this.onChange()
	}
	
	visibleChange (v) {
		this.ctrl.visibleChange(v)
	}
	
	placement (parentInfo, domInfo, overlayInfo) {
		let left = domInfo.left - parentInfo.left
		let top = domInfo.top - parentInfo.top + domInfo.height + 5
		let rect = domInfo.dom.getBoundingClientRect()
		let bottom = window.innerHeight - rect.bottom
		if (overlayInfo.height > bottom) {
			top = domInfo.top - parentInfo.top - overlayInfo.height - 5
		}
		if (top < domInfo.top - rect.top) {
			//top = domInfo.top - rect.top;
			top = domInfo.top - parentInfo.top + domInfo.height + 5
		}
		return {
			left: left,
			top: top
		}
	}
	
	render () {
		const { children, placement, getContainer, dropClassName, className, disabled, onSelect, ...props } = this.props
		let Holder = this.Holder
		let List = this.List
		let dropProps = {}
		return (
			<div className={classNames('mona-form-control', className)}>
				<Dropdown
					ref="drop"
					getContainer={getContainer}
					className={dropClassName}
					placement={this.placement}
					sameWidth={this.sameWidth}
					overlay={<List ctrl={this.ctrl} info={props}>{children}</List>}
					trigger={this.trigger}
					onVisibleChange={this.visibleChange.bind(this)}
					{...dropProps}>
					<Holder autoCleanIpt={this.autoCleanIpt} disabled={disabled} ctrl={this.ctrl} {...props} />
				</Dropdown>
			</div>
		)
	}
}
