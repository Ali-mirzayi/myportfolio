import styles from "../styles/Banner.module.css";
import { useState } from 'react';
import dynamic from "next/dynamic";
// import Move from "@/components/Move";
const Move = dynamic(() => import('@/components/Move'), {
    ssr: false,
})



function Banner() {
    return (<div style={{ height: "100vh", width: "100vw", backgroundColor: "#005555", padding: "300px 0" }}>
        <Move text={"Lorem ipsum dolor sit"} width={"200px"} padding={"0.5rem 1.2rem"} size={"8px"} speed={2} />
    </div>);
}

export default Banner;