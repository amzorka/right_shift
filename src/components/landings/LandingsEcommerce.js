import "../../scss/EcommerceSection.scss";
import ecommerceImage from "../../images/landing-ecom.png"; // замени на свой путь
import ecommerceImage2 from "../../images/landings-full.png"; // замени на свой путь

export default function EcommerceSection() {
  return (
    <section className="ecommerce">
      <div className="ecommerce__container">
        <div className="ecommerce__header">
          <h2 className="ecommerce__title">
            ЧТО ДЛЯ НАС <br />
            <span className="ecommerce__highlight">ХОРОШИЙ ЛЕНДИНГ</span>
          </h2>
          <div className="ecommerce__line"></div>
        </div>

        <div className="ecommerce__content">
          <p className="ecommerce__text">
            Хороший лендинг — это не просто красивая страница с кнопкой. Это
            короткая, но ёмкая история, которая ведёт человека от первого
            впечатления к осознанному действию. Хороший лендинг показывает идею,
            характер, энергию и делает это просто, ясно, без лишнего шума.
            <br />
            <br />
            Такой лендинг не продаёт напрямую, он создаёт ощущение правильности
            выбора. Он помогает аудитории почувствовать себя частью идеи,
            понять, зачем продукт существует и какую пользу приносит. И когда
            доверие сформировано CTA становится естественным финалом
            взаимодействия: заявка, покупка, обращение.
            <br />
            <br />
            Также хотим напомнить, что мы занимаемся{" "}
            <span className="ecommerce__link">
              <a href="/marketing">маркетингом</a>
            </span>{" "}
            и{" "}
            <span className="ecommerce__link">
              <a href="/content">созданием контента</a>
            </span>
            , помогая брендам выстраивать эффективное взаимодействие с
            аудиторией.
          </p>

          <img
            src={ecommerceImage}
            alt="Ecommerce example"
            className="ecommerce__image"
          />
          <img
            src={ecommerceImage2}
            alt="Ecommerce example"
            className="ecommerce__image2"
          />
        </div>
      </div>
    </section>
  );
}
