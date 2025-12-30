import GallerySliderClient from "./GallerySliderClient";
import { ProjectImage } from "@/mock/projects";

interface Props {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: Props) {
  const mainImages = images.map(({ url, title, subtitle }) => ({
    url,
    title,
    subtitle,
  }));

  const thumbImages = images.map(({ url }) => ({ url }));

  return (
    <GallerySliderClient mainImages={mainImages} thumbImages={thumbImages} />
  );
}
