// uniform vec3 uColor;
// uniform sampler2D uTexture; // special type for textures

// // varying float vRandom;
// varying vec2 vUV;

// varying float vElevation;
precision mediump float;

uniform vec3 uColor;
uniform float uTime;

varying vec2 vUv;

void main() {
    // gl_FragColor = vec4(vUv.x * 1.0, vUv.y * 1.0, vUv.x * vUv.y * 1.0, 1.0);
    // gl_FragColor = vec4( sin( vUv.x + uTime ), 1.0, 0.5, 1.0);
    // gl_FragColor = vec4( sin( vUv.x + uTime) * uColor, 1.0);
    gl_FragColor = vec4( uColor, 1.0 );
    // gl_FragColor = vec4( sin(vUv.x + uTime * 1.0), sin(vUv.y * 1.0 + uTime), cos(vUv.x * 1.0 + uTime) , 1.0);

}