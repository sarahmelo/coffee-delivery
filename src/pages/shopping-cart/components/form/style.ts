import styled, { DefaultTheme } from 'styled-components'
import { Typography } from '../../../../styles/themes/typography.type'

type BackgroundColorType = {
    backgroundColor: keyof DefaultTheme['base'],
}

export const Form = styled.div<BackgroundColorType>`
    padding: 40px;
    background-color: ${({ theme, backgroundColor }) => theme.base[backgroundColor] };
    width: fit-content;
`

export const Header = styled.div`
    display: flex;
    gap: 8px;
`

export const HeaderTextContainer = styled.div``

export const Input = styled.input`
    padding: 12px;
    border: 1px solid black;
`