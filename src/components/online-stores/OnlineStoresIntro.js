import "../../scss/OnlineStoresIntro.scss";
import basketImage from "../../images/online-stores-basket.png"; // сюда подставь путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // если у тебя иконка стрелки отдельная

export default function OnlineStoresIntro() {
  return (
    <section className="online-stores-intro">
      <div className="online-stores-intro__container">
        <div className="online-stores-intro__text">
          <h1 className="online-stores-intro__title">
            ИНТЕРНЕТ-МАГАЗИНЫ,
            <br /> <span>КОТОРЫЕ ПРОДАЮТ</span>
          </h1>
          <p className="online-stores-intro__subtitle">
            Разрабатываем eCommerce-проекты под ваш бизнес — от быстрых,
            конструкторных решений до кастомных, масштабируемых платформ.
            Маркетологи, дизайнеры, разработчики и бизнес-консультанты собраны в
            одной команде.
          </p>

          <a href="#contact" className="intro-section__button">
            <span className="intro-section__button-text">обсудить детали</span>
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
