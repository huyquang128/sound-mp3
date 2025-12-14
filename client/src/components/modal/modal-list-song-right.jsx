import React from 'react';
import { motion } from 'motion/react';

function ModalListSongRight() {
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-14 right-0 bg-modal-bg px-5 rounded-lg w-64 z-40 h-70 "
        >
            <div>list song modal</div>
        </motion.div>
    );
}

export default ModalListSongRight;
