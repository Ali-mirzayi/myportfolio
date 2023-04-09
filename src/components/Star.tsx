import { GiMoebiusStar } from 'react-icons/gi';
import { motion, useScroll, useTransform } from "framer-motion";
import { useViewportSize } from '@mantine/hooks';


function Star() {
    const { scrollY } = useScroll();
    const { width } = useViewportSize();
    const transX = useTransform(
        scrollY,
        [0, 5500, 11000 , 16500 , 22000],
        [0, width - 120, 0 ,width - 120 ,  0],
    );

    const transY = useTransform(
        scrollY,
        [0, 30000],
        [0, 850]
    );

    return (
        <motion.div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: "50px", left: "50px", rotate: scrollY, zIndex: 51, x: transX, y: transY }}>
            <GiMoebiusStar size={40} />
        </motion.div>);
}

export default Star;