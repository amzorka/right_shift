import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../scss/MobileHeader.scss";

import homeIcon from "../icons/mobile-menu/home.png";
import servicesIcon from "../icons/mobile-menu/services.png";
import casesIcon from "../icons/mobile-menu/cases.png";
import aboutIcon from "../icons/mobile-menu/about.png";
import contactsIcon from "../icons/mobile-menu/contacts.png";
import { getLenisInstance } from "../utils/lenis";

export default function MobileHeader() {
  // 1. Сначала объявляем state
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // 2. Потом эффект, который уже может использовать open
  useEffect(() => {
    if (open) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const openFromServices = () => setOpen(true);

    window.addEventListener("open-mobile-menu", openFromServices);

    return () =>
      window.removeEventListener("open-mobile-menu", openFromServices);
  }, []);

  useEffect(() => {
    const lenis = getLenisInstance();
    if (!lenis) return;

    if (open) lenis.stop();
    else lenis.start();
  }, [open]);

  // --- Swipe to close ---
  useEffect(() => {
    const menu = document.querySelector(".mmenu");
    if (!menu) return;

    let startY = 0;
    let currentY = 0;
    let dragging = false;

    const onTouchStart = (e) => {
      if (!open) return;

      dragging = true;
      startY = e.touches[0].clientY;
      currentY = startY;
    };

    const onTouchMove = (e) => {
      if (!dragging) return;

      const touchY = e.touches[0].clientY;
      const diff = touchY - startY;

      // если тянем вниз — блокируем скролл страницы
      if (diff > 0) {
        e.preventDefault(); // ❗ блокируем прокрутку страницы
        e.stopPropagation(); // ❗ не даём событию уйти вверх
      }

      currentY = touchY;

      if (diff > 0) {
        // тянем меню вниз вместе с пальцем
        menu.style.transform = `translateY(${diff}px)`;
      }
    };

    const onTouchEnd = () => {
      if (!dragging) return;

      dragging = false;

      const diff = currentY - startY;

      if (diff > 60) {
        setOpen(false); // свайп вниз → закрыть
      }

      // вернуть меню на место
      menu.style.transform = "";
    };

    menu.addEventListener("touchstart", onTouchStart, { passive: false });
    menu.addEventListener("touchmove", onTouchMove, { passive: false });
    menu.addEventListener("touchend", onTouchEnd);

    return () => {
      menu.removeEventListener("touchstart", onTouchStart);
      menu.removeEventListener("touchmove", onTouchMove);
      menu.removeEventListener("touchend", onTouchEnd);
    };
  }, [open]);

  const servicesLinks = {
    лендинги: "/landings",
    "корпоративные сайты": "/corporative-sites",
    "интернет-магазины": "/online-stores",
    "интернет маркетинг": "/marketing",
    "UI/UX-дизайн": "/design",
    "визуальный контент": "/content",

    // + — идут к форме
    "сайты под ключ": "/#contact",
    "мобильные приложения": "/#contact",
    "tg mini apps": "/#contact",
    "блокчейн разработка": "/#contact",
    "3D дизайн": "/#contact",
    брендинг: "/#contact",
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`mheader ${isHome ? "mheader--home" : "mheader--inner"}`}
      >
        {/* ЛОГО ТОЛЬКО НА ВНУТРЕННИХ */}
        {!isHome && (
          <div className="mheader__logo">
            <a href="/" style={{ textDecoration: "none" }}>
              <h1>RIGHT.SHIFT</h1>
              <p>Цифровая студия полного цикла</p>
            </a>
          </div>
        )}

        {/* БУРГЕР */}
        <div
          className={`mheader__burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className="line line--top"></span>
          <span className="line line--mid"></span>
          <span className="line line--bot"></span>
        </div>
      </header>

      {/* МЕНЮ */}
      <div className={`mmenu ${open ? "mmenu--open" : ""}`}>
        <div className="mmenu__inner">
          <h3 className="mmenu__title">
            {" "}
            <br />
          </h3>

          <nav className="mmenu__main">
            {/* ОСНОВНЫЕ */}
            <a href="/" className="mmenu__link">
              <img src={homeIcon} alt="" />
              <span>главная</span>
            </a>

            {/* УСЛУГИ */}
            <div className="mmenu__link" style={{ marginBottom: "30px" }}>
              <img src={servicesIcon} alt="" />
              <span>услуги</span>
            </div>

            {/* ВТОРИЧНЫЕ */}

            <div className="mmenu__sub">
              {Object.keys(servicesLinks).map((item, i) => (
                <a
                  key={i}
                  href={servicesLinks[item]}
                  className="mmenu__sublink"
                  onClick={() => setOpen(false)} // ← закрывает меню
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="/#cases"
              className="mmenu__link"
              onClick={() => setOpen(false)}
            >
              <img src={casesIcon} alt="" />
              <span>кейсы</span>
            </a>

            <a href="/about" className="mmenu__link">
              <img src={aboutIcon} alt="" />
              <span>о нас</span>
            </a>

            <a href="/contacts" className="mmenu__link mmenu__link--last">
              <img src={contactsIcon} alt="" />
              <span>контакты</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
