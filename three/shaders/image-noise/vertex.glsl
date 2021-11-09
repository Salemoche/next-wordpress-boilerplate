#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

precision mediump float;

uniform vec3 uColor;
uniform float uTime;
uniform float uHovered;
uniform float uNoiseAmp;
uniform float uNoiseSpeed;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vWave;


void main() {

    vUv = uv;

    vec3 pos = position;
    float noiseFreq = 1.5;
    float noiseSpeed = uNoiseSpeed + uTime * 0.1;
    // float minNoiseAmp = 0.5;
    // float maxNoiseAmp = 4.0;
    // float noiseAmp = mix( minNoiseAmp, maxNoiseAmp, uHovered);

    vec3 noisePos = vec3( pos.x * noiseFreq + noiseSpeed, pos.y, pos.z );

    pos.z += snoise3(noisePos) * uNoiseAmp;
    vWave = pos.z;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( pos, 1.0 );
}