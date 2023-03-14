import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import styles from '../components/emotion.module.css';
import styled from "@emotion/styled";
import dynamic from "next/dynamic";


function Emotion() {

    const { ref: myRef, inView } = useInView(
        { triggerOnce: false, rootMargin: "0px 0px 0px 0px", delay: 0 }
    );

    // console.log(inView);
    // useEffect(() => { setDiv(inView) }, [inView]);

    // const semi = useRef<any>();
    // useEffect(()=>{
    //     const observer = new IntersectionObserver((entries)=>{
    //         console.log('====================================');
    //         console.log(entries[0].isIntersecting);
    //         console.log('====================================');
    //     })
    //     observer.observe(semi.current);
    // })

    return (
        <div style={{ backgroundColor: "#001521", color: "wheat", padding: "200PX 50PX" }}>
            <div style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>1</h1></div>
            <div style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>2</h1></div>
            <div style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>3</h1></div>
            <div style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>4</h1></div>
            <motion.div
                style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                ref={myRef}><h1>5</h1></motion.div>
            <div style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>6</h1></div>
            <div style={{ backgroundColor: "red", height: "300px", margin: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>7</h1></div>
            <h1>salm</h1>
        </div>);
}

export default Emotion;