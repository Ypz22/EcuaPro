import logo from "@/assets/LOGO.png";
import { NAV_ITEMS } from "@/data/siteContent";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <Link className="logo-link" to="/" aria-label="Go to EcuaPro home">
        <img className="logo" src={logo} alt="Ecua Pro logo" />
      </Link>

      <button
        type="button"
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((current) => !current)}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={menuOpen ? "open" : ""}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
