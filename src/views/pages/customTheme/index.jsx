import React, { Component } from 'react'
import readme from './readme.md'

export default class Layout extends Component {
	
	render () {
		return (
			<div className="mona-markdown" dangerouslySetInnerHTML={{ __html: readme }}></div>
		)
	}
}
