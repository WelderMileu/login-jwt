import React from 'react'
import styled from 'styled-components'
import fundo from './../assets/image/fundo.svg'

export const Flex12 = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 10px;
	width: 100%;
	height: 100vh;
	background-image: url(${fundo});
	background-size: cover;
	position: relative;
	overflow: hidden;
`;

export const InputType = styled.input`
	width: 317px;
	display: block;
	padding: .375rem .75rem;
	border: 1px solid #ced4da;
	border-radius: .25rem;
	font-size: 1rem;
	line-height: 1.5;
	color: #495057;
	background-clip: padding-box;
	margin-top: 5px;
`;

export const Form = styled.form`
	grid-column: 8;
	width: 317px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	position: absolute;
	top: 200px;

	@media(max-width: 1050px) {
		grid-column: 6;
		position:relative;
		top: 100px;
	}
`;

export const BtnLogin = styled.button`
	width: 317px;
	height: 38px;
	display: inline-block;
	font-weight: 400;
	border: 1px solid #FFFFFF;
	border-radius: .25rem;
	white-spacing: nowreap;
	font-size: 1rem;
	padding: .375rem .75rem;
	vertical-align: middle;
	margin-top: 10px;
	use-select: none;
	color: #FFFFFF;
	line-height: 1.5;
	background-color: #63FF70;	
	cursor: pointer;
	box-shadow: 4px 5px 5px rgb(0, 0, 0, 0.25);
	transition: .2s ease-in-out;

	&:hover {
		opacity: .8;
	}
`;

const ImgFundo = styled.img`
	grid-column: 3;
	position: absolute;
	top: 20px;

	@media(max-width: 1050px) {
		display:none;
	}
`

export default ImgFundo;
