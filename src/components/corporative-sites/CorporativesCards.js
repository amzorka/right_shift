import "../../scss/CorporativesCards.scss";
import constructorImage from "../../images/corporatives1.png"; // твоя первая картинка
import customImage from "../../images/corporatives2.png"; // вторая картинка
import clockIcon from "../../icons/clock.png";
import moneyIcon from "../../icons/money.png";
import analyticsIcon from "../../icons/analytics.png";
import seoIcon from "../../icons/seo.png";
import designIcon from "../../icons/design.png";
import consultingIcon from "../../icons/consulting.png";

export default function OnlineStoresCards() {
  return (
    <section className="online-stores-cards">
      <div className="online-stores-cards__container">
        {/* Карточка 1 */}
        <div className="store-card">
          <img
            src={constructorImage}
            alt="Магазин на конструкторе"
            className="store-card__image"
            style={{ height: "220px" }}
          />

          <h3 className="store-card__title" style={{ marginBottom: "20px" }}>
            Корпоративный сайт на конструкторе
          </h3>

          <p className="store-card__text">
            Если нужно обновить старый сайт или быстро запустить новый, подойдут
            качественные конструкторные решения. Наши профильные разработчики
            сделают вам конструкторный сайт без привкуса шаблонов и дешевизны.
          </p>

          <ul className="store-card__features" style={{ margin: "0 0 25px 0" }}>
            <li>
              <img src={clockIcon} alt="" />
              <span>от 5 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 120 000 ₽</span>
            </li>
            <li>
              <img src={analyticsIcon} alt="" />
              <span>Подключение форм, заявок, аналитики и CRM </span>
            </li>
            <li>
              <img src={seoIcon} alt="" />
              <span>Оптимизация под SEO и мобильные устройства</span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>Индивидуальный дизайн в рамках платформы</span>
            </li>
            <li>
              <img src={consultingIcon} alt="" />
              <span>Консультация по контенту и визуальной подаче</span>
            </li>
          </ul>

          <a href="#contact">
            <button className="store-card__button">узнать цену</button>
          </a>
        </div>
        {/* Карточка 2 */}
        <div className="store-card">
          <img
            src={customImage}
            alt="Кастомный интернет-магазин"
            className="store-card__image"
            style={{ height: "220px" }}
          />

          <h3 className="store-card__title" style={{ marginBottom: "20px" }}>
            Кастомный корпоративный сайт под ключ
          </h3>

          <p className="store-card__text">
            Для компаний, которым важно показать уровень, масштаб и идеологию,
            мы создаём уникальные сайты с глубокими сценариями взаимодействия,
            уникальным дизайном, безграничной анимацией и технологической
            надёжностью.
          </p>

          <ul className="store-card__features" style={{ margin: "0 0 25px 0" }}>
            <li>
              <img src={clockIcon} alt="" />
              <span>от 14 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 250 000 ₽</span>
            </li>
            <li>
              <img src={analyticsIcon} alt="" />
              <span>
                Любые интеграции (продвинутая аналитика, заявки, CRM и другие)
              </span>
            </li>
            <li>
              <img src={seoIcon} alt="" />
              <span>
                Оптимизация под SEO, высокую нагрузку и все виды устройств
              </span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>
                Уникальный UX/UI-дизайн, полностью отражающий суть бренда
              </span>
            </li>
            <li>
              <img src={consultingIcon} alt="" />
              <span>
                <u>Бесплатная поддержка</u> 1 мес. после запуска
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="store-card__button">узнать цену</button>
          </a>
        </div>
      </div>
    </section>
  );
}
