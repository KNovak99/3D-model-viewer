import React, {useRef, useEffect, useCallback, Suspense} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import './App.css'
import Miami from './Miami_Street_web.js';
import { a } from '@react-spring/three';
import Scroll from './scroll.js';

const Camera = (props) => {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame(() => ref.current.updateMatrixWorld());
  const [y] = Scroll([-100, 100], { domTarget: window });
  return <a.perspectiveCamera ref={ref} {...props} position-y={y.to((y) => (y / 500) * 25)} />
};

export default function App() {
  return (
    <Canvas className="canvas">
      <directionalLight intensity={0.5} />
      <Suspense>
        <Camera position={[0, 0, 1]} />
        <Miami />
      </Suspense>
    </Canvas>
  );
}
