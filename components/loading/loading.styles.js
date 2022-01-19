import styled from 'styled-components'
import theme from '../../styles/theme'

export const LoadingStyles = styled('div')`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${ theme.zIndices.loading }
`