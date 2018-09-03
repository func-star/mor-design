import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Icon from '../icon'
import Row from '../row'
import QueueAnim from '../queue-anim'

export default class Toast extends Component {
	static config (options) {
		if (!Toast.node) {
			Toast.node = document.createElement('div')
			document.body.appendChild(Toast.node)
			ReactDOM.render(<Toast />, Toast.node, () => {
				Toast.instance.add(options)
			})
		} else {
			Toast.instance.add(options)
		}
	}
	
	componentDidMount () {
		Toast.instance = this
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
	
	remove (item) {
		this.notifyList.splice(this.notifyList.indexOf(item), 1)
		this.setState({})
	}
	
	render () {
		return (
			<div className="mona-toast">
				<QueueAnim type="fade" duration={400} leaveReverse>
					<For each="item" of={this.notifyList}>
						<Row justify="center" key={item.id}>
							<Row className={classNames('mona-toast-item', 'mona-toast-' + item.type)} align="center">
								<If condition={item.type}>
									<Icon name={item.icon} />
								</If>
								<div className="flex-1 mona-toast-content">
									{item.title}
								</div>
							</Row>
						</Row>
					</For>
				</QueueAnim>
			</div>
		)
	}
}
