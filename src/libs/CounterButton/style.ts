import styled from 'styled-components'

export const CounterButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 6px;
    gap: 8px;
    width: fit-content;
    
    background-color: ${(props) => props.theme.base['base-button']};
`
export const ActionButton = styled.button`
    color: ${(props) => props.theme.brand['purple']};
    border: 0;
    background-color: transparent;
    cursor: pointer;
`