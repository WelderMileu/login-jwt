import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Form, Content, View, Text } from '../../style'
import InputText from '../input'
import BtnSubmit from '../btn'

const Formulario = () => {
	return (
		<Form>

			<Content>
				<View>
					<FaUserCircle style={{ fontSize:'40px', color:'#C4C4C4'}}/>
					<Text style={{
						fontSize: '24px', 
						marginTop: '2px',
						textTransform: 'uppercase'
					}}>
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
				<Text style={{
					fontWeight:'bold', 
					marginTop: '48px'
				}}>
					Esqueci a senha
				</Text>
				<Text style={{
						padding: '10px', 
						marginTop: '48px',
						fontFamily: 'arial'
					}}>
					Autenticação de usuario
					utilizando a Tecnologia JsonWebToken.
				</Text>
			</View>

		</Form>
	)
}


export default Formulario;
