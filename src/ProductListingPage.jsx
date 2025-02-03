import React from 'react';
import './styles.css';

import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice';

const products = [
    { id: 1, name: 'Aloe Vera', price: 10, imgUrl: '/aloveera.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, imgUrl: '/snake-plant.jpg' },
    { id: 3, name: 'Peace Lily', price: 20, imgUrl: '/white-lily.jpg' },
    { id: 4, name: 'Spider Plant', price: 12, imgUrl: '/spider-plant.jpg' },
    { id: 5, name: 'Fiddle Leaf Fig', price: 25, imgUrl: '/feadle-leaf.jpg' },
    { id: 6, name: 'Monstera', price: 30, imgUrl: '/monstera.jpg' },
    // Add more products as needed
  ];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="container">
      <h2>Product Listing</h2>
      <div className="product-listing">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imgUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
