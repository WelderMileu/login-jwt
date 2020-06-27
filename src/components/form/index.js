import React from 'react'
import { Form, Content, View, Text } from './../../style'
import InputText from '../input'
import BtnSubmit from '../btn'
import user from '../../assets/image/user.svg'

const Formulario = () => {
	return (
		<Form>

			<Content>
				<View>
					<img src={ user } />
					<Text style={ style.TextLogo }>
					 	Login
					</Text>
				</View>
			</Content>

			<View>
				<InputText type="text" placeholder="E-mail" />
				<InputText type="text" placeholder="*************************" />
				<BtnSubmit> Login </BtnSubmit>
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
	}
}

export default Formulario;
