import { motion } from 'framer-motion';
import { experience } from '../content';
import { SectionTitle } from '../components/SectionTitle';

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-20 scroll-mt-28 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Experience"
        title="Leading teams through high-impact product cycles"
        description="From early discovery to post-launch iteration, I partner with cross-functional teams to ship polished and measurable outcomes."
      />
      <div className="relative mt-12 pl-6 sm:pl-10">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-secondary/60 via-primary/20 to-transparent sm:left-6" />
        <div className="flex flex-col gap-10">
          {experience.map((role, index) => (
            <motion.article
              key={role.company}
              className="relative rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_26px_55px_-45px_rgba(16,24,40,0.4)]"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute -left-6 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 bg-secondary/15 text-xs font-semibold uppercase tracking-[0.22em] text-secondary sm:-left-9 sm:h-12 sm:w-12">
                {index + 1}
              </div>
              <header className="flex flex-col gap-2 border-b border-primary/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{role.role}</h3>
                  <p className="text-xs uppercase tracking-[0.26em] text-secondary">{role.company}</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-primary/60">{role.period}</span>
              </header>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-primary/80 sm:text-base">
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1 w-6 rounded bg-secondary/60 sm:h-1.5 sm:w-1.5 sm:rounded-full" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
