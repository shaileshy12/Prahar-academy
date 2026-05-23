// src/helper/Image_slider.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Define images outside to keep component clean
const slidesData = [
  { srcLeft: "src/assets/Parade2.jpeg", srcRight: "src/assets/Girl_parade.jpg", key: "slide1" },
  { srcLeft: "src/assets/parade.jpeg", srcRight: "src/assets/parade.jpeg", key: "slide2" },
  { srcLeft: "src/assets/army-image.jpg", srcRight: "src/assets/ArmywithGun.jpg", key: "slide3" },
];

function AutoImageSlider({ styles = "" }) {
  const { t, i18n } = useTranslation("common");
  const [index, setIndex] = useState(0);
  const delay = 4000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, delay);
    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (i) => setIndex(i);
  const currentSlide = slidesData[index];

  return (
    // key={i18n.language} ensures language switches trigger a clean re-render
    <div key={i18n.language} className={`relative overflow-hidden w-full h-screen sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] ${styles}`}>
      {/* Left image */}
      <div className="absolute inset-0 w-1/2">
        <img src={currentSlide.srcLeft} alt="Training" className="w-full h-full object-cover" />
      </div>

      {/* Right image */}
      <div className="absolute inset-0 w-1/2 left-1/2">
        <img src={currentSlide.srcRight} alt="Training" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 w-px left-1/2 bg-white/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />

      {/* Centered text + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 z-10 w-full">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-2xl leading-tight px-2 tracking-tight">
          {t(`home.slider.${currentSlide.key}.title`)}
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl mb-6 sm:mb-8 drop-shadow-lg leading-relaxed px-2">
          {t(`home.slider.${currentSlide.key}.subtitle`)}
        </p>
        <a
          href="/enquiry"
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg md:text-xl whitespace-nowrap min-w-[140px]"
        >
          {t(`home.slider.${currentSlide.key}.btn`)}
        </a>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 bg-black/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 flex-shrink-0 ${
              i === index ? "bg-amber-400 w-6 sm:w-8 scale-110 shadow-lg" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoImageSlider;