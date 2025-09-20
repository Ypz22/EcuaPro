import React from "react";
import Casa3D from "@/assets/Casa3D.png";
import Office3D from "@/assets/FOTOOFICINA.png";

export default function Services() {
    return (
        <section className="services">
            <div className="gallery-page services-page">
                <h2>SERVICES</h2>
                <p>Explore our cleaning services designed <br />
                    for homes, offices, and businesses
                </p>
            </div>
            <div className="gallery-container">
                <p className="gallery-page-phrase services-page-phrase">WE ADAPT TO YOUR NEEDS TO ENSURE SPOTLESS, <br />
                    ORGANIZED, AND WORRY-FREE SPACES.</p>
            </div>
            <div>
                <div className="services-text">
                    <h3>HOUSE SERVICES</h3>
                    <div class="plano">
                        <img src={Casa3D} alt="Plano" class="imagen-plano" />

                    </div>

                </div>
                <div className="services-text">
                    <h3>OFFICE SERVICES</h3>
                    <p>INCLUDES BATHROOM AND KITCHEN CLEANING IF NECESSARY</p>
                    <div class="plano">
                        <img src={Office3D} alt="Plano oficina" class="imagen-plano" />
                    </div>
                </div>
            </div>
        </section>
    );
}