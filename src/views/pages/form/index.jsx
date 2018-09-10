import React, { Component } from 'react'
import {
	Form,
	Input,
	Button,
	Switch,
	Select,
	DatePicker,
	AutoComplete,
	Textarea,
	Checker,
	Row,
	Checkbox,
	Radio,
	SelectPkg
} from 'mona'

const FormItem = Form.Item
const Option = Select.Option
const CheckerItem = Checker.Item
const CheckboxGroup = Checkbox.Group
const RadioGroup = Radio.Group

export default class FormDemo extends Component {
	onSubmit (e, data) {
		console.log(e, data)
	}
	
	info () {
		console.log(this.refs.form.getInfo())
	}
	
	radioGroupChange (e, dom) {
		console.log(e.target.value)
		console.log(dom)
	}
	
	radioChange (e) {
		console.log(e.target.value)
	}
	
	checkboxGroupChange (values, checkedList) {
		console.log(values)
		console.log(checkedList)
	}
	
	checkboxChange (e) {
		console.log(e.target.checked)
	}
	
	numberChange (value) {
		console.log(value)
	}
	
	dateChange (date, dateString) {
		console.log(dateString)
	}
	
	timeChange (time, timeString) {
		console.log(timeString)
	}
	
	onFileSelect () {
	}
	
	render () {
		const blockStyle = {
			display: 'block'
		}
		return (
			<div style={{ width: 500 }} className="block-center">
				<div className="bg-white p">
					<Form onSubmit={this.onSubmit.bind(this)} ref="form">
						<FormItem label="字段1" labelSpan={4} wrapperSpan={18} required>
							<Input type="text" name="a.b" ref="a" maxLength={100} readOnly={true} disabled={false} placeholder="单行文本" defaultValue="input默认值" verify />
						</FormItem>
						<FormItem label="字段2" labelSpan={4} wrapperSpan={18}>
							<Textarea rows={3} name="b" ref="b" maxLength={200} readOnly={true} disabled={false} placeholder="多行文本" defaultValue="textarea默认值" />
						</FormItem>
						<FormItem label="补全" labelSpan={4} wrapperSpan={18} required>
							<AutoComplete name="c" ref="c" placeholder="自动补全" defaultValue="" data={[{
								name: 't',
								value: 't'
							}]} />
						</FormItem>
						<FormItem label="checker" labelSpan={4} wrapperSpan={18} required>
							<Checker name="action" defaultValue="pass" multiple={false} className="h-full">
								<Row className="h-full" align="center">
									<CheckerItem value="pass" theme="radio">
										<Row align="center">
											<div className="checker-radio m-r-xs"></div>
											通过
										</Row>
									</CheckerItem>
									<CheckerItem value="fail" theme="radio" className="m-l">
										<Row align="center">
											<div className="checker-radio m-r-xs"></div>
											驳回
										</Row>
									</CheckerItem>
								</Row>
							</Checker>
						</FormItem>
						
						<FormItem label="多选" labelSpan={4} wrapperSpan={18} required>
							<CheckboxGroup name="aaa" defaultValue="pass">
								<Checkbox value="1">A</Checkbox>
								<Checkbox value="2">B</Checkbox>
								<Checkbox value="3">C</Checkbox>
							</CheckboxGroup>
						</FormItem>
						
						<FormItem label="单选" labelSpan={4} wrapperSpan={18} required>
							<RadioGroup defaultValue="pass">
								<Radio value="1">A</Radio>
								<Radio value="2">B</Radio>
								<Radio value="3">C</Radio>
							</RadioGroup>
						</FormItem>
						
						<FormItem label="选择框" labelSpan={4} wrapperSpan={18}>
							<Select
								style={{ width: 200 }}
								showSearch
								name="e"
								defaultValue="aa">
								<Option value="aa">aa</Option>
								<Option value="ceshi">aa</Option>
							</Select>
						</FormItem>
						<FormItem label="selectPkg" labelSpan={4} wrapperSpan={18}>
							<SelectPkg name="f" defaultValue="3" data={[{ name: 1, value: 1 }, {
								name: 2,
								value: 2
							}, { name: 3, value: 3 }, { name: 4, value: 4 }]} />
						</FormItem>
						
						<FormItem label="字段7" labelSpan={4} wrapperSpan={18}>
							<Switch name="c" />
						</FormItem>
						<FormItem label="字段9" labelSpan={4} wrapperSpan={18}>
							<DatePicker name="date" showTime={true} onChange={this.dateChange.bind(this)} />
						</FormItem>
						<FormItem labelSpan={4} wrapperSpan={20}>
							<Button type="primary">提交</Button>
							<Button className="m-l" type="reset">重置</Button>
							<Button className="m-l" type="button" onClick={this.info.bind(this)}>信息</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		)
	}
}

