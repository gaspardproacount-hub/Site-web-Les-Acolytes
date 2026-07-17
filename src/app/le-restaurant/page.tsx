import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { SitePhoto } from "@/components/site-photo";
import { site } from "@/lib/content";
import { getCmsPageBlocks } from "@/lib/cms";
import { CmsEditableText } from "@/components/cms-edit";

export const metadata: Metadata = {
  title: "Le restaurant | Les Acolytes",
  description:
    "Découvrez l'histoire et l'ambiance du restaurant Les Acolytes, un ancien cabaret réhabilité à l'Oncopole, Toulouse, mené par Lucie & Adrien.",
};

const HERO_TITLE = "Un ancien cabaret, réinventé avec caractère";
const HERO_DESCRIPTION =
  "Derrière une façade discrète de l'Oncopole se cache une salle atypique : fresques baroques, lustres à pampilles, touches animalières dorées et mobilier chiné se mêlent dans un décor aussi chaleureux qu'inattendu.";

const HISTOIRE_TITLE = "Une salle de cabaret devenue brasserie";
const HISTOIRE_BODY =
  "L'ancien cabaret a été rénové avec goût, sans renier son caractère atypique : grande fresque façon galerie des glaces, lustres à pampilles, statues et objets insolites cohabitent avec des tables en bois massif et du cuir noir. Le résultat est une salle chaleureuse, décalée, où l'on ne s'attend jamais tout à fait à ce que l'on découvre en poussant la porte.\nAux fourneaux et en salle, Lucie & Adrien et leur équipe perpétuent une cuisine de brasserie sincère : produits frais, recettes faites maison et générosité, du lundi au vendredi et lors de vos événements privés.";

const TERRASSE_TITLE = "Un havre de verdure à l'ombre de l'olivier";

const EQUIPE_TITLE = "Lucie & Adrien vous reçoivent";
const EQUIPE_BODY =
  "Aux commandes de la maison, Lucie & Adrien mettent un point d'honneur à recevoir chaque table comme des invités, dans une ambiance conviviale et sans chichis.";

