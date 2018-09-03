import React, { Component } from 'react'
import ContentStorage from '../content-storage'

const ContentItem = ContentStorage.Item

export default class Content extends Component {
	componentDidMount () {
		const { ctrl } = this.props
		this.tabKey = ctrl.activeKey
		this.setState({})
		ctrl.on('changeActiveKey', (key) => {
			this.tabKey = key
			this.setState({})
		})
	}
	
	render () {
		const { info, ctrl, ...props } = this.props
		let activeKey = ctrl.getActiveKey(info)
		return (
			<div className="mo-tabs-content">
				<ContentStorage>
					<For each="item" of={info}>
						<ContentItem condition={activeKey === item.key} key={item.key}>
							{item.content}
						</ContentItem>
					</For>
				</ContentStorage>
			</div>
		)
	}
}
