import * as React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./MemberNames.module.css";

function MemberNames({ width }: { width: number }) {
    const ref3 = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref3,
        offset: ["60vh", "550vh end"]
    });

    const transx3 = useTransform(
        scrollYProgress,
        [0, 1],
        [-width / 2 - 250, width / 2 + 250]
    );

    const transx4 = useTransform(
        scrollYProgress,
        [0, 1],
        [width / 2 + 250, -width / 2 - 250]
    );
    const transy3 = useTransform(
        scrollYProgress,
        [0, 1],
        [-500, 500]
    );
    const transy4 = useTransform(
        scrollYProgress,
        [0, 1],
        [500, -500]
    );

    const roate = useTransform(
        scrollYProgress,
        [0, 1],
        [-200, 200]
    );

    return (
        <div ref={ref3} style={{ height: "400vh", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "fixed", width: "100vw", zIndex: width > 500 ? 5 : 41, top: "200px", fontSize: "12.7px" }}>
                <motion.div className={styles.names} style={{ marginBottom: "10px", x: transx3, y: transy3 }}><h1>some dummy text:</h1></motion.div>
                <motion.div className={styles.names} style={{ marginBottom: "10px", x: transx4, y: transy3 }}><h1>sit amet consectetur adipi</h1></motion.div>
                <motion.div className={styles.names} style={{ marginBottom: "10px", x: transx3, y: transy4, rotate: roate }}><h1> elit. Illum officiis cumque</h1></motion.div>
                <motion.div className={styles.names} style={{ x: transx4, y: transy4 }}><h1>aliquam illo minus maxim</h1></motion.div>
            </div>
        </div>);
}

export default MemberNames;