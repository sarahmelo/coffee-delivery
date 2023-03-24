import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        padding: 0 40px;
    }

    body, button {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme['background']};
    }
`