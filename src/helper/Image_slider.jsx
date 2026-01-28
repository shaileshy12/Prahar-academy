import { useState, useEffect } from "react";

const slides = [
  {
    srcLeft: "src/assets/photo.jpg",
    srcRight: "src/assets/img2.jpeg",
    title: "We will transform your dream into reality!",
    subtitle: "Highly experienced coaches and trainers help you get selected.",
    buttonText: "Apply Now",
    buttonLink: "/enquiry",
  },
  {
    srcLeft: "src/assets/img4.jpeg",
    srcRight: "src/assets/img3.jpeg",
    title: "Join India's Best Defence Coaching",
    subtitle: "Structured training for Police, Army, BSF, and all defence exams.",
    buttonText: "Apply Now",
    buttonLink: "/enquiry",
  },
  {
    srcLeft: "src/assets/army-image.jpg",
    srcRight: "src/assets/photo.jpg",
    title: "From Aspirant to Selected Officer",
    subtitle: "Physical training, written guidance, and selection strategy in one place.",
    buttonText: "Apply Now",
    buttonLink: "/enquiry",
  },
];

function AutoImageSlider({ styles = "" }) {
  const [index, setIndex] = useState(0);
  const delay = 4000;

  // auto change
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
    // full-width hero height
    <div className={`relative overflow-hidden w-full h-[50vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] ${styles}`}>
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Centered text + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-2xl leading-tight max-w-2xl">
          {currentSlide.title}
        </h1>
        <p className="text-base md:text-lg max-w-xl mb-8 drop-shadow-lg leading-relaxed">
          {currentSlide.subtitle}
        </p>
        {/* Apply Now button */}
        <a
          href={currentSlide.buttonLink}
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl"
        >
          {currentSlide.buttonText}
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === index 
                ? "bg-amber-400 w-8 scale-110 shadow-lg" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoImageSlider;
