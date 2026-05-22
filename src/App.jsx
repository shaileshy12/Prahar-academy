// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./helper/Header";
import Footer from "./helper/Footer";
import EnquiryModal from "./helper/EnquiryModel";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Enquiry from "./pages/Enquiry/Enquiry";
import ContactUs from "./pages/ContactUs/ContactUs";
import Courses from "./pages/Courses/Courses";
import Gallery from "./pages/Gallery/Gallery";
import Mission from "./pages/AboutUs/helper/Mission";
import Vision from "./pages/AboutUs/helper/Vision";
import SuccessStudents from "./pages/Success Students/Success_Students";
import DirectorDesk from "./pages/AboutUs/helper/DirectorDesk";

import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminEnquiries from "./pages/Admin/AdminEnquiries.jsx";
import AdminUsers from "./pages/Admin/AdminUsers.jsx";
import AdminProtectedRoute from "./components/AdminProtectedRoute.jsx";
import AdminSettings from "./pages/Admin/AdminSettings.jsx";

import "./i18next/i18next";

function App() {
  return (
    <div className="w-full flex flex-col min-h-screen justify-between">
      {window.location.pathname !== "/admin/login" &&
        !window.location.pathname.startsWith("/admin") && <EnquiryModal />}
      <Header />

      <main className="flex-1">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/hi/aboutus" element={<AboutUs />} />
          <Route path="/mr/aboutus" element={<AboutUs />} />

          <Route path="/director-desk" element={<DirectorDesk />} />

          <Route path="/mission" element={<Mission />} />
          <Route path="/hi/mission" element={<Mission />} />
          <Route path="/mr/mission" element={<Mission />} />

          <Route path="/vision" element={<Vision />} />
          <Route path="/hi/vision" element={<Vision />} />
          <Route path="/mr/vision" element={<Vision />} />

          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/hi/enquiry" element={<Enquiry />} />
          <Route path="/mr/enquiry" element={<Enquiry />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/hi/contactus" element={<ContactUs />} />
          <Route path="/mr/contactus" element={<ContactUs />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/hi/courses" element={<Courses />} />
          <Route path="/mr/courses" element={<Courses />} />

          <Route path="/success-students" element={<SuccessStudents />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Admin routes */}
          
          {/* 1. Login is UNPROTECTED so people can actually log in */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* 2. PROTECTED ROUTES WRAPPER - Everything inside here requires a token */}
          <Route element={<AdminProtectedRoute />}> 
            <Route path="/admin" element={<AdminLayout />}> 
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="enquiries" element={<AdminEnquiries />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Route>

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;