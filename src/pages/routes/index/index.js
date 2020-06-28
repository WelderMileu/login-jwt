import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Container from './../../../components/container'
import Formulario from './../../../components/form'
import ImgFundo from './../../../style'

const Index = () => {
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

	return(
		<Container>
			<Formulario />
			<ImgFundo>
				<Img 
					fixed={imagem.childImageSharp.fixed}
					alt="ImageBackground"
				/>
			</ImgFundo>
		</Container>
	);
}

export default Index;
