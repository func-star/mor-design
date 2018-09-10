import SelectBase from '../../select-base'
import Tool from '../../tool'

const CtrlBase = SelectBase.BaseCtrl
//单选
export default class SelectCtrl extends CtrlBase {
	//设置默认属性
	setDefaultValue (val, props) {
		if (typeof(val) === 'undefined') {
			return
		}
		this.valueList = props.children.map((v) => {
			let _props = v.props
			return {
				value: _props.value,
				label: Tool.childrenText(_props.children)
			}
		})
		
		let l = this.valueList.filter((v) => {
			return v.value === val
		})
		if (l.length > 0) {
			this.selected = l[0]
			this.emit('valueChange')
		}
	}
	
	//切换选中状态
	toggleSelect (info) {
		if (!this.selected || this.selected.value !== info.value) {
			this.selected = info
		}
		this.emit('valueChange')
	}
	
	//是否选中
	isSelected (info) {
		return this.selected && this.selected.value === info.value
	}
	
	clear () {
		this.selected = undefined
		this.emit('valueChange')
	}
	
}

