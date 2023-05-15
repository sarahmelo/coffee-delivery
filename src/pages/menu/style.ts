import styled from 'styled-components';

export const MenuContainer = styled.section`
    margin: 0 auto;
    max-width: 1120px;
`

export const MenuTitle = styled.div`
    font-weight: 800;
    font-size: 32px;
    font-family: 'Baloo 2';

    color: ${(props) => props.theme.typography.color['base-subtitle']};
`

export const MenuItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 32px;
    justify-items: center;
    margin-top: 54px;
`