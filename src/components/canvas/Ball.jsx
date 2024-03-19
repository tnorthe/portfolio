import React, {Suspense, useRef} from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {Decal, OrbitControls, Preload, Float, useTexture, Icosahedron} from '@react-three/drei';

import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';

const Ball = (props) => {
  //const [decal] = useTexture([props.imgUrl]);
  const light = useRef();

  useFrame(() => {
    if (light.current) {
      light.current.position.set(0, 0, 0.05);
    }
  });

  // Check if decal is a valid texture
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight ref={light}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <Icosahedron args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
      </mesh>
    </Float>
  )
}

/*Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};*/

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

/*BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};*/

export default BallCanvas;