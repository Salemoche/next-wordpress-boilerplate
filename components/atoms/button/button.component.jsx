import React from 'react'

// Data
import { defaultStore } from '../../../state/store';

// Style
import { ButtonStyles } from './button.styles';

const ButtonComponent = ({ label, handleClick, className }) => {
    return (
        <ButtonStyles className={ className } onClick={ handleClick } >
            { label }
        </ButtonStyles>
    )
}

export default ButtonComponent