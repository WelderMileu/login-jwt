import { createGlobalStyle } from 'styled-components'

const Globale = createGlobalStyle`
	*, html, #root {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		outline: none;
	}

	body {
		width: 100%;
		heigth: 100vh;
		font-family: 'calibri', sans-serif;
		font-size: 1rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

`

export default Globale;
