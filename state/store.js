import { proxy } from "valtio";


export const defaultStore = proxy({
    deviceDetector: { size: 'not defined' },
    headerHeight: 0,
    footerHeight: 0,
})