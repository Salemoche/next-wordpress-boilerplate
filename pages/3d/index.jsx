// Base
import { useEffect } from 'react';
import React, { useRef, useState } from 'react'

// Data

// Components
import { BoxComponenent } from '../../components/3d/box/box.component';

// Animation
import { motion } from 'framer-motion';
import LayoutComponent from '../../components/layout/layout.component';

// 3D
import { OrbitControls } from '@react-three/drei'
import { FiberStyles } from './3d.styles';
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { PlaneComponenent } from '../../components/3d/plane/plane.component';
import { SphereComponenent } from '../../components/3d/sphere/sphere.component';

    
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
                        {/* <BoxComponenent position={[-1.2, 0, 0]} randomSeed={Math.random()}/> */}
                        <PlaneComponenent position={[0, 0, 0]} />
                        {/* <SphereComponenent position={[0, 0, 0]} /> */}
                        <OrbitControls autoRotate={false} autoRotateSpeed={10} enableZoom={false} enablePan={false} />
                    </Canvas>
                </FiberStyles>
            </LayoutComponent>
        </motion.div>
    )
}

export const getStaticProps = async ( context ) => {
    
    return {
        props: { }
    }
}  
