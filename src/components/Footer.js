import React from "react";
import "../nav.css";
import icon_logo from "./img/logo/logo2_footer.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
    return(
        <>
            <div>
                <div style={{marginBottom: 200,display: "flex", justifyContent: "space-evenly"}}>
                    <div>
                        <img src={icon_logo} alt="pho"/>
                        <p style={{color: "gray"}}>63, 1st Floor, 16th Main, 8th Cross<br />BTM 1st Stage, BTM Layout,<br />Benguluru, Karnataka 560029</p>
                    </div>

                    <div>
                        <h2>Quick Links</h2><br />
                        <p style={{color: "gray"}}>About</p><br />
                        <p style={{color: "gray"}}>Offers & Discounts</p><br />
                        <p style={{color: "gray"}}>Get Coupon</p><br />
                        <p style={{color: "gray"}}>Contact Us</p>
                    </div>

                    <div>
                        <h2>New Products</h2><br />
                        <p style={{color: "gray"}}>Women Cloth</p><br />
                        <p style={{color: "gray"}}>Fashion Accessories</p><br />
                        <p style={{color: "gray"}}>Man Accessories</p><br />
                        <p style={{color: "gray"}}>Rubber made Toys</p>
                    </div>

                    <div>
                        <h2>Support</h2><br />
                        <p style={{color: "gray"}}>Frequently Asked Questions</p><br />
                        <p style={{color: "gray"}}>Terms & Conditions</p><br />
                        <p style={{color: "gray"}}>Privacy Policy</p><br />
                        <p style={{color: "gray"}}>Report a Payment Issues</p>
                    </div>
                </div>

                <div style={{marginBottom: 100, marginLeft: 110, marginRight: 100, display: "flex", justifyContent: "space-between"}}>
                    <p style={{color: "gray"}}>Copyright ©️ 2023 All rights reserved | this template is made with ❤️ by <span style={{color: "red"}}>Mr.Jayanth devarakonda</span></p>
                    <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <LanguageIcon />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;