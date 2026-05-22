// src/components/AutoImageSlider.jsx
import { useState, useEffect } from "react";

const slides = [
  {
    srcLeft: "src/assets/Parade2.jpeg",
    srcRight: "src/assets/Girl_parade.jpg",
    title: "We will transform your dream into reality!",
    subtitle: "Highly experienced coaches and trainers help you get selected.",
    buttonText: "Apply Now",
    buttonLink: "/enquiry",
  },
  {
    srcLeft: "src/assets/parade.jpeg",
    srcRight: "src/assets/parade.jpeg",
    title: "Join India's Best Defence Coaching",
    subtitle: "Structured training for Police, Army, BSF, and all defence exams.",
    buttonText: "Apply Now",
    buttonLink: "/enquiry",
  },
  {
    srcLeft: "src/assets/army-image.jpg",
    srcRight: "src/assets/ArmywithGun.jpg",
    title: "From Aspirant to Selected Officer",
    subtitle: "Physical training, written guidance, and selection strategy in one place.",
    buttonText: "Apply Now",
    buttonLink: "/enquiry",
  },
];

function AutoImageSlider({ styles = "" }) {
  const [index, setIndex] = useState(0);
  const delay = 4000;

  // Auto change slides
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (i) => {
    setIndex(i);
  };

  const currentSlide = slides[index];

  return (
    <div className={`relative overflow-hidden w-full h-screen sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] ${styles}`}>
      {/* Left image */}
      <div className="absolute inset-0 w-1/2">
        <img
          src={currentSlide.srcLeft}
          alt="Left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right image */}
      <div className="absolute inset-0 w-1/2 left-1/2">
        <img
          src={currentSlide.srcRight}
          alt="Right"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vertical split line */}
      <div className="absolute inset-0 w-px left-1/2 bg-white/30" />

      {/* Dark overlay on both sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />

      {/* Centered text + button - Mobile optimized */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 z-10 w-full">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-2xl leading-tight px-2 tracking-tight">
          {currentSlide.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl mb-6 sm:mb-8 drop-shadow-lg leading-relaxed px-2">
          {currentSlide.subtitle}
        </p>
        {/* Apply Now button */}
        <a
          href={currentSlide.buttonLink}
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg md:text-xl whitespace-nowrap min-w-[140px]"
        >
          {currentSlide.buttonText}
        </a>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 bg-black/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 flex-shrink-0 ${
              i === index
                ? "bg-amber-400 w-6 sm:w-8 scale-110 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoImageSlider;
