"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { ProjectImage } from "@/mock/projects";

interface GallerySliderProps {
  images: ProjectImage[];
}

const GallerySlider = ({ images }: GallerySliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full">
      {/* Ảnh lớn */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={12}
        className="rounded-2xl mb-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Image */}
              <img
                src={img.url}
                alt={img.title ?? ""}
                className="
                  w-full
                  aspect-video
                  object-cover
                  rounded-2xl
                  border border-white/10
                "
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Title + Subtitle */}
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

      {/* Thumbnail */}
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.url}
              alt=""
              className="
                h-24
                w-full
                object-cover
                rounded-xl
                cursor-pointer
                opacity-60
                transition
                hover:opacity-100
                overflow-hidden
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
