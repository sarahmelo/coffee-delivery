import styled, { css } from 'styled-components'

type ToggleButtonProps = {
    isChecked: boolean
}

export const ToggleButtonContainer = styled.label<ToggleButtonProps>`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    color: ${({ theme }) => theme.typography.color['base-text']};
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.base['base-button']};
    width: 100%;
    height: fit-content;
    text-transform: uppercase;
    align-items: center;
    cursor: pointer;

    ${({ isChecked }) => isChecked && css`
        border: 1px solid ${({ theme }) => theme.brand['purple']};
        background-color: ${({ theme }) => theme.brand['purple-light']};
    `}
`

export const InvisableInput = styled.input`
    display: none;
` 