import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 14px;
    } 

    body { 
        overflow: overlay;
    }

    body, button {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme.brand['background']};
    }
`