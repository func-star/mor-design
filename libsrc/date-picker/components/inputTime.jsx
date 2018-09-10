import React, { Component } from 'react'

export default class InputTime extends Component {
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		return this.refs.ipt.value
	}
	
	setValue (val) {
		return this.refs.ipt.value = val
	}
	
	onFocus (e) {
		this.refs.ipt.select()
		this.props.onFocus && this.props.onFocus(e)
	}
	
	render () {
		const { onFocus, moDatePickerName, ...props } = this.props
		return (
			<input
				className="mona-date-picker-time-input mona-form-control"
				type="number"
				onFocus={this.onFocus.bind(this)}
				{...props} ref="ipt" />
		)
	}
}
