import styled, { DefaultTheme } from 'styled-components';

type Typography = DefaultTheme['typography'] 


type TextProps = {
    fontSize: keyof Typography['text'],
    color: keyof Typography['color']
}

export const Text = styled.div<TextProps>`
    font-size: ${({ theme, fontSize }) => theme.typography.text[fontSize] };
    color: ${({ theme , color }) =>  theme.typography.color[color] };
    font-family: 'Roboto', sans-serif;
    line-height: 1;
`