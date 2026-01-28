import React from 'react';

const navOption = [
  "Police Bharti Coaching & Training",
  "Army Bharti Coaching & Training", 
  "SSC GD Coaching & Training",
  "RPF Physical Training",
  "Fitness Physical Training",
  "All Physical Training",
];

const Nav_Training = ({ styles = "" }) => {
  return (
    <div className={`bg-gradient-to-r from-slate-950/95 via-black to-slate-950/95 text-white border-t border-white/10 backdrop-blur-md w-screen ${styles}`}>
      <div className="w-screen px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* responsive 2-line on mobile, 1-line on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 py-6 justify-items-center">
            {navOption.map((option, index) => (
              <a
                key={index}
                href="#"
                className="group text-center transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5 cursor-pointer block"
              >
                <span className="block py-2 px-2 sm:px-3 text-[10px] sm:text-xs lg:text-sm xl:text-base font-semibold tracking-tight leading-tight">
                  {option}
                </span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-amber-400 to-orange-400 rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-300 origin-center" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav_Training;
