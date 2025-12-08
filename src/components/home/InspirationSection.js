import "../../scss/InspirationSection.scss";
import inspirationImage from "../../images/inspiration-image.png"; // замени на свою картинку
import inspirationMobile from "../../images/inspiration-mobile.png"; // замени на свою картинку
import { useMobile } from "../../hooks/useMobile";

export default function InspirationSection() {
  const isMobile = useMobile();

  return (
    <section className="inspiration">
      <div className="inspiration__container">
        <div className="inspiration__top">
          <h2 className="inspiration__title">
            СОЗДАВАЯ ЦИФРОВОЕ <br />{" "}
            <span className="inspiration__span">МЫ ВДОХНОВЛЯЕМСЯ РЕАЛЬНЫМ</span>
          </h2>
          <div className="inspiration__line"></div>
        </div>

        {isMobile ? (
          <p className="inspiration__text">
            «Мы ищем ритм в архитектуре, баланс в живописи, истории в кино,
            тишину в природе и форму в фотографии»
          </p>
        ) : (
          <p className="inspiration__text">
            «Мы ищем ритм в архитектуре, баланс в живописи, истории <br /> в
            кино, тишину в природе и форму в фотографии»
          </p>
        )}

        {isMobile ? (
          <img
            src={inspirationMobile}
            alt="Inspiration visuals"
            className="inspiration__image"
          />
        ) : (
          <img
            src={inspirationImage}
            alt="Inspiration visuals"
            className="inspiration__image"
          />
        )}

        <div className="inspiration__footer">
          <div className="inspiration__footer-top">
            <h3 className="inspiration__footer-title">ВДОХНОВЕНИЕ</h3>
            <div className="inspiration__square"></div>
          </div>
          <p className="inspiration__footer-text">
            2. Реальное перетекает в цифровое
          </p>
        </div>
      </div>
    </section>
  );
}
