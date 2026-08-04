import MediaFrame from "@/components/MediaFrame";
import type { ProjectImage } from "@/lib/projects";

type MediaGroupProps = {
  images: ProjectImage[];
};

export default function MediaGroup({ images }: MediaGroupProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {images.map((image, index) => (
        <MediaFrame key={`${image.src}-${index}`} image={image} />
      ))}
    </div>
  );
}
