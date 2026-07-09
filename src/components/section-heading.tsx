export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? "text-gold" : "text-wine"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 font-display text-3xl italic sm:text-4xl ${light ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-balance text-base leading-relaxed ${light ? "text-cream/75" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
