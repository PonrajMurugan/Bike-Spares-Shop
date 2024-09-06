import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Components/Redux/cartslice';
import './speedometerdetails.css';

const productDetailsp = [
  {
    id: 1,
    img: "https://eauto.co.in/cdn/shop/products/mukut-analog-speedometer-for-tvs-scooty-pep-plus-269_200x.jpg?v=1635433824",
    content: "MUKUT Analog Speedometer for TVS scooty pep plus",
    price: "350",
    stock: "In Stock",
    description: "MUKUT'S PRECISION MADE SPEEDOMETER TO MEASURE AND DISPLAY THE SPEED OF THE VEHICLE INSTANTANEOUSLY",
    product_info: [
      {
        brand: "MUKUT",
        vehicle: "Scooty Pep Plus",
        speedometer: "Analog",
        material: "PVC + Glass",
        weight: "1-kg Approx"
      }
    ],
    specialFeature: [
      {
        con1: "Error Free Reading",
        con2: "High Precious Measurement",
        con3: "Long Service Life",
        con4: "Use Of Quality Construction Material To Ensure A High Level Of Performance"
      }
    ]
  },
  {
    id: 2,
    img: "https://eauto.co.in/cdn/shop/products/mukut-analog-speedometer-for-hero-splendor-plus-new-with-meter-holder-blup-239_400x.jpg?v=1631376307",
    content: "Splendor Plus New | With Meter Holder And Bulb",
    price: "450",
    stock: "In Stock",
    description: "MUKUT'S PRECISION MADE SPEEDOMETER TO MEASURE AND DISPLAY THE SPEED OF THE VEHICLE INSTANTANEOUSLY",
    product_info: [
      {
        brand: "MUKUT",
        vehicle: "Splendor Plus New",
        speedometer: "Analog",
        material: "PVC + Glass",
        weight: "1-kg Approx"
      }
    ],
    specialFeature: [
      {
        con1: "Error Free Reading",
        con2: "High Precious Measurement",
        con3: "Long Service Life",
        con4: "Use Of Quality Construction Material To Ensure A High Level Of Performance"
      }
    ]
  },
  {
    id: 3,
    img: "https://eauto.co.in/cdn/shop/products/analog-speedometer-for-hero-splendor-pro-967_400x.jpg?v=1669981511",
    content: "Analog Speedometer for Splendor Pro",
    price: "1150",
    stock: "In Stock",
    description: "EAUTO'S PRECISION MADE SPEEDOMETER TO MEASURE AND DISPLAY THE SPEED OF THE VEHICLE INSTANTANEOUSLY",
    product_info: [
      {
        brand: "OES SPEEDOMETER",
        vehicle: "Hero Splendor Pro",
        speedometer: "Analog",
        material: "PVC + Glass",
        weight: "1-kg Approx"
      }
    ],
    specialFeature: [
      {
        con1: "Error Free Reading",
        con2: "High Precious Measurement",
        con3: "Long Service Life",
        con4: "Use Of Quality Construction Material To Ensure A High Level Of Performance"
      }
    ]
  },
  {
    id: 4,
    img: "https://eauto.co.in/cdn/shop/products/eauto-analog-speedometer-for-royal-enfield-bullet-350-classic-black-dial-876_400x.jpg?v=1670240356",
    content: "Eauto Analog Speedometer For Royal Enfield Classic 350 | Black dial",
    price: "2150",
    stock: "In Stock",
    description: "EAUTO'S PRECISION MADE SPEEDOMETER TO MEASURE AND DISPLAY THE SPEED OF THE VEHICLE INSTANTANEOUSLY",
    product_info: [
      {
        brand: "EAUTO",
        vehicle: "RE Classic 350",
        speedometer: "Analog",
        material: "PVC + Glass",
        weight: "1-kg Approx"
      }
    ]
  },
  {
    id: 5,
    img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-hero-splendor-pro-black-blue-type-2-960_300x.jpg?v=1652003121",
    content: "Ensons Petrol Tank For Splendor +",
    price: "3750",
    stock: "In Stock",
    description: "Ensons Superior finish petrol tank that fit your bike perfectly and makes your bike brand new again",
    product_info: [
      {
        brand: "ESONS",
        vehicle: "Splendor +",      
        material: "Steel",
        weight: "5-kg Approx"
      }
    ]
  },
  {
    id: 6,
    img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-hero-splendor-plus-bs4-2018-model-black-grey-289_300x.jpg?v=1651507219",
    content: "Ensons Petrol Tank For Splendor Pro",
    price: "4000",
    stock: "In Stock",
    description: "Ensons Superior finish petrol tank that fit your bike perfectly and makes your bike brand new again",
    product_info: [
      {
        brand: "ESONS",
        vehicle: "Splendor Pro",      
        material: "Steel",
        weight: "5-kg Approx"
      }
    ]
  },
  {
    id: 7,
    img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-yamaha-rx100-rx135-rxg-light-blue-975_400x.jpg?v=1641979527",
    content: "Ensons Petrol Tank For Rx-100",
    price: "3160",
    stock: "In Stock",
    description: "Ensons Superior finish petrol tank that fit your bike perfectly and makes your bike brand new again",
    product_info: [
      {
        brand: "ESONS",
        vehicle: "Rx-100",      
        material: "Steel",
        weight: "5-kg Approx"
      }
    ]
  },
  {
    id: 8,
    img: "https://eauto.co.in/cdn/shop/products/ensons-petrol-tank-for-yamaha-rx100-rx135-rxg-wine-redgolden-384_300x.jpg?v=1654661777",
    content: "Ensons Petrol Tank For Rx-135",
    price: "3000",
    stock: "In Stock",
    description: "Ensons Superior finish petrol tank that fit your bike perfectly and makes your bike brand new again",
    product_info: [
      {
        brand: "ESONS",
        vehicle: "Rx-135",      
        material: "Steel",
        weight: "5-kg Approx"
      }
    ]
  },
  {
    id: 9,
    img: "https://cdn.shopify.com/s/files/1/0415/7846/3390/files/263B_300x.jpg?v=1696407257",
    content: "Side Pannel For Hero HF Delux",
    price: "1070",
    stock: "In Stock",
    description: "High impact resistance side panel with color ful graphics that shines bright and perfectly fits your bike",
    product_info: [
      {
        brand: "OG",
        vehicle: "HF Delux",      
        material: "Plastic",
        weight: "750 g Approx"
      }
    ]
  },
  {
    id: 10,
    img: "https://eauto.co.in/cdn/shop/files/249A_400x.jpg?v=1694327220",
    content: "Side Pannel For Hero Passion Plus",
    price: "1100",
    stock: "In Stock",
    description: "High impact resistance side panel with color ful graphics that shines bright and perfectly fits your bike",
    product_info: [
      {
        brand: "OG",
        vehicle: "Passion Plus",      
        material: "Plastic",
        weight: "750 g Approx"
      }
    ]
  }
];

