import { about, highlights, socials } from "../content";
import { Button } from "../components/Button";
import profilePlaceholder from "../assets/profile-placeholder.jpeg";

type AboutWithPhoto = typeof about & { photo?: string };

export function Hero() {
  const photoSrc = (
    (about as AboutWithPhoto).photo || profilePlaceholder
  ).trim();

  return (
    <header className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-12 sm:px-8 md:px-10">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-50px] top-28 h-60 w-60 rounded-full bg-secondary/10 blur-[120px]"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto w-full max-w-5xl mt-10">
        <div className="grid gap-10 rounded-[2rem] border border-white/50 bg-white/85 px-8 py-10 shadow-[0_24px_70px_-50px_rgba(16,24,40,0.45)] backdrop-blur sm:px-12 lg:grid-cols-[minmax(0,260px)_1fr] lg:items-center">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <figure className="relative w-full max-w-[280px]">
              <div
                className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-white/40 shadow-[0_32px_75px_-45px_rgba(16,24,40,0.4)]">
                <img
                  src={photoSrc}
                  alt={`Portrait of ${about.name}`}
                  className="h-[340px] w-full object-cover object-top sm:h-[360px]"
                  loading="lazy"
                />
              </div>
              <figcaption className="absolute -bottom-4 right-4 rounded-full border border-white/70 bg-white px-4 py-1 text-xs tracking-[0.32em] text-primary shadow-md font-semibold">
                SDE-2
              </figcaption>
            </figure>
            <Button
              as="a"
              href="/Shubham_FullStack_JS.pdf"
              className="w-full sm:w-auto"
            >
              View résumé
            </Button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/50 sm:text-sm">
                Portfolio
              </p>
              <h1 className="text-[2.35rem] font-semibold leading-tight text-primary sm:text-[2.7rem]">
                {about.name}
              </h1>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60 sm:text-sm">
                {about.title}
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-primary/10 bg-white px-6 py-5 shadow-[0_22px_55px_-40px_rgba(16,24,40,0.35)]">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary sm:text-sm">
                Recent Highlights
              </p>
              <ul className="space-y-2.5 text-sm text-primary/80">
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

            <div className="rounded-2xl border border-primary/10 bg-primary/5 px-6 py-3 text-sm text-primary shadow-[0_14px_38px_-32px_rgba(16,24,40,0.28)]">
              <p className="font-semibold uppercase tracking-[0.15em]">
                Currently
              </p>
              <p className="mt-1 text-primary/70">
                Lead Engineer at NextWave Labs
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-primary/70">
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
