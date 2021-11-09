import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import vertexShader from '../shaders/test/vertex.glsl';
import fragmentShader from '../shaders/test/fragment.glsl';

export const TestShaderMaterial = shaderMaterial(
    { uColor: new THREE.Color( 0.8, 0, 0.7 ), uTime: 0.4 },
    // vertex shader
    vertexShader,
    // fragment shader
    fragmentShader
)