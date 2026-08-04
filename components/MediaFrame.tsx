import Image from "next/image";
import type { ProjectImage } from "@/lib/projects";

type MediaFrameProps = {
  image?: ProjectImage;
};

export default function MediaFrame({ image }: MediaFrameProps) {
  return (
    <figure className="flex flex-col gap-2">
      {image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral/10">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-neutral/10" aria-hidden="true" />
      )}

      {image?.caption ? (
        <figcaption className="text-meta text-neutral">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
