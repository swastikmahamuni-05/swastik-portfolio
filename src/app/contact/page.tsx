"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-populate a clean mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 max-w-5xl mx-auto w-full space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan block">
          CONTACT // GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          Let&apos;s Build Something Meaningful
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Open to software engineering roles, full-stack development, applied AI initiatives,
          and research collaborations.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 border-t border-border-subtle items-start">
        {/* Left: Contact Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-text-primary">Direct Communication</h2>
            <p className="text-sm text-text-secondary">
              Reach out directly via email or professional profiles.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-4 rounded-xl border border-border-subtle bg-surface space-y-1">
              <span className="text-text-muted block text-[10px] uppercase">EMAIL</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-base text-text-primary hover:text-accent-cyan transition-colors block font-medium"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-surface space-y-1">
              <span className="text-text-muted block text-[10px] uppercase">LOCATION</span>
              <span className="font-sans text-base text-text-primary block font-medium">
                {siteConfig.location}
              </span>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-surface space-y-1">
              <span className="text-text-muted block text-[10px] uppercase">GITHUB</span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-secondary hover:text-accent-cyan transition-colors block"
              >
                {siteConfig.socials.github.replace("https://", "")} ↗
              </a>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-surface space-y-1">
              <span className="text-text-muted block text-[10px] uppercase">LINKEDIN</span>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-secondary hover:text-accent-cyan transition-colors block"
              >
                {siteConfig.socials.linkedin.replace("https://", "")} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right: Minimal Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-surface space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-text-primary">Send a Message</h2>
            <p className="text-xs sm:text-sm text-text-secondary">
              Fill in your details to open an email draft directly.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 text-center space-y-3 font-mono text-xs">
              <span className="text-accent-cyan text-base font-bold block">
                ✓ EMAIL CLIENT OPENED
              </span>
              <p className="text-text-secondary font-sans text-sm">
                Your draft has been composed in your default mail application. If it didn&apos;t open,
                you can email directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent-cyan underline">
                  {siteConfig.email}
                </a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-text-muted hover:text-text-primary underline text-[11px] pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="font-mono text-xs text-text-secondary block">
                  YOUR NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-surface-lowest text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="font-mono text-xs text-text-secondary block">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-surface-lowest text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-xs text-text-secondary block">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, question, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-surface-lowest text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-accent-cyan text-canvas font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-cyan-dim transition-colors shadow-sm"
              >
                Draft Email Message →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <section className="pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/work"
          className="text-text-secondary hover:text-accent-cyan transition-colors"
        >
          ← Return to Work Directory
        </Link>
        <span className="text-text-muted">
          swastikmahamuni.in
        </span>
      </section>
    </main>
  );
}
