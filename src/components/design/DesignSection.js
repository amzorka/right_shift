import "../../scss/ApproachSection.scss";
import icon1 from "../../icons/approach-1.png";
import icon2 from "../../icons/approach-2.png";
import icon3 from "../../icons/approach-3.png";
import icon4 from "../../icons/writing.png";
import icon5 from "../../icons/approach-4.png";
import icon6 from "../../icons/approach-5.png";

export default function ApproachSection() {
  const items = [
    {
      id: 1,
      icon: icon1,
      title: "1. Анализ и исследование",
      text: "Изучаем продукт, аудиторию и поведение пользователей",
    },
    {
      id: 2,
      icon: icon2,
      title: "2. Структура и логика интерфейса",
      text: "Выстраиваем логику интерфейса и сценарии взаимодействия",
    },
    {
      id: 3,
      icon: icon3,
      title: "3. Каркас и контентная основа",
      text: "Создаём схему экранов с иерархией и расставленными акцентами",
    },
    {
      id: 4,
      icon: icon4,
      title: "4. Визуальный стиль и интерфейс",
      text: "Разрабатываем качественный UI, отражающий характер бренда",
    },
    {
      id: 5,
      icon: icon5,
      title: "5. Анимация и детали",
      text: "Добавляем движение, отклик и микроэффекты, оживляя интерфейс",
    },
    {
      id: 6,
      icon: icon6,
      title: "6. Тестирование и сбор обратной связи",
      text: "Изучаем эффективность, метрики и помогаем развитию",
    },
  ];

  return (
    <section className="approach">
      <div className="approach__container">
        <h2 className="approach__title">НАШ ПОДХОД</h2>
        <p className="approach__text">
          Мы не просто создаем дизайн, мы стараемся создать понятный и приятный
          пользователю опыт взаимодействия. Погружаемся в бизнес, аудиторию и
          цели, чтобы каждый экран имел смысл. Сочетаем эстетику, аналитику и
          человеческое восприятие, чтобы добиться простого, логичного и
          приятного интерфейса.
        </p>

        <div className="approach__grid">
          {items.map((item) => (
            <div className="approach__card" key={item.id}>
              <img src={item.icon} alt="" className="approach__icon" />
              <div className="approach__info">
                <h3 className="approach__card-title">{item.title}</h3>
                <p className="approach__card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
