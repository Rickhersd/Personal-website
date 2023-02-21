/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/Computer.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Comp_Mouse.geometry}
        material={materials.lambert3SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials.lambert3SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drive.geometry}
        material={materials.lambert3SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.System_unit_1.geometry}
        material={materials.lambert3SG}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.System_unit_1_1.geometry}
        material={materials.initialShadingGroup}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard1.geometry}
        material={materials.lambert3SG}
      />
    </group>
  );
}

useGLTF.preload("/Computer.glb");