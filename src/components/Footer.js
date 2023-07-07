import React from "react";
import logo2 from "../assets/Logo2.png"

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo2} alt="Doormat Navigation"></img>
                <h1>Doormat Navigation</h1>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">menu</a></li>
                    <li><a href="#">reservations</a></li>
                    <li><a href="#">order online</a></li>
                    <li><a href="#">login</a></li>
                </ul>
            </div>

            <div>
                <h1>Contact</h1>
                <ul>
                <li>adress</li>
                <li>phone number</li>
                <li>email</li>
                </ul>
            </div>
            <div>
                <h1>social media links</h1>
                <ul>
                <li>instagram</li>
                <li>facebook</li>
                <li>whatsapp</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;