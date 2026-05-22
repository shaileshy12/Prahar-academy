import React, { useState, useEffect } from 'react';

const students = [
  {
    name: "Govind Salunke",
    role: "Police Training Faculty, Prahar Career Academy",
    photo: "src/assets/ContactUs.jpeg",
    testimonial:
      "Prahar Career Academy has helped me clear all the hurdles of Mumbai Police Training from start to end. Prahar Academy Center Pvt Ltd is so good at every level of training. Thank you Prahar.",
  },
  {
    name: "Student Name 2",
    role: "Army Training Faculty",
    photo: "src/assets/Director_Photo_.png",
    testimonial:
      "Your testimonial text here. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Student Name 3",
    role: "SSC GD Mentor",
    photo: "src/assets/Vishal_Trainer.jpeg",
    testimonial:
      "Prahar helped me achieve my dream selection. The academy provided excellent physical training and guidance throughout my journey.",
  },
];

const Happy_Students = () => {
  const [currentStudent, setCurrentStudent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudent((prev) => (prev + 1) % students.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const student = students[currentStudent];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Happy Students
          </h1>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 md:p-12 max-w-2xl mx-auto relative overflow-hidden min-h-[520px] md:min-h-[560px] flex flex-col justify-between">
            
            {/* Quote mark */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              "
            </div>

            {/* Student Photo */}
            <div className="flex justify-center mb-6">
              <img
                src={student.photo}
                alt={student.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-4 border-white shadow-2xl ring-4 ring-yellow-400/30"
              />
            </div>

            {/* Fixed Testimonial Area */}
            <div className="flex-1 flex items-center justify-center mb-2 mt-4">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic font-medium text-center line-clamp-4 min-h-[120px] md:min-h-[150px] overflow-hidden">
                "{student.testimonial}"
              </p>
            </div>

            {/* Name + Role */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {student.name}
              </h3>
              <span className="text-sm md:text-base text-yellow-600 font-semibold uppercase tracking-wide">
                {student.role}
              </span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {students.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStudent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStudent
                    ? "bg-yellow-400 w-8 scale-110 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Happy_Students;