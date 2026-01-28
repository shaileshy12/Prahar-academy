// src/pages/Courses.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import HeroImg from "../../assets/image.png";

const Courses = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-[#050509] text-gray-100 flex flex-col">
      {/* Hero */}
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

      <main className="flex-1">
        <section className="relative py-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),radial-gradient(circle_at_bottom,_#22d3ee_0,_transparent_55%)]" />

          <div className="relative max-w-6xl mx-auto px-4 space-y-10">
            {/* Courses grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Police Bharti */}
              <div className="rounded-2xl bg-black/70 border border-yellow-400/35 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-yellow-300">
                  {t("courses.police.title")}
                </h2>
                <p className="text-xs md:text-sm text-gray-200">
                  {t("courses.police.desc")}
                </p>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.police.classroomTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.police.classroom1")}</li>
                  <li>{t("courses.police.classroom2")}</li>
                  <li>{t("courses.police.classroom3")}</li>
                  <li>{t("courses.police.classroom4")}</li>
                </ul>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.police.groundTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.police.ground1")}</li>
                  <li>{t("courses.police.ground2")}</li>
                  <li>{t("courses.police.ground3")}</li>
                  <li>{t("courses.police.ground4")}</li>
                </ul>
                <p className="text-[11px] md:text-xs text-yellow-300">
                  {t("courses.police.ideal")}
                </p>
              </div>

              {/* Army Bharti */}
              <div className="rounded-2xl bg-black/70 border border-green-400/35 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-green-300">
                  {t("courses.army.title")}
                </h2>
                <p className="text-xs md:text-sm text-gray-200">
                  {t("courses.army.desc")}
                </p>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.army.classroomTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.army.classroom1")}</li>
                  <li>{t("courses.army.classroom2")}</li>
                  <li>{t("courses.army.classroom3")}</li>
                  <li>{t("courses.army.classroom4")}</li>
                </ul>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.army.groundTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.army.ground1")}</li>
                  <li>{t("courses.army.ground2")}</li>
                  <li>{t("courses.army.ground3")}</li>
                  <li>{t("courses.army.ground4")}</li>
                </ul>
                <p className="text-[11px] md:text-xs text-green-300">
                  {t("courses.army.ideal")}
                </p>
              </div>

              {/* SSC GD / CAPF / Defence exams */}
              <div className="rounded-2xl bg-black/70 border border-sky-400/35 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-sky-300">
                  {t("courses.ssc.title")}
                </h2>
                <p className="text-xs md:text-sm text-gray-200">
                  {t("courses.ssc.desc")}
                </p>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.ssc.writtenTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.ssc.written1")}</li>
                  <li>{t("courses.ssc.written2")}</li>
                  <li>{t("courses.ssc.written3")}</li>
                  <li>{t("courses.ssc.written4")}</li>
                </ul>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.ssc.physicalTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.ssc.physical1")}</li>
                  <li>{t("courses.ssc.physical2")}</li>
                  <li>{t("courses.ssc.physical3")}</li>
                </ul>
                <p className="text-[11px] md:text-xs text-sky-300">
                  {t("courses.ssc.ideal")}
                </p>
              </div>

              {/* Only Physical Training */}
              <div className="rounded-2xl bg-black/70 border border-red-400/35 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-red-300">
                  {t("courses.physical.title")}
                </h2>
                <p className="text-xs md:text-sm text-gray-200">
                  {t("courses.physical.desc")}
                </p>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {t("courses.physical.routineTitle")}
                </h3>
                <ul className="text-[11px] md:text-xs text-gray-200 space-y-1.5 list-disc list-inside">
                  <li>{t("courses.physical.routine1")}</li>
                  <li>{t("courses.physical.routine2")}</li>
                  <li>{t("courses.physical.routine3")}</li>
                  <li>{t("courses.physical.routine4")}</li>
                </ul>
                <p className="text-[11px] md:text-xs text-red-300">
                  {t("courses.physical.ideal")}
                </p>
              </div>
            </div>

            {/* Intellectual + Physical Test system (Marathi + English) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Marathi */}
              <div className="backdrop-blur-xl bg-black/65 border border-white/10 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] p-5 md:p-6 space-y-3">
                <h3 className="text-sm md:text-base font-semibold text-yellow-300">
                  {t("courses.test.marathi.title")}
                  <span className="block text-[11px] md:text-xs text-gray-300">
                    {t("courses.test.marathi.subtitle")}
                  </span>
                </h3>

                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-gray-200">
                  <li>{t("courses.test.marathi.l1")}</li>
                  <li>{t("courses.test.marathi.l2")}</li>
                  <li>{t("courses.test.marathi.l3")}</li>
                  <li>{t("courses.test.marathi.l4")}</li>
                  <li>{t("courses.test.marathi.l5")}</li>
                  <li>{t("courses.test.marathi.l6")}</li>
                </ul>

                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-yellow-300">
                  <li>{t("courses.test.marathi.extra1")}</li>
                  <li>{t("courses.test.marathi.extra2")}</li>
                </ul>
              </div>

              {/* English */}
              <div className="backdrop-blur-xl bg-black/65 border border-white/10 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] p-5 md:p-6 space-y-3">
                <h3 className="text-sm md:text-base font-semibold text-yellow-300">
                  {t("courses.test.english.title")}
                  <span className="block text-[11px] md:text-xs text-gray-300">
                    {t("courses.test.english.subtitle")}
                  </span>
                </h3>

                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-gray-200">
                  <li>{t("courses.test.english.l1")}</li>
                  <li>{t("courses.test.english.l2")}</li>
                  <li>{t("courses.test.english.l3")}</li>
                  <li>{t("courses.test.english.l4")}</li>
                  <li>{t("courses.test.english.l5")}</li>
                  <li>{t("courses.test.english.l6")}</li>
                </ul>

                <ul className="list-disc list-inside space-y-1.5 text-[11px] md:text-xs text-yellow-300">
                  <li>{t("courses.test.english.extra1")}</li>
                  <li>{t("courses.test.english.extra2")}</li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center pt-4">
              <p className="text-xs md:text-sm text-gray-300 mb-3">
                {t("courses.cta.text")}
              </p>
              <a
                href="/enquiry"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(248,250,109,0.45)] hover:brightness-110 active:scale-[0.98] transition"
              >
                {t("courses.cta.button")}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;
