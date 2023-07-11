import React from "react";
import logo from "../assets/Logo .png"
import "../css/Nav.css"

function Nav() {
    return (
        <nav className="Nav" >
            <img className="Image" src={logo} alt="Little Lemon Restaurant Logo"></img>
            <ul className="Links">
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