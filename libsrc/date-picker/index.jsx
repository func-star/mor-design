import React, { Component } from 'react'
import classNames from 'classnames'
import DatePicker from './datePicker'
import Tool from '../tool'

export default class moDatePicker extends Component {
	state = {}
	key = Date.now()
	
	constructor (props) {
		super(props)
		const { defaultValue, valueType } = this.props
		if (defaultValue) {
			if (valueType === 'unix' && parseInt(defaultValue) === defaultValue) {
				this.date = Tool.moment(defaultValue * 1000)
			} else {
				this.date = Tool.moment(defaultValue)
			}
		}
	}
	
	componentDidMount () {
		this.form = Tool.queryParentReactDom(this.refs.wrap, '.mona-form')
	}
	
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		if (!this.date) {
			return null
		}
		const { valueType, format } = this.props
		if (valueType === 'unix') {
			return this.date.unix()
		}
		if (valueType === 'value') {
			return this.date.valueOf()
		}
		if (format) {
			return this.date.format(format)
		}
		if (valueType === 'string') {
			return this.date.format('YYYY-MM-DD')
		}
		return this.date
	}
	
	setValue (date) {
		this.date = Tool.moment(date)
		this.key = Date.now()
		this.setState({})
	}
	
	getDate () {
		return this.date
	}
	
	onChange (date, dateString) {
		this.date = date
		this.setState({})
		if (this.props.onChange) {
			this.props.onChange(date, dateString)
		}
		if (this.form) {
			this.form.onChange()
		}
	}
	
	disabledDate (val) {
		if (!val) {
			return
		}
		const { disabledDate, disabledStartReact, disabledEndReact } = this.props
		if (disabledDate) {
			return disabledDate(val)
		}
		if (disabledStartReact && disabledStartReact()) {
			let date = disabledStartReact().getDate()
			if (!date) {
				return
			}
			date = date.clone()
			date.startOf('day')
			return date.valueOf() > val.valueOf()
		}
		if (disabledEndReact && disabledEndReact()) {
			let date = disabledEndReact().getDate()
			if (!date) {
				return
			}
			date = date.clone()
			date.startOf('day')
			return date.valueOf() < val.valueOf()
		}
	}
	
	show () {
		this.refs.picker.show()
	}
	
	render () {
		const {
			className,
			valueType,
			disabledDate,
			disabledStartReact,
			disabledEndReact,
			format,
			defaultValue,
			...props
		} = this.props
		return (
			<div className={classNames('mona-date-wrapper mona-form-control', className)} ref="wrap" key={this.key}>
				<DatePicker disabledDate={this.disabledDate.bind(this)} {...props} defaultValue={this.date} onChange={this.onChange.bind(this)} ref="picker" />
			</div>
		)
	}
}
