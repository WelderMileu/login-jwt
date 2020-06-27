import React from 'react'
import { Form } from './../../style'
import InputText from '../input'
import BtnSubmit from '../btn'
import user from '../../assets/image/user.png'

const Formulario = () => {
	return (
		<Form>
			<div style={{ display: 'flex', flexDirection:'column', flex:'1' ,justifyContent: 'center', alignItens: 'center', marginBottom: '48px'}}>
				<div>
					<img src={ user }  style={{ 
						width:'50px', 
						height: '50px' 
					}}/>
				</div>
				<p style={{ fontSize: '24px', color: '#C4C4C4', fontWeight:'normal', marginTop: '2px'}}>
					LOGIN
				</p>
			</div>
			<InputText type="text" placeholder="E-mail" />
			<InputText type="text" placeholder="*************************" />
			<BtnSubmit>
				Login
			</BtnSubmit>
			<p style={{ fontSize: '1rem', color: '#C4C4C4', fontWeight:'bold', marginTop: '48px'}}>
				Esqueci a senha
			</p>
			<p style={{ padding: '10px', color: '#C4C4C4', marginTop: '48px', fontSize:'1rem' }}>
				User authentication system, ugly in webtocken technology.
			</p>
		</Form>
	)
}

export default Formulario;
