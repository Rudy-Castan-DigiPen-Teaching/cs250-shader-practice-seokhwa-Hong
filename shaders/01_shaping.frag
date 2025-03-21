#version 300 es
precision mediump float;

#define PI 3.14159265359

/**
 * \file
 * \author Rudy Castan
 * \author Jaejin Chae
 * \date 2025 Spring
 * \par CS250 Computer Graphics II
 * \copyright DigiPen Institute of Technology
*/

uniform vec2 u_resolution;
uniform float u_time;

out vec4 fragColor;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution;

    float y = sin((st.x * PI)) + cos((st.x * PI));

    vec3 color = vec3(y);

    float pct = plot(st, y);
    color = (1.0-pct)*color+pct*vec3(0.0706, 0.0824, 0.8314);

    fragColor = vec4(color, 1.0);
}