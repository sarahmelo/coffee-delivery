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
        padding: 40px 24px;
        padding-bottom: 80px;
    } 

    body { 
        overflow: overlay;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    body, button {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme.brand['background']};
    }
`