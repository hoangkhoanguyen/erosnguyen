import { ProjectImage } from "@/mock/projects";
import GallerySliderClient from "./GallerySliderClient";

interface Props {
  images: ProjectImage[];
}

export default function GallerySlider({ images }: Props) {
  return (
    <section className="w-full">
      <GallerySliderClient images={images} />
    </section>
  );
}
