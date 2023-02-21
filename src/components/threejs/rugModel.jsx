/*Auto-generated by: https://github.com/pmndrs/gltfjsx
 */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RugModel(props) {
  const { nodes, materials } = useGLTF("/ModernRug.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.phong1SG}
      />
    </group>
  );
}

useGLTF.preload("/ModernRug.glb");