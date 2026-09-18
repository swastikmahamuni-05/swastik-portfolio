"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ProjectShowcase() {
  return (
    <section id="work" className="py-24 border-t border-border-subtle">
      {/* Section Header */}
      <SectionHeading
        indexTag="[01] // SELECTED WORK"
        title="Engineered Systems"
        actionLink={{
          label: "View complete directory",
          href: "/work",
        }}
      />

      {/* Editorial Project Entries */}
      <div className="space-y-12">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-xl border border-border-subtle bg-surface-lowest/40 hover:bg-surface-lowest/80 hover:border-border-active transition-all duration-300 p-6 sm:p-8 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Metadata & Narrative (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Index, Domain, & Status Badge */}
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-text-muted mb-3">
                      <span className="text-accent-cyan font-semibold group-hover:text-accent-cyan-dim transition-colors">
                        {project.index} {"//"}
                      </span>
                      <span>{project.domain}</span>
                      <StatusBadge status={project.status} className="ml-auto sm:ml-0" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-text-secondary mt-1 tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
                    {project.summary}
                  </p>

                  {/* Technology Tags & Action Link */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle/60">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.keyTechList.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-surface-elevated font-mono text-[11px] text-text-muted border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="font-mono text-xs text-text-primary group-hover:text-accent-cyan flex items-center gap-1.5 transition-colors">
                      <span>Case Study</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Frame (5 cols) */}
                <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-lg bg-[#08090f] border border-border-subtle overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
