import React from "react";
import './ProductCard.css';
import { Link, Navigate } from "react-router-dom";

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
            <div className="view">
                <Link className="button" to={`product/${props.id}`}>View</Link>
            </div>
        </div>
    );
};

export default ProductCard;