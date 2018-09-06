import React, { Component } from 'react'
import Checker from '../checker'
import Row from '../row'
import Group from './group'
import classNames from 'classnames'

const CheckerItem = Checker.Item

export default class Radio extends Component {
	static Group = Group
	
	render () {
		const { className, children, ...props } = this.props
		return (
			<CheckerItem theme="radio" {...props} className={classNames('m-r', className)}>
				<Row align="center">
					<div className="checker-radio m-r-xs"></div>
					{children}
				</Row>
			</CheckerItem>
		)
	}
}
