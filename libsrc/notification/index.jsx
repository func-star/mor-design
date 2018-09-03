import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Icon from '../icon'
import Row from '../row'
import QueueAnim from '../queue-anim'

export default class Notification extends Component {
	static config (options) {
		if (!Notification.node) {
			Notification.node = document.createElement('div')
			document.body.appendChild(Notification.node)
			ReactDOM.render(<Notification />, Notification.node, () => {
				Notification.instance.add(options)
			})
		} else {
			Notification.instance.add(options)
		}
	}
	
	componentDidMount () {
		Notification.instance = this
	}
	
	notifyList = []
	
	add (conf) {
		const { duration } = conf
		let item = Object.assign({ id: Date.now() + '' + (Math.random() * 1000 | 1) }, conf)
		item.icon = item.type
		if (item.type === 'error') {
			item.icon = 'error'
		}
		if (item.type === 'success') {
			item.icon = 'success'
		}
		if (item.type === 'warning') {
			item.icon = 'warning'
		}
		if (item.type === 'info') {
			item.icon = 'info'
		}
		this.notifyList.push(item)
		item.timeout = setTimeout(() => {
			this.remove(item)
		}, duration || 2000)
		this.setState({})
	}
	
	close (item) {
		clearTimeout(item.timeout)
		this.remove(item)
	}
	
	remove (item) {
		this.notifyList.splice(this.notifyList.indexOf(item), 1)
		this.setState({})
	}
	
	render () {
		return (
			<div className="mona-notification">
				<QueueAnim type="right" duration={400} leaveReverse>
					<For each="item" of={this.notifyList}>
						<Row key={item.id} className="mona-notification-item" align="center">
							<If condition={item.icon}>
								<div className={classNames('mona-notification-icon flex-center', 'mona-notification-icon-' + item.type)}>
									<Icon name={item.icon} />
								</div>
							</If>
							<div className="flex-1 mona-notification-content">
								<If condition={item.title}>
									<div className="mona-notification-title">{item.title}</div>
								</If>
								{item.message}
							</div>
							<div className="flex-center mona-notification-close" onClick={this.close.bind(this, item)}>
								<Icon name="close" /></div>
						</Row>
					</For>
				</QueueAnim>
			</div>
		)
	}
}
