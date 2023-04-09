import Navbar from './navbar';
import Footer from './footer';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
// import { Dancer } from './Dancer';
import styles from './Layout.module.css';
import dynamic from 'next/dynamic';
import Star from './Star';
const Dancer = dynamic(() => import("./Dancer").then((mod) => mod.Dancer), {
  loading: () => null,
});


export default function Layout({ children, music }: any) {
  return (
    <>
      <Navbar music={music} />
      <Star />
      <div className={styles.main}>
        <Canvas className={styles.canvas}>
          <Stage>
            <Dancer mute={[music.play, music.pause]} />
          </Stage>
        </Canvas>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  )
}