import React from 'react'
import { InputType } from '../../style'

const InputText = (props) => {
	return (
		<InputType
			type={props.type}
			placeholder={props.placeholder}
		/>
	)
}

export default InputText;
