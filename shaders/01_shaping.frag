#version 300 es
precision mediump float;

#define MAX_ITER 100

/**
 * \file
 * \author Rudy Castan
 * \author seokhwa hong
 * \date 2025 Spring
 * \par CS250 Computer Graphics II
 * \copyright DigiPen Institute of Technology
*/

uniform vec2 u_resolution;
uniform float u_time;

out vec4 fragColor;

void main() {
    vec2 st = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
    st.x *= u_resolution.x / u_resolution.y;

    vec2 z = st;
    int iter;

    for (iter = 0; iter < 50; iter++) { 
        if (dot(z, z) > 4.0) break;  
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + st;
    }

    float color = float(iter) / 50.0;  
    fragColor = vec4(vec3(color), 1.0);
}