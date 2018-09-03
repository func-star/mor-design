import React, { Component } from 'react'
import { Tabs } from 'mona'

const TabItem = Tabs.item

export default class TabsDemo extends Component {
	onChange (key) {
		console.log(key)
	}
	
	render () {
		const list = [1, 2, 3]
		return (
			<div className="">
				<Tabs defaultIndex="2" onChange={this.onChange.bind(this)}>
					<For each="item" of={list}>
						<TabItem className="m-r" key={item} tab={'tab' + item}>测试{item}</TabItem>
					</For>
				</Tabs>
			</div>
		)
	}
}
