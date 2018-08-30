/***
 * created by yangxi 2018/1/8
 */
import React, { Component } from 'react'
import classNames from 'classnames'
import Nav from './components/nav'
import Aside from './components/aside'
import Router from 'moreact-router'

export default class DefaultLayout extends Component {
	componentDidMount () {
		this.wrap = this.refs.wrap
		Router.addEventListener('onChange', res => {
			this.wrap.scrollTop = 0
		})
	}
	
	isAside = true
	
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<div className="page-wrapper-content block-center d-f">
					<If condition={this.isAside}>
						<Aside />
					</If>
					<div className="page-content flex-1 h-full o-a pos-r" ref="wrap">
						{this.props.children}
					</div>
					<a href="https://github.com/func-star/mor-mobile/issues" target="_blank" className="page-feedback pos-f">
						<i className="iconfont icon-feedback"></i>
					</a>
				</div>
			</div>
		)
	}
}
