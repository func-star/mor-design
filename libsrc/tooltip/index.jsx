import React, { Component } from 'react'
import Dropdown from '../dropdown'
import classNames from 'classnames'

export default class ToolTip extends Component {
	static defaultProps = {
		trigger: 'hover',
		theme: 'default'
	}
	
	render () {
		const {
			children,
			trigger,
			title,
			theme,
			...props
		} = this.props
		return (
			<Dropdown
				trigger={trigger}
				overlay={(
					<div className={classNames('mona-tooltip', 'mona-tooltip-' + theme)}>
						<div className="mona-tooltip-inner">{title}</div>
					</div>
				)}
				{...props}>
				{children}
			</Dropdown>
		)
	}
}
