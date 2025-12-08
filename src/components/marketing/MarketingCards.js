import "../../scss/MarketingCards.scss";
import clockIcon from "../../icons/clock.png";
import moneyIcon from "../../icons/money.png";
import analyticsIcon from "../../icons/analytics.png";
import seoIcon from "../../icons/seo.png";
import designIcon from "../../icons/design.png";
import consultingIcon from "../../icons/consulting.png";
import searchIcon from "../../icons/search.png";

export default function OnlineStoresCards() {
  return (
    <section className="marketing-cards">
      <div className="marketing-cards__container">
        {/* Карточка 1 */}
        <div className="marketing-card">
          <h3 className="marketing-card__title">
            Контекстная реклама <br /> (Яндекс Директ)
          </h3>

          <p className="marketing-card__text">
            Быстрый, стабильный и измеримый способ привлечь клиентов.
            Настраиваем и оптимизируем кампании, доводя до пиковой эффективности
          </p>

          <ul
            className="marketing-card__features"
            style={{ marginBottom: "29px" }}
          >
            <li style={{ opacity: "100%" }}>
              <img src={clockIcon} alt="" />
              <span style={{ fontWeight: 400, opacity: "100%" }}>
                срок запуска от 10 дней
              </span>
            </li>
            <li style={{ opacity: "100%" }}>
              <img src={moneyIcon} alt="" />
              <span style={{ fontWeight: 400, opacity: "100%" }}>
                от 40 000₽ (настр.) + 20 000₽ (ведение)
              </span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                аудит ниши и семантики, медиаплан, настройка кампаний, написание
                объявлений, подключение аналитики, регулярная оптимизация
              </span>
            </li>
            <li>
              <img src={searchIcon} alt="" />
              <span>
                максимальная отдача бюджета, прозрачные отчёты, реальные
                конверсии
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="marketing-card__button">узнать цену</button>
          </a>
        </div>
        {/* Карточка 2 */}
        <div className="marketing-card">
          <h3 className="marketing-card__title">
            Таргетированная реклама <br />
            (VK)
          </h3>

          <p className="marketing-card__text">
            Делаем рекламу, которая действительно попадает в свою аудиторию.
            Подбираем сегменты и сценарии так, чтобы реклама вела к действию.
          </p>

          <ul
            className="marketing-card__features"
            style={{ marginBottom: "46px" }}
          >
            <li style={{ opacity: "100%" }}>
              <img src={clockIcon} alt="" />
              <span style={{ fontWeight: "400", opacity: "100%" }}>
                срок запуска от 7 дней
              </span>
            </li>
            <li style={{ opacity: "100%" }}>
              <img src={moneyIcon} alt="" />
              <span style={{ fontWeight: "400", opacity: "100%" }}>
                от 40 000₽ (настр.) + 20 000₽ (ведение)
              </span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                анализ аудитории, создание креативов, настройка таргета,
                тестирование связок, аналитика конверсий
              </span>
            </li>
            <li>
              <img src={searchIcon} alt="" />
              <span>
                A/B-тесты, адаптация под цели бизнеса, фокус на заявки и
                вовлечённость
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="marketing-card__button">узнать цену</button>
          </a>
        </div>

        {/* Карточка 3 */}

        <div className="marketing-card">
          <h3 className="marketing-card__title">
            SMM и ведение соцсетей <br />
            (VK, TG, Inst и др.)
          </h3>

          <p className="marketing-card__text">
            Строим системное присутствие бренда в соцсетях. Контент, визуалы и
            стратегия, которые формируют доверие, узнаваемость и активность
            аудитории
          </p>

          <ul
            className="marketing-card__features"
            style={{ marginBottom: "29px" }}
          >
            <li style={{ opacity: "100%" }}>
              <img src={clockIcon} alt="" />
              <span style={{ fontWeight: 400 }}>
                погружаемся в проект без промедлений
              </span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span style={{ fontWeight: 400 }}>от 60 000 ₽/мес.</span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                контент-план, разработка стиля текстов и дизайна постов, сторис,
                взаимодействие с аудиторией, модерация, аналитика вовлечённости
              </span>
            </li>
            <li>
              <img src={searchIcon} alt="" />
              <span>
                единый визуальный стиль, фирменный tone of voice, постоянный
                рост охватов и лояльности
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="marketing-card__button">узнать цену</button>
          </a>
        </div>
      </div>
    </section>
  );
}
