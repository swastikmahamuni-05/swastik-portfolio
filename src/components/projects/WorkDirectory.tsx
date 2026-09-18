"use client";

import React, { useState, useMemo } from "react";
import { ProjectData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface WorkDirectoryProps {
  projects: ProjectData[];
}

type FilterCategory = "All" | "AI" | "Systems" | "Full-Stack";

const CATEGORIES: FilterCategory[] = ["All", "AI", "Systems", "Full-Stack"];

export function WorkDirectory({ projects }: WorkDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="space-y-12">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-border-subtle/60" role="tablist" aria-label="Filter projects by category">
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;

          // Don't disable but show count
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-accent-cyan ${
                isActive
                  ? "bg-surface-elevated text-accent-cyan border border-border-active shadow-sm"
                  : "text-text-muted hover:text-text-primary hover:bg-surface-lowest/60 border border-transparent"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] ${isActive ? "text-accent-cyan/80" : "text-text-muted/60"}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="space-y-10 sm:space-y-14">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center rounded-xl border border-dashed border-border-subtle bg-surface-lowest/20">
            <p className="font-mono text-sm text-text-muted">
              No systems listed under category &ldquo;{activeCategory}&rdquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
