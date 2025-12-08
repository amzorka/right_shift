import "../../scss/PhilosophySection.scss";
import statueImage from "../../images/statue.png"; // замени путь под свой
import arrow from "../../icons/arrow-right.png";

import { useMobile } from "../../hooks/useMobile";

export default function PhilosophySection() {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <section className="philosophy philosophy--mobile">
          <div className="philosophy__mobile-container">
            {/* 1 — Линия */}
            <div className="philosophy__line"></div>

            {/* 2 — Заголовок */}
            <h2 className="philosophy__title">
              <span style={{ fontWeight: 100 }}>ЦИФРОВАЯ</span> <br />
              ФОРМА СМЫСЛА
            </h2>

            {/* 3 — Текст */}
            <p className="philosophy__text">
              right.shift — студия, в которой внимание к деталям превращает
              технологию в искусство, а дизайн становится языком доверия. мы не
              просто делаем сайты — мы создаём инструменты, которые работают
              тихо и безупречно. мы вовлечены, требовательны к себе и всегда
              предсказуемы в результате. наши клиенты не тратят время на
              контроль — они просто видят, как всё работает.
            </p>

            {/* 4 — Ссылка */}
            <a href="/about" className="philosophy__more">
              узнать больше о команде right.shift
              <span className="philosophy__arrow">
                <img src={arrow} alt="" />
              </span>
            </a>

            {/* 5 — Статуя */}

            <div className="philosophy__bottom">
              <div className="philosophy__image-wrapper">
                <img src={statueImage} alt="" className="philosophy__image" />
              </div>

              {/* 6 — Философия */}
              <div className="philosophy__subblock">
                <div className="philosophy__square"></div>
                <h3 className="philosophy__subtitle">ФИЛОСОФИЯ</h3>
              </div>

              {/* 7 — Подпункт */}
              <p className="philosophy__subtext">
                1. Гармония формы и технологии
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="philosophy">
          <div className="philosophy__container">
            <div className="philosophy__content">
              <div className="philosophy__left">
                <div className="philosophy__line"></div>
                <h2 className="philosophy__title">
                  <span style={{ fontWeight: 100 }}>ЦИФРОВАЯ</span> <br />
                  ФОРМА СМЫСЛА
                </h2>

                <p className="philosophy__text">
                  right.shift — студия, в которой внимание к деталям превращает
                  технологию в искусство, а дизайн становится языком доверия. мы
                  не просто делаем сайты — мы создаём инструменты, которые
                  работают тихо и безупречно. мы вовлечены, требовательны к себе
                  и всегда предсказуемы в результате. наши клиенты не тратят
                  время на контроль — они просто видят, как всё работает.
                </p>

                <a href="/about" className="philosophy__more">
                  узнать больше о команде right.shift
                  <span className="philosophy__arrow">
                    {" "}
                    <img src={arrow} />
                  </span>
                </a>

                <div className="philosophy__subblock">
                  <div className="philosophy__square"></div>
                  <h3 className="philosophy__subtitle">ФИЛОСОФИЯ</h3>
                </div>

                <p className="philosophy__subtext">
                  1. Гармония формы и технологии
                </p>
              </div>

              <img
                src={statueImage}
                alt="Statue with VR headset"
                className="philosophy__image"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
