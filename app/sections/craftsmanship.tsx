import Image from "next/image";

type CraftStep = {
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  imageClassName: string;
  figureClassName: string;
};

const craftSteps: CraftStep[] = [
  {
    number: "01",
    title: "Consult",
    description: "We observe movement, texture, and daily rhythm.",
    src: "/atelier-elan/craftsmanship/consult.png",
    alt: "A stylist studies the client's hair before beginning the service.",
    imageClassName: "object-[50%_48%]",
    figureClassName: "aspect-[1.12/1]",
  },
  {
    number: "02",
    title: "Section",
    description: "Structure gives every decision a reason.",
    src: "/atelier-elan/craftsmanship/section.png",
    alt: "A close view of wet hair being separated with a comb.",
    imageClassName: "object-center",
    figureClassName: "aspect-[0.65/1]",
  },
  {
    number: "03",
    title: "Shape",
    description: "The hand responds to weight, fall, and balance.",
    src: "/atelier-elan/craftsmanship/shape.png",
    alt: "A stylist's hands guide a comb through wet hair with precision.",
    imageClassName: "object-center",
    figureClassName: "aspect-[1.75/1]",
  },
  {
    number: "04",
    title: "Refine",
    description: "The cut is judged only after the hair moves naturally.",
    src: "/atelier-elan/craftsmanship/refine.png",
    alt: "The stylist assesses the final movement and shape of the hair.",
    imageClassName: "object-[50%_38%]",
    figureClassName: "aspect-[0.9/1]",
  },
];

export function Craftsmanship() {
  return (
    <section
      id="artistry"
      aria-labelledby="craftsmanship-title"
      className="relative overflow-hidden bg-[var(--background-primary)] px-5 py-16 text-[var(--text-primary)] sm:px-8 md:px-10 md:py-20 lg:min-h-dvh lg:px-[clamp(3rem,3.2vw,4rem)] lg:py-[clamp(3rem,5vh,4.25rem)]"
    >
      <div className="mx-auto flex min-h-full max-w-[112rem] flex-col">
        <p className="font-mono text-xs font-medium uppercase leading-none tracking-[0.13em] md:text-sm">
          03&nbsp;&nbsp;-&nbsp;&nbsp;Craft in Practice
        </p>

        <div className="mt-11 grid gap-8 lg:mt-[clamp(1rem,2vh,2rem)] lg:grid-cols-12 lg:items-end lg:gap-6">
          <h2
            id="craftsmanship-title"
            className="lg:col-span-11 lg:flex lg:items-end"
          >
            <span className="block w-max origin-left scale-x-[0.58] whitespace-nowrap font-sans text-[clamp(4.75rem,20vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.055em] text-[var(--color-ink-950)] sm:scale-x-[0.7] lg:scale-x-[0.59] lg:text-[clamp(8rem,9.5vw,10rem)]">
              Precision,
            </span>
            <span className="-mt-1 block w-max origin-left scale-x-[0.85] whitespace-nowrap font-serif text-[clamp(4rem,17vw,7rem)] font-normal italic leading-[0.86] tracking-[-0.04em] text-[var(--color-ink-950)] sm:scale-x-[0.95] lg:-ml-[20%] lg:mt-0 lg:scale-x-[1.12] lg:text-[clamp(7rem,8.8vw,9.5rem)]">
              In Motion.
            </span>
          </h2>

          <p className="max-w-[20ch] font-mono text-sm leading-[1.65] text-[var(--color-ink-950)] lg:relative lg:-left-10 lg:col-span-1 lg:pb-1 lg:text-[clamp(0.7rem,0.8vw,0.85rem)]">
            Technique is personal when every decision belongs to the individual.
          </p>
        </div>

        <ol className="mt-20 grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2 lg:mt-[clamp(6rem,10vh,8.5rem)] xl:grid-cols-[1.42fr_0.9fr_2.72fr_1.02fr] xl:items-end xl:gap-x-[clamp(2rem,3vw,3.5rem)]">
          {craftSteps.map((step) => (
            <li key={step.number} className="group min-w-0">
              <figure
                className={`relative overflow-visible bg-[var(--color-espresso-800)] ${step.figureClassName}`}
              >
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1280px) 34vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${step.imageClassName}`}
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-[0.62em] z-10 font-serif text-[clamp(4.75rem,12vw,7.25rem)] leading-none tracking-[-0.06em] text-[var(--color-ink-950)] sm:-left-5 xl:text-[clamp(5.5rem,6.5vw,7.5rem)]"
                >
                  {step.number}
                </span>
              </figure>

              <div className="pt-3 pl-1 sm:pl-0">
                <div
                  aria-hidden="true"
                  className="mb-4 ml-1 h-6 w-px bg-[var(--border-strong)]"
                />
                <h3 className="font-mono text-sm font-medium uppercase leading-none tracking-[0.1em] text-[var(--color-ink-950)] md:text-base">
                  {step.title}&nbsp;&nbsp;-
                </h3>
                <p className="mt-2 max-w-[28ch] font-mono text-xs leading-relaxed text-[var(--color-charcoal-900)] md:text-sm xl:text-[clamp(0.68rem,0.82vw,0.82rem)]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 lg:mt-auto lg:pt-8">
          <div aria-hidden="true" className="h-[2px] w-full bg-[var(--accent-primary)]" />
          <p className="mt-7 font-mono text-xs uppercase leading-none tracking-[0.14em] text-[var(--color-charcoal-900)] md:text-sm">
            Observe / Section / Shape / Refine
          </p>
        </div>
      </div>
    </section>
  );
}
