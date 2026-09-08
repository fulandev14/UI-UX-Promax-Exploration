import Image from "next/image";

type GalleryFrame = {
  number: string;
  src: string;
  alt: string;
  frameClassName: string;
  sizes: string;
};

const galleryFrames: GalleryFrame[] = [
  {
    number: "01",
    src: "/atelier-elan/gallery-section/model-01-hd.png",
    alt: "A woman in cream fabric with warm light falling across her hair.",
    frameClassName:
      "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]",
    sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw",
  },
  {
    number: "02",
    src: "/atelier-elan/gallery-section/model-02-hd.png",
    alt: "A quiet profile portrait showing soft dark hair and natural texture.",
    frameClassName:
      "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]",
    sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw",
  },
  {
    number: "03",
    src: "/atelier-elan/gallery-section/model-03-hd.png",
    alt: "A close editorial portrait with short textured hair and direct gaze.",
    frameClassName:
      "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]",
    sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw",
  },
  {
    number: "04",
    src: "/atelier-elan/gallery-section/model-04-hd.png",
    alt: "A blonde client portrait framed by loose textured hair.",
    frameClassName:
      "h-[24rem] w-[16rem] md:h-[29rem] md:w-[19.33rem] lg:h-[31rem] lg:w-[20.67rem] xl:h-[35rem] xl:w-[23.33rem]",
    sizes: "(min-width: 1280px) 23.33rem, (min-width: 1024px) 20.67rem, (min-width: 768px) 19.33rem, 100vw",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative isolate overflow-hidden bg-[var(--background-primary)] text-[var(--text-primary)] lg:min-h-dvh"
    >
      <div className="grid lg:min-h-dvh lg:grid-cols-[26.5rem_minmax(0,1fr)] xl:grid-cols-[33rem_minmax(0,1fr)]">
        <div className="relative z-10 flex min-h-[42rem] flex-col bg-[var(--background-primary)] px-5 py-14 sm:px-8 md:min-h-[48rem] md:px-10 md:py-16 lg:min-h-dvh lg:px-[clamp(2.75rem,3.2vw,4rem)] lg:py-[clamp(3rem,5vh,4.5rem)]">
          <p className="font-mono text-xs font-medium uppercase leading-none tracking-[0.13em] text-[var(--color-ink-950)] md:text-sm">
            06&nbsp;&nbsp;-&nbsp;&nbsp;Atmosphere Studies
          </p>

          <div className="mt-auto pb-12 md:pb-16 lg:pb-[18vh]">
            <h2
              id="gallery-title"
              className="max-w-[12ch] font-sans text-[4rem] font-black uppercase leading-[0.82] tracking-normal text-[var(--color-ink-950)] sm:text-[5.25rem] md:text-[6.75rem] lg:text-[6.5rem] xl:text-[7.5rem]"
            >
              <span className="block w-max origin-left scale-x-[0.58] whitespace-nowrap sm:scale-x-[0.66] lg:scale-x-[0.62]">
                The Art
              </span>
              <span className="mt-2 block w-max origin-left scale-x-[0.82] whitespace-nowrap font-serif text-[3.65rem] font-normal italic leading-[0.9] tracking-normal sm:text-[4.9rem] md:text-[6.2rem] lg:text-[5.6rem] xl:text-[6.55rem]">
                Of Seeing.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-10 h-[2px] w-[min(72%,21rem)] bg-[var(--accent-primary)] md:mt-12"
            />
            <p className="mt-7 font-mono text-xs font-medium uppercase leading-[1.8] tracking-[0.13em] text-[var(--color-ink-950)] md:text-sm">
              Light / Touch / Reflection / Space
            </p>
          </div>

          <p className="max-w-[36ch] font-mono text-xs leading-relaxed text-[var(--color-ink-950)] md:text-sm lg:max-w-[34ch]">
            A sequence of quiet observations.
          </p>
        </div>

        <div className="relative min-w-0 bg-[var(--background-inverse)] text-[var(--text-inverse)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.03),transparent_32%,rgb(0_0_0_/_0.16)_100%)]"
          />

          <div
            data-gallery-track
            className="relative hidden min-h-dvh snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-8 [scrollbar-width:none] lg:block [&::-webkit-scrollbar]:hidden"
            aria-label="Atmosphere gallery"
          >
            <ol className="relative z-10 flex w-max items-start gap-4 px-6 pt-[22vh] xl:gap-7 xl:px-8 2xl:gap-8">
              {galleryFrames.map((frame) => (
                <li
                  key={frame.number}
                  data-gallery-panel
                  className="group shrink-0 snap-start"
                >
                  <p className="mb-6 flex items-center gap-4 font-mono text-xs font-medium uppercase leading-none tracking-[0.12em] text-[rgb(251_248_241_/_0.86)]">
                    {frame.number}
                    {frame.number === "01" ? (
                      <span
                        aria-hidden="true"
                        className="h-px w-6 bg-[rgb(251_248_241_/_0.72)]"
                      />
                    ) : null}
                  </p>
                  <figure
                    className={`relative overflow-hidden bg-[var(--color-espresso-800)] ${frame.frameClassName}`}
                  >
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      sizes={frame.sizes}
                      className="object-contain transition-[filter] duration-500 ease-out group-hover:brightness-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgb(14_14_13_/_0.12)_100%)]"
                    />
                  </figure>
                </li>
              ))}

              <li
                data-gallery-panel
                className="mt-16 shrink-0 snap-start"
                aria-label="05 Material light study"
              >
                <p className="mb-6 font-mono text-xs font-medium uppercase leading-none tracking-[0.12em] text-[rgb(251_248_241_/_0.86)]">
                  05
                </p>
                <figure className="relative h-[22rem] w-[10.5rem] overflow-hidden bg-[var(--color-stone-300)] xl:h-[25rem] xl:w-[12rem]">
                  <Image
                    src="/atelier-elan/gallery-section/hair-showing-03.png"
                    alt="Close detail of hair texture catching a narrow line of light."
                    fill
                    sizes="(min-width: 1280px) 12rem, 10.5rem"
                    className="scale-[1.16] object-cover object-[50%_50%] opacity-80"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(90deg,rgb(14_14_13_/_0.18),transparent_48%,rgb(251_248_241_/_0.22))]"
                  />
                </figure>
              </li>

              <li
                data-gallery-panel
                className="mt-6 w-[12rem] shrink-0 snap-start opacity-45 xl:w-[14rem]"
                aria-label="Next gallery frame"
              >
                <div className="mb-6 flex items-start gap-4 font-mono text-xs font-medium uppercase leading-[1.45] tracking-[0.12em] text-[rgb(251_248_241_/_0.86)]">
                  <span>06</span>
                  <span aria-hidden="true" className="mt-[0.45em] h-px w-6 bg-[rgb(251_248_241_/_0.72)]" />
                  <span>Next</span>
                </div>
                <figure className="relative h-[24rem] w-full overflow-hidden bg-[var(--color-espresso-800)] xl:h-[27rem]">
                  <Image
                    src="/atelier-elan/experience-section/experience-background-large.png"
                    alt="A quiet private atelier room with mirror and warm architectural light."
                    fill
                    sizes="(min-width: 1280px) 14rem, 12rem"
                    className="object-cover object-[70%_center]"
                  />
                </figure>
              </li>
            </ol>

          </div>

          <ol className="relative z-10 grid gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 md:px-10 lg:hidden">
            {galleryFrames.map((frame) => (
              <li key={frame.number} className="min-w-0">
                <p className="mb-4 flex items-center gap-4 font-mono text-xs font-medium uppercase leading-none tracking-[0.12em] text-[rgb(251_248_241_/_0.86)]">
                  {frame.number}
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-[rgb(251_248_241_/_0.72)]"
                  />
                </p>
                <figure className="relative aspect-[2/3] overflow-hidden bg-[var(--color-espresso-800)]">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
