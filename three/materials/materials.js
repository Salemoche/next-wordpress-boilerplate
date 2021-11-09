import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import testVertexShader from '../shaders/test/vertex.glsl';
import testFragmentShader from '../shaders/test/fragment.glsl';
import noiseVertexShader from '../shaders/noise/vertex.glsl';
import noiseFragmentShader from '../shaders/noise/fragment.glsl';
import imageNoiseVertexShader from '../shaders/image-noise/vertex.glsl';
import imageNoiseFragmentShader from '../shaders/image-noise/fragment.glsl';

export const TestShaderMaterial = shaderMaterial(
    { uColor: new THREE.Color( 0.8, 0, 0.7 ), uTime: 0.4 },
    testVertexShader,
    testFragmentShader
)

export const NoiseShaderMaterial = shaderMaterial(
    { uColor: new THREE.Color( 0.8, 0, 0.7 ), uTime: 0.4, uNoiseAmp: 0.4, uNoiseSpeed: 0 },
    noiseVertexShader,
    noiseFragmentShader
)

export const ImageNoiseShaderMaterial = shaderMaterial(
    { uColor: new THREE.Color( 0.8, 0, 0.7 ), uTime: 0.4, uNoiseAmp: 0.4, uNoiseSpeed: 0.2, uTexture: new THREE.Texture() },
    imageNoiseVertexShader,
    imageNoiseFragmentShader
)