import * as React from 'react'
import styles from '../styles/Scroll.module.css';
import { motion, useScroll, useTransform } from "framer-motion";
import Shop from "@/components/Shop";
import { Neonderthaw } from '@next/font/google';
import { Caveat } from '@next/font/google';
import { useRecoilValue } from 'recoil';
import { Permition } from '../Atoms';
import { Box } from '@mantine/core';
import MemberNames from '../components/memberNames';
import { useViewportSize } from '@mantine/hooks';
import dynamic from 'next/dynamic'
import Image from 'next/image';
const SphereText = dynamic(() => import('../components/SphereText'), {
    loading: () => null,
})

const inter = Neonderthaw({ weight: '400', subsets: ['latin'] });
const caveat = Caveat({ weight: '400', subsets: ['latin'] });

export default function Scroll() {
    const ref = React.useRef<HTMLDivElement>(null);
    const ref2 = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLDivElement>(null);
    const { height, width } = useViewportSize();
    const permition = useRecoilValue(Permition);
    const { scrollYProgress: scrollY } = useScroll({
        target: textRef,
    });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "start end"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
    });

    const h1 = useTransform(
        scrollY,
        [0, 1],
        [0, 4500]
    );
    const h2 = useTransform(
        scrollY,
        [0, 1],
        [0, 1700]
    );

    const canvasY = useTransform(
        scrollYProgress2,
        [0, 1],
        [-1.6 * height, 0]
    );

    return (
        <Box sx={{ backgroundColor: "#00092e", position: "relative" }}>
            <div style={{ position: "fixed", top: 0 }}>
                <motion.div style={{ opacity: scrollYProgress, width: "100vw", height: "100vh", zIndex: -900, position: "relative" }}>
                    <Image priority src={width > height ? "/Wallpaper-La-La-Land-HD-Movies-5899.webp" : "/cropped2.webp"} alt="" fill />
                </motion.div>
            </div>
            <div ref={textRef} style={{ height: "fit-content" }}>
                {permition ?
                    <div className={inter.className}>
                        <div>
                            <motion.h1 className={styles.h1} style={{ y: h1, fontSize: "6rem" }}>La La Land</motion.h1>
                        </div>
                        <div style={{ position: "absolute", top: "370px", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <motion.div className={styles.h2} style={{ y: h2, color: "#ffc7e4", textAlign: "center", fontSize: "3rem" }}>
                                <p>City of stars Are you shining just for me?</p>
                                <p>City of stars You never shined so brightly.</p>
                            </motion.div>
                        </div>
                    </div> : null}
                <div>
                    <MemberNames width={width} />
                </div>
                <div ref={ref} style={{ height: "100vh" }} />
                <div className={caveat.className} style={{ fontSize: "1rem" }}>
                    <Shop />
                    <div style={{ height: "10rem" }} />
                </div>
            </div>
            <motion.div className={styles.container2} ref={ref2} style={{ opacity: scrollYProgress2, height: "250vh", position: "relative" }}>
            </motion.div>
            <motion.div style={{ y: canvasY, position: "absolute", bottom: "20vh", width: "100vw", height: width > 850 ? "65vh" : "100vw", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50 }}>
                <SphereText />
            </motion.div>
        </Box>
    )
}