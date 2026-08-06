import Image from "next/image";
import { Arrow, Book, Lightbulb } from "@/components/Doodles";
import type { ProjectImage, ProjectImageAnnotation } from "@/lib/projects";

type MediaFrameProps = {
  image?: ProjectImage;
};

const aspectBySize: Record<NonNullable<ProjectImage["size"]>, string> = {
  hero: "aspect-[21/9]",
  large: "aspect-[3/2]",
  standard: "aspect-[4/3]",
  wide: "aspect-[2/1]",
  square: "aspect-square",
};

const frameClasses =
  "relative overflow-hidden border border-neutral/20 bg-neutral/10 shadow-sm";

const annotationIcons = {
  book: Book,
  lightbulb: Lightbulb,
};

const sizeClasses: Record<NonNullable<ProjectImageAnnotation["size"]>, string> = {
  base: "text-lg",
  lg: "text-xl",
  xl: "text-3xl",
};

function AnnotationNote({ note }: { note: ProjectImageAnnotation }) {
  const Icon = note.icon ? annotationIcons[note.icon] : null;
  const align = note.align ?? "left";
  const alignClasses = align === "right" ? "items-end text-right" : "items-start text-left";
  const arrowClasses =
    note.placement === "above"
      ? `rotate-[155deg] ${align === "right" ? "-scale-x-100" : ""}`
      : `-rotate-[25deg] ${align === "right" ? "-scale-x-100" : ""}`;

  const label = (
    <div className="flex items-center gap-1.5">
      {Icon ? <Icon className="h-6 w-6 shrink-0 -rotate-6 text-highlight" /> : null}
      <p
        className={`font-handwritten leading-tight text-highlight ${sizeClasses[note.size ?? "base"]}`}
      >
        {note.text}
      </p>
    </div>
  );

  const arrow = (
    <Arrow className={`h-6 w-6 shrink-0 text-highlight ${arrowClasses}`} />
  );

  return (
    <div className={`flex max-w-xs flex-col gap-0.5 ${alignClasses}`}>
      {note.placement === "below" ? arrow : null}
      {label}
      {note.placement === "above" ? arrow : null}
    </div>
  );
}

export default function MediaFrame({ image }: MediaFrameProps) {
  const aspectClass = aspectBySize[image?.size ?? "standard"];
  const above = image?.annotations?.filter((note) => note.placement === "above") ?? [];
  const below = image?.annotations?.filter((note) => note.placement === "below") ?? [];

  return (
    <figure className="flex flex-col gap-3">
      {image ? (
        <>
          {above.length > 0 ? (
            <div className="flex flex-wrap items-end justify-between gap-4">
              {above.map((note) => (
                <AnnotationNote key={note.text} note={note} />
              ))}
            </div>
          ) : null}

          <div className={`${frameClasses} ${aspectClass}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>

          {below.length > 0 ? (
            <div className="flex flex-wrap items-start justify-between gap-4">
              {below.map((note) => (
                <AnnotationNote key={note.text} note={note} />
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className={`${frameClasses} ${aspectClass}`} aria-hidden="true" />
      )}

      {image?.caption ? (
        <figcaption className="text-meta text-neutral">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
