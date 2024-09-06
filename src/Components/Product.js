import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; 

const Product = () => {
  const data = [
    {
      id: 1,
      sta_img: "https://eauto.co.in/cdn/shop/files/3_400x.jpg?v=1622816136",
      brand:"Bajaj",
    },
    {
      id: 2,
      sta_img: "https://eauto.co.in/cdn/shop/files/5_ef93601e-e848-4fce-b9b9-9480b8d5597e_400x.jpg?v=1622816118",
      brand:"Hero",
    },
    {
      id: 3,
      sta_img: "https://eauto.co.in/cdn/shop/files/8_400x.jpg?v=1622816118",
      brand:"Honda",
    },
    {
      id: 4,
      sta_img: "https://eauto.co.in/cdn/shop/files/2_840bc835-2c86-48ee-9eb3-d161b28921a5_400x.jpg?v=1622816136",
      brand:"Tvs",
    }
  ];

  return (
    <div data-aos="zoom-in-left" className="gallery-container container">
    <h1 className="gallery-title"><i>Product Gallery</i></h1>
    {data.map(item => (
      <div key={item.id} className="gallery-item">
        <Link to={`/products/${item.id}`}>
          <img src={item.sta_img} alt={`Gallery item ${item.id}`} />
        </Link>
        <h1 className="product-name">{item.name}</h1>
        <p className="handjet"><b>{item.brand}</b></p>
      </div>
    ))}
  </div>
  
  );
};

export default Product;
