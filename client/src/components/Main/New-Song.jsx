import { ChevronRight, Ellipsis, Heart, Play } from "lucide-react";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const areaSong = [
  {
    category: "Tất cả",
    value: "ALL",
  },
  {
    category: "Việt Nam",
    value: "VIETNAM",
  },
  {
    category: "Quốc Tế",
    value: "INTERNATIONAL",
  },
];

const listSongsNew = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
    title: "Pound of you",
    other: "Hiền Hồ",
    dayAgo: "Hôm qua",
    countTry: "INTERNATIONAL",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
    title: "Em gái mưa",
    other: "Hiền Hồ",
    dayAgo: "3 ngày trước",
    countTry: "VIETNAM",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
    title: "What is your name?",
    other: "Katy Perty",
    dayAgo: "Tuần trước",
    countTry: "INTERNATIONAL",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    title: "Thất Tình",
    other: "Trịnh Đình Quang",
    dayAgo: "3 ngày trước",
    countTry: "VIETNAM",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
    title: "Hello",
    other: "Adeel",
    dayAgo: "1 tháng trước",
    countTry: "INTERNATIONAL",
  },
];

export default function NewSong() {
  const [hoverSong, setHoverSong] = useState(null);
  const [activeArea, setActiveAria] = useState("ALL");

  const newArrSong = useMemo(() => {
    const arrResult = listSongsNew.filter((item) => item.countTry === activeArea)
    return arrResult;
  },[activeArea])

  const condition = activeArea === "ALL" ? listSongsNew : newArrSong;
  
  
  return (
    <div>
      <div className="flex justify-between mb-3.5 mt-[47px] items-center bg-black">
        <h3 className="text-xl text-white font-inter font-bold">
          Mới Phát Hành
        </h3>
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

      <div  className="flex items-center gap-2.5 uppercase">
        {areaSong.map((item, index) => (
          <div onClick={() => setActiveAria(item.value)} key={index} className={`text-white font-normal text-xs px-6 py-1  rounded-full cursor-pointer ${activeArea === item.value  ? "bg-btn-primary"  : ""}`}>
            {item.category}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 mt-3.5">
        {condition.map((item, index) => (
          <div
            onMouseEnter={() => setHoverSong(index)}
            onMouseLeave={() => setHoverSong(null)}
            className="flex items-center justify-between p-2.5 rounded-[5px] gap-2 hover:bg-[#2f2739]"
            key={index}
          >
            <div className="flex gap-2 items-center">
              <div className="relative">
                {hoverSong === index && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <Play fill="white" />
                  </div>
                )}

                <img
                  className="size-15 rounded-sm  cursor-pointer"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="">
                <Link
                  className="text-[15px] text-white hover:text-hover-link  cursor-pointer"
                  href={item.title}
                >
                  <div>{item.title}</div>
                </Link>
                <Link
                  className="mt-0.5 text-[13px] text-text-secondary hover:text-hover-link  cursor-pointer"
                  href={item.other}
                >
                  <div>{item.other}</div>
                </Link>

                <div className="mt-0.5 text-[13px] text-text-secondary">
                  {item.dayAgo}
                </div>
              </div>
            </div>
            {hoverSong === index && (
              <div className="text-white flex items-center gap-4 mr-4">
                <div className="p-2 rounded-full hover:bg-white">
                  <Ellipsis size={16} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
