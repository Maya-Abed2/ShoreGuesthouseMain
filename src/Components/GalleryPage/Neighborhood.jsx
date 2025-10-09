import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay } from "swiper/modules";
import { FilteredAssets ,assets} from "../../../public/images/assets";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";

export default function Neighborhood() {
  const slideImages = Object.values(FilteredAssets);
  return (
    <div>
      <div className="text-center my-10">
        <h1>The Neighborhood</h1>
        <p className="text-2xl md:text-4xl">
          Wander it's winding streets and soak in the magic.
        </p>
      </div>
      <div>
        <Swiper
          modules={[Virtual, Autoplay]}
          virtual
          spaceBetween={30}
          slidesPerView={3}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slideImages.map((imageSrc, index) => (
            <SwiperSlide
              key={index}
              virtualIndex={index}
              style={{
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                border: "1px solid #ccc",
              }}
            >
              <img
                src={imageSrc}
                alt={`Slide ${index + 1}`}
                className="w-2xl h-20 md:h-70"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" my-30">
        <img src={assets.Neighborhood1} alt="neighborhood" className=" w-full h-[700px]"/>
      </div>
    </div>
  );
}
