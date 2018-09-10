import React, { Component } from 'react'

export default class SelectMultipleIpt extends Component {
	focus () {
		this.refs.ipt.focus()
	}
	
	onChange (e) {
		if (!e.target.value && e.keyCode) {
		}
		this.refs.ipt.style.width = '14px'
		this.refs.ipt.style.width = this.refs.ipt.scrollWidth + 2 + 'px'
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
	
	setValue (value) {
		this.refs.ipt.value = value
		this.refs.ipt.style.width = '14px'
		this.refs.ipt.style.width = this.refs.ipt.scrollWidth + 2 + 'px'
	}
	
	onFocus () {
		
		this.props.onFocus()
	}
	
	render () {
		return <input ref="ipt"
			onFocus={this.onFocus.bind(this)}
			className="mona-select-multiple-ipt"
			onChange={this.onChange.bind(this)} />
	}
}
