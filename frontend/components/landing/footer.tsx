import { Sparkles } from "lucide-react";
import Link from "next/link";

import { footerLinks } from "@/components/landing/landing-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold"
              aria-label="AI VentureLab home"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              AI VentureLab
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Multi-Agent AI Startup Research, Validation &amp; Product Planning
              Platform
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Product</p>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          © 2026 AI VentureLab
        </div>
      </div>
    </footer>
  );
}
