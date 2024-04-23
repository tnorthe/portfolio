import React, {Suspense, useRef} from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {Decal, OrbitControls, Preload, Float, useTexture} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  let decal;
  try {
    [decal] = useTexture([props.imgUrl]);
  } catch (error) {
    console.log('Failed to load texture');
    return null;
  }

  if (!decal) return null;
  const light = useRef();

  // Check if decal is a valid texture
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
      </mesh>
      <Decal
        map={decal}
        rotation={[2 * Math.PI, 0, 6.25]}
        position={[0, 0, 1]} 
        flatShading/>
    </Float>
  )
}


const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameLoop="demand"
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense> 
      <Preload all />
    </Canvas>
  )
}



export default BallCanvas;