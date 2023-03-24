import styled from 'styled-components';

export const BannerContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 77px;

    padding: 92px 0;
    max-width: 1120px;
    margin: 0 auto;
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
    margin-bottom: 66px;

    color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeIllustration = styled.img`
    width: 476px;
`

export const ListItems = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 567px;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;

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
    border-radius: 25px;
    width: 32px;
    height: 32px;
    
    background-color: ${(props) => props.theme[COLORS[props.backgroundColor]]};
`