import React, { Component } from 'react'
import classNames from 'classnames'
import Input from '../../input'

export default class HolderInput extends Component {
	constructor (props) {
		super(props)
		this.ctrl = this.props.ctrl
	}
	
	componentDidMount () {
		this.onValueChange = () => {
			let value = this.ctrl.selected ? this.ctrl.selected.label : ''
			this.refs.value.setValue(value)
			this.ctrl.hideDropView()
		}
		this.onVisibleChange = () => {
			const { showSearch } = this.props
			if (!showSearch) {
				return
			}
			this.searchVisible = this.ctrl.listVisible
			this.refs.ipt.setValue('')
			this.search('')
			this.setState({})
		}
		this.ctrl.on('valueChange', this.onValueChange)
		this.ctrl.on('visibleChange', this.onVisibleChange)
	}
	
	componentWillUnmount () {
		this.ctrl.off('visibleChagne', this.onVisibleChange)
		this.ctrl.off('valueChange', this.onValueChange)
	}
	
	search (val) {
		const { filterOption } = this.props
		this.ctrl.search(val, filterOption)
	}
	
	onClick (e) {
		this.ctrl.dropView.show()
		const { showSearch } = this.props
		if (!showSearch) {
			return
		}
		this.searchVisible = true
		this.setState({}, () => {
			this.refs.ipt.focus()
		})
	}
	
	render () {
		const { size, showSearch, filterOption, placeholder, ...props } = this.props
		return (
			<div className="mona-baseSelect-holder-input" onClick={this.onClick.bind(this)}>
				<Input readOnly ref="value" className={classNames({ hide: this.searchVisible })} onChange={this.search.bind(this)} placeholder={placeholder} />
				<Input ref="ipt" className={classNames({ hide: !this.searchVisible })} onChange={this.search.bind(this)} placeholder={placeholder} />
			</div>
		)
	}
}
