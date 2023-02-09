import React from "react";
import "../nav.css";
import shipping from "./img/icon/R.png";
import refund from "./img/icon/OIP.jpg";
import security from "./img/icon/Security-Icon-2.png";

function Ship() {
    return(
        <>
            <div>
                <div style={{marginBottom: 200, display: "flex", justifyContent: "space-evenly"}}>
                    <div>
                        <img src={shipping} style={{width: 50, paddingBottom: 20}} alt="cat"/>
                        <h3>Free Shipping Method</h3><br />
                        <p style={{color: "gray"}}>You will get fast<br />Delivery as per the instructions<br />we assure for that</p>
                    </div>

                    <div>
                        <img src={security} style={{width: 50, paddingBottom: 20}} alt="cat"/>
                        <h3>Secure Payment System</h3><br />
                        <p style={{color: "gray"}}>You will get fast<br />Delivery as per the instructions<br />we assure for that</p>
                    </div>

                    <div>
                        <img src={refund} style={{width: 50, paddingBottom: 20}} alt="cat"/>
                        <h3>100% Refund System</h3><br />
                        <p style={{color: "gray"}}>You will get fast<br />Delivery as per the instructions<br />we assure for that</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ship;