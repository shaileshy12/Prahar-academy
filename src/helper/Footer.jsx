import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo.jpg";

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
    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[11px] font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
  >
    {label}
  </a>
);

const SectionHeading = ({ children }) => (
  <div className="mb-4">
    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
      {children}
    </h3>
    <div className="mt-2 h-px w-10 bg-white/15" />
  </div>
);

const NavLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-sm leading-7 text-white/75 transition-colors duration-150 hover:text-white"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="border-t border-white/10 bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black">
                <img
                  src={Logo}
                  alt={t("site.name")}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold leading-tight text-white">
                  {t("site.name")}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                  {t("site.tagline")}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-white">
              {t("footer.headOffice")}
            </p>
            <p className="max-w-xl text-sm leading-7 text-white/70">
              {t("footer.addressLine1")}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/70">
              {t("footer.addressLine2")}
            </p>

            <div className="mt-5 space-y-2">
              <a
                href="tel:9930810555"
                className="block text-sm text-white/75 transition-colors duration-150 hover:text-white"
              >
                {t("header.phoneLine")}
              </a>
              <a
                href={`mailto:${t("header.email")}`}
                className="block text-sm text-white/75 transition-colors duration-150 hover:text-white break-all"
              >
                {t("header.email")}
              </a>
            </div>

            <div className="mt-5 flex gap-2">
              <SocialIcon label="YT" href="https://youtube.com/@jaihindphysical_academy?si=dhebBR8ovADcdcXJ"/>
              <SocialIcon label="FB" href="https://www.facebook.com/share/18TqiF46m7/"/>
              <SocialIcon label="IG" href="https://www.instagram.com/jaihindphysical_academy"/>
              <SocialIcon label="WA" href="https://wa.me/919876543210"/>
              <SocialIcon label="TG" href="#"/>
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading>{t("footer.coursesTitle")}</SectionHeading>
            <ul className="space-y-1">
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
                  className="text-sm leading-7 text-white/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <SectionHeading>{t("footer.quickLinksTitle")}</SectionHeading>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <NavLink key={link.nameKey} to={link.href}>
                  {t(link.nameKey)}
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <SectionHeading>Contact</SectionHeading>
            <div className="space-y-2 text-sm leading-7 text-white/75">
              <p>{t("header.slogan")}</p>
              <p>{t("footer.bottomSubtitle")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{t("footer.bottomLine")}</p>
          <p>{t("footer.bottomSubtitle")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;