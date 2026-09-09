"use client";

import { useCallback, useState } from "react";

export function useCyclicIndex(length: number, initialIndex = 0) {
  const itemCount = Math.max(length, 1);
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), itemCount - 1),
  );

  const next = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % itemCount);
  }, [itemCount]);

  const previous = useCallback(() => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + itemCount) % itemCount,
    );
  }, [itemCount]);

  return { index, next, previous };
}
