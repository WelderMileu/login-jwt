import React from 'react'
import Container from '../components/container'
import Formulario from '../components/form'
import Globale from '../style/global'
import ImgFundo from '../style'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image' 

function App() {
	const { imagem } = useStaticQuery(graphql`
		query {
			imagem: file(relativePath: { eq: "phone.png" }) {
				childImageSharp {
					fixed(width: 410, height: 603) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<React.Fragment>
			<Globale />
			<Container>
				<Formulario />
				<ImgFundo>
					<Img 
						fixed={imagem.childImageSharp.fixed}
						alt="ImageBackground"
					/>
				</ImgFundo>
			</Container>
		</React.Fragment>
	)
}

export default App;
