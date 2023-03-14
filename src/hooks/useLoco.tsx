import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';

export default function useLoco(start:any){
    useEffect(() =>{
        if (!start) return;
        const scrollEl = document.querySelector('#main');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-reveal"
        });
    },[start])   
}