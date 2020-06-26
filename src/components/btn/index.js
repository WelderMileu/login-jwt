import React from 'react'
import { BtnLogin } from '../../style'

const BtnSubmit = (props) => {
	return (
		<BtnLogin>
			{ props.children }
		</BtnLogin>
	)
} 

export default BtnSubmit;
