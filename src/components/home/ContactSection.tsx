"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-4xl space-y-8">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
          [05] // DIRECT COMMUNICATION
        </span>

        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-primary leading-[1.08]">
          LET&apos;S BUILD SOMETHING INTELLIGENT.
        </h2>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Always open to software engineering opportunities, applied AI engineering initiatives, research collaborations, and ambitious systems builds.
        </p>

        {/* Email & Actions */}
        <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
          <a
            href={`mailto:${siteConfig.email}`}
            className="px-6 py-3.5 rounded bg-text-primary text-canvas font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            <span>{siteConfig.email}</span>
            <span>↗</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="px-5 py-3.5 rounded border border-border-medium text-text-secondary hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            {copied ? "[ Copied to Clipboard ✓ ]" : "[ Copy Email ]"}
          </button>

          <Link
            href="/contact"
            className="px-5 py-3.5 rounded border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-medium transition-colors"
          >
            [ Contact Form ]
          </Link>
        </div>

        {/* Channels */}
        <div className="pt-6 flex items-center gap-6 font-mono text-xs text-text-muted">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            GitHub ↗
          </a>
          <span>•</span>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            LinkedIn ↗
          </a>
          <span>•</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </section>
  );
}
