import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Globale from '../style/global' 
import Index from './routes/index'
import Panel from './routes/panel'

function App() {
	return (
		<BrowserRouter>
			<Globale />
			<Switch>
				<Route path='/' exact={true} component={Index} />
				<Route path='/routes/panel' exact={true} component={Panel} />
			</Switch>
		</BrowserRouter>
	)
}

export default App;
