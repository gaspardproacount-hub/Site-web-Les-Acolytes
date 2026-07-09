import Link from "next/link";
import { Container } from "@/components/container";
import { navLinks, openingHours, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl italic text-gold">{site.name}</span>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Restaurant brasserie installé dans un ancien cabaret réhabilité, à
            deux pas de l&apos;Oncopole, Toulouse.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-cream/70 underline decoration-gold/50 underline-offset-4 hover:text-gold"
          >
            Suivez-nous sur Facebook
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg italic text-gold">Le lieu</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg italic text-gold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>{site.address}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg italic text-gold">Horaires</h3>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            {openingHours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4">
                <span className="text-cream/60">{row.day}</span>
                <span className="text-right">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</span>
          <span>{site.addressLine2}, {site.city}</span>
        </Container>
      </div>
    </footer>
  );
}
