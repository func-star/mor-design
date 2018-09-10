import SelectBase from '../../select-base'

const CtrlBase = SelectBase.BaseCtrl
//单选
export default class TreeSelectMultiple extends CtrlBase {
	selected = []
	selectedValues = []
	expandedKeys = []
	
	//设置默认值
	setDefaultValue (val, props) {
		if (props.defaultValueData) {
			this.selected = props.defaultValueData
			this.parseSelectValues()
			this.emit('valueChange')
			return
		}
		if (typeof(val) === 'undefined' || !props.data) {
			return
		}
		this.setDefaultData(val, props.data)
		this.parseSelectValues()
		if (this.selected.length > 0) {
			this.emit('valueChange')
		}
	}
	
	setDefaultData (value, data) {
		data.forEach((v) => {
			if (v.value === value) {
				this.selected.push(v)
			}
			if (v.children) {
				this.setDefaultData(value, v.children)
			}
		})
	}
	
	parseSelectValues () {
		this.selectedValues = this.selected.map((v) => {
			return v.value
		})
	}
	
	setSelected (val) {
		this.selected = val
		this.parseSelectValues()
		this.emit('valueChange')
	}
	
	//切换选中状态
	toggleSelect (info) {
		if (this.isSelected(info)) {
			this.selected = this.selected.filter((v) => {
				return v.value !== info.value
			})
		} else {
			this.selected.push(info)
		}
		this.parseSelectValues()
		this.emit('valueChange')
	}
	
	clear () {
		this.selected = []
		this.parseSelectValues()
		this.emit('valueChange')
	}
	
	//是否选中
	isSelected (info) {
		return this.selectedValues.indexOf(info.value) >= 0
	}
	
	toggleChildren (item) {
		if (this.expandedKeys.indexOf(item.value) > 0) {
			this.expandedKeys.splice(this.expandedKeys.indexOf(item.value), 1)
		} else {
			this.expandedKeys.push(item.value)
		}
	}
	
	childrenExpanded (item) {
		return this.expandedKeys.indexOf(item.value) >= 0
	}
	
	removeLast () {
		if (this.selected.length === 0) {
			return
		}
		this.selected.splice(this.selected.length - 1, 1)
		this.emit('valueChange')
		
	}
	
}

