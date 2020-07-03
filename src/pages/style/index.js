import styled from 'styled-components'
import fundo from './../assets/image/fundo.svg'

export const Flex12 = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 10px;
	width: 100%;
	height: 100vh;
	background-image: url(${fundo});
	background-color: #63FF70;
	background-size: cover;
	position: relative;
	overflow: hidden;
`;

export const Grid12 = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 10px;
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

export const InputType = styled.input`
	width: 317px;
	display: block;
	padding: .375rem 1.5rem;
	border: 1px solid #C4C4C4;
	border-radius: 20px;
	font-size: 1rem;
	line-height: 1.5;
	color: #70757a;
	background-clip: padding-box;
	margin-top: 5px;

	@media(max-width: 500px) {
		width: 100%;
	}
`;

export const AutencationForm = styled.form`
	grid-column: 8;
	width: 317px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	position: absolute;
	top: 100px;

	@media(max-width: 1050px) {
		grid-column: 6;
		width: 100%;
		position:relative;
		top: 20px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center; 
	align-Itens: center;
	margin-bottom: 48px;

	@media(max-width: 1050px) {
		margin-bottom: 110px;
		
		p {
			color: #FFFFFF;
		}

		svg {
			fill: #FFFFFF;
		} 
	}
`;

export const View = styled.div`
	display: block;
`;

export const ViewSignIn = styled.div`
	position: absolute;
	grid-column: 11;
	top: 15px;

	@media(max-width: 1050px) {
		grid-column: 10;
	}

	@media(max-width: 600px) {
		grid-column: 9;
	}

	@media(max-width: 500px) {
		grid-column: 8;
	}

	@media(max-width: 320px) {
		grid-column: 7;
	}
`;

export const IconAdmin = styled.div`
	color: #FFFFFF;
	grid-column: 2;
	position: absolute;
	top: 12px;
	display:flex;
	justify-content: center;
	align-Items: center;

	@media(max-width: 320px) {
		display:flex;
		flex-direction: column;
	}
`;

export const Text = styled.p`
	font-size: 1rem;
	color: #C4C4C4;
	font-weight: normal;
`;

export const BtnLogin = styled.button`
	width: 317px;
	height: 38px;
	display: inline-block;
	font-weight: bold;
	border: none;
	border-radius: 20px;
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
	box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.25);
	transition: .2s ease-in-out;
	margin-top: 30px;

	&:hover {
		opacity: .8;
		color: #63FF70;
		background-color: #FFFFFF;
		border: 1px solid #63FF70;
		box-shadow: 0px 0px 0px rgb(0, 0, 0, 0.25);
	}

	@media(max-width: 500px) {
		width: 100%;
		margin-right: 180px;
	}
`;

export const BtnAdd = styled.button`
	width: 128px;
	height: 38px;
	display: flex;
	justify-content: center;
	align-Items: center;
	font-weight: bold;
	border: 1px solid #63FF70;
	border-radius: 20px;
	white-spacing: nowreap;
	font-size: 1rem;
	padding: .375rem .75rem;
	vertical-align: middle;
	margin-top: 10px;
	use-select: none;
	line-height: 1.5;
	cursor: pointer;
	margin-top: 30px;
	background-color:#FFFFFF;
	color: #63FF70;
`;


export const BtnSignIn = styled.button`
	width: 128px;
	height: 38px;
	border: 1px solid #FFFFFF;
	color: #FFFFFF;
	border-radius: 20px;
	background-color: transparent;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: .2s ease-in-out;

	&:hover {
		background-color: #FFFFFF;
		color: #63FF70;
	}
`;

export const TableTitle = styled.div`
	grid-column: 3;
	display: flex;
	position: absolute;
	justify-content: space-between;
	align-Items: center;
	width: 77%;
	margin-top: 97px;

	@media(max-width:1050px) {
		margin-top: 50px;
	}

	@media(max-width:500px) {
		grid-column: 2;
		width: 90%;
	}
`;

export const TableUsersInfo = styled.table`
	grid-column: 3;
	width: 77%;
	position: absolute;
	margin-top: 200px;
	border-collapse: collapse;

	tr:nth-child(even) {
		background-color: #E6E6E6;
	}

	@media(max-width: 1050px) {
		margin-top: 150px;
	}

	@media(max-width:500px) {
		grid-column: 2;
		width: 90%;
	} 
`;

export const TableUsersTitle = styled.tr`
	background-color: #3C4043;
	color: #FFFFFF;
	height: 48px;

	td {
		padding-left: 60px;
	}

	@media(max-width:500px) {
		td {
			padding-left: 10px !important;
		}
	}
`;

export const TableUsersDados = styled.tr`
	height: 48px;

	td {
		padding-left: 60px;
	}

	@media(max-width:500px) {
		td {
			padding-left: 10px !important;
		}
	}
`;

const ImgFundo = styled.div`
	grid-column: 3;
	position: absolute;
	top: 44px;

	@media(max-width: 1050px) {
		display:none;
	}
`

export default ImgFundo;
