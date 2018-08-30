import React, { Component } from 'react'
import classNames from 'classnames'

export default class Use extends Component {
	render () {
		const {
			className,
			children
		} = this.props
		return (
			<div className={classNames('page-model-use', className)}>
				<h2 className="page-model-title-2">使用指南</h2>
				{children}
			</div>
		)
	}
}
