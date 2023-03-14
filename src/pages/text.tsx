import React, { useEffect, useRef, useState } from "react";
import TextAnimated from "@/components/TextAnimated";
import TextSpan from "@/components/TextSpan";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

function Text() {
    const sentence1 = "Hello world".split("");

    return (<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div data-scroll-container style={{ height: "200vh" }} />
        <div data-scroll-container style={{ display: "flex" }}>
            {sentence1.map((letter, i) => (
                <TextSpan key={i} size={40}>
                    {letter}
                </TextSpan>
            ))}
        </div>
        <div data-scroll-container style={{ margin: "50px" }}>
            <TextAnimated size={3}>Hello world</TextAnimated>
        </div>
    </div>);
}

export default Text;