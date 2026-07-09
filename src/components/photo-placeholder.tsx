const VARIANTS = {
  wine: "from-wine-dark via-wine to-[#a8434f]",
  ink: "from-ink via-[#3a2a20] to-[#5c4632]",
  olive: "from-[#2f3a22] via-olive to-[#6b7a52]",
  gold: "from-[#8a6a2a] via-gold to-[#e2c789]",
} as const;

/**
 * Stand-in for a real photograph. The client provided no image assets we could
 * fetch, so every visual slot renders one of these instead of an <img>.
 * Swap for a real photo/next.js <Image> once assets are supplied.
 */
export function PhotoPlaceholder({
  label,
  variant = "wine",
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  variant?: keyof typeof VARIANTS;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      data-photo-placeholder={label}
      className={`relative flex ${aspect} w-full items-end overflow-hidden rounded-2xl bg-gradient-to-br ${VARIANTS[variant]} ${className}`}
    >
      <div className="bg-noise absolute inset-0 opacity-20" />
      <div className="absolute inset-0 border border-white/10" />
      <div className="relative flex w-full items-center justify-between gap-3 p-4">
        <span className="font-display text-sm italic text-cream/90">
          {label}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 text-cream/70"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8.5A2.5 2.5 0 0 1 6.5 6h.879a1.5 1.5 0 0 0 1.06-.44l.923-.92A1.5 1.5 0 0 1 10.422 4h3.156a1.5 1.5 0 0 1 1.06.44l.923.92a1.5 1.5 0 0 0 1.06.44h.879A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-8Z"
          />
          <circle cx="12" cy="12.5" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
