import { ChevronRight, CirclePlay, EthernetPort } from 'lucide-react';
import { motion } from 'motion/react';

const settingModal = [
    {
        icon: CirclePlay,
        name: 'Trình phát nhạc',
    },
    {
        icon: EthernetPort,
        name: 'Giao diện',
    },
];

function ModalHeaderSetting() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-12 right-0 bg-modal-bg px-5 rounded-lg w-64"
        >
            {settingModal.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className="flex items-center justify-between py-4 text-sm"
                    >
                        <div key={index} className="flex items-center gap-5">
                            <Icon size={20} color="white" />
                            <div>{item.name}</div>
                        </div>
                        <div>
                            <ChevronRight size={20} />
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
}

export default ModalHeaderSetting;
