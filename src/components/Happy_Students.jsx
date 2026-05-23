// src/components/Happy_Students.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SandeshImg from "../assets/Sandesh1.png";
import KalpeshImg from "../assets/kapesh.png";
import KaranImg from "../assets/Karan.jpg";
import AkshayImg from "../assets/Akshay.jpg";

const Happy_Students = () => {
  const { t, i18n } = useTranslation("common");
  const [currentStudent, setCurrentStudent] = useState(0);

  // Student array using translation keys
  const students = [
    {
      name: "Sandesh Gaikwad",
      role: t("home.testimonials.s1.role"),
      photo: SandeshImg,
      testimonial: t("home.testimonials.s1.text"),
    },
    {
      name: "Kalpesh Sinde",
      role: t("home.testimonials.s2.role"),
      photo: KalpeshImg,
      testimonial: t("home.testimonials.s2.text"),
    },
    {
      name: "Karan Karande",
      role: t("home.testimonials.s3.role"),
      photo: KaranImg,
      testimonial: t("home.testimonials.s3.text"),
    },
    {
      name: "Akshay Surwade",
      role: t("home.testimonials.s4.role"),
      photo: AkshayImg,
      testimonial: t("home.testimonials.s4.text"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudent((prev) => (prev + 1) % students.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [students.length]);

  const student = students[currentStudent];

  return (
    // key={i18n.language} triggers a clean re-render on language switch
    <section key={i18n.language} className="w-full bg-gradient-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            {t("home.testimonials.title")}
          </h1>

          <div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 w-full max-w-2xl h-[540px] md:h-[580px] mx-auto relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              "
            </div>

            <div className="px-8 md:px-12 pt-10 md:pt-12 flex flex-col h-full">
              {/* Student Photo */}
              <div className="flex justify-center mb-6 shrink-0">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-4 border-white shadow-2xl ring-4 ring-yellow-400/30"
                />
              </div>

              {/* Testimonial Area */}
              <div className="h-[100px] md:h-[180px] flex items-center justify-center mb-6 overflow-hidden shrink-0">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic font-medium text-center overflow-hidden line-clamp-5 md:line-clamp-6">
                  "{student.testimonial}"
                </p>
              </div>

              {/* Name + Role */}
              <div className="h-[120px] flex flex-col md:flex-row md:items-center gap-1 md:gap-6 justify-center pb-8 md:pb-10 shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {student.name}
                </h3>
                <span className="text-sm md:text-base text-yellow-600 font-semibold uppercase tracking-wide">
                  {student.role}
                </span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {students.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStudent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentStudent
                    ? "bg-yellow-400 w-8 scale-110 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happy_Students;