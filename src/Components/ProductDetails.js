import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const productData =[{
    id: 1,
    type: "Bajaj",
    card: [
      {
        id: 1,
        card_img: "https://eauto.co.in/cdn/shop/collections/4_cad9e4e7-7f45-407f-a84a-60a6338bac07_280x.jpg?v=1616925351",
     
      },
      {
        id: 2,
        card_img: "https://eauto.co.in/cdn/shop/collections/5_098abfa3-51e5-4ec9-b360-235c246553d3_280x.jpg?v=1616925141",
     
      },
      {
        id: 3,
        card_img: "https://eauto.co.in/cdn/shop/collections/dominar-400_280x.jpg?v=1616925194",
       
      },
      {
        id: 4,
        card_img: "https://eauto.co.in/cdn/shop/collections/bajaj-pulsar-135_280x.jpg?v=1616925188",
     
      },
      {
        id:5,
        card_img:"https://eauto.co.in/cdn/shop/collections/warehouse-collection-bike-model-1000x1000_2_0dff7b85-7dd9-4af0-83a3-0d905c8dab64_280x.jpg?v=1616925158",
  
    },
    {
        id:6,
        card_img:"https://eauto.co.in/cdn/shop/collections/2_280x.jpg?v=1616925128",
      
    }
    ]
  },
  {
    id: 2,
    type: "Hero",
    card: [
      {
        id: 1,
        card_img: "https://eauto.co.in/cdn/shop/collections/7_bce54637-c7a3-4459-9de4-ccfae3c0baad_280x.jpg?v=1616926686",
     
      },
      {
        id: 2,
        card_img: "https://eauto.co.in/cdn/shop/collections/5_5e03ad22-27f1-49b5-babc-a7a97a9305c6_280x.jpg?v=1616926644",
      
      },
      {
        id: 3,
        card_img: "https://eauto.co.in/cdn/shop/collections/37_cfc7a3fc-2978-43c0-9d4c-f6aa76bbb111_280x.jpg?v=1616926582",
        
      },
      {
        id: 4,
        card_img: "https://eauto.co.in/cdn/shop/collections/38_e0d04fca-63df-46a6-8af6-508f9429359b_280x.jpg?v=1616926619",
     
      },
      {
        id:5,
        card_img:"https://eauto.co.in/cdn/shop/collections/2_45724e22-31cb-4465-a29b-0ee3432f1b63_280x.jpg?v=1616926808",
     
    },
    {
        id:6,
        card_img:"https://eauto.co.in/cdn/shop/collections/33_115da803-d999-4745-9563-75e65895e5be_280x.jpg?v=1616926560",
     
    }
    ]
  },
  {
    id: 3,
    type: "Honda",
    card: [
        {
            id:1,
            card_img:"https://eauto.co.in/cdn/shop/collections/81_280x.jpg?v=1616927405",
          
        },
        {
            id:2,
            card_img:"https://eauto.co.in/cdn/shop/collections/82_280x.jpg?v=1616927400",
           
        },{
            id:3,
            card_img:"https://eauto.co.in/cdn/shop/collections/79_280x.jpg?v=1616927303",
           
        },{
            id:4,
            card_img:"https://eauto.co.in/cdn/shop/collections/80_280x.jpg?v=1616927356",
        
        },{
            id:5,
            card_img:"https://eauto.co.in/cdn/shop/collections/warehouse-collection-bike-model-1000x1000_9_280x.jpg?v=1616927315",
         
        },
        {
            id:6,
            card_img:"https://eauto.co.in/cdn/shop/collections/12_41047d2e-8749-4acd-8ed2-8079da4f26a9_280x.jpg?v=1616927291",
           
        }

    ]
  },
  {
    id: 4,
    type: "Tvs",
    card: [
        {
            id:1,
            card_img:"https://eauto.co.in/cdn/shop/collections/11_0eef9d50-e41e-4bb0-a834-da216ae288fe_280x.jpg?v=1616830076",
        
        },
        {
            id:2,
            card_img:"https://eauto.co.in/cdn/shop/collections/13_02490b83-89aa-40cc-b48b-7491c6f1295a_280x.jpg?v=1616830216",
        
        },
        {
            id:3,
            card_img:"https://eauto.co.in/cdn/shop/collections/12_6e21d87d-d9b6-4c91-89a1-81f27227b294_280x.jpg?v=1616830160",
           
        },
        {
            id:4,
            card_img:"https://eauto.co.in/cdn/shop/collections/6_af3df5c1-7f43-4ba2-a7d6-5a31aa4ba788_280x.jpg?v=1616928076",
         
        },
        {
            id:5,
            card_img:"https://eauto.co.in/cdn/shop/collections/5_21dceaec-de3d-4b04-b26a-b308826c419d_280x.jpg?v=1616928087",
                   
        },
        {
            id:6,
            card_img:"https://eauto.co.in/cdn/shop/collections/4_e29d5486-3f24-440d-b649-cf4abab4e1c3_280x.jpg?v=1616928081",
         
        }

    ]
}];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find(item => item.id === parseInt(id));

  return (
    <div className="product-details-container container">
      <h1 style={{marginTop:"55px"}}><i>{product?.type} Bikes </i></h1>
      <div className="card-container">
        {product?.card.map(card => (
          <div key={card.id} className="card-item">
            <img src={card.card_img} alt={`Product ${card.id}`} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
