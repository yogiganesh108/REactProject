import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from './cartSlice';
import { Link } from 'react-router-dom';

const CartItem = React.memo(({ item, onIncrease, onDecrease, onRemove }) => (
  <div className="cart-item">
    <img src={item.imgUrl} alt={item.name} className="cart-item-image" />
    <div className="cart-item-details">
      <h3>{item.name}</h3>
      <p>${item.price} x {item.quantity}</p>
      <div className="cart-item-actions">
        <button onClick={() => onIncrease(item.id)}>+</button>
        <button onClick={() => onDecrease(item.id)}>-</button>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  </div>
));

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (id) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page container">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Cost: ${totalCost}</h3>
        <button className="checkout-button">Checkout - Coming Soon</button>
        <Link to="/products">
          <button className="continue-shopping-button">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
