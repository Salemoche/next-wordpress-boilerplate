import styled from 'styled-components'
import theme from '../../styles/theme'
// import { ContentStyles } from '../../styles/global-components.styles';

export const FooterStyles = styled('div')`
    width: ${ theme.contentWidthL }px;
    max-width: 100%;
    margin: 0 auto;
    padding: ${ theme.spaceM }px;
    display: flex;
    justify-content: center;

    a {
        margin-left: 5px;
    }
`