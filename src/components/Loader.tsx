import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Loader as RingLoader } from '@mantine/core';
import styles from './Loader.module.css';
import { useSetRecoilState } from 'recoil';
import { Permition } from '../Atoms';
import EmotionFlex from './emotionFlex';

const Loader = ({ setPermition, play }: { setPermition: React.Dispatch<React.SetStateAction<boolean>>, play: any }) => {
  const [Loaded, setLoaded] = useState(false);
  const permitionSetter = useSetRecoilState(Permition);

  const player = () => {
    play();
    setPermition(true);
    permitionSetter(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        default: { duration: 3, ease: "easeInOut" },
        fill: { delay: 2, duration: 1, ease: "easeInOut" }
      }
    }
  }

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.parent}
    >
      <div className={styles.div1}>
        <EmotionFlex>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.star} enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff">
            <g>
              <motion.path
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              />
            </g>
          </svg>
        </EmotionFlex>
      </div>
      {Loaded ?
        <div className={styles.div2} onClick={player}>
        <button className={styles.btn}>
          <span style={{ animationDelay: "0s" }} className={styles.span10} />
          <span style={{ animationDelay: "0.67s" }} className={styles.span10} />
          <span style={{ animationDelay: "1.33s" }} className={styles.span10} />
          <motion.span style={{ fontSize: "1.8rem", position: "absolute", top: "1rem", margin: "auto", left: 0, right: 0 }} variants={textVariants} initial="hidden" animate="visible">
             Push me
          </motion.span>
          <div style={{ position: "absolute", top: 0, left: 0, margin: "auto", right: 0, width: "100%", height: "100%", cursor: "pointer" }} />
        </button>
      </div>
        :
        <div className={styles.div2}>
          <button className={styles.btn}>
            <motion.span style={{ fontSize: "1.8rem", position: "absolute", top: "1rem", margin: "auto", left: 0, right: 0 }} variants={textVariants} initial="hidden" animate="visible">
              <RingLoader color="#fff" />
            </motion.span>
          </button>
        </div>
      }

      <div className={styles.div3}>
        <EmotionFlex>
          <svg fill="#ffffff" className={styles.notes} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-6.6 -6.6 73.19 73.19" stroke="#ffffff">
            <motion.path variants={icon}
              initial="hidden"
              animate="visible"
              d="M38.43,14.848c4.736-3.024,5.529-7.111,4.693-9.927c-0.891-2.996-3.57-4.921-6.83-4.921 c-1.748-0.021-3.438,0.635-4.579,1.791c-1.003,1.014-1.546,2.368-1.529,3.803v13.641c-3.811,3.322-7.844,6.889-8.6,7.559 c-2.903,2.175-4.718,5.507-4.977,9.142c-0.235,3.289,0.811,6.356,2.869,8.415c3.313,3.313,8.667,3.027,10.707,2.77v4.467 c0,0.718-0.066,1.276-0.21,1.758c-0.668,2.252-2.774,4.646-5.361,4.646c-2.846,0-5.16-2.314-5.16-5.16c0-0.553-0.447-1-1-1 s-1,0.447-1,1c0,3.948,3.212,7.16,7.16,7.16c3.595,0,6.383-3.058,7.279-6.077c0.199-0.671,0.292-1.41,0.292-2.327v-4.903 c4.028-1.249,6.661-4.402,6.661-8.148c0-3.963-2.884-7.256-6.661-7.913V20.147C35.382,17.365,37.996,15.126,38.43,14.848z M32.185,5.583c-0.011-0.92,0.318-1.745,0.952-2.385c0.764-0.772,1.88-1.221,3.146-1.197c2.362,0,4.292,1.365,4.923,3.49 c0.63,2.118-0.052,5.245-3.852,7.672c-0.473,0.302-2.608,2.117-5.169,4.334V5.583z M20.892,42.936 c-1.624-1.624-2.479-4.188-2.289-6.858c0.219-3.057,1.742-5.856,4.244-7.734c2.142-1.894,4.813-4.245,7.338-6.452v8.631 c-4.151,0.273-7,3.262-7,7.465c0,0.553,0.447,1,1,1s1-0.447,1-1c0-3.074,1.991-5.179,5-5.44V45.1 C28.7,45.306,23.703,45.747,20.892,42.936z M36.846,38.536c0,2.991-2.155,5.049-4.661,6.028V32.661 C34.852,33.287,36.846,35.681,36.846,38.536z"></motion.path>
          </svg>
        </EmotionFlex>
      </div>
      <div className={styles.div4}>
        <EmotionFlex>
          <svg fill="#ffffff" className={styles.notes2} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-3.78 -3.78 61.56 61.56" stroke="#ffffff">
            <motion.path variants={icon}
              initial="hidden"
              animate="visible"
              d="M52.16,0.249c-0.217-0.19-0.503-0.275-0.788-0.241l-31,4C19.873,4.072,19.5,4.497,19.5,5v6v28.623 C17.674,37.428,14.773,36,11.5,36c-5.514,0-10,4.037-10,9s4.486,9,10,9s10-4.037,10-9v-33.12l29-3.742v22.485 C48.674,28.428,45.773,27,42.5,27c-5.514,0-10,4.037-10,9s4.486,9,10,9s10-4.037,10-9V7V1C52.5,0.712,52.376,0.438,52.16,0.249z M11.5,52c-4.411,0-8-3.141-8-7s3.589-7,8-7s8,3.141,8,7S15.911,52,11.5,52z M42.5,43c-4.411,0-8-3.141-8-7s3.589-7,8-7s8,3.141,8,7 S46.911,43,42.5,43z M21.5,5.878l29-3.741v3.983l-29,3.741V5.878z"></motion.path></svg>
        </EmotionFlex>
      </div>
      <div className={styles.div5}>
        <motion.span style={{ fontSize: "2rem", marginBottom: "100px" }} variants={textVariants} initial="hidden" animate="visible">
          Wibe Studio
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Loader;