import React from "react";
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className="column">
            <h1>{props.name}</h1>
            <img
                className="pic"
                src={props.image}
                alt="pic"
            />
            <p>{props.description}</p>
        </div>
    );
};

export default ProductCard;