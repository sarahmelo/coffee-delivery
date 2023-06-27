import styled, { DefaultTheme } from 'styled-components';

type GradientBorderProps = {
    background: keyof DefaultTheme['brand']
}

export const ConfirmedOrderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const TextCollumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const InformativeCardItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Illustration = styled.img`
    @media (max-width: 1145px) {
        display: none;
    }
`