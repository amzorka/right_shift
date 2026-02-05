import "../../scss/ContentCards.scss";
import dot from "../../icons/dot.png";
import trend from "../../icons/trend.png";

export default function OnlineStoresCards() {
  return (
    <section className="design-cards">
      <div className="design-cards__container">
        {/* Карточка 1 */}
        <div className="content-card first-card">
          <h3 className="content-card__title">AI-генерация фото и видео</h3>

          <p className="content-card__text">
            Мы создаём каталожные, имиджевые и рекламные материалы без реальной
            съёмки — быстро, реалистично и под стиль бренда.
          </p>

          <ul className="content-card__features">
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>каталожные фото товаров и предметов</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>имиджевые кампейны и рекламные сцены</span>
            </li>

            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>lifestyle-контент с моделями и окружением</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>AI-видео для рекламы, лендингов и соцсетей</span>
            </li>
          </ul>

          <div className="trend">
            <img
              src={trend}
              alt="trend"
              style={{ width: "15px", height: "auto" }}
            />
            <p>тренд</p>
          </div>

          <a href="#contact">
            <button className="content-card__button">узнать цену</button>
          </a>
        </div>
        {/* Карточка 2 */}
        <div className="content-card">
          <h3 className="content-card__title">3D-дизайн и визуализация</h3>

          <p className="content-card__text">
            Мы создаём 3D-объекты, сцены и анимации, которые показывают продукт
            также качественно, как при реальных съемках.
          </p>

          <ul className="content-card__features">
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>предметная визуализация и pack-shots</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>3D-сцены с окружением и светом</span>
            </li>

            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>анимации продуктов и материалов</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>3D-концепты, цифровые прототипы и другое</span>
            </li>
          </ul>

          <a href="#contact">
            <button className="content-card__button">узнать цену</button>
          </a>
        </div>

        {/* Карточка 3 */}

        <div className="content-card">
          <h3 className="content-card__title">Графический дизайн</h3>

          <p className="content-card__text">
            Мы создаём визуальные материалы, которые объясняют продукт,
            подчёркивают стиль бренда и формируют единый визуальный язык.
          </p>

          <ul className="content-card__features">
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>рекламная графика (баннеры, промо-креативы...)</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>оформление соцсетей и рекламных кампаний</span>
            </li>

            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>презентации, коммерческие предложения, питчи</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>карточки для маркетплейсов и многое другое</span>
            </li>
          </ul>

          <a href="#contact">
            <button className="content-card__button">узнать цену</button>
          </a>
        </div>

        {/* Карточка 4 */}

        <div className="content-card">
          <h3 className="content-card__title">Фото/видеосъемка Москва</h3>

          <p className="content-card__text">
            Если нужен реальный материал — мы снимаем качественно, дорого и
            художественно, под ваш бренд и любую задачу.
          </p>

          <ul className="content-card__features">
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>каталожная и предметная фотосъёмка</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>fashion и имиджевые кампейны</span>
            </li>

            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>съёмка для сайта, соцсетей, маркетинга</span>
            </li>
            <li>
              <img src={dot} alt="" style={{ width: "8px", height: "auto" }} />
              <span>
                рекламная видеосъёмка для брендов и продуктов <br />
                <a href="https://gazgolder.com" className="gazgolder">
                  при уч. т.о. <u>Gazgolder</u>
                </a>
              </span>
            </li>
          </ul>

          <a href="#contact">
            <button className="content-card__button">узнать цену</button>
          </a>
        </div>
      </div>
    </section>
  );
}
