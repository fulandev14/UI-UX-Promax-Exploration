"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Booking() {
  const bookingRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const booking = bookingRef.current;

      if (!booking) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 64rem)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const {
            desktop = false,
            reduceMotion = false,
          } = conditions ?? {};
          const select = gsap.utils.selector(bookingRef);
          const portrait = select("[data-booking-portrait]");
          const numeral = select("[data-booking-numeral]");
          const chapter = select("[data-booking-chapter]");
          const headlineLines = select("[data-booking-headline-line]");
          const promise = select("[data-booking-promise]");
          const cta = select("[data-booking-cta]");
          const signature = select("[data-booking-signature]");

          if (reduceMotion) {
            return;
          }

          const entrance = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: booking,
              start: "top 78%",
              once: true,
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
            onComplete: () => {
              if (portrait.length) {
                gsap.set(portrait, { willChange: "auto" });
              }
            },
          });

          if (portrait.length) {
            gsap.set(portrait, { willChange: "clip-path, transform" });
            entrance.from(
              portrait,
              {
                autoAlpha: 0,
                y: desktop ? 0 : 18,
                clipPath: "inset(0 0 100% 0)",
                duration: 0.85,
              },
              0,
            );
          }

          if (numeral.length) {
            entrance.from(
              numeral,
              { autoAlpha: 0, y: 18, duration: 0.7 },
              0.08,
            );
          }

          if (chapter.length) {
            entrance.from(
              chapter,
              { autoAlpha: 0, y: 16, duration: 0.55 },
              0.12,
            );
          }

          if (headlineLines.length) {
            entrance.from(
              headlineLines,
              {
                autoAlpha: 0,
                y: desktop ? 18 : 14,
                duration: 0.65,
                stagger: desktop ? 0.05 : 0.04,
              },
              0.2,
            );
          }

          if (promise.length) {
            entrance.from(
              promise,
              { autoAlpha: 0, y: 14, duration: 0.55 },
              0.38,
            );
          }

          if (cta.length) {
            entrance.from(
              cta,
              { autoAlpha: 0, y: 14, duration: 0.6 },
              0.5,
            );
          }

          if (signature.length) {
            entrance.from(
              signature,
              { autoAlpha: 0, y: 10, duration: 0.5 },
              0.66,
            );
          }
        },
        bookingRef,
      );

      return () => media.revert();
    },
    { scope: bookingRef },
  );

  return (
    <section
      ref={bookingRef}
      id="booking"
      aria-labelledby="booking-title"
      className="relative isolate overflow-hidden bg-[var(--background-inverse)] text-[var(--text-inverse)]"
    >
      <div className="grid min-h-[50rem] grid-cols-1 lg:min-h-dvh lg:grid-cols-[37.5vw_minmax(0,1fr)]">
        <figure
          data-booking-portrait
          className="relative min-h-[29rem] overflow-hidden bg-[var(--color-espresso-800)] sm:min-h-[38rem] md:min-h-[44rem] lg:min-h-dvh"
        >
          <Image
            src="/atelier-elan/booking-section/booking-client-portrait-mobile-4k.jpg"
            alt="A blonde client sits calmly while a stylist studies the shape and movement of her hair."
            fill
            sizes="(min-width: 1024px) 0px, 100vw"
            className="object-cover object-[50%_34%] lg:hidden"
          />
          <Image
            src="/atelier-elan/booking-section/booking-client-portrait-large-4k.jpg"
            alt="A blonde client sits calmly while a stylist studies the shape and movement of her hair."
            fill
            sizes="(min-width: 1024px) 38vw, 0px"
            className="hidden object-cover object-[50%_38%] lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgb(7_7_7_/_0.38)_100%)] lg:bg-[linear-gradient(90deg,transparent_66%,rgb(7_7_7_/_0.26)_100%)]"
          />
        </figure>

        <div className="relative flex min-h-[40rem] flex-col overflow-hidden px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:min-h-dvh lg:px-[clamp(4rem,6.5vw,8rem)] lg:py-[clamp(3.75rem,7vh,6rem)]">
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Image
              src="/atelier-elan/booking-section/booking-dark-panel-mobile-4k.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 0px, 100vw"
              className="object-cover opacity-95 lg:hidden"
            />
            <Image
              src="/atelier-elan/booking-section/booking-dark-panel-large-4k.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 63vw, 0px"
              className="hidden object-cover opacity-95 lg:block"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_7_7_/_0.18)_0%,transparent_34%,rgb(7_7_7_/_0.32)_100%)]" />
          </div>

          <span
            data-booking-numeral
            aria-hidden="true"
            className="pointer-events-none absolute -right-7 top-4 z-0 font-serif text-[10rem] leading-none tracking-normal text-[rgb(251_248_241_/_0.09)] sm:text-[15rem] md:text-[18rem] lg:-right-12 lg:top-5 lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem]"
          >
            09
          </span>

          <div className="relative z-10 flex min-h-full flex-col">
            <p
              data-booking-chapter
              className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.9)] md:text-sm"
            >
              09&nbsp;&nbsp;-&nbsp;&nbsp;The Next Chapter
            </p>

            <div className="mt-18 max-w-[44rem] sm:mt-20 md:mt-24 lg:mt-[15vh] lg:max-w-[58rem]">
              <h2
                id="booking-title"
                className="font-sans text-[3.35rem] font-black uppercase leading-[0.82] tracking-normal text-[var(--text-inverse)] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[7.1rem] 2xl:text-[9.5rem]"
              >
                <span data-booking-headline-line className="block">
                  When You&apos;re
                </span>
                <span
                  data-booking-headline-line
                  className="mt-1 block font-serif text-[4.45rem] font-normal italic leading-[0.78] normal-case sm:text-[7.5rem] md:text-[9.4rem] lg:text-[8.3rem] xl:text-[6.8rem] 2xl:text-[8.8rem]"
                >
                  Ready.
                </span>
              </h2>

              <p
                data-booking-promise
                className="mt-6 font-serif text-[2.15rem] font-normal leading-none tracking-normal text-[rgb(251_248_241_/_0.95)] sm:text-[2.7rem] md:text-[3.2rem] lg:mt-7 lg:text-[3.05rem] xl:text-[3.55rem]"
              >
                We&apos;ll begin by listening.
              </p>

              <a
                data-booking-cta
                href="mailto:hello@atelierelan.studio?subject=Appointment%20Request"
                className="group mt-10 inline-flex w-full max-w-[29rem] flex-col gap-3 text-[var(--text-inverse)] focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)] sm:mt-12"
              >
                <span className="flex items-center justify-between gap-5 border-b-[3px] border-[var(--accent-primary)] pb-2 font-mono text-base font-medium uppercase leading-none tracking-normal sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
                  Book Your Appointment
                  <ArrowRight
                    aria-hidden="true"
                    className="size-8 shrink-0 stroke-[1.35] text-[var(--accent-primary)] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </span>
                <span className="font-mono text-[0.7rem] font-medium uppercase leading-normal tracking-normal text-[rgb(251_248_241_/_0.82)] md:text-xs">
                  45 Minute Consultation / Personally Confirmed
                </span>
              </a>
            </div>

            <p
              data-booking-signature
              className="relative z-10 mt-14 font-mono text-xl font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.9)] sm:text-2xl lg:mt-auto"
            >
              Atelier Elan
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[44%] z-10 hidden h-px w-[10vw] -translate-x-1/2 bg-[rgb(251_248_241_/_0.82)] lg:block"
          />
        </div>
      </div>
    </section>
  );
}
