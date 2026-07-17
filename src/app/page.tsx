import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { SitePhoto } from "@/components/site-photo";
import { SectionHeading } from "@/components/section-heading";
import { CmsEditableText, CmsAddTile } from "@/components/cms-edit";
import {
  highlights as staticHighlights,
  menuCategories as staticMenuCategories,
  openingHours as staticOpeningHours,
  site,
} from "@/lib/content";
import { getCmsSiteSettings, getCmsCatalog, getCmsPageBlocks } from "@/lib/cms";

export default async function Home() {
  const [cmsSettings, cmsCatalog, cmsHighlights] = await Promise.all([
    getCmsSiteSettings(),
    getCmsCatalog(),
    getCmsPageBlocks("accueil"),
  ]);

  const address = cmsSettings?.address || site.address;
  const phone = cmsSettings?.phone || site.phone;
  const phoneHref = cmsSettings?.phone ? "tel:" + cmsSettings.phone.replace(/[^\d+]/g, "") : site.phoneHref;
  const email = cmsSettings?.email || site.email;
  const openingHours =
    cmsSettings?.opening_hours && cmsSettings.opening_hours.length
      ? cmsSettings.opening_hours.map((row) => ({ day: row.jour, hours: row.horaires || "Fermé" }))
      : staticOpeningHours;

  const highlights = cmsHighlights
    ? cmsHighlights.map((block) => ({
        title: block.heading,
        description: block.body,
        blockId: block.id as string | undefined,
      }))
    : staticHighlights.map((h) => ({ ...h, blockId: undefined as string | undefined }));

  const menuPreviewItems = cmsCatalog?.[1]?.products.length
    ? cmsCatalog[1].products
        .slice(0, 4)
        .map((p) => ({ name: p.name, price: p.price != null ? `${p.price.toFixed(2)} €` : "sur demande" }))
    : staticMenuCategories[1].items.slice(0, 4);

  return (
    <Suspense fallback={null}>
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hero-plat-service.jpeg"
          alt="Service d'un plat aux Acolytes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <Container className="relative py-20 lg:py-32">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Oncopole · Toulouse
            </span>
            <h1 className="mt-4 font-display text-4xl italic leading-tight sm:text-5xl lg:text-6xl">
              Un ancien cabaret devenu brasserie de caractère
            </h1>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-cream/80">
              Les Acolytes vous accueillent du lundi au vendredi pour un
              déjeuner fait maison, le jeudi soir pour l&apos;afterwork, et
              toute l&apos;année pour vos événements privés — dans un décor
              atypique et une terrasse ombragée à l&apos;olivier.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href={site.reservationUrl} external variant="gold">
                Réserver une table
              </CtaButton>
              <CtaButton href="/menu" variant="outline">
                Découvrir la carte
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="L'esprit de la maison"
            title="Quatre bonnes raisons de pousser la porte"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="relative rounded-2xl border border-ink/10 bg-white/60 p-6">
                {item.blockId ? (
                  <>
                    <CmsEditableText
                      as="h3"
                      value={item.title}
                      target={{ kind: "block", id: item.blockId, field: "heading" }}
                      className="font-display text-xl italic text-wine"
                    />
                    <CmsEditableText
                      as="p"
                      value={item.description}
                      target={{ kind: "block", id: item.blockId, field: "body" }}
                      multiline
                      className="mt-3 block text-sm leading-relaxed text-ink/70"
                    />
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-xl italic text-wine">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.description}</p>
                  </>
                )}
              </div>
            ))}
            <CmsAddTile payload={{ type: "add-block" }} label="+ Ajouter un point fort" />
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SitePhoto
            src="/images/plat-croquette.webp"
            alt="Croquette de poulet du chef dressée en salle"
            caption="Une de nos assiettes signature"
            aspect="aspect-[4/3]"
          />
          <div>
            <SectionHeading
              eyebrow="La carte"
              title="Une cuisine généreuse, faite maison"
              description="Menu du jour dès 15,90 €, plats bistronomiques et options végétariennes, à partager en salle ou sur la terrasse."
            />
            <ul className="mt-8 space-y-3">
              {menuPreviewItems.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-2">
                  <span className="text-ink/85">{item.name}</span>
                  <span className="whitespace-nowrap font-display italic text-wine">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton href="/menu" variant="primary">
                Voir toute la carte
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Infos pratiques"
              title="Nous trouver, nous rejoindre"
            />
            <dl className="mt-8 space-y-4 text-ink/80">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink/50">Adresse</dt>
                <dd className="mt-1">{address}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink/50">Téléphone</dt>
                <dd className="mt-1">
                  <a href={phoneHref} className="hover:text-wine">{phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink/50">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${email}`} className="hover:text-wine">{email}</a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/contact" variant="outline-ink">
                Toutes les infos & contact
              </CtaButton>
              <Link
                href="/groupes-entreprises"
                className="inline-flex items-center text-sm font-medium text-wine underline underline-offset-4"
              >
                Organiser un événement →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white/60 p-8">
            <h3 className="font-display text-xl italic text-wine">Horaires</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {openingHours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4 border-b border-ink/10 pb-2 last:border-none">
                  <span className="font-medium text-ink/70">{row.day}</span>
                  <span className="text-right text-ink/85">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-wine py-16 text-cream">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl italic sm:text-4xl">
            Une envie de privatiser la salle ou la terrasse ?
          </h2>
          <p className="max-w-xl text-cream/80">
            Séminaires, cocktails, anniversaires, afterworks sur mesure : nous
            recevons vos événements professionnels et privés jusqu&apos;à 200
            personnes.
          </p>
          <CtaButton href="/groupes-entreprises" variant="gold">
            Découvrir nos formules
          </CtaButton>
        </Container>
      </section>
    </>
    </Suspense>
  );
}
