import {
    CircleGauge,
    CloudUpload,
    Disc2,
    FileHeadphone,
    Heart,
    LayoutDashboard,
    ListMusic,
    ListMusicIcon,
    Music4,
    RotateCcw,
    Speaker,
    SquareActivity,
    Star,
} from 'lucide-react';
import SeparateVertical from '../separate/separate-vertical';
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpenModalAuth } from '../../redux/modal-slice';
import ModalAuth from '../modal/modal-auth';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const menu1 = [
    {
        name: 'Thư viên',
        icon: Music4,
        id: 1,
        link: '/library',
    },
    {
        name: 'Khám phá',
        icon: Disc2,
        link: '/discover',
        id: 2,
    },
    {
        name: '#zingchat',
        icon: SquareActivity,
        id: 3,
    },
    {
        name: 'Phòng nhạc',
        icon: Speaker,
        id: 4,
    },
];

const menu2 = [
    {
        name: 'BXH Nhạc mới',
        icon: ListMusic,
    },
    {
        name: 'Chủ đè & Thể loại',
        icon: LayoutDashboard,
    },
    {
        name: 'Top 100',
        icon: Star,
    },
];

const menuLoginSuccess = [
    {
        name: 'Nghe gần đây',
        icon: RotateCcw,
        color: '#412471',
    },
    {
        name: 'Bài hát yêu thích',
        icon: Heart,
        color: '#1cc2f7',
    },
    {
        name: 'Playlist',
        icon: ListMusicIcon,
        color: '#fa7230',
    },
    {
        name: 'Album',
        icon: FileHeadphone,
        color: '#ff44ab',
    },
    {
        name: 'Đã tải lên',
        icon: CloudUpload,
        color: '#ff5050',
    },
];

function Sidebar() {
    const dispatch = useDispatch();

    const { isModalAuth } = useSelector((state) => state.modal);

    const { isSignedIn } = useAuth();

    return (
        <>
            <div className="fixed bg-sidebar-bg top-0 left-0 bottom-0 w-60">
                <div className="sticky">
                    <div className="pl-6 py-3">
                        <div className="mt-3.5 text-2xl font-bold text-white">
                            SOUND MP3
                        </div>
                    </div>

                    {/*  */}
                    <div className="w-full mb-3">
                        <ul className="list-none">
                            {menu1.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        className="text-bold text-[#dadada] "
                                        key={item.id}
                                    >
                                        <Link
                                            className="flex items-center text-sm font-medium py-3 px-5 gap-4
                                              "
                                            to={`${item.link}`}
                                        >
                                            <Icon size={22} />

                                            <div className="font-medium">
                                                {item.name}
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <SeparateVertical />
                </div>

                {/*  */}
                <div className="w-full mt-3 h-62">
                    <ul className="list-none">
                        {menu2.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li
                                    className="text-bold text-[#dadada] "
                                    key={item.id}
                                >
                                    <a
                                        className="flex items-center text-sm font-medium py-3 px-5 gap-4
                                              "
                                        href=""
                                    >
                                        <Icon size={22} />

                                        <div>{item.name}</div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {isSignedIn ? (
                        <div>
                            {/* menu after login successfully */}
                            {menuLoginSuccess.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        className="text-bold text-[#dadada] "
                                        key={index}
                                    >
                                        <Link
                                            className="flex items-center text-sm font-medium py-3 px-5 gap-4
                                              "
                                            href=""
                                        >
                                            <div
                                                className={`p-1 rounded-md flex justify-center items-center`}
                                                style={{
                                                    background: `${item.color}`,
                                                }}
                                            >
                                                <Icon size={16} />
                                            </div>

                                            <div>{item.name}</div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </div>
                    ) : (
                        <div
                            className="px-2 py-4 my-2.5 mx-5 text-white text-center 
                            rounded-lg bg-[#9b4de0]"
                        >
                            <div className="text-xs font-semibold mb-2.5">
                                Đăng nhập để khám phá những bản nhạc đanh cho
                                riêng bạn
                            </div>
                            <button
                                className="text-xs border border-white px-9 py-1.5 
                                rounded-full font-semibold uppercase cursor-pointer 
                                hover:opacity-70"
                                onClick={() => dispatch(setIsOpenModalAuth())}
                            >
                                Đăng nhập
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* modal auth */}
            <AnimatePresence>{isModalAuth && <ModalAuth />}</AnimatePresence>
        </>
    );
}

export default Sidebar;
