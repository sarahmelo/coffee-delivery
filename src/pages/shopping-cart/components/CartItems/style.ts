import styled from 'styled-components'

export const CartItemsContainer = styled.div`
    width: 100%;
`

export const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;


    ::-webkit-scrollbar-thumb {
        background-color: white
    }
`

export const Divider = styled.hr`
    min-height: 1px;
    background-color: #E6E5E5;
    width: 100%;
    border: 0;
`

export const PaymentNote = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const PaymentNoteInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`