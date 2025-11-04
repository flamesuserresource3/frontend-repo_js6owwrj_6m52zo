import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
            <p className="mt-4 text-slate-300">
              I’m a graphic designer based in Indonesia, focused on building distinct brand identities and bold visual systems. My process blends research, typography, and layout to create work that’s clear, modern, and memorable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Branding', 'Logo Design', 'Visual Identity', 'Packaging', 'Layout', 'Social Media'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/20 via-fuchsia-400/10 to-cyan-400/20 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/80">
                <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400 via-fuchsia-400 to-cyan-400 p-0.5">
                  <div className="absolute inset-[4px] rounded-full bg-slate-900/90" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-400">Portrait placeholder — replace with your photo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
