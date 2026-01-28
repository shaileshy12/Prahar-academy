// src/pages/SuccessStudents.jsx
import React from "react";
import CloudinaryVideo from "../../components/CloudinaryVideo";

const successBatches = [
  {
    year: "2024",
    label: "Mumbai Police Bharti",
    selectedCount: 42,
    totalCount: 60,
    highlight: "Written + Physical + Interview",
    badge: "Top Performers",
    students: [
      {
        name: "Rahul Patil",
        post: "Mumbai Police Constable",
        badge: "All India Merit",
      },
      {
        name: "Priya Shinde",
        post: "Mumbai Police Constable",
        badge: "Center Topper",
      },
      {
        name: "Akash Yadav",
        post: "Mumbai Police Constable",
        badge: "Physical Topper",
      },
    ],
  },
  {
    year: "2023",
    label: "SRPF / State Reserve Police Force",
    selectedCount: 27,
    totalCount: 40,
    highlight: "Endurance + Discipline",
    badge: "SRPF Warriors",
    students: [
      { name: "Sagar Jadhav", post: "SRPF Constable", badge: "Best Drill" },
      {
        name: "Mahesh Pawar",
        post: "SRPF Constable",
        badge: "Consistent Performer",
      },
      {
        name: "Rohit Patole",
        post: "SRPF Constable",
        badge: "Physical Excellence",
      },
    ],
  },
  {
    year: "2022",
    label: "Indian Army / GD & Tradesman",
    selectedCount: 19,
    totalCount: 32,
    highlight: "Ground Training + Mock Rallies",
    badge: "Army Selections",
    students: [
      { name: "Vishal More", post: "Army GD", badge: "Early Selection" },
      { name: "Sanjay Bhoir", post: "Army Tradesman", badge: "Rally Topper" },
      { name: "Imran Shaikh", post: "Army GD", badge: "Consistency Award" },
    ],
  },
];

