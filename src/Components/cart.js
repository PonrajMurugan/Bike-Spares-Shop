import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../Components/Redux/cartslice';
import './cart.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isPurchased, setIsPurchased] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    if (!name || !email) {
      setError('Please fill in both your name and email.');
      return;
    }
    setError(''); 
    setIsPurchased(true);
    dispatch(clearCart()); 
  };

  return (
    <div className="cart-page container">
      <h2 style={{ marginBottom: '25px' }}>
        <i>Your Cart</i>
      </h2>

      {cartItems.length === 0 && !isPurchased ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.img} alt={item.content} width="50" />
                <span className='nerko-one-regular'><p>{item.content}</p></span>
                <span className='nerko-one-regular'>₹ {item.price}</span>
                <span className='nerko-one-regular'> * {item.quantity} </span>
                <button 
                  type="button" 
                  className="btn btn-info" 
                  onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 style={{ marginTop: '25px', marginBottom: '25px' }}>
            <i>Total Amount: ₹ {calculateTotal().toFixed(2)}</i>
          </h3>
        </>
      )}

      {cartItems.length > 0 && !isPurchased && (
        <>
          <div className="customer-info">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <p className="text-danger">{error}</p>}
          </div>

          <button 
            style={{ marginBottom: '50px' }} 
            className="btn btn-success" 
            onClick={handlePurchase}>
            Purchase
          </button>

          <button 
            style={{ marginBottom: '50px' }} 
            className="btn btn-danger" 
            onClick={handleClearCart}>
            Clear Cart
          </button>
        </>
      )}

      {isPurchased && (
        <div className="success-message">
          <h3>Successfully completed!</h3>
          <p>Thank you for your purchase, {name}.</p>
          <p>A confirmation email has been sent to {email}.</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
