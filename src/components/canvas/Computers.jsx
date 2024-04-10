import {Suspense, useRef, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { HemisphereLight, PointLight } from 'three';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const { nodes, materials } = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <group>
      <mesh>
      <primitive object={computer.scene} scale={0.1} position={[0, 0, 0]} />
      </mesh>
    </group>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HemisphereLight intensity={0.15} groundColor="black"/>
        <PointLight intensity={1} />
        <Computers /> 
      </Suspense> 
      <Preload all />
    </Canvas>
  )
}

export default Computers