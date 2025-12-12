import { Ellipsis, Heart, Play, RotateCw } from 'lucide-react'
import {Link} from "react-router-dom"
import React, { useState } from 'react'

const listSongs = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
        title: "Em gái mưa",
        other: "Hiền Hồ"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
        title: "Em gái mưa",
        other: "Hiền Hồ"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
        title: "Em gái mưa",
        other: "Hiền Hồ"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
        title: "Em gái mưa",
        other: "Hiền Hồ"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v9qeCyBSmxDxEV325UkvDffDwaxWNAhtVA&s",
        title: "Em gái mưa",
        other: "Hiền Hồ"
    },
]

export default function SongSuggest() {
    const [hoverSong, setHoverSong] = useState(null);

  return (
    <div className=''>
      <div className='flex justify-between items-center mb-[14px] mt-[47px]'>
        <h3 className='text-white font-bold text-xl uppercase '>Gợi ý bài hát</h3>
        <button className='flex items-center px-3 py-1.5 text-white text-[13px] uppercase bg-btn-primary rounded-full font-medium hover:opacity-90 cursor-pointer '>
            <span className='mr-2'><RotateCw size={16} /></span>
         Làm mới</button>
      </div>
      <div className=''>
        <div className='grid grid-cols-3'>

            {listSongs.map((item, index) => (
                <div onMouseEnter={() => setHoverSong(index)} onMouseLeave={() => setHoverSong(null)} className='flex items-center justify-between p-2.5 rounded-[5px] gap-2 hover:bg-[#2f2739] cursor-pointer' key={index}>
                    <div className='flex gap-2 items-center'>
                        <div className='relative'>
                            {hoverSong === index && <div  className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'><Play fill='white' /></div>}
                            
                            <img className='size-15 ' src={item.image} alt={item.title} />
                        </div>
                        <div className=''>
                            <Link className='text-[15px] text-white hover:text-[#c273ed]' href={item.title}><div>{item.title}</div></Link>
                            <Link className='mt-0.5 text-[13px] text-white hover:text-[#c273ed]' href={item.other}><div>{item.other}</div></Link>
                        </div>
                    </div>
                    {hoverSong === index && <div className='text-white flex items-center gap-4 mr-4'>
                        <div className='p-2 rounded-full hover:bg-white'><Heart size={16} /></div>
                        <div className='p-2 rounded-full hover:bg-white'><Ellipsis size={16} /></div>
                    </div>}
                    
                </div>
            ))}
        </div>
              
      </div>
    </div>
  )
}
