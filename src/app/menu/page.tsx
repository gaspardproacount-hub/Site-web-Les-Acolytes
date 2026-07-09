import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { menuCategories, menuNote, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "La carte | Les Acolytes",
  description:
    "Découvrez la carte du restaurant Les Acolytes à l'Oncopole, Toulouse : menu du jour, entrées, plats et options végétariennes.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-ink py-16 text-cream">
        <Container>
          <SectionHeading
            eyebrow="La carte"
            title="Une cuisine simple, généreuse et de saison"
            description={menuNote}
            light
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-16">
          {menuCategories.map((category, index) => (
            <div key={category.title} className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <PhotoPlaceholder
                  label={`Illustration — ${category.title}`}
                  variant={index % 2 === 0 ? "gold" : "olive"}
                  aspect="aspect-[4/3]"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-display text-2xl italic text-wine">{category.title}</h2>
                <ul className="mt-6 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3"
                    >
                      <span className="text-ink/85">{item.name}</span>
                      <span className="whitespace-nowrap font-display italic text-wine">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-cream-soft py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl italic text-wine sm:text-3xl">
            Envie de réserver votre table ?
          </h2>
          <p className="max-w-lg text-ink/70">
            Réservez en ligne via TheFork ou contactez-nous directement au{" "}
            <a href={site.phoneHref} className="font-medium text-wine">
              {site.phone}
            </a>.
          </p>
          <CtaButton href={site.reservationUrl} external variant="primary">
            Réserver une table
          </CtaButton>
        </Container>
      </section>
    </>
  );
}
