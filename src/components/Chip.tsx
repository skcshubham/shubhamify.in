import type { ReactNode } from 'react';

type ChipProps = {
  children: ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/10 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-primary/70 shadow-[0_6px_16px_-12px_rgba(16,24,40,0.4)] sm:text-xs">
      {children}
    </span>
  );
}
