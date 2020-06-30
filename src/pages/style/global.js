import { createGlobalStyle } from 'styled-components'

const Globale = createGlobalStyle`
	*, html, #root {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		outline: none;
	}

	body {
		font-family: 'calibri', sans-serif;
		font-size: 1rem;
	}

`

export default Globale;
