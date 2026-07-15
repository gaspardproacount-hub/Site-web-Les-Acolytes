import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { SitePhoto } from "@/components/site-photo";
import { SectionHeading } from "@/components/section-heading";
import { CmsEditPencil, CmsAddTile } from "@/components/cms-edit";
import { dessertPhotos, menuCategories as staticMenuCategories, menuNote, site } from "@/lib/content";
import { getCmsCatalog } from "@/lib/cms";

export const metadata: Metadata = {
  title: "La carte | Les Acolytes",
  description:
    "Découvrez la carte du restaurant Les Acolytes à l'Oncopole, Toulouse : menu du jour, entrées, plats et options végétariennes.",
};

export default async function MenuPage() {
  const cmsCatalog = await getCmsCatalog();

  const menuCategories = cmsCatalog
    ? cmsCatalog.map((section, index) => {
        const staticFallback = staticMenuCategories[index % staticMenuCategories.length];
        const photoProduct = section.products.find((p) => p.image_url);
        return {
          title: section.name,
          sectionId: section.id as string | undefined,
          photo: photoProduct
            ? { src: photoProduct.image_url as string, alt: photoProduct.name }
            : staticFallback.photo,
          items: section.products.map((p) => ({
            name: p.name,
            price: p.price != null ? `${p.price.toFixed(2)} €` : "sur demande",
            productId: p.id as string | undefined,
          })),
        };
      })
    : staticMenuCategories.map((category) => ({
        ...category,
        sectionId: undefined as string | undefined,
        items: category.items.map((item) => ({ ...item, productId: undefined as string | undefined })),
      }));

  return (
    <Suspense fallback={null}>
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
                <SitePhoto
                  src={category.photo.src}
                  alt={category.photo.alt}
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
                      <span className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-display italic text-wine">
                          {item.price}
                        </span>
                        {item.productId && (
                          <CmsEditPencil payload={{ type: "edit-product", productId: item.productId }} />
                        )}
                      </span>
                    </li>
                  ))}
                  {category.sectionId && (
                    <li>
                      <CmsAddTile
                        payload={{ type: "add-product", sectionId: category.sectionId }}
                        label="+ Ajouter un plat dans cette rubrique"
                      />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-cream-soft py-20">
        <Container>
          <SectionHeading eyebrow="Et pour finir" title="Nos desserts faits maison" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dessertPhotos.map((photo) => (
              <SitePhoto key={photo.src} src={photo.src} alt={photo.alt} aspect="aspect-[3/4]" />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
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
    </Suspense>
  );
}
