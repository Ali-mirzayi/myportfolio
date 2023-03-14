import * as React from 'react'
import styles from '../styles/Scroll.module.css';
import { motion, useScroll } from "framer-motion";
import Shop from "@/components/Shop";

export default function Scroll() {
    const ref = React.useRef<HTMLDivElement>(null);
    const ref2 = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end", "start"],
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["start", "end"]
    });


    return (
        <div style={{ background: "#131313" }}>
            <div className={styles.container} />
            <motion.div className={styles.container} ref={ref} style={{ opacity: scrollYProgress }}>
            </motion.div>
            <div style={{ height: "50vh" }} />
            <Shop />
            <div style={{ height: "50vh" }} />
            <motion.div className={styles.container} ref={ref2} style={{ opacity: scrollYProgress2 }}>
            </motion.div>
            <div className={styles.container} />
        </div>
    )
}