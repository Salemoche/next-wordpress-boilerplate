// Base
import React, { useRef, useState, Suspense } from 'react'

// 3D
import { useFrame, extend, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { ImageNoiseShaderMaterial } from '../../../three/materials/materials';
// import { glslify } from 'glslify'

// Assets
// import prismImage from '../../../public/img/prism.jpg';

export function PlaneComponenent (props) {

    const shaderRef = useRef()
    const meshRef = useRef()
    
    extend({ ImageNoiseShaderMaterial })

    const texture = new THREE.TextureLoader().load( 'https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2021/07/dreamstime_m_41249358.jpg' );
    console.log(texture);

    // const texture = useLoader( new THREE.TextureLoader, '../../../public/img/prism.jpg' );

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
                {/* <meshStandardMaterial color={'hotpink'} /> */}
                <imageNoiseShaderMaterial attach="material" ref={shaderRef} uTexture={texture} />
            </mesh>
        </Suspense>
    )
}