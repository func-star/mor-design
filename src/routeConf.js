import DefaultLayout from 'views/layout/default'
import NoMatch from 'pages/noMatch'
import HowToUse from 'pages/howToUse'

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
			'custom-theme': HowToUse
		}
	}, {
		routes: {
			'404': NoMatch
		}
	}]
}

export default routeList
