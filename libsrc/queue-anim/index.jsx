import React, { Component } from 'react'
import classNames from 'classnames'

export default class MoQueueAnim extends Component {
	render () {
		const { animConfig, leaveReverse, children, style, type, className, duration, ...props } = this.props
		let animType = type
		if (type === 'left' || type === 'right' || type === 'up' || type === 'down') {
			animType = 'fadeIn' + (type.charAt(0).toUpperCase() + type.substring(1))
		} else if (type === 'scale') {
			animType = 'zoomIn'
		} else if (type === 'fade') {
			animType = 'fadeIn'
		}
		let sty = Object.assign({}, style)
		if (duration) {
			sty['animationDuration'] = (duration / 1000) + 's'
			sty['WebkitAnimationDuration'] = (duration / 1000) + 's'
		}
		return (
			<div className={classNames('animated', className, animType)} {...props} style={sty}>
				{children}
			</div>
		)
	}
}
