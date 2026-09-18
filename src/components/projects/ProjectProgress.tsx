"use client";

import React, { useEffect, useState } from "react";

export interface ProgressItem {
  id: string;
  label: string;
  index: string;
}

interface ProjectProgressProps {
  items: ProgressItem[];
}

export function ProjectProgress({ items }: ProjectProgressProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(items[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Case study section progress"
      className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40 bg-surface-lowest/70 backdrop-blur-md border border-border-subtle/80 p-3 rounded-xl shadow-xl transition-all"
    >
      <div className="flex flex-col space-y-2 font-mono text-[11px]">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2.5 text-left py-1 px-2 rounded transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-accent-cyan ${
                isActive
                  ? "text-accent-cyan font-medium bg-surface-elevated/60"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                  isActive ? "bg-accent-cyan" : "bg-border-active"
                }`}
              />
              <span className="opacity-70">{item.index}</span>
              <span className="tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
