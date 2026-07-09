import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { SitePhoto } from "@/components/site-photo";
import { SectionHeading } from "@/components/section-heading";
import { eventTypes, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Groupes & entreprises | Les Acolytes",
  description:
    "Privatisez la salle ou la terrasse des Acolytes pour vos séminaires, cocktails, anniversaires et afterworks, jusqu'à 200 personnes, à l'Oncopole, Toulouse.",
};

export default function GroupesEntreprisesPage() {
  return (
    <>
      <section className="bg-wine py-16 text-cream">
        <Container>
          <SectionHeading
            eyebrow="Groupes & entreprises"
            title="Vos événements, à votre image"
            description="Séminaires professionnels, cocktails d'entreprise, anniversaires ou afterworks entre amis : Les Acolytes se privatisent pour vos moments à partager, en salle, en terrasse, ou les deux."
            light
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SitePhoto
            src="/images/salle-tablees-rouges.webp"
            alt="Salle des Acolytes dressée pour un événement, nappage rouge et chandeliers"
            aspect="aspect-[4/3]"
          />
          <div>
            <h2 className="font-display text-2xl italic text-wine">Une capacité sur mesure</h2>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-ink/10 bg-white/60 p-4">
                <div className="font-display text-3xl italic text-wine">{site.seatsTotal}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">couverts</div>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/60 p-4">
                <div className="font-display text-3xl italic text-wine">{site.seatsInside}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">en salle</div>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/60 p-4">
                <div className="font-display text-3xl italic text-wine">{site.seatsTerrace}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">en terrasse</div>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-ink/75">
              Que vous soyez une dizaine de collègues pour un afterwork ou 200
              convives pour un séminaire complet, notre équipe adapte
              l&apos;espace, la formule et le service à votre événement.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-20">
        <Container>
          <SectionHeading eyebrow="Nos formules" title="Ce que nous organisons pour vous" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="rounded-xl border border-ink/10 bg-white/70 p-5 text-center font-medium text-ink/85"
              >
                {event}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl italic text-wine">Le tournoi de pétanque inter-entreprises</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Une tradition maison : rassemblez vos équipes autour d&apos;un
              tournoi de pétanque convivial, suivi d&apos;un afterwork sur la
              terrasse ombragée. Une formule clé en main, entre compétition et
              franche rigolade.
            </p>
            <div className="mt-6">
              <CtaButton href="/contact" variant="primary">
                Organiser mon événement
              </CtaButton>
            </div>
          </div>
          <SitePhoto
            src="/images/terrasse-moderne.webp"
            alt="Terrasse des Acolytes aménagée, idéale pour un afterwork ou un tournoi de pétanque"
            aspect="aspect-[4/3]"
          />
        </Container>
      </section>

      <section className="bg-ink py-16 text-cream">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl italic sm:text-4xl">Parlons de votre projet</h2>
          <p className="max-w-xl text-cream/75">
            Contactez-nous par téléphone ou par email pour étudier ensemble la
            formule la plus adaptée à votre événement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton href={site.phoneHref} variant="gold">
              {site.phone}
            </CtaButton>
            <CtaButton href={`mailto:${site.email}`} variant="outline">
              {site.email}
            </CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
