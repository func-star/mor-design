/***
 * created by yangxi 2018/1/8
 */
import React, { Component } from 'react'
import valuesData from 'data/values'
import Router from 'moreact-router'

const Link = Router.link

export default class Nav extends Component {
	componentDidMount () {}
	
	render () {
		return (
			<div className="page-nav flex-center">
				<div className="page-nav-main d-f">
					<div className="page-nav-left flex-center-y">
						<Link to="">
							<div className="page-nav-logo flex-center-y">
								<img src={valuesData.logo} />{valuesData.title}
							</div>
						</Link>
					</div>
					<div className="page-nav-right flex-right-x flex-1 flex-center-y">
						<a href="https://github.com/func-star/mor-mobile" target="_blank" className="github">
							<i className="iconfont icon-github"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
