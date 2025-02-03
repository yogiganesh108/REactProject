import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1>Houseplant Store</h1>
      <nav>
        <Link to="/products">Shop</Link>
        <Link to="/cart">
          <span>Cart ({totalItems})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
