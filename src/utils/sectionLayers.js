// utils/sectionLayers.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSectionLayers(sectionSelectors) {
  const sections = sectionSelectors
    .map((sel) => document.querySelector(sel))
    .filter(Boolean);

  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  sections.forEach((section, i) => {
    const next = sections[i + 1];
    if (!next) return; // последнюю не пинним

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
      onEnter: () => next.classList.add("active"),
      onLeaveBack: () => next.classList.remove("active"),
    });
  });
}
