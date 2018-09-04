import React, { Component } from 'react'
import { Row, Tooltip, Button, Popover } from 'mona'

export default class DropdownDemo extends Component {
	hide () {
		this.visible = true
		this.setState({})
	}
	
	render () {
		return (
			<div className="padder p-100">
				<div>
					<div>tooltip</div>
					<If condition={!this.visible}>
						<Tooltip title="内容" placement="topLeft">
							<Button className="w-50 m-r" onClick={this.hide.bind(this)}>上左</Button>
						</Tooltip>
					</If>
					<Tooltip title="内容" placement="top">
						<Button className="w-50 m-r">上</Button>
					</Tooltip>
					<Tooltip title="内容" placement="topRight">
						<Button className="w-50 m-r">上右</Button>
					</Tooltip>
					<Tooltip title="内容" placement="rightTop">
						<Button className="w-50 m-r">右上</Button>
					</Tooltip>
					<Tooltip title="内容" placement="right">
						<Button className="w-50 m-r">右</Button>
					</Tooltip>
					<Tooltip title="内容" placement="rightBottom">
						<Button className="w-50 m-r">右下</Button>
					</Tooltip>
					<Tooltip title="内容" placement="bottomRight">
						<Button className="w-50 m-r">下右</Button>
					</Tooltip>
					<Tooltip title="内容" placement="bottom">
						<Button className="w-50 m-r">下</Button>
					</Tooltip>
					<Tooltip title="内容" placement="bottomLeft">
						<Button className="w-50 m-r">下左</Button>
					</Tooltip>
					<Tooltip title="内容" placement="leftBottom">
						<Button className="w-50 m-r">左下</Button>
					</Tooltip>
					<Tooltip title="内容" placement="left">
						<Button className="w-50 m-r">左</Button>
					</Tooltip>
					<Tooltip title="内容" placement="leftTop">
						<Button className="w-50 m-r">左上</Button>
					</Tooltip>
				</div>
				
				<div className="m-t">
					<div>popover</div>
					<Popover title="标题" content="内容" placement="topLeft">
						<Button className="w-50 m-r">上左</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="top">
						<Button className="w-50 m-r">上</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="topRight">
						<Button className="w-50 m-r">上右</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="rightTop">
						<Button className="w-50 m-r">右上</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="right">
						<Button className="w-50 m-r">右</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="rightBottom">
						<Button className="w-50 m-r">右下</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="bottomRight">
						<Button className="w-50 m-r">下右</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="bottom">
						<Button className="w-50 m-r">下</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="bottomLeft">
						<Button className="w-50 m-r">下左</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="leftBottom">
						<Button className="w-50 m-r">左下</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="left">
						<Button className="w-50 m-r">左</Button>
					</Popover>
					<Popover title="标题" content="内容" placement="leftTop">
						<Button className="w-50 m-r">左上</Button>
					</Popover>
				</div>
			
			</div>
		)
	}
}
