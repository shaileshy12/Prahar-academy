// src/pages/ContactUs.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import HeroTraining1 from "../../assets/img3.jpeg";
import HeroTraining2 from "../../assets/army-image.jpg";
import HeroGroup from "../../assets/ContactUs.jpeg";

const branches = [
  {
    key: "borivali",
    cityKey: "contact.branches.borivali.city",
    nameKey: "contact.branches.borivali.name",
    addressKey: "contact.branches.borivali.address",
    phoneKey: "contact.branches.borivali.phone"
  },
  {
    key: "thane",
    cityKey: "contact.branches.thane.city",
    nameKey: "contact.branches.thane.name",
    addressKey: "contact.branches.thane.address",
    phoneKey: "contact.branches.thane.phone"
  },
  {
    key: "kalyan",
    cityKey: "contact.branches.kalyan.city",
    nameKey: "contact.branches.kalyan.name",
    addressKey: "contact.branches.kalyan.address",
    phoneKey: "contact.branches.kalyan.phone"
  },
  {
    key: "ghatkopar",
    cityKey: "contact.branches.ghatkopar.city",
    nameKey: "contact.branches.ghatkopar.name",
    addressKey: "contact.branches.ghatkopar.address",
    phoneKey: "contact.branches.ghatkopar.phone"
  },
  {
    key: "chembur",
    cityKey: "contact.branches.chembur.city",
    nameKey: "contact.branches.chembur.name",
    addressKey: "contact.branches.chembur.address",
    phoneKey: "contact.branches.chembur.phone"
  },
  {
    key: "nalasopara",
    cityKey: "contact.branches.nalasopara.city",
    nameKey: "contact.branches.nalasopara.name",
    addressKey: "contact.branches.nalasopara.address",
    phoneKey: "contact.branches.nalasopara.phone"
  },
  {
    key: "pen",
    cityKey: "contact.branches.pen.city",
    nameKey: "contact.branches.pen.name",
    addressKey: "contact.branches.pen.address",
    phoneKey: "contact.branches.pen.phone"
  }
];

const ContactUs = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-[#050509] text-gray-100 flex flex-col">
      {/* Hero section with training photos - unchanged */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-black/90 to-[#3e3e41]">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-14 grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 items-center">
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-yellow-400 mb-2">
              {t("contact.heroTag")}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
              {t("contact.heroTitleMain")}{" "}
              <span className="text-yellow-400">
                {t("contact.heroTitleHighlight")}
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-200 mb-4">
              {t("contact.heroText1")}
            </p>
            <p className="text-xs md:text-sm text-gray-300">
              {t("contact.heroText2")}
            </p>
          </div>

          <div className="relative h-52 sm:h-64 md:h-72">
            <div className="absolute right-0 top-4 w-56 sm:w-64 md:w-72 h-40 sm:h-44 md:h-52 rounded-2xl overflow-hidden border border-yellow-400/40 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <img
                src={HeroTraining1}
                alt={t("contact.heroImgAltMain")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-4 w-32 sm:w-36 md:w-40 h-24 sm:h-28 md:h-32 rounded-2xl overflow-hidden border border-white/15 shadow-[0_14px_35px_rgba(0,0,0,0.8)]">
              <img
                src={HeroGroup}
                alt={t("contact.heroImgAltGroup")}
                className="w-full h-top object-cover"
              />
            </div>
            <div className="absolute left-10 top-0 w-28 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.8)]">
              <img
                src={HeroTraining2}
                alt={t("contact.heroImgAltSession")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* White section after hero */}
      <main className="flex-1 bg-white text-gray-900">
        <section className="relative py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top,_#fef3c7_0,_transparent_60%),radial-gradient(circle_at_bottom,_#dbeafe_0,_transparent_60%)]" />

          <div className="relative max-w-6xl mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              {t("contact.branchesTitle")}
            </h2>

            <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-10">
              Reach out to the nearest Prahar Career Academy branch for admission
              guidance, batch timings, and course details.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-sm">
              {branches.map((b) => (
                <div
                  key={b.key}
                  className="bg-white border border-gray-200 rounded-2xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                    {t(b.cityKey)}
                  </h3>

                  <p className="text-[13px] font-semibold text-gray-700 text-center mb-3 tracking-wide">
                    {t(b.nameKey)}
                  </p>

                  <p className="text-[13px] leading-relaxed text-gray-600 mb-4 text-center">
                    {t(b.addressKey)}
                  </p>

                  <p className="text-[15px] font-semibold text-yellow-600 text-center">
                    ☎ {t(b.phoneKey)}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs md:text-sm text-center text-gray-600">
              {t("contact.generalLine1")}{" "}
              <span className="text-yellow-600 font-medium">
                <a
                  href={`mailto:${t("header.email")}`}
                  className="hover:text-yellow-700 underline"
                >
                  {t("header.email")}
                </a>
              </span>{" "}
              {t("contact.generalLine2")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;