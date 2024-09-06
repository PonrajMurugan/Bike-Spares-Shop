import React from "react";
import { FaFacebookF,FaPinterestP,FaTwitter,FaInstagram } from "react-icons/fa"
import "./Footer.css"

const Footer=()=>{
    return(
        <div className="Cont">
           
            <div className="foot-row">
                <div className="foot-col clm">
                    <h4>E-Spares</h4>
                    <ul>
                        <li>About Us</li>
                        <li>In News</li>
                        <li>Eco Friendly</li>
                        <li>Privacy Policy</li>
                        <li>Affiliate</li>
                        <li>Terms and Conditions</li>
                        <li>Careers At E-Auto</li>
                        <li>E-Auto Vending Machines</li>
                        <li>EA Daily</li>
                        <li>EA Blog</li>
                        <li>EA now</li>
                    </ul>
                </div>
                <div className="foot-col clmmm">
                    <h4>Help</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>EA Wallet FAQs</li>
                        <li>EA Wallet T&Cs</li>
                        <li>Vendor Connect</li>
                    </ul>
                </div>
                <div className="foot-col ">
                    <h4>Download Our App</h4>
                    <div className="foot-img fp">
                    <img src="./Images/Apple-App-store-icon.png" alt="loading" />
                    </div>
                    <br>
                    </br>
                    <div  className="fp">
                       <img src="./Images/Google-App-store-icon.png" alt="loading" />
                    </div>
                </div>
                <div className="foot-col clmm">
                <h4>Get Social With Us</h4>
                <div className="foot-icon-detail">
                    <div className="foot-icon-row">
                        
                        <div className="foot-icon-1">
                            <a href="/"><FaFacebookF /></a>
                        </div>
                        <div className="foot-icon-2">
                            <a href="/" ><FaPinterestP /></a>
                        </div>
                        <div className="foot-icon-3">
                            <a href="/" ><FaTwitter /></a>
                        </div>
                        <div className="foot-icon-4">
                            <a href="/"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer