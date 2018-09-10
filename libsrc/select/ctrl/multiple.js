import SelectBase from '../../select-base'
import Tool from '../../tool'

const CtrlBase = SelectBase.BaseCtrl
//单选
export default class SelectCtrl extends CtrlBase {
	selected = []
	
	//设置默认值
	setDefaultValue (val, props) {
		if (!val || !(val instanceof Array) || val.length === 0) {
			return
		}
		this.valueList = props.children.map((v) => {
			let props = v.props
			return {
				value: props.value,
				label: Tool.childrenText(props.children)
			}
		})
		
		let ids = this.valueList.map((v) => {
			return v.value
		})
		
		let l = val.map((v) => {
			let index = ids.indexOf(v)
			if (index >= 0) {
				return this.valueList[index]
			} else {
				return {
					value: v,
					label: v
				}
			}
		})
		if (l.length > 0) {
			this.selected = l
			this.emit('valueChange')
		}
	}
	
	//选中判断
	toggleSelect (info) {
		let index = this.getSelectedIndex(info)
		if (index < 0) {
			this.selected.push(info)
		} else {
			this.selected = this.selected.filter((v) => {
				return v.value !== info.value
			})
		}
		this.emit('valueChange')
		//this.hideDropView();
	}
	
	//获取option在选中列表中的index
	getSelectedIndex (info) {
		let index = -1
		this.selected.forEach((v, i) => {
			if (v.value === info.value) {
				index = i
			}
		})
		return index
	}
	
	//是否选中
	isSelected (info) {
		let index = this.getSelectedIndex(info)
		return index >= 0
	}
	
	//移除最后一个
	removeLast () {
		if (this.selected.length === 0) {
			return
		}
		this.selected.splice(this.selected.length - 1, 1)
		this.emit('valueChange')
		
	}
}

