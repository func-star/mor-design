import React, { Component } from 'react'
import classNames from 'classnames'

export default class Input extends Component {
	static defaultProps = {
		size: 'normal'
	}
	
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		return this.refs.ipt.value
	}
	
	setValue (value) {
		this.refs.ipt.value = value
	}
	
	focus () {
		return this.refs.ipt.focus()
	}
	
	onChange (e) {
		if (this.props.onChange) {
			this.props.onChange(this.refs.ipt.value)
		}
	}
	
	render () {
		let {
			verify,
			className,
			size,
			type,
			disabled,
			onChange,
			...props
		} = this.props
		
		return (<input
			type={type}
			className={classNames('mona-input mona-form-control', 'mona-input-size-' + size, className)}
			disabled={disabled}
			ref="ipt"
			onChange={this.onChange.bind(this)}
			{...props} />)
	}
}
