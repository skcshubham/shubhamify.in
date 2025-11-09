import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionTitle({ eyebrow, title, description, action }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-3 text-left">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-primary"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </motion.span>
        <motion.h2
          className="max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-[2.35rem]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            className="max-w-2xl text-base text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {description}
          </motion.p>
        )}
      </div>
      {action && <div className="flex justify-start md:justify-end">{action}</div>}
    </div>
  );
}
