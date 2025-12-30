import Image from "next/image";
import GallerySliderClient from "./GallerySliderClient";
import { ProjectImage } from "@/mock/projects";

interface Props {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: Props) {
  const slides = images.map((img, i) => (
    <div key={i} className="relative aspect-video w-full">
      <Image
        src={img.url}
        alt={img.title ?? ""}
        fill
        className="object-cover rounded-md"
        priority={i === 0}
      />

      {(img.title || img.subtitle) && (
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/90 to-transparent flex items-end">
          <div className="p-5">
            {img.title && (
              <h3 className="text-white text-xl font-semibold">{img.title}</h3>
            )}
            {img.subtitle && (
              <p className="text-white/80 text-lg mt-1">{img.subtitle}</p>
            )}
          </div>
        </div>
      )}
    </div>
  ));

  const thumbs = images.map((img, i) => (
    <div key={i} className="relative aspect-video w-full">
      <Image
        src={img.url}
        alt={img.title ?? ""}
        fill
        className="object-cover"
      />
    </div>
  ));

  return <GallerySliderClient slides={slides} thumbs={thumbs} />;
}
