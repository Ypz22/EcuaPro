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
import toiletBefore from "@/assets/baño.jpg";
import toiletAfter from "@/assets/baño1.jpg";
import stoveBefore from "@/assets/cocina.jpg";
import stoveAfter from "@/assets/cocina1.jpg";




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
                        <img className="gallery-img" src={bathroomBefore} alt="Bathroom before cleaning" />
                        <img className="gallery-img" src={showerBefore} alt="Shower before cleaning" />
                        <img className="gallery-img" src={brushBefore} alt="Brush before cleaning" />
                        <img className="gallery-img" src={kitchenBefore} alt="Kitchen before cleaning" />
                        <img className="gallery-img" src={washbasinBefore} alt="Washbasin before cleaning" />
                        <img className="gallery-img" src={toiletBefore} alt="Toilet before cleaning" />
                        <img className="gallery-img" src={stoveBefore} alt="Stove before cleaning" />
                    </div>
                </div>
                <div>
                    <h3>AFTER</h3>
                    <div className="gallery-images after">
                        <img className="gallery-img" src={bathroomAfter} alt="Bathroom after cleaning" />
                        <img className="gallery-img" src={showerAfter} alt="Shower after cleaning" />
                        <img className="gallery-img" src={brushAfter} alt="Brush after cleaning" />
                        <img className="gallery-img" src={kitchenAfter} alt="Kitchen after cleaning" />
                        <img className="gallery-img" src={washbasinAfter} alt="Washbasin after cleaning" />
                        <img className="gallery-img" src={toiletAfter} alt="Toilet after cleaning" />
                        <img className="gallery-img" src={stoveAfter} alt="Stove after cleaning" />
                    </div>
                </div>

            </div>
        </div>
    );
}