import React from 'react'
import { WPBlockStyles } from '../../../styles/global-components.styles'

function TestBlockComponent ( props ) {
    return (
        <WPBlockStyles>
            <h2>This is a test Block</h2>
            <h3>The title is {props.attributes.data.title}</h3>
        </WPBlockStyles>
    )
}

export default TestBlockComponent 
