import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useRecoilValue } from 'recoil';
import { Muted } from "../Atoms";
import { Suspense } from 'react';
// import dynamic from 'next/dynamic';
import CanvasLoader from './CanvasLoader';

export function Dancer(props) {
  const { nodes, materials } = useGLTF("/dancer.gltf");
  const group = useRef(null);
  const isMuted = useRecoilValue(Muted); 

  useFrame(() => {
    if (!group.current) {
      return;
    }
    group.current.rotation.y += !isMuted ? -0.005 : 0;
  });
  return (
    <Suspense fallback={<CanvasLoader />}>
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          rotation={[Math.PI / 2, 0, 0]}
          style={{ curser: "none" }}
        >
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["default"]}
            material-color="#656964"
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials["default"]}
            material-color="#656964"
          />
        </group>
      </group>
    </group>
    </Suspense>
  );
}

useGLTF.preload("/dancer.gltf");
