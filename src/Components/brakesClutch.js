import React from 'react';
import { Link } from 'react-router-dom';
import './brakesClutch.css';

const Brakes = () => {
    const brakes = [
        {
            id: 1,
            static_img: "https://eauto.co.in/cdn/shop/files/brake-disc-caliper-collection-eauto-co-in_300x.jpg?v=1613573915",
            brandName:"Disk Brake Caliper",
        },
        {
            id: 2,
            static_img: "https://eauto.co.in/cdn/shop/files/brake-disc-plate-eauto-co-in_300x.jpg?v=1613574284",
            brandName:"Brake Disc Plate",
        },
        {
            id: 3,
            static_img: "https://eauto.co.in/cdn/shop/files/frotn-brake-master-cylinder-collection-eauto-co-in_300x.jpg?v=1613574879",
            brandName:"Disk Brake Master",
        },
        {
            id: 4,
            static_img: "https://eauto.co.in/cdn/shop/files/Kumar-Auto-1200x1200_1_300x.jpg?v=1625649917",
            brandName:"Brake Drum",
        }
    ];

    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="brakes-gallery-container container">
        <h1 className="brakes-gallery-title" style={{marginTop:"55px"}}><i>Brakes and Clutch</i></h1>
        <div className="brakes-gallery-items">
            {brakes.map(item => (
                <Link to={`/brakes/${item.id}`} key={item.id} className="brakes-gallery-item">
                    <img src={item.static_img} alt={`Brakes item ${item.id}`} className="brakes-item-image" />
                    <p className="brakes-item-brand"><b>{item.brandName}</b></p>
                </Link>
            ))}
        </div>
    </div>
    );
};

export default Brakes;
