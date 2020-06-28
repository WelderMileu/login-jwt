import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Form, Content, View, Text } from './../../style'
import InputText from '../input'
import BtnSubmit from '../btn'

const Formulario = () => {
	return (
		<Form>

			<Content>
				<View>
					<FaUserCircle style={ style.FaIcon }/>
					<Text style={ style.TextLogo }>
					 	Login
					</Text>
				</View>
			</Content>

			<View>
				<InputText type="text" placeholder="E-mail" />
				<InputText type="text" placeholder="*************************" />
				<Link to="/routes/panel">
					<BtnSubmit>
						Login
					</BtnSubmit>
				</Link>
			</View>

			<View>
				<Text style={ style.TextLembrete }>
					Esqueci a senha
				</Text>
				<Text style={ style.TextDescripion }>
					Autenticação de usuario
					utilizando a Tecnologia JsonWebToken.
				</Text>
			</View>

		</Form>
	)
}

const style = {
	TextDescripion : {
		padding: '10px', 
		marginTop: '48px',
		fontFamily: 'arial'
	},

	TextLembrete : {
		fontWeight:'bold', 
		marginTop: '48px'
	},

	TextLogo : {
		fontSize: '24px', 
		marginTop: '2px',
		textTransform: 'uppercase'
	},

	FaIcon : {
		fontSize:'40px', 
		color:'#C4C4C4'
	}
}

export default Formulario;
