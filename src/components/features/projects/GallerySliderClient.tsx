"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import type { Swiper as SwiperType } from "swiper";

import { ProjectImage } from "@/mock/projects";

interface Props {
  images: ProjectImage[];
}

export default function GallerySliderClient({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full">
      {/* Main image */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={12}
        className="rounded-2xl mb-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
              <Image
                src={img.url}
                alt={img.title ?? ""}
                fill
                className="object-cover"
                priority={i === 0}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode
        watchSlidesProgress
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-24 w-full rounded-xl overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition">
              <Image
                src={img.url}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
