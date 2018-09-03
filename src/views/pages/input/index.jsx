import React, { Component } from 'react'
import { Input, Button, Textarea } from 'mona'

export default class InputDemo extends Component {
	change () {
		this.setState({})
	}
	
	render () {
		return (
			<div style={{ width: 500 }} className="block-center">
				<div className="bg-white p">
					<div className="m-b">
						<Input placeholder="disabled" disabled />
					</div>
					<div className="m-b">
						<Input placeholder="sm" size="sm" />
					</div>
					<div className="m-b">
						<Input placeholder="lg" size="lg" />
					</div>
					<div className="m-b">
						<Input placeholder="error" />
					</div>
					<div className="m-b">
						<Input placeholder="readOnly" readOnly />
					</div>
					<div className="m-b">
						<Input placeholder="input" defaultValue="defaultValue" />
					</div>
					<div className="m-b">
						<Input placeholder="input" />
					</div>
					<div className="m-b">
						<Input placeholder="input" size="lg" />
					</div>
					<div className="m-b">
						<Button onClick={this.change.bind(this)}>点击</Button>
					</div>
					<div className="m-b">
						<Textarea placeholder="textarea" />
					</div>
					<div className="m-b">
						<Textarea placeholder="disabled" rows={4} disabled />
					</div>
					<div className="m-b">
						<Textarea placeholder="readOnly" readOnly />
					</div>
					<div className="m-b">
						<Textarea placeholder="error" rows={2} error />
					</div>
					<div className="m-b">
						<Textarea placeholder="error" rows={1} autosize />
					</div>
					<div className="m-b">
						<Textarea placeholder="error" rows={2} autosize={{ minRows: 1, maxRows: 6 }} />
					</div>
				</div>
			</div>
		)
	}
}

