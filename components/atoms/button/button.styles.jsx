import styled from 'styled-components';
import { variant } from 'styled-system'

export const ButtonStyles = styled('button')`
    background: ${ props => props.theme.backgroundColorInverted };
    color: ${ props => props.theme.fontColorInverted };
`;

export const ActiveButtonStyles = styled(ButtonStyles)`

`;

export const InactiveButtonStyles = styled(ButtonStyles)`

`;