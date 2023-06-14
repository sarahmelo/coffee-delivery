import styled, { DefaultTheme } from 'styled-components'

enum InputSize {
    sm = '60px',
    md = '200px',
    lg = '560px'
}

const value = InputSize['sm']

type InputProps = {
    inputSize: keyof typeof InputSize
    theme: DefaultTheme
}

export const Header = styled.div`
    display: flex;
    gap: 8px;
`

export const HeaderTextContainer = styled.div``

export const Input = styled.input<InputProps>`
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.base['base-button']};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.base['base-input']};
    width: 100%;
    max-width: ${({ inputSize }) => InputSize[inputSize] };
    outline: 0;

    :focus {
        border: 1px solid ${({ theme }) => theme.brand['purple']};
    }
`

export const Fields = styled.div`
    display: flex;
    gap: 16px;
    flex-flow: column;
`

export const InputContainer = styled.div`
    display: flex;
    gap: 12px;
`