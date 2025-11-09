import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 py-20 scroll-mt-28 sm:px-6">
      <div className="rounded-[2rem] border border-primary/15 bg-white px-6 py-14 shadow-[0_32px_70px_-48px_rgba(16,24,40,0.45)] sm:px-10 lg:px-16">
        <motion.div
          className="flex flex-col items-center gap-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Collaborate"
            title="Let’s build something people love"
            description="Whether you need an extra pair of hands on your team or are validating a new idea, I can help you move from prototype to production fast."
          />
          <p className="max-w-2xl text-lg leading-relaxed text-primary/70">
            I love partnering with founders and product teams to find the simplest path to launch. If you have a roadmap, a back-of-the-napkin idea, or an app that needs a second wind, let’s talk.
          </p>
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button as="a" href="mailto:hello@shubham.dev" className="w-full sm:w-auto">
              Start a conversation
            </Button>
            <Button
              as="a"
              href="https://cal.com/shubham/build"
              className="w-full border-primary/20 bg-white text-primary shadow-none hover:bg-white/90 sm:w-auto"
            >
              Book a discovery call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
