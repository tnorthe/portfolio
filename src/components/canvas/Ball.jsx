import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {Decal, OrbitControls, Preload, Float, useTexture} from '@react-three/drei';

import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';

const Ball = (props) => {
  //const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.75} />
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>  
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({icon}) => {
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