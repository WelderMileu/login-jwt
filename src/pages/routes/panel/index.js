import React from 'react'
import { Link } from 'react-router-dom'

import { View, Text } from './../../../style'

const Panel = () => {
	return (
		<View>
			<Text>
				Panel de Controle
			</Text>
			<Link to="/">
				Pagina Inicial
			</Link>
		</View>
	)
}

export default Panel;
