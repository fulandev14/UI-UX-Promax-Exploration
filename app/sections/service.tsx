import Image from "next/image";
import { ArrowLink } from "../components/atelier/arrow-link";
import { SectionKicker } from "../components/atelier/section-kicker";
import { services } from "../data/atelier-content";

export function Service() {
  return (
    <section
      id="services"
      data-section-id="services"
      aria-labelledby="services-title"
      className="relative isolate overflow-hidden bg-[var(--background-primary)] text-[var(--text-primary)]"
    >
      <div className="grid lg:min-h-dvh lg:grid-cols-[53%_47%]">
        <div className="relative z-10 flex flex-col px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-[clamp(2.5rem,3vw,4rem)] lg:py-[clamp(2.5rem,4.2vh,4rem)]">
          <SectionKicker number="02">Signature Services</SectionKicker>

          <div className="mt-10 md:mt-12 lg:mt-[clamp(2.5rem,4.8vh,4.5rem)]">
            <h2
              id="services-title"
              className="font-sans text-[clamp(3.6rem,12.5vw,7rem)] font-black uppercase leading-[0.84] tracking-normal text-[var(--color-ink-950)] lg:text-[clamp(4.25rem,5.2vw,6.5rem)]"
            >
              <span className="block w-max origin-left scale-x-[0.48] whitespace-nowrap sm:scale-x-[0.58] lg:scale-x-[0.78]">
                The Craft of Care.
              </span>
            </h2>
            <div
              aria-hidden="true"
              className="mt-5 h-[3px] w-[min(55%,21.5rem)] bg-[var(--accent-primary)] md:mt-6"
            />
            <p className="mt-4 font-mono text-sm leading-relaxed text-[var(--color-ink-950)] md:text-[0.95rem]">
              Every service begins with attention.
            </p>
          </div>

          <ol className="mt-8 md:mt-10 lg:mt-[clamp(1.5rem,3.5vh,3rem)] lg:max-w-[37.5rem]">
            {services.map((service, index) => (
              <li
                key={service.number}
                className={`grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-5 py-5 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-center sm:gap-x-7 md:grid-cols-[7rem_minmax(0,1fr)_auto] lg:grid-cols-[clamp(5.5rem,7vw,7rem)_minmax(0,1fr)_auto] lg:py-[clamp(0.9rem,1.65vh,1.5rem)] ${
                  index === 0 ? "pt-0" : "border-t border-[var(--border-subtle)]"
                }`}
              >
                <span className="row-span-2 font-serif text-[3.5rem] leading-[0.82] tracking-normal text-[var(--color-espresso-800)] sm:row-span-1 sm:text-[4.75rem] md:text-[5.4rem] lg:text-[clamp(4rem,5vw,5.5rem)]">
                  {service.number}
                </span>

                <div className="min-w-0 sm:self-center">
                  <h3 className="font-mono text-sm font-medium uppercase leading-tight tracking-[0.1em] text-[var(--color-ink-950)] sm:text-base lg:text-[clamp(0.78rem,1.1vw,1.05rem)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[23ch] font-mono text-xs leading-relaxed text-[var(--color-charcoal-900)] md:text-sm lg:text-[clamp(0.67rem,0.83vw,0.82rem)]">
                    {service.description}
                  </p>
                </div>

                <p className="col-start-2 mt-3 whitespace-nowrap font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-[var(--color-charcoal-900)] sm:col-start-auto sm:mt-0 sm:text-xs lg:text-[clamp(0.62rem,0.72vw,0.74rem)]">
                  From {service.price}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-2 lg:mt-auto lg:pt-5">
            <ArrowLink
              href="#booking"
              className="min-h-11 w-full max-w-[20.5rem] justify-between border-b border-[var(--border-strong)] md:text-sm"
              iconClassName="size-5 stroke-[1.35]"
            >
              Discover the full service edit
            </ArrowLink>
            <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[var(--color-charcoal-900)] md:text-xs lg:mt-9">
              Craft / Ritual / Result
            </p>
          </div>
        </div>

        <div className="relative min-h-[44rem] bg-[var(--background-inverse)] text-[var(--text-inverse)] sm:min-h-[52rem] lg:min-h-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/atelier-elan/service-section/stylist-hands-comb.png"
              alt="A stylist guides a comb through wet hair with precise hands."
              fill
              sizes="(min-width: 1024px) 47vw, 100vw"
              className="translate-y-[4%] scale-[1.04] object-cover object-[53%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(14_14_13_/_0.22)_0%,transparent_34%,rgb(14_14_13_/_0.1)_100%)]" />
          </div>

          <h3 className="absolute left-[10%] top-[7%] z-10 text-[var(--text-inverse)] lg:left-[11%] lg:top-[8%]">
            <span className="block w-max origin-left scale-x-[0.72] whitespace-nowrap font-sans text-[clamp(4.6rem,13vw,8rem)] font-black uppercase leading-[0.8] tracking-normal lg:scale-x-[0.58] lg:text-[clamp(6.5rem,8.5vw,10.5rem)] lg:leading-[0.86]">
              The Craft
            </span>
            <span className="mt-2 block w-max origin-left scale-x-[0.84] whitespace-nowrap font-serif text-[clamp(4.1rem,12vw,7.5rem)] font-normal italic leading-[0.82] tracking-normal lg:mt-4 lg:scale-x-[1.35] lg:text-[clamp(6.25rem,8.2vw,10rem)]">
              of Care.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
