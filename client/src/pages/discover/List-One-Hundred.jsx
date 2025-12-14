import { ChevronRight, Ellipsis, Heart, Play } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const list100 = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ySZWzM9_okit3Lfvsg_2tOhMPTFWfDqreA&s",
    title: "Top 100 bài hát nhạc trẻ hay nhất",
    others: "Quang Hùng Master D, Tăng Duy Tân, Quang Đăng Trần",
  },
  {
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/d/6/8/6d688dbf07053314febf3c1efacc1653.jpg",
    title: "Top 100 bài hát nhạc trẻ hay nhất",
    others: "Quang Hùng Master D, Tăng Duy Tân, Quang Đăng Trần",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ySZWzM9_okit3Lfvsg_2tOhMPTFWfDqreA&s",
    title: "Top 100 bài hát nhạc trẻ hay nhất",
    others: "Quang Hùng Master D, Tăng Duy Tân, Quang Đăng Trần",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ySZWzM9_okit3Lfvsg_2tOhMPTFWfDqreA&s",
    title: "Top 100 bài hát nhạc trẻ hay nhất",
    others: "Quang Hùng Master D, Tăng Duy Tân, Quang Đăng Trần",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ySZWzM9_okit3Lfvsg_2tOhMPTFWfDqreA&s",
    title: "Top 100 bài hát nhạc trẻ hay nhất",
    others: "Quang Hùng Master D, Tăng Duy Tân, Quang Đăng Trần",
  },
];

export default function ListOneHundred() {
  const [hoverSong, setHoverSong] = useState(null);
  return (
    <div className="">
      <div className="flex justify-between mb-3.5 mt-[47px] items-center">
        <h3 className="text-xl text-white font-inter font-bold">Top 100</h3>
        <Link
          className="flex items-center gap-1.5 uppercase text-xs text-text-secondary hover:text-hover-link"
          href=""
        >
          Tất cả
          <span className="">
            <ChevronRight />
          </span>
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-5">
          {list100.map((item, index) => (
            <div className="" key={index}>
              <div
                onMouseEnter={() => setHoverSong(index)}
                onMouseLeave={() => setHoverSong(null)}
                className=""
              >
                <div className="relative overflow-hidden">
                  {hoverSong === index && (
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center z-20 gap-3">
                      <div className="p-2 rounded-full hover:bg-white">
                        <Heart color="#fff" size={16} />
                      </div>
                      <div className="p-3 rounded-full border border-white hover:opacity-70">
                        <Play color="#fff" fill="white" />
                      </div>
                      <div className="p-2 rounded-full hover:bg-white">
                        <Ellipsis color="#fff" size={16} />
                      </div>
                    </div>
                  )}

                  <img
                    className="size-50 w-full object-cover hover:scale-110 "
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="mt-3 ">
                <Link href="">
                  <div className="text-[14px] text-white font-bold line-clamp-1  hover:text-hover-link">
                    {item.title}
                  </div>
                </Link>
                <Link>
                  <div className="text-[14px] text-text-secondary hover:text-hover-link">
                    {item.others}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