const ProductDetailspeedo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [zoomStyle, setZoomStyle] = useState({});
  const product = productDetailsp.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center'
    });
  };

  return (
    <div className="product-details container">
      <h1 className='sevillana-regular' style={{color:'steelblue', marginTop:"50px" , marginBottom:"25px"}}>Product Details : </h1>
      <div 
        className="zoom-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={product.img} 
          alt={product.content}
          style={zoomStyle}
        />
      </div>
      <h1 className='nerko-one-regular'>{product.content}</h1>
      <strong className='lists roboto-condensed'>Price: ₹ </strong> {product.price} <br/>
      <strong className='lists roboto-condensed'>Stock:</strong> {product.stock} <br/>
      <strong className='lists roboto-condensed'>Description:</strong> {product.description} 
      
      <div className="input-group mb-3"> <br/>
        <span className="input-group-text" id="basic-addon1">Quantity</span> 
        <input 
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1" 
          className="form-control" 
          placeholder="Quantity" 
          aria-label="Quantity" 
          aria-describedby="basic-addon1" 
        />
      </div>

      <button type="button" className="btn btn-danger btn-1" onClick={handleAddToCart}>
        Add to Cart
      </button>
      
      <h3><i>Product Information</i></h3>
      <ul className='uli roboto-condensed'>
        {product.product_info.map((info, index) => (
          <li key={index}>
            <strong>Brand:</strong> {info.brand}<br />
            <strong>Vehicle:</strong> {info.vehicle}<br />
            {/* <strong>Speedometer:</strong> {info.speedometer}<br /> */}
            <strong>Material:</strong> {info.material}<br />
            <strong>Weight:</strong> {info.weight}
          </li>
        ))}
      </ul>

      {product.specialFeature && (
        <>
          <h3><i>Special Features</i></h3>
          <ul className='lists roboto-condensed'>
            {product.specialFeature.flatMap((feature, index) => 
              Object.values(feature).map((value, idx) => (
                <li key={`${index}-${idx}`}>{value}</li>
              ))
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProductDetailspeedo;
