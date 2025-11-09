import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full border border-primary/10 bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_-24px_rgba(15,23,42,0.6)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-28px_rgba(15,23,42,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40';

type ButtonBaseProps = {
  as?: 'button' | 'a';
  href?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = HTMLMotionProps<'button'> & {
  as?: 'button';
};

type ButtonAsAnchor = HTMLMotionProps<'a'> & {
  as: 'a';
  href: string;
};

export type ButtonProps = ButtonBaseProps & (ButtonAsButton | ButtonAsAnchor);

export function Button(props: ButtonProps) {
  const { as = 'button', href, icon, className, children, ...rest } = props;
  const composedClasses = [baseStyles, className].filter(Boolean).join(' ');

  if (as === 'a' && href) {
    const anchorProps = rest as HTMLMotionProps<'a'>;
    return (
      <motion.a
        href={href}
        className={composedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        whileTap={{ scale: 0.96 }}
        {...anchorProps}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  const buttonProps = rest as HTMLMotionProps<'button'>;
  return (
    <motion.button
      className={composedClasses}
      whileTap={{ scale: 0.96 }}
      {...buttonProps}
    >
      {children}
      {icon}
    </motion.button>
  );
}
