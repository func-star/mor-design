import Events from 'mona-events'

export default class monaTabsCtrl extends Events {
	setActiveKey (key) {
		if (key === this.activeKey) {
			return
		}
		this.activeKey = key
		this.emit('changeActiveKey', key)
	}
	
	getActiveKey (info) {
		if (info.length === 0) {
			return
		}
		if (undefined === this.activeKey) {
			return info[0].key
		}
		return this.activeKey
	}
}
