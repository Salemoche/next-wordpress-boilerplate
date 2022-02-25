import styled from 'styled-components';
import defaultTheme from '../../styles/theme'

export const DebugControlsStyles = styled('div')`
    position: fixed;
    background: white;
    z-index: ${ defaultTheme.zIndices.debugControls };
    top: 20px;
    right: 20px;
    padding: ${ defaultTheme.spaceL };
    padding: ${ defaultTheme.borderRadii[3] };
`