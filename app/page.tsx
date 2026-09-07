import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Service } from "./sections/service";
import { Craftsmanship } from "./sections/craftsmanship";
import { Experience } from "./sections/experience";

export default function Home() {
  return (
    <main id="main" className="min-h-dvh bg-[var(--background-primary)]">
      <a
        href="#hero-title"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--accent-primary)] focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:text-[var(--color-ink-950)]"
      >
        Skip to hero
      </a>
      <Hero />
      <About />
      <Service />
      <Craftsmanship />
      <Experience />
    </main>
  );
}
