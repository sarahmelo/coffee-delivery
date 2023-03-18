import styled from 'styled-components'

const COLORS = {
    yellowDark: 'yellow-dark',
    yellowLight: 'yellow-light',
    purpleDark: 'purple-dark',
    purple: 'purple',
    purpleLight: 'purple-light',
} as const

interface ColorsProps {
    backgroundColor: keyof typeof COLORS;
    textColor: keyof typeof COLORS;
}

export const HeaderApp = styled.header`
    padding: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    height: 40px;
    width: auto;
`

export const NavigationContent = styled.ul`
    list-style: none;
    display: flex;
    gap: 12px;
`

export const TranslucentButton = styled.button<ColorsProps>`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    
    background-color: ${(props) => props.theme[COLORS[props.backgroundColor]]};
    color: ${(props) => props.theme[COLORS[props.textColor]]};
    border: 0;
    border-radius: 6px;
    font-size: 14px;
`