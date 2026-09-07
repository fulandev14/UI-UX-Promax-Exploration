import Image from "next/image";

type Principle = {
  number: string;
  title: string;
  copy: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Listen",
    copy: "Presence before prescription.",
  },
  {
    number: "02",
    title: "Refine",
    copy: "Technique shaped to the individual.",
  },
  {
    number: "03",
    title: "Endure",
    copy: "Care designed to live well.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[var(--background-primary)] px-5 py-16 text-[var(--text-primary)] md:px-10 md:py-20 lg:min-h-dvh lg:px-16 lg:py-14 min-[90rem]:px-20"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 min-[90rem]:gap-10">
        <div className="relative z-10 flex min-h-full flex-col lg:col-span-7">
          <div className="font-mono text-sm uppercase leading-none tracking-[0.08em] md:text-base">
            01&nbsp;&nbsp;-&nbsp;&nbsp;Our Philosophy
          </div>
          <div
            aria-hidden="true"
            className="mt-7 size-4 bg-[var(--accent-primary)] md:size-5"
          />

          <div className="mt-8 md:mt-10 lg:mt-9">
            <h2
              id="about-title"
              className="max-w-[12ch] font-sans text-[clamp(3.75rem,14.5vw,7.35rem)] font-black uppercase leading-[0.84] tracking-normal text-[var(--color-ink-950)] md:text-[clamp(6.25rem,9.1vw,9rem)] lg:text-[clamp(5.9rem,7vw,8.6rem)] min-[90rem]:text-[clamp(6.9rem,6.8vw,9rem)]"
            >
              <span className="block w-max origin-left scale-x-[0.46] whitespace-nowrap sm:scale-x-[0.56] md:scale-x-[0.62]">
                Full Attention.
              </span>
              <span className="block w-max origin-left scale-x-[0.46] whitespace-nowrap sm:scale-x-[0.56] md:scale-x-[0.62]">
                Enduring Craft.
              </span>
            </h2>

            <div className="mt-8 grid gap-8 lg:mt-7 lg:grid-cols-[minmax(0,28rem)_12rem] lg:items-start min-[90rem]:grid-cols-[minmax(0,29rem)_13rem]">
              <blockquote className="relative max-w-[42rem] font-serif text-[3.65rem] italic leading-[0.95] tracking-normal text-[var(--color-ink-950)] sm:text-[clamp(4.25rem,13vw,7.2rem)] md:text-[clamp(5.7rem,7vw,8rem)] lg:text-[4.35rem] min-[90rem]:text-[4.7rem]">
                <span aria-hidden="true" className="absolute -left-2 -top-3 text-[0.42em] not-italic">
                  &ldquo;
                </span>
                <span className="block">We listen</span>
                <span className="block">before we</span>
                <span className="block">shape.</span>
                <span aria-hidden="true" className="absolute bottom-0 right-0 text-[0.42em] not-italic">
                  &rdquo;
                </span>
              </blockquote>

              <p className="max-w-[30ch] font-mono text-sm leading-[1.75] text-[var(--color-ink-950)] lg:max-w-[22ch] lg:self-center">
                Every service begins with observation: how the hair moves, how
                texture responds, and how the result will live beyond the
                appointment.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:mt-16 lg:mt-auto lg:pt-12">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[4.25rem_minmax(0,1fr)] items-start gap-4 md:grid-cols-[5rem_minmax(0,1fr)] lg:grid-cols-[5rem_minmax(6rem,1fr)_minmax(12rem,19rem)]"
              >
                <div className="font-serif text-[3rem] leading-none text-[var(--text-primary)] md:text-[4rem]">
                  {principle.number}
                </div>
                <div
                  aria-hidden="true"
                  className="mt-7 h-px bg-[var(--border-subtle)] after:float-right after:-mt-1 after:size-1 after:rounded-full after:bg-[var(--text-muted)] after:content-[''] md:mt-9"
                />
                <div className="col-start-2 pt-1.5 lg:col-start-auto">
                  <h3 className="font-mono text-sm font-medium uppercase leading-none tracking-[0.14em] text-[var(--text-primary)] md:text-base">
                    {principle.title}
                  </h3>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-[var(--text-muted)]">
                    {principle.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[var(--border-subtle)] pt-5 font-mono text-xs uppercase leading-none tracking-[0.14em] text-[var(--text-primary)] md:mt-9">
            Craft / Individuality / Ritual
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:flex lg:min-h-[calc(100dvh-7rem)] lg:items-center lg:justify-end">
          <figure className="relative mx-auto aspect-[1190/1322] w-full overflow-hidden bg-[var(--color-espresso-800)] sm:max-w-[38rem] lg:mx-0 lg:w-[min(100%,42rem)] min-[90rem]:w-[min(100%,46rem)]">
            <Image
              src="/atelier-elan/about-section/craft-continuous.png"
              alt="A stylist studies wet hair with a comb during a precise consultation."
              fill
              sizes="(min-width: 1440px) 41vw, (min-width: 1024px) 39vw, (min-width: 640px) 38rem, 100vw"
              className="object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
