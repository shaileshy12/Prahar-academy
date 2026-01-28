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
import Mission from "./helper/Mission";
import Vision from "./helper/Vision";
import SuccessStudents from "./pages/Success Students/Success_Students";
import DirectorDesk from "./helper/DirectorDesk";

import "./i18next/i18next";

function App() {
  return (
    <div className="w-full flex flex-col min-h-screen justify-between">
      <EnquiryModal />
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="hi/aboutus" element={<AboutUs />} />
          <Route path="mr/aboutus" element={<AboutUs />} />

          <Route path="/director-desk" element={<DirectorDesk />} />


          {/* Mission */}
          <Route path="/mission" element={<Mission />} />
          <Route path="hi/mission" element={<Mission />} />
          <Route path="mr/mission" element={<Mission />} />

          {/* Vision */}
          <Route path="/vision" element={<Vision />} />
          <Route path="hi/vision" element={<Vision />} />
          <Route path="mr/vision" element={<Vision />} />

          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="hi/enquiry" element={<Enquiry />} />
          <Route path="mr/enquiry" element={<Enquiry />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="hi/contactus" element={<ContactUs />} />
          <Route path="mr/contactus" element={<ContactUs />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="hi/courses" element={<Courses />} />
          <Route path="mr/courses" element={<Courses />} />

          <Route path="/success-students" element={<SuccessStudents />} />
          <Route path="/gallery" element={<Gallery />} />



        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
