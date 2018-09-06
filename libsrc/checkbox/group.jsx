import React, { Component } from 'react'
import Checker from '../checker'
import Row from '../row'
import classNames from 'classnames'

export default class CheckBoxGroup extends Component {
	render () {
		const { className, children, ...props } = this.props
		return (
			<Checker theme="checkbox" {...props} className={classNames('mona-checkbox-group', className)}>
				<Row className="h-full" align="center">
					{children}
				</Row>
			</Checker>
		)
	}
}
