import React from "React";
import NavBar from "./NavBar.js";
import Jumbotron from "./Jumbotron.js";
import CardsC from "./CardsC.js";
import Footer from "./Footer.js";

//create your first component
export function Home() {
    return (
        <div className="container">
            <NavBar />
            <Jumbotron />
            <CardsC />
            <Footer />
        </div>
    );
}
