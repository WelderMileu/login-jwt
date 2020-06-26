import React from 'react'
import Container from '../components/container'
import Formulario from '../components/form'
import Globale from '../style/global'
import ImgFundo from '../style'
import photo from '../assets/image/phone.png'

function App() { 
	return (
		<React.Fragment>
			<Globale />
			<Container>
				<Formulario />
				<ImgFundo 
					src={ photo }
					alt="Imagem de Fundo"
				/>
			</Container>
		</React.Fragment>
	)
}

export default App;
