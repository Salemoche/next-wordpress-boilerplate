import { proxy } from "valtio";

export const defaultStore = proxy({
    router: null,
    deviceDetector: { size: 'not defined' },
    headerHeight: 0,
    footerHeight: 0,
    base: {
        siteName: '',
    },
    current: {
        url: '',
        scrollY: 0,
        scrollYProgress: 0
    },
    cookies: {
        allowed: undefined,
    },
    theme: {
        accessible: false,
        negative: false,
    }

})