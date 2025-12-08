import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSectionTransitions(sectionSelectors) {
  sectionSelectors.forEach((selector, i) => {
    const section = document.querySelector(selector);
    const next = sectionSelectors[i + 1]
      ? document.querySelector(sectionSelectors[i + 1])
      : null;

    if (!section || !next) return;

    // Устанавливаем stacking (одна над другой)
    gsap.set(next, { yPercent: 100 });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * 100;
        gsap.to(next, {
          yPercent: 100 - progress,
          ease: "none",
          overwrite: true,
        });
      },
    });
  });
}
