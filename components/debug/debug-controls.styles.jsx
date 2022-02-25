import styled from 'styled-components';
import defaultTheme from '../../styles/theme'

export const DebugControlsStyles = styled('div')`
    /* position: fixed; */
    background: ${ props => props.theme.backgroundColorInverted };
    z-index: ${ props => props.theme.zIndices.debugControls };
    top: 20px;
    right: 20px;
    padding: ${ props => props.theme.spaceM }px;
    border-radius: ${ props => props.theme.borderRadii[3] };

    cursor: ${ props => props.isGrabbing ? 'grabbing' : 'grab' };
`