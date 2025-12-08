import "../../scss/EcommerceSection.scss";
import ecommerceImage from "../../images/marketing-ecom.png"; // замени на свой путь
import ecommerceImage2 from "../../images/marketing-full.png"; // замени на свой путь

export default function EcommerceSection() {
  return (
    <section className="ecommerce">
      <div className="ecommerce__container">
        <div className="ecommerce__header">
          <h2 className="ecommerce__title">
            ЧТО ДЛЯ НАС
            <br />
            <span className="ecommerce__highlight">
              КАЧЕСТВЕННЫЙ МАРКЕТИНГ?
            </span>
          </h2>
          <div className="ecommerce__line"></div>
        </div>

        <div className="ecommerce__content">
          <p className="ecommerce__text">
            Качественный маркетинг — это не набор рекламных инструментов, а
            единая стратегия, в которой аналитика, креатив и коммуникация
            работают синхронно. Каждый канал — часть одной воронки, каждая
            кампания — шаг в общей логике движения клиента.
            <br />
            <br />
            Мы выстраиваем систему, где решениями управляют данные, а не
            догадки. Изучаем поведение аудитории, точки входа, конверсии и
            юзер-флоу, чтобы каждая единица бюджета приносила результат.
            Контент, реклама и аналитика работают вместе, усиливая друг друга:
            реклама привлекает, контент удерживает, аналитика оптимизирует.
            <br />
            <br />
            Также хотим напомнить, что мы занимаемся{" "}
            <span className="ecommerce__link">
              <a href="/corporative-sites">разработкой сайтов</a>
            </span>{" "}
            и{" "}
            <span className="ecommerce__link">
              <a href="/content">созданием контента</a>
            </span>
            , помогая брендам выстраивать эффективное взаимодействие с
            аудиторией. Для крупных брендов мы предлагаем выгодные долгосрочные
            условия.
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
