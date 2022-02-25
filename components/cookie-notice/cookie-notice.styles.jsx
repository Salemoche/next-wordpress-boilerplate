import styled from 'styled-components';
import defaultTheme from '../../styles/theme'

export const CookieNoticeStyles = styled('div')`
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: ${ defaultTheme.zIndices.cookieNotice }
`