import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductSingle from './ProductSingle';

function Shoplist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the server when the component mounts
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div id="products" className="list-group">
      {products.map((product) => (
        <ProductSingle key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shoplist;
