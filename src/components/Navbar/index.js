import React from 'react';
import './navbar.scss';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';

const Navbar = () => {
    return (
        <nav className="navContainer">
            <img src={logo} alt="loopstudios logo" />
            <button type="button" className="hamburgerButton">
                <img src={hamburger} alt="hamburger" />
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