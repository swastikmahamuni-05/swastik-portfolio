"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Abstract intelligent topology nodes
    const nodes = [
      { x: 0.22, y: 0.28, vx: 0.0003, vy: 0.0002, label: "SOFTWARE_CORE", radius: 3 },
      { x: 0.72, y: 0.24, vx: -0.0002, vy: 0.0003, label: "AI_INFERENCE", radius: 3.5 },
      { x: 0.48, y: 0.52, vx: 0.0002, vy: -0.0002, label: "SYNAPSE_FABRIC", radius: 4 },
      { x: 0.28, y: 0.76, vx: -0.0002, vy: -0.0003, label: "PHYSICAL_SILICON", radius: 3 },
      { x: 0.78, y: 0.72, vx: 0.0003, vy: -0.0002, label: "EDGE_ROBOTICS", radius: 3 },
      { x: 0.88, y: 0.46, vx: -0.0001, vy: 0.0002, label: "OFFLINE_LINK", radius: 2.5 },
    ];

    let t = 0;

    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric background light
      const bgGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        20,
        width * 0.5,
        height * 0.5,
        width * 0.55
      );
      bgGlow.addColorStop(0, "rgba(0, 229, 255, 0.04)");
      bgGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.025)");
      bgGlow.addColorStop(1, "rgba(6, 7, 13, 0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Subtle background grid
      const gridSize = 48;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
      ctx.lineWidth = 0.75;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and compute screen positions
      const screenNodes = nodes.map((node, i) => {
        const xOffset = Math.sin(t + i * 1.5) * 12;
        const yOffset = Math.cos(t * 0.8 + i * 2.1) * 10;
        return {
          ...node,
          sx: node.x * width + xOffset,
          sy: node.y * height + yOffset,
        };
      });

      // Draw connective topological vectors
      for (let i = 0; i < screenNodes.length; i++) {
        for (let j = i + 1; j < screenNodes.length; j++) {
          const a = screenNodes[i];
          const b = screenNodes[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < width * 0.58) {
            const alpha = (1 - dist / (width * 0.58)) * 0.22;
            ctx.strokeStyle = i % 2 === 0 ? `rgba(0, 229, 255, ${alpha})` : `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 6]);
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Draw nodes and subtle datum labels
      screenNodes.forEach((node, i) => {
        // Outer halo
        const halo = ctx.createRadialGradient(node.sx, node.sy, 1, node.sx, node.sy, node.radius * 3.5);
        halo.addColorStop(0, i % 2 === 0 ? "rgba(0, 229, 255, 0.4)" : "rgba(139, 92, 246, 0.3)");
        halo.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(node.sx, node.sy, node.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = i % 2 === 0 ? "#00e5ff" : "#c4b5fd";
        ctx.beginPath();
        ctx.arc(node.sx, node.sy, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Technical node tag
        ctx.font = "9px 'IBM Plex Mono', monospace";
        ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
        ctx.fillText(node.label, node.sx + 8, node.sy + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full h-[380px] lg:h-[480px] rounded-2xl border border-border-subtle bg-surface-lowest/50 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-3 left-4 font-mono text-[10px] text-text-muted flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        <span>TOPOLOGY // COGNITIVE FABRIC</span>
      </div>
      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-text-muted">
        <span>SUBSTRATE: DISTRIBUTED × EMBEDDED</span>
      </div>
    </motion.div>
  );
}
