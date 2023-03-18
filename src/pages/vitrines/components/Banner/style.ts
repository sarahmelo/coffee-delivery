import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 77px;

    padding: 92px 0;
    /* background-img: url('../../../../assets/background.png') no-repeat center center; */
`

export const Title = styled.h2`
    font-size: 48px;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
`

export const SubTitle = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeIllustration = styled.img`
    width: 476px;
`

export const Item = styled.li`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

    color: ${(props) => props.theme['base-text']};
`

const COLORS = {
    baseText: 'base-text',
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple'
} as const

interface ColorsProps {
    backgroundColor: keyof typeof COLORS;
}

export const IconContainer = styled.div<ColorsProps>`
    padding: 8px;
    background-color: ${(props) => props.theme[COLORS[props.backgroundColor]]};
`