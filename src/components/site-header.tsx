"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { CmsEditableText } from "@/components/cms-edit";
import { navLinks, site } from "@/lib/content";
import type { CmsPageBlock } from "@/lib/cms";

export function SiteHeader({ navBlocks }: { navBlocks?: CmsPageBlock[] | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl italic text-wine">{site.name}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/60">
            {site.tagline}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <CtaButton href={site.reservationUrl} external variant="primary" className="hidden sm:inline-flex">
            Réserver une table
          </CtaButton>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-cream">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link, i) => {
              const active = pathname === link.href;
              const block = navBlocks?.[i];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${active ? "text-wine" : "text-ink/80"}`}
                >
                  {block ? (
                    <CmsEditableText
                      as="span"
                      value={block.heading || link.label}
                      target={{ kind: "block", id: block.id, field: "heading" }}
                    />
                  ) : (
                    link.label
                  )}
                </Link>
              );
            })}
            <CtaButton
              href={site.reservationUrl}
              external
              variant="primary"
              className="mt-2 w-fit sm:hidden"
            >
              Réserver une table
            </CtaButton>
          </Container>
        </div>
      )}
    </header>
  );
}
