// src/pages/Mission.jsx
import React from "react";

const Mission = () => {
  return (
    <div className="min-h-screen bg-[#030711] text-slate-100 flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/95 to-[#030711]">
        {/* glow + grid background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-40 left-[-10%] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top,_#22c55e_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e9_0,_transparent_55%)]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-14 md:pt-24 md:pb-18">
          <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-emerald-300/80 mb-3">
            Mission of Prahar Career Academy
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            Building disciplined{" "}
            <span className="text-emerald-400">warriors</span> for{" "}
            <span className="text-cyan-300">nation’s defence</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200/90 max-w-3xl">
            Prahar Career Academy works dedicatedly for young men and women who
            have a strong desire to join the defence forces and police
            services. Our mission is to guide and support the youth of our
            nation by showing them the right path to achieve their dream of
            serving the country. We believe that with proper direction and
            training, every determined candidate can succeed.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1">
        <section className="relative py-10 md:py-14">
          {/* subtle background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_#22c55e_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e9_0,_transparent_55%)]" />

          <div className="relative max-w-5xl mx-auto px-4 space-y-8 md:space-y-10">
            {/* 2-column main content */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-10 items-start">
              {/* Left: long text in card */}
              <article className="bg-slate-950/80 border border-white/7 rounded-3xl px-5 sm:px-7 py-6 sm:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-slate-50">
                  Our core mission
                </h2>
                <div className="space-y-4 text-[13px] md:text-[14px] leading-relaxed text-slate-200">
                  <p>
                    At Prahar Career Academy, students receive complete guidance
                    for both written examinations and physical fitness tests.
                    We provide training, mentoring, and clear information about
                    exam procedures and patterns for various competitive exams
                    such as police recruitment, army selection, SSC GD, RPF, and
                    other physical training programs.
                  </p>
                  <p>
                    Many students put in great effort but fail to succeed
                    because they lack proper guidance and experience.
                    Understanding this problem, our institute was established to
                    give correct advice at the right time. Our goal is to help
                    students achieve their dreams with confidence and
                    discipline.
                  </p>
                  <p>
                    We feel proud to train future soldiers and police officers
                    who will serve the nation with honesty, courage, and
                    dedication. Every batch at Prahar is prepared not only to
                    clear exams, but to develop the mindset, stamina and
                    discipline required for a lifelong career in uniform.
                  </p>
                </div>
              </article>

              {/* Right: mission highlights card */}
              <aside className="space-y-5">
                <div className="bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 border border-emerald-400/20 rounded-3xl px-5 sm:px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-emerald-300/90 mb-3">
                    What drives Prahar
                  </h3>
                  <ul className="space-y-3 text-[13px] text-slate-100/95">
                    <li className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        To guide defence and police aspirants with the{" "}
                        <span className="font-semibold">
                          right direction
                        </span>{" "}
                        and exam‑specific strategy.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        To provide{" "}
                        <span className="font-semibold">
                          balanced written & physical
                        </span>{" "}
                        preparation under one system.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        To replace confusion with{" "}
                        <span className="font-semibold">
                          clear guidance
                        </span>{" "}
                        and experienced mentorship.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        To build{" "}
                        <span className="font-semibold">
                          honest, courageous and disciplined
                        </span>{" "}
                        officers for the nation.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* small stats / pillars bar */}
                <div className="grid grid-cols-2 gap-3 text-[11px] sm:text-[12px]">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Focus
                    </p>
                    <p className="font-semibold text-slate-50">
                      Written + Physical
                    </p>
                    <p className="text-slate-400 mt-1">
                      Integrated system for exams & ground.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Values
                    </p>
                    <p className="font-semibold text-slate-50">
                      Discipline & Honour
                    </p>
                    <p className="text-slate-400 mt-1">
                      Training bodies, minds and character.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* bottom band: mission pillars */}
            <div className="mt-4 rounded-3xl border border-white/8 bg-slate-950/80 px-5 sm:px-7 py-5 sm:py-6 backdrop-blur">
              <h2 className="text-sm md:text-base font-semibold mb-3 text-slate-50">
                Pillars of Prahar Mission
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[12px] md:text-[13px]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 mb-1">
                    Guidance
                  </p>
                  <p className="text-slate-200">
                    Correct advice at the right time so that effort never goes
                    waste.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 mb-1">
                    Preparation
                  </p>
                  <p className="text-slate-200">
                    Exam-oriented study plans and structured ground training.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 mb-1">
                    Character
                  </p>
                  <p className="text-slate-200">
                    Inspiring future warriors to serve with honesty, courage and
                    dedication.
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

export default Mission;
