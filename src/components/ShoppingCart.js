import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleIncrement = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(cartActions.addToCart(item));
    }
  };

  const handleDecrement = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(cartActions.deleteFromCart(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout system is under development.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart">
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started!</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        
        <div className="cart-summary">
          <div className="summary-item">
            <span>Total Items:</span>
            <span className="summary-value">{totalQuantity}</span>
          </div>
          <div className="summary-item">
            <span>Total Cost:</span>
            <span className="summary-value">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)} each</p>
              </div>
              
              <div className="item-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                ${item.totalPrice.toFixed(2)}
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart; 