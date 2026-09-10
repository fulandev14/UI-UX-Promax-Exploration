"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type TestimonialVisual = {
  src: string;
  alt: string;
  imageClassName: string;
};

type TestimonialVoice = {
  number: string;
  titleLines: [string, string];
  quote: string;
  client: string;
  service: string;
  visual: TestimonialVisual;
};

const claraVisual: TestimonialVisual = {
  src: "/atelier-elan/testimonial-section/testimonial-clara-over-shoulder.png",
  alt: "Clara looks back over her shoulder after her salon consultation.",
  imageClassName: "object-[48%_42%]",
};

const maraVisual: TestimonialVisual = {
  src: "/atelier-elan/testimonial-section/testimonial-mara-hair-detail.png",
  alt: "Mara studies the movement at the ends of her finished hair.",
  imageClassName: "object-[45%_42%]",
};

const jessVisual: TestimonialVisual = {
  src: "/atelier-elan/testimonial-section/testimonial-jess-relaxed.png",
  alt: "Jess relaxes with one hand beneath her newly shaped hair.",
  imageClassName: "object-[55%_42%]",
};

const noaVisual: TestimonialVisual = {
  src: "/atelier-elan/testimonial-section/testimonial-noa-hair-over-shoulder.png",
  alt: "Noa gathers her layered hair over one shoulder in the atelier.",
  imageClassName: "object-[50%_42%]",
};

const testimonialVoices: TestimonialVoice[] = [
  {
    number: "07",
    titleLines: ["Listened To.", "Before A Single Cut."],
    quote:
      "Nothing felt prescribed. The consultation found the shape I had been trying to describe for years.",
    client: "Clara M. -- Atelier Client",
    service: "Consultation / Signature Cut",
    visual: claraVisual,
  },
  {
    number: "08",
    titleLines: ["The Difference", "Was Attention."],
    quote:
      "I recognised myself immediately--only lighter, more considered, and completely at ease.",
    client: "Mara S. -- Colour Client",
    service: "Dimensional Colour / First Visit",
    visual: maraVisual,
  },
  {
    number: "09",
    titleLines: ["It Finally", "Feels Like Me."],
    quote:
      "Soft movement, better texture, and a shape that grows out beautifully.",
    client: "Jess L. -- Atelier Client",
    service: "Lived-In Blend / Signature Cut",
    visual: jessVisual,
  },
  {
    number: "10",
    titleLines: ["A Shape", "I Could Live In."],
    quote:
      "The result felt refined without feeling unfamiliar. I left with ease I could actually keep.",
    client: "Noa R. -- Returning Client",
    service: "Refinement / Seasonal Shape",
    visual: noaVisual,
  },
];

function ResponsiveImage({
  visual,
  preload = false,
}: {
  visual: TestimonialVisual;
  preload?: boolean;
}) {
  return (
    <Image
      src={visual.src}
      alt={visual.alt}
      fill
      preload={preload}
      sizes="(min-width: 1536px) 31vw, (min-width: 1280px) 30vw, (min-width: 1024px) 29vw, 100vw"
      className={`object-cover ${visual.imageClassName}`}
    />
  );
}

