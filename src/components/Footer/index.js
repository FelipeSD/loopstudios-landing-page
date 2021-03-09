import React from "react";
import "./footer.scss";
import {LinkList} from "../Navbar";

import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div>
                <img src={logo} alt="loopstudios logo" />
                <LinkList />
            </div>
            <div>
                <ul className="linkList">
                    <li>
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="facebook" />
                        <img src={pinterest} alt="facebook" />
                        <img src={instagram} alt="facebook" />
                    </li>
                </ul>
                <span>© 2021 Loopstudios. All rights reserved.</span>
            </div>


            <div className="attribution">
                Challenge by <a rel={"noreferrer"} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a rel={"noreferrer"} target="_blank" href="https://github.com/FelipeSD">Felipe SD</a>.
            </div>
        </div>
    )
}

export default Footer;