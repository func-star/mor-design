import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Dropdown from '../dropdown'
import Input from '../input'
import Icon from '../icon'
import Row from '../row'
import DateSelect from './components/select'
import classNames from 'classnames'

export default class DatePicker extends Component {
	static defaultProps = {
		showToday: true,
		allowClear: true,
		exactTime: 'date'
	}
	exactTime = {
		second: 6,
		minute: 5,
		hour: 4,
		date: 3,
		month: 2,
		year: 1
	}
	
	constructor (props) {
		super(props)
		let exactTime = this.exactTime[this.props.exactTime] || 3
		this.format = ['YYYY', '-MM', '-DD', ' HH', ':mm', ':ss'].slice(0, exactTime).join('')
		this.date = props.defaultValue
	}
	
	componentDidMount () {
		this.ipt = findDOMNode(this.refs.ipt)
		if (this.props.defaultValue) {
			this.ipt.value = this.props.defaultValue.format(this.format)
		}
	}
	
	onSelect (date) {
		this.date = date
		if (date) {
			this.refs.ipt.setValue(date.format(this.format))
		} else {
			this.refs.ipt.setValue('')
		}
		this.onChange(date)
		this.refs.drop.hide()
	}
	
	clear (e) {
		e.stopPropagation()
		this.refs.ipt.setValue('')
		this.date = null
		this.onChange(this.date)
	}
	
	onChange (date) {
		this.props.onChange && this.props.onChange(date)
	}
	
	toggle () {
		const { disabled } = this.props
		if (disabled) {
			return
		}
		
		this.refs.drop.toggle()
	}
	
	show () {
		this.refs.ipt.focus()
		this.refs.drop.show()
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
		const { className, allowClear, disabled, placeholder, getContainer, ...props } = this.props
		let dateSel = (
			<div className="mona-date-picker-wrap">
				<DateSelect defaultValue={this.date} onSelect={this.onSelect.bind(this)} {...props} />
			</div>
		)
		return (
			<div className={classNames('mona-date-picker', className)} onClick={this.toggle.bind(this)}>
				<Dropdown placement={this.placement.bind(this)} cleanWhenHide topAdd={5} overlay={dateSel}
					trigger="blurCheck" ref="drop" getContainer={getContainer}>
					<Row className={classNames('pos-r', { 'mona-date-picker-allowClear': this.date && allowClear })} align="center">
						<Input placeholder={placeholder} readOnly ref="ipt" disabled={disabled} className="mona-date-picker-ipt" />
						<div className="mona-date-picker-icon flex-center">
							<Icon name="calendar" className="mona-date-picker-icon-calendar" />
							<If condition={this.date && allowClear}>
								<Icon name="solid-close" className="d-b mona-date-picker-icon-clear" onClick={this.clear.bind(this)} />
							</If>
						</div>
					</Row>
				</Dropdown>
			</div>
		)
	}
}
