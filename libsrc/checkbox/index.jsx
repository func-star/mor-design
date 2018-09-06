import React, { Component } from 'react'
import Checker from '../checker'
import Row from '../row'
import Group from './group'
import classNames from 'classnames'

const CheckerItem = Checker.Item

export default class CheckBox extends Component {
	static Group = Group
	
	render () {
		const { className, children, ...props } = this.props
		return (
			<CheckerItem theme="checkbox" {...props} className={classNames(className)}>
				<Row align="center">
					<div className="checker-checkbox"></div>
					{children}
				</Row>
			</CheckerItem>
		)
	}
}
