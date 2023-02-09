import React from "react";
import "../nav.css";
import { Button, Box, Hidden } from '@mui/material';

function Offer() {
    return(
        <>
            <div style={{marginBottom: 200,  backgroundColor: "PowderBlue"}}>
                <div>
                    <div style={{padding: 100, display: "flex", justifyContent: "space-evenly"}}>
                        <div>
                            <h1>Get Our<br /> Latest Offers News</h1>
                            <h4>Subscribe News Later</h4>
                        </div>
                        <div id="inputs">
                            <input type="text" placeholder="Enter Your Email Here" style={{width: 400, height: 40, border: "Hidden", borderRadius: 28}}/>
                            <Box pt={5}><Button variant="contained" sx={{borderRadius: 28, paddingLeft: 3, paddingRight: 3, paddingTop: 1, textTransform: "capitalize", backgroundColor: "black"}}>shop now </Button></Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offer;