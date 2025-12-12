// TypographyFixer.js
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TypographyFixer() {
  const location = useLocation();

  useLayoutEffect(() => {
    // общий список коротких предлогов/союзов
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
      "до",
      "над",
      "под",
      "при",
      "про",
      "как",
    ];

    // один общий регэксп быстрее, чем 20 отдельных
    // ловим: (начало/пробел/неразрывный/открывающая кавычка/скобка) + (предлог) + (любой whitespace)
    // и заменяем whitespace на NBSP
    const reg = new RegExp(
      `(^|[\\s\\u00A0«„(\\[])(` + preps.join("|") + `)\\s+`,
      "gim"
    );

    const isBadParent = (el) => {
      if (!el) return true;
      const tag = el.tagName?.toLowerCase();
      return (
        tag === "script" ||
        tag === "style" ||
        tag === "noscript" ||
        tag === "textarea" ||
        tag === "input" ||
        tag === "select" ||
        tag === "option" ||
        el.isContentEditable
      );
    };

    const apply = () => {
      const root = document.getElementById("root") || document.body;

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const p = node.parentElement;
          if (isBadParent(p)) return NodeFilter.FILTER_REJECT;
          if (!node.nodeValue || !node.nodeValue.trim())
            return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      let node;
      while ((node = walker.nextNode())) {
        const before = node.nodeValue;
        const after = before.replace(reg, "$1$2\u00A0");
        if (after !== before) node.nodeValue = after;
      }
    };

    // важно: дождаться реального рендера контента на странице
    // 2 rAF обычно хватает даже при ленис/картинках/анимациях
    let raf1 = requestAnimationFrame(() => {
      let raf2 = requestAnimationFrame(() => {
        apply();
      });
      // на всякий случай чистим raf2, если размонтировались
      TypographyFixer.__raf2 = raf2;
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (TypographyFixer.__raf2) cancelAnimationFrame(TypographyFixer.__raf2);
    };
  }, [location.pathname]);

  return null;
}
