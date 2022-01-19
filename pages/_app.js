// Base
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

// Data
import { useDeviceDetector } from '../utils/hooks';
import { defaultStore } from '../state/store';

// Styling
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/global.styles.js';
import LoadingComponent from '../components/loading/loading.component';

//Animation
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';


// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const deviceDetector = useDeviceDetector();
    const [showLoading, setShowLoading] = useState(true)
    const { scrollY, scrollYProgress } = useViewportScroll();

    // Device

    useEffect(() => {
        defaultStore.deviceDetector = deviceDetector;
    }, [ deviceDetector ])

    // Router
    useEffect(() => {
        defaultStore.router = router;
        defaultStore.current.route = router.route;
    }, [ router ])


    // Scroll
    useEffect(() => {

        const unsubscribeScrollY = scrollY.onChange( y => updateScrollY(y))
        const unsubscribeScrollYProgress = scrollYProgress.onChange( y => updateScrollYProgress(y))

        return () => {
            unsubscribeScrollY();
            unsubscribeScrollYProgress();
        }
    }, [])

    const updateScrollY = (y) => {
        defaultStore.current.scrollY = y;
    }

    const updateScrollYProgress = (y) => {
        defaultStore.current.scrollYProgress = y;
    }

    // Debug State

    useEffect(() => {
        console.log('=================== State change ===================')
        console.log(defaultStore)
    }, [ defaultStore ])

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 500);
    })


    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyles/>
            <AnimatePresence>
                { showLoading &&
                <motion.div
                    key="bs-loading"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .1 }}
                >
                    <LoadingComponent/>
                </motion.div>
                }
            </AnimatePresence>
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
