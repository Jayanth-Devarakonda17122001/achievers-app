import React from "react";
import "../nav.css";
import { Rating } from '@mui/material';
import product1 from "./img/categori/product1.png";
import product2 from "./img/categori/product2.png";
import product3 from "./img/categori/product3.png";
import product4 from "./img/categori/product4.png";
import product5 from "./img/categori/product5.png";
import product6 from "./img/categori/product6.png";

function Products() {
    return(
        <>
            <div>
                <products_head>
                    <div id="head_item">
                        <h1>Latest Products</h1>
                    </div>
                    <div>
                        <ul id="head_bar">
                            <li><a href="./index.html">All</a></li>
                            <li><a href="./index.html">New</a></li>
                            <li><a href="./index.html">Featured</a></li>
                            <li><a href="./index.html">Offer</a></li>
                        </ul>
                    </div>
                </products_head>

                <div style={{ display:"flex", justifyContent: "space-evenly", flexWrap: "wrap", marginBottom: 200}}>
                    <div>
                        <img src={product1} alt="shot" />
                        <center><h3><Rating name="half-rating-read" display="block" defaultValue={2.5} precision={0.5} readOnly /></h3>
                        <h5>Chex Shots with details</h5>
                        <h5>$40.00 <mark><del>$60.00</del></mark></h5></center>
                    </div>
                    <div>
                        <img src={product2} alt="shot" />
                        <center><h3><Rating name="half-rating-read" display="block" defaultValue={2.5} precision={0.5} readOnly /></h3>
                        <h5>Green Dress with details</h5>
                        <h5>$40.00 <mark><del>$60.00</del></mark></h5></center>
                    </div>
                    <div>
                        <img src={product3} alt="shot" />
                        <center><h3><Rating name="half-rating-read" display="block" defaultValue={2.5} precision={0.5} readOnly /></h3>
                        <h5>Yellow Dress with details</h5>
                        <h5>$40.00 <mark><del>$60.00</del></mark></h5></center>
                    </div>
                    <div>
                        <img src={product4} alt="shot" />
                        <center><h3><Rating name="half-rating-read" display="block" defaultValue={2.5} precision={0.5} readOnly /></h3>
                        <h5>Gray T-Shirt with details</h5>
                        <h5>$40.00 <mark><del>$60.00</del></mark></h5></center>
                    </div>
                    <div>
                        <img src={product5} alt="shot" />
                        <center><h3><Rating name="half-rating-read" display="block" defaultValue={2.5} precision={0.5} readOnly /></h3>
                        <h5>Track Pant with details</h5>
                        <h5>$40.00 <mark><del>$60.00</del></mark></h5></center>
                    </div>
                    <div>
                        <img src={product6} alt="shot" />
                        <center><h3><Rating name="half-rating-read" display="block" defaultValue={2.5} precision={0.5} readOnly /></h3>
                        <h5>Blue Blazer with details</h5>
                        <h5>$40.00 <mark><del>$60.00</del></mark></h5></center>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;