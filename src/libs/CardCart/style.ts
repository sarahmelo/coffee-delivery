import styled from 'styled-components';

export const CardCartContainer = styled.div`
    display: flex;
    padding: 8px;
    align-items: flex-start;
    width: 100%;
    gap: 40px;

    @media (max-width: 1145px) {
        gap: 16px;
    }
`

export const Image = styled.img`
    width: 64px;

    @media (max-width: 1145px) {
        display: none;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const CoffeeInfoContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const CounterActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ActionButtons = styled.div`
    display: flex;
    gap: 8px;
`