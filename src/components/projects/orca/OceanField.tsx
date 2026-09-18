"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function OceanField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Pause when out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Bathymetric Depth Iso-Curves
    const curves = [
      { baseDepth: 0.18, amp: 28, freq: 0.0028, speed: 0.0004, color: "rgba(0, 240, 255, 0.25)", dash: [] },
      { baseDepth: 0.38, amp: 35, freq: 0.0022, speed: 0.0003, color: "rgba(0, 240, 255, 0.4)", dash: [4, 4] },
      { baseDepth: 0.58, amp: 42, freq: 0.0018, speed: 0.00025, color: "rgba(110, 80, 255, 0.3)", dash: [] },
      { baseDepth: 0.78, amp: 32, freq: 0.0024, speed: 0.0002, color: "rgba(0, 240, 255, 0.2)", dash: [6, 6] },
      { baseDepth: 0.92, amp: 22, freq: 0.003, speed: 0.00015, color: "rgba(70, 50, 200, 0.25)", dash: [] },
    ];

    const render = () => {
      if (!isVisible) {
        if (!shouldReduceMotion) {
          animationFrameId = requestAnimationFrame(render);
        }
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Deep obsidian ocean gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#05070c");
      bgGrad.addColorStop(0.5, "#070a14");
      bgGrad.addColorStop(1, "#04060a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient ocean convergence glow
      const glowGrad = ctx.createRadialGradient(
        width * 0.65,
        height * 0.35,
        10,
        width * 0.65,
        height * 0.35,
        width * 0.45
      );
      glowGrad.addColorStop(0, "rgba(0, 240, 255, 0.09)");
      glowGrad.addColorStop(0.6, "rgba(100, 60, 255, 0.04)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw bathymetric contour curves
      curves.forEach((curve) => {
        ctx.beginPath();
        ctx.strokeStyle = curve.color;
        ctx.lineWidth = 1;
        ctx.setLineDash(curve.dash);

        const yBase = height * curve.baseDepth;

        for (let x = 0; x <= width; x += 12) {
          const wave1 = Math.sin(x * curve.freq + time * curve.speed) * curve.amp;
          const wave2 = Math.cos(x * curve.freq * 0.5 - time * curve.speed * 0.8) * (curve.amp * 0.4);
          const y = yBase + wave1 + wave2;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Target Habitat Convergence Polygon (Conceptual synthesis region)
      const targetX = width * 0.68;
      const targetY = height * 0.38;
      const targetRadius = 55;

      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = "rgba(0, 240, 255, 0.65)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 - 0.2;
        const px = targetX + Math.cos(angle) * (targetRadius + (i % 2 === 0 ? 8 : -6));
        const py = targetY + Math.sin(angle) * (targetRadius + (i % 2 === 0 ? 8 : -6));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Subtle fill in target zone
      ctx.fillStyle = "rgba(0, 240, 255, 0.05)";
      ctx.fill();

      // Highlighted planned passage corridor (dashed vector)
      const startX = width * 0.22;
      const startY = height * 0.72;

      ctx.setLineDash([6, 5]);
      ctx.strokeStyle = "rgba(180, 160, 255, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(targetX, targetY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Start Node (Departure anchor)
      ctx.fillStyle = "#a594fd";
      ctx.beginPath();
      ctx.arc(startX, startY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Target Convergence Node (Optimal decision focal point)
      ctx.fillStyle = "#00f0ff";
      ctx.beginPath();
      ctx.arc(targetX, targetY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Ripple ring around target node
      const ripple = (Math.sin(time * 0.002) + 1) * 6;
      ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
      ctx.beginPath();
      ctx.arc(targetX, targetY, 8 + ripple, 0, Math.PI * 2);
      ctx.stroke();

      // Minimal factual technical cartographic labels
      ctx.font = "10px 'IBM Plex Mono', monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.fillText("BATHYMETRIC STRATA // -240M", 24, height * 0.22);
      ctx.fillText("SYNTHESIS CORRIDOR [ACTIVE]", 24, height - 24);

      ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
      ctx.fillText("TARGET ZONE // CONVERGENCE", targetX - 70, targetY - 70);

      time += 16;

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-label="Bathymetric contour and ocean convergence visualization"
      />
      {/* Corner Registration Accents */}
      <div className="absolute top-3 left-3 font-mono text-[10px] text-text-muted/60 select-none">
        [+] 12°N // ISO-DEPTH
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] text-text-muted/60 select-none">
        GEO // CONTOUR FIELD
      </div>
    </div>
  );
}
