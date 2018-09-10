import React, { Component } from 'react'
import classNames from 'classnames'
import Modal from './index'

export default class Confirm extends Component {
	state = {
		visible: true
	}
	
	onCancel () {
		this.state.visible = false
		this.setState({})
		this.props.info.onCancel && this.props.info.onCancel()
	}
	
	onConfirm () {
		this.state.visible = false
		this.setState({})
		this.props.info.onConfirm && this.props.info.onConfirm()
	}
	
	render () {
		const {
			className,
			content,
			onConfirm,
			title,
			onCancel,
			...props
		} = this.props.info
		return (
			<If condition={this.state.visible}>
				<Modal
					style={{ width: '340px', top: '80px' }}
					className={classNames('mona-modal-confirm', className)}
					visible={this.state.visible}
					onConfirm={this.onConfirm.bind(this)}
					title={title}
					onCancel={this.onCancel.bind(this)}
					{...props}>
					{content}
				</Modal>
			</If>
		)
	}
}
