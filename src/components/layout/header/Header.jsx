import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/LOGO.png";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <img onClick={() => { navigate("/home") }} className="logo" src={logo} alt="logo Ecua Pro" />
            <nav>
                <ul>
                    <li onClick={() => { navigate("/home") }}>HOME</li>
                    <li onClick={() => { navigate("/services") }}>SERVICE</li>
                    <li onClick={() => { navigate("/gallery") }}>GALLERY</li>
                    <li onClick={() => { navigate("/contact") }}>CONTACT US</li>
                </ul>
            </nav>
        </header>
    );
}