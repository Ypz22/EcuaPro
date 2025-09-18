import React from "react";
import Hero from "./hero/Hero";
import Introduccion from "./introduction/Introduccion";
import Who from "./who/Who";
import Choose from "./choose/Choose";
import BeforeAfter from "./beforeAfter/BeforeAfter";

export default function Home() {
    return (
        <div>
            <Hero />
            <Introduccion />
            <Who />
            <Choose />
            <div className="slogan">
                <h2>“Your home clean, your free time”</h2>
            </div>
            <BeforeAfter />
        </div>
    );
}