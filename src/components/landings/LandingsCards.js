import "../../scss/OnlineStoresCards.scss";
import constructorImage from "../../images/landing1.png"; // твоя первая картинка
import customImage from "../../images/landing2.png"; // вторая картинка
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
          />

          <h3 className="store-card__title">Лендинг на конструкторе</h3>

          <p className="store-card__text">
            Подходит, если нужно быстро запуститься, протестировать идею или
            обновить страницу под акцию или продукт. Мы делаем такие лендинги на
            Tilda или Webflow — аккуратно, со вкусом и с маркетинговым
            фундаментом
          </p>

          <ul className="store-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 2 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 30 000 ₽</span>
            </li>
            <li>
              <img src={analyticsIcon} alt="" />
              <span>Подключение сбора заявок и аналитики</span>
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
              <span>Консультации по всем вопросам</span>
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
          />

          <h3 className="store-card__title">Кастомный лендинг под ключ</h3>

          <p className="store-card__text">
            Если вам нужен лендинг, который станет лицом бренда. Мы проектируем
            его с нуля — с продуманной логикой и дизайном, интеграциями,
            анимацией и оригинальной эстетикой, отражающей суть продукта
          </p>

          <ul className="store-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 10 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 120 000 ₽</span>
            </li>
            <li>
              <img src={analyticsIcon} alt="" />
              <span>
                Любые интеграции (продвинутая аналитика, заявки, CRM и другие)
              </span>
            </li>
            <li>
              <img src={seoIcon} alt="" />
              <span>Оптимизация под SEO, нагрузку и все виды устройств</span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>Уникальный дизайн, полностью отражающий суть бренда</span>
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