export default async function LeRestaurantPage() {
  const cmsBlocks = await getCmsPageBlocks("le-restaurant");
  // bloc[0]=hero, bloc[1]=histoire, bloc[2]=terrasse, bloc[3]=équipe.
  const heroBlock = cmsBlocks?.[0];
  const histoireBlock = cmsBlocks?.[1];
  const terrasseBlock = cmsBlocks?.[2];
  const equipeBlock = cmsBlocks?.[3];

  return (
    <>
      <section className="bg-ink py-16 text-cream">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Le restaurant</span>
            {heroBlock ? (
              <>
                <CmsEditableText
                  as="h2"
                  value={heroBlock.heading || HERO_TITLE}
                  target={{ kind: "block", id: heroBlock.id, field: "heading" }}
                  className="mt-3 block font-display text-3xl italic text-cream sm:text-4xl"
                />
                <CmsEditableText
                  as="p"
                  value={heroBlock.body || HERO_DESCRIPTION}
                  target={{ kind: "block", id: heroBlock.id, field: "body" }}
                  multiline
                  className="mt-4 block text-balance text-base leading-relaxed text-cream/75"
                />
              </>
            ) : (
              <>
                <h2 className="mt-3 font-display text-3xl italic text-cream sm:text-4xl">{HERO_TITLE}</h2>
                <p className="mt-4 text-balance text-base leading-relaxed text-cream/75">{HERO_DESCRIPTION}</p>
              </>
            )}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
              L&apos;histoire
            </span>
            {histoireBlock ? (
              <>
                <CmsEditableText
                  as="h2"
                  value={histoireBlock.heading || HISTOIRE_TITLE}
                  target={{ kind: "block", id: histoireBlock.id, field: "heading" }}
                  className="mt-3 block font-display text-3xl italic text-ink"
                />
                <CmsEditableText
                  as="p"
                  value={histoireBlock.body || HISTOIRE_BODY}
                  target={{ kind: "block", id: histoireBlock.id, field: "body" }}
                  multiline
                  className="mt-6 block whitespace-pre-line leading-relaxed text-ink/75"
                />
              </>
            ) : (
              <>
                <h2 className="mt-3 font-display text-3xl italic text-ink">{HISTOIRE_TITLE}</h2>
                <p className="mt-6 whitespace-pre-line leading-relaxed text-ink/75">{HISTOIRE_BODY}</p>
              </>
            )}
          </div>
          <SitePhoto
            src="/images/salle-fresque-baroque.webp"
            alt="Salle des Acolytes, fresque baroque et lustres à pampilles"
            aspect="aspect-[4/3]"
          />
        </Container>
      </section>

      <section className="bg-cream-soft py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SitePhoto
            src="/images/hero-terrasse-olivier.webp"
            alt="Terrasse ombragée à l'olivier, parasols rouges des Acolytes"
            aspect="aspect-[4/3]"
            className="lg:order-2"
          />
          <div className="lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
              La terrasse
            </span>
            {terrasseBlock ? (
              <>
                <CmsEditableText
                  as="h2"
                  value={terrasseBlock.heading || TERRASSE_TITLE}
                  target={{ kind: "block", id: terrasseBlock.id, field: "heading" }}
                  className="mt-3 block font-display text-3xl italic text-ink"
                />
                <CmsEditableText
                  as="p"
                  value={
                    terrasseBlock.body ||
                    `${site.seatsTerrace} places à l'ombre des parasols, autour d'un olivier centenaire : la terrasse des Acolytes est l'endroit rêvé pour souffler le temps d'un déjeuner ou prolonger un afterwork en plein air.`
                  }
                  target={{ kind: "block", id: terrasseBlock.id, field: "body" }}
                  multiline
                  className="mt-6 block leading-relaxed text-ink/75"
                />
              </>
            ) : (
              <>
                <h2 className="mt-3 font-display text-3xl italic text-ink">{TERRASSE_TITLE}</h2>
                <p className="mt-6 leading-relaxed text-ink/75">
                  {`${site.seatsTerrace} places à l'ombre des parasols, autour d'un olivier centenaire : la terrasse des Acolytes est l'endroit rêvé pour souffler le temps d'un déjeuner ou prolonger un afterwork en plein air.`}
                </p>
              </>
            )}
            <ul className="mt-6 space-y-2 text-sm text-ink/70">
              <li>• {site.seatsInside} places en salle</li>
              <li>• {site.seatsTerrace} places en terrasse ombragée</li>
              <li>• {site.seatsTotal} couverts au total</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SitePhoto
            src="/images/equipe-facade.webp"
            alt="L'équipe des Acolytes devant la terrasse et son enseigne"
            aspect="aspect-[4/3]"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">L&apos;équipe</span>
            {equipeBlock ? (
              <>
                <CmsEditableText
                  as="h2"
                  value={equipeBlock.heading || EQUIPE_TITLE}
                  target={{ kind: "block", id: equipeBlock.id, field: "heading" }}
                  className="mt-3 block font-display text-3xl italic text-ink"
                />
                <CmsEditableText
                  as="p"
                  value={equipeBlock.body || EQUIPE_BODY}
                  target={{ kind: "block", id: equipeBlock.id, field: "body" }}
                  multiline
                  className="mt-4 block text-balance text-base leading-relaxed text-ink/70"
                />
              </>
            ) : (
              <>
                <h2 className="mt-3 font-display text-3xl italic text-ink">{EQUIPE_TITLE}</h2>
                <p className="mt-4 text-balance text-base leading-relaxed text-ink/70">{EQUIPE_BODY}</p>
              </>
            )}
            <div className="mt-8">
              <CtaButton href="/contact" variant="primary">
                Venir nous rencontrer
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
