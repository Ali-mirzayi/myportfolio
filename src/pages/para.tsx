import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Image from 'next/image';
import styles from '../styles/Para.module.css';

export default function ara() {
    return (
        <div className={styles.animation}>
            <Parallax pages={3} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={1} factor={1.7}>
                    <div className={styles.bgi} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.3} speed={2.2} style={{ pointerEvents: 'none' }}>
                    <Image src={"/satellite-png-40920.png"} width={300} height={300} style={{ display: 'block', marginLeft: '75%' }} alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={1.9} speed={2.2} style={{ pointerEvents: 'none' }}>
                    <Image src={"/satellite-png-40920.png"} width={200} height={200} style={{ display: 'block', marginLeft: '25%' }} alt="" />
                </ParallaxLayer>
                <ParallaxLayer speed={-1} sticky={{ start: 0.3, end: 2.5 }} style={{ top: "120px" }}>
                    <Image src={"/moon-png-44668.png"} width={300} height={300} style={{ display: 'block', marginLeft: '35%' }} alt="" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}