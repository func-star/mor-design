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
		console.log(this.menus)
	}
	
	getMenus () {
		return this.menus
	}
}

export default new Menus
