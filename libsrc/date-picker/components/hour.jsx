import React, { Component } from 'react'
import Tool from '../../tool'
import InputTime from './inputTime'

export default class HourSelect extends Component {
	constructor (props) {
		super(props)
		this.sel = props.ctrl.hour
	}
	
	componentDidMount () {
		const { ctrl } = this.props
		this.inputTimeChange = (date) => {
			if (date.format('HH') !== this.sel) {
				this.sel = ctrl.date.format('HH')
				this.refs.ipt.setValue(this.sel)
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
		this.sel = sel
		this.refs.ipt.setValue(Tool.pad(sel, 2))
	}
	
	getTimeList () {
		if (this.times) {
			return this.times
		}
		this.times = Tool.newArray(0, 24).map((v) => {
			return Tool.pad(v, 2)
		})
		return this.times
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
		ctrl.hour = this.refs.ipt.getValue()
		ctrl.date.hour(ctrl.hour)
		ctrl.changeTime()
	}
	
	render () {
		const { onSelect, className, ...props } = this.props
		let times = this.props.times || this.getTimeList()
		return (
			<div className={className}>
				<InputTime defaultValue={Tool.pad(this.sel, 2)} min="0" max="59" ref="ipt"
					onChange={this.iptChange.bind(this)}
					onBlur={this.blur.bind(this)} />
			</div>
		)
	}
}
