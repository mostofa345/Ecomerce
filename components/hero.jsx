"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles

const BannerSlider = () => {
  // আপনার ৭টি ব্যানারের লিস্ট
  const banners = [
    "/bannar1.avif",
    "/bannar2.avif",
    "/bannar3.avif",
    "/bannar4.avif",
    "/bannar5.avif",
    "/bannar6.avif",
    "/bannar7.avif",
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-black transition-colors duration-300 py-4">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[180px] sm:h-[300px] md:h-[400px] lg:h-[450px] w-full"
          >
            {banners.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Banner ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover md:object-fill"
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles for Dark Mode & Daraz Look */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #f85606 !important; /* Daraz Orange */
          transform: scale(0.5);
          background: rgba(255, 255, 255, 0.7);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .dark .swiper-button-next,
        .dark .swiper-button-prev {
          background: rgba(0, 0, 0, 0.5);
        }
        .swiper-pagination-bullet-active {
          background: #f85606 !important;
        }
      `}</style>
    </section>
  );
};

export default BannerSlider;