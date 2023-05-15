import styled, { DefaultTheme } from 'styled-components'

type Typography = DefaultTheme['typography'] 

type HeadlineProps = {
    fontSize: keyof Typography['headline'],
    color: keyof Typography['color'],
}

export const Headline = styled.div<HeadlineProps>`
    font-size: ${({ theme, fontSize }) =>  theme.typography.headline[fontSize]};
    color: ${({ theme, color }) =>  theme.typography.color[color] };
    font-family: 'Baloo 2', sans-serif;
    line-height: 1;
`           
