import React from 'react';

const projects = [
  { title: 'Kirana Coffee', category: 'Brand Identity', color: 'from-emerald-400 to-cyan-400' },
  { title: 'Lumi Studio', category: 'Logo & Guidelines', color: 'from-fuchsia-400 to-rose-400' },
  { title: 'Urban Move', category: 'Campaign Visuals', color: 'from-amber-400 to-orange-500' },
  { title: 'Nord Journal', category: 'Editorial Layout', color: 'from-sky-400 to-indigo-400' },
  { title: 'Wave FM', category: 'Rebrand', color: 'from-violet-400 to-purple-500' },
  { title: 'Moku', category: 'Packaging', color: 'from-lime-400 to-emerald-500' },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-slate-400">A mix of branding, identity systems, and content design.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/10 md:inline-block"
          >
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`aspect-[4/3] w-full bg-gradient-to-br ${p.color} opacity-90 transition-transform duration-300 group-hover:scale-[1.03]`} />
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.category}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">Case Study</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
