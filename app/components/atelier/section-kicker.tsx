import type { ReactNode } from "react";

type SectionKickerProps = {
  number: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

const toneClasses = {
  dark: "text-[var(--color-ink-950)]",
  light: "text-[var(--text-inverse)]",
};

export function SectionKicker({
  number,
  children,
  tone = "dark",
  className = "",
}: SectionKickerProps) {
  return (
    <p
      className={`font-mono text-xs font-medium uppercase leading-none tracking-[0.13em] md:text-sm ${toneClasses[tone]} ${className}`}
    >
      {number}&nbsp;&nbsp;--&nbsp;&nbsp;{children}
    </p>
  );
}
