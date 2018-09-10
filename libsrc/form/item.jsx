import React, { Component } from 'react'
import classNames from 'classnames'
import Row from '../row'
import Col from '../col'

export default class FormItem extends Component {
	static defaultProps = {
		colon: true
	}
	
	render () {
		const {
			className,
			children,
			label,
			labelCol,
			wrapperCol,
			labelSpan,
			wrapperSpan,
			required,
			colon,
			...props
		} = this.props
		let labelInfo = labelCol || {}
		let wrapperInfo = wrapperCol || {}
		
		return (
			<div className={classNames(className, 'mona-form-item')} {...props}>
				<Row>
					<Col {...labelInfo} span={labelSpan || labelInfo.span} className="mona-form-item-label">
						{required}<If condition={required}><span className="text-red">*</span></If>{label}
						<If condition={label && colon}>：</If>
					</Col>
					<Col {...wrapperInfo} span={wrapperSpan || wrapperInfo.span}>
						{children}
					</Col>
				</Row>
			</div>
		)
	}
}
