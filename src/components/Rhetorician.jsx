import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function Model(props) {
  const group = useRef(null);
  useFrame(() => {
    if (!group.current) {
      return;
    }
    group.current.rotation.y += true ? -0.006 : 0;
  });
  const { nodes, materials, animations } = useGLTF("/Rhetorician.gltf");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="mentor_roman_retopo" position={[-0.27, 0.12, 1.33]}>
              <mesh
                name="mentor_roman_retopo_0"
                geometry={nodes.mentor_roman_retopo_0.geometry}
                material={materials.Stone}
              />
            </group>
            <group
              name="Empty"
              position={[0.16, -0.17, 4.81]}
              rotation={[-0.1, 0.1, 0]}
              scale={0.89}
            >
              <group name="nimbus002">
                <mesh
                  name="nimbus002_0"
                  geometry={nodes.nimbus002_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus001">
                <mesh
                  name="nimbus001_0"
                  geometry={nodes.nimbus001_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus003">
                <mesh
                  name="nimbus003_0"
                  geometry={nodes.nimbus003_0.geometry}
                  material={materials.Crown}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Rhetorician.gltf");
