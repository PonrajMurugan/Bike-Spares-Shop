import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToCart } from './Redux/cartslice';
import "./brakeClutchDetails.css"
import { useDispatch } from 'react-redux';


const brakeDetails = [
  {
    id: 1,
    type: "Brake Caliper",
    card: [
      {
        id: 1,
        img: "https://eauto.co.in/cdn/shop/products/original-honda-front-brake-disc-caliper-for-cb-hornet-160-r-700_500x.jpg?v=1663771958",
        price: "723",
        content: "Honda Front Brake Disc Caliper CB Hornet 160R",
      },
      {
        id: 2,
        img: "https://eauto.co.in/cdn/shop/products/original-honda-rear-brake-disc-caliper-for-cbr-250-326_300x.jpg?v=1632393633",
        price: "4,568",
        content: "Honda Rear Brake Disc Caliper For Honda CBR 250",
      },
      {
        id: 3,
        img: "https://eauto.co.in/cdn/shop/products/original-honda-rear-brake-disc-caliper-for-cb-hornet-160-r-674_500x.jpg?v=1631464305",
        price: "4,580",
        content: "Honda Rear Brake Disc Caliper CB Hornet 160R",
      },
      {
        id: 4,
        img: "https://eauto.co.in/cdn/shop/products/tvs-original-rear-brake-disc-caliper-for-apache-rtr-200-4v-bs4-bs6-models-261_500x.jpg?v=1641728858",
        price: "774",
        content: "TVS Rear Disc Brake Caliper For Apache RTR 200 4V",
      },
      {
        id: 5,
        img: "https://eauto.co.in/cdn/shop/products/mukut-front-brake-disc-caliper-for-honda-cb-hornet-160-r-335_500x.jpg?v=1658636411",
        price: "2,730",
        content: "Front Brake Disc Caliper CB Hornet 160R",
      },
      {
        id: 6,
        img: "https://eauto.co.in/cdn/shop/products/star-front-brake-disc-caliper-for-hero-glamour-bs6-716_500x.jpg?v=1643791041",
        price: "2,709",
        content: "Front Brake Disc Caliper For Hero Glamour",
      }
    ]
  },
  {
    id: 2,
    type: "Brake Disc Plate",
    card: [
      {
        id: 1,
        img: "https://eauto.co.in/cdn/shop/products/mukut-front-disc-brake-plate-for-honda-cbr-250-730_300x.jpg?v=1674646603",
        price: "2,993",
        content: "Front Disk Brake Plate For Honda CBR 250",
      },
      {
        id: 2,
        img: "https://eauto.co.in/cdn/shop/products/star-front-brake-disc-plate-for-ktm-duke-390-rc-inner-hole-diameter-6-cm-223_300x.jpg?v=1675498146",
        price: "1,628",
        content: "Front Disk Brake Plate For KTM Duke 390 | RC 390",
      },
      {
        id: 3,
        img: "https://eauto.co.in/cdn/shop/products/star-front-brake-disc-plate-for-ktm-duke-390-rc-inner-hole-diameter-9-cm-491_300x.jpg?v=1675497607",
        price: "1,628",
        content: "Front Disk Brake Plate For KTM Duke 125",
      },
      {
        id: 4,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-disc-plate-for-tvs-apache-rtr-200-968_300x.jpg?v=1631387835",
        price: "1,448",
        content: "Rear Disk Plate For TVS Apache RTR 200",
      },
      {
        id: 5,
        img: "https://eauto.co.in/cdn/shop/products/mukut-rear-disc-brake-plate-ktm-200-666_300x.jpg?v=1674646584",
        price: "1,450",
        content: "Rear Disk Brake Plate For KTM RC390",
      },
      {
        id: 6,
        img: "https://eauto.co.in/cdn/shop/products/front-brake-disc-plate-for-yamaha-gladiator-287_300x.jpg?v=1631361900",
        price: "1,750",
        content: "Front Disk Brake Plate For Yamaha Gladiator",
      }
    ]
  },
  {
    id: 3,
    type: "Disc Brake Master",
    card: [
      {
        id: 1,
        img: "https://eauto.co.in/cdn/shop/products/front-disc-brake-master-cylinder-assembly-for-bajaj-pulsar-135-150-180-200-ns-220-discover-100-100t-125-125st-390_300x.jpg?v=1654098230",
        price: "800",
        content: "Front Disc Brake Master Cylinder Assembly For Pulsar 135 | 150 | 180 | 200",
      },
      {
        id: 2,
        img: "https://eauto.co.in/cdn/shop/products/front-disc-brake-master-cylinder-for-hero-achiever-cbz-xtreme-hunk-glamour-super-splendor-honda-shine-new-assembly-142_300x.jpg?v=1631362271",
        price: "880",
        content: "Front Disc Brake Master Cylinder Assembly For Hero Glamour | Splendor + | Super Splendor",
      },
      {
        id: 3,
        img: "https://eauto.co.in/cdn/shop/products/front-disc-brake-master-cylinder-assembly-for-yamaha-fz-s-fi-v2-fazer-16-sz-r-x-gladiator-433_300x.jpg?v=1631362279",
        price: "920",
        content: "Front Disc Brake Master Cylinder Assembly For Yamaha | FZ-S | FZ-V2 | Fazer",
      },
      {
        id: 4,
        img: "https://eauto.co.in/cdn/shop/products/rear-disc-brake-master-cylinder-assembly-for-yamaha-r15-v1-v2-v3-s-356_300x.jpg?v=1631369017",
        price: "830",
        content: "Rear Disc Brake Master Cylinder Assembly For Yamaha R15 V1 | V2 | V3",
      },
      {
        id: 5,
        img: "https://eauto.co.in/cdn/shop/products/rear-disc-brake-master-cylinder-assembly-for-tvs-apache-rtr-160-4v-180-200-with-pipe-637_300x.jpg?v=1632233750",
        price: "830",
        content: "Rear Disc Brake Master Cylinder Assembly For TVS Apache RTR 160 | 200 | 200-4V",
      },
      {
        id: 6,
        img: "https://eauto.co.in/cdn/shop/products/rear-disc-brake-master-cylinder-assembly-for-bajaj-pulsar-150-as-ns-160-180-200-rs-220-with-921_300x.jpg?v=1631368971",
        price: "830",
        content: "Rear Disc Brake Master Cylinder Assembly For Pulsar 200 | RS | NS | Dominar",
      }
    ]
  },
  {
    id: 4,
    type: "Brake Drum",
    card: [
      {
        id: 1,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-drum-for-mahindra-duro-rodeo-4-nut-952_300x.jpg?v=1654086923",
        price: "1,510",
        content: "Rear Drum Brake For Mahindra Euro | Radeo | 4-Nut",
      },
      {
        id: 2,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-drum-for-mahindra-duro-rodeo-3-nut-358_300x.jpg?v=1643540602",
        price: "1,600",
        content: "Rear Drum Brake For Mahindra Euro | Radeo | 3-Nut",
      },
      {
        id: 3,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-drum-for-yamaha-ray-fascino-alfa-516_300x.jpg?v=1639229725",
        price: "1,400",
        content: "Rear Drum Brake For Yamaha Ray | Fascino | Alpha",
      },
      {
        id: 4,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-drum-for-suzuki-access-new-model-249_300x.jpg?v=1631388790",
        price: "1,070",
        content: "Rear Drum Brake For Suzuki Access New Model",
      },
      {
        id: 5,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-drum-for-suzuki-access-old-model-614_300x.jpg?v=1631388783",
        price: "1,100",
        content: "Rear Drum Brake For Suzuki Access Old Model",
      },
      {
        id: 6,
        img: "https://eauto.co.in/cdn/shop/products/rear-brake-drum-for-honda-activa-old-model-998_500x.jpg?v=1631388776",
        price: "1,000",
        content: "Rear Drum Brake For Honda Dio Activa New Model",
      }
    ]
  }
];    



const BrakeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = brakeDetails.find(detail => detail.id === parseInt(id));


  const [selectedPrice, setSelectedPrice] = useState(null);


  const handlePriceFilterChange = (priceRange) => {
      setSelectedPrice(priceRange);
  };


  const filteredCards = details?.card.filter(card => {
      const priceWithoutCommas = parseFloat(card.price.replace(/,/g, ''));
      if (selectedPrice === 'above900') {
          return priceWithoutCommas > 900;
      } else if (selectedPrice === 'above2000') {
          return priceWithoutCommas > 2000;
      } else if (selectedPrice === 'below1450') {
          return priceWithoutCommas < 1450;
      }
      return true;
  });

  const handleAddToCart = (card) => {
      const priceWithoutCommas = parseFloat(card.price.replace(/,/g, ''));
      const cardWithQuantity = { ...card, price: priceWithoutCommas, quantity: 1 };
      dispatch(addToCart(cardWithQuantity));
  };

  return (
      <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="brake-details-container container">
          <div className="filter-and-details">
          
              <div className="brake-filter-options">
                  <h3 className='baskervville-sc-regular' style={{ textDecoration: "underline" }}>Filter by Price :</h3>
                  <form>
                      <div className="filter-option">
                          <label>
                              <input type="radio" name="priceFilter" onChange={() => handlePriceFilterChange('above900')} />
                              <span className="filter-label">Above 900</span>
                          </label>
                      </div>
                      <div className="filter-option">
                          <label>
                              <input type="radio" name="priceFilter" onChange={() => handlePriceFilterChange('above1000')} />
                              <span className="filter-label">Above 1000</span>
                          </label>
                      </div>
                      <div className="filter-option">
                          <label>
                              <input type="radio" name="priceFilter" onChange={() => handlePriceFilterChange('below1450')} />
                              <span className="filter-label">Below 1450</span>
                          </label>
                      </div>
                  </form>
              </div>

              <div className="brake-details">   
                  <h1 className='protest-guerrilla-regular' style={{ marginTop: "60px", textDecoration: 'underline' }}>{details?.type}</h1>
                  <div className="brake-details-cards">
                      {filteredCards?.map(card => (
                          <div key={card.id} className="brake-detail-card">
                              <img src={card.img} alt={`Brake detail ${card.id}`} className="brake-detail-image" />
                              <p className="brake-detail-about">{card.content}</p>
                              <p className="brake-detail-price"> ₹ {card.price}</p>
                              <button className='btn btn-primary cen' onClick={() => handleAddToCart(card)}>Add To Cart</button>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default BrakeDetails;