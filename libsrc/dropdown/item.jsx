import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import classNames from 'classnames'
import Tool from '../tool'

export default class DropdownItem extends Component {
	static init (cbk, container) {
		let node = document.createElement('div')
		node.className = 'mona-dropdown'
		container.appendChild(node)
		ReactDOM.render(<DropdownItem />, node, function () {
			this.container = container
			this.node = node
			cbk(this)
		})
		return node
	}
	
	refresh (overlay) {
		this.overlay = overlay
		this.setState({})
	}
	
	//定位
	locating (dom, conf) {
		
		let offset = Tool.offset(dom)
		//包含节点的信息
		let domInfo = {
			left: offset.left,
			top: offset.top,
			height: dom.offsetHeight,
			width: dom.offsetWidth,
			dom: dom
		}
		let overlayDom = findDOMNode(this)
		
		//定位父节点信息
		let offsetParent = this.node.offsetParent
		let parentInfo = {
			left: 0,
			top: 0
		}
		
		if (offsetParent) {
			let parOffset = Tool.offset(offsetParent)
			
			parentInfo.left = parOffset.left
			parentInfo.top = parOffset.top
			parentInfo.height = offsetParent.offsetHeight
			parentInfo.dom = offsetParent
		}
		
		let sty = {}
		let placement = conf.placement
		
		//可定制位置
		if (placement instanceof Function) {
			let sty = placement(parentInfo, domInfo, {
				height: overlayDom.offsetHeight,
				width: overlayDom.offsetWidth,
				dom: overlayDom
			})
			Tool.css(this.node, Object.assign({}, conf.style, sty))
			return
		}
		
		switch (placement) {
			case 'topLeft':
				sty = {
					left: domInfo.left - parentInfo.left,
					top: domInfo.top - parentInfo.top - overlayDom.offsetHeight
				}
				break
			case 'top':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width / 2 - overlayDom.offsetWidth / 2,
					top: domInfo.top - parentInfo.top - overlayDom.offsetHeight
				}
				break
			case 'topRight':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width - overlayDom.offsetWidth,
					top: domInfo.top - parentInfo.top - overlayDom.offsetHeight
				}
				break
			case 'rightTop':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width,
					top: domInfo.top - parentInfo.top
				}
				break
			case 'right':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width,
					top: domInfo.top - parentInfo.top + domInfo.height / 2 - overlayDom.offsetHeight / 2
				}
				break
			case 'rightBottom':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width,
					top: domInfo.top - parentInfo.top + domInfo.height - overlayDom.offsetHeight
				}
				break
			case 'bottomRight':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width - overlayDom.offsetWidth,
					top: domInfo.top + domInfo.height - parentInfo.top
				}
				
				break
			case 'bottom':
				sty = {
					left: domInfo.left - parentInfo.left + domInfo.width / 2 - overlayDom.offsetWidth / 2,
					top: domInfo.top + domInfo.height - parentInfo.top
				}
				break
			case 'bottomLeft':
				sty = {
					left: domInfo.left - parentInfo.left,
					top: domInfo.top + domInfo.height - parentInfo.top
				}
				break
			case 'leftBottom':
				sty = {
					left: domInfo.left - parentInfo.left - overlayDom.offsetWidth,
					top: domInfo.top - parentInfo.top + domInfo.height - overlayDom.offsetHeight
				}
				break
			case 'left':
				sty = {
					left: domInfo.left - parentInfo.left - overlayDom.offsetWidth,
					top: domInfo.top - parentInfo.top + domInfo.height / 2 - overlayDom.offsetHeight / 2
				}
				break
			case 'leftTop':
				sty = {
					left: domInfo.left - parentInfo.left - overlayDom.offsetWidth,
					top: domInfo.top - parentInfo.top
				}
				break
			default:
		}
		if (sty.hasOwnProperty('left') && conf.leftAdd) {
			sty.left += conf.leftAdd
		}
		if (sty.hasOwnProperty('top') && conf.topAdd) {
			sty.top += conf.topAdd
		}
		if (sty.hasOwnProperty('right') && conf.rightAdd) {
			sty.right += conf.rightAdd
		}
		if (sty.hasOwnProperty('bottom') && conf.bottomAdd) {
			sty.bottom += conf.bottomAdd
		}
		Tool.css(this.node, Object.assign({}, conf.style, sty))
	}
	
	relocation (dom, conf) {
		if (this.unmount) {
			return
		}
		this.node.className = classNames('mona-dropdown', 'mona-dropdown-visible', 'mona-dropdown-placement-' + conf.placement, conf.className)
		Tool.removeCss(this.node, 'top')
		Tool.removeCss(this.node, 'left')
		Tool.removeCss(this.node, 'bottom')
		Tool.removeCss(this.node, 'right')
		this.locating(dom, conf)
	}
	
	componentWillUnmount () {
		this.unmount = true
		window.removeEventListener('resize', this.toRelocation)
	}
	
	show (dom, conf, cbk) {
		this.overlay = conf.overlay
		this.toRelocation = () => {
			this.relocation(dom, conf)
		}
		this.setState({}, () => {
			this.toRelocation()
			window.addEventListener('resize', this.toRelocation)
			cbk && cbk()
		})
	}
	
	//隐藏节点
	hide (cbk) {
		window.removeEventListener('resize', this.toRelocation)
		Tool.removeClass(this.node, 'mona-dropdown-visible')
		cbk && cbk()
	}
	
	//卸载节点
	remove () {
		window.removeEventListener('resize', this.toRelocation)
		ReactDOM.unmountComponentAtNode(this.node)
		this.node.remove()
	}
	
	render () {
		return this.overlay || null
	}
}
