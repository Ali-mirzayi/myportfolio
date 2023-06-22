import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const data = [
  {
    text: "Mia",
    image: "/users/emmastone.jpg",
    class: "perspective-left",
  },
  {
    text: "Sebastian",
    image: "/users/RyanGosling.jpg",
    class: "perspective-right",
  },
  {
    text: "keith in oscar 2017",
    image: "/users/Johnlegend.webp",
    class: "perspective-left third",
  },
];

function Case() {
  const perspectiveRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);
  const it1 = useRef(null);
  const it2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "3000 bottom",
        scrub: 3 / 4,
        pin: true,
        snap: 1 / 3,
      },
    })
      .to(perspectiveRef.current, {
        transform: "translate3d(0px, 0px, 35rem)",
      })
      .set(it1, {
        opacity: 0,
      }, 0.250)
      .set(it2, {
        opacity: 0,
      }, 0.400);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={triggerRef} className="perspective">
      <h1 style={{ fontSize: "2.8rem", position: "absolute", top: "2vw", left: "5vw", zIndex: 999 }}>cast</h1>
      <div ref={perspectiveRef} className="perspective-inner">
        {data.map((project, index) => (
          <div ref={index === 0 ? it1 : index === 0 ? it2 : undefined} key={index} className={project.class}>
              <img src={project.image} alt={project.text} style={{borderRadius:"7px"}}/>
            <div className="perspective-desc">
              <h2>{project.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: "20rem" }} />
    </div>
  );
}

export default Case;