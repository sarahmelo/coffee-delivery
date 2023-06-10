import { ReactNode } from 'react'
import styled, { DefaultTheme } from 'styled-components'

export const ToggleButtonContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    color: ${({ theme }) => theme.typography.color['base-text']};
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.base['base-button']};
    width: 100%;
    height: fit-content;
    text-transform: uppercase;
    align-items: center;
`

export const InvisableInput = styled.input`
    display: none;

    :checked {
        border: 1px solid ${({ theme }) => theme.brand['purple']};
        background-color: ${({ theme }) => theme.brand['purple-light']};
    }
` 