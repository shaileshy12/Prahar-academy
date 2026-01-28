import axios from "axios";
import React, { useState, useEffect } from "react";

const EnquiryModal = ({ isLoggedIn = false }) => {
  const [open, setOpen] = useState(false);
  const [ formData, setFormData] = useState({
    name : "",
    mobileNo: 0,
    email: "",
    preferredCourse: 'other',
    status : 'pending',
    age : 0,
    location : "",
    education : ""
  })

  useEffect(() => {
    if (isLoggedIn) return;

    try {
      // const lastShown = localStorage.getItem("enquiryModalLastShown");
      // const today = new Date().toISOString().slice(0, 10);

      // if (lastShown !== today) {
        setOpen(true);
        // localStorage.setItem("enquiryModalLastShown", today);
      // }
    } catch {
      setOpen(true);
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.preferredCourse);
    
    const res = await axios('http://localhost:4000/api/v1/user/createenq', {
      data : {
        name : formData.name,
        email : formData.email,
        mobileNo : formData.mobileNo,
        age : formData.age,
        preferredCourse : formData.preferredCourse,
        location : formData.location,
        education : formData.education,
        status : formData.status
      },
      method : 'POST'
    })

    console.log(res);
    
    

  }

  if (!open) return null;

  const handleClose = () => setOpen(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* width and padding reduced for mobile */}
      <div className="relative w-[92%] max-w-xl rounded-2xl bg-white/95 shadow-2xl border border-gray-200 overflow-hidden">
        {/* header strip with close on left */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-[#556b2f] to-[#7f9f3f] text-white">
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 text-lg leading-none transition-colors"
            aria-label="Close enquiry form"
          >
            ×
          </button>
          <p className="text-[10px] md:text-xs font-medium tracking-[0.18em] uppercase opacity-90 text-center flex-1">
            Quick Admission Enquiry
          </p>
          {/* spacer so title stays centered */}
          <span className="w-7 h-7" />
        </div>

        {/* green panel */}
        <div className="bg-[#556b2f] text-white px-4 py-6 md:px-8 md:py-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-2">
            Enquiry For Admission
          </h2>
          <p className="text-center mb-5 text-xs md:text-sm text-yellow-100">
            Thank you for your interest in joining Prahar Career Academy.
          </p>

          <form className="space-y-3.5">
            {/* Name */}
            <div>
              <label className="block text-[11px] mb-1 text-yellow-100">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-transparent px-3 py-2.5 text-gray-900 placeholder:text-gray-400
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-sm"
                onChange = {(e) => setFormData( data => ({
                  ...data,
                  name: e.target.value
                }) )}
              />
            </div>

            {/* Mobile No */}
            <div>
              <label className="block text-[11px] mb-1 text-yellow-100">
                Mobile Number
              </label>
              <input
                type="number"
                placeholder="WhatsApp / Contact number"
                className="w-full rounded-lg border border-transparent px-3 py-2.5 text-gray-900 placeholder:text-gray-400
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-sm"
                 onChange = {(e) => setFormData( data => ({
                  ...data,
                  mobileNo: e.target.value
                }) )}
              />
            </div>

            {/* Course (select) and Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] mb-1 text-yellow-100">
                  Preferred Course
                </label>
                <select
                  className="w-full rounded-lg border border-transparent px-3 py-2.5 text-gray-900 text-sm
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  defaultValue = "other"
                   onChange = {(e) => setFormData( data => ({
                  ...data,
                  preferredCourse: e.target.value
                }) )}
                >
                  <option value="" disabled>
                    Select course
                  </option>
                  <option value='PBCT'>Police Bharti</option>
                  <option value='ABCT'>Army Bharti</option>
                  <option value='SSCGD'>BSF</option>
                  <option value='PT'>ITBP</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] mb-1 text-yellow-100">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Your age"
                  className="w-full rounded-lg border border-transparent px-3 py-2.5 text-gray-900 placeholder:text-gray-400 text-sm
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                   onChange = {(e) => setFormData( data => ({
                  ...data,
                  age: e.target.value
                }) )}
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <label className="block text-[11px] mb-1 text-yellow-100">
                Education
              </label>
              <input
                type="text"
                placeholder="10th / 12th / Graduation etc."
                className="w-full rounded-lg border border-transparent px-3 py-2.5 text-gray-900 placeholder:text-gray-400 text-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
               onChange = {(e) => setFormData( data => ({
                  ...data,
                  education: e.target.value
                }) )}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-[11px] mb-1 text-yellow-100">
                Location / City
              </label>
              <input
                type="text"
                placeholder="Your city or nearest Prahar branch"
                className="w-full rounded-lg border border-transparent px-3 py-2.5 text-gray-900 placeholder:text-gray-400 text-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                 onChange = {(e) => setFormData( data => ({
                  ...data,
                  location: e.target.value
                }) )}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-3 w-full bg-gradient-to-r from-[#f6b800] to-[#facc15] text-black font-semibold py-2.5 rounded-lg
                         shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-transform transition-shadow text-sm"
              onClick={(e) => handleSubmit(e)}
            >
              Submit Enquiry
            </button>

            <p className="mt-3 text-[11px] text-center text-yellow-100/80">
              Our team will contact you within 24 hours with next steps for your
              defense career.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
