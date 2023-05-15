import styled, { DefaultTheme } from "styled-components"
import { Border, BorderRadius } from "./form.types"

type BackgroundColorType = {
    backgroundColor: keyof DefaultTheme['base'],
    border: Border,
}

export const HeaderForm = styled.div`
    display: flex;
    gap: 8px;
`

export const TextContainer = styled.div``

export const FormContainer = styled.div<BackgroundColorType>`
    padding: 40px;
    background-color: ${({ theme, backgroundColor }) => theme.base[backgroundColor] };
    border-radius: ${({ border }) =>  BorderRadius[border]};
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`
