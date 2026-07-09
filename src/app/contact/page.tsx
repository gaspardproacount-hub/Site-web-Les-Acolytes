import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { CtaButton } from "@/components/cta-button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { openingHours, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Infos & contact | Les Acolytes",
  description:
    "Adresse, horaires et contact du restaurant Les Acolytes à l'Oncopole, Toulouse. Réservez votre table ou écrivez-nous pour vos événements.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink py-16 text-cream">
        <Container>
          <SectionHeading
            eyebrow="Infos & contact"
            title="Venez nous rencontrer"
            description="Une question, une envie de réserver ou d'organiser un événement ? Toutes les informations pratiques sont ici."
            light
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl italic text-wine">Adresse</h2>
              <p className="mt-2 text-ink/80">{site.address}</p>
              <p className="text-ink/60">{site.addressLine2}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl italic text-wine">Contact</h2>
              <p className="mt-2">
                <a href={site.phoneHref} className="text-ink/80 hover:text-wine">{site.phone}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="text-ink/80 hover:text-wine">{site.email}</a>
              </p>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-ink/80 underline decoration-wine/40 underline-offset-4 hover:text-wine"
              >
                Facebook — @lesacolytes31
              </a>
            </div>
            <div>
              <h2 className="font-display text-2xl italic text-wine">Horaires</h2>
              <ul className="mt-3 max-w-sm space-y-2 text-sm">
                {openingHours.map((row) => (
                  <li key={row.day} className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                    <span className="font-medium text-ink/70">{row.day}</span>
                    <span className="text-right text-ink/85">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CtaButton href={site.reservationUrl} external variant="primary">
              Réserver une table en ligne
            </CtaButton>
          </div>

          <div className="space-y-6">
            <PhotoPlaceholder label="Devanture des Acolytes, Oncopole" variant="wine" aspect="aspect-[4/3]" />
            <div className="rounded-2xl border border-ink/10 bg-cream-soft p-6 text-sm text-ink/60">
              Emplacement : 7 chemin des Silos, 31100 Toulouse — zone
              Oncopole / Zone Thibaud, à proximité de la route
              d&apos;Espagne. Carte interactive à venir.
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-20">
        <Container className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Écrivez-nous" title="Une demande particulière ?" align="center" />
          <div className="mt-10 rounded-2xl border border-ink/10 bg-white/70 p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
