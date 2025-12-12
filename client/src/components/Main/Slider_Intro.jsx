import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination } from 'swiper/modules';

const images = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/a/3/9/5/a395f1d9f7e223b4cdba30b86e4ce4bb.jpg",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/b/f/b/7/bfb7c56caf51ea8f32c31fe777051f2f.jpg",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/a/3/9/5/a395f1d9f7e223b4cdba30b86e4ce4bb.jpg",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/b/f/b/7/bfb7c56caf51ea8f32c31fe777051f2f.jpg",
  },
]

export default function SliderIntro() {
  
  return (
    <div className=''>
      <Swiper allowTouchMove={false} autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }} navigation={true} modules={[Pagination, Autoplay]} className="mySwiper">
        {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt="Ảnh" />
        </SwiperSlide>

        ))}
      </Swiper>
    </div>
  )
}
