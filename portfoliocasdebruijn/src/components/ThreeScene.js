import React, { Component, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import {Instance, Instances} from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from '../assets/models/model.js'


const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.enablePan=false;
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  
  const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
    // Renders a grid and crosses as instances
    <Instances position={[0, -1.02, 0]}>
      <planeGeometry args={[lineWidth, height]} />
      <meshBasicMaterial color="#999" />
      {Array.from({ length: number }, (_, y) =>
        Array.from({ length: number }, (_, x) => (
          <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
            <Instance rotation={[-Math.PI / 2, 0, 0]} />
            <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          </group>
        ))
      )}
      <gridHelper args={[100, 100, '#bbb', '#bbb']} position={[0, -0.01, 0]} />
    </Instances>
  )

class ThreeScene extends Component {
    render() {
        return (
            <div id="canvas-container">
            <Canvas orthographic camera={{ position: [-1, 0.5, 20], left: -2,
               right: 2, top: 2, bottom: -2, zoom: 100 }}>
                <Model/>
                <ambientLight intensity={1} />
            </Canvas>
            </div>
        );
    }
}

export default ThreeScene;