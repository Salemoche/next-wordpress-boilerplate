// Base
import React, { useRef, useState, Suspense } from 'react'

// 3D
import { useFrame, extend } from '@react-three/fiber'
import { TestShaderMaterial } from '../../../three/materials/materials';
import { glslify } from 'glslify'

export function PlaneComponenent (props) {

    const shaderRef = useRef()
    const meshRef = useRef()

    extend({ TestShaderMaterial })

    useFrame((state, delta) => {
        shaderRef.current.uTime = state.clock.elapsedTime;
    })

    return (
        <Suspense>
            <mesh
                {...props}
                ref={meshRef}
            >
                <planeGeometry args={[3, 3, 32, 32]} />
                {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
                <testShaderMaterial attach="material" ref={shaderRef} wireframe={true} />
            </mesh>
        </Suspense>
    )
}