import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import defaultImg from "../../../assets/default/default.jpg";


function Agents({ creditsData }) {
    const [loadedImages, setLoadedImages] = useState({});
  
    const handleImageLoad = (id) => {
      setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };
  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={5}
        navigation={{}}
        breakpoints={{
          640: {
            slidesPerView: 3.2,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 7,
          },
          1024: {
            slidesPerView: 7.2,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper w-full h-full"
      >
        {creditsData.crew.slice(0, 10).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer transition-all duration-75 ease-out credits">
              <div className="w-40 h-40 rounded-full relative">
                <img
                  src={
                    loadedImages[item.id]
                      ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                      : defaultImg
                  }
                  alt={item.name}
                  className="w-full h-full rounded-full"
                  onLoad={() => handleImageLoad(item.id)}
                />
                <span className="absolute text-black w-full h-full rounded-full top-0 left-0 bg-white/10 backdrop-blur-sm flex justify-center items-center">
                  {item.department}
                </span>
              </div>
              <div className="py-1">
                <p className="text-slate-200">{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Agents;
