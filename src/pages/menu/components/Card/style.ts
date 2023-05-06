import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 256px;

    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
`

export const CoffeeImage = styled.img`
    height: 120px;
    width: 120px;

    margin-top: -45px;
`

export const Tag = styled.p`
    padding: 4px 8px;

    width: fit-content;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    border-radius: 13px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
`

export const Title = styled.p`
    margin-top: 16px;
    font-weight: 700;
    font-size: 20px;
    font-family: 'Baloo 2', cursive;

    color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-align: center;

    margin-top: 8px;

    color: ${(props) => props.theme['base-label']};
`

export const FlagContainer = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 12px;
`

export const BottomActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    width: 100%;
`

export const Price = styled.p`
    font-weight: 800;
    font-size: 24px;
    font-family: 'Baloo 2', cursive;
    
    color: ${(props) => props.theme['base-text']};

    ::before {
        content: 'R$ ';
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }
`

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 6px;
    gap: 8px;
    
    background-color: ${(props) => props.theme['base-button']};
`

export const Count = styled.p`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
`

export const Add = styled.button`
    color: ${(props) => props.theme['purple']};
    border: 0;
    background-color: transparent;
    cursor: pointer;
`

export const Remove = styled.button`
    color: ${(props) => props.theme['purple']};
    border: 0;
    background-color: transparent;
    cursor: pointer;
`

export const SquareButton = styled.button`
    padding: 8px;
    border: 0;
    border-radius: 8px;
    height: 38px;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['white']};
    cursor: pointer;
`

export const ActionsButtons = styled.div`
    display: flex;
    gap: 8px;
`