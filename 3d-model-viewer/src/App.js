import React, {useRef, useEffect, useCallback} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
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
    <Canvas>
      <directionalLight intensity={0.5} />
      <Camera position={[0, 0, 3]} />
      <Miami />
    </Canvas>
  );
}
