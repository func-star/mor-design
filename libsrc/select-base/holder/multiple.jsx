import React, { Component } from 'react'
import classNames from 'classnames'
import Row from '../../row'
import BaseComponent from '../../base-component'
import Icon from '../../icon'
import MultipleIpt from './multipleIpt'

export default class SelectBaseMultiple extends BaseComponent {
	constructor (props) {
		super(props)
		this.ctrl = this.props.ctrl
	}
	
	values = []
	
	didMount () {
		this.bind(this.ctrl, 'valueChange', this.onValueChange.bind(this))
		this.bind(this.ctrl, 'visibleChange', this.onVisibleChange.bind(this))
	}
	
	onValueChange () {
		this.values = this.ctrl.selected || []
		this.refs.ipt.setWidth()
		let value = this.refs.ipt.getValue()
		if (value) {
			this.refs.ipt.setValue('', this.values.length === 0)
			this.ctrl.search('')
		}
		this.setState({}, () => {
			this.ctrl.dropView.relocation()
		})
	}
	
	onVisibleChange (v) {
		const { autoCleanIpt } = this.props
		if (autoCleanIpt) {
			this.refs.ipt.setValue('', this.values.length === 0)
			this.ctrl.search('')
		}
	}
	
	delete (item) {
		if (this.props.disabled) {
			return
		}
		this.ctrl.toggleSelect(item)
		this.ctrl.dropView.relocation()
	}
	
	onClick (e) {
		if (this.props.disabled) {
			return
		}
		this.refs.ipt.focus()
	}
	
	onFocus () {
		this.ctrl.dropView.show()
	}
	
	onChange (val) {
		const { filterOption } = this.props
		this.ctrl.search(val, filterOption)
		this.ctrl.dropView.relocation()
	}
	
	onDelete () {
		if (this.props.disabled) {
			return
		}
		this.ctrl.removeLast()
	}
	
	render () {
		const { size, placeholder, disabled, ...props } = this.props
		let hasSelect = this.values.length > 0
		return (
			<Row align="center" className={classNames('mona-baseSelect-multiple-holder', { 'mona-baseSelect-multiple-holder-disabled': disabled })} ref="wrap" onClick={this.onClick.bind(this)}>
				<For each="item" of={this.values}>
					<Row className="mona-baseSelect-multiple-item" key={item.value} align="center">
						<span>{item.label}</span>
						<span className="mona-baseSelect-multiple-del" onClick={this.delete.bind(this, item)}>
							<Icon name="close-bold" />
						</span>
					</Row>
				</For>
				<MultipleIpt
					ref="ipt"
					disabled={disabled}
					onFocus={this.onFocus.bind(this)}
					onChange={this.onChange.bind(this)}
					onDelete={this.onDelete.bind(this)}
					placeholder={hasSelect ? '' : placeholder}
					hasSelect={hasSelect} />
			</Row>
		)
	}
}
