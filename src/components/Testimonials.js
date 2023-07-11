import React from "react";
import personImage from "../assets/restaurantChef B.jpg"

function Testimonials() {
    return (
        <div className="testimonials-container">

            <h1>Testimonials</h1>
            <div className="testimonials-card-container">

                <div className="testimonials-card-1">
                    <div className="rate">
                        <p>★ ★ ★ ★ ★</p>
                    </div>
                    <div className="testimonials-photo-text-container">
                        <img src={personImage} alt="Testimonials person image" />
                        <label>Jhon Pereira Alcantara</label>
                    </div>
                    <div className="testimonials-review">
                        <p>Some text to be the person review of Little Lemon Restaurant.</p>
                    </div>
                </div>
                <div className="testimonials-card-2">
                    <div className="rate">
                        <p>★ ★ ★ ★ ★</p>
                    </div>
                    <div className="testimonials-photo-text-container">
                        <img src={personImage} alt="Testimonials person image" />
                        <label>Jhon Pereira Alcantara</label>
                    </div>
                    <div className="testimonials-review">
                        <p>Some text to be the person review of Little Lemon Restaurant.</p>
                    </div>
                </div>
                <div className="testimonials-card-3">

                    <div className="rate">
                        <p>★ ★ ★ ★ ★</p>
                    </div>

                    <div className="testimonials-photo-text-container">
                        <img src={personImage} alt="Testimonials person image" />
                        <label>Jhon Pereira Alcantara</label>
                    </div>

                    <div className="testimonials-review">
                        <p>Some text to be the person review of Little Lemon Restaurant.</p>
                    </div>
                </div>
                <div className="testimonials-card-4">
                    <div className="rate">
                        <p>★ ★ ★ ★ ★</p>
                    </div>
                    <div className="testimonials-photo-text-container">
                        <img src={personImage} alt="Testimonials person image" />
                        <label>Jhon Pereira Alcantara</label>
                    </div>
                    <div className="testimonials-review">
                        <p>Some text to be the person review of Little Lemon Restaurant.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Testimonials;