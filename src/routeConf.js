import DefaultLayout from 'views/layout/default'
import NoMatch from 'pages/NoMatch'
import HowToUse from 'pages/HowToUse'
import CustomTheme from 'pages/CustomTheme'
import Button from 'pages/Button'
import Input from 'pages/Input'

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
		routes: {
			'404': NoMatch
		}
	}]
}

export default routeList
