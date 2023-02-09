import React from "react";
import "../nav.css";
import h1_hero from "./img/hero/h1_hero.jpg";
import hero_man from "./img/hero/hero_man.png";
import { Card, Button, Box } from '@mui/material';




function Banner() {
    return (
        <>
        <div>
            <Card style={{marginBottom: 200, backgroundImage:`url(${h1_hero})`}}>
                <div style={{ display:"flex", justifyContent:"space-evenly"}}>
                    <div>
                        <img src={hero_man} alt="hero" />
                    </div>
                    <div style={{paddingTop: 170}}>
                        <h3 style={{fontSize: 28}}><i>60% Discount</i></h3>
                        <h1 style={{fontSize: 70}}>Winter<br />Collection</h1>
                        <h4 style={{fontSize: 18}}><i>Best Cloth Collection By 2023</i></h4>
                        <Box pt={7}><Button variant="contained" sx={{borderRadius: 28, paddingLeft: 3, paddingRight: 3, paddingTop: 1, textTransform: "capitalize"}}>shop now </Button></Box>
                    </div>
                </div>
            </Card>
        </div>
        </>
    );
}

export default Banner;