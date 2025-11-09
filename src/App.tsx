import { useEffect, useState } from 'react';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);
  const items = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3 text-base font-semibold tracking-tight text-primary sm:text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-primary/10 text-sm text-primary">
            SB
          </span>
          Shubham
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:hello@shubham.dev"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary transition hover:border-primary/30"
          >
            Say hello
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-primary/30 hover:text-primary md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="mx-auto flex w-full max-w-6xl px-4 pb-4 md:hidden sm:px-6">
          <div className="w-full rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600 transition hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:hello@shubham.dev"
                className="rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary transition hover:bg-primary/10"
              >
                Say hello
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-4xl flex-col gap-4 border-t border-slate-200/80 px-4 pb-12 pt-8 text-center text-xs text-slate-500 sm:px-6">
      <p>&copy; {new Date().getFullYear()} Shubham. Crafted with React, Tailwind, and a love for clean DX.</p>
      <p>
        Built to be fast, accessible, and easy to extend. Deploy it anywhere static assets can live — Vercel, Netlify, S3, take your pick.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="relative flex min-h-screen flex-col gap-0">
      <Navbar />
      <main className="flex flex-col px-0 pt-0">
        <Hero />
        <div className="relative mt-24 flex flex-col gap-20 px-4 sm:px-6 md:px-10">
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
