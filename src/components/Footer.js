import React from "react";
import logo2 from "../assets/Logo2.png"
import "../css/Footer.css"

function Footer() {
    return (
        <footer>
            <div>

                <img src={logo2} alt="Doormat Navigation"></img>

                
            </div>

            <div className="DoorMat">
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

            <div className="Contact">
                <h1>Contact</h1>
                <ul>
                <li><a href="#">adress</a></li>
                <li><a href="#">phone number</a></li>
                <li><a href="#">email</a></li>
                </ul>
            </div>

            <div className="SocialMedia">
                <h1>social media links</h1>
                <ul>
                <li><a href="#">instagram</a></li>
                <li><a href="#">facebook</a></li>
                <li><a href="#">whatsapp</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;