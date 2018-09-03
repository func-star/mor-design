import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Row from '../row'
import Icon from '../icon'
import Button from '../button'
import MountRoot from '../mount-root'
import QueueAnim from '../queue-anim'
import Confirm from './confirm'

export default class Modal extends Component {
	static defaultProps = {
		maskClosable: true,
		closable: true,
		okText: '确定'
	}
	
	static confirm (info = {}) {
		if (!Modal.modalConfirmNode) {
			Modal.modalConfirmNode = document.createElement('div')
			document.getElementsByTagName('body')[0].appendChild(Modal.modalConfirmNode)
			Modal.modalConfirmNode.remove()
		}
		ReactDOM.render(<Confirm info={info} key={Date.now()} />, Modal.modalConfirmNode)
	}
	
	componentWillReceiveProps (props) {
		this.confirmLoading = props.confirmLoading
		this.setState({})
	}
	
	onConfirm () {
		if (this.props.onConfirm) {
			this.props.onConfirm()
		}
	}
	
	onCancel () {
		if (this.props.onCancel) {
			this.props.onCancel()
		}
	}
	
	render () {
		const {
			className,
			visible,
			title,
			onConfirm,
			style,
			onCancel,
			okText,
			cancelText,
			footer,
			closable,
			maskClosable,
			wrapClassName,
			confirmLoading,
			children,
			...props
		} = this.props
		
		return (
			<MountRoot visible={visible} closeDelay={300} className="mona-modal-root">
				<div className={classNames('mona-modal', className)}>
					<QueueAnim animConfig={{ opacity: [1, 0] }} duration={200} leaveReverse>
						<If condition={visible}>
							<div className="mona-modal-bg" key="bg"></div>
						</If>
					</QueueAnim>
					<QueueAnim type="scale" className="mona-modal-con o-a" duration={300} leaveReverse>
						<If condition={maskClosable}>
							<div className="mona-modal-con-bg" onClick={this.onCancel.bind(this)} key="conBg"></div>
						</If>
						<If condition={visible}>
							<div className={classNames('mona-modal-wrap block-center', wrapClassName)} {...props} key="wrap" style={style}>
								<If condition={closable}>
									<a className="mona-modal-close" onClick={this.onCancel.bind(this)}><Icon name="close" /></a>
								</If>
								<div className="mona-modal-con-wrap">
									<If condition={title}>
										<div className="mona-modal-header">
											{title}
										</div>
									</If>
									<If condition={children}>
										<div className="mona-modal-body">
											{children}
										</div>
									</If>
								</div>
								<If condition={footer}>
									<div className="mona-modal-footer b-t">
										{footer}
									</div>
								</If>
								<If condition={!footer && footer !== false}>
									<Row className="mona-modal-footer text-right" align="center" justify="end">
										<div>
											<Button loading={this.confirmLoading} theme="primary" onClick={this.onConfirm.bind(this)} className="w-m-80">{okText || '确定'}</Button>
											<Button onClick={this.onCancel.bind(this)} className="m-l-sm w-m-80">{cancelText || '取消'}</Button>
										</div>
									</Row>
								</If>
							</div>
						</If>
					</QueueAnim>
				</div>
			</MountRoot>
		)
	}
}
