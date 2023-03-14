import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const TextAnimated = ({ children, size }: { children: string, size: number }) => {
    const { ref: myRef, inView } = useInView(
        { triggerOnce: true, rootMargin: "0px 0px 0px 0px", delay: 0 }
    );
    const letters = Array.from(children);
    const transform = [
        "scale3d( 1, 1, 1)",
        "scale3d( 1.4, .55, 1)",
        "scale3d( .75, 1.25, 1)",
        "scale3d( 1.25, .85, 1)",
        "scale3d( .9, 1.05, 1)",
        "scale3d( 1, 1, 1)",
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: -30,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div>
            <motion.div
                ref={myRef}
                style={{ overflow: "hidden", display: "flex", fontSize: `${size}rem`, cursor: "pointer" }}
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {letters.map((letter: any, index) => (
                    <motion.span variants={child} whileHover={{ transform }} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default TextAnimated;