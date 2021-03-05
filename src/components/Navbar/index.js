import React, {useState} from 'react';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import close from '../../assets/images/icon-close.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={
            `navContainer ${isOpen ? "open-menu" : ""}`
        }>
            <img src={logo} alt="loopstudios logo" />
            <button type="button" className="hamburgerButton" onClick={()=>setIsOpen(!isOpen)}>
                {isOpen
                    ? <img src={close} alt="close" />
                    : <img src={hamburger} alt="hamburger" />
                }

            </button>

            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;