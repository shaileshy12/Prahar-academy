import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import HeroImg from "../../assets/image.png";

const calculateAge = (dob) => {
  if (!dob) return "";
  const birthDate = new Date(dob);
  if (Number.isNaN(birthDate.getTime())) return "";

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 0 ? String(age) : "";
};

const Enquiry = () => {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    age: "",
    caste: "",
    height: "",
    course: "",
    location: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      setFormData((prev) => ({
        ...prev,
        dob: value,
        age: calculateAge(value)
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Combine extra form fields into the message field to comply with the backend schema
    const combinedMessage = `DOB: ${formData.dob || "N/A"}, Age: ${formData.age || "N/A"}, Caste: ${formData.caste || "N/A"}, Height: ${formData.height || "N/A"} | Note: ${formData.message?.trim() || "None"}`;

    const payload = {
      fullName: formData.fullName?.trim(),
      phone: formData.phone?.trim(),
      email: formData.email?.trim().toLowerCase(),
      course: formData.course?.trim(),
      location: formData.location?.trim() || "",
      message: combinedMessage
    };

    try {
      // Updated the endpoint URL to match the defined backend route
      await axios.post("http://localhost:4000/api/v1/user/enquiry", payload, {
        withCredentials: true
      });

      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        dob: "",
        age: "",
        caste: "",
        height: "",
        course: "",
        location: "",
        message: ""
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert("Failed to submit enquiry. Please try again.");
      console.error("Enquiry submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050509] text-gray-100 text-justify">
      <section className="relative w-full h-52 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={HeroImg}
          alt={t("enquiryPage.heroImgAlt")}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center">
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-yellow-400 mb-2">
              {t("enquiryPage.heroTag")}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {t("enquiryPage.heroTitleMain")}{" "}
              <span className="text-yellow-400">
                {t("enquiryPage.heroTitleHighlight")}
              </span>
            </h1>
            <p className="mt-3 text-xs md:text-sm text-gray-200">
              {t("enquiryPage.heroText")}
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white text-gray-900">
        <section className="relative py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,_#fef3c7_0,_transparent_60%),radial-gradient(circle_at_bottom,_#dbeafe_0,_transparent_60%)]" />

          <div className="relative max-w-5xl mx-auto px-4 space-y-8 md:space-y-10">
            <div className="backdrop-blur-xl bg-white/95 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                {t("enquiryPage.form.title")}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                {t("enquiryPage.form.subtitle")}
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-600 mb-3">
                    {t("enquiryPage.form.successTitle")}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t("enquiryPage.form.successText")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("enquiryPage.form.fullNameLabel")}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder={t("enquiryPage.form.fullNamePlaceholder")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("enquiryPage.form.mobileLabel")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t("enquiryPage.form.mobilePlaceholder")}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("enquiryPage.form.emailLabel")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("enquiryPage.form.emailPlaceholder")}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        readOnly
                        placeholder="Auto-calculated from DOB"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 cursor-not-allowed focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Caste
                      </label>
                      <input
                        type="text"
                        name="caste"
                        value={formData.caste}
                        onChange={handleChange}
                        placeholder="Enter your caste"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Height
                      </label>
                      <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        placeholder={`For example: 5'7" or 170 cm`}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("enquiryPage.form.locationLabel")}
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder={t("enquiryPage.form.locationPlaceholder")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("enquiryPage.form.courseLabel")}
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all bg-white"
                    >
                      <option value="">{t("enquiryPage.form.coursePlaceholder")}</option>
                      <option value="Police Recruitment">{t("enquiryPage.form.coursePolice")}</option>
                      <option value="Army Recruitment">{t("enquiryPage.form.courseArmy")}</option>
                      <option value="SSC">{t("enquiryPage.form.courseSSC")}</option>
                      <option value="Physical Training">{t("enquiryPage.form.coursePhysical")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("enquiryPage.form.messageLabel")}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("enquiryPage.form.messagePlaceholder")}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm hover:shadow-md transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3 inline-block" />
                        {t("enquiryPage.form.submitting")}
                      </>
                    ) : (
                      t("enquiryPage.form.submitButton")
                    )}
                  </button>
                </form>
              )}

              <p className="mt-6 text-xs text-gray-500 text-center">
                {t("enquiryPage.form.disclaimer")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  {t("enquiryPage.why.title")}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t("enquiryPage.why.l1")}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t("enquiryPage.why.l2")}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t("enquiryPage.why.l3")}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t("enquiryPage.why.l4")}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t("enquiryPage.why.l5")}
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  {t("enquiryPage.office.title")}
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  {t("enquiryPage.office.address")}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-yellow-600">
                    {t("enquiryPage.office.callLabel")}
                  </span>{" "}
                  {t("enquiryPage.office.callValue")}
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold text-yellow-600">
                    {t("enquiryPage.office.emailLabel")}
                  </span>{" "}
                  <a
                    href={`mailto:${t("header.email")}`}
                    className="text-yellow-600 hover:text-yellow-700 underline"
                  >
                    {t("header.email")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Enquiry;