import React, { Component } from 'react'
import Tool from '../../tool'
import InputTime from './inputTime'

export default class MinuteOrSecondSelect extends Component {
	constructor (props) {
		super(props)
		this.sel = props.ctrl[props.type]
	}
	
	componentDidMount () {
		const { ctrl } = this.props
		this.inputTimeChange = (date) => {
			let val
			if (this.props.type === 'minute') {
				val = date.format('mm')
			} else {
				val = date.format('ss')
			}
			if (val !== this.sel) {
				this.sel = val
				this.refs.ipt.setValue(val)
			}
		}
		ctrl.on('inputTime', this.inputTimeChange)
	}
	
	componentWillUnmount () {
		const { ctrl } = this.props
		ctrl.off('inputTime', this.inputTimeChange)
	}
	
	blur () {
		let sel = this.refs.ipt.getValue()
		if (!sel) {
			sel = 0
		}
		this.refs.ipt.setValue(Tool.pad(sel, 2))
	}
	
	getTimeList () {
		if (this.times) {
			return this.times
		}
		this.times = Tool.newArray(0, 60).map((v) => {
			return Tool.pad(v, 2)
		})
		return this.times
	}
	
	select (item) {
		this.refs.ipt.setValue(item)
		this.onChange()
	}
	
	iptChange () {
		let sel = Tool.pad(this.refs.ipt.getValue(), 2)
		if (this.times.indexOf(sel) < 0 && sel !== '') {
			this.refs.ipt.setValue(this.sel)
			return
		}
		this.sel = sel
		this.onChange()
		this.setState({})
	}
	
	onChange () {
		const { ctrl } = this.props
		ctrl[this.props.type] = this.refs.ipt.getValue()
		ctrl.date[this.props.type](ctrl[this.props.type])
		ctrl.changeTime(this.date)
	}
	
	render () {
		const { onSelect, className, type, ...props } = this.props
		let times = this.props.times || this.getTimeList()
		return (
			<div className={className}>
				<InputTime defaultValue={Tool.pad(this.sel, 2)} min="0" max="23" ref="ipt"
					onChange={this.iptChange.bind(this)}
					onBlur={this.blur.bind(this)} />
			</div>
		)
	}
}
