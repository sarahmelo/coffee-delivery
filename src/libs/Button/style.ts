import styled, { DefaultTheme } from 'styled-components'
import { SizeButton, SizeButtonProps } from './type/size-button.type'
import { Icon } from '@phosphor-icons/react'

type ButtonContainerProps = {
    backgroundColor: keyof DefaultTheme['brand']
    size: keyof SizeButton
}

export const Button = styled.button<ButtonContainerProps>`
    display: flex;
    gap: 4px;
    padding: ${({ size }) => SizeButtonProps[size]['padding'] };
    width: ${({ size }) => SizeButtonProps[size]['width'] };
    background-color: ${({ theme, backgroundColor }) => theme.brand[backgroundColor]};
    border: 0;
    border-radius: 6px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`