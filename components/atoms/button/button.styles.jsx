import styled from 'styled-components';
// import { accessibilityTheme } from '../../../styles/theme';

// const backgroundColor = theme.variants('mode', 'variant', {
//     default: { light: 'gray', dark: 'darkgray' }, 
//     primary: { light: 'blue', dark: 'darkblue' }, 
//     success: { light: 'green', dark: 'darkgreen' },   
//     warning: { light: 'orange', dark: 'darkorange' }, 
// });

export const ButtonStyles = styled.button`
    /* background-color: ${backgroundColor}; */
    /* color: ${accessibilityTheme.color}; */
`;

ButtonStyles.defaultProps = {
    variant: 'default',
};