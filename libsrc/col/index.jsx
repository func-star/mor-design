import React, { Component } from 'react'
import classNames from 'classnames'

export default class Col extends Component {
	render () {
		const { className, span, xs, sm, md, lg, xl, xxl, children, gutter, style, ...props } = this.props
		
		let sty = style
		if (!sty) {
			sty = {}
		}
		if (gutter) {
			if (!sty.paddingLeft) {
				sty.paddingLeft = gutter / 2
			}
			if (!sty.paddingRight) {
				sty.paddingRight = gutter / 2
			}
		}
		let cls = [];
		['xs', 'sm', 'span', 'md', 'lg', 'xl', 'xxl'].forEach((v) => {
			if (!this.props[v]) {
				return
			}
			if (v === 'span') {
				cls.push('mona-col-' + this.props[v])
			} else {
				cls.push('mona-col-' + v + '-' + this.props[v])
			}
		})
		
		return (
			<div className={classNames(cls, className)} style={sty} {...props}>
				{children}
			</div>
		)
	}
}
