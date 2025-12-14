import { Headphones, Heart } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

function ModalMoreSong() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-12 right-0 bg-modal-bg px-5 rounded-lg w-64 z-40"
        >
            <div>
                <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/a/a/0/1aa0372c1fce7328d0641e1645cb8313.jpg"
                    alt=""
                />
                <div>
                    <div>Trời sao</div>
                    <div>
                        <div>
                            <Heart />
                            <div>18k</div>
                        </div>
                        <div>
                            <Headphones />
                            <div>18k</div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </motion.div>
    );
}

export default ModalMoreSong;
