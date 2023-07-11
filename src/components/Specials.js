import React from "react";
import GreekSalad from "../assets/greekSalad.jpg"
import Bruschetta from "../assets/bruchetta.png"
import LemonDessert from "../assets/lemonDessert.jpg"

function Specials() {
    return (
        <div className="specials-container">
            <div className="specials-header">
                <h1>This weeks specials</h1>
                <button type="submit">Online menu</button>
            </div>
            <div className="specials-cards">
                <div className="specials-card-1">

                    <a href="#">
                        <img src={GreekSalad} />

                        <div className="specials-card-content-1">
                            <h2>Greek Salad <label>$ 12.99</label></h2>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. Garnished with crunchy garlic and rosemary crountons.</p>
                            <h3>Order a delivery</h3>

                        </div>

                    </a>
                </div>
                <div className="specials-card-2">
                    <a href="#">
                        <img src={Bruschetta} />

                        <div className="specials-card-content-2">
                            <h2>Greek Salad <label>$ 12.99</label></h2>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. Garnished with crunchy garlic and rosemary crountons.</p>
                            <h3>Order a delivery</h3>
                        </div>
                    </a>

                </div>
                <div className="specials-card-3">
                    <a href="#">
                        <img src={LemonDessert} />

                        <div className="specials-card-content-3">
                            <h2>Greek Salad <label>$ 12.99</label></h2>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. Garnished with crunchy garlic and rosemary crountons.</p>
                            <h3>Order a delivery</h3>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Specials;