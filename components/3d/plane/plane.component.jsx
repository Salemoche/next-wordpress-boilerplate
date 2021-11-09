// Base
import React, { useRef, useState, Suspense } from 'react'

// 3D
import { useFrame, extend } from '@react-three/fiber'
import { TestShaderMaterial } from '../../../three/materials/testShaderMaterial';

export function PlaneComponenent (props) {

    const shaderRef = useRef()
    const meshRef = useRef()

    extend({ TestShaderMaterial })
    
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => {
        shaderRef.current.uTime = state.clock.elapsedTime;
    })

    return (
        <Suspense>
            <mesh
                {...props}
                scale={clicked ? 1.5 : 1}
                onClick={(event) => click(!clicked)}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}
                ref={meshRef}
            >
                <planeGeometry args={[1, 1, 16, 16]} />
                {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
                <testShaderMaterial attach="material" ref={shaderRef} />
            </mesh>
        </Suspense>
    )
}