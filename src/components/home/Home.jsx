import React from "react";
import Hero from "./hero/Hero";
import Introduccion from "./introduction/Introduccion";
import Who from "./who/Who";
import Choose from "./choose/Choose";
import photo from "@/assets/FOTOCONFRASE.jpg";
import BeforeAfter from "./beforeAfter/BeforeAfter";

export default function Home() {
    return (
        <div>
            <Hero />
            <Introduccion />
            <Who />
            <Choose />
            <img className="phrase-img" src={photo} alt="Your home clean, your free time" />
            <BeforeAfter />
        </div>
    );
}