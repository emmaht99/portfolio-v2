import Image from "next/image";
import { Arrow, Book, Lightbulb, Thought } from "@/components/Doodles";
import Scribble from "@/components/Scribble";
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
  phone: "aspect-[405/841]",
};

const frameClasses =
  "overflow-hidden border border-neutral/20 bg-neutral/10 shadow-sm";

const annotationIcons = {
  book: Book,
  lightbulb: Lightbulb,
  thought: Thought,
};

const sizeClasses: Record<NonNullable<ProjectImageAnnotation["size"]>, string> = {
  base: "text-lg",
  lg: "text-xl",
  xl: "text-3xl",
};

const iconSizeClasses: Record<NonNullable<ProjectImageAnnotation["size"]>, string> = {
  base: "h-6 w-6",
  lg: "h-9 w-9",
  xl: "h-12 w-12",
};

export default function MediaFrame({ image }: MediaFrameProps) {
  const aspectClass = aspectBySize[image?.size ?? "standard"];
  const objectFitClass =
    image?.size === "phone" ? "object-contain" : "object-cover";

  return (
    <figure className="flex flex-col gap-2">
      {image ? (
        <div className={`relative ${aspectClass}`}>
          <div className={`absolute inset-0 ${frameClasses}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className={objectFitClass}
            />
          </div>

          {image.annotations?.map((note, index) => {
            const Icon = note.icon ? annotationIcons[note.icon] : null;
            return (
              <div
                key={note.text ?? `${note.className}-${index}`}
                className={`pointer-events-none absolute flex items-center gap-1.5 ${note.className}`}
              >
                {Icon ? (
                  <Icon
                    className={`shrink-0 -rotate-6 text-highlight ${iconSizeClasses[note.size ?? "base"]}`}
                  />
                ) : null}
                {note.text ? (
                  <Scribble
                    className={`text-halo font-handwritten leading-tight text-highlight ${sizeClasses[note.size ?? "base"]}`}
                  >
                    {note.text}
                  </Scribble>
                ) : null}
              </div>
            );
          })}

          {image.annotations
            ?.filter((note) => note.arrowClassName)
            .map((note, index) => (
              <Arrow
                key={`${note.text ?? note.className}-arrow-${index}`}
                className={`pointer-events-none absolute text-highlight ${note.arrowClassName}`}
              />
            ))}
        </div>
      ) : (
        <div className={`relative ${frameClasses} ${aspectClass}`} aria-hidden="true" />
      )}

      {image?.caption ? (
        <figcaption className="text-meta text-neutral">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
