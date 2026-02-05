// src/utils/lenis.js
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// одна глобальная ссылка на инстанс
let lenis = null;

export function initSmoothScroll() {
  function enableLenis() {
    if (lenis) return; // уже включен

    lenis = new Lenis({
      duration: 0.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      if (lenis) {
        lenis.raf(time);
        ScrollTrigger.update();
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  function disableLenis() {
    if (lenis) {
      lenis.stop(); // отключает обработку, но не ломает позицию
    }
  }

  function checkDevice() {
    const isDesktop = window.innerWidth > 1024;
    if (isDesktop) {
      enableLenis();
    } else {
      disableLenis();
    }
  }

  // запускаем при первом вызове
  checkDevice();

  // пересоздаём / отключаем при ресайзе
  window.addEventListener("resize", checkDevice);
}

// чтобы можно было достать инстанс снаружи при очистке
export function getLenisInstance() {
  return lenis;
}
