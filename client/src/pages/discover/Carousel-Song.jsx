// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';
const sweeps = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s',
        title: 'Có thể bạn thích',
        category: 'Nhạc remix',
        others: 'Khánh Phương, Mỹ Tâm, Chi Dân',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s',
        title: 'Có thể bạn thích',
        category: 'Nhạc remix',
        others: 'Khánh Phương, Mỹ Tâm, Chi Dân',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s',
        title: 'Có thể bạn thích',
        category: 'Nhạc remix',
        others: 'Khánh Phương, Mỹ Tâm, Chi Dân',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dXp9PsDoO1Poh2gzsDPUuv-iIcXuRTh-ZA&s',
        title: 'Có thể bạn thích',
        category: 'Nhạc remix',
        others: 'Khánh Phương, Mỹ Tâm, Chi Dân',
    },
];
function CarouselSong() {
    const [hoverSong, setHoverSong] = useState(null);

    return (
        <div className="py-10">
            {/* Đây là p1 */}
            <div className=" flex items-center justify-center relative">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}
                    navigation={{
                        prevEl: '.prev-carousel-song',
                        nextEl: '.next-carousel-song',
                    }}
                >
                    {sweeps.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-40 flex bg-linear-65 from-purple-500 to-pink-500
                                          items-start justify-center shadow-2xs rounded-sm p-3 bg-opacity-90"
                                onMouseEnter={() => setHoverSong(index)}
                                onMouseLeave={() => setHoverSong(null)}
                            >
                                <div className="relative overflow-hidden ">
                                    <img
                                        className={`size-[132px] object-cover rounded-sm ${
                                            hoverSong === index &&
                                            'scale-125 transition-all duration-300 ease-in-out'
                                        }`}
                                        src={item.image}
                                        alt={item.category}
                                    />

                                    {hoverSong === index && (
                                        <div
                                            className="border rounded-full absolute top-1/2 -translate-y-1/2
                                                    right-1/2 translate-x-1/2 p-3 border-white"
                                        >
                                            <Play color="white" fill="white" />
                                        </div>
                                    )}
                                </div>
                                <div className="ml-3 flex-col">
                                    <div
                                        className=" w-fit text-[10px] italic px-2.5 font-bold text-white 
                                                rounded-full bg-[#ffffff1a] py-1 uppercase mb-2"
                                    >
                                        {item.title}
                                    </div>
                                    <h3 className="font-bold text-white text-xl my-1 mb-2">
                                        {item.category}
                                    </h3>
                                    <div className="text-sm text-gray-300 ">
                                        {item.others}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    className="next-carousel-song absolute top-1/2 -right-6 
                            bg-black p-2 rounded-full -translate-y-1/2 z-20"
                >
                    <ChevronRight color="white" />
                </div>

                <div
                    className="prev-carousel-song absolute top-1/2 -left-6 
                            bg-black p-2 rounded-full -translate-y-1/2 z-20"
                >
                    <ChevronLeft color="white" />
                </div>
            </div>
        </div>
    );
}

export default CarouselSong;
