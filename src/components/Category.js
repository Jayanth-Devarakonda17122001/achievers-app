import React from "react";
import "../nav.css";
import cat from "./img/categori/cat1.jpg";
import pig from "./img/categori/cat2.jpg";
import dog from "./img/categori/cat3.jpg";
import { Card } from '@mui/material';

function Category() {
    return (
        <>
        <div style={{marginBottom: 200}}>
            <div className="h">
                <center><h1>Shop By Category</h1></center>
            </div>
            <div style={{ display:"flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                <Card style={{ height: 250, width: 450, backgroundImage:`url(${cat})`}}>
                    <h1 style={{textAlign: "right"}}>Womens</h1>
                    <h2 style={{textAlign: "right"}}>Best New Deals</h2>
                    <h3 style={{textAlign: "right"}}>New Collection</h3>
                </Card>
                <Card style={{ height: 250, width: 450, backgroundImage:`url(${pig})`}}>
                    <h1 style={{textAlign: "right"}}>Discount</h1>
                    <h2 style={{textAlign: "right"}}>Winter Clothes</h2>
                    <h3 style={{textAlign: "right"}}>New Collection</h3>
                </Card>
                <Card style={{ height: 250, width: 450, backgroundImage:`url(${dog})`}}>
                    <h1 style={{textAlign: "right"}}>Men's Clothes</h1>
                    <h2 style={{textAlign: "right"}}>Best New Deals</h2>
                    <h3 style={{textAlign: "right"}}>New Collection</h3>
                </Card>
            </div>
        </div>
        </>
    );
}

export default Category;