import './App.css';
import * as THREE from "three";
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MarchingCubes, MarchingCube, Environment, Bounds, MeshTransmissionMaterial, Text } from '@react-three/drei';
import { Physics, RigidBody, BallCollider } from '@react-three/rapier';


const Typo = () => {
  return(
    <>
      <Text anchorX="left" fontSize={2} letterSpacing={-0.025} color="black" position={[-6.6 ,2,-7]}>
        HELLO WORLD
      </Text>
      <Text anchorX="left" fontSize={2} letterSpacing={-0.025} color="black" position={[-6.6 ,0,-7]}>
        LOREM IPSUM
      </Text>
      <Text anchorX="left" fontSize={2} letterSpacing={-0.025} color="black" position={[-6.6,-2,-7]}>
        DOLOR SIT
      </Text>
    </>
  )
}


const MetaBall = ({ color, vec = new THREE.Vector3(), ...props }) => {
  const api = useRef();
  useFrame((state, delta) => {
    delta = Math.min(delta, 0.1)
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.05),
      )
    
  })
  return (
    <RigidBody ref={api} colliders={false} linearDamping={4} angularDamping={0.95} {...props}>
      <MarchingCube strength={0.35} subtract={6} color={color} />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
};

const Pointer = ({ vec = new THREE.Vector3() }) => {
  const ref = useRef()
  useFrame(({ pointer, viewport }) => {
    const { width, height } = viewport.getCurrentViewport()
    vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0)
    try {
      ref.current.setNextKinematicTranslation(vec)
    } catch (e) {}
  })
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0.5} subtract={10} color="orange" />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
};


const Blob = () => {
  return(
    <Suspense>
        <Physics gravity={[0, 2, 0]}>
            <MarchingCubes resolution={80} maxPolyCount={20000} enableUvs={false} enableColors>
            <MeshTransmissionMaterial  backside backsideThickness={1} thickness={1}  />
            <MetaBall color="indianred" position={[1, 1, 0]} />
            <MetaBall color="skyblue" position={[-1, -1, 0]} />
            <MetaBall color="teal" position={[1, 1, 0]} />
            <MetaBall color="orange" position={[-1, -1, 0]} />
            <MetaBall color="hotpink" position={[1.5, 1.5, 0]} />
            <MetaBall color="aquamarine" position={[-1.5, -1.5, 0]} />
            <Pointer />
            </MarchingCubes>
            <Environment preset='city' />
        </Physics>
    </Suspense>

  )
};

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={1} />
      <Blob/>
      <Typo/>
      <Bounds fit clip observe margin={1} maxDuration={0}>
        <mesh visible={false}>
            <boxGeometry />
        </mesh>
      </Bounds>
    </Canvas>
  );
}




export default App;
