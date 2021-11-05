// Base
import { useEffect } from 'react';
import React, { useRef, useState } from 'react'

// Data

// Components

// Animation
import { motion } from 'framer-motion';
import LayoutComponent from '../../components/layout/layout.component';

// 3D
import { Canvas, useFrame } from '@react-three/fiber'
import { ContentStyles } from '../../../1_wordpress/styles/global-components.styles';
import { FiberStyles } from './3d.styles';

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}

export default function Fiber ({ }) {

    return (
        <motion.div 
            key="sm-fiber"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
        >
            <LayoutComponent hasNavigation={false} hasFooter={false}>
                <FiberStyles>
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} />
                    </Canvas>
                </FiberStyles>
            </LayoutComponent>
        </motion.div>
    )
}
