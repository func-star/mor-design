import React, { Component } from 'react'
import SelectBase from '../select-base'
import HolderInput from '../select-base/holder/multiple'
import Ctrl from './ctrl/multiple.js'
import List from './list'

export default class moMultipleSelect extends SelectBase {
	Ctrl = Ctrl
	Holder = HolderInput
	trigger = 'blurCheck'
	List = List
	
	constructor (props) {
		super(props)
		this.ctrl = new this.Ctrl
		this.setValueList(props)
	}
	
	getValueList (list, data) {
		if (!data) {
			return
		}
		data.forEach((v) => {
			list.push(v)
			this.getValueList(list, v.children)
		})
		return list
	}
	
	setValueList (props) {
		let list = []
		this.getValueList(list, props.data)
		this.ctrl.setValueList(list)
	}
	
	getValue () {
		if (!this.ctrl.selected) {
			return
		}
		return this.ctrl.selected.map((v) => {
			return v.value
		})
	}
	
}
