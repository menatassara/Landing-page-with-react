import React from "react";
import NavBar from "./NavBar.js";
import Jumbotron from "./Jumbotron.js";
import CardsC from "./CardsC.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<CardsC />
		</div>
	);
}
