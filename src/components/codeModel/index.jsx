import React, { Component } from 'react'
import classNames from 'classnames'
import Code from 'components/code'
import Drop from 'components/drop'

const DropTitle = Drop.title
const DropContent = Drop.content

export default class CodeModel extends Component {
	isOpen = this.props.isOpen
	
	toggle (isOpen) {
		this.isOpen = isOpen
		this.setState({})
	}
	
	render () {
		const {
			name,
			className,
			isOpen,
			desc,
			children
		} = this.props
		return (
			<Drop className={classNames('code-model', className)} isOpen={this.isOpen} onChange={this.toggle.bind(this)}>
				<div>
					<div className="code-model-title">{name}</div>
					<div className="code-model-desc flex-center-y">
						<div className="flex-1">{desc}</div>
						<DropTitle className="code-model-code-icon c-po">
							<If condition={this.isOpen}>
								<i className="iconfont icon-code-show"></i>
								<Else />
								<i className="iconfont icon-code-hide"></i>
							</If>
						</DropTitle>
					</div>
				</div>
				<DropContent className="code-model-wrap w-full flex-1">
					<Code>{children}</Code>
				</DropContent>
			</Drop>
		)
	}
}
