import { about, highlights, socials } from "../content";
import { Button } from "../components/Button";
import profilePlaceholder from "../assets/profile-placeholder.jpeg";

type AboutWithPhoto = typeof about & { photo?: string };

export function Hero() {
  const photoSrc = (
    (about as AboutWithPhoto).photo || profilePlaceholder
  ).trim();

  return (
    <header className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center overflow-hidden px-6 pb-20 pt-24 sm:px-10 sm:pt-28 md:px-14 lg:px-20">
      <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] border border-primary/10 bg-white/90 px-8 py-12 shadow-[0_40px_90px_-55px_rgba(16,24,40,0.45)] backdrop-blur lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={photoSrc}
                alt={`Portrait of ${about.name}`}
                className="relative h-[340px] w-[280px] rounded-[3rem] border border-primary/15 object-cover object-top shadow-[0_40px_90px_-50px_rgba(16,24,40,0.4)] sm:h-[360px] sm:w-[300px]"
                loading="lazy"
              />
            </div>
            <Button
              as="a"
              href="/Shubham_FullStack_JS.pdf"
              className="w-full sm:w-auto"
            >
              View résumé
            </Button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/50 sm:text-sm">
                Portfolio
              </p>
              <h1 className="text-[2.8rem] font-semibold leading-tight text-primary sm:text-[3.1rem]">
                {about.name}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/60 sm:text-[0.85rem]">
                {about.title}
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-primary/10 bg-white px-6 py-5 shadow-[0_26px_60px_-45px_rgba(16,24,40,0.35)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Recent Highlights
              </p>
              <ul className="space-y-3 text-sm text-primary/80 sm:text-base">
                {highlights.slice(0, 3).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-primary/5 px-6 py-4 text-sm text-primary shadow-[0_20px_55px_-45px_rgba(16,24,40,0.32)]">
              <p className="font-semibold uppercase tracking-[0.18em]">
                Currently
              </p>
              <p className="mt-1 text-primary/70">
                Lead Engineer at NextWave Labs
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-primary/70">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold text-primary">
                    {item.label}:
                  </span>{" "}
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
