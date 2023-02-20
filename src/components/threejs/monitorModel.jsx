import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MonitorModel(props) {
  const { nodes, materials } = useGLTF("/Monitor.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials.lambert3SG}
      />
    </group>
  );
}

useGLTF.preload("/Monitor.glb");