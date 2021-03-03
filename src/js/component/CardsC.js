import React from "react";
import Cards from "./Cards";

const cardsContainer = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Cards />
			</div>
			<div className="col-3">
				<Cards />
			</div>
			<div className="col-3">
				<Cards />
			</div>
			<div className="col-3">
				<Cards />
			</div>
		</div>
	);
};

export default cardsContainer;
