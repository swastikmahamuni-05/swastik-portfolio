import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-canvas mt-auto transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Brand & Identity */}
          <div className="space-y-1 max-w-sm">
            <span className="font-sans text-sm font-bold tracking-tight text-text-primary block uppercase">
              {siteConfig.name}
            </span>
            <p className="font-mono text-xs text-text-muted">
              {siteConfig.positioning}
            </p>
            <p className="font-mono text-[11px] text-text-muted pt-1">
              {siteConfig.location}
            </p>
          </div>

          {/* Primary Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-accent-cyan transition-colors"
              >
                {item.name.charAt(0) + item.name.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Channel Row */}
        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={siteConfig.socials.email}
              className="hover:text-accent-cyan transition-colors"
            >
              Email ↗
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>{siteConfig.domain}</span>
            <span className="text-border-medium">•</span>
            <span>© {siteConfig.copyrightYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

