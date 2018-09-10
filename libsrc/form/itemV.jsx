import React, { Component } from 'react'
import classNames from 'classnames'

export default class FormItemV extends Component {
	render () {
		const {
			className,
			children,
			label,
			required,
			...props
		} = this.props
		return (
			<div className={classNames('mo-form-item-vertical', className)} {...props}>
				<div className="mo-form-item-vertical-tit"><If condition={required}><span className="text-red">*</span></If>{label}
				</div>
				<div>{children}</div>
			</div>
		)
	}
}
