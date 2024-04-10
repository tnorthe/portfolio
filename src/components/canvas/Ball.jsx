import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {Decal, OrbitControls, Preload, Float, useTexture} from '@react-three/drei';

import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';

const Ball = (props) => {
  let decal;
  try {
    [decal] = useTexture([props.imgUrl]);
  } catch (error) {
    console.log('Failed to load texture');
    return null;
  }

  if (!decal) return null;
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>  
      </mesh>
      <Decal
        texture={decal}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 0, Math.PI / 2]}
        position={[0, 0, 1]} />
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

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

export default BallCanvas