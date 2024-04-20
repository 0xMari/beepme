import './showcase.css';
import Marquee from "react-fast-marquee";


function Showcase(){
    return(
        <div className="showcase container-wrap">
            <div className='marq-wrap'>
                <Marquee pauseOnHover style={{height:'5%'}} autoFill className='rota'>
                    <div className='marq pink synco'>
                        <img className='stella' alt='' src='./Subtract.png'/> PROJECTS <img className='stella' alt='' src='./Subtract.png'/> PROJECTS
                    </div>
                </Marquee>
                <Marquee pauseOnHover style={{height:'5%'}} autoFill direction='right'>
                    <div className='marq blue synco'>
                        <img className='stella' alt='' src='./Subtract.png'/> PROJECTS <img className='stella' alt='' src='./Subtract.png'/> PROJECTS
                    </div>
                </Marquee>
            </div>
            
            <div className="works">
                
                <div>
                    <p className='text-sc'>Here you can find some of my recent projects. 
                    Some of them are cool, some of them even cooler, but who am I to judge?</p> 
                    <p className='peak'>Either way have a peak, it's $FREE.99!</p>
                </div>
            </div>

            <div className='marq-wrap'>
                <Marquee pauseOnHover style={{height:'5%'}} autoFill className='rota'>
                    <div className='marq pink synco'>
                        <img className='stella' alt='' src='./Subtract.png'/> PROJECTS <img className='stella' alt='' src='./Subtract.png'/> PROJECTS
                    </div>
                </Marquee>
                <Marquee pauseOnHover style={{height:'5%'}} autoFill direction='right'>
                    <div className='marq blue synco'>
                        <img className='stella' alt='' src='./Subtract.png'/> PROJECTS <img className='stella' alt='' src='./Subtract.png'/> PROJECTS
                    </div>
                </Marquee>
            </div>
            
        </div>
    )
}

export default Showcase;