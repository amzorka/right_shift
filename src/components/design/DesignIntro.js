import "../../scss/OnlineStoresIntro.scss";
import basketImage from "../../images/design.png"; // сюда подставь путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // если у тебя иконка стрелки отдельная

export default function OnlineStoresIntro() {
  return (
    <section
      className="online-stores-intro"
      style={{ paddingTop: "190px", paddingBottom: "160px" }}
    >
      <div
        className="online-stores-intro__container"
        style={{ alignItems: "start" }}
      >
        <div
          className="online-stores-intro__text"
          style={{ marginTop: "96px" }}
        >
          <h1
            className="online-stores-intro__title"
            style={{ fontSize: "40px" }}
          >
            UX/UI ДИЗАЙН ДЛЯ БРЕНДОВ,
            <br /> <span>КОТОРЫЕ ГОТОВЫ К РОСТУ</span>
          </h1>
          <p className="online-stores-intro__subtitle">
            Мы создаём дизайн, который не просто красиво выглядит — он решает
            прямые задачи бизнеса. Каждый пиксель, каждый экран и каждая
            анимация продуманы для того, чтобы пользователь заинтересовался,
            понял и захотел остаться.
          </p>

          <a
            href="#contact"
            className="intro-section__button design-intro__button"
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
