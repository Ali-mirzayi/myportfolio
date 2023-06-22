import React from "react";
import TextAnimated from "@/components/TextAnimated";
import TextSpan from "@/components/TextSpan";
import Form from "@/components/Form";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

function Text() {
    const sentence1 = "Hello world".split("");

    return (<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Form />
        <div style={{ height: "200vh" }} />
        <div style={{ display: "flex" }}>
            {sentence1.map((letter, i) => (
                <TextSpan key={i} size={40}>
                    {letter}
                </TextSpan>
            ))}
        </div>
        <div style={{ margin: "50px" }}>
            <TextAnimated size={3} style={{}} className={null}>Hello world</TextAnimated>
        </div>
    </div>);
}

export default Text;