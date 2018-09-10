import React, { Component } from 'react'

export default class MultipleIpt extends Component {
	focus () {
		this.refs.ipt.focus()
	}
	
	onChange (e) {
		this.setWidth()
		this.props.onChange(e.target.value)
	}
	
	componentDidMount () {
		this.onKeyDown = (e) => {
			if (document.activeElement !== this.refs.ipt || e.keyCode !== 8) {
				return
			}
			if (!this.refs.ipt.value) {
				return this.props.onDelete()
			}
		}
		document.addEventListener('keydown', this.onKeyDown)
	}
	
	componentWillUnmount () {
		document.removeEventListener('keydown', this.onKeyDown)
	}
	
	getValue () {
		return this.refs.ipt.value
	}
	
	setValue (value, full) {
		this.refs.ipt.value = value
		this.setWidth(full)
	}
	
	setWidth (full) {
		if (!full) {
			this.refs.ipt.style.width = '14px'
			this.refs.ipt.style.width = this.refs.ipt.scrollWidth + 2 + 'px'
		} else {
			this.refs.ipt.style.width = '100%'
		}
	}
	
	onFocus () {
		this.props.onFocus()
	}
	
	render () {
		const { placeholder, disabled } = this.props
		return <input ref="ipt"
			disabled={disabled}
			placeholder={placeholder}
			onFocus={this.onFocus.bind(this)}
			className="mona-baseSelect-multiple-ipt"
			onChange={this.onChange.bind(this)} />
	}
}
