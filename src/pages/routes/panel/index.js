import React from 'react'

import { View } from './../../style'
import Nav from '../../components/Nav'
import Globale from './../../style/global'
import TableUsers from '../../components/Table'

const Panel = () => {
	return (
		<View>
			<Globale />
			<Nav />
			<TableUsers />
		</View>
	)
}

export default Panel;
