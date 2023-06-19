import styled, { DefaultTheme } from 'styled-components';

export type IconContainerProps = {
    backgroundColor: keyof DefaultTheme['brand']
}

export const InformativeItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const IconContainer = styled.div<IconContainerProps>`
    padding: 8px;
    border-radius: 50px;
    background-color: ${({ theme, backgroundColor }) => theme.brand[backgroundColor] };
    color: ${({ theme }) => theme.brand.white };
    height: 32px;
`