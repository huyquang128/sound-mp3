import { motion } from 'motion/react';
import { image } from '../../contants/img';
import { icons } from '../../contants/icons';
import ButtonSocial from '../button/button-social';
import ButtonPrimary from '../button/button-primary';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setIsCloseModalAuth } from '../../redux/modal-slice';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import InputPrimary from '../input/input-primary';

function ModalAuth() {
    const dispatch = useDispatch();
    return (
        <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black/80 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-1/3"
            >
                {/* interface all login */}
                <SwiperSlide>
                    <div className="bg-modal-bg  pt-1 pb-5 rounded-lg">
                        <div
                            onClick={() => dispatch(setIsCloseModalAuth())}
                            className="flex justify-end px-3 cursor-pointer"
                        >
                            <X color="white" />
                        </div>
                        <div className="px-10">
                            <div className="flex justify-center px-10">
                                <img
                                    src={image.login}
                                    alt=""
                                    className="object-cover size-62 "
                                />
                            </div>

                            <h2 className="text-white text-xl font text-center font-semibold mb-10">
                                Đăng nhập SOUND MP3
                            </h2>

                            <div className="mb-4">
                                <ButtonPrimary title="Đăng nhập bằng tài khoản" />
                            </div>

                            <div className="flex items-center gap-6 mb-4 text-white px-2">
                                <div className="h-[0.5px] w-full bg-gray-600 "></div>
                                <div className="text-sm">hoặc</div>
                                <div className="h-[0.5px] w-full bg-gray-600"></div>
                            </div>

                            <div className="mb-5">
                                <ButtonSocial
                                    title="Đăng nhập bằng google"
                                    icon={icons.google}
                                />
                            </div>

                            <div className="mb-5">
                                <ButtonSocial
                                    title="Đăng nhập bằng facebook"
                                    icon={icons.fb}
                                />
                            </div>

                            <div className="flex justify-center w-full">
                                <p className="w-96 text-white text-sm text-center">
                                    Bằng cách đăng nhập tài khoản, bạn đã đồng ý
                                    với Điều khoản dịch vụ và Chính sách bảo mật
                                    của SOUND MP3
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* interface login account */}
                <SwiperSlide>
                    <div className="bg-modal-bg  pt-1 pb-5 rounded-lg">
                        <div
                            onClick={() => dispatch(setIsCloseModalAuth())}
                            className="flex justify-end px-3 cursor-pointer"
                        >
                            <X color="white" />
                        </div>
                        <div className="px-10">
                            <div className="flex justify-center px-10">
                                <img
                                    src={image.login}
                                    alt=""
                                    className="object-cover size-62 "
                                />
                            </div>

                            <h2 className="text-white text-xl font text-center font-semibold mb-10">
                                Đăng nhập SOUND MP3
                            </h2>

                            <form
                                action="
                            "
                            >
                                <div className="mb-3">
                                    <InputPrimary
                                        title="Tài khoản"
                                        placeholder=""
                                        type="text"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </div>

                                <div>
                                    <InputPrimary
                                        title="Email"
                                        placeholder=""
                                        type="text"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </div>

                                <div>
                                    <InputPrimary
                                        title="Mật khẩu"
                                        placeholder=""
                                        type="text"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </div>

                                <div className="mb-5">
                                    <ButtonPrimary title="Đăng nhập" />
                                </div>
                            </form>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </motion.div>
    );
}

export default ModalAuth;
