import React from "react";
import CloudinaryVideo from "../../components/CloudinaryVideo";
import HeroTraining1 from "../../assets/army-image.jpg";
import HeroTraining2 from "../../assets/image.png";
import HeroGroup from "../../assets/img1.jpeg";
import GroundRun from "../../assets/img2.jpeg";
import ParadeLine from "../../assets/img3.jpeg";
import AwardCeremony from "../../assets/img4.jpeg";
import Classroom from "../../assets/photo.jpg";
import Pushups from "../../assets/img1.jpeg";
import BatchPhoto from "../../assets/img3.jpeg";

const galleryImages = [
  { src: GroundRun, title: "Morning Run" },
  { src: ParadeLine, title: "Drill & Parade" },
  { src: AwardCeremony, title: "Medal Ceremony" },
  { src: Classroom, title: "Classroom Session" },
  { src: Pushups, title: "Strength Training" },
  { src: BatchPhoto, title: "Batch Group Photo" },
  { src: HeroTraining1, title: "Ground Practice" },
  { src: HeroTraining2, title: "Sprint Training" },
  { src: HeroGroup, title: "Prahar Family" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#050509] text-gray-100 flex flex-col">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-black/90 to-[#050509]">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-14 grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-yellow-400 mb-2">
              Prahar Gallery
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
              Glimpses of{" "}
              <span className="text-yellow-400">
                Ground Training & Classroom
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-200 mb-4">
              See how Prahar cadets prepare every day for Police Bharti, Army
              Bharti, SSC GD and other defence exams with disciplined training
              and powerful motivation.
            </p>
            <p className="text-xs md:text-sm text-gray-300">
              All images are from real sessions – morning PT, parade practice,
              written coaching, mock tests and celebration moments of selected
              students.
            </p>
          </div>

          {/* Stacked hero photos */}
          <div className="relative h-52 sm:h-64 md:h-72">
            <div className="absolute right-0 top-4 w-56 sm:w-64 md:w-72 h-40 sm:h-44 md:h-52 rounded-2xl overflow-hidden border border-yellow-400/40 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <img
                src={HeroTraining1}
                alt="Prahar ground training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-4 w-32 sm:w-36 md:w-40 h-24 sm:h-28 md:h-32 rounded-2xl overflow-hidden border border-yellow-400/80 shadow-[0_14px_35px_rgba(0,0,0,0.8)]">
              <img
                src={HeroGroup}
                alt="Prahar group photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-10 top-0 w-28 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28 rounded-2xl overflow-hidden border border-yellow-400/80 shadow-[0_12px_30px_rgba(0,0,0,0.8)]">
              <img
                src={HeroTraining2}
                alt="Prahar training sprint"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image grid */}
      <main className="flex-1">
        <section className="relative py-10 md:py-14">
          <CloudinaryVideo
          publicId="SpaceAnimation_vywxoc"
          className="absolute inset-0 w-full object-cover opacity-100"
        />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_60%),radial-gradient(circle_at_bottom,_#22d3ee_0,_transparent_60%)]" />

          <div className="relative max-w-6xl mx-auto px-4">
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 text-gray-50">
              Training & Academy Moments
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-32 sm:h-36 md:h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-2 left-2 right-2 text-[11px] md:text-xs text-gray-100 font-medium drop-shadow">
                    {img.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] md:text-xs text-center text-gray-400">
              More photos and videos are shared regularly on our social media
              handles and WhatsApp groups of active batches.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
