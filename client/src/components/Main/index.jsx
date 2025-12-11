import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
const sweeps = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s",
    title: "Có thể bạn thích",
    category: "Nhạc remix",
    others: "Khánh Phương, Mỹ Tâm, Chi Dân",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s",
    title: "Có thể bạn thích",
    category: "Nhạc remix",
    others: "Khánh Phương, Mỹ Tâm, Chi Dân",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s",
    title: "Có thể bạn thích",
    category: "Nhạc remix",
    others: "Khánh Phương, Mỹ Tâm, Chi Dân",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s",
    title: "Có thể bạn thích",
    category: "Nhạc remix",
    others: "Khánh Phương, Mỹ Tâm, Chi Dân",
  },
];
function Main() {
  return (
    <main className="mt-[47px] ml-60">

        {/* Đây là p1 */}
      <div className="p-5 flex items-center justify-center ">
          <Swiper
            slidesPerView={3}
            navigation={true}
            spaceBetween={20}
          
            modules={[Navigation]}
            className="mySwiper"
          >
            {sweeps.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-52 flex bg-sky-700 items-center justify-center shadow-2xs">
                  <img
                    className="size-[132px] object-cover"
                    src={item.image}
                    alt={item.category}
                  />
                  <div className="ml-3 flex-col">
                    <div className=" w-fit text-sm italic px-2.5 font-bold text-white rounded-full bg-[#ffffff1a] ">
                      {item.title}
                    </div>
                    <h3 className="font-bold text-white text-xl my-1">{item.category}</h3>
                    <div className="text-[14px] text-gray-800 ">{item.others}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </main>
  );
}

export default Main;
