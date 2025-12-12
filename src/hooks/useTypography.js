import { useEffect } from "react";

function useTypography() {
  useEffect(() => {
    const preps = [
      "в",
      "к",
      "и",
      "с",
      "о",
      "у",
      "а",
      "я",
      "на",
      "не",
      "от",
      "по",
      "за",
      "из",
      "но",
      "же",
      "ли",
      "со",
      "об",
    ];

    const selectors = "p, span, li, h1, h2, h3, h4, h5, h6";

    const process = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        // не трогаем сложные элементы
        if (el.children.length > 0) return;
        if (!el.innerHTML) return;

        let text = el.innerHTML;

        preps.forEach((prep) => {
          const reg = new RegExp(`(^|\\s)${prep}\\s+`, "gi");
          text = text.replace(reg, `$1${prep}&nbsp;`);
        });

        el.innerHTML = text;
      });
    };

    process();

    // SPA-навигация / динамический контент
    const observer = new MutationObserver(process);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
}

export default useTypography;
