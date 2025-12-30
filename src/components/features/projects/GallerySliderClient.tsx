"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface MainImage {
  url: string;
  title?: string;
  subtitle?: string;
}

interface ThumbImage {
  url: string;
}

interface Props {
  mainImages: MainImage[];
  thumbImages: ThumbImage[];
}

export default function GallerySliderClient({
  mainImages,
  thumbImages,
}: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full">
      {/* ===== MAIN ===== */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={12}
        className="mb-4"
      >
        {mainImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-video w-full">
              <Image
                src={img.url}
                alt={img.title ?? "Project image"}
                fill
                className="object-cover rounded-md"
                priority={i === 0}
              />

              {(img.title || img.subtitle) && (
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/90 to-transparent flex items-end rounded-md">
                  <div className="p-5">
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
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== THUMB ===== */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode
        watchSlidesProgress
        spaceBetween={12}
        slidesPerView={3.6}
      >
        {thumbImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-24 w-full overflow-hidden rounded-md opacity-60 hover:opacity-100 transition">
              <Image src={img.url} alt="" fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
