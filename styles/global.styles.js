import { createGlobalStyle } from "styled-components";
import theme from './theme'

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
    }
    
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100vw;
        overflow-x: hidden;
        font-size: ${ theme.fontSizeM }px;
        font-family: ${ theme.fontFamilyDefault };
        color: ${ theme.colorBlack };
    }

    main {
        width: 100%;
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
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

    p {
        margin: 0;
    }

    a {
        color: ${ theme.colorBlack };
    }

`
export default GlobalStyles;