import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
    display: flex;
    gap: 14px;

    @media (max-width: 1145px) {
        flex-direction: column;
    }
`

export const FirstStep = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 14px;
`

export const SecondStep = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const PaymentRegister = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`

export const EmptyShoppingCart = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-direction: column;
    text-align: center;
    margin-top: 50px;

    div {
        display: block;
    }
`