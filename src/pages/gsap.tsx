import Shop from "@/components/Shop";
import { GiMoebiusStar } from 'react-icons/gi';
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

function gsap() {
    const { scrollY } = useScroll();
    const transX = useTransform(
        scrollY,
        [0, 2000 , 3000],
        [0, 1330 , 0]
    )
    const transY = useTransform(
        scrollY,
        [0, 10000],
        [0, 1000]
    )
    return (<div>
        <div style={{ height: "200vh" }} />
        <motion.div style={{ display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"50px",left:"50px",rotate:scrollY,zIndex:50,translateX: transX,translateY: transY }}>
            <GiMoebiusStar size={40} />
        </motion.div>
        <Shop />
        <div style={{ height: "150vh" }} />
    </div>);
}

export default gsap;