"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

export type SheshState = "idle" | "focused" | "interacting";

export interface SheshCoreProps {
  state?: SheshState;
  activeLevel?: number; // 0, 1, 2, 3
  className?: string;
  onStateChange?: (state: SheshState) => void;
}

export function SheshCore({
  state: externalState,
  activeLevel = 0,
  className = "",
  onStateChange,
}: SheshCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Internal state tracking
  const [internalState, setInternalState] = useState<SheshState>("idle");
  const effectiveState = externalState || internalState;

  const [webglSupported, setWebglSupported] = useState(true);

  // Animation & WebGL state refs to avoid re-renders during 60fps loop
  const stateRef = useRef({
    gl: null as WebGLRenderingContext | null,
    program: null as WebGLProgram | null,
    animationFrameId: 0,
    startTime: 0,
    lastTime: 0,
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    hoverStrength: 0,
    targetHover: 0,
    pulseStrength: 0,
    isVisible: true,
    isTabActive: true,
    activeLevel: activeLevel,
    effectiveState: effectiveState,
    shouldReduceMotion: !!shouldReduceMotion,
  });

  useEffect(() => {
    stateRef.current.activeLevel = activeLevel;
    stateRef.current.effectiveState = effectiveState;
    stateRef.current.shouldReduceMotion = !!shouldReduceMotion;
  }, [activeLevel, effectiveState, shouldReduceMotion]);

  // Handle user click pulse (purely visual harmonic wave)
  const handleCoreClick = useCallback(() => {
    stateRef.current.pulseStrength = 1.0;
    setInternalState("interacting");
    if (onStateChange) onStateChange("interacting");

    const timer = setTimeout(() => {
      const nextState = stateRef.current.targetHover > 0.5 ? "focused" : "idle";
      setInternalState(nextState);
      if (onStateChange) onStateChange(nextState);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onStateChange]);

  // Handle mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    stateRef.current.mouse.targetX = (x / rect.width) * 2 - 1;
    stateRef.current.mouse.targetY = -((y / rect.height) * 2 - 1);
  }, []);

  const handleMouseEnter = useCallback(() => {
    stateRef.current.targetHover = 1.0;
    if (effectiveState !== "interacting") {
      setInternalState("focused");
      if (onStateChange) onStateChange("focused");
    }
  }, [effectiveState, onStateChange]);

  const handleMouseLeave = useCallback(() => {
    stateRef.current.targetHover = 0.0;
    stateRef.current.mouse.targetX = 0;
    stateRef.current.mouse.targetY = 0;
    if (effectiveState !== "interacting") {
      setInternalState("idle");
      if (onStateChange) onStateChange("idle");
    }
  }, [effectiveState, onStateChange]);

  // WebGL initialization and rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
        powerPreference: "low-power",
      }) ||
      (canvas.getContext(
        "experimental-webgl"
      ) as WebGLRenderingContext | null);

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    stateRef.current.gl = gl;

    // Vertex Shader: Fullscreen quad
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: SHESH ORB V2.2 — CONCENTRATED INTELLIGENCE FIELD
    // Perceptual graphite core, drifting cyan light leaks, broken boundary contrast, hierarchical motion
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_hover;
      uniform float u_pulse;
      uniform float u_level;
      uniform float u_reducedMotion;

      // Fast Simplex 3D Noise by Stefan Gustavson
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(vec4(i, 0.0)).xyz;
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        // Normalized centered coordinates
        vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        // Hierarchical temporal speeds (V2.2: Core very slow, Inner slow, Outer very slow drift)
        float speedMult = u_reducedMotion > 0.5 ? 0.12 : 1.0;
        float t_core  = u_time * (0.022 * speedMult);
        float t_inner = u_time * ((0.052 + u_pulse * 0.09) * speedMult);
        float t_outer = u_time * (0.018 * speedMult);
        float t_drift = u_time * (0.030 * speedMult);

        // Pointer Attention Response (Localized subtle acknowledge & redistribution, not mouse-following)
        vec2 mPos = u_mouse * 0.38;
        float d_mouse = length(st - mPos);
        float attnProximity = smoothstep(0.60, 0.06, d_mouse) * (0.045 + 0.035 * u_hover);
        if (u_reducedMotion > 0.5) attnProximity = 0.0;
        vec2 p = st - normalize(st - mPos + vec2(0.0001, 0.0001)) * attnProximity;

        float dist = length(p);

        // Baseline obsidian background: #08090D
        vec3 obsidian = vec3(0.031, 0.035, 0.051);
        vec3 col = obsidian;

        // --- Multi-Layer Domain Warping ---
        // Primary core flow displacement
        vec2 q = vec2(
          snoise(vec3(p * 2.2, t_core)),
          snoise(vec3(p * 2.2 + vec2(4.7, 1.9), t_core + 0.6))
        );

        // Fluid folds and turbulence
        vec2 r_warp = vec2(
          snoise(vec3(p * 3.0 + q * 0.65, t_inner)),
          snoise(vec3(p * 3.0 + q * 0.65 + vec2(2.5, 6.8), t_inner * 1.1))
        );

        // Micro-fissures in the fluid folds
        float n_micro = snoise(vec3(p * 5.2 + r_warp * 0.45, t_inner * 1.25));

        // Color palette
        vec3 c_cyan     = vec3(0.404, 0.910, 0.976);   // #67E8F9 (Primary identity: concentrated highlights)
        vec3 c_violet   = vec3(0.608, 0.541, 0.984);   // #9B8AFB (Secondary layer: depth behind cyan & deeper folds)
        vec3 c_deepBlue = vec3(0.065, 0.095, 0.220);   // Translucent body absorption
        vec3 c_graphite = vec3(0.016, 0.019, 0.028);   // Near-black quiet dense perceptual core

        // --- 1. Broken Boundary Contrast (Reducing uniform neon outline) ---
        // Modulated spatial threshold: some edge sections fade, some dissolve, some softly emerge
        float edgeNoise = snoise(vec3(p * 2.4 + q * 0.35, t_outer));
        float edgeThreshold = 0.44 + edgeNoise * 0.11;
        float outerEnvelope = smoothstep(edgeThreshold + 0.12, edgeThreshold - 0.08, dist);

        // Localized brightening on interaction
        float attnHighlight = smoothstep(0.50, 0.05, d_mouse) * u_hover;
        outerEnvelope = clamp(outerEnvelope + attnHighlight * 0.12 * smoothstep(0.55, 0.25, dist), 0.0, 1.0);

        // --- 2. Translucent Fluid Body (Absorption layer) ---
        float fluidBody = outerEnvelope * smoothstep(0.52, 0.12, dist + q.x * 0.06) * 0.65;
        col += c_deepBlue * fluidBody;

        // --- 3. Violet Subsurface Depth (Behind cyan, deeper folds) ---
        float foldViolet = pow(clamp(1.0 - abs(r_warp.y * 0.85 + n_micro * 0.35), 0.0, 1.0), 2.2);
        float violetDepth = foldViolet * outerEnvelope * (0.60 + 0.25 * u_hover);
        col += c_violet * violetDepth * 0.48;

        // --- 4. Concentrated Cyan Energy (Drifting Light Leaks through Translucent Material) ---
        // Light vector drifts slowly so illumination is never uniformly distributed
        vec2 lightDir = normalize(vec2(cos(t_drift), sin(t_drift * 0.82)));
        float lightLeak = clamp(dot(normalize(p + vec2(0.0001, 0.0001)), lightDir) * 0.5 + 0.5, 0.0, 1.0);
        lightLeak = pow(lightLeak, 1.5);

        // Sharp crests of cyan leaking through the fluid folds
        float foldCyan = pow(clamp(1.0 - abs(r_warp.x), 0.0, 1.0), 3.4);
        float cyanLeak = foldCyan * outerEnvelope * (0.35 + 0.65 * lightLeak) * (0.80 + 0.35 * u_hover + 0.55 * u_pulse);
        col += c_cyan * cyanLeak * 0.88;

        // --- 5. The Perceptual Core (Concentrated Intelligence Inside the Field) ---
        // Off-center, asymmetric, organic cluster of optical density (NOT a literal black ball)
        vec2 coreCenter = vec2(
          snoise(vec3(1.2, 0.5, t_core)),
          snoise(vec3(3.8, 8.1, t_core * 0.85))
        ) * 0.06;

        float r_core = length(p - coreCenter);
        float coreDeform = snoise(vec3(p * 3.8 + q * 0.5, t_core * 1.3));
        float coreBoundary = 0.22 + coreDeform * 0.06;
        float coreDensity = smoothstep(coreBoundary + 0.06, coreBoundary - 0.06, r_core);

        // Core subsurface fissures (internal light passing through the dense mass)
        float fissure = pow(clamp(1.0 - abs(q.x * 0.9 + r_warp.y * 0.3), 0.0, 1.0), 3.6);
        vec3 coreFissureColor = mix(c_violet * 0.6, c_cyan * 0.9, 0.45);
        vec3 coreInterior = mix(c_graphite, c_graphite + coreFissureColor * fissure * 0.75, fissure * 0.65);

        // Blend perceptual core inside the field (internal shadow + density)
        col = mix(col, coreInterior, coreDensity * 0.84);

        // Folds wrapping around the perceptual core
        float coreWrap = pow(clamp(1.0 - abs(coreDeform), 0.0, 1.0), 2.6) * smoothstep(0.32, 0.10, r_core);
        col += c_violet * coreWrap * 0.35;

        // --- 6. Click Disturbance (Deep, controlled disturbance propagating outward from core) ---
        if (u_pulse > 0.005) {
          float distFromCore = length(p - coreCenter);
          float waveFront = u_pulse * 0.46;
          float wave = smoothstep(0.055, 0.0, abs(distFromCore - waveFront)) * (1.0 - u_pulse * 0.80) * outerEnvelope;
          col += mix(c_cyan, c_violet, 0.35) * wave * 0.60;
        }

        // --- 7. Final Contrast & Soft Dissolution into #08090D ---
        // Soft outer silhouette emerging from contrast rather than a continuous neon outline
        col = mix(obsidian, col, outerEnvelope);

        // Deep contrast clamp
        col = clamp(col, 0.0, 1.0);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Compile helper
    const createShader = (
      type: number,
      source: string
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebglSupported(false);
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }

    stateRef.current.program = program;

    // Quad geometry (2 triangles)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uHover = gl.getUniformLocation(program, "u_hover");
    const uPulse = gl.getUniformLocation(program, "u_pulse");
    const uLevel = gl.getUniformLocation(program, "u_level");
    const uReducedMotion = gl.getUniformLocation(program, "u_reducedMotion");

    // Dynamic resolution handling with mobile optimization
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      // Cap DPR for optimal GPU performance
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);
      const displayWidth = Math.round(rect.width * dpr);
      const displayHeight = Math.round(rect.height * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // IntersectionObserver to pause loop offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        stateRef.current.isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Visibility change to pause tab when inactive
    const handleVisibilityChange = () => {
      stateRef.current.isTabActive = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Main render loop
    stateRef.current.startTime = performance.now();
    stateRef.current.lastTime = performance.now();

    const render = (currentTime: number) => {
      stateRef.current.animationFrameId = requestAnimationFrame(render);

      // Only render if visible and tab is focused
      if (!stateRef.current.isVisible || !stateRef.current.isTabActive) {
        return;
      }

      const elapsed = (currentTime - stateRef.current.startTime) * 0.001;
      const delta = Math.min(
        (currentTime - stateRef.current.lastTime) * 0.001,
        0.1
      );
      stateRef.current.lastTime = currentTime;

      // Smooth pointer interpolation
      stateRef.current.mouse.x +=
        (stateRef.current.mouse.targetX - stateRef.current.mouse.x) * (delta * 3.5);
      stateRef.current.mouse.y +=
        (stateRef.current.mouse.targetY - stateRef.current.mouse.y) * (delta * 3.5);

      // Smooth hover interpolation
      stateRef.current.hoverStrength +=
        (stateRef.current.targetHover - stateRef.current.hoverStrength) *
        (delta * 4.0);

      // Dampen pulse over time
      if (stateRef.current.pulseStrength > 0.001) {
        stateRef.current.pulseStrength -= delta * 0.44;
        if (stateRef.current.pulseStrength < 0.0) {
          stateRef.current.pulseStrength = 0.0;
        }
      }

      gl.useProgram(program);

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, stateRef.current.mouse.x, stateRef.current.mouse.y);
      gl.uniform1f(uHover, stateRef.current.hoverStrength);
      gl.uniform1f(uPulse, stateRef.current.pulseStrength);
      gl.uniform1f(uLevel, stateRef.current.activeLevel);
      gl.uniform1f(
        uReducedMotion,
        stateRef.current.shouldReduceMotion ? 1.0 : 0.0
      );

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    stateRef.current.animationFrameId = requestAnimationFrame(render);

    const stateObj = stateRef.current;

    // Cleanup resources on unmount
    return () => {
      cancelAnimationFrame(stateObj.animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      observer.disconnect();

      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="SHESH Intelligence Field"
      className={`relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[560px] rounded-3xl bg-transparent overflow-hidden cursor-pointer select-none transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCoreClick}
    >
      {/* Fallback if WebGL is unavailable */}
      {!webglSupported ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#08090D]">
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500/15 via-violet-500/15 to-transparent blur-3xl animate-pulse" />
          <div className="absolute font-mono text-xs text-text-muted">
            SHESH INTELLIGENCE FIELD [STATIC MODE]
          </div>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: "100%", height: "100%" }}
        />
      )}


    </div>
  );
}
