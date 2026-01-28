// src/pages/Enquiry.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import HeroImg from "../../assets/image.png";

const Enquiry = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col bg-[#050509] text-gray-100">
      {/* Hero banner */}
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

      {/* Main content */}
      <main className="flex-1">
        <section className="relative py-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),radial-gradient(circle_at_bottom,_#22d3ee_0,_transparent_55%)]" />

          <div className="relative max-w-5xl mx-auto px-4 space-y-6">
            {/* Enquiry card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-semibold text-yellow-300 mb-1">
                {t("enquiryPage.form.title")}
              </h2>
              <p className="text-xs md:text-sm text-gray-200 mb-6">
                {t("enquiryPage.form.subtitle")}
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    {t("enquiryPage.form.fullNameLabel")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("enquiryPage.form.fullNamePlaceholder")}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {t("enquiryPage.form.mobileLabel")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("enquiryPage.form.mobilePlaceholder")}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      {t("enquiryPage.form.emailLabel")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("enquiryPage.form.emailPlaceholder")}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    {t("enquiryPage.form.courseLabel")}
                  </label>
                  <select className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400">
                    <option className="bg-gray-900">
                      {t("enquiryPage.form.coursePlaceholder")}
                    </option>
                    <option className="bg-gray-900">
                      {t("enquiryPage.form.coursePolice")}
                    </option>
                    <option className="bg-gray-900">
                      {t("enquiryPage.form.courseArmy")}
                    </option>
                    <option className="bg-gray-900">
                      {t("enquiryPage.form.courseSSC")}
                    </option>
                    <option className="bg-gray-900">
                      {t("enquiryPage.form.coursePhysical")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    {t("enquiryPage.form.messageLabel")}
                  </label>
                  <textarea
                    rows="4"
                    placeholder={t("enquiryPage.form.messagePlaceholder")}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-4 py-2.5 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(248,250,109,0.45)] hover:brightness-110 active:scale-[0.98] transition"
                >
                  {t("enquiryPage.form.submitButton")}
                </button>
              </form>

              <p className="mt-3 text-[11px] text-gray-400">
                {t("enquiryPage.form.disclaimer")}
              </p>
            </div>

            {/* Why enquire + Head Office */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gradient-to-b from-yellow-500/10 via-black/60 to-black/80 p-5">
                <h3 className="text-sm font-semibold text-yellow-300 mb-3">
                  {t("enquiryPage.why.title")}
                </h3>
                <ul className="space-y-2 text-xs text-gray-100">
                  <li>{t("enquiryPage.why.l1")}</li>
                  <li>{t("enquiryPage.why.l2")}</li>
                  <li>{t("enquiryPage.why.l3")}</li>
                  <li>{t("enquiryPage.why.l4")}</li>
                  <li>{t("enquiryPage.why.l5")}</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black/70 border border-white/10 p-5 text-xs text-gray-200 space-y-2">
                <h4 className="text-sm font-semibold text-white mb-1">
                  {t("enquiryPage.office.title")}
                </h4>
                <p>{t("enquiryPage.office.address")}</p>
                <p className="mt-1">
                  <span className="font-semibold text-yellow-300">
                    {t("enquiryPage.office.callLabel")}
                  </span>{" "}
                  {t("enquiryPage.office.callValue")}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">
                    {t("enquiryPage.office.emailLabel")}
                  </span>{" "}
                  <a href="mailto:prahar_career_academy_@gmail.com">
                    {t("header.email")}
                  </a>
                </p>
              </div>
            </div>

            {/* Marathi + English test boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] p-5 md:p-6 space-y-3">
                <h3 className="text-sm md:text-base font-semibold text-yellow-300">
                  {t("enquiryPage.tests.marathi.title")}
                  <span className="block text-[11px] md:text-xs text-gray-300">
                    {t("enquiryPage.tests.marathi.subtitle")}
                  </span>
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-gray-200">
                  <li>{t("enquiryPage.tests.marathi.l1")}</li>
                  <li>{t("enquiryPage.tests.marathi.l2")}</li>
                  <li>{t("enquiryPage.tests.marathi.l3")}</li>
                  <li>{t("enquiryPage.tests.marathi.l4")}</li>
                  <li>{t("enquiryPage.tests.marathi.l5")}</li>
                  <li>{t("enquiryPage.tests.marathi.l6")}</li>
                </ul>
                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-yellow-300">
                  <li>{t("enquiryPage.tests.marathi.extra1")}</li>
                  <li>{t("enquiryPage.tests.marathi.extra2")}</li>
                </ul>
              </div>

              <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] p-5 md:p-6 space-y-3">
                <h3 className="text-sm md:text-base font-semibold text-yellow-300">
                  {t("enquiryPage.tests.english.title")}
                  <span className="block text-[11px] md:text-xs text-gray-300">
                    {t("enquiryPage.tests.english.subtitle")}
                  </span>
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-gray-200">
                  <li>{t("enquiryPage.tests.english.l1")}</li>
                  <li>{t("enquiryPage.tests.english.l2")}</li>
                  <li>{t("enquiryPage.tests.english.l3")}</li>
                  <li>{t("enquiryPage.tests.english.l4")}</li>
                  <li>{t("enquiryPage.tests.english.l5")}</li>
                  <li>{t("enquiryPage.tests.english.l6")}</li>
                </ul>
                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-yellow-300">
                  <li>{t("enquiryPage.tests.english.extra1")}</li>
                  <li>{t("enquiryPage.tests.english.extra2")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Enquiry;
