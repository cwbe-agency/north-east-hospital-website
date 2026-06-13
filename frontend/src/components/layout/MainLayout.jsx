import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyBanner from "./EmergencyBanner";
import FloatingActions from "./FloatingActions";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(var(--color-bg))]">
      <EmergencyBanner />
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default MainLayout;
