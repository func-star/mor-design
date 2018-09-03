import React, { Component } from 'react'
import { Button, Modal } from 'mona'

export default class ModalDemo extends Component {
	state = {}
	
	showModal () {
		// Modal.confirm({
		// 	title: '请确认',
		// 	content: '确认一下',
		// 	onCancel: ()=>{
		// 		console.log('cancel')
		// 	},
		// 	onConfirm: ()=>{
		// 		console.log('ok')
		// 	}
		// })
		this.setState({
			visible: true
		})
	}
	
	closeModal () {
		this.setState({
			visible: false
		})
	}
	
	confirmLoading = false
	
	loading () {
		Modal.confirm({
			title: '请确认',
			content: '确认一下',
			onCancel: ()=>{
				console.log('cancel')
			},
			onConfirm: ()=>{
				console.log('ok')
			}
		})
	}
	
	render () {
		return (
			<div>
				<div>
					<Button onClick={this.showModal.bind(this)}>打开modal</Button>
				</div>
				<If condition={this.state.visible}>
					<Modal
						visible={this.state.visible}
						title="标题"
						onCancel={this.closeModal.bind(this)}
						onConfirm={this.loading.bind(this)}
						maskClosable={false}
						confirmLoading={this.confirmLoading}
						style={{ width: '500px', top: '50px' }}>
						<div>
							这里是内容，默认居中
							<div>行高默认1.5，字体使用sm（13px）</div>
						</div>
					</Modal>
				</If>
			</div>
		)
	}
}
