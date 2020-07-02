import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'gatsby'

import { AutencationForm, Content, View, Text, BtnLogin } from '../../style'
import InputText from '../input'

const Formulario = () => {
	return (
		<AutencationForm>
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
				<InputText 
					type="text" 
					placeholder="E-mail" 
				/>
				<InputText 
					type="text" 
					placeholder="*************************" 
				/>
				<Link to="/routes/panel">
					<BtnLogin>
						Login
					</BtnLogin>
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
		</AutencationForm>
	)
}


export default Formulario;
