"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function AumbyteHeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let scanY = 0;
    let scanDir = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

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

      // Organic dark botanical background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#050907");
      bgGrad.addColorStop(0.5, "#070e0b");
      bgGrad.addColorStop(1, "#040705");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient foliage chlorophyll radiance
      const leafGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        20,
        width * 0.5,
        height * 0.5,
        width * 0.45
      );
      leafGlow.addColorStop(0, "rgba(16, 185, 129, 0.08)");
      leafGlow.addColorStop(0.6, "rgba(5, 150, 105, 0.03)");
      leafGlow.addColorStop(1, "transparent");
      ctx.fillStyle = leafGlow;
      ctx.fillRect(0, 0, width, height);

      // Central Leaf Contour Geometry (Botanical Silhouette)
      const cx = width * 0.5;
      const cy = height * 0.5;
      const leafWidth = width * 0.36;
      const leafHeight = height * 0.72;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - leafHeight * 0.45);
      // Right curve
      ctx.bezierCurveTo(
        cx + leafWidth * 0.75,
        cy - leafHeight * 0.2,
        cx + leafWidth * 0.65,
        cy + leafHeight * 0.3,
        cx,
        cy + leafHeight * 0.45
      );
      // Left curve
      ctx.bezierCurveTo(
        cx - leafWidth * 0.65,
        cy + leafHeight * 0.3,
        cx - leafWidth * 0.75,
        cy - leafHeight * 0.2,
        cx,
        cy - leafHeight * 0.45
      );
      ctx.closePath();
      ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Leaf Central Stem (Midrib)
      ctx.beginPath();
      ctx.moveTo(cx, cy - leafHeight * 0.45);
      ctx.lineTo(cx, cy + leafHeight * 0.45);
      ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Lateral Leaf Veins
      const veinPairs = 5;
      for (let i = 1; i <= veinPairs; i++) {
        const t = i / (veinPairs + 1);
        const vy = cy - leafHeight * 0.45 + t * leafHeight * 0.9;
        const span = Math.sin(t * Math.PI) * leafWidth * 0.5;

        // Right vein
        ctx.beginPath();
        ctx.moveTo(cx, vy);
        ctx.quadraticCurveTo(cx + span * 0.6, vy - 10, cx + span, vy - 20);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.2)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Left vein
        ctx.beginPath();
        ctx.moveTo(cx, vy);
        ctx.quadraticCurveTo(cx - span * 0.6, vy - 10, cx - span, vy - 20);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.2)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      ctx.restore();

      // Computer Vision ROI Inspection Box (Subtle analytical bounding frame)
      const roiX = cx - width * 0.16;
      const roiY = cy - height * 0.08;
      const roiW = width * 0.32;
      const roiH = height * 0.26;

      ctx.strokeStyle = "rgba(52, 211, 153, 0.65)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(roiX, roiY, roiW, roiH);
      ctx.setLineDash([]);

      // Corner Registration Brackets on ROI
      const bLen = 10;
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(roiX, roiY + bLen);
      ctx.lineTo(roiX, roiY);
      ctx.lineTo(roiX + bLen, roiY);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(roiX + roiW - bLen, roiY);
      ctx.lineTo(roiX + roiW, roiY);
      ctx.lineTo(roiX + roiW, roiY + bLen);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(roiX, roiY + roiH - bLen);
      ctx.lineTo(roiX, roiY + roiH);
      ctx.lineTo(roiX + bLen, roiY + roiH);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(roiX + roiW - bLen, roiY + roiH);
      ctx.lineTo(roiX + roiW, roiY + roiH);
      ctx.lineTo(roiX + roiW, roiY + roiH - bLen);
      ctx.stroke();

      // Feature Keypoints (Small circular nodes on the leaf structure)
      const keypoints = [
        { x: cx - 24, y: cy - 35 },
        { x: cx + 32, y: cy + 15 },
        { x: cx - 12, y: cy + 42 },
        { x: cx + 18, y: cy - 65 },
      ];

      keypoints.forEach((kp) => {
        ctx.fillStyle = "rgba(52, 211, 153, 0.85)";
        ctx.beginPath();
        ctx.arc(kp.x, kp.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(16, 185, 129, 0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(kp.x, kp.y, 6, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Slow Vision Scanning Line across ROI
      const currentScan = roiY + scanY;
      const scanGrad = ctx.createLinearGradient(roiX, currentScan, roiX + roiW, currentScan);
      scanGrad.addColorStop(0, "rgba(16, 185, 129, 0)");
      scanGrad.addColorStop(0.5, "rgba(52, 211, 153, 0.65)");
      scanGrad.addColorStop(1, "rgba(16, 185, 129, 0)");

      ctx.strokeStyle = scanGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(roiX, currentScan);
      ctx.lineTo(roiX + roiW, currentScan);
      ctx.stroke();

      if (!shouldReduceMotion) {
        scanY += scanDir * 0.45;
        if (scanY >= roiH) scanDir = -1;
        else if (scanY <= 0) scanDir = 1;
      }

      // Minimal Cartographic Labels
      ctx.font = "10px 'IBM Plex Mono', monospace";
      ctx.fillStyle = "rgba(16, 185, 129, 0.8)";
      ctx.fillText("[+] CANOPY_INSPECTION // REGION", roiX, roiY - 8);

      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.fillText("FOLIAGE_SURFACE_ANALYSIS", 24, height - 24);
      ctx.fillText("EDGE_COMPUTE // ACTIVE", width - 160, 24);

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
        aria-label="Computer vision foliage inspection and feature analysis visual"
      />
      <div className="absolute bottom-3 left-3 font-mono text-[10px] text-text-muted/60 select-none">
        BOTANICAL GEOMETRY // 16:10
      </div>
      <div className="absolute top-3 left-3 font-mono text-[10px] text-accent-cyan/60 select-none">
        OPTICAL CANOPY ROI
      </div>
    </div>
  );
}
