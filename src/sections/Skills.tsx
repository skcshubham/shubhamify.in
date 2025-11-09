import { motion } from 'framer-motion';
import { skills } from '../content';
import { SectionTitle } from '../components/SectionTitle';

const categories = [
  { key: 'core', label: 'Core Stack' },
  { key: 'backend', label: 'Backend & Data' },
  { key: 'tools', label: 'Platform & DX' }
] as const;

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-20 scroll-mt-28 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Expertise"
        title="Tools and technologies that keep me shipping"
        description="I work across the JavaScript ecosystem with a focus on maintainable architectures, clean DX, and measurable outcomes."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ key, label }) => (
          <motion.div
            key={key}
            className="rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_26px_55px_-45px_rgba(16,24,40,0.4)] transition hover:-translate-y-1 hover:shadow-[0_34px_70px_-40px_rgba(16,24,40,0.45)] sm:p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{label}</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary/80 sm:text-[0.95rem]">
              {skills[key].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
