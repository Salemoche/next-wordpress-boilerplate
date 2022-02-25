import { createGlobalStyle } from "styled-components";

// Fonts
// import BonVoyageRegular from '../assets/fonts/Bon_Voyage/MADE_Bon_Voyage_Regular.otf'
// import BonVoyageThin from '../assets/fonts/Bon_Voyage/MADE_Bon_Voyage_Thin.otf'

const GlobalStyles = createGlobalStyle`

    /* lato-regular - latin */
    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/lato-v20-latin/lato-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/lato-v20-latin/lato-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/lato-v20-latin/lato-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/lato-v20-latin/lato-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/lato-v20-latin/lato-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/lato-v20-latin/lato-v20-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
        font-display: swap;
    }

    /* lato-italic - latin */
    @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/lato-v20-latin/lato-v20-latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/lato-v20-latin/lato-v20-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/lato-v20-latin/lato-v20-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/lato-v20-latin/lato-v20-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('/fonts/lato-v20-latin/lato-v20-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/lato-v20-latin/lato-v20-latin-italic.svg#Lato') format('svg'); /* Legacy iOS */
        font-display: swap;
    }

    /* lato-700 - latin */
    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/lato-v20-latin/lato-v20-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/lato-v20-latin/lato-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/lato-v20-latin/lato-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/lato-v20-latin/lato-v20-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/lato-v20-latin/lato-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/lato-v20-latin/lato-v20-latin-700.svg#Lato') format('svg'); /* Legacy iOS */
        font-display: swap;
    }
    
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100vw;
        font-size: ${ props => props.theme.fontSizeS }px;
        font-family: ${ props => props.theme.fontFamilyDefault };
        color: ${ props => props.theme.fontColor };
    }

    main {
        width: 100%;
    }

    html {
        overflow: hidden;
    }

    body {
        overflow-x: hidden;
        scroll-behavior: smooth;
        height: 100vh;
        background-color: ${ props => props.theme.backgroundColor }
    }

    * {
        box-sizing: border-box;
        font-display: block;
    }

    h1,
    h2, 
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    h1 {
        font-size: ${ props => props.theme.fontSizeXXL }px;
        margin-bottom: ${ props => props.theme.spaceS }px;
    }

    h2 {
        font-size: ${ props => props.theme.fontSizeXXL }px;
        margin-bottom: ${ props => props.theme.spaceS }px;
    }

    h3 {
        font-size: ${ props => props.theme.fontSizeXL }px;
        margin-bottom: ${ props => props.theme.spaceXS }px;
    }

    h4 {
        font-size: ${ props => props.theme.fontSizeL }px;
        margin-bottom: ${ props => props.theme.spaceXS }px;
    }

    h5 {
        font-size: ${ props => props.theme.fontSizeM }px;
        margin-bottom: ${ props => props.theme.spaceXXS }px;
    }

    h6 {
        font-size: ${ props => props.theme.fontSizeS }px;
    }

    p {
        margin: 0;
        margin-bottom: ${ props => props.theme.spaceS }px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    a {
        color: ${ props => props.theme.linkColor };
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        margin: 0;
    }

    figure {
        margin: 0;
    }
    
    img {
        height: auto;
        max-width: 100%;
    }

    button,
    input[type=submit],
    .button,
    .wp-block-file__button {
        cursor: pointer;
        background: black;
        color: white;
        border-radius: ${ props => props.theme.borderRadiusXS };
        padding: ${ props => props.theme.spaceS }px;
        text-decoration: none;
    }

    ::selection {
        background: ${ props => props.theme.colors.black[0] };
        color: white;
    }
    
    /**========================
    *	Accessibility
    *========================*/
    *:focus {
        outline: 2px solid black;
        outline-offset: 3px;
    }
    
    /**========================
    *	Typography
    *========================*/
    

`
export default GlobalStyles;
