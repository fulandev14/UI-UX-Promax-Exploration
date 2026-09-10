type NumberedRuleProps = {
  number: string;
  numberClassName?: string;
  lineClassName?: string;
  className?: string;
  withDot?: boolean;
};

export function NumberedRule({
  number,
  numberClassName = "font-serif text-[3.4rem] leading-none",
  lineClassName = "h-px bg-[var(--border-subtle)]",
  className = "",
  withDot = false,
}: NumberedRuleProps) {
  return (
    <div className={`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 ${className}`}>
      <span className={numberClassName}>{number}</span>
      <span
        aria-hidden="true"
        className={`${lineClassName} ${withDot ? "after:float-right after:-mt-1 after:size-1 after:rounded-full after:bg-[var(--text-muted)] after:content-['']" : ""}`}
      />
    </div>
  );
}
