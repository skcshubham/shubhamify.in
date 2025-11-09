import { about, highlights, socials } from '../content';
import { Button } from '../components/Button';
import profilePlaceholder from '../assets/profile-placeholder.svg';

export function Hero() {
  const photoSrc = (about as typeof about & { photo?: string }).photo ?? profilePlaceholder;

  return (
    <header className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center overflow-hidden px-6 pb-16 pt-24 sm:px-10 sm:pt-24 md:px-14 lg:px-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {about.tagline}
        </span>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-[2.4rem] font-semibold leading-tight text-primary sm:text-[2.8rem] md:text-[3rem]">
              {about.name}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/60 sm:text-[0.75rem]">
              {about.title}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-primary/70 sm:text-lg">
              I design and ship production-ready web experiences that balance clarity, performance, and maintainability. Looking for the next team where thoughtful engineering meets impactful outcomes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button as="a" href="mailto:hello@shubham.dev">
                Open to opportunities
              </Button>
              <Button
                as="a"
                href="/Shubham_FullStack_JS.pdf"
                className="border-primary/20 bg-white text-primary shadow-none hover:bg-white/90"
              >
                View résumé
              </Button>
            </div>
          </div>
          <div className="flex w-full max-w-xs flex-col items-start gap-5 lg:max-w-sm">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_20px_45px_-32px_rgba(16,24,40,0.35)]">
              <img
                src={photoSrc}
                alt={`Portrait of ${about.name}`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="w-full rounded-2xl border border-primary/10 bg-white px-5 py-4 shadow-sm">
              <p className="text-sm font-medium text-primary">Recent highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-primary/90">
                {highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full rounded-2xl border border-primary/10 bg-white px-5 py-4 shadow-sm">
              <p className="text-sm font-semibold text-primary">Currently</p>
              <p className="text-sm text-primary/70">Lead Engineer at NextWave Labs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-primary/70">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-primary" target="_blank" rel="noreferrer">
              <span className="font-semibold text-primary">{item.label}:</span> {item.value}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
