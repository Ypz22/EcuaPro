import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollTop";
import Services from "./components/services/Services";

const APP_ROUTES = [
  { path: "/home", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/services", element: <Services /> },
];

function App() {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {APP_ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
