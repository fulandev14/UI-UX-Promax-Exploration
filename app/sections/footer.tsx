import { ArrowRight } from "lucide-react";

const exploreLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Artistry", href: "#artistry" },
  { label: "Journal", href: "#gallery" },
];

const legalLinks = [
  { label: "Privacy", href: "#footer" },
  { label: "Terms", href: "#footer" },
  { label: "Accessibility", href: "#main" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      aria-labelledby="footer-title"
      className="relative overflow-hidden bg-[var(--background-inverse)] px-5 pb-6 pt-10 text-[var(--text-inverse)] sm:px-8 md:px-10 lg:px-[clamp(3rem,3.2vw,4rem)] lg:pb-8 lg:pt-12"
    >
      <div className="mx-auto max-w-[116rem]">
        <div className="border-t border-[rgb(251_248_241_/_0.36)]">
          <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1.08fr_1fr_1fr] lg:gap-0 lg:py-12">
            <div className="lg:pr-14">
              <h2
                id="footer-title"
                className="max-w-[11ch] font-serif text-[3rem] font-normal italic leading-[0.96] tracking-normal text-[rgb(251_248_241_/_0.96)] sm:text-[4rem] lg:text-[3.5rem] xl:text-[4.1rem]"
              >
                Beauty, Made Tangible.
              </h2>

              <div className="mt-10 font-mono text-sm font-medium uppercase leading-[2.05] tracking-normal text-[rgb(251_248_241_/_0.92)] md:text-base lg:mt-14">
                <p className="mb-3 text-xs md:text-sm">Visit</p>
                <address className="not-italic">
                  <span className="block">18 Rue de l&apos;Atelier</span>
                  <span className="block">Paris 3e</span>
                </address>
              </div>
            </div>

            <div className="border-t border-[rgb(251_248_241_/_0.28)] pt-8 md:border-t-0 md:pt-0 lg:border-l lg:px-14">
              <p className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.72)] md:text-sm">
                Hours
              </p>
              <dl className="mt-6 space-y-3 font-mono text-sm font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.94)] sm:text-base md:text-md">
                <div className="flex gap-5">
                  <dt>Tue-Fri</dt>
                  <dd>10:00-19:00</dd>
                </div>
                <div className="flex gap-5">
                  <dt>Sat</dt>
                  <dd>09:00-17:00</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-[rgb(251_248_241_/_0.28)] pt-8 md:col-span-2 md:border-t md:pt-8 lg:col-span-1 lg:border-l lg:border-t-0 lg:px-14 lg:pt-0">
              <p className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.72)] md:text-sm">
                Contact
              </p>
              <address className="mt-6 space-y-3 font-mono text-sm font-medium uppercase not-italic leading-none tracking-normal text-[rgb(251_248_241_/_0.94)] sm:text-base md:text-md">
                <a
                  href="tel:+33184802418"
                  className="block w-max transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
                >
                  +33 1 84 80 24 18
                </a>
                <a
                  href="mailto:concierge@atelierelan.com"
                  className="block break-all transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
                >
                  concierge@atelierelan.com
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="border-y border-[rgb(251_248_241_/_0.36)]">
          <div className="grid gap-10 py-9 lg:grid-cols-[1.08fr_0.72fr_0.82fr_1fr] lg:gap-0 lg:py-8">
            <nav aria-label="Footer navigation" className="lg:pr-12">
              <p className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.72)] md:text-sm">
                Explore
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.95)] sm:text-base">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              aria-hidden="true"
              className="hidden border-l border-[rgb(251_248_241_/_0.36)] lg:block"
            />

            <div className="lg:border-l lg:border-[rgb(251_248_241_/_0.36)] lg:px-12">
              <p className="font-mono text-xs font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.72)] md:text-sm">
                Follow
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.95)] sm:text-base">
                <li>
                  <a
                    href="https://instagram.com"
                    className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com"
                    className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-start lg:justify-end">
              <a
                href="#booking"
                className="group inline-flex items-center gap-4 font-mono text-sm font-medium uppercase leading-none tracking-normal text-[var(--accent-primary)] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)] sm:text-base"
              >
                Book Your Appointment
                <ArrowRight
                  aria-hidden="true"
                  className="size-8 shrink-0 stroke-[1.35] transition-transform duration-300 group-hover:translate-x-2"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-14">
          <p className="font-mono text-sm font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.86)] sm:text-base">
            &copy; 2026 Atelier Elan
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm font-medium uppercase leading-none tracking-normal text-[rgb(251_248_241_/_0.86)] sm:text-base">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--accent-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p
          aria-label="Atelier Elan"
          className="break-words font-sans text-[4rem] font-black uppercase leading-[0.76] tracking-normal text-[rgb(251_248_241_/_0.96)] sm:text-[6.4rem] md:text-[8.8rem] lg:whitespace-nowrap lg:text-[8.2rem] xl:text-[10.2rem] 2xl:text-[13.7rem]"
        >
          ATELIER ÉLAN
        </p>
      </div>
    </footer>
  );
}
