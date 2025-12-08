import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../scss/SmoothFadeSections.scss";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothFadeSections({ sections = [] }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".fade-section");

      panels.forEach((panel, i) => {
        const nextPanel = panels[i + 1];
        if (!nextPanel) return;

        // Анимация плавного перехода между секциями
        gsap.to(panel, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(nextPanel, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fade-container" ref={containerRef}>
      {sections.map((section, i) => (
        <section key={i} className="fade-section">
          {section}
        </section>
      ))}
    </div>
  );
}
