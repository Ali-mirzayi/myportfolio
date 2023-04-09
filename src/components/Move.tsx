import styled, { keyframes } from "styled-components";
import styles from '../styles/Banner.module.css';
import { useState } from 'react';

var mov = keyframes`
0% {
    transform: translate(0, 0);
}
100% {
    transform: translate(-100%, 0);
}
`;

function Move({ text, width, padding, size, speed }: any) {
    const [first, setfirst] = useState(false);

    const yes = () => {
        setfirst(true);
    };
    const no = () => {
        setfirst(false);
    };

    const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    width: ${width};
    margin:auto;
    border-radius: 40px;
    font-size: ${size};
    
    `;

    const Bar = styled.h1`
    white-space: nowrap;
    padding: ${padding};
    animation: ${mov} ${3 / speed}s linear infinite;
    `;

    const Bar2 = styled.h1`
    white-space: nowrap;
    padding: ${padding};
    `;

    return (
        <div onMouseOver={yes} onMouseLeave={no}>
            {first ?
                <TextWrapper className={styles.textWrapper} style={{ border: "2px solid white" }}>
                    <Bar>{text}</Bar>
                    <Bar>{text}</Bar>
                </TextWrapper>
                :
                <TextWrapper className={styles.textWrapper} style={{ border: "2px solid white" }}>
                    <Bar2>{text}</Bar2>
                    <Bar2>{text}</Bar2>
                </TextWrapper>
            }
        </div>);
}

export default Move;