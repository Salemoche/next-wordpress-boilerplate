// Base
import React, { useRef, useState, Suspense } from 'react'

// 3D
import { useFrame, extend } from '@react-three/fiber'
import { TestShaderMaterial } from '../../../three/materials/materials';

export function BoxComponenent (props) {

    const shaderRef = useRef()
    const meshRef = useRef()

    extend({ TestShaderMaterial })
    
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.x += props.randomSeed * 0.01;
        meshRef.current.rotation.y += props.randomSeed * 0.01;
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
                <boxGeometry args={[1, 1, 1, 16, 16, 16]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
        </Suspense>
    )
}