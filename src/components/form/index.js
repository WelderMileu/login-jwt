import React from 'react'
import { Form } from './../../style'
import InputText from '../input'
import BtnSubmit from '../btn'

const Formulario = () => {
	return (
		<Form>
			<InputText type="text" placeholder="E-mail" />
			<InputText type="text" placeholder="senha" />
			<BtnSubmit>
				Submit
			</BtnSubmit>
			<p style={{ padding: '10px', color: '#495057', marginTop: '20px', fontSize:'1rem' }}>
				Desenvolvendo uma aplicação para fazer teste com
				api usando jsonwebtoken do nodejs.
			</p>
		</Form>
	)
}

export default Formulario;
