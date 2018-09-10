import React, { Component } from 'react'
import classNames from 'classnames'
import Input from '../../input'
import BaseComponent from '../../base-component'
import Icon from '../../icon'

export default class SelectBaseHolder extends BaseComponent {
	constructor (props) {
		super(props)
		this.ctrl = this.props.ctrl
	}
	
	didMount () {
		this.bind(this.ctrl, 'valueChange', this.onValueChange.bind(this))
		this.bind(this.ctrl, 'visibleChange', this.onVisibleChange.bind(this))
	}
	
	onValueChange () {
		let value = this.ctrl.selected ? this.ctrl.selected.label : ''
		this.refs.value.setValue(value)
		this.ctrl.hideDropView()
		this.setState({})
	}
	
	onVisibleChange () {
		const { showSearch } = this.props
		if (showSearch) {
			this.searchVisible = this.ctrl.listVisible
			this.refs.ipt.setValue('')
			this.search('')
		}
		this.listVisible = this.ctrl.listVisible
		this.setState({})
	}
	
	clear (e) {
		e.nativeEvent.stopImmediatePropagation()
		e.stopPropagation()
		e.preventDefault()
		if (this.props.disabled) {
			return
		}
		this.ctrl.clear()
	}
	
	search (val) {
		const { filterOption } = this.props
		this.ctrl.search(val, filterOption)
	}
	
	onClick (e) {
		const { showSearch, disabled } = this.props
		if (disabled) {
			return
		}
		this.ctrl.dropView.show()
		if (!showSearch) {
			return
		}
		this.searchVisible = true
		this.setState({}, () => {
			this.refs.ipt.focus()
		})
	}
	
	render () {
		const { size, showSearch, filterOption, placeholder, allowClear, disabled, ...props } = this.props
		let _allowClear = allowClear
		if (disabled) {
			_allowClear = false
		}
		let value = this.ctrl.selected ? this.ctrl.selected.label : ''
		return (
			<div className={classNames('mona-baseSelect-holder-input', {
				'mona-baseSelect-holder-input-active': this.listVisible,
				'mona-baseSelect-holder-input-allowClear': !this.listVisible && this.ctrl.selected && _allowClear
			})} onClick={this.onClick.bind(this)}>
				<Input defaultValue={value} readOnly disabled={disabled} ref="value" className={classNames({ hide: this.searchVisible })} onChange={this.search.bind(this)} placeholder={placeholder} />
				<Input ref="ipt" className={classNames({ hide: !this.searchVisible })} onChange={this.search.bind(this)} placeholder={placeholder} disabled={disabled} />
				<div className="mona-baseSelect-holder-input-arrow">
					<Icon name="arrowDown" />
				</div>
				<If condition={!this.listVisible && this.ctrl.selected && _allowClear}>
					<div className="mona-baseSelect-holder-input-clear" onClick={this.clear.bind(this)}>
						<Icon name="solid-close" />
					</div>
				</If>
			</div>
		)
	}
}
