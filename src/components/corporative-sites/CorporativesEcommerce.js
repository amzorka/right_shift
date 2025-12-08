import "../../scss/EcommerceSection.scss";
import ecommerceImage from "../../images/corporatives3.png"; // замени на свой путь
import ecommerceImage2 from "../../images/corporatives-full.png"; // замени на свой путь

export default function EcommerceSection() {
  return (
    <section className="ecommerce">
      <div className="ecommerce__container">
        <div className="ecommerce__header">
          <h2 className="ecommerce__title">
            ЧТО ДЛЯ НАС ХОРОШИЙ
            <br />
            <span className="ecommerce__highlight">КОРПОРАТИВНЫЙ САЙТ</span>
          </h2>
          <div className="ecommerce__line"></div>
        </div>

        <div className="ecommerce__content">
          <p className="ecommerce__text">
            Хороший корпоративный сайт в нашем понимании — это тот, который
            показывает компанию в правильном свете: профессионально, уверенно и
            стильно. Он не придумывает образ — он формирует правильное
            восприятие, акцентируя сильные стороны и подаёт их с уважением и
            вкусом.
            <br />
            <br />
            Такой сайт помогает бизнесу выглядеть зрело, надежно, уверенно. Он
            рассказывает о компании спокойно и последовательно, создавая
            ощущение надёжности и системности. Дизайн, тексты и структура
            работают вместе, чтобы вызвать доверие и желание сотрудничать.
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
            помогая брендам выстраивать эффективное взаимодействие с аудиторией.
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
