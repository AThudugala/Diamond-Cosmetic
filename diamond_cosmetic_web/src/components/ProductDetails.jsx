import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/Product';

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, []);
  

  return (
    <div>
            {products ? products.map(product => (

                <ProductCard
                    key={product.product_id}
                    name={product.product_name}
                    image={product.image}
                    description={product.product_description}
                    category={product.product_category}
                    directions={product.directions}
                    price={product.price}
                    inStock={product.in_stock} />
            )) : <div>Loading</div>}
        </div>
  );
};

export default ProductDetails;
