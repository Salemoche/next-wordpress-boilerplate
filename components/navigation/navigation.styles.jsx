import styled, { css } from 'styled-components'
import { IconStyles } from '../../styles/global-components.styles';
import defaultTheme from '../../styles/theme'

export const NavigationStyles = styled('div')`

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: ${ defaultTheme.zIndices.navigation };

    .bs-main-menu {
        display: flex;
        justify-content: space-between;
        width: ${ props => props.theme.contentWidthL }px;
        max-width: 100vw;
        margin: 0 auto;
        padding: ${ props => props.theme.spaceM }px;
    }

    .bs-menu-item {
        text-decoration: none;

        &.active {
            text-decoration: underline;
        }
    }

    ${ ({ device, menuOpen }) => {
        if ( device.mode === 'tablet' || device.mode === 'mobile' ) {
            return css`

                .bs-main-menu {
                    width: 100vw;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    position: fixed;
                    background: white;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    pointer-events: ${ menuOpen ? 'all' : 'none' };
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
