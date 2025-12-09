import "../../scss/OnlineStoresIntro.scss";
import basketImage from "../../images/marketing.png"; // сюда подставь путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // если у тебя иконка стрелки отдельная

export default function OnlineStoresIntro() {
  return (
    <section
      className="online-stores-intro"
      style={{ paddingTop: "173px", paddingBottom: "160px" }}
    >
      <div className="online-stores-intro__container">
        <div
          className="online-stores-intro__text"
          style={{ marginTop: "140px" }}
        >
          <h1
            className="online-stores-intro__title"
            style={{ fontSize: "40px" }}
          >
            ВЫ ОКАЗАЛИСЬ ЗДЕСЬ
            <br /> <span>БЛАГОДАРЯ НАШЕМУ МАРКЕТИНГУ</span>
          </h1>
          <p
            className="online-stores-intro__subtitle"
            style={{ marginTop: "20px", marginBottom: "50px" }}
          >
            Мы привели вас сюда не случайно — так же, как приводим клиентов
            нашим заказчикам. Аналитика, стратегия и контент работают вместе,
            чтобы каждая рекламная кампания приносила реальный результат, а не
            сухую отчетность.
          </p>

          <a
            href="#contact"
            className="intro-section__button marketing-intro__button"
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
