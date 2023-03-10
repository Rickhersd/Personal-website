/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function AndroidModel(props) {
  const { nodes, materials } = useGLTF("/AndroidRobot.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Andy_GEO.geometry}
        material={materials.initialShadingGroup}
      />
    </group>
  );
}

useGLTF.preload("/AndroidRobot.glb");
