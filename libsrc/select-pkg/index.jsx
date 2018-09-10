import React, { Component } from 'react'
import Select from '../select'
import Tool from '../tool'

const Option = Select.Option
import classNames from 'classnames'

export default class SelectPkg extends Component {
	static defaultProps = {
		showSearch: true,
		joinSign: ',',
		keyType: 'key-value',
		nameKey: 'name',
		valueKey: 'value'
	}
	
	constructor (props) {
		super(props)
		if (typeof(props.disFilter) === 'undefined' && !props.multiple) {
			this.disFilter = true
		}
		this.value = props.defaultValue
	}
	
	selectKey = Date.now()
	state = {
		updateKey: Date.now()
	}
	
	getName (name = 'name') {
		return this.props[name]
	}
	
	getValue () {
		const { valueType, multiple, joinSign } = this.props
		let val
		if (multiple) {
			val = this.value || []
			if (valueType === 'detail') {
				return val.map((v) => {
					return this.valueObj['val' + v]
				})
			}
			if (valueType === 'string' && typeof(val) === 'string') {
				return val
			}
			if (valueType === 'string') {
				return val.join(joinSign)
			}
		} else {
			val = this.value
			if (valueType === 'detail') {
				return this.valueObj['val' + val]
			}
		}
		return val
	}
	
	setState (...props) {
		if (this.unmount) {
			return
		}
		super.setState(...props)
	}
	
	componentWillUnmount () {
		this.unmount = true
	}
	
	componentDidMount () {
		const { server, data, defaultValue, multiple } = this.props
		if (server) {
			server(this.getValue()).then((data) => {
				this.setData(data)
			})
		} else if (data) {
			this.setData(data)
		}
		this.form = Tool.queryParentReactDom(this.refs.wrap, '.mona-form')
	}
	
	//设置值
	setData (data) {
		const { defaultValue, multiple, valueKey } = this.props
		let _data = {
			data: data
		}
		if (typeof(defaultValue) !== 'undefined') {
			this.setDefaultvalue(data, defaultValue)
		} else {
			this.setState(_data)
		}
	}
	
	//设置默认值
	setDefaultvalue (data, val) {
		this.value = val
		const { multiple, valueType, valueKey, keyType, joinSign } = this.props
		let defaultValue
		if (multiple && valueType === 'string' && typeof(defaultValue) === 'string') {
			defaultValue = defaultValue.split(joinSign)
		} else if (multiple) {
			defaultValue = val
		}
		if (!multiple) {
			defaultValue = val + ''
		}
		if (keyType === 'value') {
			defaultValue = val
		} else if (multiple) {
			defaultValue = data.filter((v) => {
				return defaultValue.indexOf(v[valueKey]) >= 0
			}).map((v) => {
				this.setDetail(v[valueKey], v)
				return v[valueKey] + ''
			})
		} else {
			data.forEach((v) => {
				if (v[valueKey] === val) {
					this.setDetail(v[valueKey], v)
				}
			})
		}
		this.setState({
			updateKey: Date.now(),
			data: data,
			defaultValue: defaultValue
		})
		
	}
	
	onChange (value) {
		this.value = value
		if (this.props.onChange) {
			this.props.onChange(this.getValue(), this.valueObj['val' + value])
		}
		if (this.form) {
			this.form.onChange()
		}
	}
	
	valueObj = {}
	
	setDetail (val, info) {
		const { parseDetail } = this.props
		if (parseDetail) {
			this.valueObj['val' + val] = parseDetail(info)
		} else {
			this.valueObj['val' + val] = info
		}
	}
	
	onSelect (val, option) {
		this.setDetail(option.props.value, option.props.info)
	}
	
	onSearch (val) {
		const { onSearch } = this.props
		if (onSearch) {
			onSearch(val, (data) => {
				this.setState({
					data: data
				})
			})
		}
	}
	
	searchFilter () {
		return true
	}
	
	//设置唯一key，可用index或value
	getItemKey (item, index) {
		const { valueKey, indexKey } = this.props
		if (indexKey) {
			return index
		}
		return item[valueKey]
	}
	
	render () {
		const {
			defaultValue,
			className,
			children,
			server,
			data,
			valueType,
			keyType,
			nameKey,
			valueKey,
			onSearch,
			onSelect,
			searchFilter,
			parseDetail,
			joinSign,
			disFilter,
			keyField,
			indexKey,
			optionRender,
			onChange, ...props
		} = this.props
		let _data = this.state.data || data || []
		let opt = {}
		if (this.disFilter) {
			opt.filterOption = this.searchFilter.bind(this)
		}
		return (
			<div className={classNames('mona-form-control mona-selectPkg', className)} ref="wrap" key={this.selectKey}>
				<Select
					{...props}
					{...opt}
					key={this.state.updateKey}
					className="w-full"
					optionFilterProp="children"
					onChange={this.onChange.bind(this)}
					onSelect={this.onSelect.bind(this)}
					defaultValue={this.state.defaultValue}
					onSearch={this.onSearch.bind(this)}>
					<Choose>
						<When condition={keyType == 'value'}>
							<For each="item" of={_data} index="index">
								<Option key={item + ''} value={item + ''} info={item}>{item}</Option>
							</For>
						</When>
						<Otherwise>
							<For each="item" of={_data} index="index">
								<Option key={this.getItemKey(item, index)} value={item[valueKey] + ''} info={item}>{optionRender ? optionRender(item, index) : item[nameKey]}</Option>
							</For>
						</Otherwise>
					</Choose>
				</Select>
			</div>
		)
	}
}
