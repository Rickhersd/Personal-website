/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PufModel(props) {
  const { nodes, materials } = useGLTF("/Chair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node.geometry}
        material={materials.Bean_Bag}
      />
    </group>
  );
}

useGLTF.preload("/Chair.glb");