import React, { Component } from 'react'
import classNames from 'classnames'

export default class Code extends Component {
	
	render () {
		const {
			className,
			children
		} = this.props
		return (
			<div className={classNames('page-model-code', className)}>
				<h2 className="page-model-title-2">代码演示</h2>
				{children}
			</div>
		)
	}
}
