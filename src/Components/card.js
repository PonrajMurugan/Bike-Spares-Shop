import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        className="container cards-container">
            <div className="card cd">
                <img src='https://eauto.co.in/cdn/shop/files/8_x800.png?v=1617186461' alt='bike' />
            </div>

            <div className="card">
                <img src='https://eauto.co.in/cdn/shop/files/5_a7bef594-a02e-49ef-ac12-a6431d55cf8e_x800.png?v=1617186461' alt='bike' />
            </div>

            <div className="card">
                <img src='https://eauto.co.in/cdn/shop/files/3_1830b52b-7101-47a6-9bc4-a29fce0cbe2f_x800.png?v=1617186461' alt='bike' />
            </div>

            <div className="card cd">
                <img src='https://eauto.co.in/cdn/shop/files/12_1615a20f-a2b6-47fe-b4dc-5b10d6c41d54_x800.png?v=1617682806' alt='bike' />
            </div>

            <div className="card">
                <img src='https://eauto.co.in/cdn/shop/files/9_b21dfd36-0b89-499d-82b1-77be2ac7da81_x800.png?v=1617188820' alt='bike' />
            </div>

            <div className="card">
                <img src='https://eauto.co.in/cdn/shop/files/10_942dde0d-6390-4a3c-b680-4b814d30eb7c_x800.png?v=1617186461' alt='bike' />
            </div>
        </div>
    );
};

export default Card;
