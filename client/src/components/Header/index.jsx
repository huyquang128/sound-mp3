import { MoveLeft, MoveRight, Search, Settings, User } from "lucide-react";
function Header() {
  return (
    <>
      <header className=" fixed flex justify-between px-10 bg-amber-500 top-0 right-0 left-60">
        {/* menu-left */}
        <div className="flex items-center">
          <div className="mr-3">
            <MoveLeft />
          </div>
          <div>
            <MoveRight />
          </div>
          <div className="mx-10 flex justify-center items-center p-2.5 border rounded-full">
            <Search className="cursor-pointer" />
            <input
              className="ml-1 w-100 outline-none"
              placeholder="Tìm kiếm bài hát,nghệ sĩ,lời bài hát,..."
            />
          </div>
        </div>

        {/* menu-right */}
        <div className="flex items-center">
          <button className="mr-3 border px-5 py-2.5 rounded-full bg-[#9b4de0] text-white text-[16px] font-bold cursor-pointer hover:opacity-90">
            Nâng cấp tài khoản
          </button>
          <button className=" mr-3 flex justify-center items-center border rounded-full size-[40px] bg-[#2f2739] hover:opacity- cursor-pointer">
            <Settings className="text-[#827f88]" />
          </button>
          <div className=" flex justify-center items-center border rounded-full size-[40px] bg-[#f4dfe4] hover:opacity-80 cursor-pointer">
            <User className="text-[#9f2156]" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
