import React from "react";
import "../nav.css";
import gallery1 from "./img/gallery/gallery1.jpg";
import gallery2 from "./img/gallery/gallery2.jpg";
import gallery3 from "./img/gallery/gallery3.jpg";
import gallery4 from "./img/gallery/gallery4.jpg";

function Gallery() {
    return(
        <>
            <div>
                <div style={{marginBottom: 200, display: "felx", justifyContent: "inherit"}}>
                    <img src={gallery1} alt="coll" />
                    <img src={gallery2} alt="coll" />
                    <img src={gallery3} alt="coll" />
                    <img src={gallery4} alt="coll" />
                </div>
            </div>
        </>
    );
}

export default Gallery;