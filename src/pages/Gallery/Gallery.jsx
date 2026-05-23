// src/pages/Gallery.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import HeroTraining1 from "../../assets/army-image.jpg";
import HeroTraining2 from "../../assets/image.png";
import HeroGroup from "../../assets/img1.jpeg";
import GroundRun from "../../assets/img2.jpeg";
import ParadeLine from "../../assets/img3.jpeg";
import AwardCeremony from "../../assets/img4.jpeg";
import Pushups from "../../assets/img1.jpeg";
import BatchPhoto from "../../assets/img3.jpeg";

const Gallery = () => {
  const { t } = useTranslation("common");

  const galleryImages = [
    { src: GroundRun, title: t("gallery.images.img1") },
    { src: ParadeLine, title: t("gallery.images.img2") },
    { src: AwardCeremony, title: t("gallery.images.img3") },
    { src: Pushups, title: t("gallery.images.img4") },
    { src: BatchPhoto, title: t("gallery.images.img5") },
    { src: HeroTraining1, title: t("gallery.images.img6") },
    { src: HeroTraining2, title: t("gallery.images.img7") },
    { src: HeroGroup, title: t("gallery.images.img8") },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-gray-100 flex flex-col">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-black/90 to-[#606063]">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-14 grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 items-center">
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-yellow-400 mb-2">
              {t("gallery.heroTag")}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
              {t("gallery.heroTitle")}{" "}
              <span className="text-yellow-400">
                {t("gallery.heroTitleHighlight")}
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-200 mb-4">
              {t("gallery.heroText1")}
            </p>
            <p className="text-xs md:text-sm text-gray-300">
              {t("gallery.heroText2")}
            </p>
          </div>

          <div className="relative h-52 sm:h-64 md:h-72">
            <div className="absolute right-0 top-4 w-56 sm:w-64 md:w-72 h-40 sm:h-44 md:h-52 rounded-2xl overflow-hidden border border-yellow-400/40 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <img
                src={HeroTraining1}
                alt="Jai Hind ground training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-4 w-32 sm:w-36 md:w-40 h-24 sm:h-28 md:h-32 rounded-2xl overflow-hidden border border-yellow-400/80 shadow-[0_14px_35px_rgba(0,0,0,0.8)]">
              <img
                src={HeroGroup}
                alt="Jai Hind group photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-10 top-0 w-28 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28 rounded-2xl overflow-hidden border border-yellow-400/80 shadow-[0_12px_30px_rgba(0,0,0,0.8)]">
              <img
                src={HeroTraining2}
                alt="Jai Hind training sprint"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white text-gray-900">
        <section className="relative py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_#fef3c7_0,_transparent_60%),radial-gradient(circle_at_bottom,_#dbeafe_0,_transparent_60%)]" />

          <div className="relative max-w-6xl mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
              {t("gallery.sectionTitle")}
            </h2>

            <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-10">
              {t("gallery.sectionSub")}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-36 sm:h-40 md:h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 right-3 text-xs md:text-sm text-white font-semibold drop-shadow-sm">
                    {img.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs md:text-sm text-center text-gray-500">
              {t("gallery.footerText")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;