import React from "react";
import logo from "@/assets/LOGO.png";

export default function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt="logo Ecua Pro" />
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>SERVICE</li>
                    <li>GALLERY</li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
        </header>
    );
}