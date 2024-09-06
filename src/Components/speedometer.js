import React, { useState , useEffect } from 'react';
import './speedometer.css';
import { Link , useLocation} from 'react-router-dom';
import Navbars from './navbar';

const products = [
  {
    id: 1,
    sta_img: "https://eauto.co.in/cdn/shop/products/mukut-analog-speedometer-for-tvs-scooty-pep-plus-269_200x.jpg?v=1635433824",
    price: 350,
    about: "Tvs Scooty Pep +",
  },
  {
    id: 2,
    sta_img: "https://eauto.co.in/cdn/shop/products/mukut-analog-speedometer-for-hero-splendor-plus-new-with-meter-holder-blup-239_400x.jpg?v=1631376307",
    price: 450,
    about: "Hero Splendor +",
  },
  {
    id: 3,
    sta_img: "https://eauto.co.in/cdn/shop/products/analog-speedometer-for-hero-splendor-pro-967_400x.jpg?v=1669981511",
    price: 1150,
    about: "Hero Splendor pro",
  },
  {
    id: 4,
    sta_img: "https://eauto.co.in/cdn/shop/products/eauto-analog-speedometer-for-royal-enfield-bullet-350-classic-black-dial-876_400x.jpg?v=1670240356",
    price: 2150,
    about: "RE Classic 350",
  },
  {
    id: 5,
    sta_img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-hero-splendor-pro-black-blue-type-2-960_300x.jpg?v=1652003121",
    price: 3750,
    about: "Splendor +",
  },
  {
    id: 6,
    sta_img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-hero-splendor-plus-bs4-2018-model-black-grey-289_300x.jpg?v=1651507219",
    price: 4000,
    about: "Splendor Pro",
  },
  {
    id: 7,
    sta_img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-yamaha-rx100-rx135-rxg-light-blue-975_400x.jpg?v=1641979527",
    price: 3160,
    about: "Rx-100 ",
  },
  {
    id: 8,
    sta_img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-yamaha-rx100-rx135-rxg-wine-redgolden-384_300x.jpg?v=1654661777",
    price: 3000,
    about: "Rx-135 ",
  },
  {
    id: 9,
    sta_img: "https://cdn.shopify.com/s/files/1/0415/7846/3390/files/263B_300x.jpg?v=1696407257",
    price: 1070,
    about: "HF-Delux ",
  },
  {
    id: 10,
    sta_img: "https://eauto.co.in/cdn/shop/files/249A_400x.jpg?v=1694327220",
    price: 1100,
    about: "Passion Plus",
  }
];

const Speed = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');


  const filteredProducts = products.filter((item) => {
    if (filter === 'above500') return item.price > 500;
    if (filter === 'below500') return item.price <= 500;
    return true;
  });

  const sortedProducts = [...filteredProducts]
    .filter((item) => item.about.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'priceAsc') return a.price - b.price;
      if (sort === 'priceDesc') return b.price - a.price;
      return 0; 
    });

  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
    
      <Navbars onSearch={handleSearch} /> 

      <div className="container spm">
        <h1 style={{ textAlign: "center", marginTop: "100px", marginBottom: "25px" }}>
          <i>OUR PRODUCTS</i>
        </h1>

        <div className="filter-container" style={{ textAlign: "center", marginBottom: "20px" }}>
          <button className="btn btn-outline-success" onClick={() => setFilter('all')}>All</button>
          <button className="btn btn-outline-success" onClick={() => setFilter('above500')}>Above ₹500</button>
          <button className="btn btn-outline-success" onClick={() => setFilter('below500')}>Below ₹500</button>
        </div>

       
        <div className="sort-container" style={{ textAlign: "center", marginBottom: "20px" }}>
          <button className="btn btn-outline-success" onClick={() => setSort('priceAsc')}>Price Low to High</button>
          <button className="btn btn-outline-success" onClick={() => setSort('priceDesc')}>Price High to Low</button>
        </div>

     
        <div data-aos="fade-up-right" className="product-list">
          {sortedProducts.map((item) => (
       <div key={item.id} className="product-item">
        <Link to={`/speedometers/${item.id}`} className="speedometer-link">
    <img src={item.sta_img} alt={item.about} />
  </Link>
       <h2 className='baskervville-sc-regular'>{item.about}</h2>
       <p className='baskervville-sc-regular'><b>₹ {item.price}</b></p>
     </div>
     
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speed;
