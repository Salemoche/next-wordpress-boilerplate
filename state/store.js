import { proxy } from "valtio";

export const defaultStore = proxy({
    router: null,
    deviceDetector: { size: 'not defined' },
    headerHeight: 0,
    footerHeight: 0,
    base: {
        siteName: '',
    },
    currentPage: {
        url: ''
    }

})