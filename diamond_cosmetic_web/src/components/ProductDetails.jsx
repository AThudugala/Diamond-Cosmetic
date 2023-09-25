import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/Product";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(id, product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product">
      <div className="product-image">
        <h1>{product.product_name}</h1>
        <img src={product.img_url} alt="pic" />
      </div>
      <div className="product-details">
        <p>{product.product_description}</p>
        <div className="category">{product.product_category}</div>
        <p>{product.directions}</p>
        <p>Price: {product.price}</p>
        <p>In Stock: {product.in_stock}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
