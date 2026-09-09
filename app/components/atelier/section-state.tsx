"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SectionState = {
  activeSectionId: string;
  setActiveSectionId: (sectionId: string) => void;
};

const SectionStateContext = createContext<SectionState | null>(null);

export function SectionStateProvider({ children }: { children: ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState("hero");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]"),
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection?.target instanceof HTMLElement) {
          setActiveSectionId(visibleSection.target.dataset.sectionId ?? "hero");
        }
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const value = useMemo(
    () => ({ activeSectionId, setActiveSectionId }),
    [activeSectionId],
  );

  return (
    <SectionStateContext.Provider value={value}>
      {children}
    </SectionStateContext.Provider>
  );
}

export function useSectionState() {
  const context = useContext(SectionStateContext);

  if (!context) {
    throw new Error("useSectionState must be used inside SectionStateProvider");
  }

  return context;
}
