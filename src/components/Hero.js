import React, { Fragment } from "react";
import HeroImage from "../assets/restauranfood.jpg"

function Hero() {
    return (
        <div className="callToAction-container">
            <div className="callToAction">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button type="submit">Reserve a table</button>
            </div>
            <div className="img-div">

                <img src={HeroImage} alt="Hero image" className="img" />

            </div>
        </div>
    );
};

export default Hero;