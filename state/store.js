import { proxy } from "valtio";


export const defaultStore = proxy({
    deviceDetector: { size: 'not defined' }
})