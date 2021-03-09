import React, {useState} from 'react';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import close from '../../assets/images/icon-close.svg';

export const LinkList = () => {
    return (
        <ul>
            <li>
                <a href="#loopstudios">About</a>
            </li>
            <li>
                <a href="#loopstudios">Careers</a>
            </li>
            <li>
                <a href="#loopstudios">Events</a>
            </li>
            <li>
                <a href="#loopstudios">Products</a>
            </li>
            <li>
                <a href="#loopstudios">Support</a>
            </li>
        </ul>
    )
}
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

            <LinkList />
        </nav>
    )
}

export default Navbar;