import {
  CircleGauge,
  Disc2,
  LayoutDashboard,
  ListMusic,
  Music4,
  Speaker,
  SquareActivity,
  Star,
} from "lucide-react";

const menu1 = [
  {
    name: "Thư viên",
    icon: <Music4 />,
    id: 1,
  },
  {
    name: "Khám phá",
    icon: <Disc2 />,
    id: 2,
  },
  {
    name: "#zingchat",
    icon: <SquareActivity />,
    id: 3,
  },
  {
    name: "Phòng nhạc",
    icon: <Speaker />,
    id: 4,
  },
];

const menu2 = [
  {
    name: "BXH Nhạc mới",
    icon: <ListMusic />,
    id: 1,
  },
  {
    name: "Chủ đè & Thể loại",
    icon: <LayoutDashboard />,
    id: 2,
  },
  {
    name: "Top 100",
    icon: <Star />,
    id: 3,
  },
];
function Sidebar() {
  return (
    <>
      <div className="fixed bg-blue-800 top-0 left-0 bottom-0 w-[240px]">
        <div className="pl-6 pr-7">
          <div className="mt-3.5 text-xl font-bold text-white">Zing MP3</div>
          <div className="text-[16px] font-normal mt-[3px] text-white">
            MXH âm nhạc
          </div>
        </div>
        <div className="w-full ">
          <ul className="list-none">
            {menu1.map((item) => (
              <li className="text-bold text-[#dadada] " key={item.id}>
                <a className="flex items-center text-sm font-medium py-3 px-5 gap-2 nth-[1]:bg-[#393243] border-l border-l-[#9b4de0]" href="">
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <div className="w-full ">
          <ul className="list-none">
            {menu2.map((item) => (
              <li className="text-bold text-[#dadada] " key={item.id}>
                <a className="flex items-center text-sm font-medium py-3 px-5 gap-2 nth-[1]:bg-[#393243] border-l border-l-[#9b4de0]" href="">
                    {item.icon} {item.name}
                    </a>
                    
              </li>
            ))}
          </ul>
          <div className="px-2 py-4 my-2.5 mx-5 text-white text-center rounded-lg bg-[#9b4de0]">
            <div className="text-xs font-semibold mb-2.5">Đăng nhập để khám phá những bản nhạc đanh cho riêng bạn</div>
            <button className="text-xs border border-white px-9 py-1.5 rounded-full font-semibold uppercase cursor-pointer hover:opacity-70">Đăng nhập</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
