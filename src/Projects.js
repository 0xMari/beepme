import './projects.css';
import { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll,} from '@react-three/drei'




const PrjList = () => {

    return(
        <div className='prjs'>
            <a className='prj-link' href='/projects' >This is still a work in progress</a>
            <a className='prj-link' href='/projects' >I will figure it out eventually</a>
            <a className='prj-link' href='/projects' >Lorem ipsum</a>
            <a className='prj-link' href='/projects' >Dolor sit</a>
            <a className='prj-link' href='/projects' >Amet consectetur</a>
            <a className='prj-link' href='/projects' >Adipiscing elit</a>
            <a className='prj-link' href='/projects' >Donec pretium</a>
            
        </div>
    )
}



export default function Projects(){
    return(
        <>  
            <Canvas gl={{ antialias: false }}>
            <ambientLight intensity={1.5}/>
            <color attach='background' color={'#f0f0f0'} />
            <Suspense fallback={null}>
                <ScrollControls infinite pages={3} damping={0.1}>
                {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                <Scroll html>
                    {/* DOM contents in here will scroll along */}
                    <PrjList />
                </Scroll>
                </ScrollControls>
                <Preload all />  
            </Suspense>   
            </Canvas>    
        </>
    )
}