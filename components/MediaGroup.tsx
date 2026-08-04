import MediaFrame from "@/components/MediaFrame";
import type { ProjectImage } from "@/lib/projects";

type MediaGroupProps = {
  images: ProjectImage[];
  emphasis?: "supporting" | "feature";
};

export default function MediaGroup({
  images,
  emphasis = "supporting",
}: MediaGroupProps) {
  if (images.length === 0) return null;

  const gapClass = emphasis === "feature" ? "gap-8" : "gap-6";

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gapClass}`}>
      {images.map((image, index) => (
        <MediaFrame key={`${image.src}-${index}`} image={image} />
      ))}
    </div>
  );
}
