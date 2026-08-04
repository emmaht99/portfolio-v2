import Image from "next/image";
import type { ProjectImage } from "@/lib/projects";

type MediaFrameProps = {
  image?: ProjectImage;
};

const aspectBySize: Record<NonNullable<ProjectImage["size"]>, string> = {
  hero: "aspect-[21/9]",
  large: "aspect-[3/2]",
  standard: "aspect-[4/3]",
};

const frameClasses =
  "relative overflow-hidden border border-neutral/20 bg-neutral/10 shadow-sm";

export default function MediaFrame({ image }: MediaFrameProps) {
  const aspectClass = aspectBySize[image?.size ?? "standard"];

  return (
    <figure className="flex flex-col gap-2">
      {image ? (
        <div className={`${frameClasses} ${aspectClass}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
          />
        </div>
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
