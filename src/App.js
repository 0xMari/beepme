import './App.css';
import * as THREE from "three";
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MarchingCubes, MarchingCube, Environment, Bounds, MeshTransmissionMaterial, Text, Loader } from '@react-three/drei';
import { Physics, RigidBody, BallCollider } from '@react-three/rapier';


const Typo = () => {
  return(
    <>
      <Text anchorX="left" fontSize={2} letterSpacing={-0.025} color="black" position={[-6.6 ,1.5,-7]} font='/PlayfairDisplay-Regular.ttf'>
        Hi bestie!
      </Text>
      <Text anchorX="left" fontSize={0.5} letterSpacing={-0.025} color="black" position={[-6.4 , 0.3 ,-7]} font='/PlayfairDisplay-Regular.ttf'>
        I'm
      </Text>
      <Text anchorX="left" fontSize={3.5} letterSpacing={-0.025} color="black" position={[-6,-0.8,-7]} font='/PlayfairDisplay-Italic.ttf'>
        MARIA
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
      <MarchingCube strength={0.4} subtract={6} color={color} />
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
      <MarchingCube strength={0.2} subtract={10} />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
};


const Blob = () => {
  return(
    <Suspense fallback={null}>
        <Physics gravity={[0, 2.5, 0]}>
            <MarchingCubes resolution={80} maxPolyCount={20000} enableUvs={false} enableColors>
            <MeshTransmissionMaterial  backside backsideThickness={1} thickness={1}  />
            <MetaBall position={[1, 1, 0]} />
            <MetaBall position={[-1, -1, 0]} />
            <MetaBall position={[1, 1, 0]} />
            <MetaBall position={[-1, -1, 0]} />
            <MetaBall position={[1.5, 1.5, 0]} />
            <MetaBall position={[-1.5, -1.5, 0]} />
            <Pointer />
            </MarchingCubes>
            <Environment preset='city' />
        </Physics>
    </Suspense>

  )
};

function App() {
  return (
    <>
    <div className='big-container'>
      
      <div className='canv-wrap'>
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
      <Loader />
      </div>
      <div className='descr'>
        <p>
        This website is currently under construction. You can either have fun with the 🫧water bubbles🫧 above or play around with the demos linked below!
        </p>
        <div className='demos'>
          <div className='demo'>Demo1</div>
          <div className='demo'>Demo2</div>
          <div className='demo'>Demo3</div>
        </div>
        <div className='contact-wrap'>
          <a className='cont' target="_blank" href='https://calendly.com/0xmari'>Schedule a call ↗</a>
          <a className='cont' target="_blank" href='https://www.linkedin.com/in/maria-jyate/'>Linkedin ↗</a>
          <a className='cont' target="_blank" href=''>Mail ↗</a>
          <a className='cont' target="_blank" href='https://github.com/0xMari'>Github ↗</a>
        </div>
        
        
      </div>
    </div>
    
    </>
  );
}




export default App;
