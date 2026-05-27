import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout() {
  return (
    <div className="layout">
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
