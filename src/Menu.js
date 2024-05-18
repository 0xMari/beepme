import './menu.css'
import { useState } from "react";


const NavLinks = ({isClicked, closeMenu}) =>{
    return(
        <nav className="NavLinks">
        <ul>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/">Home</a>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/#about">About</a>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/#project">Projects</a>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/#contacts">Contacts</a>
            </li>
        </ul>
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