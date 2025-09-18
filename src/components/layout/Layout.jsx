import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";


export default function Layout() {
    return (
        <div className="layout">
            <main className="p-4">
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}