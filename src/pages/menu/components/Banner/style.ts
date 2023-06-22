import styled, { DefaultTheme } from 'styled-components';

export const BannerContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 77px;
    
    padding-bottom: 92px;
    max-width: 1120px;
    margin: 0 auto;
`
export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
`

export const CoffeeIllustration = styled.img`
    width: 400px;

    @media (max-width: 1145px) {
        display: none;
    }
`

export const ListItems = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;


    @media (max-width: 1145px) {
        grid-template-columns: 1fr;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;

    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

    color: ${(props) => props.theme.typography.color['base-text']};
`

type COLORS = 
    'yellow-dark' |
    'yellow' |
    'purple' |
    'base-text'


interface ColorsProps {
    color: keyof DefaultTheme['brand'];
}

export const IconContainer = styled.div<ColorsProps>`
    padding: 8px;
    border-radius: 25px;
    width: 32px;
    height: 32px;
    
    background-color: ${({theme, color}) => theme.brand[color]};
`

export const Background = styled.img`
    height: 40%;
    width: 100%;
    z-index: -1;
    display: block;
    position: absolute;
`