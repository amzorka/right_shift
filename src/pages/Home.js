import "../scss/Home.scss";

import IntroSection from "../components/home/IntroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import InspirationSection from "../components/home/InspirationSection";
import ServicesSection from "../components/home/ServicesSection";
import Cases from "../components/home/Cases";
import CasesSecondPart from "../components/home/CasesSecondPart";
import ContactForm from "../components/home/ContactForm";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initSmoothScroll, getLenisInstance } from "../utils/lenis";
import { useMobile } from "../hooks/useMobile";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // даём странице отрисоваться
    setTimeout(() => {
      const hash = window.location.hash;
      if (!hash) return;

      const el = document.querySelector(hash);
      if (!el) return;

      // если используется Lenis — используем его плавный скролл
      if (lenis) {
        lenis.scrollTo(el, { offset: 0, duration: 2.0 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // задержка нужна, чтобы все компоненты успели появиться в DOM
  }, []);

  const isMobile = useMobile();
  const lenis = initSmoothScroll();

  return (
    <div className="home">
      {isMobile ? (
        <>
          <MobileHeader />
          <IntroSection />
          <PhilosophySection />
          <InspirationSection />
          <ServicesSection />
          <Cases />
          <CasesSecondPart />
          <ContactForm />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <IntroSection />
          <PhilosophySection />
          <InspirationSection />
          <ServicesSection />
          <Cases />
          <CasesSecondPart />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}
