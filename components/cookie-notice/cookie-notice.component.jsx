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
            <div className="cookie-notice__message">We use cookies to optimize your User experience.</div>
            <ButtonComponent className="cookie-notice__button" label='accept cookies' handleClick={ () => handleClick(true) } />
            <ButtonComponent className="cookie-notice__button" label='deny cookies' handleClick={ () => handleClick(false) } />
        </CookieNoticeStyles>
    )
}

export default CookieNotice