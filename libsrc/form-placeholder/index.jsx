import React, { Component } from 'react'

export default class formPlaceholder extends Component {
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		return this.props.value
	}
	
	render () {
		return (
			<i className="mona-form-control" style={{ display: 'none' }}></i>
		)
	}
}