// success cards: photo + name + designation
const successPhotos = [
  {
    id: 1,
    src: "/assets/success/s1.jpg",
    name: "प्रिति बारिया",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 2,
    src: "/assets/success/s2.jpg",
    name: "अक्षदा जगताप",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 3,
    src: "/assets/success/s3.jpg",
    name: "सतीश करंदिकर",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 4,
    src: "/assets/success/s4.jpg",
    name: "सुधांशु मटव",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 5,
    src: "/assets/success/s5.jpg",
    name: "सुजित मालोरे",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 6,
    src: "/assets/success/s6.jpg",
    name: "रोहिणी कुरकुरे",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 7,
    src: "/assets/success/s7.jpg",
    name: "गोविंद साळुंखे",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
  {
    id: 8,
    src: "/assets/success/s8.jpg",
    name: "अंकिता माडवकर",
    designation: "मुंबई पोलिस",
    alt: "Prahar success student in Mumbai Police",
  },
];

const SuccessStudents = () => {
  return (
    <div className="min-h-screen bg-[#050509] text-slate-100 flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/95 to-[#050509]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 border border-amber-400/40">
                Success Students
                <span className="h-px w-6 bg-amber-300/70" />
                Police · Army · Defence
              </p>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Selections that{" "}
                <span className="text-amber-300">prove the training.</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-200/90 max-w-xl">
                Every uniform, every badge and every appointment letter
                represents months of hard work, disciplined training and guided
                preparation at Prahar Career Academy.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
                <div className="rounded-2xl border border-amber-400/40 bg-black/40 px-4 py-3">
                  <div className="text-xl sm:text-2xl font-bold text-amber-300">
                    100+
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300">
                    Selections in Police & Defence*
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-400/40 bg-black/40 px-4 py-3">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-300">
                    7+
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300">
                    Years of focused training
                  </div>
                </div>
                <div className="rounded-2xl border border-sky-400/40 bg-black/40 px-4 py-3">
                  <div className="text-xl sm:text-2xl font-bold text-sky-300">
                    Multi
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300">
                    Batches: Police · Army · SSC GD
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
                *Figures indicative for representation. Actual selections vary
                year to year as per exam cycles.
              </p>
            </div>

            {/* Right: collage / card */}
            <div className="relative">
              <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/95 shadow-[0_24px_80px_rgba(0,0,0,0.75)] p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Recent Achievement
                    </p>
                    <p className="mt-2 text-lg font-semibold text-amber-200">
                      Mumbai Police Bharti – 2024 Batch
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Written, Physical and Interview prepared at one place.
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300 border border-emerald-400/40">
                      42 Selections
                    </span>
                    <span className="mt-2 text-[11px] text-slate-400">
                      From a single selection year
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="h-24 sm:h-28 rounded-2xl bg-[url('https://images.pexels.com/photos/7869491/pexels-photo-7869491.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center border border-white/10" />
                  <div className="h-24 sm:h-28 rounded-2xl bg-[url('https://images.pexels.com/photos/885199/pexels-photo-885199.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center border border-white/10" />
                  <div className="h-24 sm:h-28 rounded-2xl bg-[url('https://images.pexels.com/photos/885198/pexels-photo-885198.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center border border-white/10" />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                  <p className="text-xs text-slate-300">
                    “Prahar disciplined our daily routine – from ground running
                    to daily test series. That consistency converted our effort
                    into final selection.”
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        2024 Police Batch
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Selected Students · Mumbai Region
                      </p>
                    </div>
                    <div className="rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-200">
                      Discipline · Practice · Selection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch wise selections */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Batch-wise <span className="text-amber-300">success.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                A quick view of how Prahar students are getting selected across
                Police, SRPF and Army recruitment drives.
              </p>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 max-w-xs">
              Names and numbers are sample placeholders. Replace with actual
              data once final results are compiled.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {successBatches.map((batch) => (
              <article
                key={batch.year + batch.label}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-black/95 p-5 sm:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {batch.year}
                    </p>
                    <h3 className="mt-1 text-base sm:text-lg font-semibold text-white">
                      {batch.label}
                    </h3>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-200 border border-amber-400/40">
                    {batch.badge}
                  </span>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-bold text-emerald-300">
                      {batch.selectedCount}
                      <span className="text-sm text-slate-300">
                        {" "}
                        / {batch.totalCount}
                      </span>
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Students selected from this batch
                    </p>
                  </div>
                  <p className="inline-flex items-center rounded-xl bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-sky-200 border border-sky-400/40">
                    {batch.highlight}
                  </p>
                </div>

                <div className="mt-4 space-y-2.5">
                  {batch.students.map((s) => (
                    <div
                      key={s.name + s.post}
                      className="flex items-start justify-between gap-3 rounded-2xl border border-white/5 bg-white/2 px-3 py-2 group-hover:border-amber-400/50 transition-colors"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-50">
                          {s.name}
                        </p>
                        <p className="text-[11px] text-slate-400">{s.post}</p>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-0.5">
                        {s.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Success cards grid – Cloudinary video behind cards */}
        <section className="border-t border-white/5 bg-[#020308]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Prahar Academy Center Pvt. Ltd.{" "}
                  <span className="text-amber-300">student success.</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                  Selected students proudly serving in Mumbai Police and other
                  departments after training at Prahar.
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 max-w-xs">
                Replace image paths and names with your actual success data.
                Layout will remain the same.
              </p>
            </div>

            {/* container with video background */}
            <div className="relative rounded-[32px] border border-black bg-black/90 overflow-hidden">
              {/* foreground cards */}
              <div className="relative px-3 sm:px-4 py-5 sm:py-6">
                <div className="grid gap-5 sm:gap-6 md:grid-cols-4">
                  {successPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="flex flex-col items-center rounded-[26px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-slate-200 px-3 pt-3 pb-4"
                    >
                      <div className="w-full rounded-[22px] border border-[#b72c34] overflow-hidden bg-white">
                        <div className="aspect-[3/4] w-full overflow-hidden">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>

                      <div className="mt-3 text-center px-1">
                        <p className="text-sm font-semibold text-[#111111] leading-snug">
                          {photo.name}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#b62426] tracking-wide">
                          {photo.designation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="border-t border-white/5 bg-gradient-to-b from-[#030711] to-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300 border border-amber-400/40">
              Next Success Story
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
              Your selection can be the{" "}
              <span className="text-amber-300">next highlight.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Join Prahar Career Academy for structured Police, Army and Defence
              preparation with discipline, physical training and guided test
              series.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/enquiry"
                className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_18px_45px_rgba(250,204,21,0.65)] hover:brightness-110 active:scale-95 transition"
              >
                Submit Enquiry for Guidance
              </a>
              <a
                href="/courses"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10 active:scale-95 transition"
              >
                View Training Courses
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStudents;
