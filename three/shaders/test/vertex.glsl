
precision mediump float;

uniform vec3 uColor;
uniform float uTime;

varying vec2 vUv;

void main() {

    vUv = uv;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}