import type { NextPage } from 'next'
import styles from "../styles/Banner.module.css";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { useEffect,useRef} from 'react'

const Home: NextPage = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => {
        {/* A return function for killing the animation on component unmount */ }
        pin.kill();
      };
    }, []);

  return (
    <div id="container" style={{display:"flex",width:"500vw"}} className={styles.container}>
      <div id="component" style={{width:"100vw",height:"100vh"}} className={styles.one}>Primeiro</div>
      <div id="component" style={{width:"100vw",height:"100vh"}} className={styles.two}>Segundo</div>
      <div id="component" style={{width:"100vw",height:"100vh"}} className={styles.three}>Terceiro</div>
      <div id="component" style={{width:"100vw",height:"100vh"}} className={styles.four}>Quarto</div>
      <div id="component" style={{width:"100vw",height:"100vh"}} className={styles.five}>Quinto</div>
    </div>
  )
}

export default Home