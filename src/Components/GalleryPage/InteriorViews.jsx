import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { GalleryInterior } from "../../../public/images/assets";
// استيراد ملفات الـ CSS الأساسية
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs"; // مهم لمظهر الـ Thumbs

export default function InteriorViews() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="bg-[#2F3344] ">
      <div className="container mx-auto px-4 my-15 py-8">
        <div className="text-center my-10 text-white">
          <h1>Interior Views</h1>
          <p className="text-2xl md:text-4xl">Uncover the guesthouse's charm and character.</p>
        </div>

        <div className="my-gallery-container">
    
          <div className="my-20 flex justify-center ">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={0}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              className="mySwiper"
            >
              {GalleryInterior.map((Gallery, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={Gallery.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-40 h-20 md:h-40 p-4 hover:rotate-6 transition-transform duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {GalleryInterior.map((Gallery, index) => (
              <SwiperSlide key={index}>
                <div className="px-4 md:px-32 w-full ">
                  <img
                    src={Gallery.image}
                    alt={`Slide ${index + 1}`}
                    className="h-[330px] md:h-[500px] w-full"
                  />
                  <p className="text-white mt-5">{Gallery.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
