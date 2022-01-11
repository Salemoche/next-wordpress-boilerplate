// Base
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

// Data
import { useDeviceDetector } from '../utils/hooks';
import { defaultStore } from '../state/store';

// Styling
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/global.styles.js';

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const deviceDetector = useDeviceDetector();

    useEffect(() => {
        defaultStore.deviceDetector = deviceDetector;
    }, [ deviceDetector ])

    useEffect(() => {
        defaultStore.router = router.route;
        defaultStore.current.route = router.route;
    }, [ router ])

    useEffect(() => {
        console.log('=================== State change ===================')
        console.log(defaultStore)
    }, [ defaultStore ])


    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyles/>
            <AnimatePresence 
                exitBeforeEnter={true}
                initial={false}
            >
                <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
        </ThemeProvider>
        
    )
}

export default MyApp
