import DefaultLayout from 'views/layout/default'
import NoMatch from 'pages/noMatch'
import HowToUse from 'pages/howToUse'
import CustomTheme from 'pages/customTheme'
import Button from 'pages/button'
import Input from 'pages/input'
import Layout from 'pages/layout'
import Modal from 'pages/modal'
import Notification from 'pages/notification'
import Switch from 'pages/switch'
import Tabs from 'pages/tabs'
import Tooltip from 'pages/tooltip'

const routeList = {
	index: 'how-to-use',
	routeList: [{
		layout: DefaultLayout,
		routes: {
			'how-to-use': HowToUse
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'custom-theme': CustomTheme
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'button': Button
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'input': Input
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'layout': Layout
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'modal': Modal
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'notification': Notification
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'switch': Switch
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'tabs': Tabs
		}
	}, {
		layout: DefaultLayout,
		routes: {
			'tooltip': Tooltip
		}
	}, {
		routes: {
			'404': NoMatch
		}
	}]
}

export default routeList
