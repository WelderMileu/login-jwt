import React from 'react'
import { Router } from '@reach/router'

import Globale from './style/global' 
import Index from './routes/index'
import Panel from './routes/panel'

function App() {
	return (
		<React.Fragment>
			<Globale />
			<Router basePath="/app">
				<Index path="/" />
				<Panel path="/panel" />
			</Router>
		</React.Fragment>
	)
}

export default App;
