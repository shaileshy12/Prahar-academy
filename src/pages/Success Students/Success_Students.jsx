// src/pages/SuccessStudents.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import SandeshImg from "../../assets/Sandesh1.png";
import KalpeshImg from "../../assets/kapesh.png";
import KaranImg from "../../assets/Karan.jpg";
import AkshayImg from "../../assets/Akshay.jpg";

const SuccessStudents = () => {
  const { t } = useTranslation("common");

  const successPhotos = [
    { id: 1, src: SandeshImg, name: "Sandesh Gaikwad", designation: "Indian Army (Para SF Commando)" },
    { id: 2, src: KalpeshImg, name: "Kalpesh Sinde", designation: "Indian Army" },
    { id: 3, src: KaranImg, name: "Karan Karande", designation: "Mumbai Police" },
    { id: 4, src: AkshayImg, name: "Akshay Surwade", designation: "Mumbai Police" }
  ];

  return (
    <div className="min-h-screen bg-[#050509] text-slate-100 flex flex-col">
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/95 to-[#050509]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300 border border-amber-400/40">
                {t("success.heroTag")}
              </p>

              <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {t("success.heroTitleMain")}{" "}
                <span className="text-amber-300">{t("success.heroTitleHighlight")}</span>
              </h1>

              <p className="mt-3 text-sm text-slate-200/90 max-w-xl">
                {t("success.heroText")}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 max-w-md">
                <div className="rounded-2xl border border-amber-400/40 bg-black/40 px-3 py-2.5">
                  <div className="text-lg sm:text-xl font-bold text-amber-300">
                    {t("success.stats.s1Title")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300">
                    {t("success.stats.s1Desc")}
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-400/40 bg-black/40 px-3 py-2.5">
                  <div className="text-lg sm:text-xl font-bold text-emerald-300">
                    {t("success.stats.s2Title")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300">
                    {t("success.stats.s2Desc")}
                  </div>
                </div>
                <div className="rounded-2xl border border-sky-400/40 bg-black/40 px-3 py-2.5">
                  <div className="text-lg sm:text-xl font-bold text-sky-300">
                    {t("success.stats.s3Title")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300">
                    {t("success.stats.s3Desc")}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                {t("success.disclaimer")}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-6 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/95 shadow-[0_24px_80px_rgba(0,0,0,0.75)] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {t("success.achievementTag")}
                    </p>
                    <p className="mt-2 text-base font-semibold text-amber-200">
                      {t("success.achievementTitle")}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      {t("success.achievementSub")}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold text-emerald-300 border border-emerald-400/40">
                      {t("success.activeBadge")}
                    </span>
                    <span className="mt-2 text-[10px] text-slate-400">
                      {t("success.activeDesc")}
                    </span>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                  <p className="text-sm text-slate-300">
                    {t("success.quote")}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t("success.quoteTitle")}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {t("success.quoteSub")}
                      </p>
                    </div>
                    <div className="rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold text-amber-200">
                      {t("success.quoteTag")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="border-t border-white/5 bg-[#020308]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  {t("success.sectionTitle")}{" "}
                  <span className="text-amber-300">{t("success.sectionTitleHighlight")}</span>
                </h2>
                <p className="mt-2 text-sm text-slate-300 max-w-xl">
                  {t("success.sectionSub")}
                </p>
              </div>
              <p className="text-[11px] text-slate-500 max-w-xs">
                {t("success.sectionNote")}
              </p>
            </div>

            <div className="relative rounded-[28px] border border-black bg-black/90 overflow-hidden">
              <div className="relative px-3 sm:px-4 py-5 sm:py-6">
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {successPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="flex flex-col items-center rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-slate-200 px-3 pt-3 pb-4"
                    >
                      <div className="w-full rounded-[20px] border border-[#b72c34] overflow-hidden bg-white">
                        <div className="aspect-[3/4] w-full overflow-hidden">
                          <img
                            src={photo.src}
                            alt={photo.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>

                      <div className="mt-3 text-center px-1">
                        <p className="text-sm font-semibold text-[#111111] leading-snug">
                          {photo.name}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#b62426] tracking-wide">
                          {photo.designation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStudents;