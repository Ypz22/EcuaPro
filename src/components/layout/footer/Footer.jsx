import logo from "@/assets/LOGOBLANCO.png";
import { CONTACT_DETAILS, FOOTER_SERVICE_ITEMS, NAV_ITEMS } from "@/data/siteContent";
import { FaEnvelope, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content-footer">
        <div className="content-nav">
          <h3>Navigation</h3>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.path === "/"}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-services">
          <h3>Services</h3>
          <ul>
            {FOOTER_SERVICE_ITEMS.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="content-social">
          <h3>FOLLOW US</h3>
          <div className="social-icons" aria-label="Social and contact channels">
            <FaInstagram aria-hidden="true" />
            <FaWhatsapp aria-hidden="true" />
            <FaTiktok aria-hidden="true" />
            <FaEnvelope aria-hidden="true" />
          </div>
          <h3>CONTACT</h3>
          <a href={`tel:${CONTACT_DETAILS.phone.replace(/[^\d+]/g, "")}`}>
            {CONTACT_DETAILS.phone}
          </a>
          <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
        </div>
      </div>
      <div className="content-logo">
        <img src={logo} alt="Logo EcuaPro" />
      </div>
    </footer>
  );
}
