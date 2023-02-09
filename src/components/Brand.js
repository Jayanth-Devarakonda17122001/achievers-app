import React from "react";
import "../nav.css";
import { Button, Box } from '@mui/material';
import cards from "./img/categori/card.png";
import cardman from "./img/categori/card-man.png";
import cardshape from "./img/categori/card-shape.png";

function Brand() {
    return(
        <>
            <div>
                <div>
                    <div>
                        <div>
                            <div style={{marginBottom: 200, backgroundImage:`url(${cards})`}}>
                                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                                    <div>
                                        <img src ={cardman} alt="coll" />
                                    </div>
                                    <div>
                                        <h1 style={{fontSize: 70}}>Find the Beat Product<br />from my Shop</h1>
                                        <p>Designers who are interest creacting the pants</p>
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                            <Box pt={7}><Button variant="contained" sx={{borderRadius: 28, paddingLeft: 3, paddingRight: 3, paddingTop: 1, textTransform: "capitalize", backgroundColor: "black"}}>shop now </Button></Box>
                                            <img src={cardshape} alt="coll" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brand;