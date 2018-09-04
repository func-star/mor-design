import React, { Component } from 'react'
import Dropdown from '../dropdown'
import Row from '../row'
import classNames from 'classnames'

export default class Popover extends Component {
	static defaultProps = {
		trigger: 'click',
		theme: 'default'
	}
	
	hide () {
		this.refs.dropdown.hide()
	}
	
	show () {
		this.refs.dropdown.show()
	}
	
	toggle () {
		this.refs.dropdown.toggle()
	}
	
	render () {
		const { children, trigger, title, content, theme, ...props } = this.props
		let overlay = (
			<div className={classNames('mona-popover', 'mona-popover-' + theme)}>
				<div className="mona-popover-arrow"></div>
				<div className="mona-popover-inner">
					<If condition={title}>
						<Row className="mona-popover-title" align="center">{title}</Row>
					</If>
					<div className="mona-popover-content">{content}</div>
				</div>
			</div>)
		return (
			<Dropdown trigger={trigger} overlay={overlay}  {...props} ref="dropdown">
				{children}
			</Dropdown>
		)
	}
}
