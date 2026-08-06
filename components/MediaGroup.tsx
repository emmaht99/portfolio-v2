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
  const isPhoneGroup = images.every((image) => image.size === "phone");
  const columnsClass = isPhoneGroup
    ? "grid-cols-2 sm:grid-cols-4"
    : "grid-cols-1 sm:grid-cols-2";
  const widthClass = isPhoneGroup ? "mx-auto w-full max-w-[220px]" : "";

  return (
    <div className={`grid ${columnsClass} ${gapClass}`}>
      {images.map((image, index) => (
        <div key={`${image.src}-${index}`} className={widthClass}>
          <MediaFrame image={image} />
        </div>
      ))}
    </div>
  );
}
