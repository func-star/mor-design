import SelectBase from '../../select-base'

const CtrlBase = SelectBase.BaseCtrl
//单选
export default class TreeSelectCtrl extends CtrlBase {
	expandedKeys = []
	
	//设置默认属性
	setDefaultValue (val, props) {
		if (typeof(val) === 'undefined' || !props.data) {
			return
		}
		this.setDefaultData(val, props.data)
		if (this.selected) {
			this.emit('valueChange')
		}
	}
	
	setDefaultData (value, data) {
		data.forEach((v) => {
			if (v.value === value) {
				this.selected = v
			}
			if (v.children) {
				this.setDefaultData(value, v.children)
			}
		})
	}
	
	//切换选中状态
	toggleSelect (info) {
		if (!this.selected || this.selected.value !== info.value) {
			this.selected = info
		}
		this.emit('valueChange')
	}
	
	clear () {
		this.selected = undefined
		this.emit('valueChange')
	}
	
	//是否选中
	isSelected (info) {
		return this.selected && this.selected.value === info.value
	}
	
	toggleChildren (item) {
		if (this.expandedKeys.indexOf(item.value) >= 0) {
			this.expandedKeys.splice(this.expandedKeys.indexOf(item.value), 1)
		} else {
			this.expandedKeys.push(item.value)
		}
	}
	
	childrenExpanded (item) {
		return this.expandedKeys.indexOf(item.value) >= 0
	}
}

