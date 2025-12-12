import "../../scss/EcommerceSection.scss";
import ecommerceImage from "../../images/landings-ecom.png"; // замени на свой путь
import ecommerceImage2 from "../../images/design-full.png"; // замени на свой путь

export default function EcommerceSection() {
  return (
    <section className="ecommerce">
      <div className="ecommerce__container">
        <div className="ecommerce__header">
          <h2 className="ecommerce__title">
            ЧТО ДЛЯ НАС КАЧЕСТВЕННЫЙ
            <br />
            <span className="ecommerce__highlight">UX/UI ДИЗАЙН</span>
          </h2>
          <div className="ecommerce__line"></div>
        </div>

        <div className="ecommerce__content">
          <p className="ecommerce__text">
            Качественный UX/UI-дизайн — это выстроенный user flow, где каждое
            действие логично, предсказуемо и приятно. Когда визуальный стиль не
            отвлекает, а поддерживает сценарий. Когда интерфейс не требует
            объяснений, потому что интуиция пользователя делает всё за него.
            <br />
            <br />
            Мы помешаны на юзабилити, визуальной иерархии, когнитивной нагрузке
            и ритму интерфейса. Работаем через исследование поведения
            пользователей, (CJM) и прототипирование. Проверяем каждое решение на
            понятность, доступность и эмоциональный отклик, чтобы продукт не
            просто выглядел хорошо, но был приятен.
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
            аудиторией. Для крупных брендов мы предлагаем выгодные долгосрочные
            условия по данным услугам.
          </p>

          <img
            src={ecommerceImage}
            alt="Ecommerce example"
            className="ecommerce__image"
          />

          <img
            src={ecommerceImage2}
            alt="Ecommerce example"
            className="ecommerce__image2 design__ecommerce-img"
          />
        </div>
      </div>
    </section>
  );
}
