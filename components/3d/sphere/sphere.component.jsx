// Base
import React, { useRef, useState, Suspense, useEffect } from 'react'

// 3D
import { useFrame, extend } from '@react-three/fiber'
import { NoiseShaderMaterial } from '../../../three/materials/materials';
import { glslify } from 'glslify'
import * as THREE from 'three'

export function SphereComponenent (props) {

    const shaderRef = useRef()
    const meshRef = useRef()
    
    extend({ NoiseShaderMaterial })

    const [isHovered, setIsHovered] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => {
        shaderRef.current.uTime = state.clock.elapsedTime;
        // shaderRef.current.uHovered = hovered;
        let targetNoiseAmpValue;
        let targetNoiseSpeedValue;
    
        if (isHovered == true) {
            targetNoiseAmpValue = 2.0;
            targetNoiseSpeedValue = 0.4;
        } else {
            targetNoiseAmpValue = 0.4;
            targetNoiseSpeedValue = 0.2;
        }
    
        shaderRef.current.uNoiseAmp = THREE.MathUtils.lerp(shaderRef.current.uNoiseAmp, targetNoiseAmpValue, 0.2);
        shaderRef.current.uNoiseSpeed = THREE.MathUtils.lerp(shaderRef.current.uNoiseSpeed, targetNoiseSpeedValue, 0.05);
        console.log(shaderRef.current.uNoiseAmp, shaderRef.current.uNoiseSpeed);
    })

    useEffect(() => {
        // let targetNoiseAmpValue;
    
        // if (setIsHovered == true) {
        //     targetNoiseAmpValue = 10.0;
        // } else {
        //     targetNoiseAmpValue = 0.4;
        // }
    
        // shaderRef.current.uNoiseAmp = THREE.MathUtils.lerp(shaderRef.current.uNoiseAmp, targetNoiseAmpValue, 0.01);
        // console.log(shaderRef.current.uNoiseAmp);

    }, [ shaderRef, isHovered]) 

    // const interpolate = ( callback ) => {
    //     // THREE.MathUtils.lerp(uniforms.mouseIntersects.value, targetValue, 0.1);
    //     let test = THREE.MathUtils.lerp(0, 100, 0.1);
    //     // callback(test);
    //     console.log('lerping', test);
    //     // callback(test);
    // }

    return (
        <Suspense>
            <mesh
                {...props}
                ref={meshRef}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
                // scale={hovered ? 1.5 : 1}
            >
                <sphereGeometry args={[1, 32, 32]} />
                {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
                <noiseShaderMaterial attach="material" ref={shaderRef} wireframe={true} />
            </mesh>
        </Suspense>
    )
}