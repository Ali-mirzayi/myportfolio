import styles from "./Pointer.module.css"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const widths = [{ size: 30, mass: 11 }, { size: 22, mass: 15.5 }, { size: 18.5, mass: 18.5 }, { size: 15.5, mass: 22 },{size: 14, mass: 25}, { size: 13, mass: 27 },{size:12,mass:29}, { size: 11, mass: 32 }];

const Pointer = () => {
    const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mousemove = (e: any) => {
            setlargecircle({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []);

    return (
        <div>
            {widths.map(i => (
                <motion.div
                    key={i.size}
                    animate={{
                        x: largecircle.x - i.size / 2,
                        y: largecircle.y - i.size / 2,
                    }}
                    transition={{
                        type: "spring",
                        mass: i.mass / 15
                    }}
                    className={styles.largeCircle}
                    style={{ height: i.size, width: i.size }}
                ></motion.div>

            ))}
        </div>
    );
};
export default Pointer;