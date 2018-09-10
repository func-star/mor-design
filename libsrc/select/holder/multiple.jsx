import React, { Component } from 'react'
import Row from '../../row'
import MultipleIpt from './multipleIpt'

export default class SelectMultiple extends Component {
	constructor (props) {
		super(props)
		this.ctrl = this.props.ctrl
	}
	
	values = []
	
	componentDidMount () {
		this.onValueChange = () => {
			this.values = this.ctrl.selected || []
			this.refs.ipt.setValue('')
			this.ctrl.search('')
			this.setState({}, () => {
				this.ctrl.dropView.relocation()
			})
		}
		this.onVisibleChange = () => {
			this.refs.ipt.setValue('')
			//this.ctrl.search('')
		}
		this.ctrl.on('visibleChange', this.onVisibleChange)
		this.ctrl.on('valueChange', this.onValueChange)
	}
	
	componentWillUnmount () {
		this.ctrl.off('visibleChagne', this.onVisibleChange)
		this.ctrl.off('valueChange', this.onValueChange)
	}
	
	delete (item) {
		this.ctrl.toggleSelect(item)
		this.ctrl.dropView.relocation()
	}
	
	onClick (e) {
		this.refs.ipt.focus()
	}
	
	onFocus () {
		this.ctrl.dropView.show()
	}
	
	onChange (val) {
		const { filterOption } = this.props
		this.ctrl.search(val, filterOption)
		this.ctrl.dropView.relocation()
	}
	
	onDelete () {
		this.ctrl.removeLast()
	}
	
	render () {
		const { size, ...props } = this.props
		return (
			<Row align="center" className="mona-select-multiple-holder" ref="wrap" onClick={this.onClick.bind(this)}>
				<For each="item" of={this.values}>
					<Row className="mona-select-multiple-item" key={item.value} align="center">
						<span>{item.label}</span>
						<span className="mona-select-multiple-del" onClick={this.delete.bind(this, item)}>x</span>
					</Row>
				</For>
				<MultipleIpt ref="ipt" onFocus={this.onFocus.bind(this)} onChange={this.onChange.bind(this)} onDelete={this.onDelete.bind(this)} />
			</Row>
		)
	}
}
