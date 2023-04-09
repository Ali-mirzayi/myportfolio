import { useState } from "react";
import { motion } from "framer-motion";
import { IoVolumeMedium, IoVolumeOff } from "react-icons/io5";
import { useRecoilState } from 'recoil';
import { Muted } from "../Atoms";
import { ActionIcon } from '@mantine/core';

function Navbar({ music, mute }: any) {
    const [isMuted, setIsMuted] = useRecoilState(Muted);

    const handleClick = () => {
        setIsMuted(!isMuted);
        !isMuted ? music.pause() : music.play();
    };

    return (
        <ActionIcon style={{ backgroundColor: "transparent", position: "fixed", top: "20px", left: "1rem", zIndex: 12 }}>
            <motion.div
                animate={{ scale: isMuted ? 0.8 : 1, rotate: isMuted ? 0 : [0, 20, -20, 20, -20, 0] }}
                transition={{ type: "spring", stiffness: 500, damping: 10, duration: 0.5 }}
                onClick={handleClick}
            >
                {isMuted ? <IoVolumeOff size={50} /> : <IoVolumeMedium size={50} />}
            </motion.div></ActionIcon>);
}

export default Navbar;