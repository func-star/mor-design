class Menus {
	constructor () {
		this.setMenus()
	}
	
	guideList = [{
		name: '快速使用',
		url: 'how-to-use'
	}, {
		name: '定制主题',
		url: 'custom-theme'
	}]
	
	componentsList = [{
		name: '基础组件',
		children: [{
			name: 'Button',
			name2: '按钮',
			url: 'button'
		}, {
			name: 'Input',
			name2: 'Input',
			url: 'input'
		}, {
			name: 'Layout',
			name2: 'Layout',
			url: 'layout'
		}, {
			name: 'Modal',
			name2: 'Modal',
			url: 'modal'
		}, {
			name: 'Notification',
			name2: 'Notification',
			url: 'notification'
		}, {
			name: 'Switch',
			name2: 'Switch',
			url: 'switch'
		}, {
			name: 'Tabs',
			name2: 'Tabs',
			url: 'tabs'
		}, {
			name: 'Tooltip',
			name2: 'Tooltip',
			url: 'tooltip'
		}, {
			name: 'Radio',
			name2: 'Radio',
			url: 'radio'
		}, {
			name: 'Checkbox',
			name2: 'Checkbox',
			url: 'checkbox'
		}, {
			name: 'DatePicker',
			name2: 'DatePicker',
			url: 'date-picker'
		}, {
			name: 'Select',
			name2: 'Select',
			url: 'select'
		}, {
			name: 'Pagination',
			name2: 'Pagination',
			url: 'pagination'
		}, {
			name: 'Form',
			name2: 'Form',
			url: 'form'
		}]
	}]
	
	otherList = [{
		name: 'react 系列产品',
		children: [{
			name: 'moreact-router',
			name2: '单页面路由管理',
			url: 'https://github.com/func-star/mo-react-router'
		}, {
			name: 'mona-scroll-watcher',
			name2: '滚动监听',
			url: 'https://func-star.github.io/mor-scroll-watcher/'
		}, {
			name: 'mor-lazyload-img',
			name2: '图片懒加载',
			url: 'https://func-star.github.io/mor-lazyload-img/'
		}, {
			name: 'mona-event',
			name2: '事件管理',
			url: 'https://github.com/func-star/mona-events'
		}]
	}]
	
	setMenus () {
		this.menus = this.guideList.concat(this.componentsList, this.otherList)
	}
	
	getMenus () {
		return this.menus
	}
}

export default new Menus
