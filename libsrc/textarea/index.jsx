import React, { Component } from 'react'
import classNames from 'classnames'

export default class Textarea extends Component {
	static defaultProps = {
		rows: 3
	}
	
	componentDidMount () {
		if (typeof(this.props.autosize) === 'object') {
			let sty = window.getComputedStyle(this.refs.text)
			this.styleInfo = {
				append: parseInt(sty.paddingTop) + parseInt(sty.paddingBottom),
				lineHeight: parseInt(sty.lineHeight)
			}
			this.setState({})
		}
	}
	
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		return this.refs.text.value
	}
	
	setValue (value) {
		this.refs.text.value = value
	}
	
	onChange (e) {
		const { autosize } = this.props
		if (autosize) {
			this.refs.text.style.height = 'auto'
			this.refs.text.style.height = this.refs.text.scrollHeight + 2 + 'px'
		}
		
		if (this.props.onChange) {
			this.props.onChange(this.refs.text.value)
		}
	}
	
	render () {
		let {
			className,
			autosize,
			error,
			rows,
			style,
			disabled,
			verify,
			...props
		} = this.props
		
		let sty = Object.assign({}, style)
		
		if (typeof(autosize) === 'object') {
			if (autosize.minRows && this.styleInfo) {
				sty.minHeight = this.styleInfo.append + (autosize.minRows) * this.styleInfo.lineHeight
			}
			if (autosize.minRows && this.styleInfo) {
				sty.maxHeight = this.styleInfo.append + (autosize.maxRows) * this.styleInfo.lineHeight
			}
		}
		return (
			<textarea
				ref="text"
				style={sty}
				className={classNames('mona-textarea mona-form-control', className)}
				rows={rows}
				disabled={disabled ? 'disabled' : ''}
				onChange={this.onChange.bind(this)}
				{...props} />
		)
	}
}
