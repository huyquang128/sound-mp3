import {
    ChevronRight,
    CirclePlay,
    EthernetPort,
    TrendingUp,
} from 'lucide-react';
import { motion } from 'motion/react';

const settingModal = [
    {
        name: 'Sầu tím thiệp hồng',
    },
    {
        name: 'Sầu tím thiệp hồng',
    },
    {
        name: 'Sầu tím thiệp hồng',
    },
    {
        name: 'Sầu tím thiệp hồng',
    },
];

function ModalHeaderSearch() {
    return (
        <motion.div
            initial={{ opacity: 0, y: '30%' }}
            animate={{ opacity: 1, y: '0' }}
            exit={{ opacity: 0, y: '30%' }}
            transition={{ duration: 0.3 }}
            className="absolute top-12 right-0 bg-modal-bg p-5 rounded-lg w-full"
        >
            <div className="mb-3 text-sm font-semibold">Đề xuất cho bạn</div>
            {settingModal.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className=" py-4 text-sm flex items-center gap-5"
                    >
                        <TrendingUp size={15} />
                        <div className="">{item.name}</div>
                        {/* <div>
                            <ChevronRight size={20} />
                        </div> */}
                    </div>
                );
            })}
        </motion.div>
    );
}

export default ModalHeaderSearch;
