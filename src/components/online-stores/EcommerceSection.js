import "../../scss/EcommerceSection.scss";
import ecommerceImage from "../../images/ecommerce-image.png"; // замени на свой путь
import ecommerceImage2 from "../../images/online-stores-full.png"; // замени на свой путь

export default function EcommerceSection() {
  return (
    <section className="ecommerce">
      <div className="ecommerce__container">
        <div className="ecommerce__header">
          <h2 className="ecommerce__title">
            ЧТО ДЛЯ НАС <br />
            <span className="ecommerce__highlight">
              КАЧЕСТВЕННЫЙ ECOMMERCE?
            </span>
          </h2>
          <div className="ecommerce__line"></div>
        </div>

        <div className="ecommerce__content">
          <p className="ecommerce__text">
            Хороший интернет-магазин — это не просто каталог с корзиной. Это
            продуманная система, где бизнес, логика и эстетика живут в едином
            организме. В каждом проекте мы создаем систему, в которой всё
            взаимосвязано: скорость загрузки влияет на продажи, копирайтинг на
            доверие, user flow на конверсию, а дизайн — на настроение.
            <br />
            <br />
            Мы не делаем сайты “для галочки”. Мы создаём рабочие инструменты,
            которые решают конкретные задачи: убеждают, продают, строят доверие
            и имидж. Для нас важно, чтобы владелец видел в цифрах результат, а
            пользователь чувствовал комфорт и уважение к себе.
            <br />
            <br />
            Также хотим напомнить, что мы занимаемся{" "}
            <span className="ecommerce__link">
              <a href="/marketing">маркетингом</a>
            </span>{" "}
            и{" "}
            <span className="ecommerce__link">
              <a href="/content">созданием контента</a>
            </span>{" "}
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
