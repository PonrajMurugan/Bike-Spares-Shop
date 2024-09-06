import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './Banner.css';


const Banner = () => {

  return (
    <div className='container margin-top-1 '>
     <div id="carouselExampleInterval" class="carousel slide "  data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img className='' src="https://eauto.co.in/cdn/shop/files/eautobanners_Desktop_Bike_Model_f651b811-b1c3-490f-bcfb-cdcf3f8f88c4_1800x.jpg?v=1630859021" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://eauto.co.in/cdn/shop/files/eautobanners_Shop_by_spares_CAtegory_b319e8ee-5fca-46e5-992a-0a716f914c72_1800x.jpg?v=1630859441" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://eauto.co.in/cdn/shop/files/1800_x_600_Creative_6_0a2c385b-c9aa-4a7f-9e90-c486db9b2084_1800x.png?v=1711960693" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Banner;



