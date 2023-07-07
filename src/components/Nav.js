import React from "react";
import logo from "../assets/Logo .png"

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Little Lemon Restaurant Logo"></img>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">menu</a></li>
                <li><a href="#">reservations</a></li>
                <li><a href="#">order online</a></li>
                <li><a href="#">login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;