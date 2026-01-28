// src/helper/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo.jpg";

const branchesLeft = [
  { name: "Borivali", href: "/branches/borivali" },
  { name: "Thane", href: "/branches/thane" },
  { name: "Chembur", href: "/branches/chembur" },
  { name: "Ghatkopar", href: "/branches/ghatkopar" },
];

const branchesRight = [
  { name: "Nalasopara", href: "/branches/nalasopara" },
  { name: "Pen", href: "/branches/pen" },
  { name: "Kalyan", href: "/branches/kalyan" },
];

const quickLinks = [
  { nameKey: "footer.links.aboutUs", href: "/aboutus" },
  { nameKey: "footer.links.directorDesk", href: "/director-desk" },
  { nameKey: "footer.links.photo", href: "/gallery/photo" },
  { nameKey: "footer.links.video", href: "/gallery/video" },
  { nameKey: "footer.links.successStudent", href: "/success-student" },
  { nameKey: "footer.links.enquiry", href: "/enquiry" },
];

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="relative bg-black text-white text-sm overflow-hidden">
      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14 grid gap-10 md:gap-8 md:grid-cols-4 lg:grid-cols-5">
        {/* Brand / logo + head office */}
        <div className="space-y-5 md:col-span-2 lg:col-span-2">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br via-yellow-300 to-orange-500 flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.9)] overflow-hidden">
              <img
                src={Logo}
                alt={t("site.name")}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-white">
                {t("site.name")}
              </p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-amber-300/90">
                {t("site.tagline")}
              </p>
            </div>
          </div>

          {/* Head office (Thane) – compact block like Borivali */}
          <div className="space-y-1">
            <p className="font-medium text-amber-300">
              {t("footer.office_thane")}
            </p>
            <p className="text-sm text-white/80 max-w-md leading-relaxed">
              {t("footer.address_thane")}
            </p>
          </div>

          {/* Borivali-style address block */}
          <div className="space-y-1 text-xs sm:text-sm text-white/70">
            <p className="font-medium text-amber-300">
              {t("footer.headOffice")}
            </p>
            <p>{t("footer.addressLine1")}</p>
            <p>{t("footer.addressLine2")}</p>
          </div>

          {/* Contact */}
          <div className="mt-3 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/20 text-[11px]">
                ☎
              </span>
              <a
                href="tel:9930810555"
                className="hover:text-amber-300 transition-colors duration-200"
              >
                {t("header.phoneLine")}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/20 text-[11px]">
                ✉
              </span>
              <a
                href={`mailto:${t("header.email")}`}
                className="hover:text-amber-300 transition-colors duration-200 break-all"
              >
                {t("header.email")}
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-5 flex gap-3">
            {["YT", "FB", "IG", "X"].map((item) => (
              <button
                key={item}
                aria-label={item}
                className="w-8 h-8 rounded-md bg-white/5 border border-white/20 flex items-center justify-center text-[11px] font-semibold tracking-[0.12em] shadow-sm hover:border-amber-300 hover:text-amber-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(251,191,36,0.8)] transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Courses & Training */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-6 w-1 rounded-full bg-amber-400" />
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              {t("footer.coursesTitle")}
            </h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-white/80">
            {[
              t("footer.courses.police"),
              t("footer.courses.army"),
              t("footer.courses.taarmy"),
              t("footer.courses.sscgd"),
              t("footer.courses.rpf"),
              t("footer.courses.fitness"),
              t("footer.courses.allPhysical"),
            ].map((item) => (
              <li key={item}>
                <span className="group inline-flex items-center gap-2">
                  <span className="h-[2px] w-3 rounded-full bg-white/40 transition-all duration-200 group-hover:w-5 group-hover:bg-amber-400" />
                  <span className="group-hover:text-amber-200 transition-colors duration-200">
                    {item}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-6 w-1 rounded-full bg-amber-400" />
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
              {t("footer.quickLinksTitle")}
            </h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
            {quickLinks.map((link) => (
              <li key={link.nameKey}>
                <Link
                  to={link.href}
                  className="group inline-flex items-center gap-2 text-white/80"
                >
                  <span className="h-[2px] w-3 rounded-full bg-white/40 transition-all duration-200 group-hover:w-5 group-hover:bg-amber-400" />
                  <span className="group-hover:text-amber-200 transition-colors duration-200">
                    {t(link.nameKey)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div className="md:col-span-2 lg:col-span-1 grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-6 w-1 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
                {t("footer.branchesTitle")}
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {branchesLeft.map((branch) => (
                <li key={branch.name}>
                  <Link
                    to={branch.href}
                    className="group flex items-center gap-2 text-white/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/35 group-hover:bg-emerald-400 transition-colors duration-200" />
                    <span className="group-hover:text-emerald-200 transition-colors duration-200">
                      {branch.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-6 w-1 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
                {t("footer.moreBranchesTitle")}
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {branchesRight.map((branch) => (
                <li key={branch.name}>
                  <Link
                    to={branch.href}
                    className="group flex items-center gap-2 text-white/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/35 group-hover:bg-emerald-400 transition-colors duration-200" />
                    <span className="group-hover:text-emerald-200 transition-colors duration-200">
                      {branch.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-white/50">
          <p>{t("footer.bottomLine")}</p>
          <p className="flex flex-wrap gap-2 items-center text-right">
            <span>{t("footer.bottomSubtitle")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
