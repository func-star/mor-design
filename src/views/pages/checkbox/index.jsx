import React, { Component } from 'react'
import { Checkbox } from 'mona'

const CheckboxGroup = Checkbox.Group

export default class CheckboxDemo extends Component {
	state = {
		value: [2]
	}
	
	onChange (checkedValues) {
		console.log('checked = ', checkedValues)
	}
	
	render () {
		return (
			<div>
				<CheckboxGroup onChange={this.onChange.bind(this)}>
					<Checkbox value={1}>A</Checkbox>
					<Checkbox value={2}>B</Checkbox>
					<Checkbox value={3}>C</Checkbox>
					<Checkbox value={4}>D</Checkbox>
				</CheckboxGroup>
				<br />
				<CheckboxGroup onChange={this.onChange.bind(this)} defaultValue={this.state.value}>
					<Checkbox value={1}>A</Checkbox>
					<Checkbox value={2} disabled={true}>B</Checkbox>
					<Checkbox value={3}>C</Checkbox>
					<Checkbox value={4}>D</Checkbox>
				</CheckboxGroup>
				<br />
				<CheckboxGroup onChange={this.onChange.bind(this)} defaultValue={[2, 3, 4]}>
					<Checkbox value={1}>A</Checkbox>
					<Checkbox value={2}>B</Checkbox>
					<Checkbox value={3}>C</Checkbox>
					<Checkbox value={4}>D</Checkbox>
				</CheckboxGroup>
			</div>
		)
	}
}
