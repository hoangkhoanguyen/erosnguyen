import Image from "next/image";
import GallerySliderClient from "./GallerySliderClient";
import { ProjectImage } from "@/mock/projects";

interface Props {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: Props) {
  return (
    <GallerySliderClient>
      {images.map((img, i) => (
        <div key={i} className="relative aspect-video w-full">
          <Image
            src={img.url}
            alt={img.title ?? ""}
            fill
            className="object-cover rounded-2xl"
            priority={i === 0}
          />

          {(img.title || img.subtitle) && (
            <div className="absolute bottom-5 left-5">
              {img.title && (
                <h3 className="text-white text-xl font-semibold">
                  {img.title}
                </h3>
              )}
              {img.subtitle && (
                <p className="text-white/80 text-lg mt-1">
                  {img.subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </GallerySliderClient>
  );
}
