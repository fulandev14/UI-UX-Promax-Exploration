import Image from "next/image";

type ExperienceStep = {
  number: string;
  title: string;
  description: string;
};

const experienceSteps: ExperienceStep[] = [
  {
    number: "01",
    title: "Threshold",
    description: "Leave the noise outside.",
  },
  {
    number: "02",
    title: "Consultation",
    description: "Seen before shaped.",
  },
  {
    number: "03",
    title: "Ritual",
    description: "Time, touch, and considered care.",
  },
  {
    number: "04",
    title: "Return",
    description: "A result that still feels like you.",
  },
];

export function Experience() {
  return (
    <section
      id="studio"
      aria-labelledby="experience-title"
      className="relative isolate min-h-[56rem] overflow-hidden bg-[var(--background-inverse)] text-[var(--text-inverse)] sm:min-h-[62rem] lg:min-h-dvh"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="/atelier-elan/experience-section/experience-background-mobile-4k.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[54%_center] lg:hidden"
        />
        <Image
          src="/atelier-elan/experience-section/experience-background-large-4k.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgb(14_14_13_/_0.94)_0%,rgb(14_14_13_/_0.76)_40%,rgb(14_14_13_/_0.2)_72%,rgb(14_14_13_/_0.42)_100%)] lg:bg-[linear-gradient(90deg,rgb(14_14_13_/_0.98)_0%,rgb(14_14_13_/_0.84)_26%,rgb(14_14_13_/_0.3)_48%,rgb(14_14_13_/_0.06)_70%,rgb(14_14_13_/_0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgb(14_14_13_/_0.72)_0%,transparent_24%,transparent_60%,rgb(14_14_13_/_0.84)_100%)] lg:bg-[linear-gradient(180deg,rgb(14_14_13_/_0.24)_0%,transparent_28%,transparent_62%,rgb(14_14_13_/_0.7)_100%)]"
      />

      <div className="relative z-10 flex min-h-[56rem] flex-col px-5 py-12 sm:min-h-[62rem] sm:px-8 md:px-10 md:py-16 lg:min-h-dvh lg:px-[clamp(3rem,4.6vw,5rem)] lg:py-[clamp(3rem,5vh,4.5rem)]">
        <p className="font-mono text-xs font-medium uppercase leading-none tracking-[0.13em] text-[var(--text-inverse)] md:text-sm">
          04&nbsp;&nbsp;-&nbsp;&nbsp;Inside the Atelier
        </p>

        <div className="mt-9 max-w-[38rem] md:mt-12 lg:mt-[clamp(2.2rem,4vh,3.75rem)] lg:max-w-[45rem]">
          <h2
            id="experience-title"
            className="font-sans text-[3.65rem] font-black uppercase leading-[0.82] tracking-normal text-[var(--text-inverse)] sm:text-[5rem] md:text-[6.2rem] lg:text-[6.9rem] xl:text-[8rem] min-[90rem]:text-[9rem]"
          >
            <span className="block w-max origin-left scale-x-[0.72] whitespace-nowrap sm:scale-x-[0.7] md:scale-x-[0.68] lg:scale-x-[0.67]">
              A Room
            </span>
            <span className="block w-max origin-left scale-x-[0.62] whitespace-nowrap sm:scale-x-[0.6] md:scale-x-[0.58] lg:scale-x-[0.55]">
              That Listens.
            </span>
          </h2>

          <p className="mt-6 max-w-[11ch] font-serif text-[3.1rem] italic leading-[0.92] tracking-normal text-[var(--text-inverse)] sm:max-w-[12ch] sm:text-[4rem] md:text-[4.9rem] lg:mt-7 lg:text-[4.45rem] xl:text-[5.35rem]">
            Full Attention, Held in Space.
          </p>

          <p className="mt-8 max-w-[35ch] font-mono text-xs leading-[1.75] text-[rgb(251_248_241_/_0.92)] md:text-sm lg:mt-9 lg:max-w-[34ch]">
            Privacy changes the pace. One chair, one conversation, and a room
            designed to let the artist look closely and the client feel
            entirely at ease.
          </p>
        </div>

        <figure className="mt-12 max-w-[18rem] self-end text-right lg:absolute lg:right-[clamp(3.5rem,5.8vw,6.5rem)] lg:top-[58%] lg:mt-0 lg:max-w-[14rem] lg:-translate-y-1/2 xl:max-w-[15.5rem]">
          <blockquote className="font-serif text-[1.95rem] italic leading-[1.08] tracking-normal text-[rgb(251_248_241_/_0.9)] lg:text-[1.55rem] xl:text-[1.8rem]">
            <span aria-hidden="true">&ldquo;</span>
            Comfort is not decoration. It is part of the technique.
            <span aria-hidden="true">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-8 font-mono text-[0.6875rem] font-medium uppercase leading-[1.55] tracking-[0.13em] text-[rgb(251_248_241_/_0.86)] md:text-xs">
            Mirror Study /<br />
            Light / Presence
          </figcaption>
        </figure>

        <ol className="mt-16 grid gap-7 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:gap-10 xl:gap-14">
          {experienceSteps.map((step) => (
            <li key={step.number} className="min-w-0">
              <div className="grid grid-cols-[3.85rem_minmax(0,1fr)] items-center gap-4 md:grid-cols-[4.6rem_minmax(0,1fr)] lg:grid-cols-[4.8rem_minmax(0,1fr)]">
                <span className="font-serif text-[3.4rem] leading-none tracking-normal text-[var(--text-inverse)] md:text-[4.4rem] lg:text-[4.75rem]">
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px bg-[rgb(251_248_241_/_0.6)] after:float-right after:-mt-1 after:size-1 after:rounded-full after:bg-[rgb(251_248_241_/_0.82)] after:content-['']"
                />
              </div>
              <div className="mt-3 md:mt-4">
                <h3 className="font-mono text-xs font-medium uppercase leading-none tracking-[0.13em] text-[var(--text-inverse)] md:text-sm">
                  {step.title}&nbsp;&nbsp;-
                </h3>
                <p className="mt-3 max-w-[23ch] font-mono text-xs leading-relaxed text-[rgb(251_248_241_/_0.88)] md:text-sm lg:text-xs xl:text-sm">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
