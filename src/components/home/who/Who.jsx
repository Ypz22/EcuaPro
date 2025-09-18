import React from "react";
import foto from "@/assets/FOTO3.jpg"

export default function Who() {
    return (
        <section className="who">
            <div className="content-who-img">
                <img src={foto} alt="cleaning image" />
            </div>
            <div className="content-who">
                <h3>WHO WE ARE...</h3>
                <p>With extensive experience in the local market, we offer a professional,
                    thorough, and affordable home and office cleaning service. Our goal is
                    to leave every space looking spotless and sparkling clean. After trying our
                    services, you'll see that we work with dedication and excellence in every
                    detail.</p>
                <br />
                <p>Let us help you have more time for the things you truly enjoy; we make
                    sure that cleaning isn't your concern. To make the experience completely
                    stress-free, we bring our own cleaning products and equipment, unless
                    you prefer otherwise.</p>
                <button>CHECK OUT OUR SERVICES</button>
            </div>
        </section>
    );
}