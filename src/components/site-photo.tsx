import Image from "next/image";

export function SitePhoto({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspect} w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority={priority}
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 pt-10">
          <span className="font-display text-sm italic text-cream">{caption}</span>
        </div>
      )}
    </div>
  );
}
