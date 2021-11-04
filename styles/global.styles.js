import { createGlobalStyle } from "styled-components";
import theme from './theme'

// Fonts
// import BonVoyageRegular from '../assets/fonts/Bon_Voyage/MADE_Bon_Voyage_Regular.otf'
// import BonVoyageThin from '../assets/fonts/Bon_Voyage/MADE_Bon_Voyage_Thin.otf'

const GlobalStyles = createGlobalStyle`

    /* @font-face {
        font-family: 'Bon Voyage';
        font-weight: 300;
        src: url('/fonts/Bon_Voyage/MADE_Bon_Voyage_Regular.otf') format('opentype');
    } */
    
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100vw;
        overflow-x: hidden;
        font-size: ${ props => theme.fontSizeM}px;
    }

    main {
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
        font-display: block;
    }

`
export default GlobalStyles;