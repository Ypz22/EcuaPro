import React from "react";
import logo from "@/assets/LOGOBLANCO.png";
import { FaTiktok, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="content-footer">
                <div className="content-nav">
                    <h3>Navigation</h3>
                    <ul>
                        <li>HOME</li>
                        <li>SERVICES</li>
                        <li>GALLERY</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div className="content-services">
                    <h3>Services</h3>
                    <ul>
                        <li>House Cleanning</li>
                        <li>Floor Polishing</li>
                        <li>Carpet Cleanning</li>
                        <li>Floor Cleanning</li>
                        <li>Home Organizing</li>
                        <li>Commercial Cleanning</li>
                        <li>Garage, Basement <br />
                            of Attic Cleanning</li>
                    </ul>
                </div>
                <div className="content-social">
                    <h3>FOLLOW US</h3>
                    <div style={{ display: "flex", gap: "2rem", fontSize: "30px" }}>
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaTiktok />
                        <FaEnvelope />
                    </div>
                    <h3>CONTACT</h3>
                    <p>+1 (929) 594 8111</p>
                </div>
            </div>
            <div className="content-logo">
                <img src={logo} alt="Logo EcuaPro" />
            </div>
        </footer>
    );
}