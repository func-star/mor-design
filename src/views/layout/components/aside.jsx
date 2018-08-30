/***
 * created by yangxi 2018/1/8
 */
import React, { Component } from 'react'
import Menus from 'data/menus'
import classNames from 'classnames'
import Drop from 'components/drop'
import Router from 'moreact-router'

const Link = Router.link

const DropTitle = Drop.title
const DropContent = Drop.content

export default class Aside extends Component {
	constructor (props) {
		super(props)
		this.menus = Menus.getMenus()
	}
	
	menusList = []
	
	componentWillMount () {
		this.menus.forEach(v => {
			if (v.children instanceof Array && v.children.length > 0) {
				this.menusList = this.menusList.concat(v.children)
			}
		})
	}
	
	isHttpUrl (str) {
		if (str.indexOf('//') === 0 || str.indexOf('http') === 0) {
			return true
		}
		return false
	}
	
	toogleMenu (index, isOpen) {
		this.menus[index].isOpen = isOpen
		this.setState({})
	}
	
	render () {
		return (
			<div className="page-aside h-full o-a">
				<div className="menu-group">
					<For each="item" of={this.menus} index="index">
						<If condition={item.children && item.children.length > 0}>
							<Drop key={index} onChange={this.toogleMenu.bind(this, index)} isOpen={!item.isOpen}>
								<DropTitle className="menu-item flex-center-y c-po">
									<i className={classNames('iconfont ' + item.icon)}></i>
									<div className="flex-1">{item.name}</div>
									<If condition={item.isOpen}>
										<i className="iconfont icon-arrow-up p-r-20"></i>
										<Else />
										<i className="iconfont icon-arrow-down p-r-20"></i>
									</If>
								</DropTitle>
								<DropContent className="menu-child-group">
									<For each="child" of={item.children} index="childIdx">
										<If condition={this.isHttpUrl(child.url)}>
											<a className="menu-child flex-center-x flex-direction-col" target="_blank" href={child.url} key={'child' + childIdx}>
												<div className="name">{child.name}</div>
												<div className="name1">{child.name2}</div>
											</a>
											<Else />
											<Link to={child.url || '.'}
												className="menu-child flex-center-x flex-direction-col"
												key={'child' + childIdx}
												activeClassName="active">
												<div className="name">{child.name}</div>
												<div className="name1">{child.name2}</div>
											</Link>
										</If>
									</For>
								</DropContent>
							</Drop>
							<Else />
							<If condition={item.url && this.isHttpUrl(item.url)}>
								<a className="menu-child flex-center-y no-child" href={item.url} key={'item' + index}>
									<span>{item.name}</span>
								</a>
								<Else />
								<Link to={item.url || '.'}
									className="menu-item flex-center-y no-child"
									key={'item' + index}
									activeClassName="active">
									<span>{item.name}</span>
								</Link>
							</If>
						</If>
					</For>
				</div>
			</div>
		)
	}
}
