import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Shop.module.css";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const Item = styled(motion.div)`
  display: inline-block;
  width : fit-content;
  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    
  }
`;

function ScrollSection() {

  const data = [{ img: "https://picsum.photos/id/120/1200/1800", title: "title1" },
  { img: "https://picsum.photos/id/121/1200/1800", title: "title2" },
  { img: "https://picsum.photos/id/122/1200/1800", title: "title3" },
  { img: "https://picsum.photos/id/123/1200/1800", title: "title4" },
  { img: "https://picsum.photos/id/124/1200/1800", title: "title5" },
  { img: "https://picsum.photos/id/125/1200/1800", title: "title6" },
  { img: "https://picsum.photos/id/126/1200/1800", title: "title7" },
  { img: "https://picsum.photos/id/127/1200/1800", title: "title8" },
  { img: "https://picsum.photos/id/128/1200/1800", title: "title9" },
  { img: "https://picsum.photos/id/129/1200/1800", title: "title10" },
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
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top",
          end: "bottom",
          scrub: 2,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  const Product = ({ img, title = "" }: any) => {
    return (
      <Item
        initial={{ filter: "grayscale(100%)", scale: 0.7 }}
        whileInView={{ filter: "grayscale(0)", scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "all" }}
      >
        <div style={{ width: "50vw", height: "50vh", position: "relative", borderRadius: "10px", overflow: "hidden" }}>
          <Image src={img} alt={title} fill />
        </div>
        <h1 style={{ fontWeight: 500, textAlign: "center", cursor: "pointer", margin: "10px" }}>{title}</h1>
      </Item>
    );
  };

  return (
    <section className={styles.scrollSectionOuter}>
      <div style={{ display: "flex" }} ref={triggerRef}>
        <div style={{ position: 'absolute', width: "35vw",minHeight:"100vh", zIndex: 10, backgroundColor: "#333", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
          <p style={{ marginBottom: "150px" }}>
            The brand new collection is currently being developed in USA. We
            create our products using best quality material, including the use of
            some of the pure fabrics to make our products. All products are made
            using the best materials, from the finest cotton to the finest
            fabrics.
            <br /><br />
            We have lots of different clothing options like shoes, jackets and
            dresses. Not only clothes but we also provide unique Jewellery as
            well. It is great for us to carry our new clothes all around the
            country and look different.
          </p>
        </div>
        <div style={{ height: "100vh", width: `${data.length}00vw`, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#222", marginLeft: "10vw" }} ref={sectionRef}>
          {data.map((item, index) => (
            <div className={styles.scrollSection} key={index} >
              <Product img={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </div>
      {data.length}
    </section>
  );
}

export default ScrollSection;