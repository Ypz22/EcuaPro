import React from "react";
import bathroomBefore from "@/assets/GALERIA/Bano.png";
import bathroomAfter from "@/assets/GALERIA/bano1.png";
import brushBefore from "@/assets/GALERIA/cepillo.png";
import brushAfter from "@/assets/GALERIA/cepillo1.png";
import showerBefore from "@/assets/GALERIA/ducha.png";
import showerAfter from "@/assets/GALERIA/ducha1.png";
import kitchenBefore from "@/assets/GALERIA/lavamano2.png";
import kitchenAfter from "@/assets/GALERIA/lavamano2.1.png";
import washbasinBefore from "@/assets/lavabo.jpg";
import washbasinAfter from "@/assets/lavabo1.jpg";



export default function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery-page">
                <h2>GALLERY</h2>
                <p>Discover the difference we make</p>
            </div>
            <div className="gallery-container">
                <p className="gallery-page-phrase">IN OUR GALLERY, YOU’LL FIND REAL EXAMPLES OF CLEANING: KITCHENS, <br />
                    BATHROOMS, AND OFFICES TRANSFORMED, SHOWCASING OUR <br />
                    COMMITMENT TO QUALITY AND DETAIL.</p>
            </div>
            <div className="gallery-images-container">
                <div>
                    <h3>BEFORE</h3>
                    <div className="gallery-images before">
                        <img className="gallery-img" src={bathroomBefore} alt="" />
                        <img className="gallery-img" src={showerBefore} alt="" />
                        <img className="gallery-img" src={brushBefore} alt="" />
                        <img className="gallery-img" src={kitchenBefore} alt="" />
                        <img className="gallery-img" src={washbasinBefore} alt="" />
                    </div>
                </div>
                <div>
                    <h3>AFTER</h3>
                    <div className="gallery-images before">
                        <img className="gallery-img" src={bathroomAfter} alt="" />
                        <img className="gallery-img" src={showerAfter} alt="" />
                        <img className="gallery-img" src={brushAfter} alt="" />
                        <img className="gallery-img" src={kitchenAfter} alt="" />
                        <img className="gallery-img" src={washbasinAfter} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}