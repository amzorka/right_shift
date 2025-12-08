import "../../scss/DesignCards.scss";
import clockIcon from "../../icons/clock.png";
import moneyIcon from "../../icons/money.png";
import analyticsIcon from "../../icons/analytics.png";
import seoIcon from "../../icons/seo.png";
import designIcon from "../../icons/design.png";
import consultingIcon from "../../icons/consulting.png";

export default function OnlineStoresCards() {
  return (
    <section className="design-cards">
      <div className="design-cards__container">
        {/* Карточка 1 */}
        <div className="design-card">
          <h3 className="design-card__title">UX/UI-дизайн «Под ключ»</h3>

          <p className="design-card__text">
            Разработка интерфейса с нуля — от исследования до готового макета —
            с акцентом на восприятие, логику и результат
          </p>

          <ul className="design-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 30 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 160 000 ₽</span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                аудит продукта и аудитории → прототипирование → визуальный стиль
                → макеты экранов → гайдлайн для разработки
              </span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>
                дизайн не просто красивый, но работающий; адаптивность под
                устройства; фокус на удобстве user flow и эффективности
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="design-card__button">узнать цену</button>
          </a>
        </div>
        {/* Карточка 2 */}
        <div className="design-card">
          <h3 className="design-card__title">Редизайн и оптимизация</h3>

          <p className="design-card__text">
            Если текущий интерфейс больше не устраивает, мы оставим смысл, но
            обновиим визуал, структуру, юзабилити и сценарии
          </p>

          <ul className="design-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 7 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 80 000 ₽</span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                UX-аудит → выявление узких мест → переработка структуры
                интерфейса → обновлённый UI-стиль → тестирование сценариев
              </span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>
                меньше риска, высокий ROI; проект реализуется на базе
                существующего решения; меньше сроки, лучше результаты
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="design-card__button">узнать цену</button>
          </a>
        </div>

        {/* Карточка 3 */}

        <div className="design-card">
          <h3 className="design-card__title">Разработка дизайн-системы</h3>

          <p className="design-card__text">
            Создаём стандартизированный набор компонентов и правил дизайна,
            чтобы интерфейс мог расти вместе с ростом бренда/продукта/проекта{" "}
          </p>

          <ul className="design-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 7 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 50 000 ₽ (мин. пакет)</span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                библиотеки UI-компонентов (кнопки, формы, состояния) → цветовая
                палитра и типографика → гайдлайн и документация
              </span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>
                экономия времени на будущее развитие; брендинг + UX + UI
                объединены; подходит продуктам с потенциалом ростом
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="design-card__button">узнать цену</button>
          </a>
        </div>

        {/* Карточка 4 */}

        <div className="design-card">
          <h3 className="design-card__title">UX-исследование</h3>

          <p className="design-card__text">
            Глубокая работа с данными и поведением пользователей — чтобы дизайн
            не просто был красивым, а достигал целей бизнеса.
          </p>

          <ul className="design-card__features">
            <li>
              <img src={clockIcon} alt="" />
              <span>от 10 дней</span>
            </li>
            <li>
              <img src={moneyIcon} alt="" />
              <span>от 50 000 ₽</span>
            </li>

            <li>
              <img src={seoIcon} alt="" />
              <span>
                интервью, аналитика поведения → построение CJM → формирование
                UX-стратегии и сценариев → рекомендации
              </span>
            </li>
            <li>
              <img src={designIcon} alt="" />
              <span>
                инвестиция в стратегию; оптимизация кол-ва правок; подход
                «сначала анализ — потом действия»
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="design-card__button">узнать цену</button>
          </a>
        </div>
      </div>
    </section>
  );
}
