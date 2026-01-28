// src/pages/AboutUs/AboutUs.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import CloudinaryVideo from "../../components/CloudinaryVideo";

const AboutUs = () => {
  // uses "common" namespace where your common.json lives
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col bg-[#050815] text-white">
      {/* Hero section with background video */}
      <section className="relative w-full bg-black overflow-hidden">
        {/* Background video from Cloudinary */}
        <CloudinaryVideo
          publicId="VN20251202_170050_ycnxwc"
          className="absolute inset-0 w-full object-cover opacity-100"
        />

        {/* Dark overlay + color glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="pointer-events-none absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),radial-gradient(circle_at_bottom_right,_#22c55e_0,_transparent_55%)]" />

        {/* Foreground content */}
        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8">
          {/* Text side */}
          <div className="md:w-1/2 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-7 w-1 rounded-full bg-amber-400" />
              <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-amber-300">
                {t("site.name")}
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-4">
              {t("about.heroTitle")}{" "}
              <span className="text-amber-300">
                {t("about.heroTitleHighlight")}
              </span>
            </h1>

            <p className="text-sm md:text-base text-white/85 mb-4 text-justify md:leading-relaxed">
              {t("about.heroText1")}
            </p>
            <p className="text-sm md:text-base text-white/75 text-justify md:leading-relaxed">
              {t("about.heroText2")}
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <main className="flex-1">
        <section className="relative max-w-6xl mx-auto px-4 py-10 md:py-14">
          {/* single, soft color glow behind content */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top,_#f97316_0,_transparent_55%)]" />

          {/* Page heading */}
          <div className="mb-8 md:mb-10 flex items-center justify-center gap-3">
            <span className="h-7 w-1 rounded-full bg-amber-400" />
            <div className="text-center">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-amber-300 mb-1">
                {t("nav.about")}
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-white">
                {t("about.pageTitle")}
              </h1>
            </div>
          </div>

          {/* Intro paragraph */}
          <p className="text-sm md:text-base text-white/85 leading-relaxed md:leading-loose mb-6 text-justify">
            {t("about.intro")}
          </p>

          {/* Two-column layout */}
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            {/* Left: main story card */}
            <div className="lg:col-span-2 space-y-5 text-sm md:text-base text-white/85 leading-relaxed md:leading-loose text-justify bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg shadow-black/60">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
              <p>{t("about.p5")}</p>
              <p>{t("about.p6")}</p>
              <p>{t("about.p7")}</p>
              <p>{t("about.p8")}</p>
              <p>{t("about.p9")}</p>
            </div>

            {/* Right: highlight box */}
            <aside className="bg-gradient-to-b from-amber-400/15 via-black/80 to-emerald-500/10 border border-amber-400/60 rounded-2xl p-5 space-y-3 text-sm text-white shadow-lg shadow-black/70">
              <h3 className="text-base md:text-lg font-semibold text-amber-300 mb-2">
                {t("about.whyTitle")}
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>{t("about.why1")}</li>
                <li>{t("about.why2")}</li>
                <li>{t("about.why3")}</li>
                <li>{t("about.why4")}</li>
                <li>{t("about.why5")}</li>
              </ul>
              <div className="mt-4 border-t border-amber-400/50 pt-3">
                <p className="text-xs uppercase tracking-[0.16em] text-white/70 mb-1">
                  {t("about.commitmentLabel")}
                </p>
                <p className="text-sm text-white/90">
                  {t("about.commitmentText")}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
