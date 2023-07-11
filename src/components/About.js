import React from "react";
import OwnerImageA from "../assets/MarioandAdrianA.jpg"
import OwnerImageB from "../assets/MarioAndAdrianB.jpg"

function About() {
    return (
        <div className="about-container">
            <div className="about-content-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed sapien justo, accumsan eu blandit nec, convallis id
                      turpis. In ornare auctor ex. Donec mattis lacinia tellus
                       vel blandit.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed sapien justo, accumsan eu blandit nec, convallis id
                      turpis. In ornare auctor ex. Donec mattis lacinia tellus
                       vel blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed sapien justo, accumsan eu blandit nec, convallis id
                      turpis.
                       </p>

            </div>
            <div className="about-img">
                <img className="about-img-a" src={OwnerImageA} alt="Owners of Little Lemon Restaurant" />
                <img className="about-img-b" src={OwnerImageB} alt="Owners of Little Lemon Restaurant" />
            </div>
        </div>
    );
};

export default About;