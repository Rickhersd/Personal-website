'use client'

import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { Canvas } from "@react-three/fiber";

import ComputerModel from "./ComputerModel";
import { RugModel } from "./rugModel";
import { CraftingTableModel } from "./craftingTable";
import { ChairModel } from "./chairModel";
import { ClaptrapModel } from "./claptrapModel";
import { DeskModel } from "./DeskModel";
import AndroidModel from "./AndroidModel";
import { BeagleModel } from "./beagleModel";
import { MonitorModel } from "./monitorModel";
import { LaptopModel } from "./LaptopModel";
import { CharacterModel } from './CharacterModel';
import { TVModel } from './TVModel'
import { PufModel } from "./pufModel";

export default function Scenary() {
  return <>
      <Canvas shadows={true}>
        <ambientLight intensity={0.4} />
        <directionalLight
          color="white"
          castShadow={true}
          position={[0, 5, 3]}
          intensity={0.9}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <OrbitControls 
          position={[0,0,0]}
          autoRotate={false} 
          enableZoom={false}
          minPolarAngle={1}
          maxPolarAngle={1.5}
          maxDistance={4}
        />
        <group>
          <ComputerModel 
            position={[-1, 0.12, -1.65]} 
            scale={[0.002, 0.002, 0.002]}
          />
          <RugModel 
            position={[0, -0.65, 0]} 
            rotation={[0, 0.3, 0]}
          ></RugModel>
          <DeskModel
          position={[0, -0.65, 0]}
          scale={[2, 2, 2]}
          rotation={[0, -1.5, 0]}
          />
          <CraftingTableModel
            position={[1.7, 0, -0.5]}
            rotation={[0, 2.2, 0]}
            scale={[0.3, 0.3, 0.3]}
          ></CraftingTableModel>
          <AndroidModel
            scale={[5, 5, 5]}
            position={[0.3, -0.7, -1.6]}
            rotation={[0, 0.5, 0]}
          />
          <BeagleModel
            scale={[0.008, 0.008, 0.008]}
            rotation={[0, 2.2, 0]}
            position={[1.2, -0.35, 1.2]}
          />
          <MonitorModel
            scale={[0.002, 0.002, 0.002]}
            position={[-1.6, 0.12, -1.3]}
            rotation={[0, 1, 0]}
          />
          <LaptopModel
            rotation={[0, 2, 0]}
            position={[-1.6, 0.13, -0.4]}
            scale={[0.04, 0.04, 0.04]}
          />
          <ClaptrapModel
            position={[2, -0.2, 0.5]}
            scale={[1.2, 1.2, 1.2]}
            rotation={[0, 1, 0]}
          />
          <ChairModel
            position={[-0.5, -0.6, 0]}
            rotation={[0, 2.2, 0]}
          ></ChairModel>
          <CharacterModel 
            position={[0.1,-0.65,0]}
          />
          <TVModel 
            rotation={[0,Math.PI /2,0]}
            scale={[0.35,0.35,0.35]}
            position={[-2,1,0]}
          />
          <PufModel 
          position={[9,-0.7,7.8]}
          rotation={[0,2,0]}
          scale={[0.03,0.03,0.03]}/>
        </group>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.7, 0]}
          receiveShadow
        >
          <planeGeometry args={[200, 200]}></planeGeometry>
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
  </>
}
