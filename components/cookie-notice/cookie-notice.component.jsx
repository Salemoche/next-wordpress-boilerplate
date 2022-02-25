import React from 'react'

// Data
import { defaultStore } from '../../state/store';

// Style
import { CookieNoticeStyles } from './cookie-notice.styles';

// Components
import ButtonComponent from '../atoms/button/button.component';


const CookieNotice = ({ handleClick }) => {
    return (
        <CookieNoticeStyles>
            <ButtonComponent label='i am a button' handleClick={ () => handleClick(true) } />
            <ButtonComponent label='i am a button' handleClick={ () => handleClick(false) } />
        </CookieNoticeStyles>
    )
}

export default CookieNotice