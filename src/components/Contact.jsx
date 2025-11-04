import React from 'react';
import { Mail, Instagram, Phone, Globe } from 'lucide-react';

const Contact = () => {
  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Project Inquiry — M Aria Saputra');
    const body = encodeURIComponent('Hi Aria,\n\nI would like to discuss a new project. Here are some details:\n\n• Company/Brand:\n• Scope:\n• Timeline:\n\nThank you!');
    window.location.href = `mailto:hello@ariasaputra.design?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s work together</h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            Have a brief or idea in mind? Send an email with some details and I’ll get back within 24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-400/20 p-2 text-emerald-300">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:hello@ariasaputra.design" className="font-medium text-white hover:underline">hello@ariasaputra.design</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-400/20 p-2 text-emerald-300">
                <Instagram size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Instagram</p>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="font-medium text-white hover:underline">@aria.design</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-400/20 p-2 text-emerald-300">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone/WhatsApp</p>
                <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="font-medium text-white hover:underline">+62 812-3456-789</a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleEmail} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="w-full rounded-md border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Your name" />
            <input className="w-full rounded-md border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Email or phone" />
          </div>
          <textarea className="mt-4 h-32 w-full rounded-md border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Project details" />
          <div className="mt-4 flex justify-between">
            <div className="text-sm text-slate-400">Average project timeframe: 2–6 weeks</div>
            <button type="submit" className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/20 transition-transform hover:-translate-y-0.5">
              Send email
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} M Aria Saputra. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
