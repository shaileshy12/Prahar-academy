// src/components/About_Academy.jsx
import React from 'react';

const About_Academy = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-50/50 to-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            About Our Academy
          </h1>
        </div>

        {/* Split layout - image first on mobile */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start md:items-center">
          {/* Image - first on mobile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative max-w-sm md:max-w-md">
              <img
                src="src/assets/img2.jpeg"
                alt="Prahar Career Academy"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl lg:rounded-3xl shadow-xl md:shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Text - second on mobile */}
          <div className="order-2 md:order-1 space-y-6 max-w-none md:max-w-lg lg:max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              We Will Transform Your Dream Into Reality!!
            </h2>
            <div className="space-y-4 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              <p>
                When you get your dream job it feels like you have achieved something significant in your life. 
                You want to join police services or any armed forces like the military then Prahar Academy is 
                the best place to get the correct guidance. 
              </p>
              <p>
                When it comes to government jobs success rate is too low. In every segment hard work can not 
                help you alone. You need proper guidance and smart work to accomplish the required guidance 
                and training that you would be able to get selected for the fitness test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Academy;
