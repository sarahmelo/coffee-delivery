import { ReactNode } from 'react'
import styled, { DefaultTheme } from 'styled-components'

export const ToggleButtonContainer = styled.label`
    display: flex;
    gap: 12px;
    padding: 16px;
    color: ${({ theme }) => theme.typography.color['base-text']};
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.base['base-button']};
    font-size: ${({ theme }) => theme.typography['text']['s']};

    :checked {
        border: 1px solid ${({ theme }) => theme.brand['purple']};
        background-color: ${({ theme }) => theme.brand['purple-light']};
    }
`

export const InvisableInput = styled.input`
    display: none;
` 