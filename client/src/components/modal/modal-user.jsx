import { LogOut, Upload, User, UserRoundCog } from 'lucide-react';
import { motion } from 'motion/react';

const settingModal = [
    {
        icon: Upload,
        name: 'Tải lên',
    },
    {
        icon: UserRoundCog,
        name: 'Tài khoản',
    },
    {
        icon: LogOut,
        name: 'Đăng xuất',
    },
];

function ModalUser() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-12 right-0 bg-modal-bg px-5 rounded-lg w-64 z-40"
        >
            <div className="flex gap-5 items-center border-b border-b-gray-700 py-5 ">
                <div
                    className="flex justify-center items-center border rounded-full
                               size-8 bg-[#f4dfe4] hover:opacity-80 cursor-pointer"
                >
                    <User className="text-[#9f2156]" />
                </div>
                <div>name</div>
            </div>

            {settingModal.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className="flex items-center gap-5 py-4 text-sm border-b 
                                 border-b-gray-700 cursor-pointer"
                    >
                        <Icon size={20} color="white" />
                        <div>{item.name}</div>
                    </div>
                );
            })}
        </motion.div>
    );
}

export default ModalUser;
