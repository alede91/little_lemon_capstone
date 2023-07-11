import React from "react";
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About";
import "../css/Main.css"

function Main(){
    return(
        <>
        <Specials/>
        <Testimonials />
        <About />
        </>
    );
};

export default Main;