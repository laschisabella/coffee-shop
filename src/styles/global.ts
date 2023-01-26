import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--base-title: #272221;
		--base-subtitle: #403937;
		--base-text: #574F4D;
		--base-label: #8D8686;

		--base-hover: #D7D5D5;
		--base-button: #E6E5E5;
		--base-input: #EDEDED;
		--base-card: #F3F2F2;
		--background: #FAFAFA;
		
		--purple-dark: #4B2995;
		--purple: #8047F8;
		--purple-light: #EBE5F9;

		--yellow-dark: #c47f17;
		--yellow: #DBAC2C;
		--yellow-light: #F1E9C9;
		
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: var(--background);
		font-size: 3rem;
		-webkit-font-smoothing: antialiased;
		font-family: 'Roboto', sans-serif;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-family: 'Baloo 2', cursive;
	}
`

export const Container = styled.div`
	max-width:1200px;
	margin: 0 auto;
`