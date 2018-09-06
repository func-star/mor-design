import React, { Component } from 'react'
import classNames from 'classnames'
import Tool from '../tool'
import Item from './item'

export default class CheckerItem extends Component {
	static Item = Item
	static defaultProps = {
		theme: 'default'
	}
	state = {}
	
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		if (this.props.hasOwnProperty('active')) {
			if (this.props.active) {
				return this.value
			}
			if (!this.props.active) {
				return
			}
		}
		return this.value
	}
	
	componentDidMount () {
		const { value } = this.props
		if (!this.checkerParent) {
			this.checkerParent = Tool.queryParentReactDom(this.refs.wrap, '.mona-checker')
		}
		if (!this.checkerParent) {
			return this.checkSelect()
		}
		this.setState({
			active: this.checkerParent.isActive(value)
		})
	}
	
	//检测选中
	toggleSelect () {
		const { disabled, value } = this.props
		if (disabled) {
			return false
		}
		if (!this.checkerParent) {
			return this.selfToggle()
		}
		this.checkerParent.toggleSelect(value)
		this.setState({
			active: this.checkerParent.isActive(value)
		})
	}
	
	checkSelect () {
		if (!this.checkerParent) {
			return this.selfCheckSelect()
		}
		const { value } = this.props
		this.setState({
			active: this.checkerParent.isActive(value)
		})
	}
	
	//保证独立存活
	//无group时独自切换状态
	selfToggle () {
		const { value, onChange } = this.props
		if (this.value === value) {
			this.value = undefined
		} else {
			this.value = value
		}
		this.setState({
			active: this.value === value
		})
		onChange && onChange(this.value)
	}
	
	//无group时检测选中
	selfCheckSelect () {
		const { value } = this.props
		return this.value === value
	}
	
	render () {
		const { className, children, theme, disabled, value, ...props } = this.props
		let active = this.state.active
		if (this.props.hasOwnProperty('active')) {
			active = this.props.active
		}
		return (
			<div
				ref="wrap"
				className={classNames('mona-checker-item', 'mona-checker-item-' + theme, className, {
					active: active,
					'mona-checker-item-disabled': disabled
				})}
				onClick={this.toggleSelect.bind(this)}>
				{children}
			</div>
		)
	}
}
