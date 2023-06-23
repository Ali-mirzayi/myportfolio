import { motion, useAnimationControls } from "framer-motion";
function TextSpan({ children, size }: { children: string, size: number }) {

    const sentence = children.split("")

    const controls = useAnimationControls();
    const robberBands = () => {
        controls.start({
            transform: [
                "scale3d( 1, 1, 1)",
                "scale3d( 1.4, .55, 1)",
                "scale3d( .75, 1.25, 1)",
                "scale3d( 1.25, .85, 1)",
                "scale3d( .9, 1.05, 1)",
                "scale3d( 1, 1, 1)",
            ]
        })
    }

    return (
        <div style={{ fontSize: `${size}px`, cursor: "pointer" }}>
            <motion.span animate={controls} onMouseOver={robberBands} style={{ fontSize: "3rem", display: "inline-block" }}>
                {children === " " ? "\u00A0" : children}
            </motion.span>
        </div >
    );
}

export default TextSpan;