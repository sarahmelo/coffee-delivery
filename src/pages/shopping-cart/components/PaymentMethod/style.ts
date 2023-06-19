import styled from 'styled-components'

export const PaymentMethodForm = styled.form`
    display: flex;
    gap: 12px;
    max-width: 100%;

    @media (max-width: 1145px) {
        flex-direction: column;
    }
`