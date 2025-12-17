import "../../scss/About.scss";
import about from "../../images/about.png";
import grid from "../../images/about-grid.png";

export default function AboutIntro() {
  return (
    <section className="about">
      <div className="about__grid-bg" />

      <div className="about__glows">
        <div className="about__glow about__glow--1" />
        <div className="about__glow about__glow--2" />
      </div>

      <div className="about__center">
        <div className="about__container">
          <p className="about__small-title">О НАС</p>

          <h1 className="about__main-title">
            RIGHT.SHIFT — СТУДИЯ, СНИМАЮЩАЯ С ВАС ЗАБОТЫ О ЦИФРОВОЙ СОСТАВЛЯЮЩЕЙ
            БИЗНЕСА
          </h1>

          <p className="about__text">
            Мы создаём сайты, дизайн и маркетинговые кампании, которые не
            требуют от клиента лишних усилий: структура логична, интерфейс
            аккуратен, визуал выдержан, а всё это в итоге приводит к продажам и
            укрепляет репутацию бренда.
          </p>
        </div>
      </div>

      <img src={about} alt="О нас" className="about__image" />
    </section>
  );
}
