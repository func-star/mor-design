import React, { Component } from 'react'
import { Button, Icon } from 'mona'

const ButtonGroup = Button.Group

export default class ButtonDemo extends Component {
	state = {
		loading: false
	}
	
	clickLoading () {
		this.state.loading = true
		this.setState(this.state)
	}
	
	clickNone () {
		this.state.disabled = true
		this.setState({})
	}
	
	render () {
		return (
			<div className="padder m-t-md">
				<div className="m-b">
					<Button className="m-l" onClick={this.clickNone.bind(this)} disabled={this.state.disabled}>default</Button>
					<Button className="m-l" theme="primary">正常</Button>
					<Button className="m-l" theme="success">正常</Button>
					<Button className="m-l" theme="warning">正常</Button>
					<Button className="m-l" theme="error">正常</Button>
					<Button className="m-l" theme="primary-border">正常</Button>
				</div>
				<div className="m-b">
					<Button className="m-l" disabled>default</Button>
					<Button className="m-l" disabled theme="primary">primary</Button>
				</div>
				<div className="m-b">
					<Button className="m-l" theme="primary" loading={true}>loading</Button>
					<Button className="m-l" theme="primary" loading={this.state.loading} onClick={this.clickLoading.bind(this)}>click
						me</Button>
				</div>
				<div className="m-b">
					<Button className="m-l" theme="primary" size="xs">xs</Button>
					<Button className="m-l" theme="primary" size="sm">sm</Button>
					<Button className="m-l" theme="primary">default</Button>
					<Button className="m-l" theme="primary" size="md">md</Button>
					<Button className="m-l" theme="primary" size="lg">lg</Button>
				</div>
				<div className="m-b">
					<ButtonGroup>
						<Button onClick={this.clickNone.bind(this)} disabled={this.state.disabled}>default</Button>
						<Button>正常</Button>
					</ButtonGroup>
				</div>
			</div>
		)
	}
}
