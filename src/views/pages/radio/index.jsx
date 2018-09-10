import React, { Component } from 'react'
import { Radio } from 'mona'

const RadioGroup = Radio.Group

export default class RadioDemo extends Component {
	state = {
		value: 2
	}
	
	onChange (value) {
		console.log('radio checked', value)
		this.setState({
			value: value
		})
	}
	
	render () {
		return (
			<div>
				<RadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</RadioGroup>
				<RadioGroup onChange={this.onChange.bind(this)} defaultValue={this.state.value}>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</RadioGroup>
				<RadioGroup onChange={this.onChange.bind(this)} defaultValue={this.state.value}>
					<Radio value={1}>A</Radio>
					<Radio value={2} disabled={true}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</RadioGroup>
			</div>
		)
	}
}
