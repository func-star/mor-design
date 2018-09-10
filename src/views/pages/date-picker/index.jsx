import React, { Component } from 'react'
import { Row, DatePicker } from 'mona'

export default class DropdownDemo extends Component {
	render () {
		return (
			<div className="padder w-200">
				<DatePicker
					disabledEndReact={() => {return this.refs.endDate}}
					ref="startDate"
					placeholder={'开始日期'}
					exactTime="second"
					valueType="unix"
				/>
				<DatePicker
					ref="endDate"
					disabledStartReact={() => {return this.refs.startDate}}
					className="datepicker-w-full"
					placeholder={'结束日期'}
					valueType="unix"
				/>
			
			</div>
		)
	}
}
