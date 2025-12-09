import "../../scss/LandingsIntro.scss";
import basketImage from "../../images/corporatives.png"; // сюда подставь путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // если у тебя иконка стрелки отдельная

export default function OnlineStoresIntro() {
  return (
    <section
      className="online-stores-intro"
      style={{ paddingTop: "153px", paddingBottom: "160px" }}
    >
      <div
        className="online-stores-intro__container"
        style={{ alignItems: "start" }}
      >
        <div
          className="online-stores-intro__text"
          style={{ marginTop: "116px" }}
        >
          <h1 className="online-stores-intro__title">
            КОРПОРАТИВНЫЕ САЙТЫ
            <br /> <span>ОТРАЖАЮЩИЕ ЛИЦО</span>
          </h1>
          <p
            className="online-stores-intro__subtitle"
            style={{ marginTop: "20px" }}
          >
            Мы создаём корпоративные сайты, которые выстраивают доверие,
            демонстрируют масштаб и работают на имидж бизнеса — внутри и
            снаружи. Наш сайт не просто расскажет о вашей компании — наш сайт
            покажет её высокий уровень.
          </p>

          <a
            href="#contact"
            className="intro-section__button corporatives-intro__button"
          >
            <span className="intro-section__button-text">обсудить проект</span>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="intro-section__button-icon"
            />
          </a>
        </div>

        <div className="online-stores-intro__image">
          <img
            src={basketImage}
            alt="Online Store Basket"
            draggable={false}
            style={{ width: "509px", height: "486px" }}
          />
        </div>
      </div>
    </section>
  );
}
