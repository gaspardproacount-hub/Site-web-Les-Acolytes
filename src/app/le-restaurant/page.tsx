import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Le restaurant | Les Acolytes",
  description:
    "Découvrez l'histoire et l'ambiance du restaurant Les Acolytes, un ancien cabaret réhabilité à l'Oncopole, Toulouse, mené par Lucie & Adrien.",
};

export default function LeRestaurantPage() {
  return (
    <>
      <section className="bg-ink py-16 text-cream">
        <Container>
          <SectionHeading
            eyebrow="Le restaurant"
            title="Un ancien cabaret, réinventé avec caractère"
            description="Derrière une façade discrète de l'Oncopole se cache une salle atypique : fresques baroques, lustres à pampilles, touches animalières dorées et mobilier chiné se mêlent dans un décor aussi chaleureux qu'inattendu."
            light
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
              L&apos;histoire
            </span>
            <h2 className="mt-3 font-display text-3xl italic text-ink">
              Une salle de cabaret devenue brasserie
            </h2>
            <p className="mt-6 leading-relaxed text-ink/75">
              L&apos;ancien cabaret a été rénové avec goût, sans renier son
              caractère atypique : grande fresque façon galerie des glaces,
              lustres à pampilles, statues et objets insolites cohabitent avec
              des tables en bois massif et du cuir noir. Le résultat est une
              salle chaleureuse, décalée, où l&apos;on ne s&apos;attend jamais
              tout à fait à ce que l&apos;on découvre en poussant la porte.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              Aux fourneaux et en salle, Lucie & Adrien et leur équipe
              perpétuent une cuisine de brasserie sincère : produits frais,
              recettes faites maison et générosité, du lundi au vendredi et
              lors de vos événements privés.
            </p>
          </div>
          <PhotoPlaceholder label="Salle — fresque baroque & lustres" variant="wine" aspect="aspect-[4/3]" />
        </Container>
      </section>

      <section className="bg-cream-soft py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <PhotoPlaceholder
            label="Terrasse ombragée à l'olivier"
            variant="olive"
            aspect="aspect-[4/3]"
            className="lg:order-2"
          />
          <div className="lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
              La terrasse
            </span>
            <h2 className="mt-3 font-display text-3xl italic text-ink">
              Un havre de verdure à l&apos;ombre de l&apos;olivier
            </h2>
            <p className="mt-6 leading-relaxed text-ink/75">
              {`${site.seatsTerrace} places à l'ombre des parasols, autour d'un olivier centenaire : la terrasse des Acolytes est l'endroit rêvé pour souffler le temps d'un déjeuner ou prolonger un afterwork en plein air.`}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/70">
              <li>• {site.seatsInside} places en salle</li>
              <li>• {site.seatsTerrace} places en terrasse ombragée</li>
              <li>• {site.seatsTotal} couverts au total</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <SectionHeading
            eyebrow="L'équipe"
            title="Lucie & Adrien vous reçoivent"
            description="Aux commandes de la maison, Lucie & Adrien mettent un point d'honneur à recevoir chaque table comme des invités, dans une ambiance conviviale et sans chichis."
            align="center"
          />
          <div className="mt-10 flex justify-center">
            <CtaButton href="/contact" variant="primary">
              Venir nous rencontrer
            </CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
