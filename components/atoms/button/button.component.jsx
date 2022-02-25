import React from 'react'

// Data
import { defaultStore } from '../../../state/store';

// Style
import { ButtonStyles } from './button.styles';

const ButtonComponent = ({ label, handleClick }) => {
    return (
        <ButtonStyles onClick={ handleClick } >
            { label }
        </ButtonStyles>
    )
}

export default ButtonComponent