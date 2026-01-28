// src/pages/DirectorDesk.jsx
import React from "react";
import DirectorPhoto from "../assets/Director_Photo_Desk.png";

const DirectorDesk = () => {
  return (
    <div className="min-h-screen bg-[#050509] text-slate-100 flex flex-col">
      {/* Hero / header */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/95 to-[#050509]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_top,_#facc15_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
            {/* Director photo */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-amber-500/60 via-orange-500/40 to-sky-500/40 blur-lg opacity-70" />
              <div className="relative rounded-[28px] bg-[#050509] border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.9)] overflow-hidden w-56 sm:w-64 lg:w-72 aspect-[3/4] flex items-center justify-center">
                <img
                  src={DirectorPhoto}
                  alt="Director of Prahar Career Academy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Intro text */}
            <div className="flex-1 text-left">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 border border-amber-400/40">
                Director’s Desk
                <span className="h-px w-6 bg-amber-300/70" />
                Prahar Career Academy
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                The vision behind{" "}
                <span className="text-amber-300">Prahar.</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-200/90">
                Prahar Career Academy was started with a single goal – to
                prepare disciplined, confident and physically fit candidates who
                can proudly serve in Police, Army and Defence forces.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                From the first batch till today, our focus has remained on
                ground-level training, honest guidance and building the mental
                toughness required for real selection.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 max-w-sm text-center text-[11px] sm:text-xs">
                <div className="rounded-2xl border border-amber-400/40 bg-black/40 px-3 py-2">
                  <p className="text-lg sm:text-xl font-bold text-amber-300">
                    Director
                  </p>
                  <p className="text-slate-300 font-bold mt-0.5">
                    Rakesh Garase
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-400/40 bg-black/40 px-3 py-2">
                  <p className="text-lg sm:text-xl font-bold text-emerald-300">
                    Founder
                  </p>
                  <p className="text-slate-300 font-bold mt-0.5">
                    Prahar Career Academy
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-400/40 bg-black/40 px-3 py-2">
                  <p className="text-lg sm:text-xl font-bold text-sky-300">
                    Mentor
                  </p>
                  <p className="text-slate-300 font-bold mt-0.5">
                    Police · Army ·
                    <br />
                    All Defence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director journey */}
<main className="flex-1">
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
    {/* single column for journey, cards move below on small, side on large */}
    <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
      {/* Journey text column */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Director’s <span className="text-amber-300">journey.</span>
        </h2>

        {/* centered block like your reference */}
        <div className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-300 text-justify">
          <p className="mb-3">
            Every meaningful institution begins with a purpose, and Prahar Career Academy is no
            exception. Behind this academy stands a man with a clear vision, strong discipline, and
            deep respect for those who dedicate their lives to serving the nation – Rakesh Garase
            Sir.
          </p>
          <p className="mb-3">
            He always believed that joining the police, army, or other uniformed services is not just
            a career choice but a responsibility toward society and the country. While interacting
            with young aspirants, he observed a common problem: talented and motivated students were
            failing not because of lack of ability, but because of lack of proper guidance, training,
            and financial support.
          </p>
          <p className="mb-3">
            Many aspirants came from economically weaker backgrounds. They had the passion to serve
            the nation, but expensive coaching fees, misinformation, and poor training facilities
            often forced them to give up their dreams. This reality deeply affected Rakesh Garase Sir
            and became the turning point of his journey.
          </p>
          <p className="mb-3">
            With this realization, he founded Prahar Career Academy — not as a profit-driven
            institute, but as a mission-driven platform. The academy was established to provide
            structured physical training, mental conditioning, written exam guidance, and
            discipline-oriented preparation for candidates aiming to join the police, army, and other
            defence-related services.
          </p>
          <p className="mb-3">
            What truly sets Prahar Career Academy apart is its inclusive philosophy. He strongly
            believes that financial limitations should never decide a person’s future. Under his
            leadership, the academy actively supports students who are unable to afford course fees.
            Deserving and hardworking candidates are encouraged to join the academy free of cost,
            ensuring that no capable aspirant is left behind due to money.
          </p>
          <p className="mb-3">
            Beyond training, the academy focuses on building character, confidence, and resilience.
            Students are taught discipline, time management, physical endurance, and mental strength —
            qualities essential not only for selection but for life in uniformed services.
          </p>
          <p className="mb-3">
            Today, Prahar Career Academy stands as a symbol of opportunity, fairness, and national
            service. It continues to guide young aspirants, especially those from underprivileged
            backgrounds, helping them transform their dreams into reality.
          </p>
          <p>
            The journey of Rakesh Garase Sir is a reminder that true leadership is not measured by
            profit, but by how many lives are uplifted. Through Prahar Career Academy, he continues
            to inspire the youth to believe in themselves, serve the nation with pride, and march
            forward with determination.
          </p>
        </div>
      </div>

      {/* Message card column stays same */}
      <div className="space-y-5">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/95 to-slate-900/90 p-5 sm:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.85)] text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
            Message to students
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-100">
            “Hard work, determination, guidance and faith – these four pillars define Prahar Career
            Academy. If you are ready to give your 100% on the ground and in studies, my team and I
            are ready to stand with you till your final selection.”
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-white">Rakesh Garase</p>
            <p className="text-xs text-slate-400">
              Founder & Director, Prahar Career Academy
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-400/40 bg-amber-500/10 p-4 sm:p-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Training · Discipline · Selection
          </p>
          <p className="mt-2 text-sm text-amber-50">
            At Prahar, we believe selections are not achieved in one day. They are the result of
            small disciplined efforts taken every single day on the ground and in the classroom.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
  );
};

export default DirectorDesk;
