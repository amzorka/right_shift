import "../../scss/ContentIntro.scss";
import basketImage from "../../images/content.png"; // сюда подставь путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // если у тебя иконка стрелки отдельная

export default function OnlineStoresIntro() {
  return (
    <section className="online-stores-intro">
      <div
        className="online-stores-intro__container"
        style={{ alignItems: "end", marginBottom: "50px" }}
      >
        <div className="online-stores-intro__text">
          <h1
            className="online-stores-intro__title"
            style={{ fontSize: "40px", width: "663px" }}
          >
            МЫ СОЗДАЕМ КОНТЕНТ, КОТОРЫЙ
            <br /> <span>ГОВОРИТ БОЛЬШЕ, ЧЕМ СЛОВА</span>
          </h1>
          <p className="online-stores-intro__subtitle">
            Мы создаём контент, формирующий правильное первое впечатление,
            удерживает внимание пользователя и прямо работает на конверсию — от
            графики и 3D до реальных фотосъёмок и AI-генераций, неотличимых от
            студийных.
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
