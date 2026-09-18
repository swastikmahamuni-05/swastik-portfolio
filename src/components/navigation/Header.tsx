"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/projects/");
    }
    return pathname === href;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Left Anchor: Identity */}
          <Link
            href="/"
            className="group flex flex-col justify-center focus-visible:outline-none"
            aria-label="Swastik Mahamuni — Home"
          >
            <span className="font-sans text-sm md:text-base font-semibold tracking-tight text-text-primary group-hover:text-accent-cyan transition-colors">
              SWASTIK MAHAMUNI
            </span>
            <span className="font-mono text-[11px] text-text-muted tracking-wider lowercase">
              software × AI
            </span>
          </Link>

          {/* Right Anchor: Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider"
          >
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.href);
              const isShesh = item.name === "SHESH";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 transition-colors duration-200 ${
                    active
                      ? isShesh
                        ? "text-accent-violet font-medium"
                        : "text-accent-cyan font-medium"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                        isShesh ? "bg-accent-violet" : "bg-accent-cyan"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex items-center gap-2 py-2 px-3 rounded font-mono text-xs text-text-primary hover:text-accent-cyan transition-colors focus-visible:outline-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="tracking-widest">{mobileOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </header>

      {/* Minimal Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 border-b border-border-subtle"
          >
            <nav className="flex flex-col gap-6 pt-4 font-mono">
              <span className="text-[10px] text-text-muted uppercase tracking-widest pb-2 border-b border-border-subtle">
                INDEX // DIRECTORY
              </span>
              {siteConfig.navigation.map((item) => {
                const active = isActive(item.href);
                const isShesh = item.name === "SHESH";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 group py-2"
                  >
                    <span className="text-xs text-text-muted font-normal tracking-widest group-hover:text-accent-cyan transition-colors">
                      {item.index} {"//"}
                    </span>
                    <span
                      className={`text-2xl font-sans tracking-tight font-semibold transition-colors ${
                        active
                          ? isShesh
                            ? "text-accent-violet"
                            : "text-accent-cyan"
                          : "text-text-primary group-hover:text-accent-cyan"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}

              <Link
                href="/achievements"
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-4 group py-2 pt-4 border-t border-border-subtle/50"
              >
                <span className="text-xs text-text-muted tracking-widest group-hover:text-accent-cyan transition-colors">
                  06 //
                </span>
                <span className="text-lg font-sans tracking-tight text-text-secondary group-hover:text-text-primary transition-colors">
                  ACHIEVEMENTS
                </span>
              </Link>
            </nav>

            {/* Mobile Drawer Footer Info */}
            <div className="border-t border-border-subtle pt-6 flex flex-col gap-3 font-mono text-xs text-text-muted">
              <div className="flex items-center justify-between">
                <span>Pune, India</span>
                <span>swastikmahamuni.in</span>
              </div>
              <a
                href="mailto:swastikmahamuni@gmail.com"
                className="text-text-secondary hover:text-accent-cyan transition-colors"
              >
                swastikmahamuni@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
