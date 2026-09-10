"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navItems = [
  { label: "About", href: "#about"},
  { label: "Services", href: "#services"},
  { label: "Craft", href: "#artistry"},
  { label: "Experience", href: "#studio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#booking" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 64rem)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { desktop = false, reduceMotion = false } = conditions ?? {};

          if (reduceMotion) {
            return;
          }

          // Debug locally when tuning responsive media conditions.
          // console.log("GSAP conditions:", { desktop, reduceMotion });

          const select = gsap.utils.selector(heroRef);
          const nav = select("[data-hero-nav]");
          const aside = select("[data-hero-aside]");
          const issue = select("[data-hero-issue]");
          const titleLines = select("[data-hero-title-line]");
          const description = select("[data-hero-description]");
          const actions = select("[data-hero-actions]");
          const image = select("[data-hero-image]");
          const overlays = select("[data-hero-overlay]");
          const craftInset = select(".hero-craft-inset");
          const travel = desktop ? 24 : 16;
          const titleStagger = desktop ? 0.1 : 0.07;

          gsap.set(image, { willChange: "transform, opacity" });

          const timeline = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
            onComplete: () => {
              gsap.set(image, { clearProps: "willChange" });
            },
          });

          timeline
            .addLabel("arrival");

          if (nav.length) {
            timeline.from(nav, { autoAlpha: 0, y: -8, duration: 0.6 }, "arrival");
          }

          if (aside.length) {
            timeline.from(aside, { autoAlpha: 0, x: -10, duration: 0.65 }, "arrival+=0.06");
          }

          if (issue.length) {
            timeline.from(issue, { autoAlpha: 0, y: travel, duration: 0.7 }, "arrival+=0.18");
          }

          if (titleLines.length) {
            timeline.from(
              titleLines,
              {
                autoAlpha: 0,
                y: travel,
                duration: 0.82,
                stagger: titleStagger,
              },
              "arrival+=0.25",
            );
          }

          if (description.length) {
            timeline.from(
              description,
              { autoAlpha: 0, y: travel * 0.75, duration: 0.72 },
              "arrival+=0.72",
            );
          }

          if (actions.length) {
            timeline.from(actions, { autoAlpha: 0, y: 12, duration: 0.72 }, "arrival+=0.86");
          }

          if (image.length) {
            timeline.from(
              image,
              {
                autoAlpha: 0,
                x: desktop ? 18 : 0,
                scale: desktop ? 1.025 : 1.015,
                duration: 1.35,
                ease: "power2.out",
              },
              "arrival+=0.18",
            );
          }

          if (overlays.length) {
            timeline.from(
              overlays,
              { autoAlpha: 0, duration: 1.05, stagger: 0.08 },
              "arrival+=0.24",
            );
          }

          if (craftInset.length) {
            timeline.from(
              craftInset,
              {
                autoAlpha: 0,
                y: 12,
                scale: 0.985,
                duration: 0.75,
                ease: "power2.out",
              },
              "arrival+=0.9",
            );
          }
        },
        heroRef,
      );

      return () => media.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      data-section-id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-dvh overflow-hidden bg-[var(--background-primary)] text-[var(--text-inverse)]"
    >
      <header
        data-hero-nav
        className="relative z-30 flex h-16 items-center border-b border-[var(--border-subtle)] bg-[var(--nav-bg)] px-5 text-[var(--text-primary)] backdrop-blur-sm md:h-20 md:px-10 lg:px-20"
      >
        <a
          href="#hero"
          className="font-sans text-lg font-semibold uppercase tracking-[0.12em] outline-none focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--interactive-focus)] focus-visible:ring-offset-[var(--focus-ring-offset)] focus-visible:ring-offset-[var(--background-primary)] md:text-2xl"
        >
          ATELIER ELAN
        </a>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="ml-auto inline-flex size-11 items-center justify-center text-[var(--text-primary)] outline-none transition-opacity hover:opacity-60 focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--interactive-focus)] focus-visible:ring-offset-[var(--focus-ring-offset)] focus-visible:ring-offset-[var(--background-primary)] lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-6 stroke-[1.5]" />
          ) : (
            <Menu aria-hidden="true" className="size-6 stroke-[1.5]" />
          )}
        </button>
        <nav
          aria-label="Primary navigation"
          className="mx-auto hidden items-center gap-12 font-sans text-[0.8125rem] font-semibold uppercase leading-none tracking-[0.08em] lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSectionId === item.href.slice(1) ? "location" : undefined}
              className={`outline-none transition-colors duration-200 hover:text-[var(--text-muted)] focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--interactive-focus)] focus-visible:ring-offset-[var(--focus-ring-offset)] focus-visible:ring-offset-[var(--background-primary)] ${activeSectionId === item.href.slice(1) ? "text-[var(--color-ink-950)] underline decoration-[var(--accent-primary)] decoration-2 underline-offset-8" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          className="ml-auto hidden min-h-11 items-center font-sans text-[0.8125rem] font-semibold uppercase leading-none tracking-[0.08em] outline-none transition-colors duration-200 hover:text-[var(--text-muted)] focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--interactive-focus)] focus-visible:ring-offset-[var(--focus-ring-offset)] focus-visible:ring-offset-[var(--background-primary)] sm:inline-flex"
        >
          Book appointment
        </a>
      </header>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isMenuOpen ? "block" : "hidden"} relative z-30 border-b border-[var(--border-subtle)] bg-[var(--nav-bg)] px-5 py-4 backdrop-blur-sm lg:hidden`}
      >
        <ul className="grid gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeSectionId === item.href.slice(1) ? "location" : undefined}
                onClick={closeMenu}
                className={`flex min-h-11 items-center justify-between border-b border-[var(--border-subtle)] font-mono text-xs font-medium uppercase tracking-[0.1em] outline-none transition-colors last:border-b-0 hover:text-[var(--text-muted)] focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--interactive-focus)] focus-visible:ring-offset-[var(--focus-ring-offset)] ${activeSectionId === item.href.slice(1) ? "text-[var(--color-ink-950)]" : "text-[var(--text-primary)]"}`}
              >
                <span>{item.label}</span>
                {activeSectionId === item.href.slice(1) ? (
                  <span aria-hidden="true" className="size-2 bg-[var(--accent-primary)]" />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
        <aside
          data-hero-aside
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-20 hidden w-14 border-r border-[var(--border-subtle)] bg-[var(--background-primary)] text-[var(--text-primary)] md:block lg:w-[5.375rem]"
        >
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] items-center gap-8 whitespace-nowrap font-mono text-[0.75rem] font-medium uppercase leading-none tracking-[0.14em]">
            <span>Issue 01</span>
            <span className="h-px w-20 bg-[var(--border-subtle)]" />
            <span>Full Attention</span>
          </div>
        </aside>
        
        <div className="absolute inset-y-0 left-0 right-0 bg-[var(--color-ink-950)] md:left-14 lg:left-[5.375rem]">
        <div
          data-hero-image
          className="absolute inset-y-0 right-0 w-full md:w-[66%] lg:w-[58%] xl:w-[55%]"
        >
          <Image
            src="/atelier-elan/hero-section/hero-model-landscape.png"
            alt="A client with softly finished dark hair in warm atelier light."
            fill
            preload
            unoptimized
            sizes="(min-width: 1440px) 55vw, (min-width: 1024px) 58vw, (min-width: 768px) 66vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div
          data-hero-overlay
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ink-950)_0%,rgb(14_14_13_/_0.98)_31%,rgb(14_14_13_/_0.76)_47%,rgb(14_14_13_/_0.12)_66%,transparent_82%)]"
        />
        <div
          data-hero-overlay
          className="absolute inset-0 bg-[linear-gradient(0deg,rgb(14_14_13_/_0.36)_0%,transparent_34%)]"
        />
      </div>

        <div className="relative z-10 grid min-h-[calc(100dvh-4rem)] grid-cols-4 px-5 py-10 md:ml-14 md:min-h-[calc(100dvh-5rem)] md:grid-cols-8 md:px-10 md:py-14 lg:ml-[5.375rem] lg:grid-cols-12 lg:px-14 xl:px-16">
          <div className="col-span-4 flex max-w-[46rem] flex-col justify-center pt-8 md:col-span-7 md:pt-3 lg:col-span-6 xl:col-span-5">
            <p
              data-hero-issue
              className="mb-6 font-mono text-[0.6875rem] font-medium uppercase leading-tight tracking-[0.14em] text-[var(--text-inverse)] md:mb-8 md:text-xs"
            >
              Issue 01 - Full Attention
            </p>

            <h1
              id="hero-title"
              className="max-w-[12ch] text-balance font-sans text-[4rem] font-black uppercase leading-[0.82] tracking-normal text-[var(--text-inverse)] sm:text-[5rem] md:text-[7rem] lg:text-[8.25rem] xl:text-[9.75rem]"
            >
                <span
                  data-hero-title-line
                  className="block w-max origin-left scale-x-[0.78] whitespace-nowrap"
                >
                  Beauty,
                </span>
              <span
                data-hero-title-line
                className="block w-max origin-left scale-x-[0.78] whitespace-nowrap"
              >
                Made
              </span>
              <span
                data-hero-title-line
                className="block w-max origin-left scale-x-[0.86] whitespace-nowrap font-serif text-[3.55rem] font-normal italic leading-[0.9] sm:text-[4.75rem] md:text-[6.25rem] lg:text-[7.5rem] xl:text-[8.75rem]"
              >
                Tangible.
              </span>
            </h1>

            <div className="mt-7 max-w-[38rem] md:mt-8 lg:grid lg:grid-cols-[1fr_19rem] lg:items-end lg:gap-10 xl:grid-cols-[1fr_21rem]">
              <div>
                <p
                  data-hero-description
                  className="max-w-[34ch] font-mono text-sm leading-relaxed text-[var(--text-inverse)] md:text-[0.95rem]"
                >
                  A private beauty atelier for precise craft, considered
                  ritual, and enduring expression.
                </p>

                <div
                  data-hero-actions
                  className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center"
                >
                  <a
                    href="#booking"
                    className="inline-flex min-h-[3.25rem] w-full max-w-72 items-center justify-between gap-8 bg-[var(--accent-primary)] px-6 font-sans text-[0.8125rem] font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-ink-950)] outline-none transition-colors duration-200 hover:bg-[var(--color-acid-500)] focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--interactive-focus)] focus-visible:ring-offset-[var(--focus-ring-offset)] focus-visible:ring-offset-[var(--accent-primary)] sm:w-auto sm:min-w-72"
                  >
                    <span>Begin your ritual</span>
                    <ArrowRight aria-hidden="true" className="size-7 stroke-[1.5]" />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex min-h-11 items-center gap-3 font-mono text-sm font-medium uppercase leading-none tracking-[0.08em] text-[var(--text-inverse)] outline-none transition-opacity duration-200 hover:opacity-70 focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-[var(--color-ivory-50)] focus-visible:ring-offset-[var(--focus-ring-offset)] focus-visible:ring-offset-[var(--color-ink-950)]"
                  >
                    Discover the craft
                    <ArrowDown aria-hidden="true" className="size-5 stroke-[1.5]" />
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
