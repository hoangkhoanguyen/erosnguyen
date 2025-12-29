"use client";

import { ReactNode, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface Props {
  children: ReactNode[];
}

export default function GallerySliderClient({ children }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full">
      {/* Main slider */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={12}
        className="mb-4"
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="relative overflow-hidden">
        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesProgress
          spaceBetween={12}
          slidesPerView={3.6}
        >
          {children.map((child, i) => (
            <SwiperSlide key={i}>
              <div className="thumbnail-slide h-24 overflow-hidden rounded-md opacity-60 hover:opacity-100 transition">
                {child}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l from-black to-transparent" />
      </div>
    </div>
  );
}
