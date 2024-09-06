import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbars from './Components/navbar';
import Banner from './Components/Banner';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import Speed from './Components/speedometer';
import ProductDetailspeedo from './Components/speedometerDetails';
import Footer from './Components/Footer';
import CartPage from './Components/cart';
import './App.css';
import Card from './Components/card';
import Brakes from './Components/brakesClutch';
import BrakeDetails from './Components/brakeClutchDetails'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbars />       
        <ConditionalBannerAndSpeed />
        <Routes>
        <Route path="/" element={<><Product />  <Brakes />  <Card /> </>} />
        <Route path="/products" element={<Product />} /> 
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/speedometers" element={<Speed />} />
        <Route path="/speedometers/:id" element={<ProductDetailspeedo />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/brakes" element={<Brakes />}/>
        <Route path="/brakes/:id" element={<BrakeDetails />} /> 
        </Routes>
        <ConditionalFooter />     
      </div>
    </Router>
  );
};

const ConditionalBannerAndSpeed = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <>
      {isMainPage && <Banner />}
      {isMainPage && <Speed />}
    </>
  );
};

const ConditionalFooter = () => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  return !isCartPage && <Footer />;
};

export default App;
