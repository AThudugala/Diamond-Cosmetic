import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../api/Product";

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
        <div>
            {products ? products.map(product => (

                <ProductCard
                    key={product.product_id}
                    name={product.product_name}
                    image={product.image}
                    description={product.product_description} />
            )) : <div>Loading</div>}
        </div>
    );
};


export default ProductList;