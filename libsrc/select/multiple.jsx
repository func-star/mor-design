import React, { Component } from 'react'
import SelectBase from '../select-base'
import HolderInput from '../select-base/holder/multiple'
import Ctrl from './ctrl/multiple.js'

export default class SelectMultiple extends SelectBase {
	autoValueList = true
	Ctrl = Ctrl
	Holder = HolderInput
	trigger = 'blurCheck'
	
	constructor (props) {
		super(props)
		this.ctrl = new this.Ctrl
	}
	
	onChange () {
		this.props.onChange && this.props.onChange(this.getValue(), this.ctrl.selected)
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
