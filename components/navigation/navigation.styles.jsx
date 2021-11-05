import styled, { css } from 'styled-components'
import { ContentStyles, IconStyles } from '../../styles/global-components.styles';

export const NavigationStyles = styled(ContentStyles)`

    position: fixed;
    top: 0;
    left: 0;

    .sm-main-menu {
        display: flex;
        justify-content: space-between;
    }

    ${ ({ size, menuOpen }) => {
        if ( size === 'medium' || size === 'small' || size === 'extra-small' ) {
            return css`

                .sm-main-menu {
                    width: 100vw;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    position: fixed;
                    background: white;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `
        }
    }};
    
`

export const MenuIconStyles = styled(IconStyles)`
    display: flex;
    position: absolute;
    right: ${ props => props.theme.spaceM }px;
    top: ${ props => props.theme.spaceM }px;
    cursor: pointer;
`
