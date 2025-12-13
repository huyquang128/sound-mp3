import {
  Ellipsis,
  Heart,
  Link,
  ListMusic,
  MicVocal,
  PictureInPicture2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
  Youtube,
} from "lucide-react";
import React from "react";

export default function UiPlaySong() {
  return (
    <div className="flex justify-between items-center px-5 h-[90px] fixed z-50 left-0 bottom-0 right-0 bg-home-bg cursor-pointer ">
      <div className="flex items-center justify-between p-2.5 rounded-[5px] gap-2 hover:bg-[#2f2739] cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="relative">
            <img
              className="size-15 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVn56XpjOPQSjmUXv5XMJgmvaok0zaFYj3EQ&s"
              alt="Ảnh"
            />
          </div>
          <div className="">
            <a className="text-[15px] text-white hover:text-hover-link" href="">
              <div>Kẻ điên tin vào tình yêu</div>
            </a>
            <a
              className="mt-0.5 text-[13px] text-white hover:text-hover-link"
              href=""
            >
              <div>Liza poet</div>
            </a>
          </div>
        </div>
        <div className="text-white flex items-center gap-4 mr-4">
          <div className="p-2 rounded-full hover:bg-[#ffffff1a]">
            <Heart size={16} />
          </div>
          <div className="p-2 rounded-full hover:bg-[#ffffff1a]">
            <Ellipsis size={16} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center gap-4">
          <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
            <Shuffle strokeWidth={1} size={20} color="#fff" />
          </div>
          <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
            <SkipBack strokeWidth={1} size={20} color="#fff" fill="white" />
          </div>

          <div className="p-3 rounded-full border border-white hover:opacity-70">
            <Play strokeWidth={1} size={20} color="#fff" fill="white" />
          </div>
          <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">

          <SkipForward strokeWidth={1} size={20} color="#fff" fill="white" />
          </div>
          <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">

          <Repeat strokeWidth={1} size={20} color="#fff" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-white">00:05</div>
          <div>
            <input type="range" name="" id="" />
          </div>
          <div className="text-white">04:12</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
          <Youtube strokeWidth={1} size={20} color="#fff" />
        </div>
        <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
          <MicVocal strokeWidth={1} size={20} color="#fff" />
        </div>
        <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
          <PictureInPicture2 strokeWidth={1} size={20} color="#fff" />
        </div>
        <div className="flex items-center">
          <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
              <Volume2 strokeWidth={1} size={20} color="#fff" />
          </div>
          <input type="range" name="" id="" />
        </div>
        <div className="bg-gray-700 w-px self-stretch"></div>
        <div className="p-1.5 rounded-full hover:bg-[#ffffff1a]">
          <ListMusic strokeWidth={1} size={20} color="#fff" />
        </div>
      </div>
    </div>
  );
}
