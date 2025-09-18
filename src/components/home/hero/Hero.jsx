import React from "react";
import logoBlanco from "@/assets/LOGOBLANCO.png";

export default function Hero() {
    return (
        <section className="hero">
            <div className="content-hero">
                <img src={logoBlanco} alt="Logo Ecua Pro" />
            </div>
            <div className="content-hero">
                <button>Request service</button>
            </div>
        </section>
    );
}