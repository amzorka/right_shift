import "../../scss/OnlineStoresCards.scss";
import constructorImage from "../../images/store-constructor.png"; // твоя первая картинка
import customImage from "../../images/store-custom.png"; // вторая картинка
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

          <h3 className="store-card__title">Магазин на конструкторе</h3>

          <p className="store-card__text">
            Если нужно быстро запуститься или обновить устаревший сайт без
            затяжных этапов. Мы продумываем user flow, структуру, дизайн,
            контент и конверсию, чтобы магазин реально продавал и не выглядел
            шаблонно.
          </p>

          <ul className="store-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 7 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 120 000 ₽</span>
            </li>
            <li>
              <img src={analyticsIcon} alt="" />
              <span>Подключение платёжных систем и аналитики</span>
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
              <span>
                Консультации по структуре каталога и пользовательскому пути
              </span>
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

          <h3 className="store-card__title">Кастомный интернет-магазин</h3>

          <p className="store-card__text">
            Для бизнеса, которому важен масштаб, логика продаж и гибкость.
            Создаём уникальные магазины с нуля — со сложной архитектурой,
            множественными интеграциями, уникальным дизайном и потенциалом к
            масштабированию.
          </p>

          <ul className="store-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 45 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 400 000 ₽</span>
            </li>
            <li>
              <img src={analyticsIcon} alt="" />
              <span>
                Любые интеграции (банки, CRM, CMS, аналитика, ИИ и т.д.)
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

          <button className="store-card__button">узнать цену</button>
        </div>
      </div>
    </section>
  );
}
