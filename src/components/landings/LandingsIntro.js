import "../../scss/OnlineStoresIntro.scss";
import basketImage from "../../images/landing.png"; // сюда подставь путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // если у тебя иконка стрелки отдельная

export default function OnlineStoresIntro() {
  return (
    <section
      className="online-stores-intro"
      style={{ paddingTop: "140px", paddingBottom: "160px" }}
    >
      <div
        className="online-stores-intro__container"
        style={{ alignItems: "start" }}
      >
        <div
          className="online-stores-intro__text"
          style={{ marginTop: "130px" }}
        >
          <h1 className="online-stores-intro__title">
            ДЕЛАЕМ ЭФФЕКТИВНЫЕ
            <br /> <span>ЛЕНДИНГ СТРАНИЦЫ</span>
          </h1>
          <p
            className="online-stores-intro__subtitle"
            style={{ width: "575px", marginTop: "20px", marginBottom: "70px" }}
          >
            Разрабатываем лендинги под ключ для любых ваших задач. Ведем к
            действию и собираем статистику, не забывая про лицо бренда. От
            тестирования стартапов, до продвижения бигтех брендов и
            инфопродуктов — под каждый проект мы подбираем формат, который даст
            результат.
          </p>

          <a
            href="#contact"
            className="intro-section__button landing-intro__button"
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
          <img src={basketImage} alt="Online Store Basket" draggable={false} />
        </div>
      </div>
    </section>
  );
}
