import styled, { DefaultTheme } from 'styled-components'
import { Typography } from '../../styles/themes/typography.type';

interface ColorsProps {
    backgroundColor: keyof DefaultTheme['brand'];
    color: keyof DefaultTheme['brand'];
}

export const HeaderApp = styled.header`
    width: 100%;
    max-width: 1120px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 24px 14px;
    margin: 0px auto;
    background-color: #fafafa;
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
    position: relative;
    
    background-color: ${({ theme, backgroundColor }) => theme.brand[backgroundColor]};
    color: ${({ theme, color }) => theme.brand[color]};
    border: 0;
    border-radius: 6px;
    font-size: 14px;

    cursor: pointer;
`

export const Chip = styled.div<ColorsProps>`
    font-size: 12px;
    font-weight: bold;
    border-radius: 20px;
    position: absolute;

    padding: 2px 6px;
    background-color: ${({theme, backgroundColor }) => theme.brand[backgroundColor]};
    color: ${({ theme, color }) => theme.brand[color]};
    top: -7px;
    right: -6px;

`