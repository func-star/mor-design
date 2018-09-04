import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import DropdownItem from './item'

export default class Dropdown extends Component {
	static defaultProps = {
		trigger: 'hover',
		placement: 'bottomLeft'
	}
	
	componentWillReceiveProps (props) {
		if (this.dropdownItem) {
			const { overlay } = props
			this.dropdownItem.refresh(overlay)
		}
	}
	
	componentWillUnmount () {
		this.removeNode()
	}
	
	componentDidMount () {
		let dom = findDOMNode(this)
		if (!dom) {
			return
		}
		this.eventShow = this.show.bind(this)
		this.eventHide = this.hide.bind(this)
		this.eventToggle = this.toggle.bind(this)
		this.leaveCheck = this.leaveCheck.bind(this)
		
		this.childDom = dom
		this.register(dom)
	}
	
	componentDidUpdate () {
		let dom = findDOMNode(this)
		if (dom == this.childDom) {
			return
		}
		if (dom) {
			this.register(dom)
		}
	}
	
	leaveCheck (e) {
		if (!this.visible) {
			return
		}
		let clickOther = true
		if (this.childDom.contains(e.target) || (this.dropdownNode && this.dropdownNode.contains(e.target))) {
			clickOther = false
		}
		
		if (clickOther) {
			this.props.onBlur && this.props.onBlur()
			this.hide(20)
		}
	}
	
	register (dom) {
		const { trigger } = this.props
		if (trigger == 'hover') {
			dom.addEventListener('mouseenter', this.eventShow, false)
			dom.addEventListener('mouseleave', this.eventHide, false)
		}
		if (trigger == 'click') {
			dom.addEventListener('click', this.eventToggle, false)
			document.addEventListener('click', this.leaveCheck, true)
		}
		if (trigger == 'blurCheck') {
			document.addEventListener('click', this.leaveCheck, true)
		}
	}
	
	dropdownDomRegister (dom) {
		const { trigger } = this.props
		if (trigger == 'hover') {
			this.dropdownNode.addEventListener('mouseenter', this.eventShow, false)
			this.dropdownNode.addEventListener('mouseleave', this.eventHide, false)
		}
	}
	
	/* unregister(dom){*/
	//dom.removeEventListener("mouseenter",this.eventShow);
	//dom.removeEventListener("mouseleave",this.eventHide);
	//dom.removeEventListener("click",this.eventToggle,false);
	//document.removeEventListener("click",this.leaveCheck,true)
	/*}*/
	relocation () {
		if (!this.visible) {
			return
		}
		this.dropdownItem.toRelocation && this.dropdownItem.toRelocation()
	}
	
	toggle () {
		if (!this.visible) {
			this.show()
		} else {
			this.hide()
		}
	}
	
	show () {
		clearTimeout(this.hideTimeout)
		if (this.visible) {
			return
		}
		const { children, sameWidth, style, getContainer, ...conf } = this.props
		let _conf = Object.assign({}, conf)
		
		let _sty = Object.assign({}, style)
		_conf.style = _sty
		
		if (sameWidth && !_sty.width) {
			_sty.width = this.childDom.offsetWidth
		}
		
		if (!this.dropdownItem) {
			let container = getContainer ? getContainer() : document.body
			this.dropdownNode = DropdownItem.init((item) => {
				this.dropdownItem = item
				this.visible = true
				this.dropdownItem.show(this.childDom, _conf, () => {
					this.onVisibleChange(true)
				})
			}, container)
			//注册dropdow内容hover事件
			this.dropdownDomRegister()
			return
		}
		this.visible = true
		this.dropdownItem.show(this.childDom, _conf, () => {
			this.onVisibleChange(true)
		})
	}
	
	hide (time = 0) {
		this.hideTimeout = setTimeout(() => {
			const { cleanWhenHide } = this.props
			if (!this.dropdownItem) {
				return
			}
			this.visible = false
			//cleanwhenhide 隐藏时清除下拉节点
			if (cleanWhenHide) {
				ReactDOM.unmountComponentAtNode(this.dropdownNode)
				this.dropdownNode.remove()
				this.dropdownNode = undefined
				this.dropdownItem = undefined
				return
			}
			this.dropdownItem.hide(() => {
				this.onVisibleChange(false)
			})
		}, time)
	}
	
	removeNode () {
		if (!this.dropdownNode) {
			return
		}
		ReactDOM.unmountComponentAtNode(this.dropdownNode)
		this.dropdownNode.remove()
		this.dropdownNode = undefined
		this.dropdownItem = undefined
	}
	
	onVisibleChange (val) {
		this.props.onVisibleChange && this.props.onVisibleChange(val)
	}
	
	render () {
		const { children } = this.props
		return children
	}
}
