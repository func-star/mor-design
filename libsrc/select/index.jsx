import React, { Component } from 'react'
import SelectBase from '../select-base'
import Multiple from './multiple'
import Single from './single'

let Option = SelectBase.Option

export default class MonaSelect extends Component {
	static Option = Option
	
	render () {
		const { multiple, ...props } = this.props
		if (multiple) {
			return <Multiple {...props} />
		} else {
			return <Single {...props} />
		}
	}
}
