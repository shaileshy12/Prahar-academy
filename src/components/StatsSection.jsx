// src/components/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "50,000", label: "Total Students" },
    { number: "18,000", label: "Selected Students" },
    { number: "10", label: "Years Experience" },
    { number: "35", label: "Trainers" },
  ];

  return (
    <div className="relative w-full overflow-hidden h-[60vh] md:h-[50vh]">
      {/* Fixed background - smaller height */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: "url('src/assets/image.png')" // your image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Stats - compact layout */}
      <div className="relative z-10 flex items-center justify-around h-full px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white"
          >
            {/* Smaller numbers */}
            <div className="text-xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 bg-clip-text text-transparent mb-2 drop-shadow-xl">
              {stat.number}
            </div>
            
            {/* Compact labels */}
            <div className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wide text-white/90 drop-shadow">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
