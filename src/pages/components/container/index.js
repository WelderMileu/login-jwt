import React from 'react'
import { Flex12 } from '../../style'

const Container = (props) => {
	return (
		<Flex12>
			{ props.children }
		</Flex12>
	)
}

export default Container;
