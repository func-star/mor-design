import React, { Component } from 'react'
import Row from '../row'
import BaseComponent from '../base-component'

export default class List extends BaseComponent {
	didMount () {
		//this.bind(document,'keydown',this.onKeyDown.bind(this))
	}
	
	/* onKeyDown(e){*/
	//const {data} = this.props
	//if(!data || !data.length){
	//return;
	//}
	//let keyCode = e.keyCode;
	//if([13,38,40].indexOf(keyCode) < 0){
	//return;
	//}
	//e.stopPropagation();
	//e.preventDefault();
	//if(keyCode == 13){
	//}
	//if(keyCode == 38){
	//this.changeActive(-1)
	//}
	//if(keyCode == 40){
	//this.changeActive(1)
	//}
	/*}*/
	select (item) {
		this.props.onSelect && this.props.onSelect(item)
	}
	
	render () {
		const { data } = this.props
		if (!data || !data.length) {
			return null
		}
		return (
			<div className="mona-autoComplete-list" ref="wrap">
				<For each="item" of={data} index="index">
					<Row align="center" className="mona-autoComplete-list-item" key={index} onClick={this.select.bind(this, item)}>{item.name}</Row>
				</For>
			</div>
		)
	}
}
