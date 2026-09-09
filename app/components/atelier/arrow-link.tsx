import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light" | "accent";
  className?: string;
  iconClassName?: string;
};

const toneClasses = {
  dark: "text-[var(--color-ink-950)] hover:text-[var(--text-muted)] focus-visible:outline-[var(--interactive-focus)]",
  light: "text-[var(--text-inverse)] hover:opacity-70 focus-visible:outline-[var(--accent-primary)]",
  accent: "text-[var(--accent-primary)] hover:opacity-80 focus-visible:outline-[var(--accent-primary)]",
};

export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
  iconClassName = "size-6 stroke-[1.35]",
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 font-mono text-xs font-medium uppercase leading-none tracking-[0.09em] outline-none transition-opacity duration-200 focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] ${toneClasses[tone]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className={`${iconClassName} shrink-0 transition-transform duration-300 group-hover:translate-x-1.5`}
      />
    </Link>
  );
}
