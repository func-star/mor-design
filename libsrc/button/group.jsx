import React, { Component } from 'react'
import classNames from 'classnames'

export default class ButtonGroup extends Component {
	render () {
		const {
			children,
			className,
			...props
		} = this.props
		return (
			<span className={classNames('mona-btn-group', className)} {...props}>
				{children}
			</span>
		)
	}
}
