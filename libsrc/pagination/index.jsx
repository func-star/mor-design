import React, { Component } from 'react'
import Row from '../row'
import Col from '../col'
import Tool from '../tool'
import SelectPkg from '../select-pkg'
import Input from '../input'
import Icon from '../icon'
import classNames from 'classnames'

export default class Pagination extends Component {
	static defaultProps = {
		theme: 'default',
		gutter: 8,
		total: 100,
		pageSize: 10,
		defaultCurrent: 1,
		numberSize: 5,
		pageSizeOptions: ['10', '20', '30', '40']
		/*   onShowSizeChange*/
		//onChange
		//showSizeChanger
		//showQuickJumper
	}
	
	constructor (props) {
		super(props)
		this.pageSize = props.pageSize
		this.total = props.total
	}
	
	pageNumbers = []
	
	componentDidMount () {
		const { numberSize, defaultCurrent } = this.props
		this.toPage(defaultCurrent)
	}
	
	componentWillReceiveProps (props) {
		this.pageSize = props.pageSize
		this.total = props.total
		this.toPage(props.current || this.current, false)
	}
	
	current = 0
	startPage = 0
	endPage = 0
	pages = 0
	
	//change 是否出发change事件，pageCheck是否检测合法页数
	toPage (page, change, pageCheck) {
		const { numberSize } = this.props
		let pages = Math.ceil(this.total / this.pageSize)
		if (pageCheck && (!page || page < 1 || page > pages)) {
			return
		}
		let startPage = page - Math.floor(numberSize / 2)
		if (startPage < 1) {
			startPage = 1
		}
		let endPage = startPage + numberSize - 1
		if (endPage > pages) {
			endPage = pages
			startPage = pages - numberSize + 1
			startPage = startPage > 1 ? startPage : 1
		}
		
		this.current = page
		if (this.current > pages) {
			this.current = pages
		}
		this.startPage = startPage
		this.endPage = endPage
		this.pages = pages
		this.pageNumbers = Tool.newArray(startPage, endPage + 1)
		if (change) {
			this.onChange()
		}
		this.setState({})
	}
	
	onChange () {
		this.props.onChange && this.props.onChange(this.current)
	}
	
	onShowSizeChange (v) {
		this.pageSize = v
		this.toPage(this.current)
		this.props.onShowSizeChange && this.props.onShowSizeChange(this.current, this.pageSize)
	}
	
	jump (e) {
		if (e) {
			e.preventDefault()
		}
		let val = this.refs.ipt.getValue()
		this.refs.ipt.setValue('')
		this.toPage(parseInt(val), true, true)
	}
	
	render () {
		const {
			className,
			numberSize,
			theme,
			gutter,
			total,
			showTotal,
			pageSizeOptions,
			showSizeChanger,
			showQuickJumper
		} = this.props
		let pageSize = this.pageSize
		let pageOpt = pageSizeOptions.map((v) => {
			return {
				name: v + '条/页',
				value: v
			}
		})
		return (
			<div className={classNames('mona-pagination', 'mona-pagination-' + theme, className)}>
				<Row gutter={gutter}>
					<If condition={showTotal}>
						<Col>{showTotal(total, [(this.current - 1) * pageSize + 1, this.current * pageSize], this.pages, this.current)}</Col>
					</If>
					<Col>
						<If condition={this.current === 1}>
							<div className="mona-pagination-item disabled">
								<Icon name="arrowLeft" />
							</div>
						</If>
						<If condition={this.current !== 1}>
							<div className="mona-pagination-item" onClick={this.toPage.bind(this, this.current - 1, true)}>
								<Icon name="arrowLeft" />
							</div>
						</If>
					</Col>
					<If condition={this.startPage > 1}>
						<Col>
							<div className="mona-pagination-item" onClick={this.toPage.bind(this, 1, true)}>{1}</div>
						</Col>
					</If>
					<If condition={this.startPage > 2}>
						<Col>
							<div className="h-full padder-xs" onClick={this.toPage.bind(this, this.current - numberSize, true)}>...</div>
						</Col>
					</If>
					<For each="item" of={this.pageNumbers}>
						<Col key={item}>
							<div className={classNames('mona-pagination-item', {
								active: this.current === item
							})} onClick={this.toPage.bind(this, item, true)}>{item}</div>
						</Col>
					</For>
					<If condition={this.endPage < this.pages - 1}>
						<Col>
							<div className="h-full padder-xs" onClick={this.toPage.bind(this, this.current + numberSize, true)}>...</div>
						</Col>
					</If>
					<If condition={this.endPage < this.pages}>
						<Col>
							<div className="mona-pagination-item" onClick={this.toPage.bind(this, this.pages, true)}>{this.pages}</div>
						</Col>
					</If>
					
					<Col>
						<If condition={this.current === this.pages}>
							<div className="mona-pagination-item disabled">
								<Icon name="arrowRight" />
							</div>
						</If>
						<If condition={this.current < this.pages}>
							<div className="mona-pagination-item" onClick={this.toPage.bind(this, this.current + 1, true)}>
								<Icon name="arrowRight" />
							</div>
						</If>
					</Col>
					<If condition={showSizeChanger}>
						<Col className="mona-pagination-pageSizeOpt">
							<SelectPkg className="mona-pagination-pageSize-sel" data={pageOpt} defaultValue={pageSize} onChange={this.onShowSizeChange.bind(this)} placement="top" />
						</Col>
					</If>
					<If condition={showQuickJumper}>
						<Col>
							<Row>
								<span>跳至</span>
								<div className="padder-xs">
									<form onSubmit={this.jump.bind(this)}>
										<Input className="mona-pagination-jumper-ipt" ref="ipt" />
									</form>
								</div>
								<span>页</span>
							</Row>
						</Col>
					</If>
				</Row>
			</div>
		)
	}
}
