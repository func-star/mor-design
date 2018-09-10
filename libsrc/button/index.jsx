import React, { Component } from 'react'
import BaseComponent from '../base-component'
import Row from '../row'
import Icon from '../icon'
import classNames from 'classnames'
import ButtonGroup from './group'

export default class Button extends BaseComponent {
	static Group = ButtonGroup
	static defaultProps = {
		size: 'default',
		theme: 'default',
		type: 'button'
	}
	
	onClick (...arg) {
		const { onClick } = this.props
		if (!onClick) {
			return
		}
		let p = onClick(...arg)
		if (p) {
			this.loading = true
			this.setState({})
			p.then(() => {
				this.loading = false
				this.setState({})
			}).catch(() => {
				this.loading = false
				this.setState({})
			})
		}
	}
	
	render () {
		const {
			theme,
			size,
			type,
			children,
			className,
			disabled,
			loading,
			onClick,
			...props
		} = this.props
		
		let _loading = this.loading || loading
		return (
			<button
				onClick={this.onClick.bind(this)}
				className={classNames('mona-btn', 'mona-btn-theme-' + `${theme}`, 'mona-btn-size-' + `${size}`, className)}
				disabled={disabled || _loading}
				type={type}
				{...props}>
				<If condition={!_loading}>
					{children}
				</If>
				<If condition={_loading}>
					<Row align="center">
						<Icon name="loading" className="mona-btn-loading" />
						{children}
					</Row>
				</If>
			</button>
		)
	}
	
}
