import React from "React";
import Cards from "./Cards";

const CardsC = () => {
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

export default CardsC.js;
