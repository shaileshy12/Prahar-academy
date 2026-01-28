// src/pages/Vision.jsx
import React from "react";
import VisionImage from "../assets/army-image.jpg"; // update with your actual image path

const Vision = () => {
  return (
    <div className="min-h-screen bg-[#030711] text-slate-100 flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/95 to-[#030711]">
        {/* background glows + soft pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-[-8%] h-72 w-72 rounded-full bg-yellow-400/15 blur-3xl" />
          <div className="absolute -bottom-40 right-[-10%] h-80 w-80 rounded-full bg-emerald-500/18 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),radial-gradient(circle_at_bottom,_#22c55e_0,_transparent_55%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-14 md:pt-24 md:pb-18 grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-yellow-300/90 mb-3">
              Prahar Career Academy Vision
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              A clear <span className="text-yellow-300">vision</span> for{" "}
              <span className="text-emerald-300">future warriors</span>
            </h1>
            <p className="text-xs md:text-sm text-slate-200/90 max-w-2xl">
              The vision of Prahar Career Academy is broad and inclusive.
              It focuses not only on the success of students but also on the
              well‑being of society and the nation as a whole. Our vision goes
              beyond business goals and is deeply connected to nation‑building.
            </p>
          </div>

          {/* Hero image card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-yellow-400/40 bg-slate-900/40 shadow-[0_22px_60px_rgba(0,0,0,0.85)]">
              <img
                src={VisionImage}
                alt="Prahar cadets prepared for the nation"
                className="w-full h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-6 px-4 py-2 rounded-2xl bg-black/80 border border-white/10 text-[11px] md:text-[12px] text-slate-100 shadow-lg">
              Preparing honest, disciplined and nation‑first officers.
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-1">
        <section className="relative py-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_top,_#22c55e_0,_transparent_55%),radial-gradient(circle_at_bottom,_#facc15_0,_transparent_55%)]" />

          <div className="relative max-w-6xl mx-auto px-4 space-y-8 md:space-y-10">
            {/* Vision narrative + focus cards */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,0.85fr] gap-8 lg:gap-10 items-start">
              {/* Narrative */}
              <article className="bg-slate-950/85 border border-white/7 rounded-3xl px-5 sm:px-7 py-6 sm:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-slate-50">
                  Our vision for every Prahar cadet
                </h2>
                <div className="space-y-4 text-[13px] md:text-[14px] leading-relaxed text-slate-200">
                  <p>
                    The vision of Prahar Career Academy is to prepare honest,
                    disciplined candidates who are physically fit and mentally
                    strong so they can serve the country effectively and with
                    pride. We want our students to contribute not only to their
                    own success but also to the progress of the nation.
                  </p>
                  <p>
                    We strive to provide equal opportunities to all young
                    aspirants by offering proper guidance and quality training
                    for recruitment in various defence and police services.
                    Many students lose valuable time and money due to incorrect
                    guidance or lack of direction. Our goal is to become a{" "}
                    <span className="font-semibold">
                      trusted and reliable platform
                    </span>{" "}
                    that supports them in both written examinations and
                    physical tests.
                  </p>
                  <p>
                    With the right knowledge, guidance and training, we help
                    students move towards their goals with confidence. Our
                    experienced faculty and ex‑military trainers focus on
                    developing both physical fitness and mental strength so
                    cadets are ready to face tough competition at every stage.
                  </p>
                  <p>
                    In today’s competitive environment, selection in defence or
                    police services requires proper planning, updated knowledge
                    and strong physical preparation. Our vision is to ensure
                    that every serious student reaches the goal on time. In
                    simple words, our mission and vision begin with your dream
                    and are fulfilled when you proudly wear the uniform of your
                    choice and serve the nation.
                  </p>
                </div>
              </article>

              {/* Side highlight cards */}
              <aside className="space-y-5">
                <div className="bg-gradient-to-br from-yellow-500/15 via-slate-900 to-slate-950 border border-yellow-400/25 rounded-3xl px-5 sm:px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-yellow-200/90 mb-3">
                    Vision in one line
                  </h3>
                  <p className="text-[13px] text-slate-50 leading-relaxed">
                    To transform raw determination into{" "}
                    <span className="font-semibold">
                      uniform‑worthy character
                    </span>{" "}
                    by aligning every student’s dream with disciplined
                    preparation and nation‑first values.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] sm:text-[12px]">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-yellow-300 mb-1">
                      For the Nation
                    </p>
                    <p className="font-semibold text-slate-50">
                      Nation‑building focus
                    </p>
                    <p className="text-slate-400 mt-1">
                      Every success story must add strength to India’s security
                      and discipline.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
                      For Students
                    </p>
                    <p className="font-semibold text-slate-50">
                      Equal opportunity
                    </p>
                    <p className="text-slate-400 mt-1">
                      Clear guidance so no effort, time or money is wasted in
                      wrong direction.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/8 px-4 py-3 text-[12px]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-200 mb-1">
                    What Prahar stands for
                  </p>
                  <p className="text-slate-100">
                    Discipline, physical excellence and mental toughness –
                    shaping cadets who carry the{" "}
                    <span className="font-semibold">tricolour</span> in their
                    mind long before they wear the uniform.
                  </p>
                </div>
              </aside>
            </div>

            {/* Bottom strip: Vision pillars */}
            <div className="mt-4 rounded-3xl border border-white/8 bg-slate-950/85 px-5 sm:px-7 py-5 sm:py-6 backdrop-blur">
              <h2 className="text-sm md:text-base font-semibold mb-3 text-slate-50">
                Pillars of Prahar Vision
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[12px] md:text-[13px]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
                    Clarity
                  </p>
                  <p className="text-slate-200">
                    No confusion, no guesswork – clear paths for each defence
                    and police exam.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 mb-1">
                    Preparation
                  </p>
                  <p className="text-slate-200">
                    Balanced focus on written strategy, physical standards and
                    mental toughness.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-300 mb-1">
                    Pride
                  </p>
                  <p className="text-slate-200">
                    Every cadet should feel proud, responsible and ready when
                    wearing the uniform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Vision;
