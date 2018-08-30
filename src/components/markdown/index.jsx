import React, { Component } from 'react'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

export default class Markdown extends Component {
	render () {
		const {
			className,
			source
		} = this.props
		return (
			<section className={classNames('component-markdown', className)}>
				<ReactMarkdown source={source} />
			</section>
		)
	}
}
