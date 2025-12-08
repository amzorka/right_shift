import "../../scss/AboutTeamSection.scss";
import tagImage from "../../images/long-live.png"; // граффити 172×172 (замени на свой путь)

export default function AboutTeamSection() {
  return (
    <section className="about-team">
      <div className="about-team__container">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="about-team__left">
          <h2 className="about-team__title">
            ПАРУ СЛОВ О НАШЕЙ
            <br />
            КОМАНДЕ И ПРИЧАСТНЫХ
          </h2>

          <p className="about-team__text">
            Мы — команда профессионалов, которые знают своё дело и по-настоящему
            его любят. Внутри right.shift есть всё, чтобы закрывать задачи
            бизнеса под ключ: 8 разработчиков, 3 маркетолога, 3 дизайнера,
            копирайтеры, бизнес-консультанты, 3D-дизайнеры, отдельная команда
            специалистов по ИИ. Мы работаем как единая система, быстро вникаем в
            суть задачи и фокусируемся на том, что действительно важно для её
            решения.
          </p>

          <p className="about-team__text">
            При этом наша сила не ограничивается только внутренней командой. У
            нас есть проверенное окружение и партнёры: мы сотрудничаем с{" "}
            <a href="http://gazgolder.com" className="about-team__link">
              творческим объединением Gazgolder
            </a>
            , фотографами и продакшн-командами для фото/видеосъёмок,
            музыкального сопровождения и креативных проектов. Благодаря хорошим
            связям в разных структурах и индустриях мы можем помогать бизнесу не
            только в digital, но и в сопутствующих задачах — от финансовых
            вопросов до различных коллабораций.
          </p>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="about-team__right">
          <img
            src={tagImage}
            alt="Long live developers"
            className="about-team__tag"
          />

          <div className="about-team__stats">
            <div className="about-team__stat">
              <p className="about-team__stat-caption">В разработке с</p>
              <p className="about-team__stat-number">
                2017 <span>года</span>
              </p>
            </div>

            <div className="about-team__stat">
              <p className="about-team__stat-caption">
                Создали и ввели в работу
              </p>
              <p className="about-team__stat-number">
                &gt; 30 <span>проектов</span>
              </p>
            </div>

            <div className="about-team__stat">
              <p className="about-team__stat-caption">В нашей команде</p>
              <p className="about-team__stat-number">
                &gt; 15 <span>человек</span>
              </p>
            </div>

            <div className="about-team__stat">
              <p className="about-team__stat-caption">Освоили более</p>
              <p className="about-team__stat-number">
                10 <span>ниш бизнеса</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
