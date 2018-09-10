import React, { Component } from 'react'
import Multiple from './multiple'
import Single from './single'

export default class moSelect extends Component {
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		return this.ref.sel.getValue()
	}
	
	setValue (value) {
		return this.ref.sel.setValue(value)
	}
	
	render () {
		const { multiple, ...props } = this.props
		if (multiple) {
			return <Multiple {...props} ref="sel" />
		} else {
			return <Single {...props} ref="sel" />
		}
	}
}
