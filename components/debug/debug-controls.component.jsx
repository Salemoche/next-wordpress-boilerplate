import React, { useState } from 'react'
import ButtonComponent from '../atoms/button/button.component'
import { DebugControlsStyles } from './debug-controls.styles'

const DebugControls = ({ handleClick }) => {

    const [isGrabbing, setIsGrabbing] = useState(false)

    return (
        <DebugControlsStyles 
            onMouseDown={() => { setIsGrabbing(true) }} 
            onMouseUp={() => { setIsGrabbing(false) }}
            onMouseLeave={() => { setIsGrabbing(false) }}
            isGrabbing={ isGrabbing }  
        >
            <ButtonComponent 
                label="Toggle Inverted Mode" 
                handleClick={ handleClick } 
                isGrabbing={ isGrabbing }    
            />
        </DebugControlsStyles>
    )
}

export default DebugControls