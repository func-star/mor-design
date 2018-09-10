import Events from 'mona-events'

export default class SelectBaseCtrl extends Events {
	//需要继承重写
	toggleSelect (val) {}
	
	isSelected (value) {}
	
	setDefaultValue (value) {}
	
	selectOpt (value, opt) {
		this.emit('selectOpt', value, opt)
	}
	
	clear () {}
	
	getValue () {
		return this.selected
	}
	
	setValue (value) {
		this.selected = value
	}
	
	valueList = []
	activeIndex = -1
	listVisible = false
	
	visibleChange (v) {
		this.listVisible = v
		this.emit('visibleChange')
	}
	
	setValueList (valueList) {
		this.valueList = valueList
	}
	
	changeActive (size) {
		this.activeIndex += size
		if (this.activeIndex < 0) {
			this.activeIndex = this.valueList.length - 1
		}
		if (this.activeIndex > this.valueList.length - 1) {
			this.activeIndex = 0
		}
		this.emit('activeChange')
	}
	
	selectActive () {
		if (!this.valueList[this.activeIndex]) {
			return
		}
		this.toggleSelect(this.valueList[this.activeIndex])
	}
	
	isActive (val) {
		if (!this.valueList[this.activeIndex]) {
			return false
		}
		let value = this.valueList[this.activeIndex].value
		return value === val.value
	}
	
	hideDropView () {
		if (!this.dropView) {
			return
		}
		this.dropView.hide()
	}
	
	searchVal = ''
	
	search (val, fun) {
		this.isEmpty = true
		this.searchVal = val
		this.filterOption = fun
		this.emit('filter', val, fun)
		this.emit('afterFilter', val, fun)
	}
}

