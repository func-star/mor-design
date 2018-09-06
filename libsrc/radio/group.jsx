import React, { Component } from 'react'
import Checker from '../checker'
import Row from '../row'
import classNames from 'classnames'

export default class RadioGroup extends Component {
	render () {
		const { className, children, ...props } = this.props
		return (
			<Checker theme="radio" {...props} className={classNames('mona-radio-group', className)} multiple={false}>
				<Row className="h-full" align="center">
					{children}
				</Row>
			</Checker>
		)
	}
}
