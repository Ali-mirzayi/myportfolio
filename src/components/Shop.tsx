import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Shop.module.css";
import Image from "next/image";
// import styled from "styled-components";
import { motion,AnimatePresence } from "framer-motion";

function ScrollSection() {
  const data = [{ img: "/users/user0.webp", title: "title1" },
  { img: "/users/user1.webp", title: "title2" },
  { img: "/users/user2.webp", title: "title3" },
  { img: "/users/user3.webp", title: "title4" }
  ]

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
        translateX: `-${data.length}00vw`,
        ease: "none",
        duration: 8,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "8000 bottom",
          scrub: 2,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount https://ffooofle.com*/ }
      pin.kill();
    };
  }, []);

  const Product = ({ img, title = "" }: any) => {
    return (
      <AnimatePresence>
      <motion.div
        // initial={{ filter: "grayscale(100%)", scale: 0.7 }}
        // whileInView={{ filter: "grayscale(0)", scale: 1 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: false, amount: "all",margin:"0px 15% 0px 0px" }}
        style={{width: "fit-content" }}
      >
        <div className={styles.Img}>
          <Image src={img} alt={title} fill />
        </div>
        <h1 style={{ fontWeight: 500, textAlign: "center", cursor: "pointer", margin: "10px" }}>{title}</h1>
      </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className={styles.scrollSectionOuter}>
      <div style={{ display: "flex" }} ref={triggerRef}>
        <div style={{ position: 'absolute', width: "30vw", minHeight: "100vh", zIndex: 10, backgroundColor: "#333", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
          <p className={styles.p}>
            <strong>this is about our team </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, praesentium cumque explicabo assumenda minima cum doloremque nemo voluptates obcaecati quos?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas labore nihil sunt cum eos a quas aliquam laudantium pariatur!
          </p>
        </div>
        <div style={{ height: "100vh", width: `${data.length}00vw`, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", marginLeft: "15vw" }} ref={sectionRef}>
          {data.map((item, index) => (
            <div className={styles.scrollSection} key={index} >
              <Product img={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;