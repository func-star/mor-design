import React, { Component } from 'react'
import Row from '../../row'
import BaseComponent from '../../baseComponent'
import Icon from '../../icon'
import Checkbox from '../../checkbox'
import Checker from '../../checker'

import classNames from 'classnames'

export default class List extends BaseComponent {
	constructor (props) {
		super(props)
		this.ctrl = props.ctrl
	}
	
	didMount () {
		const { info } = this.props
		let _info = info || {}
		let data = _info.data || []
		this.bind(this.ctrl, 'filter', this.onFilter.bind(this))
		this.bind(this.ctrl, 'valueChange', () => {
			if (!this.refs.checker) {
				return
			}
			this.refs.checker.setValue(this.ctrl.selected)
		})
	}
	
	onFilter (value) {
		const { info } = this.props
		let _info = info || {}
		let data = _info.data || []
		this.ctrl.expandedKeys = []
		this.parseData(data, value)
		this.setState({})
	}
	
	parseData (data, val) {
		let visible = false
		data.forEach((v) => {
			v.labelHtml = undefined
			if (val && v.label.indexOf(val) >= 0) {
				visible = true
				v.labelHtml = v.label.replace(val, '<span class="text-red">' + val + '</span>')
			}
			if (v.children && this.parseData(v.children, val)) {
				this.ctrl.expandedKeys.push(v.value)
				visible = true
			}
		})
		return visible
	}
	
	isSelected (item) {
		return this.ctrl.isSelected(item)
	}
	
	selectItem (item) {
		const { loadData, checkable } = this.props.info
		if (checkable) {
			return
		}
		this.ctrl.toggleSelect(item)
		this.setState({})
	}
	
	toggleChildren (item) {
		const { info } = this.props
		if ((info.loadData && item.isLeaf) || item.loading) {
			return
		}
		if (info.loadData && !item.children) {
			item.loading = true
			this.setState({})
			info.loadData(item).then(() => {
				item.loading = false
				this.ctrl.toggleChildren(item)
				this.setState({})
			}).catch((e) => {
				item.loading = false
				this.setState({})
			})
			return
		}
		this.ctrl.toggleChildren(item)
		this.setState({})
	}
	
	childrenVisible (item) {
		return this.ctrl.childrenExpanded(item)
	}
	
	onCheck (v) {
		this.ctrl.setSelected(v)
	}
	
	treeRender (data, level) {
		const { loadData, checkable } = this.props.info
		if (!data) {
			return null
		}
		return (
			<For each="item" of={data}>
				<div key={item.value}>
					<Row className={classNames('mona-treeSelect-item', {
						'mona-treeSelect-item-group': (item.children && item.children.length > 0) || (loadData && !item.isLeaf),
						'mona-treeSelect-item-group-visible': this.childrenVisible(item),
						'mona-treeSelect-item-active': this.isSelected(item)
					})} align="center">
						<div className="mona-treeSelect-arrow flex-center" onClick={this.toggleChildren.bind(this, item)}>
							<If condition={!item.loading}>
								<Icon name="down" />
							</If>
							<If condition={item.loading}>
								<Icon name="loading" />
							</If>
						</div>
						<If condition={checkable}>
							<Checkbox className="m-r-xs" value={item} />
						</If>
						<If condition={item.labelHtml}>
							<div dangerouslySetInnerHTML={{ __html: item.labelHtml }} className="mona-treeSelect-item-label flex-1" onClick={this.selectItem.bind(this, item)}></div>
						</If>
						<If condition={!item.labelHtml}>
							<div className="mona-treeSelect-item-label flex-1" onClick={this.selectItem.bind(this, item)}>
								{item.label}
							</div>
						</If>
					</Row>
					<div className="mona-treeSelect-child-wrap">
						<If condition={item.children && item.children.length > 0 && this.childrenVisible(item)}>
							{this.treeRender(item.children, level + 1)}
						</If>
					</div>
				</div>
			</For>
		)
	}
	
	render () {
		const { info } = this.props
		const { loadData, checkable } = this.props.info
		let _info = info || {}
		let data = _info.data || []
		return (
			<div className={classNames('mona-baseSelect-list mona-treeSelect-list', {
				'mona-treeSelect-checkable': checkable
			})} ref="wrap">
				<Checker onChange={this.onCheck.bind(this)} ref="checker">
					{this.treeRender(data, 0)}
					<If condition={data.length === 0}>
						<div className="mona-baseSelect-list-empty">暂无数据</div>
					</If>
				</Checker>
			</div>
		)
	}
}
