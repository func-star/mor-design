import React, { Component } from 'react'
import { Select, SelectPkg, TreeSelect } from 'mona'

const Option = Select.Option
export default class SelectDemo extends Component {
	state = {
		optionArray: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8', 'value9', 'value10', 'value11', 'value12']
	}
	
	componentDidMount () {
	}
	
	onSelect (value, opt) {
		console.log(value, opt)
	}
	
	render () {
		let data = [{
			label: '123',
			value: '122',
			children: [
				{
					label: 'aaa',
					value: 'aaa'
				}
			]
		}
		]
		
		return (
			<div className="p">
				<div style={{ width: 300 }}>
					<SelectPkg
						multiple
						keyType="value"
						data={this.state.optionArray}
						defaultValue={['value1', 'value2']} />
					<Select
						multiple
						onSelect={this.onSelect.bind(this)}
						showSearch
						defaultValue={['value1']}
					>
						<For each="item" of={this.state.optionArray} index="index">
							<Option key={item} value={item}>
								{item} asdf
							</Option>
						</For>
					</Select>
				</div>
				<div className="p w-200">
					<TreeSelect data={data} showSearch allowClear />
				</div>
			</div>
		)
	}
}
