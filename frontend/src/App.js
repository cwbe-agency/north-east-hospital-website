import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "@/App.css";
import MainLayout from "@/components/layout/MainLayout";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import DoctorsPage from "@/pages/DoctorsPage";
import DoctorDetailPage from "@/pages/DoctorDetailPage";
import DepartmentsPage from "@/pages/DepartmentsPage";
import DepartmentDetailPage from "@/pages/DepartmentDetailPage";
import AppointmentPage from "@/pages/AppointmentPage";
import ContactPage from "@/pages/ContactPage";
import CareersPage from "@/pages/CareersPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import TreatmentsPage from "@/pages/TreatmentsPage";
import TreatmentDetailPage from "@/pages/TreatmentDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:slug" element={<DoctorDetailPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
