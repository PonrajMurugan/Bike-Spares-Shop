import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbars = ({ onSearch }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const cartItemCount = useSelector((state) =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className='margin-top container bk b-r'>
            <nav className=" container navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className='img-size' src="https://eauto.co.in/cdn/shop/files/logo-eauto-warehouse_5_210x@2x.png?v=1615902614" alt="Bootstrap" width="70" height="44" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/speedometers" target="_blank" rel="noopener noreferrer">Products</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/products">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/brakes">Shop</a>
                            </li>                          
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Order Tracking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearchSubmit} role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button className="btn btn-outline-primary btn-1 position-relative" onClick={handleCartClick}>
                            <i className="fas fa-shopping-cart"></i>
                            {cartItemCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItemCount}
                                    <span className="visually-hidden">items in cart</span>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbars;
