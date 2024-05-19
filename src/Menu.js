import './menu.css'
import { useState } from "react";


const NavLinks = ({isClicked, closeMenu}) =>{
    
    return(
        <nav className="NavLinks">
            <a className='menu-link' onClick={() => isClicked && closeMenu()} href="/">Home</a>
            <a className='menu-link' onClick={() => isClicked && closeMenu()} href="/#about">About</a>
            <a className='menu-link' onClick={() => isClicked && closeMenu()} href="/#project">Projects</a>    
            <a className='menu-link' onClick={() => isClicked && closeMenu()} href="/#contacts">Contacts</a>
    </nav>
    )
}

function Menu(){

    const [click, setclick] = useState(false);
    const icon = <img className='menu-icon' alt='aa' src='./Star1.png' onClick={() => setclick(!click)}/>
    const close = <img className="menu-icon" alt='bb' src='./Star2.png' onClick={() => setclick(!click)} />

    const closeMenu = () => setclick(false);


    
    return(
        <>
            <div className='menu-wrap'>
                {/* <img className='menu-icon' alt='aa' src='./Star1.png' /> */}
                {click ? close : icon}
                {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
            </div>
        </>
    )
}

export default Menu;