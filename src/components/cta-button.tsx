import Link from "next/link";
import { ReactNode } from "react";

const VARIANTS = {
  primary: "bg-wine text-cream hover:bg-wine-dark",
  gold: "bg-gold text-ink hover:bg-[#b8913e]",
  outline: "border border-cream/40 text-cream hover:bg-cream/10",
  "outline-ink": "border border-ink/30 text-ink hover:bg-ink/5",
} as const;

export function CtaButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  external?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${VARIANTS[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
