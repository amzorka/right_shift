// import { useEffect, useState } from "react";
// import "../scss/Header.scss";

// export default function Header() {
//   const [hidden, setHidden] = useState(false);
//   const [lastScroll, setLastScroll] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;

//       if (currentScroll > lastScroll && currentScroll > 100) {
//         // скролл вниз
//         setHidden(true);
//       } else {
//         // скролл вверх
//         setHidden(false);
//       }

//       setLastScroll(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScroll]);

//   return (
//     <header className={`header ${hidden ? "header--hidden" : ""}`}>
//       <div className="header__container">
//         <div className="header__logo">
//           <a href="/">RIGHT.SHIFT</a>
//         </div>

//         <nav className="header__nav">
//           <a href="/">главная</a>
//           <a href="/about">о нас</a>
//           <a href="/#services">услуги</a>
//           <a href="/#cases">кейсы</a>
//           <a href="/contacts">контакты</a>
//           <a
//             href="#contact"
//             style={{ color: "#ffffff" }}
//             className="header__button"
//           >
//             связаться с нами
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../scss/Header.scss";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [hidden, setHidden] = useState(isHome); // на главной изначально скрыт
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = docHeight - windowHeight || 1;
      const scrollPercent = currentScroll / maxScroll;
      const isScrollingDown = currentScroll > lastScrollRef.current;

      if (isHome) {
        // главная: хэдер показываем только если проскроллил >10% и идёт скролл вверх
        if (scrollPercent > 0.1 && !isScrollingDown) {
          setHidden(false);
        } else {
          setHidden(true);
        }
      } else {
        // остальные страницы: как было — прячем при скролле вниз после 100px
        if (isScrollingDown && currentScroll > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }

      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <a href="/">RIGHT.SHIFT</a>
        </div>

        <nav className="header__nav">
          <a href="/">главная</a>
          <a href="/about">о нас</a>
          <a href="/#services">услуги</a>
          <a href="/#cases">кейсы</a>
          <a href="/contacts">контакты</a>
          <a
            href="#contact"
            style={{ color: "#ffffff" }}
            className="header__button"
          >
            связаться с нами
          </a>
        </nav>
      </div>
    </header>
  );
}
