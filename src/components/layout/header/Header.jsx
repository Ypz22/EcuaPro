import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/LOGO.png";

export default function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        // Cuando el componente carga, activamos initialized
        setInitialized(true);
    }, []);

    return (
        <header>
            <img
                onClick={() => navigate("/home")}
                className="logo"
                src={logo}
                alt="logo Ecua Pro"
            />

            {/* Botón hamburguesa */}
            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Menú de navegación */}
            <nav className={`${menuOpen ? "open" : ""} ${initialized ? "animated" : ""}`}>
                <ul>
                    <li onClick={() => setMenuOpen(false) || navigate("/home")}>HOME</li>
                    <li onClick={() => setMenuOpen(false) || navigate("/services")}>SERVICE</li>
                    <li onClick={() => setMenuOpen(false) || navigate("/gallery")}>GALLERY</li>
                    <li onClick={() => setMenuOpen(false) || navigate("/contact")}>CONTACT US</li>
                </ul>
            </nav>
        </header>
    );
}
