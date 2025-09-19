import React from "react";
import logoBlanco from "@/assets/LOGOBLANCO.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    return (
        <section className="hero">
            <div className="content-hero">
                <img src={logoBlanco} alt="Logo Ecua Pro" />
            </div>
            <div className="content-hero">
                <button onClick={() => { navigate("/contact") }} >Request service</button>
            </div>
        </section>
    );
}