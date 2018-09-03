import React, { Component } from 'react'
import Row from '../row'
import Tool from '../tool'
import classNames from 'classnames'

export default class Content extends Component {
	componentDidMount () {
		const { ctrl } = this.props
		this.tabKey = ctrl.activeKey
		this.moveInkBar()
		this.setState({}, () => {
			this.barInit = true
		})
		ctrl.on('changeActiveKey', (key) => {
			this.tabKey = key
			this.setState({})
			this.moveInkBar()
		})
		this.wResize = () => {
			this.moveInkBar()
		}
		window.addEventListener('resize', this.wResize)
	}
	
	componentWillUnmount () {
		window.removeEventListener('resize', this.wResize)
	}
	
	componentDidUpdate () {
		if (!this.hasMoveBar) {
			this.moveInkBar()
		}
	}
	
	toTab (item) {
		const { ctrl } = this.props
		ctrl.setActiveKey(item.key)
	}
	
	moveInkBar () {
		if (!this.refs.bar) {
			return
		}
		const { info, ctrl } = this.props
		let activeKey = ctrl.getActiveKey(info)
		
		let index = info.map((v) => {
			return v.key + ''
		}).indexOf(activeKey + '')
		
		if (index < 0) {
			return
		}
		let dom = this.refs['tab_' + index]
		if (!dom) {
			return
		}
		this.hasMoveBar = true
		Tool.css(this.refs.bar, {
			transform: 'translate3d(' + dom.offsetLeft + 'px, 0, 0)',
			width: dom.offsetWidth
		})
	}
	
	render () {
		const { info, theme, ctrl, ...props } = this.props
		let activeKey = ctrl.getActiveKey(info)
		return (
			<div className="mona-tabs-nav">
				<Row className="mona-tabs-nav-wrap">
					<For each="item" of={info} index="index">
						<div className={classNames('mona-tabs-nav-item flex-center', item.props.className, { active: activeKey == item.key })} key={item.key} onClick={this.toTab.bind(this, item)} ref={'tab_' + index}>{item.tab}</div>
					</For>
				</Row>
				<If condition={theme == 'default'}>
					<div className={classNames('mona-tabs-nav-ink-bar', { 'mona-tabs-nav-ink-bar-animated': this.barInit && this.hasMoveBar })} ref="bar"></div>
				</If>
			</div>
		)
	}
}
