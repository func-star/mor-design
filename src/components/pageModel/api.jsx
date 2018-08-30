import React, { Component } from 'react'
import classNames from 'classnames'

export default class Api extends Component {
	
	render () {
		const {
			className,
			source
		} = this.props
		return (
			<div className={classNames('page-model-api', className)}>
				<h2 className="page-model-title-2">API</h2>
				<For of={source||[]} each="item" index="index">
					<div className="api-item" key={index}>
						<h4 className="page-model-title-3 ">{item.title}</h4>
						<table className="component-table">
							<thead>
							<tr>
								<th>参数</th>
								<th>说明</th>
								<th>类型</th>
								<th>默认值</th>
								<th>可选值</th>
							</tr>
							</thead>
							<tbody>
							<For of={item.props} each="child" index="childIndex">
								<tr key={childIndex}>
									<td>{child.name}</td>
									<td>{child.desc}</td>
									<td>
										<If condition={child.type}>
											<code>{child.type}</code>
											<Else />
											-
										</If>
									</td>
									<td>
										<If condition={child.default}>
											<code>{child.default}</code>
											<Else />
											-
										</If>
									</td>
									<td>
										<If condition={child.options}>
											<code>{child.options}</code>
											<Else />
											-
										</If>
									</td>
								</tr>
							</For>
							</tbody>
						</table>
					</div>
				</For>
			</div>
		)
	}
}
