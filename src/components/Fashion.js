import React from "react";
import "../nav.css";
import { Button, Box } from '@mui/material';
import collection1 from "./img/collection/collection1.png";
import collection2 from "./img/collection/collection2.png";
import collection3 from "./img/collection/collection3.png";
import collection4 from "./img/collection/collection4.png";
import collection5 from "./img/collection/collection5.png";


function Fashion() {
    return(
        <>
            <div>
                <div style={{marginBottom: 200,display: "flex", justifyContent: "space-evenly"}}>
                    <div style={{paddingTop: 130}}>
                        <h1 style = {{paddingBottom: 50}}>Best Collection<br />of This Month</h1>
                        <p>Designers Who are interessted area</p>
                        <Box pt={5} pb={20}><Button variant="contained" sx={{borderRadius: 28, paddingLeft: 3, paddingRight: 3, paddingTop: 1, textTransform: "capitalize"}}>shop now </Button></Box>
                        <img src={collection1} alt="coll" />
                    </div>

                    <div>
                        <img src={collection2} alt="coll" />
                    </div>
        
                    <div style={{paddingTop: 300}}>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <Box><Button variant="text" style={{textAlignLast: 'right', top: 50, color: "black", textTransform: "capitalize"}}>mens winter<br /> jacket</Button></Box>
                            <img src={collection3} alt="coll" />
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <Box><Button variant="contained" style={{textAlignLast: 'right', top: 50, textTransform: "capitalize"}}>tone winter<br /> jeans</Button></Box>
                            <img src={collection4} alt="coll" />
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <Box><Button variant="text" style={{textAlignLast: 'right', top: 50, color: "black", textTransform: "capitalize"}}>mens winter<br /> jacket</Button></Box>
                            <img src={collection5} alt="coll" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fashion;