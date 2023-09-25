import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../api/Product";
import './ProductList.css';

const ProductList = () => {

    const [products, setProducts] = useState();
    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
       

        return () => {
            setProducts();
        }
    }, [])

    console.log(products);

    return (
        <div className="product-list">
            {products ? products.map(product => (

                <ProductCard
                    key={product.product_id}
                    name={product.product_name}
                    image={product.img_url}
                    description={product.product_description} />
            )) : <div>Loading</div>}
        </div>
    );
};


export default ProductList;