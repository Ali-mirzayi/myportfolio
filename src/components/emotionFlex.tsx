import React from "react";
import { motion } from "framer-motion";
import { useViewportSize } from '@mantine/hooks';
function EmotionFlex({children}:any) {
    const { width } = useViewportSize();
    const transform = [
        "scale3d( 1, 1, 1)",
        "scale3d( 1.4, .55, 1)",
        "scale3d( .75, 1.25, 1)",
        "scale3d( 1.25, .85, 1)",
        "scale3d( .9, 1.05, 1)",
        "scale3d( 1, 1, 1)",
    ]

    return ( <motion.div whileHover={{ transform }} whileTap={width<700 ? {transform} : undefined} style={{width:"fit-content",position:"relative"}}>
        {children}
    </motion.div> );
}

export default EmotionFlex;