import React from 'react'
import ButtonComponent from '../atoms/button/button.component'
import { DebugControlsStyles } from './debug-controls.styles'

const DebugControls = ({ handleClick }) => {
  return (
    <DebugControlsStyles>
        <ButtonComponent label="Toggle Inverted Mode" handleClick={ handleClick } />
    </DebugControlsStyles>
  )
}

export default DebugControls