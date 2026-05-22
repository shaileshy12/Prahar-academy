// src/components/Header.jsx
import {
  Chrome,
  Facebook,
  InstagramIcon,
  Locate,
  Mail,
  Phone,
  YoutubeIcon,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, DEFAULT_LANG } from "../i18next/i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/Logo.jpg";

// Helpers to prefix routes with current lang from URL
function useLangPrefix() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const maybeLang = parts[0];
  const currentLang = SUPPORTED_LANGS.includes(maybeLang)
    ? maybeLang
    : DEFAULT_LANG;
  return currentLang === DEFAULT_LANG ? "" : `/${currentLang}`;
}

const baseRefArr = {
  Home: "/",
  "About Us": "/aboutus",
  Courses: "/courses",
  "Success Student": "/success-students",
  Gallery: "/gallery",
  Enquiry: "/enquiry",
  "Contact Us": "/contactus",
};

function Header() {
  const [openBranches, setOpenBranches] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openSection, setOpenSection] = useState(null); // mobile submenus
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null); // desktop dropdowns
  const branchesRef = useRef(null);
  const desktopMenuRef = useRef(null);

  const { t } = useTranslation("common");
  const prefix = useLangPrefix();

  // Build language-aware paths (prefix + base path)
  const refArr = Object.fromEntries(
    Object.entries(baseRefArr).map(([key, val]) => [key, prefix + val])
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (branchesRef.current && !branchesRef.current.contains(event.target)) {
        setOpenBranches(false);
      }
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target)
      ) {
        setOpenDesktopMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (name) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  const toggleDesktopMenu = (name) => {
    setOpenDesktopMenu((prev) => (prev === name ? null : name));
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-30">
      <div className=" mx-auto px-4">
        {/* Top row: logo + academy + contact + hamburger */}
        <div className="flex items-center justify-between gap-2 py-2">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="h-14 w-auto md:h-16 flex items-center">
              <img
                src={Logo}
                alt={t("site.name")}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide text-gray-900">
                {t("site.name")} (Borivali)
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-orange-700">
                {t("site.tagline")}
              </span>
            </div>
          </div>

          {/* Right side: contact + branches + social (desktop / tablet) */}
          <div className="hidden md:flex flex-col items-end gap-2 text-xs md:text-sm">
            <div className="flex items-center gap-3 text-gray-800">
              <span className="inline-flex items-center gap-1">
                <Mail className="w-4 h-4 text-orange-700" />
                <a
                  href={`mailto:${t("header.email")}`}
                  className="hover:underline"
                >
                  {t("header.email")}
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-4 h-4 text-orange-700" />
                <span>{t("header.phoneLine")}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span>{t("header.slogan")}</span>

              {/* Branches button */}
              <div ref={branchesRef} className="relative text-xs">
                <button
                  type="button"
                  onClick={() => setOpenBranches((p) => !p)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/70 bg-orange-600 text-white
                             hover:bg-orange-700 hover:shadow-md transition-all duration-200"
                >
                  <Locate className="w-3.5 h-3.5" />
                  <span>{t("nav.branches")}</span>
                  <span className="text-[9px]">▼</span>
                </button>

                {openBranches && (
                  <div
                    className="
                      absolute right-0 mt-2 w-[20rem]
                      rounded-xl bg-white text-black shadow-2xl z-40
                      border border-orange-200
                      max-h-64 overflow-y-auto
                      px-1
                    "
                  >
                    <ul className="py-2 text-xs sm:text-sm font-semibold">
                      <li className="border-b-2 border-red-500 px-4 py-2 text-red-600 bg-red-50">
                        Borivali (9594801555)
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/thane"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Thane{" "}
                          <span className="text-[11px] text-gray-500">
                            9594359555
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/kalyan"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Kalyan{" "}
                          <span className="text-[11px] text-gray-500">
                            9820808333
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/ghatkopar"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Ghatkopar{" "}
                          <span className="text-[11px] text-gray-500">
                            9594345111
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/chembur"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Chembur{" "}
                          <span className="text-[11px] text-gray-500">
                            9594080222
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/nallasopara"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Nallasopara{" "}
                          <span className="text-[11px] text-gray-500">
                            9930264666
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/pen"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Pen{" "}
                          <span className="text-[11px] text-gray-500">
                            9833896111
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2 text-black">
                <a
                  href="https://www.youtube.com/@yourchannel"
                  target="_blank"
                  rel="noreferrer"
                  className=" p-1 hover:bg-gray-100 rounded-lg"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/prahar_career_academy_"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 hover:bg-gray-100 rounded-lg"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/groups/422214769566819/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 hover:bg-gray-100 rounded-lg"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.praharacademycenter.in"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 hover:bg-gray-100 rounded-lg"
                >
                  <Chrome className="w-4 h-4" />
                </a>

                {/* Language switcher */}
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a href="tel:+919930810555" className="text-orange-700">
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => {
                setOpenMobileNav((p) => !p);
                setOpenSection(null);
              }}
              className="text-gray-900"
            >
              {openMobileNav ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE contact + branches + language (below header) */}
        <div className="md:hidden">
          <div className="bg-orange-600 text-white text-xs px-4 py-2 flex items-center justify-between gap-3">
            {/* left: email + phone */}
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${t("header.email")}`}
                className="inline-flex items-center gap-1 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[11px]">{t("header.email")}</span>
              </a>
              <a
                href="tel:+919594801555"
                className="inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[11px]">9594801555</span>
              </a>
            </div>

            {/* right: branches + language */}
            <div className="flex flex-col items-end gap-1 text-[11px]">
              {/* Branches button – reuse same state */}
              <div ref={branchesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenBranches((p) => !p)}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full
                             border border-orange-500/70 bg-orange-600 text-[11px]
                             hover:bg-orange-700 transition-all duration-200"
                >
                  <Locate className="w-3 h-3" />
                  <span>{t("nav.branches")}</span>
                  <span className="text-[8px]">▼</span>
                </button>

                {openBranches && (
                  <div
                    className="
                      absolute right-0 mt-2 w-60
                      rounded-xl bg-white text-black shadow-2xl z-40
                      border border-orange-200 max-h-60 overflow-y-auto px-1
                    "
                  >
                    <ul className="py-2 text-xs sm:text-sm font-semibold">
                      <li className="border-b-2 border-red-500 px-4 py-2 text-red-600 bg-red-50">
                        Borivali (9594801555)
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/thane"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Thane{" "}
                          <span className="text-[11px] text-gray-500">
                            9594359555
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/kalyan"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Kalyan{" "}
                          <span className="text-[11px] text-gray-500">
                            9820808333
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/ghatkopar"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Ghatkopar{" "}
                          <span className="text-[11px] text-gray-500">
                            9594345111
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/chembur"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Chembur{" "}
                          <span className="text-[11px] text-gray-500">
                            9594080222
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/nallasopara"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Nallasopara{" "}
                          <span className="text-[11px] text-gray-500">
                            9930264666
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={prefix + "/branches/pen"}
                          className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-150"
                        >
                          Pen{" "}
                          <span className="text-[11px] text-gray-500">
                            9833896111
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* language switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Orange nav strip – desktop only */}
        <div
          ref={desktopMenuRef}
          className="mb-1 bg-orange-700 text-white shadow-sm hidden md:block"
        >
          <nav className="flex flex-wrap items-center justify-between gap-3 px-4 py-1">
            <span className="text-[11px] uppercase tracking-[0.28em] text-orange-100">
              {t("nav.trainingDisciplineSelection")}
            </span>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm sm:text-base ">
              {/* HOME */}
              <Link
                to={refArr["Home"]}
                className="
                  relative px-1
                  border-b-2 border-transparent
                  transition-all duration-200
                  hover:text-yellow-200 hover:border-yellow-300
                  after:absolute after:left-1/2 after:-translate-x-1/2
                  after:-bottom-0.5 after:h-[2px] after:w-0
                  after:bg-yellow-300 after:rounded-full
                  after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {t("nav.home")}
              </Link>

              {/* ABOUT US dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu("about")}
                  className="
                    flex items-center gap-1 px-1
                    border-b-2 border-transparent
                    transition-all duration-200
                    hover:text-yellow-200 hover:border-yellow-300
                  "
                >
                  <span>{t("nav.about")}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDesktopMenu === "about" && (
                  <div className="absolute left-0 mt-2 w-44 rounded-lg bg-white text-black shadow-xl z-40">
                    <div className="flex flex-col py-2 text-sm">
                      <Link
                        to={refArr["About Us"]}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        {t("nav.about")}
                      </Link>
                      <Link
                        to={prefix + "/director-desk"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Director Desk
                      </Link>
                      <Link
                        to={prefix + "/mission"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Mission
                      </Link>
                      <Link
                        to={prefix + "/vision"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Vision
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* COURSES dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu("courses")}
                  className="
                    flex items-center gap-1 px-1
                    border-b-2 border-transparent
                    transition-all duration-200
                    hover:text-yellow-200 hover:border-yellow-300
                  "
                >
                  <span>{t("nav.courses")}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDesktopMenu === "courses" && (
                  <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white text-black shadow-xl z-40">
                    <div className="flex flex-col py-2 text-sm">
                      <Link
                        to={prefix + "/courses#police"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Police Bharti Coaching & Training
                      </Link>
                      <Link
                        to={prefix + "/courses#army"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Army Bharti Coaching & Training
                      </Link>
                      <Link
                        to={prefix + "/courses#army"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Territorial Army Bharti
                      </Link>
                      <Link
                        to={prefix + "/courses#bsf"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        SSC GD Coaching & Training
                      </Link>
                      <Link
                        to={prefix + "/courses#itbp"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        RPF Physical Training
                      </Link>
                      <Link
                        to={prefix + "/courses#cisf"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Fitness Physical Training
                      </Link>
                      <Link
                        to={prefix + "/courses#rpf"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        All Physical Training
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* SUCCESS STUDENT */}
              <Link
                to={refArr["Success Student"]}
                className="
                  relative px-1
                  border-b-2 border-transparent
                  transition-all duration-200
                  hover:text-yellow-200 hover:border-yellow-300
                  after:absolute after:left-1/2 after:-translate-x-1/2
                  after:-bottom-0.5 after:h-[2px] after:w-0
                  after:bg-yellow-300 after:rounded-full
                  after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {t("nav.success")}
              </Link>

              {/* GALLERY dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu("gallery")}
                  className="
                    flex items-center gap-1 px-1
                    border-b-2 border-transparent
                    transition-all duration-200
                    hover:text-yellow-200 hover:border-yellow-300
                  "
                >
                  <span>{t("nav.gallery")}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDesktopMenu === "gallery" && (
                  <div className="absolute left-0 mt-2 w-40 rounded-lg bg-white text-black shadow-xl z-40">
                    <div className="flex flex-col py-2 text-sm">
                      <Link
                        to={prefix + "/gallery#photos"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Photos
                      </Link>
                      <Link
                        to={prefix + "/gallery#videos"}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="px-4 py-1 hover:bg-orange-50 hover:text-orange-700"
                      >
                        Videos
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ENQUIRY */}
              <Link
                to={refArr["Enquiry"]}
                className="
                  relative px-1
                  border-b-2 border-transparent
                  transition-all duration-200
                  hover:text-yellow-200 hover:border-yellow-300
                  after:absolute after:left-1/2 after:-translate-x-1/2
                  after:-bottom-0.5 after:h-[2px] after:w-0
                  after:bg-yellow-300 after:rounded-full
                  after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {t("nav.enquiry")}
              </Link>

              {/* CONTACT US */}
              <Link
                to={refArr["Contact Us"]}
                className="
                  relative px-1
                  border-b-2 border-transparent
                  transition-all duration-200
                  hover:text-yellow-200 hover:border-yellow-300
                  after:absolute after:left-1/2 after:-translate-x-1/2
                  after:-bottom-0.5 after:h-[2px] after:w-0
                  after:bg-yellow-300 after:rounded-full
                  after:transition-all after:duration-200
                  hover:after:w-full
                "
              >
                {t("nav.contact")}
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile full-screen drawer menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          openMobileNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* dark overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setOpenMobileNav(false)}
        />

        {/* left drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-3/4 max-w-xs bg-black text-white shadow-xl transform transition-transform duration-300 ${
            openMobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="text-sm font-semibold uppercase tracking-wide">
              {t("nav.home")} MENU
            </span>
            <button
              type="button"
              onClick={() => setOpenMobileNav(false)}
              className="text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col px-4 py-4 text-sm font-semibold space-y-1">
            {/* HOME */}
            <Link
              to={refArr["Home"]}
              onClick={() => setOpenMobileNav(false)}
              className="py-2 text-yellow-300"
            >
              {t("nav.home").toUpperCase()}
            </Link>

            {/* ABOUT US with submenu */}
            <button
              type="button"
              onClick={() => toggleSection("about")}
              className="flex items-center justify-between py-2 border-t border-white/10 text-left w-full"
            >
              <span>{t("nav.about").toUpperCase()}</span>
              {openSection === "about" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                openSection === "about" ? "max-h-64" : "max-h-0"
              }`}
            >
              <div className="flex flex-col pl-4 pb-2 gap-2 text-xs">
                <Link
                  to={refArr["About Us"]}
                  onClick={() => setOpenMobileNav(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  to={prefix + "/director-desk"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Director Desk
                </Link>
                <Link
                  to={prefix + "/mission"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Mission
                </Link>
                <Link
                  to={prefix + "/vision"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Vision
                </Link>
              </div>
            </div>

            {/* COURSES with submenu */}
            <button
              type="button"
              onClick={() => toggleSection("courses")}
              className="flex items-center justify-between py-2 border-t border-white/10 text-left w-full"
            >
              <span>{t("nav.courses").toUpperCase()}</span>
              {openSection === "courses" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                openSection === "courses" ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="flex flex-col pl-4 pb-2 gap-2 text-xs">
                <Link
                  to={prefix + "/courses#police"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Police Bharti Coaching & Training
                </Link>
                <Link
                  to={prefix + "/courses#army"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Army Bharti Coaching & Training
                </Link>
                <Link
                  to={prefix + "/courses#bsf"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  BSF Bharti Coaching & Training
                </Link>
                <Link
                  to={prefix + "/courses#itbp"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  ITBP Bharti Coaching & Training
                </Link>
                <Link
                  to={prefix + "/courses#cisf"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  CISF Bharti Coaching & Training
                </Link>
                <Link
                  to={prefix + "/courses#rpf"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  RPF Bharti Coaching & Training
                </Link>
              </div>
            </div>

            {/* SUCCESS STUDENT */}
            <Link
              to={refArr["Success Student"]}
              onClick={() => setOpenMobileNav(false)}
              className="py-2 border-t border-white/10"
            >
              {t("nav.success").toUpperCase()}
            </Link>

            {/* GALLERY with submenu */}
            <button
              type="button"
              onClick={() => toggleSection("gallery")}
              className="flex items-center justify-between py-2 border-t border-white/10 text-left w-full"
            >
              <span>{t("nav.gallery").toUpperCase()}</span>
              {openSection === "gallery" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                openSection === "gallery" ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="flex flex-col pl-4 pb-2 gap-2 text-xs">
                <Link
                  to={prefix + "/gallery#photos"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Photos
                </Link>
                <Link
                  to={prefix + "/gallery#videos"}
                  onClick={() => setOpenMobileNav(false)}
                >
                  Videos
                </Link>
              </div>
            </div>

            {/* ENQUIRY */}
            <Link
              to={refArr["Enquiry"]}
              onClick={() => setOpenMobileNav(false)}
              className="py-2 border-t border-white/10"
            >
              {t("nav.enquiry").toUpperCase()}
            </Link>

            {/* CONTACT US */}
            <Link
              to={refArr["Contact Us"]}
              onClick={() => setOpenMobileNav(false)}
              className="py-2 border-t border-b border-white/10"
            >
              {t("nav.contact").toUpperCase()}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
