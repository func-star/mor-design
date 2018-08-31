import React, { Component } from 'react'
import classNames from 'classnames'

export default class Icon extends Component {
	render () {
		const {
			className,
			name,
			...props
		} = this.props
		return (
			<i className={classNames('mona-icon', 'mona-icon-' + name, className)} {...props}></i>
		)
	}
}

