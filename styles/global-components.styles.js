
import styled from 'styled-components';

export const ContentStyles = styled('div')`
    display: block;
    width: ${ props => props.theme.contentWidthL }px;
    max-width: 100vw;
    margin: 0 auto;
    padding: ${ props => props.theme.spaceM }px;
`

export const IconStyles = styled('div')`
    display: block;
    width: ${ props => props.theme.spaceM }px;
    height: ${ props => props.theme.spaceM }px;

    svg {
        width: 100%;
        height: 100%;
    }
`