export function Testimonial() {
  const testimonialRef = useRef<HTMLElement | null>(null);
  const hasRenderedVoiceRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVoice = testimonialVoices[activeIndex];
  const nextVoice =
    testimonialVoices[(activeIndex + 1) % testimonialVoices.length];
  const progress = ((activeIndex + 1) / testimonialVoices.length) * 100;

  useGSAP(
    () => {
      const testimonial = testimonialRef.current;

      if (!testimonial) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const reduceMotion = conditions?.reduceMotion ?? false;
          const select = gsap.utils.selector(testimonialRef);
          const activeImage = select('[data-testimonial-panel="active-image"]');
          const activeCopy = select('[data-testimonial-panel="active-copy"]');
          const preview = select('[data-testimonial-panel="preview"]');
          const controls = select("[data-testimonial-controls]");
          const progressFill = select("[data-testimonial-progress-fill]");

          if (reduceMotion) {
            if (progressFill.length) {
              gsap.set(progressFill, {
                scaleX: progress / 100,
                transformOrigin: "left center",
              });
            }

            return;
          }

          const entrance = gsap.timeline({
            defaults: {
              ease: "power2.out",
            },
            scrollTrigger: {
              trigger: testimonial,
              start: "top 80%",
              once: true,
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          });

          if (activeImage.length) {
            entrance.from(
              activeImage,
              { autoAlpha: 0, y: 18, duration: 0.75 },
              0,
            );
          }

          if (activeCopy.length) {
            entrance.from(
              activeCopy,
              { autoAlpha: 0, y: 16, duration: 0.6 },
              0.12,
            );
          }

          if (preview.length) {
            entrance.from(
              preview,
              { autoAlpha: 0, y: 12, duration: 0.55 },
              0.24,
            );
          }

          if (controls.length) {
            entrance.from(
              controls,
              { autoAlpha: 0, y: 10, duration: 0.45 },
              0.3,
            );
          }

          if (progressFill.length) {
            gsap.set(progressFill, {
              scaleX: progress / 100,
              transformOrigin: "left center",
            });
          }
        },
        testimonialRef,
      );

      return () => media.revert();
    },
    { scope: testimonialRef },
  );

  useGSAP(
    () => {
      if (!hasRenderedVoiceRef.current) {
        hasRenderedVoiceRef.current = true;
        return;
      }

      const testimonial = testimonialRef.current;

      if (!testimonial) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const reduceMotion = conditions?.reduceMotion ?? false;
          const select = gsap.utils.selector(testimonialRef);
          const activeImage = select('[data-testimonial-panel="active-image"]');
          const activeCopy = select('[data-testimonial-panel="active-copy"]');
          const preview = select('[data-testimonial-panel="preview"]');
          const progressFill = select("[data-testimonial-progress-fill]");

          if (!activeImage.length || !activeCopy.length || !preview.length) {
            return;
          }

          const nextProgress = progress / 100;

          if (reduceMotion) {
            gsap.set(
              [...activeImage, ...activeCopy, ...preview],
              { autoAlpha: 1, y: 0 },
            );
            if (progressFill.length) {
              gsap.set(progressFill, {
                scaleX: nextProgress,
                transformOrigin: "left center",
              });
            }

            return;
          }

          const transition = gsap.timeline({
            defaults: {
              ease: "power2.inOut",
            },
          });

          transition.fromTo(
            activeImage,
            { autoAlpha: 0.82, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.38, ease: "power2.out" },
            0,
          );
          transition.fromTo(
            activeCopy,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.52 },
            0.04,
          );
          transition.fromTo(
            preview,
            { autoAlpha: 0.78, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.46, ease: "power2.out" },
            0.12,
          );

          if (progressFill.length) {
            transition.to(
              progressFill,
              {
                scaleX: nextProgress,
                transformOrigin: "left center",
                duration: 0.48,
              },
              0,
            );
          }
        },
        testimonialRef,
      );

      return () => media.revert();
    },
    {
      dependencies: [activeIndex],
      revertOnUpdate: true,
      scope: testimonialRef,
    },
  );

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + testimonialVoices.length) %
        testimonialVoices.length,
    );
  };

  const showNext = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % testimonialVoices.length,
    );
  };

  return (
    <section
      ref={testimonialRef}
      id="testimonials"
      aria-labelledby="testimonial-title"
      data-testimonial-section
      data-testimonial-current={activeVoice.number}
      className="relative isolate overflow-hidden bg-[var(--background-primary)] text-[var(--text-primary)]"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="/atelier-elan/testimonial-section/testimonial-d-ivory-texture.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 0px, 100vw"
          className="object-cover opacity-95 lg:hidden"
        />
        <Image
          src="/atelier-elan/testimonial-section/testimonial-d-ivory-texture-4k.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover opacity-95 lg:block"
        />
      </div>

      <div
        data-testimonial-track
        className="relative z-10 grid min-h-[58rem] grid-cols-1 px-5 py-12 sm:min-h-[64rem] sm:px-8 md:px-10 md:py-16 lg:min-h-dvh lg:grid-cols-[5.25rem_28vw_minmax(0,1fr)_28vw] lg:px-0 lg:py-0 xl:grid-cols-[6rem_29vw_minmax(0,1fr)_28.5vw]"
      >
        <div className="hidden items-center justify-center lg:flex">
          <button
            type="button"
            aria-label="Show previous client voice"
            data-testimonial-prev
            onClick={showPrevious}
            className="group flex flex-col items-center gap-5 font-mono text-xs font-medium uppercase leading-none tracking-normal text-[var(--color-ink-950)] transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--interactive-focus)]"
          >
            <ArrowLeft aria-hidden="true" className="size-9 stroke-[1.4]" />
            <span>Prev</span>
          </button>
        </div>

        <figure
          data-testimonial-panel="active-image"
          className="relative order-1 aspect-[0.75/1] overflow-hidden bg-[var(--color-espresso-800)] sm:aspect-[0.86/1] md:max-h-[44rem] lg:order-none lg:my-[7.4vh] lg:aspect-auto lg:h-[85.2vh] lg:max-h-none"
        >
          <ResponsiveImage visual={activeVoice.visual} preload />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(14_14_13_/_0.16)_100%)]"
          />
        </figure>

        <div
          data-testimonial-panel="active-copy"
          className="order-2 flex min-w-0 flex-col px-0 pb-8 pt-9 md:pt-11 lg:order-none lg:px-[clamp(2.4rem,3.55vw,4rem)] lg:pb-[7vh] lg:pt-[15vh]"
        >
          <p className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[var(--color-ink-950)] md:text-sm">
            {activeVoice.number}&nbsp;&nbsp;--&nbsp;&nbsp;Client Voices
          </p>

          <h2
            id="testimonial-title"
            aria-live="polite"
            className="mt-7 max-w-[12ch] font-sans text-[2.35rem] font-black uppercase leading-[0.86] tracking-normal text-[var(--color-ink-950)] sm:text-[4.55rem] md:max-w-[14ch] md:text-[3.25rem] lg:mt-8 lg:max-w-none lg:text-[1.8rem] xl:text-[2.45rem] 2xl:text-[2.95rem]"
          >
            <span className="block">{activeVoice.titleLines[0]}</span>
            <span className="block">{activeVoice.titleLines[1]}</span>
          </h2>

          <figure className="mt-7 md:mt-9 lg:mt-7">
            <blockquote
              key={activeVoice.quote}
              className="max-w-[18ch] font-serif text-[1.25rem] italic leading-[1.05] tracking-normal text-[var(--color-ink-950)] sm:text-[1.95rem] md:max-w-[19ch] md:text-[2.45rem] lg:max-w-[20ch] lg:text-[1.25rem] xl:text-[1.72rem] 2xl:text-[3.05rem]"
            >
              <span aria-hidden="true">&ldquo;</span>
              {activeVoice.quote}
              <span aria-hidden="true">&rdquo;</span>
            </blockquote>

            <div
              aria-hidden="true"
              className="mt-6 h-[3px] w-[min(74%,20rem)] bg-[var(--accent-primary)]"
            />

            <figcaption className="mt-6 font-mono text-xs font-medium uppercase leading-[1.7] tracking-normal text-[var(--color-ink-950)] md:text-sm lg:mt-7 lg:text-xs xl:text-sm">
              <span className="block">{activeVoice.client}</span>
              <span className="mt-1 block text-[0.7rem] md:text-xs">
                {activeVoice.service}
              </span>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center gap-5 lg:mt-auto">
            <span className="font-mono text-base font-medium uppercase leading-none tracking-normal text-[var(--color-ink-950)] md:text-lg">
              {activeVoice.number} / 10
            </span>
            <div
              aria-hidden="true"
              className="relative h-[2px] flex-1 bg-[var(--color-ink-950)]"
            >
              <span
                data-testimonial-progress-fill
                className="absolute left-0 top-0 h-full origin-left bg-[var(--accent-primary)]"
                style={{ width: "100%" }}
              />
            </div>
            <button
              type="button"
              aria-label="Show next client voice"
              data-testimonial-next
              onClick={showNext}
              className="group hidden items-center gap-4 font-mono text-xs font-medium uppercase leading-none tracking-normal text-[var(--color-ink-950)] transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--interactive-focus)] sm:flex"
            >
              <span>Next</span>
              <ArrowRight aria-hidden="true" className="size-9 stroke-[1.4]" />
            </button>
          </div>
        </div>

        <aside
          id="testimonial-next-voice"
          data-testimonial-panel="preview"
          aria-label={`Next testimonial: ${nextVoice.client}`}
          className="relative order-3 -mx-5 mt-4 min-h-[34rem] overflow-hidden bg-[var(--background-inverse)] px-5 py-10 text-[var(--text-inverse)] sm:-mx-8 sm:px-8 md:-mx-10 md:min-h-[38rem] md:px-10 lg:order-none lg:mx-0 lg:mt-0 lg:min-h-dvh lg:px-[clamp(1.8rem,2.7vw,3rem)] lg:py-[14vh]"
        >
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <ResponsiveImage visual={nextVoice.visual} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_7_7_/_0.94)_0%,rgb(7_7_7_/_0.77)_52%,rgb(7_7_7_/_0.3)_100%)] lg:bg-[linear-gradient(90deg,rgb(7_7_7_/_0.96)_0%,rgb(7_7_7_/_0.78)_54%,rgb(7_7_7_/_0.22)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_7_7_/_0.28)_0%,transparent_42%,rgb(7_7_7_/_0.58)_100%)]" />
          </div>

          <div className="relative z-10 flex min-h-[27rem] flex-col md:min-h-[31rem] lg:min-h-[72vh]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-9 font-serif text-[8rem] leading-none tracking-normal text-[rgb(251_248_241_/_0.15)] sm:text-[10rem] lg:-left-7 lg:-top-10 lg:text-[11rem] xl:text-[13rem]"
            >
              {nextVoice.number}
            </span>

            <div className="relative mt-24 md:mt-28 lg:mt-20 xl:mt-24">
              <p className="flex items-center gap-4 font-mono text-[0.7rem] font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.9)] md:text-xs">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-9 bg-[var(--accent-primary)]"
                />
                {nextVoice.number}&nbsp;&nbsp;--&nbsp;&nbsp;Client Voices
              </p>

              <h3 className="mt-7 max-w-[9ch] font-sans text-[2.65rem] font-black uppercase leading-[0.86] tracking-normal text-[var(--text-inverse)] sm:text-[3.3rem] lg:text-[2.2rem] xl:text-[2.75rem] 2xl:text-[3.25rem]">
                <span className="block">{nextVoice.titleLines[0]}</span>
                <span className="block font-serif font-normal italic normal-case">
                  {nextVoice.titleLines[1]}
                </span>
              </h3>

              <div
                aria-hidden="true"
                className="mt-6 h-px w-full max-w-[18rem] bg-[rgb(251_248_241_/_0.28)]"
              />

              <blockquote className="mt-6 max-w-[18ch] font-serif text-[1.35rem] italic leading-[1.12] tracking-normal text-[rgb(251_248_241_/_0.95)] sm:text-[1.7rem] lg:text-[1.12rem] xl:text-[1.38rem]">
                <span aria-hidden="true">&ldquo;</span>
                {nextVoice.quote}
                <span aria-hidden="true">&rdquo;</span>
              </blockquote>

              <p className="mt-6 font-mono text-[0.68rem] font-medium uppercase leading-[1.65] tracking-normal text-[rgb(251_248_241_/_0.88)] md:text-xs">
                <span className="block">{nextVoice.client}</span>
                <span className="mt-1 block">{nextVoice.service}</span>
              </p>
            </div>

            <button
              type="button"
              aria-label="Advance to next testimonial"
              onClick={showNext}
              className="mt-auto flex w-max items-center gap-4 pt-8 font-mono text-xs font-medium uppercase leading-none tracking-normal text-[var(--text-inverse)] transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
            >
              <span>Next Voice</span>
              <span
                aria-hidden="true"
                className="h-[2px] w-9 bg-[var(--accent-primary)]"
              />
              <ArrowRight
                aria-hidden="true"
                className="size-7 stroke-[1.4] text-[var(--accent-primary)]"
              />
            </button>
          </div>
        </aside>

        <div
          data-testimonial-controls
          className="order-4 mt-6 flex items-center justify-between gap-4 lg:hidden"
        >
          <button
            type="button"
            aria-label="Show previous client voice"
            onClick={showPrevious}
            className="inline-flex size-12 items-center justify-center border border-[rgb(14_14_13_/_0.34)] text-[var(--color-ink-950)] transition-colors hover:bg-[var(--color-ink-950)] hover:text-[var(--text-inverse)] focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--interactive-focus)]"
          >
            <ArrowLeft aria-hidden="true" className="size-6 stroke-[1.5]" />
          </button>
          <p className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[var(--color-ink-950)]">
            Client Voices
          </p>
          <button
            type="button"
            aria-label="Show next client voice"
            onClick={showNext}
            className="inline-flex size-12 items-center justify-center bg-[var(--color-ink-950)] text-[var(--text-inverse)] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--interactive-focus)]"
          >
            <ArrowRight aria-hidden="true" className="size-6 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
