
uniform vec2 uFrequency;
uniform float uTime;

attribute float aRandom;

varying vec2 vUV;
varying float vElevation;
// varying float vRandom;

void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0 );
}