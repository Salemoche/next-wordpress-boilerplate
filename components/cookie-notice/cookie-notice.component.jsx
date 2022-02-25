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
            <ButtonComponent label='accept cookies' handleClick={ () => handleClick(true) } />
            <ButtonComponent label='deny cookies' handleClick={ () => handleClick(false) } />
        </CookieNoticeStyles>
    )
}

export default CookieNotice