import './showcase.css';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Marquee from "react-fast-marquee";





function Showcase(){
    return(
        <div className="showcase container">
            <Marquee pauseOnHover style={{height:'5%'}} autoFill>
                <div className='marq pink'>
                    <img className='stella' src='./Subtract.png'/> PROJECTS <img className='stella' src='./Subtract.png'/> PROJECTS
                </div>
            </Marquee>
            <Marquee pauseOnHover style={{height:'5%'}} autoFill direction='right'>
                <div className='marq blue'>
                    <img className='stella' src='./Subtract.png'/> PROJECTS <img className='stella' src='./Subtract.png'/> PROJECTS
                </div>
            </Marquee>
            
            
        </div>
    )
}

export default Showcase;