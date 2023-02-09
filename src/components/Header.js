import React from "react";
import "../nav.css";
import header_icon from "./img/icon/header_icon.png";


function Header() {
    return (
        <>
            <nav>
                <div id="nav_item">
                    <img src={header_icon} alt="hell"/>
                    <select>
                        <option value ="India">IND</option>
                        <option value ="China">CHN</option>
                        <option value ="America">USA</option>
                        <option value ="Pakisthan">PAK</option>
                        <option value ="Afganistan">AFG</option>
                    </select>
                    <p>+916303631707</p>
                </div>
                <div>
                    <ul id="navbar">
                        <li><a href="./index.html">My Account</a></li>
                        <li><a href="./index.html">Wishlist</a></li>
                        <li><a href="./index.html">Shopping</a></li>
                        <li><a href="./index.html">Cart</a></li>
                        <li><a href="./index.html">Checkout</a></li>
                    </ul>
                </div>
            </nav>
        </>
        
    );
}

export default Header;