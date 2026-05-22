// src/pages/Courses.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import HeroImg from "../../assets/image.png";

const Courses = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-[#050509] text-gray-100 flex flex-col text-justify">
      {/* Hero - UNTOUCHED */}
      <section className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={HeroImg}
          alt={t("courses.heroImgAlt")}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-yellow-400 mb-2">
              {t("courses.heroTag")}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {t("courses.heroTitleMain")}{" "}
              <span className="text-yellow-400">
                {t("courses.heroTitleHighlight")}
              </span>
            </h1>
            <p className="mt-3 text-xs md:text-sm text-gray-200 max-w-2xl">
              {t("courses.heroText")}
            </p>
          </div>
        </div>
      </section>

      {/* White background section starts here */}
      <main className="flex-1 bg-white text-gray-900">
        <section className="relative py-16 md:py-20">
          {/* Subtle white background gradient */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_#fef3c7_0,_transparent_55%),radial-gradient(circle_at_bottom,_#dbeafe_0,_transparent_55%)]" />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
            {/* Main Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Police Bharti */}
              <div className="group relative rounded-3xl bg-white/80 border border-yellow-200/50 p-8 md:p-10 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/80 to-yellow-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    {t("courses.police.title")}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {t("courses.police.desc")}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-yellow-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-yellow-400 mr-2" />
                      {t("courses.police.classroomTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.police.classroom1"),
                        t("courses.police.classroom2"),
                        t("courses.police.classroom3"),
                        t("courses.police.classroom4"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-yellow-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-yellow-400 mr-2" />
                      {t("courses.police.groundTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.police.ground1"),
                        t("courses.police.ground2"),
                        t("courses.police.ground3"),
                        t("courses.police.ground4"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm font-semibold text-gray-900 bg-yellow-50 px-5 py-4 rounded-2xl border-2 border-yellow-200">
                    {t("courses.police.ideal")}
                  </p>
                </div>
              </div>

              {/* Army Bharti */}
              <div className="group relative rounded-3xl bg-white/80 border border-green-200/50 p-8 md:p-10 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-green-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    {t("courses.army.title")}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {t("courses.army.desc")}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-green-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-green-500 mr-2" />
                      {t("courses.army.classroomTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.army.classroom1"),
                        t("courses.army.classroom2"),
                        t("courses.army.classroom3"),
                        t("courses.army.classroom4"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-green-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-green-500 mr-2" />
                      {t("courses.army.groundTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.army.ground1"),
                        t("courses.army.ground2"),
                        t("courses.army.ground3"),
                        t("courses.army.ground4"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm font-semibold text-gray-900 bg-green-50 px-5 py-4 rounded-2xl border-2 border-green-200">
                    {t("courses.army.ideal")}
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - SSC & Physical */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* SSC GD */}
              <div className="group relative rounded-3xl bg-white/80 border border-blue-200/50 p-8 md:p-10 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-blue-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    {t("courses.ssc.title")}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {t("courses.ssc.desc")}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-blue-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-blue-500 mr-2" />
                      {t("courses.ssc.writtenTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.ssc.written1"),
                        t("courses.ssc.written2"),
                        t("courses.ssc.written3"),
                        t("courses.ssc.written4"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-blue-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-blue-500 mr-2" />
                      {t("courses.ssc.physicalTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.ssc.physical1"),
                        t("courses.ssc.physical2"),
                        t("courses.ssc.physical3"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm font-semibold text-gray-900 bg-blue-50 px-5 py-4 rounded-2xl border-2 border-blue-200">
                    {t("courses.ssc.ideal")}
                  </p>
                </div>
              </div>

              {/* Physical Training */}
              <div className="group relative rounded-3xl bg-white/80 border border-red-200/50 p-8 md:p-10 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 to-red-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    {t("courses.physical.title")}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    {t("courses.physical.desc")}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-red-200">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">
                      <span className="inline-block w-1.5 h-5 rounded-full bg-red-500 mr-2" />
                      {t("courses.physical.routineTitle")}
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        t("courses.physical.routine1"),
                        t("courses.physical.routine2"),
                        t("courses.physical.routine3"),
                        t("courses.physical.routine4"),
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500/70 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm font-semibold text-gray-900 bg-red-50 px-5 py-4 rounded-2xl border-2 border-red-200">
                    {t("courses.physical.ideal")}
                  </p>
                </div>
              </div>
            </div>

            {/* Test System Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Marathi */}
              <div className="group relative rounded-3xl bg-white/90 border border-amber-200/60 p-10 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/80 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {t("courses.test.marathi.title")}
                    <span className="block text-lg font-medium text-gray-600 mt-3">
                      {t("courses.test.marathi.subtitle")}
                    </span>
                  </h3>

                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-3 text-sm lg:text-base text-gray-700 pt-2">
                      {[
                        t("courses.test.marathi.l1"),
                        t("courses.test.marathi.l2"),
                        t("courses.test.marathi.l3"),
                        t("courses.test.marathi.l4"),
                        t("courses.test.marathi.l5"),
                        t("courses.test.marathi.l6"),
                      ].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <ul className="list-disc list-inside space-y-3 text-sm lg:text-base text-amber-700 pt-6 border-t border-amber-200 bg-amber-50/50 p-4 rounded-2xl">
                      <li>{t("courses.test.marathi.extra1")}</li>
                      <li>{t("courses.test.marathi.extra2")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* English */}
              <div className="group relative rounded-3xl bg-white/90 border border-amber-200/60 p-10 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/80 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {t("courses.test.english.title")}
                    <span className="block text-lg font-medium text-gray-600 mt-3">
                      {t("courses.test.english.subtitle")}
                    </span>
                  </h3>

                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-3 text-sm lg:text-base text-gray-700 pt-2">
                      {[
                        t("courses.test.english.l1"),
                        t("courses.test.english.l2"),
                        t("courses.test.english.l3"),
                        t("courses.test.english.l4"),
                        t("courses.test.english.l5"),
                        t("courses.test.english.l6"),
                      ].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <ul className="list-disc list-inside space-y-3 text-sm lg:text-base text-amber-700 pt-6 border-t border-amber-200 bg-amber-50/50 p-4 rounded-2xl">
                      <li>{t("courses.test.english.extra1")}</li>
                      <li>{t("courses.test.english.extra2")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-16">
              <div className="max-w-2xl mx-auto">
                <p className="text-base lg:text-lg text-gray-700 mb-10 px-6 leading-relaxed">
                  {t("courses.cta.text")}
                </p>
                <a
                  href="/enquiry"
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-yellow-300/50 hover:brightness-105 active:scale-[0.97] transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="relative z-10 tracking-wide">
                    {t("courses.cta.button")}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;