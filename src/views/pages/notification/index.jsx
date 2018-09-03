import React, { Component } from 'react'
import { Button, Notification, Toast } from 'mona'

export default class ModalDemo extends Component {
	showNotification (type) {
		Notification.config({
			type: type,
			message: '弹窗',
			direction: 'right',
			multiple: true,
			title: '提示标题',
			duration: 2000,
			icon: 'info'
		})
	}
	
	toast (type) {
		Toast.config({
			title: '弹窗',
			type: type,
			duration: 2000
		})
	}
	
	render () {
		return (
			<div>
				<div className="p-b">
					<Button onClick={this.showNotification.bind(this, 'success')}>Notification success</Button>
					<Button onClick={this.showNotification.bind(this, 'error')}>Notification error</Button>
					<Button onClick={this.showNotification.bind(this, 'info')}>Notification info</Button>
				</div>
				
				<div>
					<Button onClick={this.toast.bind(this, 'success')}>toast success</Button>
					<Button onClick={this.toast.bind(this, 'error')}>toast error</Button>
					<Button onClick={this.toast.bind(this, 'info')}>toast info</Button>
					<Button onClick={this.toast.bind(this, 'loading')}>toast loading</Button>
				</div>
			
			</div>
		)
	}
}
