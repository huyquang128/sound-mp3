import { MoveLeft, MoveRight, Search, Settings, User, X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux';
import ModalHeaderSetting from '../modal/modal-header-setting';
import {
    setIsCloseModalHeaderSearch,
    setIsOpenModalHeaderSearch,
    toggleModalHeaderSetting,
} from '../../redux/modal-slice';
import ModalHeaderSearch from '../modal/modal-header-search';
function Header() {
    const dispatch = useDispatch();
    const { isModalHeaderSetting, isModalHeaderSearch } = useSelector(
        (state) => state.modal
    );
    return (
        <header
            className=" fixed flex justify-between px-14 bg-home-bg top-0 right-0 left-60 py-5
                          text-white z-20"
        >
            {/* menu-left */}
            <div className="flex items-center">
                <div className="mr-3">
                    <MoveLeft />
                </div>
                <div>
                    <MoveRight />
                </div>
                <div
                    onFocus={() => dispatch(setIsOpenModalHeaderSearch())}
                    className="mx-10 flex justify-center items-center p-2 
                          bg-sidebar-bg rounded-full relative"
                >
                    <Search className="cursor-pointer" />
                    <input
                        className="ml-1 w-100 outline-none"
                        placeholder="Tìm kiếm bài hát,nghệ sĩ,lời bài hát,..."
                    />

                    <AnimatePresence>
                        {isModalHeaderSearch && <ModalHeaderSearch />}
                    </AnimatePresence>

                    {isModalHeaderSearch && (
                        <div
                            onClick={() =>
                                dispatch(setIsCloseModalHeaderSearch())
                            }
                        >
                            <X size={18} />
                        </div>
                    )}
                </div>
            </div>

            {/* menu-right */}
            <div className="flex items-center">
                <button className="mr-3 px-5 py-2.5 rounded-full bg-btn-primary text-white text-[16px] font-bold cursor-pointer hover:opacity-90">
                    Nâng cấp tài khoản
                </button>
                <button
                    onClick={() => dispatch(toggleModalHeaderSetting())}
                    className=" mr-3 flex justify-center items-center  
                          rounded-full size-10 bg-[#2f2739] hover:opacity- 
                          cursor-pointer relative"
                >
                    <Settings
                        className="text-[#827f88]"
                        size={20}
                        color="white"
                    />

                    <AnimatePresence>
                        {isModalHeaderSetting && <ModalHeaderSetting />}
                    </AnimatePresence>
                </button>
                <div className=" flex justify-center items-center border rounded-full size-8 bg-[#f4dfe4] hover:opacity-80 cursor-pointer">
                    <User className="text-[#9f2156]" />
                </div>
            </div>
        </header>
    );
}

export default Header;
