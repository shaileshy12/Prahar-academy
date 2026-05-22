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

const SocialIcon = ({ label, href = "#" }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-[11px] font-bold text-white hover:text-amber-400 hover:border-amber-400/60 hover:-translate-y-0.5 transition-all duration-200"
  >
    {label}
  </a>
);

const SectionHeading = ({ children, accent = "amber" }) => (
  <div className="mb-5">
    <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-3">
      {children}
    </h3>
    <div className={`h-px w-8 ${accent === "emerald" ? "bg-emerald-500" : "bg-amber-500"}`} />
  </div>
);

const NavLink = ({ to, children, color = "amber" }) => (
  <li>
    <Link
      to={to}
      className={`text-sm text-white hover:${
        color === "emerald" ? "text-emerald-400" : "text-amber-400"
      } transition-colors duration-150 leading-relaxed`}
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-[#0e0e0e] text-white border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-10">

        {/* ── Brand column ── */}
        <div className="space-y-7">
          {/* Logo + name */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
              <img
                src={Logo}
                alt={t("site.name")}
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide leading-tight">
                {t("site.name")}
              </p>
              <p className="text-[11px] text-amber-400/80 tracking-widest uppercase mt-0.5">
                {t("site.tagline")}
              </p>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-amber-400/80 mb-1.5">
                {t("footer.headOffice")}
              </p>
              <p className="text-sm text-white leading-relaxed max-w-xs">
                {t("footer.addressLine1")}
              </p>
              <p className="text-sm text-white leading-relaxed">
                {t("footer.addressLine2")}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/70 mb-1.5">
                {t("footer.office_thane")}
              </p>
              <p className="text-sm text-white leading-relaxed max-w-xs">
                {t("footer.address_thane")}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <a
              href="tel:9930810555"
              className="flex items-center gap-2.5 text-sm text-white hover:text-amber-400 transition-colors duration-150"
            >
              <span className="text-base leading-none">☎</span>
              <span>{t("header.phoneLine")}</span>
            </a>
            <a
              href={`mailto:${t("header.email")}`}
              className="flex items-center gap-2.5 text-sm text-white hover:text-amber-400 transition-colors duration-150 break-all"
            >
              <span className="text-base leading-none flex-shrink-0">✉</span>
              <span>{t("header.email")}</span>
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-2 pt-1">
            <SocialIcon label="YT" />
            <SocialIcon label="FB" />
            <SocialIcon label="IG" />
            <SocialIcon label="X" />
          </div>
        </div>

        {/* ── Courses column ── */}
        <div>
          <SectionHeading accent="amber">{t("footer.coursesTitle")}</SectionHeading>
          <ul className="space-y-2.5">
            {[
              t("footer.courses.police"),
              t("footer.courses.army"),
              t("footer.courses.taarmy"),
              t("footer.courses.sscgd"),
              t("footer.courses.rpf"),
              t("footer.courses.fitness"),
              t("footer.courses.allPhysical"),
            ].map((item) => (
              <li
                key={item}
                className="text-sm text-white hover:text-amber-400 transition-colors duration-150 cursor-pointer leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Quick Links column ── */}
        <div>
          <SectionHeading accent="amber">{t("footer.quickLinksTitle")}</SectionHeading>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <NavLink key={link.nameKey} to={link.href}>
                {t(link.nameKey)}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* ── Branches column ── */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-1">
          <div>
            <SectionHeading accent="emerald">{t("footer.branchesTitle")}</SectionHeading>
            <ul className="space-y-2.5">
              {branchesLeft.map((branch) => (
                <NavLink key={branch.name} to={branch.href} color="emerald">
                  {branch.name}
                </NavLink>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading accent="emerald">{t("footer.moreBranchesTitle")}</SectionHeading>
            <ul className="space-y-2.5">
              {branchesRight.map((branch) => (
                <NavLink key={branch.name} to={branch.href} color="emerald">
                  {branch.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>{t("footer.bottomLine")}</p>
          <p>{t("footer.bottomSubtitle")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;