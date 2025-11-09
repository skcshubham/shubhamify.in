import { motion } from 'framer-motion';
import { projects } from '../content';
import { SectionTitle } from '../components/SectionTitle';
import { Chip } from '../components/Chip';
import { Button } from '../components/Button';

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-20 scroll-mt-28 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Selected Work"
        title="Case studies blending thoughtful UX with scalable engineering"
        description="A sampling of products and platforms I have guided from prototype to production."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white shadow-[0_28px_60px_-45px_rgba(16,24,40,0.4)] transition hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-40px_rgba(16,24,40,0.45)]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-accent/15 via-transparent to-secondary/15 opacity-80 transition group-hover:opacity-95" />
            <div className="relative flex flex-col gap-5 px-6 pb-8 pt-9 sm:px-8 sm:pb-10 sm:pt-11">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-primary">{project.name}</h3>
                <p className="text-sm leading-relaxed text-primary/70 sm:text-base break-words">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Button as="a" href={project.link} className="w-auto">
                  View case study
                </Button>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/60">
                  Featured
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
