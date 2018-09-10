import React, { Component } from 'react'
import Dropdown from '../dropdown'
import Input from '../input'
import List from './list'

export default class PostForm extends Component {
	select (item) {
		if (this.refs.ipt) {
			this.refs.ipt.setValue(item.value)
		}
		this.props.onSelect && this.props.onSelect(item)
		this.refs.drop.hide()
	}
	
	onVisibleChange (v) {
		//this.visible = v;
		//this.setState({})
	}
	
	hide () {
		this.refs.drop.hide()
	}
	
	show () {
		this.refs.drop.show()
	}
	
	onChange (...data) {
		this.props.onChange && this.props.onChange(...data)
	}
	
	render () {
		const { children, data, onSelect, onChange, ...props } = this.props
		return (
			<Dropdown
				ref="drop"
				trigger="click"
				placement="bottomLeft"
				sameWidth
				overlay={(
					<List data={data || []}
						visible={this.visible}
						onSelect={this.select.bind(this)}
						onVisibleChange={this.onVisibleChange.bind(this)} />
				)}>
				<Input {...props} autoComplete="off" onChange={this.onChange.bind(this)} ref="ipt" />
			</Dropdown>
		)
	}
}
