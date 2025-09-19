import React from "react";
import cleaning from "@/assets/CLEANING.png";

export default function Introduccion() {
    return (
        <section className="introduction">
            <div className="content-container">
                <div className="content-introduction">
                    <h3>Welcome to EcuaPro Cleaning</h3>
                    <p className="results-green">Impeccable results,
                        always</p>
                    <p>At EcuaPro Cleaning, we are dedicated to transforming your spaces
                        with a high-quality, professional cleaning service. We offer residential
                        and commercial cleaning solutions, ensuring that every corner of your
                        home or office is spotless and sparkling clean.
                    </p>
                    <p>
                        We understand that every client is unique. That's why we customize
                        each service to suit your specific needs, whether you're looking for
                        daily, weekly, or bi-weekly cleaning.
                    </p>
                    <button onClick={() => { navigate("/contact") }}>Call us today!</button>
                </div>
                <div className="img-introduction">
                    <img src={cleaning} alt="Cleaning service" />
                </div>
            </div>
        </section>
    );
}
