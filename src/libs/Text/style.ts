import styled, { DefaultTheme } from 'styled-components';

type Typography = DefaultTheme['typography'] 


type TextProps = {
    fontSize: keyof Typography['text'],
    color: keyof DefaultTheme['brand']
}

export const Text = styled.div<TextProps>`
    font-size: ${({ theme, fontSize }) => theme.typography.text[fontSize] };
    color: ${({ theme , color }) =>  theme.brand[color] };
    font-family: 'Roboto', sans-serif;
`